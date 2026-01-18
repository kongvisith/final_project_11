const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const EmployeeModel = require("./models/Employee");

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://127.0.0.1:27017/employee")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userExist = await EmployeeModel.findOne({ email });
    if (userExist) return res.status(400).json("This email already exists!");
    const hashedPassword = await bcrypt.hash(password, 10);
    await EmployeeModel.create({ name, email, password: hashedPassword });
    res.json("Account created successfully");
  } catch (err) {
    res.status(500).json("Server error");
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await EmployeeModel.findOne({ email });
    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (match) res.json("Success");
      else res.status(401).json("Incorrect password!");
    } else res.status(404).json("Email not found!");
  } catch (err) {
    res.status(500).json("Server error");
  }
});

app.listen(3001, () => console.log("Server running on port 3001"));

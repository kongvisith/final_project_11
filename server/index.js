const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./models/Employee");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/employee");

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

 
  EmployeeModel.findOne({ email: email, password: password })
    .then((user) => {
      if (user) {
        
        res.status(400).json("Email និង Password នេះមានក្នុងប្រព័ន្ធរួចហើយ!");
      } else {
        
        EmployeeModel.create({ name, email, password })
          .then((employees) => res.json(employees))
          .catch((err) => res.status(500).json(err));
      }
    })
    .catch((err) => res.status(500).json(err));
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  EmployeeModel.findOne({ email: email, password: password })
    .then((user) => {
      if (user) {
        res.json("Success");
      } else {
        res.status(401).json("Email ឬ Password មិនត្រឹមត្រូវ!");
      }
    })
    .catch((err) => res.status(500).json(err));
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
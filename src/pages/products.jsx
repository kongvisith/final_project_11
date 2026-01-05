import React, { useState } from "react";

export default function Products() {
  // useState -> store data, store state
  const [currentData, setCurrentData] = useState("Hi useState");

  const test = () => {
    setCurrentData("hi");
  };

  console.log("currentData:", currentData);

  return <button onClick={test}>click to see the change</button>;
}

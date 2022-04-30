import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Form } from "./Components/Form";
import EmployeeDetails from "./Components/EmployeeDetails";

function App() {
  return (
    <div className="App">
      <Form />
      <EmployeeDetails />
    </div>
  );
}

export default App;

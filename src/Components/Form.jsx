import axios from "axios";
import { useState } from "react";

export const Form = () => {
  const [formState, setFormState] = useState({
    id: "",
    name: "",
    age: "",
    address: "",
    department: "",
    salary: "",
    marital_status: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8000/employees", formState).then(() => {
      alert("user created successfully");
    });
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Form </h2>
      <input
        type="text"
        value={formState.name}
        id="name"
        placeholder="Enter Your Name"
        onChange={handleChange}
      />
      <input
        type="number"
        value={formState.age}
        id="age"
        placeholder="Enter Age"
        onChange={handleChange}
      />
      <input
        type="text"
        value={formState.address}
        id="address"
        placeholder="Enter Address"
        onChange={handleChange}
      />
      <select
        name=""
        id="department"
        value={formState.department}
        onChange={handleChange}
      >
        <option value="">Choose the department</option>
        <option value="IT">IT Department</option>
        <option value="Marketing">Marketing</option>
        <option value="Production">Production</option>
        <option value="Management">Management</option>
      </select>
      <input
        type="number"
        value={formState.salary}
        id="salary"
        placeholder="Enter Salary"
        onChange={handleChange}
      />
      <select
        name=""
        id="marital_status"
        value={formState.marital_status}
        onChange={handleChange}
      >
        <option value="">Choose Marital Status</option>
        <option value="Married">Married</option>
        <option value="Unmarried">Unmarrried</option>
      </select>

      <input type="submit" value="submit" />
    </form>
  );
};

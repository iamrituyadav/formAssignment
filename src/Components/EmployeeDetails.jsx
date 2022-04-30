import { useEffect, useState } from "react";
import axios from "axios";

export default function EmployeeDetails() {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/employees").then((res) => {
      console.log("res", res.data);
      setDetails(res.data);
    });
  }, []);

  console.log("details", details);

  return (
    <div>
      <h2>Details</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Marital Status</th>
          </tr>
        </thead>
        <tbody>
          {details.map((e) => {
            return (
              <>
                <tr>
                  <td>{e.name}</td>
                  <td>{e.age}</td>
                  <td>{e.address}</td>
                  <td>{e.department}</td>
                  <td>{e.salary}</td>
                  <td>{e.marital_status}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

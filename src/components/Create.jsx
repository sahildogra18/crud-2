import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Create() {
  let [name, setName] = useState("");
  let [age, setAge] = useState("");
  let [email, setEmail] = useState("");

  let navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("https://675c1007fe09df667f627b12.mockapi.io/crud", {
        employee_name: name,
        employee_age: age,
        employee_email: email,
      })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Error posting data:", error);
      });
  }
  return (
    <div className="container mt-4">
      <Link to={"/"}>
        <button className="btn  btn-warning">Get Back to Read page</button>
      </Link>
      <div className="bg-primary p-4 text-center">
        <h1>Create Data</h1>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Enter Name:</label>
              <input
                type="text"
                placeholder="Name"
                className="form-control"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Enter Age:</label>
              <input
                type="number"
                placeholder="Age"
                className="form-control"
                onChange={(e) => {
                  setAge(e.target.value);
                }}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Enter Email:</label>
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className="d-grid">
              <input type="submit" value="Submit" className="btn btn-primary" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Create;

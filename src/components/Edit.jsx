import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Edit() {
  let [id, setId] = useState(0);
  let [name, setName] = useState("");
  let [age, setAge] = useState("");
  let [email, setEmail] = useState("");

  let navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setAge(localStorage.getItem("age"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, []);

  function handleUpdate(e) {
    e.preventDefault();
    // update lyi put use krange
    axios
      .put(`https://675c1007fe09df667f627b12.mockapi.io/crud/${id}`, {
        employee_name: name,
        employee_age: age,
        employee_email: email,
      })
      .then(() => {
        navigate("/");
      });
  }
  return (
    <div>
      <div className="container mt-4">
        <Link to={"/"}>
          <button className="btn  btn-warning">Get Back to Read page</button>
        </Link>
        <div className="bg-primary p-4 text-center">
          <h1>Update Data</h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={handleUpdate}>
              <div className="mb-3">
                <label className="form-label">Enter Name:</label>
                <input
                  type="text"
                  placeholder="Name"
                  className="form-control"
                  value={name}
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
                  value={age}
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
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>

              <div className="d-grid">
                <input
                  type="submit"
                  value="update"
                  className="btn btn-primary"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit;

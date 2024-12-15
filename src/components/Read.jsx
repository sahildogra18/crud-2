import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Read() {
  let [apiData, setApiData] = useState([]);
  function getData() {
    axios
      .get("https://675c1007fe09df667f627b12.mockapi.io/crud")
      .then((response) => {
        setApiData(response.data);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  function handleDelete(id) {
    axios
      .delete(`https://675c1007fe09df667f627b12.mockapi.io/crud/${id}`)
      .then(() => {
        getData();
      });
  }

  function setDataToStorage(id, name, age, email) {
    //key value di form ch houga data local storage ch score
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    localStorage.setItem("email", email);
  }
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="mb-2 mt-2">
            <Link to={"/create"}>
              <button className="btn  btn-primary">Create New Data</button>
            </Link>
          </div>
          <table className="table table-bordered table-striped table-dark table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {apiData.map((data) => {
                return (
                  <>
                    <tr>
                      <th>{data.id}</th>
                      <td>{data.employee_name}</td>
                      <td>{data.employee_age}</td>
                      <td>{data.employee_email}</td>
                      <td>
                        <Link to={"/edit"}>
                          <button
                            className="btn  btn-primary"
                            onClick={() => {
                              setDataToStorage(
                                data.id,
                                data.employee_name,
                                data.employee_age,
                                data.employee_email
                              );
                            }}
                          >
                            EDIT
                          </button>
                        </Link>
                      </td>
                      <td>
                        <button
                          className="btn  btn-danger"
                          onClick={() => {
                            if (
                              window.confirm(
                                "are you really want to delete ???"
                              )
                            ) {
                              handleDelete(data.id);
                            }
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Read;

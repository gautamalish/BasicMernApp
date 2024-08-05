import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Update = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [error, setError] = useState("");
  const { id } = useParams();
  const getSingleUser = async () => {
    const response = await fetch(`http://localhost:7000/${id}`);

    const result = await response.json();
    if (!response.ok) {
      setError(result.error);
    }
    if (response.ok) {
      setEmail(result.email);
      setError("");
      setAge(result.age);
      setName(result.name);
    }
  };
  useEffect(() => {
    getSingleUser();
  }, []);
  async function handleUpdate(e) {
    e.preventDefault();
    const updatedUser = { name, email, age };

    const response = await fetch(`http://localhost:7000/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updatedUser),
      headers: {
        "Content-type": "application/json",
      },
    });
    const result = await response.json();

    if (!response.ok) {
      console.log(result.error);
      setError(result.error);
    }
    if (response.ok) {
      console.log(result);
      setError("");
      navigate("/");
    }
  }
  return (
    <div className="container my-2">
      {error && (
        <div class="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <h2 className="text-center">Edit the data</h2>
      <form onSubmit={handleUpdate}>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">Name</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              id="inputEmail3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">Age</label>
          <div className="col-sm-10">
            <input
              type="number"
              className="form-control"
              id="inputPassword3"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Update;

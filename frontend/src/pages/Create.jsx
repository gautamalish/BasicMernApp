import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const addUser = { name, email, age };

    const response = await fetch("http://localhost:7000/", {
      method: "POST",
      body: JSON.stringify(addUser),
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
      setEmail("");
      setError("");
      setAge("");
      setName("");
      navigate("/");
    }
  };
  return (
    <div className="container my-2">
      {error && (
        <div class="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <h2 className="text-center">Enter the data</h2>
      <form onSubmit={handleSubmit}>
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

export default Create;

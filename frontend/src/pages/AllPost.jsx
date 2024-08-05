import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const AllPost = () => {
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  async function getData() {
    const response = await fetch("http://localhost:7000");
    const result = await response.json();

    if (!response) {
      setError(result.error);
    }
    if (response) {
      setData(result);
    }
  }
  const handleDelete = async (id) => {
    const response = await fetch(`http://127.0.0.1:7000/${id}`, {
      method: "DELETE",
    });
    const result = await response.json();
    if (!response) {
      setError(result.error);
    }
    if (response) {
      getData();
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container my-2">
      {error && (
        <div class="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <h2 className="text-center">All data</h2>
      <div className="row">
        {data.map((item) => {
          return (
            <div key={item._id} className="col-3">
              <div className="card">
                <div className="card-body m-auto">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.email}</p>
                  <p className="text-muted">{item.age}</p>
                  <button
                    className="btn btn-danger me-1"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </button>
                  <Link to={`${item._id}`} className="btn btn-primary">
                    Edit
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllPost;

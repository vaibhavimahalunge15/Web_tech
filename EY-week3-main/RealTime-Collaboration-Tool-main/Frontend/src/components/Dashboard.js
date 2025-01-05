import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const [documents, setDocuments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/docs", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((response) => setDocuments(response.data))
      .catch((error) => console.error(error));
  }, []);

  const createDocument = async () => {
    const response = await axios.post("http://localhost:5000/api/docs/create", {}, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    navigate(`/editor/${response.data._id}`);
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={createDocument}>Create New Document</button>
      <ul>
        {documents.map((doc) => (
          <li key={doc._id}>
            <button onClick={() => navigate(`/editor/${doc._id}`)}>
              {doc.title || "Untitled Document"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
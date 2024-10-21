import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [secrets, setSecrets] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/dashboard`)
      .then((res) => res.json())
      .then((data) => setSecrets(data.secrets))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {secrets.map((secret, index) => (
        <div key={index}>
          <p>{secret.text}</p>
          <button onClick={() => handleLike(index)}>Like {secret.likes}</button>
        </div>
      ))}
    </div>
  );
};

const handleLike = (index) => {
  fetch(`${process.env.REACT_APP_BACKEND_URL}/like/${index}`, {
    method: "POST",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Liked successfully", data);
    })
    .catch((err) => console.error(err));
};

export default Dashboard;

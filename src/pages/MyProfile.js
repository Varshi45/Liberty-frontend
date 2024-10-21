import React, { useState, useEffect } from "react";

const MyProfile = () => {
  const [secrets, setSecrets] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/my_posts`)
      .then((res) => res.json())
      .then((data) => setSecrets(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>My Profile</h1>
      {secrets.map((secret, index) => (
        <div key={index}>
          <p>{secret.text}</p>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

const handleDelete = (index) => {
  fetch(`${process.env.REACT_APP_BACKEND_URL}/delete/${index}`, {
    method: "GET",
  })
    .then(() => {
      console.log("Deleted successfully");
      window.location.reload();
    })
    .catch((err) => console.error(err));
};

export default MyProfile;

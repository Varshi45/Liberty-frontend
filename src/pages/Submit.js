import React, { useState } from "react";

const Submit = () => {
  const [secret, setSecret] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_BACKEND_URL}/submit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ secrets: secret }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Secret submitted successfully", data);
        window.location.href = "/my_profile";
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h1>Submit a Secret</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={secret}
          onChange={(e) => setSecret(e.target.value)}
          placeholder="Your secret..."
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Submit;

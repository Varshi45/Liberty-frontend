import React, { useEffect } from "react";

const Logout = () => {
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/logout`)
      .then(() => {
        console.log("Logged out successfully");
        window.location.href = "/";
      })
      .catch((err) => console.error(err));
  }, []);

  return <h1>Logging out...</h1>;
};

export default Logout;

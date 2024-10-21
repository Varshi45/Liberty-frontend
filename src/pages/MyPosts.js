import React, { useState, useEffect } from "react";

const MyPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/my_posts`)
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>My Posts</h1>
      {posts.map((post, index) => (
        <div key={index}>
          <p>{post.text}</p>
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

export default MyPosts;

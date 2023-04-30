import React, { useState, useEffect } from "react";
import "../styles/Admin.css";

function Admin() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="admin">
      <h2>Admin Panel</h2>
      {users.map((user) => (
        <div className="user" key={user.id}>
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
        </div>
      ))}
    </div>
  );
}

export default Admin;

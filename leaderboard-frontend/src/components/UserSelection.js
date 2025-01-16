import React, { useState, useEffect } from "react";
import axios from "axios";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

const UserSelection = ({ onUserSelect }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from backend on initial load
    axios.get("http://localhost:5000/api/users")
      .then((res) => setUsers(res.data))
      .catch((error) => console.error("Error fetching users:", error));

    // Listen for leaderboard updates and update the users list
    socket.on("update-leaderboard", () => {
      axios.get("http://localhost:5000/api/users")
        .then((res) => setUsers(res.data))
        .catch((error) => console.error("Error fetching updated leaderboard:", error));
    });

    // Cleanup the socket listener on component unmount
    return () => {
      socket.off("update-leaderboard");
    };
  }, []);

  return (
    <div>
      <h2>Select a User to Claim Points</h2>
      
      {/* Dropdown for user selection */}
      <div>
        <select onChange={(e) => onUserSelect(e.target.value)} defaultValue="">
          <option value="">Select User</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>

      {/* Or display users in a list */}
      <h3>Users List</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.total_points} points
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserSelection;

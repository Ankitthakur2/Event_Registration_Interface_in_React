import React from "react";
import "./RegisteredUsersList.css";

function RegisteredUsersList({ users, showUserDetails }) {
  return (
    <div className="registered-users-list-container">
      <h2 className="registered-users-list-heading">
        Registered Users for the Event
      </h2>
      {users.map((user, index) => (
        <div className="registered-user" key={index}>
          <span className="registered-user-name">{user.name}</span>
          <button
            className="registered-user-button"
            onClick={() => showUserDetails(user)}
          >
            View Details
          </button>
        </div>
      ))}
    </div>
  );
}

export default RegisteredUsersList;

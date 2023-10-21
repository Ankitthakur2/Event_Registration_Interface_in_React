import React from "react";
import "./UserDetails.css";

function UserDetails({ user, closeUserDetails }) {
  return (
    <div className="user-details-container">
      <h2 className="user-details-heading">User Details</h2>
      <div className="user-details-item">
        <span className="user-details-label">Name:</span>
        <span className="user-details-value">{user.name}</span>
      </div>
      <div className="user-details-item">
        <span className="user-details-label">Email:</span>
        <span className="user-details-value">{user.email}</span>
      </div>
      <div className="user-details-item">
        <span className="user-details-label">Phone Number:</span>
        <span className="user-details-value">{user.phoneNumber}</span>
      </div>
      <div className="user-details-item">
        <span className="user-details-label">Bio:</span>
        <span className="user-details-value">{user.bio}</span>
      </div>
      <button className="user-details-button" onClick={closeUserDetails}>
        Close
      </button>
    </div>
  );
}

export default UserDetails;

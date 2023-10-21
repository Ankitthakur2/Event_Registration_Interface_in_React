import React, { useState, useEffect } from "react";

import RegistrationForm from "./components/RegistrationForm";
import RegisteredUsersList from "./components/RegisteredUsersList";
import UserDetails from "./components/UserDetails";

function App() {
  const [users, setUsers] = useState([]);
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const savedUsers =
      JSON.parse(localStorage.getItem("registeredUsers")) || [];
    setUsers(savedUsers);
  }, []);

  const addUser = (userData) => {
    const newUser = {
      ...userData,
      timestamp: new Date().toLocaleString()
    };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem("registeredUsers", JSON.stringify(updatedUsers));
  };

  const openUserDetails = (user) => {
    setSelectedUser(user);
    setShowUserDetails(true);
  };

  const closeUserDetails = () => {
    setShowUserDetails(false);
  };

  return (
    <div className="App">
      <RegistrationForm addUser={addUser} />
      <RegisteredUsersList users={users} showUserDetails={openUserDetails} />
      {showUserDetails && (
        <UserDetails user={selectedUser} closeUserDetails={closeUserDetails} />
      )}
    </div>
  );
}

export default App;

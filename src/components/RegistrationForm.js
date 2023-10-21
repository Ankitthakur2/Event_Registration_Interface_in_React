import React, { useState, useEffect } from "react";
import "./RegistrationForm.css";
import eventsImage from "../Images/Events.jpg";
function RegistrationForm({ addUser }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    bio: ""
  });

  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (
      !formData.name ||
      !formData.email ||
      !formData.phoneNumber ||
      !formData.bio
    ) {
      errors.allFields = "All fields are required";
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(formData.email)) {
      errors.email = "Invalid email format";
    }

    if (!/^\d{10}$/.test(formData.phoneNumber)) {
      errors.phoneNumber = "Invalid phone number";
    }

    if (!errors.allFields && !errors.email && !errors.phoneNumber) {
      addUser(formData);
      setFormData({ name: "", email: "", phoneNumber: "", bio: "" });
    }
    setValidationErrors(errors);
  };

  return (
    <div
      className="registration-form"
      style={{
        backgroundImage: `url(${eventsImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        height: "100vh"
      }}
    >
      <h1>Event Registration</h1>
      <form onSubmit={handleSubmit} className="form-style">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Phone Number"
          required
        />
        <textarea
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          placeholder="Bio"
          required
        ></textarea>
        <button type="submit" className="Submit">
          Submit
        </button>
      </form>
      {validationErrors.allFields && (
        <p className="error">{validationErrors.allFields}</p>
      )}
      {validationErrors.email && (
        <p className="error">{validationErrors.email}</p>
      )}
      {validationErrors.phoneNumber && (
        <p className="error">{validationErrors.phoneNumber}</p>
      )}
    </div>
  );
}

export default RegistrationForm;

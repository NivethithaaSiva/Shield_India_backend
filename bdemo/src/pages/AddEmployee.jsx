import React, { useState } from "react";
import api from "../services/api";

const AddEmployee = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    role: "EMPLOYEE",
    department: "",
    designation: "",
    phoneNumber: "",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    isActive: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/employees", form);
      alert("Employee added successfully!");
    } catch (error) {
      alert("Error adding employee");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" value={form.username} onChange={handleChange} placeholder="Username" required />
      <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Password" required />
      <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="First Name" required />
      <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last Name" required />
      <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" required />
      <input name="department" value={form.department} onChange={handleChange} placeholder="Department" required />
      <input name="designation" value={form.designation} onChange={handleChange} placeholder="Designation" required />
      <input name="phoneNumber" value={form.phoneNumber} onChange={handleChange} placeholder="Phone Number" required />
      <label>
        Active:
        <input name="isActive" type="checkbox" checked={form.isActive} onChange={handleChange} />
      </label>
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default AddEmployee;
import React, { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

const AddItem = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    category: "",
    quantity: 0,
    price: 0,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/items", form);
      alert("Item added successfully!");
      navigate("/items");
    } catch (error) {
      alert("Error adding item");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Add Item</h2>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required className="input mb-2 w-full" />
      <input name="description" value={form.description} onChange={handleChange} placeholder="Description" required className="input mb-2 w-full" />
      <input name="category" value={form.category} onChange={handleChange} placeholder="Category" required className="input mb-2 w-full" />
      <input name="quantity" type="number" value={form.quantity} onChange={handleChange} placeholder="Quantity" required className="input mb-2 w-full" />
      <input name="price" type="number" value={form.price} onChange={handleChange} placeholder="Price" required className="input mb-2 w-full" />
      <button type="submit" className="btn btn-primary w-full">Add Item</button>
    </form>
  );
};

export default AddItem;

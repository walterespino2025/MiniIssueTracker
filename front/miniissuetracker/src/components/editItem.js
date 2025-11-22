import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';

const EditItem = () => {
  const { id } = useParams(); // Get ID from URL params
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    const response = await api.get(`/${id}`);
    setName(response.data.name);
    setDescription(response.data.description);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.put(`/${id}`, { name, description });
    navigate('/'); // Redirect to the list view after update
  };

  return (
    <div>
      <h2>Edit Item</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Description:</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <button type="submit">Update Item</button>
      </form>
    </div>
  );
};

export default EditItem;

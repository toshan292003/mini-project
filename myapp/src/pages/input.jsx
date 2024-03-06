import React, { useState } from 'react';
import axios from 'axios';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    field1: '',
    field2: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/data', { data: formData });
      console.log(response.data);
      setFormData({
        field1: '',
        field2: '',
      });
      toast.success("Data Inserted Successfully!");
    } catch (error) {
      console.error('Error submitting data:', error);
      toast.error("Error in Inserting Data");
    }
  };

  return (
    <div>
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="field1">Field 1:</label>
          <input
            type="text"
            id="field1"
            name="field1"
            value={formData.field1}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="field2">Field 2:</label>
          <input
            type="text"
            id="field2"
            name="field2"
            value={formData.field2}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;

import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone_1: '',
    phone_2: ''
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
      const response = await axios.post('http://localhost:3001/app/details', formData);
      console.log(response.data);
      setFormData({
        name: '',
        phone_1: '',
        phone_2: ''
      });
      toast.success("Data Inserted Successfully!");
    } catch (error) {
      console.error('Error submitting data:', error);
      toast.error("This Entry Already Exists!");
    }
  };

  return (
    <div>
      <h2>Whom shall we alert when you are in trouble?</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="field1">Your Name:</label>
          <input type="text" name="name" value={formData.field1} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="field2">Phone 1:</label>
          <input type="text" name="phone_1" value={formData.field2} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="field2">Phone 2:</label>
          <input type="text" name="phone_2" value={formData.field2} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;
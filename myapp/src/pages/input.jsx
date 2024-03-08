import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './input.css';

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
    <div className='input'>
      <h2>Whom shall we alert when you are in trouble?</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder='Your Name' value={formData.field1} onChange={handleChange} />
        <input type="text" name="phone_1" placeholder='Emergency Phone 1' value={formData.field2} onChange={handleChange} />
        <input type="text" name="phone_2" placeholder='Emergency Phone 2' value={formData.field2} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;
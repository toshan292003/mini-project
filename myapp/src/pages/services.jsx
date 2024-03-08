import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './input.css';

const Services = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    type: ''
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
      const response = await axios.post('http://localhost:3001/app/booking', formData);
      console.log(response.data);
      setFormData({
        name: '',
        date: '',
        type: ''
      });
      toast.success("Data Inserted Successfully!");
    } catch (error) {
      console.error('Error submitting data:', error);
      toast.error("This Entry Already Exists!");
    }
  };

  return (
    <div className='input'>
      <h2>Bookings for MED Services</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder='Your Name' value={formData.name} onChange={handleChange} />
        <input type="date" name="date" value={formData.date} onChange={handleChange} />
        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="Special Care">Special Care</option>
          <option value="Ambulance Services">Ambulance Services</option>
          <option value="First Aid Stations">First Aid Stations</option>
          <option value="Medical Tents or Clinics">Medical Tents or Clinics</option>
          <option value="Hydration Stations">Hydration Stations</option>
          <option value="Massage Therapy">Massage Therapy</option>
          <option value="Respiratory Care Services">Respiratory Care Services</option>
          <option value="Post-event Recovery Services">Post-event Recovery Services</option>
          <option value="Vaccination Clinics">Vaccination Clinics</option>
          <option value="Telemedicine Services">Telemedicine Services</option>
        </select>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Services;
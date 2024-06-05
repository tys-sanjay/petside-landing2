import React, { useState } from 'react';
import axios from 'axios';

function ContactForm() {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const proxyURL = 'http://localhost:3001/contact'; // Use your proxy server URL

    try {
      const response = await axios.post(proxyURL, formData);
      console.log('Success!', response.data);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
     return(

        <form class="row g-3 pt-2" onSubmit={handleSubmit}>
             <div class="col-md-6">
          <input type="text" class="form-control" name="name" id="name" placeholder="Name" value={formData.name}
          onChange={handleChange} required/>
        </div>
        <div class="col-md-6">
          <input type="text" class="form-control" name="message" id="message" placeholder="City" value={formData.message}
          onChange={handleChange} required/>
        </div>
        <div class="col-md-6">
          <input type="text" class="form-control" name="breed" id="breed" placeholder="Dog Breed" value={formData.breed}
          onChange={handleChange} required/>
        </div>
        <div class="col-md-6">
          <input type="text" class="form-control" name="age" id="age" placeholder="Dog Age" value={formData.age}
          onChange={handleChange} required/>
        </div>
        <div class="col-md-6">
          <input type="email" class="form-control" name="email" id="email" placeholder="Email" value={formData.email}
          onChange={handleChange} required/>
        </div>
        <div class="col-md-6">
          <input type="text" class="form-control" name="number" id="number" placeholder="Mobile Number" value={formData.number}
          onChange={handleChange} required/>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-dark px-5">Submit</button>
        </div>
      </form>
     )
}
export default ContactForm;
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'; // Import axios for HTTP requests
import {Link, useNavigate } from 'react-router-dom';

const Admin = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleBack = () => {
    navigate(-1); // This will navigate back to the previous page
};


  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      alert('No file selected!');
      return;
    }

    // Create formData object
    const formData = new FormData();
    formData.append('csvFile', selectedFile);

    try {
      // Send POST request to backend
      const response = await axios.post('http://localhost:8080/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
      alert('File uploaded successfully!');
    } catch (error) {
      console.error('Error uploading file: ', error);
      alert('Please Upload CSV File Have Same Parameter as Database Assign Otherwise Make New Database');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Upload CSV File to Database</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">Choose File</label>
          <input 
            className="form-control" 
            type="file" 
            id="formFile" 
            onChange={handleFileChange} 
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <button type="button" className="btn btn-primary ms-md-5" onClick={handleBack}>Back</button>
        <Link to='/' className='btn btn-danger ms-md-5' >Home</Link>
      </form>
    </div>
  );
};

export default Admin;

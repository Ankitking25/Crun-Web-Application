// Create.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Validation from './ValidationForm'; // Import the validation function
import { Link } from 'react-router-dom';

const Create = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    product: "",
    msi_number: "",
    serial_Number: "",
    cost: ""
  });
  const [errors, setErrors] = useState({}); // State to hold validation errors

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form inputs
    const validationErrors = Validation(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return; // Exit if there are validation errors
    }

    // If validation passes, proceed with form submission
    axios.post('http://localhost:8080/csvdata', values)
      .then(res => {
        console.log(res);
        navigate('/agent');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="container mt-4">
      <Link to="/agent" className="btn btn-danger">Back</Link>
      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="row">
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              onChange={e => setValues({ ...values, username: e.target.value })}
              name="username"
              className="form-control"
              id="username"
            />
            {errors.username && <div className="text-danger">{errors.username}</div>}
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="product" className="form-label">Product</label>
            <input
              type="text"
              onChange={e => setValues({ ...values, product: e.target.value })}
              name="product"
              className="form-control"
              id="product"
            />
            {errors.product && <div className="text-danger">{errors.product}</div>}
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="msi_number" className="form-label">MSI Number</label>
            <input
              type="text"
              onChange={e => setValues({ ...values, msi_number: e.target.value })}
              name="msi_number"
              className="form-control"
              id="msi_number"
            />
            {errors.msi_number && <div className="text-danger">{errors.msi_number}</div>}
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="serial_Number" className="form-label">Serial Number</label>
            <input
              type="text"
              onChange={e => setValues({ ...values, serial_Number: e.target.value })}
              name="serial_Number"
              className="form-control"
              id="serial_Number"
            />
            {errors.serial_Number && <div className="text-danger">{errors.serial_Number}</div>}
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="cost" className="form-label">Cost</label>
            <input
              type="text"
              onChange={e => setValues({ ...values, cost: e.target.value })}
              name="cost"
              className="form-control"
              id="cost"
            />
            {errors.cost && <div className="text-danger">{errors.cost}</div>}
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Create;

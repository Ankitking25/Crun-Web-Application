import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Update = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [values, setValues] = useState({
    username: '',
    product: '',
    msi_number: '',
    serial_Number: '',
    cost: '',
  });

  useEffect(() => {
    axios.get(`http://localhost:8080/read/${id}`)
      .then(res => {
        const data = res.data[0];
        setValues({
          username: data.username,
          product: data.product,
          msi_number: data.msi_number,
          serial_Number: data.serial_Number,
          cost: data.cost,
        });
      })
      .catch(err => console.log(err));
  }, [id]);

  const handleUpdate = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:8080/update/${id}`, values)
      .then(res => {
        console.log(res);
        navigate('/agent');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4">
        <div className="card-header text-center">
          <h2>Update Data</h2>
        </div>
        <form className="mt-4" onSubmit={handleUpdate}>
          <div className="row">
            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label htmlFor="username" className="form-label">Username</label>
              <input type="text" value={values.username} onChange={e => setValues({ ...values, username: e.target.value })} name="username" className="form-control" id="username" />
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label htmlFor="product" className="form-label">Product</label>
              <input type="text" value={values.product} onChange={e => setValues({ ...values, product: e.target.value })} name="product" className="form-control" id="product" />
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label htmlFor="msi_number" className="form-label">MSI Number</label>
              <input type="text" value={values.msi_number} onChange={e => setValues({ ...values, msi_number: e.target.value })} name="msi_number" className="form-control" id="msi_number" />
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label htmlFor="serial_Number" className="form-label">Serial Number</label>
              <input type="text" value={values.serial_Number} onChange={e => setValues({ ...values, serial_Number: e.target.value })} name="serial_Number" className="form-control" id="serial_Number" />
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label htmlFor="cost" className="form-label">Cost</label>
              <input type="text" value={values.cost} onChange={e => setValues({ ...values, cost: e.target.value })} name="cost" className="form-control" id="cost" />
            </div>
            <div className="d-flex justify-content-between mt-3">
              <NavLink to="/agent" className="btn btn-danger">Back</NavLink>
              <button type="submit" className="btn btn-primary">Update</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;

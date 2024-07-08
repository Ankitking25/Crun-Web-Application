import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Agent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/csvdata')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete('http://localhost:8080/delete/' + id)
      .then(res => {
        // Update the state to remove the deleted item
        setData(prevData => prevData.filter(item => item.ID !== id));
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="container mt-5">
      <Navbar />
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>CSV Data</h2>
        <Link to="/create" className='btn btn-primary'>Add Data</Link>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Product</th>
            <th>MSI Number</th>
            <th>Serial Number</th>
            <th>Cost</th>
            <th className='text-center'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((csvdata, index) => (
            <tr key={index}>
              <td>{csvdata.ID}</td>
              <td>{csvdata.username}</td>
              <td>{csvdata.product}</td>
              <td>{csvdata.msi_number}</td>
              <td>{csvdata.serial_Number}</td>
              <td>{csvdata.cost}</td>
              <td className="d-flex justify-content-center">
                <Link to={`/read/${csvdata.ID}`} className="btn btn-warning mx-2">Read</Link>
                <Link to={`/edit/${csvdata.ID}`} className="btn btn-primary mx-2">Edit</Link>
                <Button onClick={() => handleDelete(csvdata.ID)} variant="danger" className="mx-2">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Agent;

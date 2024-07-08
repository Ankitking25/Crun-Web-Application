import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useParams,Link } from 'react-router-dom';

const Read = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null); // Changed initial state to null

  useEffect(() => {
    axios.get(`http://localhost:8080/read/${id}`)
      .then(res => {
        console.log(res);
        setStudent(res.data);
      })
      .catch(err => console.log(err));
  }, [id]);

  
  if (!student) {
    return (
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <Container className="w-50 bg-white rounded p-3">
          <Card>
            <Card.Header as="h2" className="text-center">Loading...</Card.Header>
            <Card.Body>
              <Row className="mb-3">
                <Col className="text-center">Fetching data...</Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  }

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <Container className="w-50 bg-white rounded p-3">
        <Card>
          <Card.Header as="h2" className="text-center">CSV DATA</Card.Header>
          <Card.Body>
            <Row className="mb-3">
              <Col><strong>ID:</strong></Col>
              <Col>{student[0].ID}</Col>
            </Row>
            <Row className="mb-3">
              <Col><strong>Username:</strong></Col>
              <Col>{student[0].username}</Col>
            </Row>
            <Row className="mb-3">
              <Col><strong>Product:</strong></Col>
              <Col>{student[0].product}</Col>
            </Row>
            <Row className="mb-3">
              <Col><strong>MSI Number:</strong></Col>
              <Col>{student[0].msi_number}</Col>
            </Row>
            <Row className="mb-3">
              <Col><strong>Serial Number:</strong></Col>
              <Col>{student[0].serial_Number}</Col>
            </Row>
            <Row className="mb-3">
              <Col><strong>Cost:</strong></Col>
              <Col>{student[0].cost}</Col>
            </Row>
          </Card.Body>
        </Card>
        
        <div className="d-flex justify-content-between">
         <Link to="/agent" className="btn btn-danger mt-3">Back</Link>
         <Link to={`/edit/${student[0].ID}`} className="btn btn-primary mt-3">Edit</Link>
         </div>

      </Container>
    </div>
  );
}

export default Read;

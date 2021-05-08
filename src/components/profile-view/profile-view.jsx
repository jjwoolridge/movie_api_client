import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import { Link } from 'react-router-dom';



//import .scss for view'
import "./profile-view.scss";

export function ProfileView(props) {
  const { user, movies } = this.props;
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ name, setName ] = useState('');
  const [ birthday, setBirthday ] = useState(new Date());


  return ( 
    <Form>
      <Form.Group as={Row} controlId="formPlaintextUsername">
        <Form.Label column sm="2">
          Username
        </Form.Label>
        <Col sm="5">
          <Form.Control plaintext readOnly defaultValue="email@example.com" />
        </Col>
        <Col sm="5">
          <Form.Control type="ext" placeholder="New Username" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="5">
          <Form.Control plaintext readOnly placeholder="Password" />
        </Col>
        <Col sm="5">
          <Form.Control type="password" placeholder="New Password" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="5">
          <Form.Control plaintext readOnly defaultValue="email@example.com" />
        </Col>
        <Col sm="5">
          <Form.Control type="ext" placeholder="New Email" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formPlaintextName">
        <Form.Label column sm="2">
          Name
        </Form.Label>
        <Col sm="5">
          <Form.Control plaintext readOnly defaultValue="name" />
        </Col>
        <Col sm="5">
          <Form.Control type="ext" placeholder="New Name" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formPlaintextBirthday">
        <Form.Label column sm="2">
          Birthday
        </Form.Label>
        <Col sm="5">
          <Form.Control plaintext readOnly defaultValue="birthday" />
        </Col>
        <Col sm="5">
          <Form.Control type="ext" placeholder="New Birthday" />
        </Col>
      </Form.Group>

    </Form>
  )
}
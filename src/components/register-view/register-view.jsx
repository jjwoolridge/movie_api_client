import React, {useState} from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
//import .scss for view'
import "./register-view.scss";

export function RegisterView(props) {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ name, setName ] = useState('');
    const [ birthday, setBirthday ] = useState(new Date());

    const handleSubmit = (e) => {
        e.preventDefault();
        /* send req. for validation to server then call props.onRegister*/
        axios.post('https://myflixdbjjw.herokuapp.com/register', {
          Username: username,
          Password: password,
          Email: email,
          Name: name,
          Birthday: birthday
        })
        .then(response => {
          const userData = response.data;
          console.log(userData);
          console.log(userData.Username, userData.Password);
          window.open('/','_self');
        })
        .catch(e => {
          console.log('did not get to login errors');
        });
    };

    return (
      <Form className = "register-view">
        <Form.Row>
          <Form.Group as={Col} controlId="formUsername">
            <Form.Label>Username:</Form.Label>
            <Form.Control type="text" placeholder="Enter Username" onChange= {event => setUsername(event.target.value)}/>
          </Form.Group>
          <Form.Group as={Col} controlId="formPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control type="password" placeholder="Enter Password" onChange={event => setPassword(event.target.value)} />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control type="text" placeholder="Enter Email" onChange= {event => setEmail(event.target.value)}/>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formName">
            <Form.Label>Name:</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" onChange={event => setName(event.target.value)} />
          </Form.Group>
          <Form.Group as={Col} controlId="formBirthday">
            <Form.Label>Birthday:</Form.Label>
            <Form.Control type="text" placeholder="Enter Birthday" onChange={event => setBirthday(event.target.value)} />
          </Form.Group>
        </Form.Row>
        <Button className="register-button" type="submit" onClick={handleSubmit}>Submit</Button>
        </Form>
    );
}

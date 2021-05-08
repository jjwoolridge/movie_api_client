import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import { Link } from 'react-router-dom';

//import .scss for view'
import "./login-view.scss";

export function LoginView(props) {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        /*send req. for authentication*/
        axios.post('https://myflixdbjjw.herokuapp.com/login', {
          Username: username,
          Password: password
        })
        .then(response => {
          const tokenData = response.data;
          props.onLoggedIn(tokenData);
        })
        .catch(e => {
          console.log('User does not exist');
        });
    };

    
    return (
      <Form className = "login-view">
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
        <Button className="login-button" type="submit" onClick={handleSubmit}>Submit</Button>
        <Link to = {'/register'}>
          <Button className="login-button" type="submit">Register</Button>
        </Link>
        </Form>
    )
}

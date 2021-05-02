import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

//import .scss for view'
import "./login-view.scss";

export function LoginView(props) {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleSubmit = () => {
        event.preventDefault();
 //       console.log(username,password);
        /* send req. for validation to server then call props.onLoggedIn*/
        props.onLoggedIn(username);
    };

    
    return (
      <Form className = "login-view">
        <Form.Row>
          <Form.Group as={Col} controlId="formUsername">
            <Form.Label>Username:</Form.Label>
            <Form.Control type="text" placeholder="Enter Username" onChange= {event => setUsername(event.target.value)}/>
          </Form.Group>
          <Form.Group as={col} controlId="formPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control type="password" placeholder="Enter Password" onChange={event => setPassword(event.target.value)} />
          </Form.Group>
        </Form.Row>  
        <Button variant="primary" type="submit" onClick={handleSubmit}>Submit</Button>
        </Form>
    );
}

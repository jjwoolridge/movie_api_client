import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
//import .scss for view'
import "./register-view.scss";

export function RegisterView(props) {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ name, setName ] = useState('');
    const [ birthday, setBirthday ] = useState(new Date());

    const handleSubmit = () => {
        event.preventDefault();
//       console.log(username,password, email, name, birthday);
        /* send req. for validation to server then call props.onRegister*/
        props.onRegister(username);
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
            <Form.Control type="text" placeholder="Enter Username" onChange= {event => setEmail(event.target.value)}/>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formName">
            <Form.Label>Name:</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" onChange={event => setName(event.target.value)} />
          </Form.Group>
          <Form.Group as={Col} controlId="formBirthday">
            <Form.Label>Name:</Form.Label>
            <Form.Control type="text" placeholder="Enter Birthday" onChange={event => setBirthday(event.target.value)} />
          </Form.Group>
        </Form.Row>
        <Button className="register-button" type="submit" onClick={handleSubmit}>Submit</Button>
        </Form>
    );
}

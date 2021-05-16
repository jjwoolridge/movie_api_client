import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

import { MovieCard } from '../movie-card/movie-card';

//import .scss for view'
import "./profile-view.scss";


export function ProfileView(props) {
  const { userData, movies} = props,
    [ username, setUsername ] = useState(userData.Username),
    [ password, setPassword ] = useState(userData.Password),
    [ email, setEmail ] = useState(userData.Email),
    [ name, setName ] = useState(userData.Name),
    [ birthday, setBirthday ] = useState(userData.Birthday),
    [ favorites, setFavorites ] = useState(userData.FavoriteMovies);

  const showUserData = () => {
    console.log(userData);
    console.log(favorites);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    /*send req. for authentication*/
    axios.put('https://myflixdbjjw.herokuapp.com/users/${userData.Username}', {
      Username: username,
      Password: password,
      Email: email,
      Name: name,
      Birthday: birthday,
      FavoriteMovies: favorites
    })
    .then(response => {
      const success = response.data;
    })
    .catch(e => {
      console.log('Could not change user data');
    });
};

  return ( 
    <>
      <Form className="profile-view">
        <Form.Group as={Row} controlId="formPlaintextUsername">
          <Form.Label column sm="3">
            <h5>Username</h5>
          </Form.Label>
          <Form.Label column sm="3">
            {userData.Username}
          </Form.Label>
          <Col sm="6">
            <Form.Control type="text" placeholder="New Username"  onChange= {event => setUsername(event.target.value)}/>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column sm="3">
            <h5>Password</h5>
          </Form.Label>
          <Form.Label column sm="3">
            *HIDDEN*
          </Form.Label>
          <Col sm="6">
            <Form.Control type="password" placeholder="New Password"  onChange= {event => setPassword(event.target.value)}/>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPlaintextEmail">
          <Form.Label column sm="3">
            <h5>Email</h5>
          </Form.Label>
          <Form.Label column sm="3">
            {userData.Email}
          </Form.Label>
          <Col sm="6">
            <Form.Control type="text" placeholder="New Email"  onChange= {event => setEmail(event.target.value)}/>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPlaintextName">
          <Form.Label column sm="3">
            <h5>Name</h5>
          </Form.Label>
          <Form.Label column sm="3">
            {userData.Name}
          </Form.Label>
          <Col sm="6">
            <Form.Control type="text" placeholder="New Name"  onChange= {event => setName(event.target.value)}/>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPlaintextBirthday">
          <Form.Label column sm="3">
            <h5>Birthday</h5>
          </Form.Label>
          <Form.Label column sm="3">
            {userData.Birthday}
          </Form.Label>
          <Col sm="6">
            <Form.Control type="text" placeholder="New Birthday"  onChange= {event => setBirthday(event.target.value)}/>
          </Col>
        </Form.Group>
      </Form>
      <Button className="submit-button" type="submit" onClick={handleSubmit}>Submit Changes</Button>
      <Row className="main-view justify-content-md-center">
        <h2>Favorite Movies</h2>
      </Row>
      {/* <Row className="main-view justify-content-md-center">
        {(userData.FavoriteMovies).map((i) => <MovieCard movie={movies.find(m => m._id === userData.FavoriteMovies)} key={i}/>)}
        
      </Row> */}

    </>
  )
}
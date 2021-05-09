import React from 'react';
import axios from 'axios';

import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import { LoginView } from '../login-view/login-view';
import { RegisterView } from '../register-view/register-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { DirectorView } from '../director-view/director-view';
import { GenreView } from '../genre-view/genre-view';
import { ProfileView } from '../profile-view/profile-view';
//import .scss for view'
import "./main-view.scss";


export class MainView extends React.Component {
  constructor(){
    super();
    this.state = {
      movies: [],        
      // users: [],
      // selectedMovie: null,
      user: null
    };
  }

  getMovies(token) {
    axios.get('https://myflixdbjjw.herokuapp.com/movies', {
      headers: { Authorization: `Bearer ${token}`}
    })
    .then(response => {
      // Assign the result to the state
      this.setState({
        movies: response.data
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  componentDidMount() {
    let accessToken = localStorage.getItem('token');
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem('user')
      });
      this.getMovies(accessToken);
    }
  }

  onLoggedIn(authData) {
    this.setState({
      user: authData.user.Username
    });
    /* setting localstorage key:item */
    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', authData.user.Username);
    this.getMovies(authData.token);
  }

  onLoggedOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.setState({
      user: null,
      userProf: null
    });
  }

  render() {      
    const {movies, user} = this.state;

    return (
      <>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">MyFlix</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href={"/"}>Home</Nav.Link>
              <Nav.Link to={"/users/"} onClick={() => {this.ProfileView()}} disabled> Profile</Nav.Link>
              <Nav.Link onClick={() => {this.onLoggedOut()}}>Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Router>
          <Row className="main-view justify-content-md-center">
            <Route exact path="/" render={() => {
              /*check to make sure user is logged in*/
              if (!user) return <Col> 
                  <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                </Col>
              if (movies.length === 0) return <div className = "main-view"/>;
              return movies.map(m => (
                <Col md={3} key={m._id}>
                  <MovieCard movie={m} />
                </Col>
              ))
            }}/>
            <Route path="/register" render={() => {
              if (user) return <Redirect to='/' />
              return <Col>
                <RegisterView />
             </Col>
            }}/>
            <Route exact path="/movies/:movieId" render={({ match, history }) => {
              /*check to make sure user is logged in*/
              if (!user) return <Col> 
                  <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                </Col>
              if (movies.length === 0) return <div className = "main-view"/>;
              return <Col md={8}>
              <MovieView movie={movies.find(m => m._id === match.params.movieId)} onBackClick= {() => history.goBack()} />
            </Col>
            }}/>
            <Route exact path="/movies/director/:name" render={({ match, history }) => {
              /*check to make sure user is logged in*/
              if (!user) return <Col> 
                  <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                </Col>
              if (movies.length === 0) return <div className = "main-view"/>;
              return <Col md={6}>
              <DirectorView director={movies.find(m => m.Director.Name === match.params.name).Director} movies={movies} onBackClick= {() => history.goBack()} />
            </Col>
            }}/>
            <Route exact path="/movies/genre/:genre" render={({ match, history }) => {
              /*check to make sure user is logged in*/
              if (!user) return <Col> 
                  <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                </Col>
              if (movies.length === 0) return <div className = "main-view"/>;
              return <Col md={6}>
              <GenreView genre={movies.find(m => m.Genre.Name === match.params.genre).Genre} movies = {movies} onBackClick= {() => history.goBack()} />
            </Col>
            }}/> 
            <Route exact path="/users/:username" render={({ match }) => {
              /*check to make sure user is logged in*/
              if (!user) return <Col> 
                  <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                </Col>
              if (movies.length === 0) return <div className = "main-view"/>;
              return <Col md={8}>
              <ProfileView user={user} movies={movies}/>
            </Col>
            }}/> 
          </Row>        
        </Router>

      </>
    )
  }
}

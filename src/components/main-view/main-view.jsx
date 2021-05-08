import React from 'react';
import axios from 'axios';

import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import { LoginView } from '../login-view/login-view';
import { RegisterView } from '../register-view/register-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
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

  // getUsers(token) {
  //   axios.get('https://myflixdbjjw.herokuapp.com/users', {
  //     headers: { Authorization: `Bearer ${token}`}
  //   })
  //   .then(response => {
  //     // Assign the result to the state
  //     this.setState({
  //       users: response.data
  //     });
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // }

  componentDidMount() {
    let accessToken = localStorage.getItem('token');
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem('user')
      });
//      this.getUsers(accessToken);
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
      user: null
    });
  }

  render() {      
    const {movies, user} = this.state;

//    if (user) {users => this.getUsers(localStorage.getItem('token'))};
//    if (users.findIndex(function(u) {return u.Username === user}) < 0) return <RegisterView onRegister={user => this.onRegister(user)} />
//    if (movies.length === 0) return <div className = "main-view"/>;

    return (
      <>
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
              return <Col md={6}>
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
              <MovieView director={movies.find(m => m.Director.Name === match.params.name).Director} onBackClick= {() => history.goBack()} />
            </Col>
            }}/>
            <Route exact path="/movies/genre/:genre" render={({ match, history }) => {
              /*check to make sure user is logged in*/
              if (!user) return <Col> 
                  <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                </Col>
              if (movies.length === 0) return <div className = "main-view"/>;
              return <Col md={6}>
              <MovieView genre={movies.find(m => m.Genre.Name === match.params.genre).Genre} onBackClick= {() => history.goBack()} />
            </Col>
            }}/>            
          </Row>
          <Row className="main-view justify-content-md-center">
            <Col>
              <Button className="logout-button main-view justify-content-md-center" type="text" onClick={() => {this.onLoggedOut()}}>Logout</Button>
            </Col>
          </Row>
        </Router>
      </>
    )
  }
}

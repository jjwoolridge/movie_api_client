import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

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
      users: [],
      selectedMovie: null,
      user: null
    };
  }

  componentDidMount(){
    let accessToken = localStorage.getItem('token');
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem('user')
      });
      this.getMovies(accessToken);
    }
    axios.get('https://myflixdbjjw.herokuapp.com/users')
      .then(response => {
        this.setState({
          users: response.data
        });
      })
      .catch(error => {
        console.log(error + 'component did mount error');
      });
  }

  setSelectedMovie(newSelectMovie) {
    this.setState({
      selectedMovie : newSelectMovie
    });
  }

  onLoggedIn(userAuthData) {
    console.log(userAuthData + 'onloggedin userauth data');
    this.setState({
      user : userAuthData.user.Username
    });
    /*setting authentication data for user*/
    localStorage.setItem('token', userAuthData.token);
    localStorage.setItem('user', userAuthData.user.Username);
    /* getting movie data using token */
    this.getMovies(userAuthData.token);
  }

  onRegister(userinput) {
    this.setState({
      user : userinput,
      users : this.state.users.concat({'Username':userinput})
    });
  }

  getMovies(token) {
    axios.get('https://myflixdbjjw.herokuapp.com/movies', {
      headers: {Authorization: 'Bearer ${token}'}
    })
    .then (response => {
      /*assign to state*/
      this.setState({
        movies: response.data
      });
    })
    .catch(function (error){
      console.log(error + 'getMovies error');
    });
  }


  render() {      
    const {movies, users, selectedMovie, user} = this.state;

    /*check to make sure user is logged in*/
    if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;
    
  //  console.log('See Array in console for list of available users.')
  //  console.log(users);
    
    if (users.findIndex(function(u) {return u.Username == user}) < 0) return <RegisterView onRegister={user => this.onRegister(user)} />

    if (movies.length === 0) return <div className = "main-view"/>;

    return (
      <Row className="main-view justify-content-md-center">
        {selectedMovie
          ? (
             <Col md={6}>
                <MovieView movieData = {selectedMovie} onBackClick = {newSelectMovie => {this.setSelectedMovie(newSelectMovie)}}/>
              </Col>
          )
          : movies.map(movie => (
              <Col lg={3} md={6}>
                  <MovieCard key={movie._id} movieData={movie} onMovieClick = {(newSelectMovie) => {this.setSelectedMovie(newSelectMovie)}} />
              </Col>
            ))
         }
      </Row>
    );
  }
}

MainView.propTypes = {
  setSelectedMove: PropTypes.func,
  onLoggedIn: PropTypes.func,
  onRegister: PropTypes.func,
};

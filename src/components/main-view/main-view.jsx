import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
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
    axios.get('https://myflixdbjjw.herokuapp.com/movies')
      .then(response => {
        this.setState({
          movies: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
    axios.get('https://myflixdbjjw.herokuapp.com/users')
      .then(response => {
        this.setState({
          users: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  setSelectedMovie(newSelectMovie) {
    this.setState({
      selectedMovie : newSelectMovie
    });
  }

  onLoggedIn(userinput) {
    this.setState({
      user : userinput
    });
  }

  onRegister(userinput) {
    this.setState({
      user : userinput,
      users : this.state.users.concat({'Username':userinput})
    });
  }

  render() {      
    const {movies, users, selectedMovie, user} = this.state;

    /*check to make sure user is logged in*/
    if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;
    
   console.log('See Array in console for list of available users.')
   console.log(users);
    
    if (users.findIndex(function(u) {return u.Username == user}) < 0) return <RegisterView onRegister={user => this.onRegister(user)} />

    if (movies.length === 0) return <div className = "main-view"/>;

    return (
      <div className="main-view">
        {selectedMovie
          ? (
            <Row className="justify-content-md-center">
              <Col md={8}>
                <MovieView movieData = {selectedMovie} onBackClick = {newSelectMovie => {this.setSelectedMovie(newSelectMovie)}}/>
              </Col>
            </Row>
          )
          : (
            <Row className="justify-content-md-center">
              {movies.map(movie => (
              <Col md={3}>
                  <MovieCard key={movie._id} movieData={movie} onMovieClick = {(newSelectMovie) => {this.setSelectedMovie(newSelectMovie)}} />
              </Col>
              ))}
            </Row>
          )
         }
        </div>
    );
  }
}

MainView.propTypes = {
  setSelectedMove: PropTypes.func,
  onLoggedIn: PropTypes.func,
  onRegister: PropTypes.func,
};

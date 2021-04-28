import React from 'react';
import axios from 'axios';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export class MainView extends React.Component {
  constructor(){
    super();
    this.state = {
      movies: [],        
      selectedMovie:null
    };
  }

  componentDidMount(){
    axios.get('https://myflixdb-jjw.herokuapp.com/movies')
      .then(response => {
        this.setState({
          movies: response.data;
        })
      })
      .catch(error => {
        console.log(error);
      });
  }

  setSelectedMovie(newSelectMovie) {
    this.setState({
      selectedMovie:newSelectMovie
    });
  }
    render() {      
      const {movies, selectedMovie} = this.state;

     // if (selectedMovie) return <MovieView movieData = {selectedMovie} />;

      if (movies.length === 0) return <div className = "main-view"/>;

      return (
          <div className="main-view">
            {selectedMovie
              ? <MovieView movieData = {selectedMovie} onBackClick = {newSelectMovie => {this.setSelectedMovie(newSelectMovie);}}/>
              : movies.map(movie => (
                <MovieCard key={movie._id} movieData={movie} onMovieClick = {(newMovie) => {this.setSelectedMovie(newMovie)}} />
                ))
            }
          </div>
        );
    }
}


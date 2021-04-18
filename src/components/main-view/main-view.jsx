import React from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export class MainView extends React.Component {
  constructor(){
    super();
    this.state = {
      movies: [
        {_id: 1, Title: 'Mission Impossible', Description: 'An American agent, under false suspicion of disloyalty, must discover and expose the real spy without the help of his organization.', ImagePath: 'https://www.imdb.com/title/tt0117060/mediaviewer/rm3243234304/'},
        {_id: 2, Title: 'Moulin Rougue', Description: 'A poet falls for a beautiful courtesan whom a jealous duke covets.', ImagePath: 'https://www.imdb.com/title/tt0203009/mediaviewer/rm2687256832/'},
        {_id: 3, Title: 'Thor Ragnarok', Description: 'Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela.', ImagePath: 'https://www.imdb.com/title/tt3501632/mediaviewer/rm1413491712/'}
      ],        
      selectedMovie:null
    };
  }
  setSelectedMovie(newSelectMovie) {
    this.setState({
      selectedMovie:newSelectMovie
    });
  }
    render() {      
      const {movies, selectedMovie} = this.state;

     // if (selectedMovie) return <MovieView movieData = {selectedMovie} />;

      if (movies.length === 0) return <div className = "main-view">The list is empty!</div>;

      return (
          <div className="main-view">
            {selectedMovie
              ? <MovieView movieData = {selectedMovie} onBackClick = {(newSelectMovie) => {this.setSelectedMovie(newSelectMovie);}}/>
              : movies.map(movie => (
                <MovieCard key={movie._id} movieData={movie} onMovieClick = {(movie) => {this.setSelectedMovie(movie)}} />
                ))
            }
          </div>
        );
    }
}


import React from 'react';

export class MovieCard extends React.Component {
  render () {
    const { movieData, onMovieClick } = this.props;
    return <div className = "movie-card" onClick={() => {onMovieClick(movieData);}}>{movieData.Title}</div>;
  }
<<<<<<< Updated upstream
}
=======
}


MovieCard.propTypes = {
  movieData: PropTypes.shape({ 
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired
    }),
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Birth: PropTypes.string
    }), 
    Year: PropTypes.string.isRequired
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};
>>>>>>> Stashed changes

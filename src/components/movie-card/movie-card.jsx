import React from 'react';
import Prop-Types from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

//import .scss for view'
import "./movie-card.scss";

export class MovieCard extends React.Component {
  render () {
    const { movieData, onMovieClick } = this.props;

    return (
      <Card>
        <Card.Img variant="top" src={movie.ImagePath}/>
        <Card.Body> 
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>{movie.Description}</Card.Text>
          <Button variant="link" onClick={() => {onMovieClick(movieData);}}>View</Button>
        </Card.Body>
      </Card>
    )
  }
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

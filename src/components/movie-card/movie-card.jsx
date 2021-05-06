import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

//import .scss for view'
import "./movie-card.scss";

export class MovieCard extends React.Component {
  render () {
    const { movieData, onMovieClick } = this.props;

    return (
      <Card className="card">
        <Card.Img variant="top" src={movieData.ImagePath}/>
        <Card.Body className="movie-card"> 
          <Card.Title className="card-title">{movieData.Title}</Card.Title>
          <Card.Text className="card-text">{movieData.Description}</Card.Text>
          <Button className="button card-button" onClick={() => {onMovieClick(movieData);}}>View</Button>
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

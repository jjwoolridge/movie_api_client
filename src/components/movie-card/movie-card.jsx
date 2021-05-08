import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

//import { BrowserRouter as Router, Route} from "react-router-dom";
import { Link } from 'react-router-dom';

//import .scss for view'
import "./movie-card.scss";

export class MovieCard extends React.Component {
  
  render () {
    const { movie } = this.props;
    
    return (
      <Card className="card">
        <Card.Img variant="top" src={movie.ImagePath}/>
        <Card.Body className="movie-card"> 
          <Card.Title className="card-title">{movie.Title}</Card.Title>
          <Card.Text className="card-text">{movie.Description}</Card.Text>
          <Link to = {'/movies/' + movie._id}>
            <Button className="button card-button" variant="link" >View</Button>
          </Link>
        </Card.Body>
      </Card>
    ); 
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({ 
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
  }).isRequired
};

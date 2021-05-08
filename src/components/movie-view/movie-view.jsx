import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import { Link } from "react-router-dom";

//import .scss for view'
import "./movie-view.scss";

export class MovieView extends React.Component {

  render() {
    const { movie, onBackClick } = this.props;

    return (
      <>
      <Image className="poster" src={movie.ImagePath} rounded/>
      <Accordion className="movie-view" defaultActiveKey="0">
        <Card>
          <Card.Header className="toggle">
            <Accordion.Toggle className="button header-button accordion-button" as={Button} eventKey="0" block>
              Title
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body className="toggle-body">{movie.Title}</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header className="toggle">
            <Accordion.Toggle className="button header-button accordion-button" as={Button} eventKey="1" block>
              Year
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body className="toggle-body">{movie.Year}</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header className="toggle">
            <Accordion.Toggle className="button header-button accordion-button" as={Button} eventKey="2" block>
              Description
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body className="toggle-body">{movie.Description}</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header className="toggle">
            <Accordion.Toggle className="button header-button accordion-button" as={Button} eventKey="3" block>
              Director
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body className="toggle-body">
              <Link to = {'/movies/director/' + movie.Director.Name}>{movie.Director.Name}</Link>
              <br/> 
              Born: {movie.Director.Birth}
              <br/>
              Bio: {movie.Director.Bio}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header className="toggle">
            <Accordion.Toggle className="button header-button accordion-button" as={Button} eventKey="4" block>
              Genre
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="4">
            <Card.Body className="toggle-body">
              <Link to = {'/movies/genre/' + movie.Genre.Name}>{movie.Genre.Name}</Link>: 
              <br/> 
              {movie.Genre.Description}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Button className="button back accordion-button" onClick={() => {onBackClick(null);}}>Back</Button>
      </Accordion>
      </>
    );
  }
}

MovieView.propTypes = {
  movie: PropTypes.shape({ 
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string,
      Description: PropTypes.string
    }),
    Director: PropTypes.shape({
      Name: PropTypes.string,
      Birth: PropTypes.string
    }), 
    Year: PropTypes.string.isRequired
  }).isRequired,
  onBackClick: PropTypes.func.isRequired
};
import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

//import .scss for view'
import "./movie-view.scss";

export class MovieView extends React.Component {

  render() {
    const { movieData, onBackClick } = this.props;
    return (
      <>
      <Image className="poster" src={movieData.ImagePath} rounded/>
      <Accordion className="movie-view" defaultActiveKey="0">
        <Card>
          <Card.Header className="toggle">
            <Accordion.Toggle className="button header-button accordion-button" as={Button} eventKey="0" block>
              Title
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body className="toggle-body">{movieData.Title}</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header className="toggle">
            <Accordion.Toggle className="button header-button accordion-button" as={Button} eventKey="1" block>
              Year
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body className="toggle-body">{movieData.Year}</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header className="toggle">
            <Accordion.Toggle className="button header-button accordion-button" as={Button} eventKey="2" block>
              Description
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body className="toggle-body">{movieData.Description}</Card.Body>
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
              {movieData.Director.Name} 
              <br/> 
              Born: {movieData.Director.Birth}
              <br/>
              Bio: {movieData.Director.Bio}
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
              {movieData.Genre.Name}: {movieData.Genre.Description}
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
  movieData: PropTypes.shape({ 
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
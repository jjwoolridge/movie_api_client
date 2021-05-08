import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import { Link } from "react-router-dom";

//import .scss for view'
import "./genre-view.scss";

export class GenreView extends React.Component {

  render() {
    const { genre, onBackClick } = this.props;
    return (
      <>
      <Accordion className="genre-view" defaultActiveKey="0">
        <Card>
          <Card.Header className="toggle">
            <Accordion.Toggle className="button header-button accordion-button" as={Button} eventKey="0" block>
              Name
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body className="toggle-body">{genre.Name}</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header className="toggle">
            <Accordion.Toggle className="button header-button accordion-button" as={Button} eventKey="1" block>
              Description
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body className="toggle-body">{genre.Description}</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header className="toggle">
            <Accordion.Toggle className="button header-button accordion-button" as={Button} eventKey="2" block>
              Movies
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body className="toggle-body">
              Show list of movies here
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Button className="button back accordion-button" onClick={() => {onBackClick(null);}}>Back</Button>
      </Accordion>
      </>
    );
  }
}

// MovieView.propTypes = {
//   movie: PropTypes.shape({ 
//     Title: PropTypes.string.isRequired,
//     Description: PropTypes.string.isRequired,
//     ImagePath: PropTypes.string.isRequired,
//     Genre: PropTypes.shape({
//       Name: PropTypes.string,
//       Description: PropTypes.string
//     }),
//     Director: PropTypes.shape({
//       Name: PropTypes.string,
//       Birth: PropTypes.string
//     }), 
//     Year: PropTypes.string.isRequired
//   }).isRequired,
//   onBackClick: PropTypes.func.isRequired
// };
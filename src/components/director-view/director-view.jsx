import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import { Link } from "react-router-dom";

//import .scss for view'
import "./director-view.scss";

export class DirectorView extends React.Component {

  render() {
    const { director, onBackClick } = this.props;
    console.log(director);
    return (
      <>
      <Accordion className="director-view" defaultActiveKey="0">
        <Card>
          <Card.Header className="toggle">
            <Accordion.Toggle className="button header-button accordion-button" as={Button} eventKey="0" block>
              Name
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body className="toggle-body">{director.Name}</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header className="toggle">
            <Accordion.Toggle className="button header-button accordion-button" as={Button} eventKey="1" block>
              Birth and Death
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body className="toggle-body">
              Birth : {director.Birth}
              <br/>
              Death: {director.Death}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header className="toggle">
            <Accordion.Toggle className="button header-button accordion-button" as={Button} eventKey="2" block>
              Bio
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body className="toggle-body">{director.Bio}</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header className="toggle">
            <Accordion.Toggle className="button header-button accordion-button" as={Button} eventKey="3" block>
              Movies
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body className="toggle-body">
              List
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
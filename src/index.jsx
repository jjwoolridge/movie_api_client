//import react and components
import React from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
//import MainView component
import {MainView} from './components/main-view/main-view';

//import statement to indicate that you need to bundle './index.scss'
import "./index.scss";

//main component (to use all others)
class MyFlixApplication extends React.Component {
  render() {
    return (
      <Container>
        <MainView />
      </Container>
    );
  }
}

// Finds the root of app
const container = document.getElementsByClassName("app-container")[0];

// tells react to render app in root DOM
ReactDOM.render(React.createElement(MyFlixApplication),container);

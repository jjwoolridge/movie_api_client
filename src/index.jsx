import React from "react";
import ReactDOM from "react-dom";

//import statement to indicate that you need to bundle './index.scss'
import "./index.scss";

//main component (to use all others)
class MyFlixApplication extends React.Component {
  render() {
    return (
      <div className="my-flix">
          <div>Good Morning</div>
      </div>
    );
  }
}

// Finds the root of app
const container = document.getElementsByClassName("app-container")[0];

// tells react to render app in root DOM
ReactDOM.render(React.createElement(MyFlixApplication),container);

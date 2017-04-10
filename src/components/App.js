import React from "react";
import Menu from "./common/Menu";
import "../stylesheets/main.scss";

// app component
export default class App extends React.Component {
  // render
  render() {
    const { children } = this.props;

    return (
      <div className="container">
        <div>
          <Menu/>
        </div>
        <div>
          {children}
        </div>
        <div className="footer">
          <img src="/media/logo.svg"/>
          <span>
            Simple FA demo app built with {' '}
            <a href="http://redux-minimal.js.org/" target="_blank">redux-minimal</a>
          </span>
        </div>
      </div>
    );
  }
}

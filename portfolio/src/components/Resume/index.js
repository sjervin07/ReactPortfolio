import React from "react";

class Header extends React.Component {
  render() {
    return(
<div className="jumbotron text-center p-3 mb-2 bg-secondary text-white" >
  <h1 className="display-4 text-center "><strong>Web Developer Portfolio</strong></h1>
  </div>

    );
  }
}

export default Header
import React, {Component} from 'react';

class Resume extends Component {
  render() {
    return (
      <div><h1>Resume</h1></div>
    )
  }
}
export default Resume;
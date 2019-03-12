import React, { Component } from 'react';
import './index.scss';
class Test extends Component {
  render() {
    return <div className="test">{this.props.title}</div>;
  }
}

export default Test;

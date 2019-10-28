import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Preloader extends Component {
  render() {
    return (
      <div className="preloader">
        <FontAwesomeIcon icon={['fas', 'spinner']} color="rgb(255, 65, 108)" spin />
      </div>
      );
  }
}
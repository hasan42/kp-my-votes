import React, { Component } from 'react';
import './ParserStat.css';

export default class ParserStat extends Component {

    render() {
      let widthStat = Math.floor(this.props.countSerial * 100 / this.props.countAll) + "%";

      return (
        <div className="parse-stat">
          {this.props.countSerial} / {this.props.countAll} ({widthStat})
          <div className="parse-stat__bg">
            <div className="parse-stat__item" style={{ width: widthStat }}></div>
          </div>
        </div>
        );
    }
}
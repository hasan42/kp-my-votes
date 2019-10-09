import React, { Component } from 'react';

import './SequelList.css';

export default class SequelList extends Component {

    render() {
      return (
        <div>
          {this.props.data.sequelParent}
          <ul className="sequel-list">
            {
              this.props.data.items.map((item,idx) => {
                return <li key={idx} className={this.props.watched(item.id) ? 'watched' : ''}>
                          {item.serial}. <a href={`#${item.id}`}>{item.id}</a>
                        </li>
              })
            }
          </ul>
        </div>
        );
    }
}
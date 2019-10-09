import React, { Component } from 'react';
import Tabs from '../tabs/Tabs';
import AddNewFields from './AddNewFields';
import AddNewObject from './AddNewObject';

export default class DataWork extends Component {

    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div>
          <h3>Add new items</h3>
          <p>You can add new items. Use form or try add new JSON object.</p>
          <Tabs>
            <div label="Form">
              <AddNewFields itemAdd={this.props.newItem} />
            </div>
            <div label="JSON">
              <AddNewObject itemAdd={this.props.newItem} />
            </div>
          </Tabs>
        </div>
        );
    }
}
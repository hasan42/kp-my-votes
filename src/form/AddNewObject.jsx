import React, { Component } from 'react';

export default class AddNewFields extends Component {

    constructor(props) {
      super(props);
      this.state = {
          item: ''
      };

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
      const target = event.target;
      const value = target.value;

      let myobj = JSON.parse(value);

      this.setState({
          item: myobj
      });
    }

    handleSubmit(event) {
      this.props.itemAdd(this.state.item)
    }

    render() {
      return (
        <div className="form-wrap">
          <form>
            <div>
              <p>Example:</p>
              <pre>{'{"id":"326","link":"/film/326/","nameRus":"Побег из Шоушенка (1994)","nameEng":"The Shawshank Redemption","vote":"9"}'}</pre>
            </div>
            <div className="form-item">
              <label>
                <div>Object</div>
                <input
                  name="item"
                  type="text"
                  value={this.state.item}
                  onChange={this.handleInputChange} />
              </label>
            </div>
            <div className="form-item">
              <input
                value="Save"
                type="button" onClick={this.handleSubmit} />
            </div>
          </form>
        </div>
        );
    }
}
import React, { Component } from 'react';

export default class AddNewFields extends Component {

    constructor(props) {
      super(props);
      this.state = {
        item: '',
        itemText: '',
        validItem: '',
        validMsg: ''
      };

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
      const target = event.target;
      const value = target.value;

      // let myobj = JSON.parse(value);

      this.setState({
        itemText: value,
        validItem: '',
        validMsg: ''
      });
    }

    handleSubmit(event) {
      try {
        if(this.state.itemText === ''){
          throw new SyntaxError("не заполнено поле");
        }
        console.log(typeof this.state.itemText)
        let myobj = JSON.parse(this.state.itemText);
        console.log(typeof myobj)
        console.log(myobj)

        this.props.itemAdd(myobj);

        this.setState({
          itemText: '',
          validItem: '',
          validMsg: 'Saved!'
        });

      }catch(e){
        this.setState({
          validMsg: 'Error',
          validItem: 'red'
        })
        console.log(e);
      }
      
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
                  value={this.state.itemText}
                  onChange={this.handleInputChange}
                  style={{borderColor: this.state.validItem}} />
              </label>
            </div>
            <div className="form-item">
              <input
                value="Save"
                type="button" onClick={this.handleSubmit} />
              {this.state.validMsg}
            </div>
          </form>
        </div>
        );
    }
}
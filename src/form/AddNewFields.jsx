import React, { Component } from 'react';

export default class AddNewFields extends Component {

    constructor(props) {
      super(props);
      this.state = {
          id: '',
          link: '',
          nameRus: '',
          nameEng: '',
          vote: ''
      };

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;

      this.setState({
          [name]: value
      });
    }

    handleSubmit(event) {
      console.log(this)
      this.props.itemAdd(this.state)
    }

    render() {
      return (
        <div className="form-wrap">
          <form>
            <div className="form-item">
              <label>
                <div>ID</div>
                <input
                  name="id"
                  type="text"
                  value={this.state.id}
                  onChange={this.handleInputChange} />
              </label>
            </div>
            <div className="form-item">
              <label>
                <div>Link</div>
                <input
                  name="link"
                  type="text"
                  value={this.state.link}
                  onChange={this.handleInputChange} />
              </label>
            </div>
            <div className="form-item">
              <label>
                <div>NameRus</div>
                <input
                  name="nameRus"
                  type="text"
                  value={this.state.nameRus}
                  onChange={this.handleInputChange} />
              </label>
            </div>
            <div className="form-item">
              <label>
                <div>NameEng</div>
                <input
                  name="nameEng"
                  type="text"
                  value={this.state.nameEng}
                  onChange={this.handleInputChange} />
              </label>
            </div>
            <div className="form-item">
              <label>
                <div>Vote</div>
                <input
                  name="vote"
                  type="text"
                  value={this.state.vote}
                  onChange={this.handleInputChange} />
              </label>
            </div>
            <div className="form-item">
              <input
                value="Save"
                type="button"  onClick={this.handleSubmit} />
            </div>
          </form>
         </div>
        );
    }
}
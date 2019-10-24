import React, { Component } from 'react';

export default class AddNewFields extends Component {

    constructor(props) {
      super(props);
      this.state = {
          id: '',
          link: '',
          nameRus: '',
          nameEng: '',
          vote: '',
          validId: '',
          validName: '',
          validMsg: ''
      };

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;

      this.setState({
          [name]: value,
          validMsg: ''
      });

      if(name === 'id'){
        this.setState({
          validId: ''
        });
      }

      if(name === 'nameRus' || name === 'nameEng'){
        this.setState({
          validName: ''
        });
      }
    }

    handleSubmit(event) {
      try {
        if(this.state.id === ''){
          this.setState({validId: 'red'})
          throw new SyntaxError("не заполнен id");
        }
        if(this.state.nameRus === '' && this.state.nameEng === ''){
          this.setState({validName: 'red'})
          throw new SyntaxError("не заполнен name");
        }

        this.props.itemAdd(this.state);

        this.setState({
          id: '',
          link: '',
          nameRus: '',
          nameEng: '',
          vote: '',
          validId: '',
          validName: '',
          validMsg: 'Saved!'
        });

      }catch(e){
        this.setState({validMsg: 'Error!'})
        console.log(e);
      }
      // console.log(this)
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
                  onChange={this.handleInputChange}
                  style={{borderColor: this.state.validId}} />
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
                  onChange={this.handleInputChange}
                  style={{borderColor: this.state.validName}} />
              </label>
            </div>
            <div className="form-item">
              <label>
                <div>NameEng</div>
                <input
                  name="nameEng"
                  type="text"
                  value={this.state.nameEng}
                  onChange={this.handleInputChange}
                  style={{borderColor: this.state.validName}} />
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
                {this.state.validMsg}
            </div>
          </form>
         </div>
        );
    }
}
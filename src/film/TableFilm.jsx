import React, { Component } from 'react';
import SequelList from './SequelList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class TableFilm extends Component {

  constructor(props) {
    super(props);
    this.state = {
        loading: true
    };
    this.sequelWatched = this.sequelWatched.bind(this);
  }

  sequelWatched(id) {
    return this.props.items.find(x => x.id === id);
  }

  componentWillReceiveProps(nextProps) {
       console.log(Date() + " TableFilm componentWillReceiveProps()");
   }
   componentWillMount(){
       console.log(Date() + " TableFilm componentWillMount()");
   }
   componentDidMount(){
    this.setState({
      loading: false
    });
       console.log(Date() + " TableFilm componentDidMount()");
   }
   componentWillUnmount(){
       console.log(Date() + " TableFilm componentWillUnmount()");
   }
   shouldComponentUpdate(){
       console.log(Date() + " TableFilm shouldComponentUpdate()");
   }
   componentWillUpdate(){
       console.log(Date() + " TableFilm componentWillUpdate()");
   }
   componentDidUpdate(){
       console.log(Date() + " TableFilm componentDidUpdate()");
   }

  render() {
    console.log(Date() + " TableFilm render()");
    const filmList = this.props.items.map((item, idx) => {
      let itSerial = item.serial ? 'сериал' : '';
      let itSequel = item.sequel ? (item.sequel === false ? '' : 'сиквелы' ) : '';
      return (
        <tr key={idx}>
          <td>{idx}</td>
          <td><a id={item.id}></a>{item.id}</td>
          <td><a href={`http://kinopoisk.ru${item.link}`} rel='noopener noreferrer' target='_blank'>{item.link}</a></td>
          <td>{item.nameRus}</td>
          <td>{item.nameEng}</td>
          <td>{item.vote}</td>
          <td>{itSequel}</td>
          <td>{itSerial}</td>
          <td><button className="icon-btn" onClick={() => this.props.delId(item.id)}><FontAwesomeIcon icon={['fas', 'times']} color="rgb(255, 65, 108)"/></button></td>
        </tr>
        );
    });
    return (
      <table className={this.state.loading ? 'table-film load' : 'table-film finish'}>
        <thead>
          <tr>
            <th></th>
            <th>id</th>
            <th>link</th>
            <th>nameRus</th>
            <th>nameEng</th>
            <th>vote</th>
            <th>sequel</th>
            <th>serial</th>
          </tr>
        </thead>
        <tbody>
          {filmList}
        </tbody>
      </table>
    );
  }
}
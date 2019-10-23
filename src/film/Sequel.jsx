import React, { Component } from 'react';
import SequelList from './SequelList';

export default class Sequel extends Component {

  constructor(props) {
    super(props);
    this.sequelWatched = this.sequelWatched.bind(this);
  }

  sequelWatched(id) {
    return this.props.items.find(x => x.id === id);
  }

  render() {
    const filmList = this.props.items.map((item, idx) => {
      let itSerial = item.serial ? 'сериал' : '';
      let itSequel = item.sequel ? (item.sequel === false ? '' : <SequelList data={item.sequel} watched={this.sequelWatched} /> ) : '';
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
        </tr>
        );
    });
    return (
      <table className="table-film table_film_sequel">
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
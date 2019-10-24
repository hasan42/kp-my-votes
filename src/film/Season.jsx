import React, { Component } from 'react';
import SequelList from './SequelList';
import SeasonEpisodes from './SeasonEpisodes';

export default class Season extends Component {

  constructor(props) {
    super(props);
    this.sequelWatched = this.sequelWatched.bind(this);
  }

  sequelWatched(id) {
    return this.props.items.find(x => x.id === id);
  }

  render() {
    const filmList = this.props.items.map((item, idx) => {
      let itSerial = item.serial.episodes ? <SeasonEpisodes data={item.serial} id={item.id} selCur={this.props.selectCurrent} /> : 'сериал';
      let itSequel = item.sequel ? (item.sequel === false ? '' : <SequelList data={item.sequel} watched={this.sequelWatched} /> ) : '';
      return (
        <tr key={idx}>
          <td>{idx}</td>
          <td><a id={item.id}></a>{item.id}</td>
          <td><a href={`http://kinopoisk.ru${item.link}`} rel='noopener noreferrer' target='_blank'>{item.link}</a></td>
          <td>{item.nameRus}<br />{item.nameEng}</td>
          <td>{item.vote}</td>
          <td>{itSequel}</td>
          <td>{itSerial}</td>
        </tr>
        );
    });
    return (
      <table className="table-film table_film_season">
        <thead>
          <tr>
            <th></th>
            <th>id</th>
            <th>link</th>
            <th>name</th>
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
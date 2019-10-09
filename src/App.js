import React, { Component } from 'react';
import axios from 'axios';
import Tabs from './tabs/Tabs';
import TableFilm from './film/TableFilm';
import ParserStat from './film/ParserStat';
import DataWork from './form/DataWork';

import './App.css';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      film: ''
    }

    fetch('films-list.json').then(
        (response) => {
          return response.json()
        }
      ).then(
        (json) => {
          this.setState({
            film: json
          });
        }
      ).then(console.log(this));

    this.handleSave = this.handleSave.bind(this);
    this.addNewItem = this.addNewItem.bind(this);
  }

  handleSave(){
    let data = new FormData();
    data.append('json', JSON.stringify(this.state.film));

    axios.post('json.php', data)
      .then(function (response) {
        console.log('success');
      })
      .catch(function (error) {
        console.log('error');
        console.log(error);
      })
  }

  addNewItem(item){

    let filmArray = this.state.film;

    if(Array.isArray(item)){
      filmArray = item.concat(this.state.film);
    }else{
      filmArray.unshift(item);
    }

    this.setState({
      film: filmArray
    });
    this.handleSave();
  }

  render(){
    let tableFilms, sequelFilms, serialFilms, parserStat, dataWork;
    if (this.state.film !== '') {

      tableFilms = <TableFilm items={this.state.film} />;

      let sequelList = this.state.film.filter(item => item.sequel && item.sequel !== false);
      sequelFilms = <TableFilm items={sequelList} />;

      let serialList = this.state.film.filter(item => item.serial);
      serialFilms = <TableFilm items={serialList} />;

      let parseStatLengthAll = this.state.film.length;
      let parseStatLengthParse = this.state.film.filter(item => item.serial || item.serial === false);
      parserStat = <ParserStat countAll={parseStatLengthAll} countSerial={parseStatLengthParse.length} />

      dataWork = <DataWork newItem={this.addNewItem} />

    } else {
      tableFilms = null;
      sequelFilms = null;
      serialFilms = null;
      parserStat = null;
      dataWork = null;
    }

    return (
      <div className="App">
        {parserStat}
        <div className="data-work">
        </div>
        <Tabs>
          <div label="All">
            {tableFilms}
          </div>
          <div label="Sequel">
            {sequelFilms}
          </div>
          <div label="Serial">
            {serialFilms}
          </div>
          <div label="Data work">
            {dataWork}
          </div>
        </Tabs>
      </div>
    );
  }
  
}

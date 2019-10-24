import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './SequelList.css';

export default class SeasonEpisodes extends Component {

  /*
    - проверяем есть ли атрибут "current"
    - если есть выставляем текущий сезон и эпизод
    - выбираем сезон, проверяем сколько в сезоне эпизодов, формируем список
    - при клике выставляем выбранное
  */

  constructor(props) {
    super(props);
    this.state = {
        selectSeason: '',
        showAllSeason: false,
        showEditCurrent: false
    };
    if(this.props.data.current){
      let cur = this.props.data.current;
      let startE = cur.indexOf("e");
      let currentS = cur.slice(1, startE);
      let currentE = cur.slice(startE + 1);
      this.state = {
        selectSeason: this.props.data.current, 
        currentS: currentS, 
        currentE: currentE,
        showAllSeason: false,
        showEditCurrent: false
      };
    }

    this.handleSelectSeason = this.handleSelectSeason.bind(this);
    this.handleSelectEpisode = this.handleSelectEpisode.bind(this);
    this.getCountEpisodes = this.getCountEpisodes.bind(this);
    this.sendNewCurrent = this.sendNewCurrent.bind(this);
    this.handelClickShow = this.handelClickShow.bind(this);
    this.handelClickEdit = this.handelClickEdit.bind(this);
  }

  handelClickShow(){
    this.setState({
      showAllSeason: !this.state.showAllSeason
    });
  }

  handelClickEdit(){
    this.setState({
      showEditCurrent: !this.state.showEditCurrent
    });
  }

  getCountEpisodes(slcSeason){
    let findStr = "s"+slcSeason+"e";
    let arr = this.props.data.episodes;
    let countEp = 0;
    arr.map((el) => {
      if(el.indexOf(findStr) >= 0){
        countEp = el.replace(findStr, '')
      }
    });
    return countEp;
  }

  handleSelectSeason(event){
    let countEp = this.getCountEpisodes(event.target.value)
    this.setState({selectSeason: countEp});
    this.setState({currentS: event.target.value});
  }
  handleSelectEpisode(event){
    this.setState({currentE: event.target.value});
    let cur = "s"+this.state.currentS+"e"+event.target.value;
    this.props.selCur(cur, this.props.id);
  }

  sendNewCurrent(){
    let cur = "s"+this.state.currentS+"e"+this.state.currentE;
    this.props.selCur(cur, this.props.id);
  }

  createSelect(countItem){
    let selectOption = [];
    for(let i = 1; i <= countItem; i++) {
      selectOption.push(<option key={i} value={i}>{i}</option>);
    }
    return selectOption;
  }

  render() {
    let listEpisodes, thisCurrent;
    let arr = this.props.data.episodes;
    let lastSeas = arr[arr.length - 1];
    if(this.props.data.current){
      if (lastSeas === this.props.data.current) {
        thisCurrent = 'full';
      }else{
        thisCurrent = this.props.data.current
      }
    }else{
      thisCurrent = null;
    }
    
    if(this.state.selectSeason > 0 ){
      listEpisodes = <select onClick={this.handleSelectEpisode}>{this.createSelect(this.state.selectSeason)}</select>
    }else{
      listEpisodes = null;
    }

    let iconShow, iconEdit;
    const isShow = this.state.showAllSeason;
    const isEdit = this.state.showEditCurrent;

    if(isShow){
      iconShow = <FontAwesomeIcon icon={['fas', 'minus']} color="rgb(255, 65, 108)" />
    }else{
      iconShow = <FontAwesomeIcon icon={['fas', 'plus']} color="rgb(0, 176, 155)" />
    }

    if(isEdit){
      iconEdit = <FontAwesomeIcon icon={['fas', 'eye-slash']} color="rgb(255, 65, 108)" />
    }else{
      iconEdit = <FontAwesomeIcon icon={['fas', 'eye']} color="rgb(0, 176, 155)" />
    }

    // console.log(this.state.selectSeason)
    return (
      <div>
        <p>Total seasons: {arr.length} <button onClick={this.handelClickShow} className="icon-btn">{iconShow}</button></p>
        <p className={isShow ? 'serial-list show' : 'serial-list hide'}>
          {
            arr.map((item,idx) => {
              return <span key={idx}>{item}; </span>
            })
          }
        </p>
        <p>Current: {thisCurrent} <button onClick={this.handelClickEdit} className="icon-btn">{iconEdit}</button></p>
        <div className={isEdit ? 'selects show' : 'selects hide'}>
          <select onClick={this.handleSelectSeason}>
            {this.createSelect(arr.length)}
          </select>
          {listEpisodes}
        </div>
      </div>
      );
  }
}
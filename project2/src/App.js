import React, { Component } from 'react';
import {TextField} from 'material-ui';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {

  constructor(props) {
    super(props)
    this.state={
      text:'',
      data:[]
    }
    this.search=this.search.bind(this)
    this.searchUpdate=this.searchUpdate.bind(this)
  }

  search() {
    return fetch('https://www.eg.bucknell.edu/~amm042/service/q?text=${this.state.text}&limit=$10')
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(this.state.text)
      console.log(responseJson)
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });
  }

  searchUpdate(e, t) {
    this.setState({text:t})
  }

  render() {
    return (
      <div className="App">
      <TextField value={this.state.text} onKeyPress={this.search} onChange={this.searchUpdate} hintText="Enter Course Information"/>
      </div>
    );
  }
}

export default App;

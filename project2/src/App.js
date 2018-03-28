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
    return fetch("https://www.eg.bucknell.edu/~amm042/service/q?limit=10&text="+ this.state.text)
    .then(response => {
      var json = response.json()
      return json
    })
    .then(jsonResponse => {
      var results = []
      for (var i = 0; i < jsonResponse["message"].length;  i += 1) {
        results.push(jsonResponse["message"][i]["Course"] + " " + jsonResponse["message"][i]["Title"]
        + " " + jsonResponse["message"][i]["Instructor"] + " " + jsonResponse["message"][i]["Meeting Time"])
      }
      this.setState({data: results.map((text) => <p>{text}</p>)})
    })
  }

  searchUpdate(e, t) {
    this.setState({text:t})
  }

  render() {
    return (
      <div className="App">
      <h1> Bucknell Course Information 2.0 </h1>
      <TextField value={this.state.text} onKeyUp={this.search} onChange={this.searchUpdate} hintText="Enter Course Information"/>
      {this.state.data}
      </div>
    );
  }
}

export default App;

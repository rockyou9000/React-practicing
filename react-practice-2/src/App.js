import React, {Component} from 'react';
import Label from './Label';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {

  render(){
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
        <Label name="我只是个标签"></Label>
      </div>
    )
  }
}

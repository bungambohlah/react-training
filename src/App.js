import React, { Component } from 'react';
import logo from './logo.svg';
import './Header.css';

const Header = (props) => {
  return (
    <div class="App-header">
      <h1>{props.children}</h1>
    </div>
  )
}

const Footer = (props) => {
  return (
    <div class="App-footer">
      <h1>{props.children}</h1>
    </div>
  )
}

class App extends Component {
 state = {
  "headerTitle": "Header",
  "footerTitle": "Footer"
 }

 constructor(props) {
  super(props)
  this.input = React.createRef();
 }

 changeHeaderTitle = (e) => {
   this.setState({headerTitle: this.input.current.value})
  console.log(this.input.current.value)
 }

 render() {
  return (
    <div>
      <Header>{this.state.headerTitle}</Header>
      <p>Content</p>
      <input type="text" ref={this.input}></input>
      <button onClick={this.changeHeaderTitle}>Change Header Title</button>
      <Footer>{this.state.footerTitle}</Footer>
    </div>
  )
 }
}

export default App;

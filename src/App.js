import logo from './chucknorris.jpg';
import './App.css';

import Searchbox from'./components/Searchbox';
import React, {Component} from 'react';
import JokeList from './components/JokeList';

const queryURL = 'https://api.chucknorris.io/jokes/search?query=';

class App extends Component {
    constructor(){
      super()
      this.state={
        searchfield:'',
        joke:[]
      }
    }

textChange = (event) => {
    this.setState({searchfield: event.target.value});
  }

  BtnPressed = (event) => {
  if(event.charCode===13){
    fetch(queryURL+this.state.searchfield)
    .then(response=> response.json())
    .then(newJoke => this.setState({joke: newJoke.result}))

  }}

  render() {

    return(
    
      <div className="App-header">

        <img src={logo} className="App-logo grow" alt="oopsoops"/>
        <h1>The ultimate Chuck Norris Joke App</h1>
        <Searchbox textvalue = {this.textChange} pressedBtn = {this.BtnPressed}/>
        <JokeList jokes = {this.state.joke}/>
        </div>  

        );
  }
}

  export default App;

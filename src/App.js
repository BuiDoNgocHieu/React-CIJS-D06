import './App.css';
import { Home } from "./component/HomePage";
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
  };
  componentDidMount() {
    console.log("day la did mount")
    fetch("https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple")
      .then(res => res.json())
      .then(data => {
        console.log(data.results)
        this.setState({
          data: data.results
        })
      })
  }
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
};


export default App;

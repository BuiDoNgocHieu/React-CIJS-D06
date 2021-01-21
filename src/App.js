import './App.css';
import React from 'react'
import { Main } from './Components/Main'
import { Search } from './Components/Search'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    // this.search = this.search.bind(this)
  }
  // search(){

  // }
  search = (e) => {
    if (e.key == 'Enter') {
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${e.target.value}`)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          this.setState({ books: data.items })
        })
    }
  }
  render() {
    return (
      <div className="App border" >
        <Search search={this.search} />
        <Main books={this.state.books ? this.state.books : []} />
      </div>
    );
  }
}

export default App;
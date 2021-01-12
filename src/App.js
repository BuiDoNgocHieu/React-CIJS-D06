import React from 'react'
import './App.css';
import { Header } from './components/Header'
import { SearchBar } from './components/SearchBar'
import { emojiList } from './resources/emojiLisit'
import { filterEmoji } from './Controllers/emojiUlist'
import { EmojiList } from './components/EmojiList'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    // this.createEmojis = this.createEmojis.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(event) {
    this.setState({ searchText: event.target.value })
  }

  render() {
    let filteredEmojis = filterEmoji(this.state.searchText, emojiList)

    return (
      <React.Fragment>
        <Header />
        <SearchBar onChange={this.handleInput} />
        <EmojiList emojis={filteredEmojis} />
      </React.Fragment>

    );
  }

}

export default App;
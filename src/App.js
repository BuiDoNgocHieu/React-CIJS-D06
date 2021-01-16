import './App.css'
import { Component } from 'react'
import { Collection } from './Components/Collection'
import { SectionList } from './Components/SectionList'
import { pokemon } from './pokemondata'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemons: pokemon,
      remain: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      fire: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      water: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      grass: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    }
    this.move = this.move.bind(this)
  }
  move(from, to, index) {
    console.log(from, to, index)
    this.setState((oldState) => {
      let tempState = JSON.parse(JSON.stringify(oldState))
      if (tempState[from][index] === 1) {
        tempState[from][index] = 0
        tempState[to][index] = 1
        return tempState
      }
    })

  }
  render() {
    return (
      <div className="app-cont">
        <Collection pokemons={pokemon} type="remain" remain={this.state.remain} move={this.move} />
        <SectionList pokemons={pokemon} fire={this.state.fire} water={this.state.water} grass={this.state.grass} move={this.move} />
      </div>
    )
  }
}
export default App;
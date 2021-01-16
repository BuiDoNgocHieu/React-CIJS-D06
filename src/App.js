import { Card } from './components/Card'
import { Component } from 'react'
import './App.css';
import { Header } from './components/Header'
import { Button } from './components/Button'
import { EndSection } from './components/EndSection'


const back = 'https://i-ione.vnecdn.net/2015/09/30/back-4685-1443580564.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=KU5eZouHZPAmhkHXc_qSyg'
const finish = 'https://media.istockphoto.com/illustrations/cartoon-finish-sign-illustration-id478290143'

let pokemon_data = [
  'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
  'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png',
  'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png',
  'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
  'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png',
  'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
  'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
  'https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png',
  'https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png',

]

pokemon_data = [].concat(pokemon_data, pokemon_data)
pokemon_data = pokemon_data.map(img => {
  return {
    front: img,
    back: back,
    finish: finish,
    isUp: false,
    isFlip: 0,
    isFinish: false
  }
})
// console.log(pokemon_data)


class App extends Component {
  constructor(props) {
    super(props)
    pokemon_data.sort((a, b) => Math.random() - Math.random())
    this.state = {
      data: pokemon_data,
      selected: []
    }
    this.select = this.select.bind(this)
    this.flip = this.flip.bind(this)
    this.check = this.check.bind(this)
  }
  check() {
    let data = JSON.parse(JSON.stringify(this.state.data))
    let selected = JSON.parse(JSON.stringify(this.state.selected))
    let a = selected[0]
    let b = selected[1]
    // console.log(data[a],data[b])
    setTimeout(() => {
      if (data[a].front === data[b].front) {
        data[a].isFinish = true
        data[b].isFinish = true
      } else {
        data[a].isUp = false
        data[b].isUp = false
      }
      this.setState({
        data: data,
        selected: []
      })
    }, 250)
  }
  componentDidUpdate() {
    if (this.state.selected.length === 2) {
      this.check()
    }
  }

  select(indx) {
    this.setState(oldState => {
      let data = JSON.parse(JSON.stringify(oldState.data))
      let selected = JSON.parse(JSON.stringify(oldState.selected))
      if (!data[indx].isFinish) {
        if (selected.indexOf(indx) === -1) {
          selected.push(indx)
        } else {
          selected = []
        }
        data[indx].isUp = !data[indx].isUp

        return {
          ...oldState,
          selected,
          data
        }
      }
    })
  }
  flip(indx, val) {
    // console.log(`flip ${indx} ${val}`)
    this.setState(oldState => {
      let data = JSON.parse(JSON.stringify(oldState.data))
      data[indx].isFlip = val
      return {
        data: data
      }
    })
  }

  render() {
    return (
      <div>
        < Header />
        < Button />
        <div className="app-cont ">
          {
            this.state.data.map((link, indx) => {
              return <Card {...link} indx={indx} key={indx} select={this.select} flip={this.flip} />
            })
          }
        </div>
        < EndSection />
      </div>

    );
  }
}
export default App
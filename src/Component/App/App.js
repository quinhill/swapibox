import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import ButtonContainer from '../ButtonContainer/ButtonContainer';
import CardContainer from '../CardContainer/CardContainer';
import {
  generateNumber, 
  fetchData
} from '../../helper/apiCaller';

class App extends Component {
  constructor() {
    super()

    this.state = {
      crawlData: {},
      people: [],
      planets: [],
      vehicles: [],
      favorites: [],
      type: '',
      displayFavorites: false
    }
  }
  
  async componentDidMount() {
    const crawlData = await generateNumber()
    this.setState({crawlData})
  }

  checkState = (button) => {
    if (this.state[button].length) {
      this.setState({type: button})
    } else {
      this.getData(button)
    }
  }

  getData = async (button) => {
      const data = await fetchData(button)
      this.sortState(button, data)
  }

  sortState = (button, data) => {
    if (button === 'people') {
      this.setState({ people: data, type: button })
    } else if (button === 'planets') {
      this.setState({ planets: data, type: button })
    } else if (button === 'vehicles') {
      this.setState({ vehicles: data, type: button })
    }
  }

  addFavorite = (e) => {
    e.preventDefault()
    const id = e.target.value
    const type = e.target.name
    const card = this.state[type].find(object => {
      return object.index == id
    })
    card.favorite = !card.favorite
    if (card.favorite) {
      card.id = 'favorite'
    } else {
      card.id = 'none'
    }
    this.setFavorites(type)
  }

  setFavorites = (type) => {
    const favorites = this.state[type].filter(object => {
      return object.favorite
    })
    this.setState({favorites})
  }

  displayFavorites = () => {
    if (this.state.favorites.length) {
      this.setState({
        type: 'favorites',
        displayFavorites: !this.state.displayFavorites
      })
    } else {
      this.setState({type: 'crawlData'})
    }
  }

  render() {
    return (
      <div className="App">
        <Header 
          favorites={this.state.favorites}
          displayFavorites={this.displayFavorites}
        />
        <ButtonContainer 
          checkState={this.checkState}
        />
        <CardContainer
          people={this.state.people}
          planets={this.state.planets}
          vehicles={this.state.vehicles}
          type={this.state.type}
          crawlData={this.state.crawlData}
          favorites={this.state.favorites}
          addFavorite={this.addFavorite}
        />
      </div>
    );
  }
}

export default App;

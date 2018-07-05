import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import ButtonContainer from '../ButtonContainer/ButtonContainer';
import CardContainer from '../CardContainer/CardContainer';
import {
  fetchCrawl, 
  fetchPeople, 
  fetchPlanets,
  fetchVehicles
} from '../../helper/apiCaller';

class App extends Component {
  constructor() {
    super()

    this.state = {
      crawlData: {},
      peopleData: [],
      planetData: [],
      vehicleData: []
    }
  }

  async componentDidMount() {
    const crawlData = await fetchCrawl()
    this.setState({crawlData})
  }

  getData = async (button) => {
    switch(button) {
      case 'people':
        const peopleData = await fetchPeople()
        this.setState({ 
          crawlData: '',
          peopleData,
          planetData: [],
          vehicleData: [] 
        })
        break;
      case 'planets':
        const planetData = await fetchPlanets()
        this.setState({ 
          crawlData: '',
          peopleData: [],
          planetData,
          vehicleData: []
        })
        break;
      case 'vehicles':
        const vehicleData = await fetchVehicles()
        this.setState({
          crawlData: '',
          peopleData: [],
          planetData: [],
          vehicleData
        })
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ButtonContainer 
          getData={this.getData}
        />
        <CardContainer
          crawlData={this.state.crawlData}
          peopleData={this.state.peopleData}
          planetData={this.state.planetData}
          vehicleData={this.state.vehicleData}
        />
      </div>
    );
  }
}

export default App;

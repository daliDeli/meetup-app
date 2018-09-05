import React, { Component } from 'react';
import { Header } from './common/Header';
import { Footer } from './common/Footer';
import { getEvents } from './services/communication';
import { MainPage } from './MainPage';

class App extends Component {
  constructor(){
    super();

    this.state = {
      listOfEvents: [],
      modalIsOpen: false,
      eventNumber: 0,
    }
    
  }

  componentDidMount(){
    getEvents()
      .then(eventInfo => this.setState({
        listOfEvents: eventInfo.data.events
      })
      )
      .catch(error => {console.log(error.message)})
  }

  openModal = (e) => {
    this.setState({ eventNumber: e.target.getAttribute('index') });
    this.setState({ modalIsOpen:true });
  }

  closeModal = (event) => {
    event.stopPropagation();
    this.setState({ modalIsOpen:false });
  }

  render() {
    return (
      
      <div className="App">
        <Header/>
        <MainPage 
          events={this.state.listOfEvents}
          openModal={this.openModal}
          closeModal={this.closeModal}
          modalIsOpen={this.state.modalIsOpen}
          eventNumber={this.state.eventNumber}
        />          
        <Footer/>
      </div>
    );
  }
}

export default App;

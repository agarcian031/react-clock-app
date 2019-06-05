import React, { Component } from 'react'
import Clock from './Clock';
import { Container, Button, Divider, Header, Segment} from 'semantic-ui-react';


class App extends Component {
  state = {
    showClock: false, 
  }; 

  // componentDidMount() { 
  //   fetch("https://swapi.co/api/people/1")
  //     .then( res => {
  //       debugger
  //     })
  // }; 

  toggleShowClock = () => {
    // Will return what we want the new state to be and then refresh that state. 
    this.setState( state => {
      return {
        showClock: !state.showClock, 
      };
    });
  }; 

  render() {
    return (
      <Container textAlign="center" style={{marginTop: "25px", letterSpacing: "3px", }}>
        <Header textAlign="center" color="purple" size="huge"><i className="fas fa-clock"></i>
        React Clock</Header>
        <Divider/>
        <Segment raised color="blue"> 
          <Button onClick={this.toggleShowClock} 
          color="purple" 
          size="mini" 
          inverted>
            Toggle Clock</Button>
            
            {this.state.showClock && <Clock/>}
        </Segment>
      </Container>
    )
  }
}

export default App; 

// Lifecycle Methods:::: 
// Toggle Clock will have the clock mount when clicked and then unmount when not clicked. 
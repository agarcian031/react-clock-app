import React, { Fragment, Component } from 'react'
import { Divider, Card} from 'semantic-ui-react';

export class Clock extends Component {
  state ={ date: new Date() }; 

  // will run once our render has finished running
  componentDidMount() {
    this.ticker = setInterval(() => this.tick(), 1000)
  }; 

  tick = () => this.setState({ date: new Date()}); 

  componentWillUnmount() {
    clearInterval(this.ticker); 
  };

  render() {
    return (
      <Fragment>
      <Divider/>
        <Card color="purple" centered raised>
          <Card.Content textAlign="center"> 
          <p>{this.state.date.toLocaleTimeString()}</p>
          </Card.Content>
        </Card>
      </Fragment>
    )
  }
}

export default Clock

// You can't have objects being rendered as children in react. 
// ToLocaleTimeString will grab the local time and turn it into a string before it is rendered in order to prevent any errors. 
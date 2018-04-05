import React from 'react'
import {getBeers} from '../actions/beers'
import {Grid, Card, Dimmer, Loader} from 'semantic-ui-react';
import axios from 'axios';

class Beers extends React.Component {
  state = {beers: []}


  componentDidMount() {
    axios.get('/api/all_beers')
      .then(res => {
        this.setState({beers: res.data.entries})
      })
  }

  showBeer = () => {
    const {beers} = this.state
    return (
      beers.map(beer =>
        <Card key={beer.id}>
          <Card.Header>
            {beer.name}
          </Card.Header>
          <Card.Meta>
            {beer.abv}
          </Card.Meta>
          <Card.Description>
            {beer.description}
          </Card.Description>
        </Card>
      )
    )
  }

  render() {
    return (
      <Card.Group itemsPerRow={5}>
        {this.showBeer()}
      </Card.Group>
    )
  }
}


export default Beers
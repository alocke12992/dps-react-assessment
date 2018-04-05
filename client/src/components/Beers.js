import React from 'react'
// import {getBeers} from '../actions/beers'
//Will go back when I refactor to include redux
import {Grid, Card, Dimmer, Loader} from 'semantic-ui-react';
import axios from 'axios';
import styled from 'styled-components';

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
            ABV: {beer.abv}
          </Card.Meta>
          <Card.Description>
            <Truncated>
              {beer.description}
            </Truncated>
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

const Truncated = styled.div`
  width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; 
`


export default Beers
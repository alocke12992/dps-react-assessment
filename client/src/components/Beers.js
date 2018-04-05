import React from 'react'
// import {getBeers} from '../actions/beers'
//Will go back when I refactor to include redux
import {Link} from 'react-router-dom';
import {Grid, Card, Segment, Header, Divider, Image} from 'semantic-ui-react';
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

  getLabel = (beer) => {
    return (
      <Image src={beer.labels.large} />
    )
  }

  showBeer = () => {
    const {beers} = this.state
    return (
      beers.map(beer =>
        <Card key={beer.id}>
          {beer.labels ? this.getLabel(beer) : <Image src={defaultImage} />}
          <Card.Header style={{color: 'black'}}>
            {beer.name}
          </Card.Header>
          <Card.Meta>
            ABV: {beer.abv}
          </Card.Meta>
          <Card.Content extra>
            <Link to={`/beers/${beer.name}`} beer={beer}>
              View More
            </Link>
          </Card.Content>
        </Card>
      )
    )
  }

  render() {
    return (
      <Segment centerAligned inverted>
        <Header>Beers</Header>
        <Card.Group itemsPerRow={4}>
          {this.showBeer()}
        </Card.Group>
      </Segment>
    )
  }
}

const defaultImage = 'http://pickledwig.com/wp-content/themes/directorypress/thumbs/na.gif'

const Truncated = styled.div`
  width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; 
`


export default Beers
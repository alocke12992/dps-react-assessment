import React from 'react'
// import {getBeers} from '../actions/beers'
//Will go back when I refactor to include redux
import {Card, Image} from 'semantic-ui-react';
import axios from 'axios';
import styled from 'styled-components';

class Breweries extends React.Component {
  state = {breweries: []}


  componentDidMount() {

    axios.get('/api/all_breweries')
      .then(res => {
        this.setState({
          breweries: res.data.entries,
        })
      })
  }

  showImage = (brewery) => {
    return (
      <Image src={brewery.images.medium} />
    )
  }

  showBrewery = () => {
    const {breweries} = this.state
    const {images} = this.state
    return (
      breweries.map(brewery =>
        <Card
          key={brewery.id}
          href={brewery.website}
        >
          {brewery.images ? this.showImage(brewery) : null}
          <Card.Header>
            {brewery.name}
          </Card.Header>
          <Card.Meta>
            {brewery.established ? `EST: ${brewery.established}` : null}
          </Card.Meta>
          <Card.Description>
            <Truncated>
              {brewery.description}
            </Truncated>
          </Card.Description>
        </Card>
      )
    )
  }

  render() {
    return (
      <Card.Group itemsPerRow={4}>
        {this.showBrewery()}
      </Card.Group>
    )
  }
}

const Truncated = styled.div`
  width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; 
`


export default Breweries
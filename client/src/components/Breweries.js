import React from 'react'
// import {getBeers} from '../actions/beers'
//Will go back when I refactor to include redux
import {Card, Segment, Header, Image} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Breweries extends React.Component {
  state = {breweries: []}

  defaultImage

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
      <Image size='large' src={brewery.images.large} />
    )
  }

  showBrewery = () => {
    const {breweries} = this.state
    const {images} = this.state
    return (
      breweries.map(brewery =>
        <Card
          key={brewery.id}
        >
          {brewery.images ? this.showImage(brewery) : <Image src={defaultImage} />}
          <Card.Header style={{color: 'black'}}>
            {brewery.name}
          </Card.Header>
          <Card.Content extra>
            <Link to={`/breweries/${brewery.name}`}>
              View
            </Link>
          </Card.Content>
        </Card>
      )
    )
  }

  render() {
    return (
      <Segment inverted centerAligned>
        <Header>Breweries</Header>
        <Card.Group itemsPerRow={4}>
          {this.showBrewery()}
        </Card.Group>
      </Segment>
    )
  }
}
const defaultImage = 'http://pickledwig.com/wp-content/themes/directorypress/thumbs/na.gif'

export default Breweries
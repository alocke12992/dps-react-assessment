import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import {
  Segment,
  Header,
  Image,
  Container,
  Grid,
  Button
} from 'semantic-ui-react';


class BeerView extends React.Component {
  state = {beer: {}}

  componentDidMount() {
    const {name} = this.props.match.params
    axios.get(`/api/beer/${name}`)
      .then(res => {
        this.setState({beer: res.data.entries[0]})
      })
  }

  getLabel = () => {
    const {beer} = this.state
    return (
      <Image src={beer.labels.large} />
    )
  }

  render() {
    const {beer} = this.state
    return (
      <Grid centered columns={3}>
        <Grid.Column centered>
          {beer.labels ? this.getLabel(beer) : <Image src={defaultImage} />}
        </Grid.Column>
        <Grid.Column>
          <Segment inverted>
            <Container fluid>
              {/* TODO: Add the rest of the beer details here */}
              <Header style={styles.header} as='h1'>{beer.name}</Header>
              <Header style={styles.subHeader} as='h4'>ABV: {beer.abv}</Header>
              <p>{beer.description}</p>
            </Container>
          </Segment>
          <Link to={'/content'}>
            <Button inverted>
              Back
              </Button>
          </Link>
          <Link to={'/breweries'}>
            <Button inverted>
              All Beers
              </Button>
          </Link>
        </Grid.Column>
      </Grid>
    )
  }
}

const styles = {
  header: {
    color: 'white'
  },
  subHeader: {
    color: 'lightgray'
  }
}

const defaultImage = 'http://pickledwig.com/wp-content/themes/directorypress/thumbs/na.gif'

export default BeerView
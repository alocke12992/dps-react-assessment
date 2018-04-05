import React from 'react'
import Beers from './Beers'
import Breweries from './Breweries'
import {Grid, Segment, Header} from 'semantic-ui-react'

const Content = () => (
  <Grid columns={2} centered style={{marginTop: '50px'}}>>
    <Grid.Column width={7}>
      <Segment>
        <Header>Beers</Header>
        <Beers />
      </Segment>
    </Grid.Column>
    <Grid.Column width={7}>
      <Segment>
        <Header>Breweries</Header>
        <Breweries />
      </Segment>
    </Grid.Column>
  </Grid>
)

export default Content
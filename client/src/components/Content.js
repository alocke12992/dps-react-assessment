import React from 'react'
import Beers from './Beers'
import Breweries from './Breweries'
import {Grid} from 'semantic-ui-react'

const Content = () => (
  <Grid columns={2} centered>
    <Grid.Column width={7}>
      <Beers />
    </Grid.Column>
    <Grid.Column width={7}>
      <Breweries />
    </Grid.Column>
  </Grid>
)

export default Content
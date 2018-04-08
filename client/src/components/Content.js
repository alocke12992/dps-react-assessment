import React from 'react'
import Beers from './Beers'
import Breweries from './Breweries'
import {Grid} from 'semantic-ui-react'

const Content = () => (
  <Grid centered>
    <Grid.Column computer={7} mobile={14}>
      <Beers />
    </Grid.Column>
    <Grid.Column computer={7} mobile={14}>
      <Breweries />
    </Grid.Column>
  </Grid>
)

export default Content
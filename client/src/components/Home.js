import React from 'react'
import {Grid, Button, Header} from 'semantic-ui-react'
import {Link} from 'react-router-dom';

const Home = () => (
  <Grid centered>
    <Grid.Column>
      <Header as='h1'>Welcome to the Beertopia</Header>
      <Button><Link to='/beers'>Beer Me!</Link></Button>
    </Grid.Column>
  </Grid>
)

export default Home;
import React, {Component, Fragment} from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Flash from './Flash';
import Home from './Home';
import Beers from './Beers';
import Breweries from './Breweries';
import Brewery from './Brewery'
import Content from './Content';
import Rules from './Rules';
import BeerView from './BeerView';
import {Switch, Route} from 'react-router-dom';
import {Segment} from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <Segment style={styles.background}>
        <NavBar />
        <Flash />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/beers' component={Beers} />
          <Route exact path='/beers/:name' component={BeerView} />
          <Route exact path='/content' component={Content} />
          <Route exact path='/breweries' component={Breweries} />
          <Route exact path='/breweries/:name' component={Brewery} />
          <Route exact path='/dem_rules' component={Rules} />
          <Route component={NoMatch} />
        </Switch>
      </Segment>
    );
  }
}

const styles = {
  background: {
    backgroundColor: 'black',
    backgroundSize: 'cover'
  },
}

export default App;

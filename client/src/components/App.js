import React, {Component, Fragment} from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Flash from './Flash';
import Home from './Home';
import Beers from './Beers';
import Breweries from './Breweries'
import Content from './Content'
import Rules from './Rules';
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
          <Route exact path='/content' component={Content} />
          <Route exact path='/breweries' component={Breweries} />
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
  },
}

export default App;

import React, {Component, Fragment} from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Flash from './Flash';
import Home from './Home';
import Beers from './Beers';
import Rules from './Rules';
import {Switch, Route} from 'react-router-dom';
import {Segment} from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar style={styles.background} />
        <Flash />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/beers' component={Beers} />
          <Route exact path='/dem_rules' component={Rules} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

const styles = {
  background: {
    backgroundColor: 'black !important',
  },
}

export default App;

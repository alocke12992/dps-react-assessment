import React, {Component} from 'react'
import {Menu} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router'

class NavBar extends Component {
  activeItem = (navPath) => {
    return navPath === this.props.location.pathname;
  }

  render() {
    return (
      <div style={{marginBottom: '50px'}}>
        <Menu inverted pointing>
          <Link to='/'>
            <Menu.Item name='Home' active={this.activeItem('/')} />
          </Link>
          <Link to='/content'>
            <Menu.Item name='All' active={this.activeItem('/content')} />
          </Link>
          <Link to='/beers'>
            <Menu.Item name='Beer' active={this.activeItem('/beers')} />
          </Link>
          <Link to='/breweries'>
            <Menu.Item name='Breweries' active={this.activeItem('/breweries')} />
          </Link>
          <Menu.Menu position='right'>
            <Link to='/dem_rules'>
              <Menu.Item name='Dem Rules' />
            </Link>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

export default withRouter(NavBar);

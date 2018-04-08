import React from 'react';
import {Button, Input, Segment} from 'semantic-ui-react';
import '../styles/index.css';
import styled from 'styled-components';

class SearchBar extends React.Component {
  state = {term: ''}

  onChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  render() {
    return (
      <Bar basic textAlign='center'>
        <Search
          fluid
          focus
          value={this.state.term}
          onChange={e => this.onChange(e.target.value)}
          placeholder='Search'
        />
      </Bar>
    );
  }
}

const Search = styled(Input) `
  background-color: black !important;
  color: white !important;

`
const Bar = styled(Segment) `
    background-color: black !important;
  color: white !important;
`




export default SearchBar;
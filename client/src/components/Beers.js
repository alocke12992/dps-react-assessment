import React from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroller';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {setFlash} from '../actions/flash';
import SearchBar from './SearchBar';
import {
  Button,
  Card,
  Container,
  Dimmer,
  Header,
  Item,
  Loader,
  Segment,
  Image,
} from 'semantic-ui-react';

class Beers extends React.Component {
  state = {beers: [], loading: true, page: 1, hasMore: true}

  componentDidMount() {
    this.fetchBeers(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({beers: [], loading: true, hasMore: true, page: 1});
    this.fetchBeers(nextProps, 1);
  }

  fetchBeers = (props, page = 1) => {
    const {dispatch} = this.props;
    axios.get(`/api/all_beers?page=${page}&per_page=12`)
      .then(res => {
        const {data} = res;
        console.log(data);
        if (data.total_pages) {
          if (data.total_pages === page)
            this.setState({hasMore: false});
          this.setState({beers: [...this.state.beers, ...data.entries], total_pages: data.total_pages, page})
        } else {
          this.setState({beers: data.entries, hasMore: false})
        }
      })
      .catch(err => {
        dispatch(setFlash('Unable to retrieve beers. Please try again', 'red'))
      })
      .then(() => {
        this.setState({loading: false});
      });
  }

  loadingMessage = () => {
    return (
      <Dimmer active style={{height: '100vh'}}>
        <Loader>Loading</Loader>
      </Dimmer>
    );
  }

  loadMoreBeers = () => {
    this.fetchBeers(this.props, this.state.page + 1)
  }

  showLabel = (beer) => {
    return (
      <Image size='large' src={beer.labels.large} />
    )
  }

  search = (term) => {
    const {dispatch} = this.props;
    axios.get(`/api/search_beers?query=${term}`)
      .then(res => {
        this.setState({beers: res.data.entries})
      });
  }

  displayBeers = () => {
    const {beers} = this.state;
    return beers.map(beer => {
      return (
        <Card key={beer.name}>
          <Card.Content>
            {beer.labels ? this.showLabel(beer) : <Image src={defaultImage} />}
            <Card.Header>{beer.name}</Card.Header>
            <Card.Meta> ABV: {beer.abv}</Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <Link to={`/beers/${beer.name}`}>
              View
            </Link>
          </Card.Content>
        </Card>
      );
    });
  }

  render() {
    const {page, hasMore, loading} = this.state;
    if (loading) {
      return (
        <Container>
          {this.loadingMessage()}
        </Container>
      )
    } else {
      return (
        <Segment inverted >
          <Header as='h1' textAlign='center' inverted>Beers</Header>
          <SearchBar onSearchTermChange={this.search} />
          <Container style={{height: '100vh', overflowY: 'scroll', overflowX: 'hidden'}}>
            <InfiniteScroll
              pageStart={page}
              loadMore={this.loadMoreBeers}
              hasMore={hasMore}
              useWindow={false}
            >
              <Card.Group stackable itemsPerRow={3}>
                {this.displayBeers()}
              </Card.Group>
            </InfiniteScroll>
          </Container>
        </Segment>
      );
    }
  }

}

const defaultImage = 'http://pickledwig.com/wp-content/themes/directorypress/thumbs/na.gif'

export default connect()(Beers);

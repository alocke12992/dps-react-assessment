import React from 'react'
import {Header, Button, Segment, Container, Image} from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import logo from '../images/logo.png';
import styled from 'styled-components';

const Home = () => (
  <Background textAlign='center'>
    <Container>
      <Logo src={logo} />
      <Header
        as='h2'
        inverted
        style={{fontSize: '1.7em', fontWeight: 'normal'}}
      />
      <Link to='/content'>
        <Button color='blue' size='huge'>Beer Me</Button>
      </Link>
    </Container>
  </Background>
)

const Background = styled(Segment) `
  background: no-repeat center fixed;
  background-color: black !important;
  background-size: cover;
  padding: 0;
  height: 100vh;
`
const Logo = styled(Image) `
    margin: 0 auto;
    margin-top: 10em;
    height: 40vh;
`
export default Home;

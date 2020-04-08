import React, {Component} from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/Main';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      
<div className="demo-big-content">
    <Layout>
    <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Shannon Ervin Portfolio</Link>} scroll>
            <Navigation>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact Me</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/resume">Resume</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Shannon Ervin</Link>}>
            <Navigation>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact Me</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/resume">Resume</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
    );
  }
}

export default App;

import React from 'react';
import Landing from '../Landing';
import About from '../About';
import Projects from '../Projects';
import Resume from '../Resume';
import Contact from '../Contact'
import {Switch, Route} from 'react-router-dom';

const Main = () => (
    <Switch>
        <Route exact path= "/" component={Landing}/>
        <Route path = "/aboutme" component={About}/>
        <Route path= "/portfolio" component={Projects}/>
        <Route path= "/resume" component={Resume}/>
        <Route path= "/contact" component={Contact}/>
    </Switch>
)

export default Main;
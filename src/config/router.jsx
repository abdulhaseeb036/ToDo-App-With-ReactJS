import React from 'react';
import {BrowserRouter as Router, Route,} from 'react-router-dom';
// import {BrowserRouter as Link, Route,} from 'react-router-dom';
import Home from '../Home';
import About from '../About';

class Approuter extends React.Component {
    render (){
        return (
            <Router>
                <Route exact component={Home} path='/' />
                <Route exact component={About} path='/about' />
            </Router>
        )
    }
}
export default Approuter;
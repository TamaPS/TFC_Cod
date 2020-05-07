import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header'
import Navbar from './Navbar'
import Carrousel from './Carrousel/Carrousel'
import Cards from './cards/Cards'
import FooterAll from './footers/FooterAll'
import {
    HashRouter as Router,
    Switch,
    Link,
    Route
    
  } from "react-router-dom";

function Index() {
    return (
        <Router>
        
            <Route exact path="/" component={FooterAll} />
            <Route exact path="/hola" component={Carrousel} />

        </Router>
    );
}

export default Index;

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}

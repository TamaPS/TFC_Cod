import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header'
import Navbar from './Navbar'
import Carrousel from './Carrousel/Carrousel'
import Cards from './cards/Cards'
import FooterAll from './footers/FooterAll'
import {
    BrowserRouter,
    Switch,
    Link,
    Route
    
  } from "react-router-dom";

function Index() {
    return (
        <BrowserRouter basename="#">
        <Link to="/hola">hola</Link>
            <Route exact path="/hola" component={Header} />
        </BrowserRouter>
    );
}

export default Index;

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}

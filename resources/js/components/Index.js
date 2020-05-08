import React from 'react';
import ReactDOM from 'react-dom';
import Principal from './Principal'
import History from './History'
import Condiciones from './Condiciones'
import Legal from './Informacion-legal'
import mAmbiente from './Medio-ambiente'
import pCookies from './Politica-de-cookies'
import pPrivacidad from './Politica-de-privacidad'
import Productos from './Productos'
import {
    HashRouter as Router,
    Switch,
    Link,
    Route
    
  } from "react-router-dom";

function Index() {
    return (
        <Router>
        
            <Route exact path="/" component={Principal} />
            <Route exact path="/history" component={History} />
            <Route exact path="/medio-ambiente" component={mAmbiente} />
            <Route exact path="/condiciones" component={Condiciones} />
            <Route exact path="/legal" component={Legal} />
            <Route exact path="/politica-de-cookies" component={pCookies} />
            <Route exact path="/politica-de-privacidad" component={pPrivacidad} />
            <Route exact path="/productos" component={Productos} />

        </Router>
    );
}

export default Index;

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}

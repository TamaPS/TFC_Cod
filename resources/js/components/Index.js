import React from 'react';
import ReactDOM from 'react-dom';
import Principal from './Principal'
import History from './History'
import Condiciones from './Condiciones'
import InformacionLegal from './InformacionLegal'
import MedioAmbiente from './MedioAmbiente'
import PoliticaDeCookies from './PoliticaDeCookies'
import PoliticaDePrivacidad from './PoliticaDePrivacidad'
import Productos from './Productos'
import Producto from './Producto'
import Retagers from './Retagers'
import {
    HashRouter as Router,
    Route
  } from "react-router-dom";

function Index() {
    return (
        <Router>
        
            <Route exact path="/" component={Principal} />
            <Route exact path="/history" component={History} />
            <Route exact path="/medio-ambiente" component={MedioAmbiente} />
            <Route exact path="/condiciones" component={Condiciones} />
            <Route exact path="/legal" component={InformacionLegal} />
            <Route exact path="/politica-de-cookies" component={PoliticaDeCookies} />
            <Route exact path="/politica-de-privacidad" component={PoliticaDePrivacidad} />
            <Route exact path="/productos" component={Productos} />
            <Route exact path="/producto" component={Producto} />
            <Route exact path="/retagers" component={Retagers} />

        </Router>
    );
}

export default Index;

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}

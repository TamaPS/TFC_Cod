import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import Header from './Header'
import Navbar from './Navbar'
import Carrousel from './Carrousel'
import Cards from './cards/Cards'
import FooterAll from './footers/FooterAll'
import Login from './Login';
import Register from './Register';

function Index() {
    return (
        <div>
            <Header />
            <Navbar />
            <Carrousel />
            <Cards />
            <FooterAll />
            <Login />
            <Register />
        </div>
=======
import Principal from './Principal'
import History from './History'
import Condiciones from './Condiciones'
import Legal from './Informacion-legal'
import mAmbiente from './Medio-ambiente'
import pCookies from './Politica-de-cookies'
import pPrivacidad from './Politica-de-privacidad'
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
            <Route exact path="/medio-ambiente" component={mAmbiente} />
            <Route exact path="/condiciones" component={Condiciones} />
            <Route exact path="/legal" component={Legal} />
            <Route exact path="/politica-de-cookies" component={pCookies} />
            <Route exact path="/politica-de-privacidad" component={pPrivacidad} />
            <Route exact path="/productos" component={Productos} />
            <Route exact path="/producto" component={Producto} />
            <Route exact path="/retagers" component={Retagers} />

        </Router>
>>>>>>> master
    );
}

export default Index;

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}

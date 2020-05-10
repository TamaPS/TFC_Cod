import React from 'react';
import ReactDOM from 'react-dom';
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
    );
}

export default Index;

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}

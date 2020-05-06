import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header'
import Navbar from './Navbar'
import Carrousel from './Carrousel'
import Cards from './cards/Cards'
import Copyright from './footers/Copyright'
import Login from './Login'

function Index() {
    return (
        <div>
            <Header />
            <Navbar />
            <Carrousel />
            <Cards />
            <Copyright />
        </div>
    );
}

export default Index;

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}

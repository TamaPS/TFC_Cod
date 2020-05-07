import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header'
import Navbar from './Navbar'
import Carrousel from './Carrousel/Carrousel'
import Cards from './cards/Cards'
import FooterAll from './footers/FooterAll'
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route
  } from "react-router-dom";

function Index() {
    return (
        <Router>
            <div>
            <Link to="/footer">Footer</Link>
                <Switch>
                
                <Route path="/footer">
                    <Header />
                </Route>
                <Route path="/">
                <Header />
                <Navbar />
                <Carrousel />
                <Cards />
                <FooterAll />
            </Route>

                </Switch>
            </div>
        </Router>
    );
}

export default Index;

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}

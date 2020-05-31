import React from 'react';
import Header from './header/Header'
import Navbar from './navbar/Navbar'
import Carrousel from './carrousel/Carrousel'
import Cards from './cards/Cards'
import FooterAll from './footers/FooterAll'

class Unauthorized extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <Navbar />
                <div className="container text-center">
                    <br />
                    <br />
                    <br />
                    <h4>ACCESO NO AUTORIZADO</h4>
                    <br />
                    <br />
                    <br />
                </div>
                <FooterAll />
            </div>
        )
    }
}

export default Unauthorized;
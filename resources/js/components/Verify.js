import React from 'react';
import VerifyProps from './verify/VerifyProps';
import Navbar from './navbar/Navbar';
import FooterAll from './footers/FooterAll';
import Header from './header/Header';
import Carrousel from './carrousel/Carrousel';
import Cards from './cards/Cards';

class Verify extends React.Component {
    constructor(props) {
        super(props);
    }

    //DEVUELVE LOS COMPONENTES DE PRINCIPAL Y RECOGE LOCATION DE THROW PARA RECOGER EL TOKEN DEL USUARIO A VERIFICAR
    render() {
        const { location } = this.props;
        return (
            <div>
                <Header />
                <Navbar />
                <VerifyProps location={location} />
                <Carrousel />
                <Cards />
                <FooterAll />
            </div>
        )
    }
}

export default Verify;
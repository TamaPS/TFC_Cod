import React from 'react';
import VerifyProps from './verify/VerifyProps';
import Navbar from './navbar/Navbar';
import FooterAll from './footers/FooterAll';
import Header from './header/Header';
import Carrousel from './carrousel/Carrousel';
import Cards from './cards/Cards';
import { userContext } from './login/userContext';

class Verify extends React.Component {
    constructor(props) {
        super(props);
    }

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
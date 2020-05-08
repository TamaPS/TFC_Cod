import React from 'react';
import Header from './header/Header'
import Navbar from './navbar/Navbar'
import Carrousel from './carrousel/Carrousel'
import Cards from './cards/Cards'
import FooterAll from './footers/FooterAll'

class Principal extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
           <div>
                <Header />
                <Navbar />
                <Carrousel />
                <Cards />
                <FooterAll />
           </div>
        )
    }
}

export default Principal;
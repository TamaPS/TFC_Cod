import React from 'react';
import Privacidad from './politica-de-privacidad/Privacidad'
import Copyright from './footers/Copyright'
import NavbarShown from './navbar/NavbarShown';

class PoliticaDePrivacidad extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
           <div>
                <NavbarShown />
                <Privacidad />
                <Copyright />
           </div>
        )
    }
}

export default PoliticaDePrivacidad;
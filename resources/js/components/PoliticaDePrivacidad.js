import React from 'react';
import Navbar from './navbar/Navbar'
import Privacidad from './politica-de-privacidad/Privacidad'
import Copyright from './footers/Copyright'

class PoliticaDePrivacidad extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
           <div>
                <Navbar />
                <Privacidad />
                <Copyright />
           </div>
        )
    }
}

export default PoliticaDePrivacidad;
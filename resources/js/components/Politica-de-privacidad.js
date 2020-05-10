import React from 'react';
import Navbar from './navbar/Navbar'
import Privacidad from './politica-de-privacidad/pPrivacidad'
import Copyright from './footers/Copyright'

class pPrivacidad extends React.Component{
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

export default pPrivacidad;
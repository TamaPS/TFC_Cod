import React from 'react';
import Cookies from './politica-de-cookies/Cookies'
import Copyright from './footers/Copyright'
import NavbarShown from './navbar/NavbarShown';

class PoliticaDeCookies extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
           <div>
                <NavbarShown />
                <Cookies />
                <Copyright />
           </div>
        )
    }
}

export default PoliticaDeCookies;
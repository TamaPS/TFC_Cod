import React from 'react';
import Navbar from './navbar/Navbar'
import Cookies from './politica-de-cookies/Cookies'
import Copyright from './footers/Copyright'

class PoliticaDeCookies extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
           <div>
                <Navbar />
                <Cookies />
                <Copyright />
           </div>
        )
    }
}

export default PoliticaDeCookies;
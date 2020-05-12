import React from 'react';
import Conditions from './condiciones/Conditions'
import Copyright from './footers/Copyright'
import NavbarShown from './navbar/NavbarShown';

class Condiciones extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
           <div>
                <NavbarShown />
                <Conditions />
                <Copyright />
           </div>
        )
    }
}

export default Condiciones;
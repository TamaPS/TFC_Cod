import React from 'react';
import Ambiente from './medio-ambiente/Ambiente'
import Copyright from './footers/Copyright'
import NavbarShown from './navbar/NavbarShown';

class MedioAmbiente extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
           <div>
                <NavbarShown />
                <Ambiente />
                <Copyright />
           </div>
        )
    }
}

export default MedioAmbiente;
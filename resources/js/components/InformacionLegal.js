import React from 'react';
import Legal from './informacion-legal/Legal'
import Copyright from './footers/Copyright'
import NavbarShown from './navbar/NavbarShown';

class InformacionLegal extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
           <div>
                <NavbarShown />
                <Legal />
                <Copyright />
           </div>
        )
    }
}

export default InformacionLegal;
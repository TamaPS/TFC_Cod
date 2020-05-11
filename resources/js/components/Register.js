import React from 'react';
import BaseRegister from './register/BaseRegister'
import Copyright from './footers/Copyright';
import NavbarShown from './navbar/NavbarShown';

class Register extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
           <div>
                <NavbarShown />
                <BaseRegister />
                <Copyright />
           </div>
        )
    }
}

export default Register;
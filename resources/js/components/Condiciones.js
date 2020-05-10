import React from 'react';
import Navbar from './navbar/Navbar'
import Conditions from './condiciones/Conditions'
import Copyright from './footers/Copyright'

class Condiciones extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
           <div>
                <Navbar />
                <Conditions />
                <Copyright />
           </div>
        )
    }
}

export default Condiciones;
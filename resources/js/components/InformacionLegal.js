import React from 'react';
import Navbar from './navbar/Navbar'
import Legal from './informacion-legal/Legal'
import Copyright from './footers/Copyright'

class InformacionLegal extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
           <div>
                <Navbar />
                <Legal />
                <Copyright />
           </div>
        )
    }
}

export default InformacionLegal;
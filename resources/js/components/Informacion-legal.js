import React from 'react';
import Navbar from './navbar/Navbar'
import Texto from './informacion-legal/Texto'
import Copyright from './footers/Copyright'

class Legal extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
           <div>
                <Navbar />
                <Texto />
                <Copyright />
           </div>
        )
    }
}

export default Legal;
import React from 'react';
import Navbar from './navbar/Navbar'
import Ambiente from './medio-ambiente/Ambiente'
import Copyright from './footers/Copyright'

class MedioAmbiente extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
           <div>
                <Navbar />
                <Ambiente />
                <Copyright />
           </div>
        )
    }
}

export default MedioAmbiente;
import React from 'react';
import Navbar from './navbar/Navbar'
import Ambiente from './medio-ambiente/mAmbiente'
import Copyright from './footers/Copyright'

class mAmbiente extends React.Component{
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

export default mAmbiente;
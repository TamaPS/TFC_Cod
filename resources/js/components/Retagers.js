import React from 'react';
import Header from './header/Header'
import Navbar from './navbar/Navbar'
import BaseRetagers from './retagers/BaseRetagers'
import Copyright from './footers/Copyright';

class Retagers extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
           <div>
                <Header />
                <Navbar />
                <BaseRetagers />
                <Copyright />
           </div>
        )
    }
}

export default Retagers;
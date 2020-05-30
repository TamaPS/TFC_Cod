import React from 'react';
import Header from './header/Header'
import Navbar from './navbar/Navbar'
import BaseProductos from './productos/BaseProductos'
import Copyright from './footers/Copyright';

class Productos extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
           <div>
                <Header />
                <Navbar />
                <BaseProductos filters={this.props.filters} />
                <Copyright />
           </div>
        )
    }
}

export default Productos;
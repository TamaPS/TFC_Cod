import React from 'react';
import Header from './header/Header'
import Navbar from './navbar/Navbar'
import RowProductos from './productos/RowProductos'
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
                <RowProductos filters={this.props.filters} />
                <Copyright />
           </div>
        )
    }
}

export default Productos;
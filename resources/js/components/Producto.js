import React from 'react';
import Header from './header/Header'
import Navbar from './navbar/Navbar'
import BaseProducto from './producto/BaseProducto'
import Copyright from './footers/Copyright';

class Producto extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
           <div>
                <Header />
                <Navbar />
                <BaseProducto />
                <Copyright />
           </div>
        )
    }
}

export default Producto;
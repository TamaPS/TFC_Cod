import React from 'react';
import Header from './header/Header'
import Navbar from './navbar/Navbar'
import BaseProducto from './producto/BaseProducto'
import Copyright from './footers/Copyright';
import { withRouter } from "react-router-dom";

class Producto extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const { location } = this.props;
        return(
           <div>
                <Header />
                <Navbar />
                <BaseProducto id={location.search.slice(4)} />
                <Copyright />
           </div>
        )
    }
}

export default withRouter(Producto);
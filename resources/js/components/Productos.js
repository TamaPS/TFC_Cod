import React from 'react';
import Header from './header/Header'
import Navbar from './navbar/Navbar'
import BaseProductos from './productos/BaseProductos'
import Copyright from './footers/Copyright';
import { withRouter } from "react-router-dom";

class Productos extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const { location } = this.props;
        var filters = this.props.filters;

        if(location.search.slice(0,4) == '?id='){
            filters = {user_id: location.search.slice(4)};
        }

        return(
           <div>
                <Header />
                <Navbar />
                <BaseProductos filters={filters} />
                <Copyright />
           </div>
        )
    }
}

export default withRouter(Productos);
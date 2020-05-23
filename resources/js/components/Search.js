import React from 'react';
import Header from './header/Header'
import Navbar from './navbar/Navbar'
import BaseSearch from './search/BaseSearch'
import Copyright from './footers/Copyright';

class Search extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
           <div>
                <Header />
                <Navbar />
                <BaseSearch />
                <Copyright />
           </div>
        )
    }
}

export default Search;
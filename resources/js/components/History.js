import React from 'react';
import Story from './story/Story'
import Copyright from './footers/Copyright'
import NavbarShown from './navbar/NavbarShown';

class History extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
           <div>
                <NavbarShown />
                <Story />
                <Copyright />
           </div>
        )
    }
}

export default History;
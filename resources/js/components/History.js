import React from 'react';
import Navbar from './navbar/Navbar'
import Story from './story/Story'
import Copyright from './footers/Copyright'

class History extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
           <div>
                <Navbar />
                <Story />
                <Copyright />
           </div>
        )
    }
}

export default History;
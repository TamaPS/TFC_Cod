import React from 'react';
import Header from './header/Header'
import Navbar from './navbar/Navbar'
import BaseTop from './top/BaseTop'
import Copyright from './footers/Copyright';
import { userContext } from './login/userContext';

class Top extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        var from = this.props.from;
        return(
           <div>
                <Header />
                <Navbar />
                <userContext.Consumer>
                    {
                        function (userData) {
                            return (
                                <BaseTop userData={userData} from={from}/>
                            )
                        }
                    }
                </userContext.Consumer>
                <Copyright />
           </div>
        )
    }
}

export default Top;
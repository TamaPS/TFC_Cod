import React from 'react';
import Header from './header/Header'
import Navbar from './navbar/Navbar'
import BaseFavorites from './favorites/BaseFavorites'
import Copyright from './footers/Copyright';
import { userContext } from './login/userContext';

class Favorites extends React.Component{
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
                                <BaseFavorites userData={userData} from={from}/>
                            )
                        }
                    }
                </userContext.Consumer>
                <Copyright />
           </div>
        )
    }
}

export default Favorites;
import React from 'react';
import Header from './header/Header'
import Navbar from './navbar/Navbar'
import BaseRetagers from './retagers/BaseRetagers'
import Copyright from './footers/Copyright';
import { userContext } from './login/userContext';

class Retagers extends React.Component{
    constructor(props){
        super(props);
    }

    //USERDATA Y FROM SE UTILIZA EN EL CASO DE QUERER VER LOS RETAGERS CERCA, FROM=SELECTOR DE 'CERCA'
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
                                <BaseRetagers userData={userData} from={from}/>
                            )
                        }
                    }
                </userContext.Consumer>
                <Copyright />
           </div>
        )
    }
}

export default Retagers;
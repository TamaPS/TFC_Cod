import React from 'react';
import Header from './header/Header'
import Navbar from './navbar/Navbar'
import BaseFavorites from './favorites/BaseFavorites'
import Copyright from './footers/Copyright';
import Unauthorized from './Unauthorized';
import { userContext } from './login/userContext';

class Favorites extends React.Component {
    constructor(props) {
        super(props);
    }

    //DEVUELVE EL COMPONENTE DE FAVORITOS DEL USUARIO SI HAY ID, Y SI NO UN COMPONENTE UNAUTHORIZED
    render() {
        var from = this.props.from;
        return (

            <userContext.Consumer>
                {
                    function (userData) {
                        if (userData.user.id) {
                            return (
                                <div>
                                    <Header />
                                    <Navbar />
                                    <BaseFavorites userData={userData} from={from} />
                                    <Copyright />
                                </div>
                            );
                        } else {
                            return (<Unauthorized />);
                        }
                    }
                }
            </userContext.Consumer>

        )
    }
}

export default Favorites;
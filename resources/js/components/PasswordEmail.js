import React from 'react';
import Copyright from './footers/Copyright';
import NavbarShown from './navbar/NavbarShown';
import Email from './password/Email';
import { userContext } from './login/userContext';

class PasswordEmail extends React.Component {
    constructor(props) {
        super(props);
    }

    //SE PASA EL USERDATA PARA COMPROBAR EN EL COMPONENTE EMAIL SI SE ESTA LOGUEADO
    render() {
        return (
            <div>
                <NavbarShown />
                <userContext.Consumer>
                    {
                        function (userData) {
                            return (
                                <Email userData={userData} />);
                        }
                    }
                </userContext.Consumer>
                <Copyright />
            </div>
        )
    }
}

export default PasswordEmail;
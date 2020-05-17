import React from 'react';
import Copyright from './footers/Copyright';
import NavbarShown from './navbar/NavbarShown';
import Email from './password/Email';
import { userContext } from './login/userContext';

class PasswordEmail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { location } = this.props;
        return (
            <div>
                <NavbarShown />
                <userContext.Consumer>
                    {
                        function (userData) {
                            return (
                                <Email location={location} userData={userData} />);
                        }
                    }
                </userContext.Consumer>
                <Copyright />
            </div>
        )
    }
}

export default PasswordEmail;
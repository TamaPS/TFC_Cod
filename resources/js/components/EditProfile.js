import React from 'react';
import BaseEditProfile from './editprofile/BaseEditProfile';
import Copyright from './footers/Copyright';
import NavbarShown from './navbar/NavbarShown';
import Unauthorized from './Unauthorized';
import { userContext } from './login/userContext';

class EditProfile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <userContext.Consumer>
                {
                    function (userData) {
                        if (userData.user.id) {
                            return (
                                <div>
                                    <NavbarShown />
                                    <BaseEditProfile userData={userData} />
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

export default EditProfile;
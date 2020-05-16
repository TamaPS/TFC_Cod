import React from 'react';
import BaseEditProfile from './editprofile/BaseEditProfile';
import Copyright from './footers/Copyright';
import NavbarShown from './navbar/NavbarShown';
import { userContext } from './login/userContext';
class EditProfile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NavbarShown />
                <userContext.Consumer>
                    {
                        function (userData) {
                            return (
                                <BaseEditProfile userData={userData}/>
                            )
                        }
                    }
                </userContext.Consumer>
                <Copyright />
            </div>
        )
    }
}

export default EditProfile;
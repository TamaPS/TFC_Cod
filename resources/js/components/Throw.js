import React from 'react';
import { userContext } from './login/userContext';
import {
    withRouter,
    Redirect
} from "react-router-dom";
class Throw extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const locationFrom = this.props.location;
        const to = this.props.to;
        return (
            <userContext.Consumer>
                {
                    function (user) {
                        return (
                            <Redirect to=
                                {{
                                    pathname: to,
                                    locationFrom: locationFrom,
                                    user: user,
                                }}
                            />
                        );
                    }
                }
            </userContext.Consumer>
        )
    }
}

export default withRouter(Throw);
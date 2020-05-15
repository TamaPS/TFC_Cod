import React from 'react';
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
            <Redirect to=
                {{
                    pathname: to,
                    locationFrom: locationFrom,
                }}
            />
        )
    }
}

export default withRouter(Throw);
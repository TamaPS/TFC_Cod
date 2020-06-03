import React from 'react';
import {
    withRouter,
    Redirect
} from "react-router-dom";
class Throw extends React.Component {
    constructor(props) {
        super(props);
    }

    //REDIRECCIÓN AL COMPONENTE QUE LLEGA POR PROPS (TO) Y LE AÑADE LA URL (LOCATION), EVITA QUE SE VEA EL TOKEN DE VERIFY
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
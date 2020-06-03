import React from 'react';

class Loading extends React.Component {
    constructor(props) {
        super(props);
    }

    //COMPONENTE LOADING CON SPINNER
    render() {
        return (
            <div>
                <div className="container text-center">
                    <br />
                    <br />
                    <br />
                    <h4>Cargando</h4>
                    <br />
                    <br />
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                </div>
            </div>
        )
    }
}

export default Loading;
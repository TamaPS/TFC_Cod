import React from 'react';

class VerifyProps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            class: '',
            message: '',
        }
    }

    componentDidMount() {
        const { location } = this.props;
        const self = this;

        axios.post('/api' + location.locationFrom.pathname, { rememberToken: location.locationFrom.search })
            .then(function (response) {
                self.setState({ class: 'alert-success', message: 'Te has verificado correctamente, ya puedes iniciar sesión.' });
            })
            .catch(function (error) {
                self.setState({ class: 'alert-danger', message: 'Tu cuenta no se ha podido verificar correctamente, ponte en contacto con nosotros a través de info@retaged.com' });
            });
    }

    render() {
        return (
            <div>
                <div className={`alert ${this.state.class} alert-dismissible fade show`} role="alert">
                    <p>{this.state.message}</p>
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
        )
    }
}

export default VerifyProps;
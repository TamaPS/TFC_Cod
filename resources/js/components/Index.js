import React from 'react';
import ReactDOM from 'react-dom';
import Principal from './Principal'
import History from './History'
import Condiciones from './Condiciones'
import InformacionLegal from './InformacionLegal'
import MedioAmbiente from './MedioAmbiente'
import PoliticaDeCookies from './PoliticaDeCookies'
import PoliticaDePrivacidad from './PoliticaDePrivacidad'
import Productos from './Productos'
import Producto from './Producto'
import Retagers from './Retagers'
import Login from './login/Login'
import Register from './register/Register'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import { userContext } from './login/userContext';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        let self = this;
        axios.post('/api/logout')
            .then(function (response) {
                self.setState({ user: {} })
            });
    }

    componentDidMount() {
        let self = this;
        axios.get('/api/user')
            .then(function (response) {
                self.setState({ user: response.data })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        const value = {
            user: this.state.user,
            logoutUser: this.handleLogout
        }
        return (
            <Router>
                <userContext.Provider value={value}>
                    <Login />
                    <Register />
                    <Switch>
                        <Route exact path="/" component={Principal} />
                        <Route exact path="/history" component={History} />
                        <Route exact path="/medio-ambiente" component={MedioAmbiente} />
                        <Route exact path="/condiciones" component={Condiciones} />
                        <Route exact path="/legal" component={InformacionLegal} />
                        <Route exact path="/politica-de-cookies" component={PoliticaDeCookies} />
                        <Route exact path="/politica-de-privacidad" component={PoliticaDePrivacidad} />
                        <Route exact path="/productos" component={Productos} />
                        <Route exact path="/producto" component={Producto} />
                        <Route exact path="/retagers" component={Retagers} />
                    </Switch>
                </userContext.Provider>
            </Router>
        );
    }
}

export default Index;

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}

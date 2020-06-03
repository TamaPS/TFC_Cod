import React from 'react';
import ReactDOM from 'react-dom';
import Principal from './Principal';
import History from './History';
import Condiciones from './Condiciones';
import InformacionLegal from './InformacionLegal';
import MedioAmbiente from './MedioAmbiente';
import PoliticaDeCookies from './PoliticaDeCookies';
import PoliticaDePrivacidad from './PoliticaDePrivacidad';
import Productos from './Productos';
import Producto from './Producto';
import Retagers from './Retagers';
import Login from './login/Login';
import NewProduct from './NewProduct';
import Register from './Register';
import Throw from './Throw';
import Verify from './Verify';
import PasswordEmail from './PasswordEmail';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import { userContext } from './login/userContext';
import EditProfile from './EditProfile';
import Favorites from './Favorites';
import Top from './Top';
import Search from './Search';
import EditProduct from './EditProduct';


class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };
        this.handleLogout = this.handleLogout.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    //MÉTODO INICIAL
    componentDidMount() {
        this.handleLogin();
    }

    //DESECHA LOS DATOS DEL USUARIO EN EL FRONT Y LO DESLOGUEA DEL BACK
    handleLogout() {
        let self = this;
        axios.post('/api/logout')
            .then(function (response) {
                self.setState({ user: {} })
            });
    }

    //RECOGE DEL BACK DATOS DEL USUARIO (SI NO HAY LOGIN ES VACIO)
    handleLogin() {
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
            logoutUser: this.handleLogout,
            loginUser: this.handleLogin
        }
        return (
            <Router>
                <userContext.Provider value={value}>
                    <Login />
                    <Switch>
                        <Route exact path="/" component={Principal} />
                        <Route exact path="/history" component={History} />
                        <Route exact path="/medio-ambiente" component={MedioAmbiente} />
                        <Route exact path="/condiciones" component={Condiciones} />
                        <Route exact path="/legal" component={InformacionLegal} />
                        <Route exact path="/politica-de-cookies" component={PoliticaDeCookies} />
                        <Route exact path="/politica-de-privacidad" component={PoliticaDePrivacidad} />
                        <Route exact path="/productos">
                            <Productos filters={{}} />
                        </Route>
                        <Route exact path="/productos-denim">
                            <Productos
                                filters={
                                    {
                                        name: 'denim',
                                        description: 'denim',
                                    }
                                }
                            />
                        </Route>
                        <Route exact path="/productos-punto">
                            <Productos
                                filters={
                                    {
                                        name: 'punto',
                                        description: 'punto',
                                    }
                                }
                            />
                        </Route>
                        <Route exact path="/productos-menos10">
                            <Productos
                                filters={
                                    {
                                        price: 10
                                    }
                                }
                            />
                        </Route>
                        <Route exact path="/productos-retager">
                            <Productos filters={{}} />
                        </Route>
                        <Route exact path="/producto" component={Producto} />
                        <Route exact path="/retagers">
                            <Retagers from="" />
                        </Route>
                        <Route exact path="/retagers-top" component={Top} />
                        <Route exact path="/retagers-cerca">
                            <Retagers from="cerca" />
                        </Route>
                        <Route exact path="/favorites" component={Favorites} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/verify" component={Verify} />
                        <Route exact path="/password-email" component={PasswordEmail} />
                        <Route exact path="/edit-profile" component={EditProfile} />
                        <Route exact path="/nuevo-producto" component={NewProduct} />
                        <Route exact path="/editar-producto" component={EditProduct} />
                        <Route exact path="/account-activation" >
                            <Throw to="/verify" />
                        </Route>
                        <Route exact path="/busqueda" component={Search} />
                    </Switch>
                </userContext.Provider>
            </Router>
        );
    }
}

export default Index;

//PARA QUE INDEX APAREZCA EN LA VIEW
if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
    withRouter
} from "react-router-dom";
class BaseEditProfilePassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            success: '',
            password: true,
            passwordConfirmation: true,
        }
        this.handlePaswordShow = this.handlePaswordShow.bind(this);
        this.handlePaswordConfirmationShow = this.handlePaswordConfirmationShow.bind(this);
    }

    handlePaswordShow() {
        this.state.password ? this.setState({ password: false }) : this.setState({ password: true })
    }

    handlePaswordConfirmationShow() {
        this.state.passwordConfirmation ? this.setState({ passwordConfirmation: false }) : this.setState({ passwordConfirmation: true })
    }

    /*RENDERIZA FORMULARIO QUE PERMITE MODIFICAR LA CONTRASEÑA DEL USUARIO */

    render() {
        return (
            <Formik
                initialValues={{ password: '', password_confirmation: '' }}
                validationSchema={Yup.object({
                    password: Yup.string()
                        .matches(/^(?=.*\d)(?=.*[a-zA-Z])[\w~@#$%^&*+=`|{}:;!.?\"()\[\]-]{8,30}$/,
                            'La contraseña debe tener entre 8 y 30 caracteres, al menos un dígito, y letras.')
                        .required('Debes rellenar este campo.'),
                    password_confirmation: Yup.string()
                        .required('Debes rellenar este campo.')
                        .oneOf([Yup.ref('password'), null], 'La contraseña no coincide.'),
                })}
                onSubmit={(values, { setSubmitting, setErrors, resetForm }) => {
                    let self = this;
                    self.setState({ success: '', error: '' });
                    axios.put('/api/user/edit/password', values)
                        .then(function (response) {
                            self.setState({ success: `${self.props.userData.user.name}, tu contraseña ha sido modificada.` });
                            resetForm();
                            setSubmitting(false);
                        })
                        .catch(function (error) {
                            self.setState({ error: 'El formulario tiene errores.' });
                            setSubmitting(false);
                            setErrors({
                                password: error.response.data.errors.password,
                                password_confirmation: error.response.data.errors.password_confirmation,
                            });
                        });
                }}
            >
                {formik => (
                    <Form>
                        <div className="container">
                            <div className="row form">
                                <div className="col-lg-12 col-sm-12">
                                    <div className="form-group">
                                        <label>Contraseña nueva</label>
                                        <div className="input-group">
                                            <Field type={this.state.password ? "password" : "text"} className={formik.errors.password ? "form-control is-invalid" : "form-control"} name="password" />
                                            <div className="input-group-addon ml-2">
                                                <span onClick={this.handlePaswordShow}><i className={`fa ${this.state.password ? "fa-eye-slash" : "fa-eye"}`} aria-hidden="true"></i></span>
                                            </div>
                                            <ErrorMessage name="password">{msg => <div className="invalid-feedback">{msg}</div>}</ErrorMessage>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Repite la Contraseña</label>
                                        <div className="input-group">
                                            <Field type={this.state.passwordConfirmation ? "password" : "text"} className={formik.errors.password_confirmation ? "form-control is-invalid" : "form-control"} name="password_confirmation" />
                                            <div className="input-group-addon ml-2">
                                                <span onClick={this.handlePaswordConfirmationShow}><i className={`fa ${this.state.passwordConfirmation ? "fa-eye-slash" : "fa-eye"}`} aria-hidden="true"></i></span>
                                            </div>
                                            <ErrorMessage name="password_confirmation">{msg => <div className="invalid-feedback">{msg}</div>}</ErrorMessage>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 mx-auto">
                                    {this.state.error &&
                                        <div className="alert alert-danger alert-dismissible fade show" role="alert">{this.state.error}
                                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>}
                                    {this.state.success &&
                                        <div className="alert alert-success alert-dismissible fade show" role="alert">{this.state.success}
                                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>}
                                    <div className="col text-center">
                                        <button type="submit" className="boton-secundario" disabled={(formik.isSubmitting)}>
                                            Guardar contraseña
                                                <span className={formik.isSubmitting ? "spinner-border spinner-border-sm" : "spinner-border spinner-border-sm d-none"} role="status" aria-hidden="true"></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        )
    }
}

export default withRouter(BaseEditProfilePassword);
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
    withRouter
} from "react-router-dom";

class BaseDeleteprofile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            success: '',
        }
    }

    render() {
        return (
            <Formik
                initialValues={{ email: '' }}
                validationSchema={Yup.object({
                    email: Yup.string()
                        .email('Introduce un email válido.')
                        .required('Debes rellenar este campo.'),
                })}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    let self = this;
                    self.setState({ success: '', error: '' });
                    axios.delete('/api/user/delete/' + this.props.userData.user.id + '/' + values.email) //ELIMINAR LA CUENTA EN BACK
                        .then(function (response) {
                            self.setState({ success: 'La cuenta se ha eliminado correctamente.' });
                            resetForm();
                            setSubmitting(false);
                            setTimeout(() => {
                                self.props.userData.logoutUser(); //DESLOGUEA EL USUARIO
                                self.props.history.push('/'); //REDIRECCIONA A INDEX
                            }, 2000)
                        })
                        .catch(function (error) {
                            self.setState({ error: 'Introduce el email con el que te has logueado.' });
                            setSubmitting(false);
                            if (error.response.data.errors) {
                                setErrors({
                                    email: error.response.data.errors.email,
                                });
                            }
                        });
                }}
            >
                {formik => (
                    <Form>
                        <div className="container">
                            <div className="row form">
                                <div className="col text-center">
                                    Al eliminar tu cuenta se eliminarán todos tus productos <br />
                                    ¿Deseas continuar?
                                </div>
                                <div className="col-12 mx-auto">
                                    <div className="form-group">
                                        <label htmlFor="email"></label>
                                        <Field type="text" className={formik.errors.email ? "form-control is-invalid" : "form-control"} name="email" placeholder="Introduce tu email para eliminar la cuenta" />
                                        <ErrorMessage name="email">{msg => <div className="invalid-feedback">{msg}</div>}</ErrorMessage>
                                    </div>
                                </div>
                                <div className="col-12 mx-auto text-center">
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
                                    <button type="submit" className="boton-secundario" id="delcuenta" disabled={(formik.isSubmitting)}>
                                        Eliminar cuenta<span className={formik.isSubmitting ? "spinner-border spinner-border-sm" : "spinner-border spinner-border-sm d-none"} role="status" aria-hidden="true"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Form>
                )
                }
            </Formik>
        )
    }
}

export default withRouter(BaseDeleteprofile);
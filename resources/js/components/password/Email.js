import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
    withRouter
} from "react-router-dom";

class Email extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            success: '',
        }
    }

    componentDidUpdate(prevProps) {
        const { history } = this.props;
        if (this.props !== prevProps) {
            if (this.props.userData) {
                if (this.props.userData.user.id) {
                    history.push("/");
                }
            }
        }
    }

    render() {
        return (
            <Formik
                initialValues={{ email: '' }}
                validationSchema={Yup.object({
                    email: Yup.string()
                        .max(255, 'Email demasiado largo.')
                        .email('Introduce un email válido.')
                        .required('Debes rellenar este campo.'),
                })}
                onSubmit={(values, { setSubmitting, setErrors, resetForm }) => {
                    let self = this;
                    axios.post('/api/password-email', values)
                        .then(function (response) {
                            self.setState({ success: `Se ha enviado un email a ${values.email}, en caso de no recibirlo pontente en contacto con nosotros en info@retaged.com` });
                            resetForm();
                            setSubmitting(false);
                        })
                        .catch(function (error) {
                            console.log(error);
                            if (error.response.data.errors) {
                                setErrors({
                                    email: error.response.data.errors.email,
                                });
                            }
                            self.setState({ success: `Se ha enviado un email a ${values.email}, en caso de no recibirlo pontente en contacto con nosotros en info@retaged.com` });
                            resetForm();
                            setSubmitting(false);
                        });
                }}
            >
                {formik => (
                    <Form>
                        <div className="container">
                            <div className="row form">
                                <div className="alert alert-light" role="alert">
                                    Introduce tu dirección de correo para que te enviemos una nueva contraseña.
                                </div>
                                <div className="col-12 mx-auto">
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <Field type="text" className={formik.errors.email ? "form-control is-invalid" : "form-control"} name="email" />
                                        <ErrorMessage name="email">{msg => <div className="invalid-feedback">{msg}</div>}</ErrorMessage>
                                    </div>
                                </div>
                                <div className="col-12 mx-auto">
                                    {this.state.success &&
                                        <div className="alert alert-success alert-dismissible fade show" role="alert">{this.state.success}
                                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>}
                                    <div className="col text-center">
                                        <button type="submit" className="boton-secundario" id="registrarse" disabled={(formik.isSubmitting)}>
                                            Enviar<span className={formik.isSubmitting ? "spinner-border spinner-border-sm" : "spinner-border spinner-border-sm d-none"} role="status" aria-hidden="true"></span>
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

export default withRouter(Email);
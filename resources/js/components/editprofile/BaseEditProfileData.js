import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
    withRouter
} from "react-router-dom";
class BaseEditProfileData extends React.Component {
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
                initialValues={{ name: this.props.userData.user.name, zip_code: this.props.userData.user.zip_code }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .max(20, 'Nombre demasiado largo.')
                        .required('Debes rellenar este campo.')
                        .test(
                            "checkName",
                            "Ya existe un Retager con este nombre.",
                            value => {
                                return new Promise((resolve, reject) => {
                                    let name = { name: value };
                                    axios.post('/api/user/name', name)
                                        .then(function (response) {
                                            resolve(true);
                                        }).catch(() => {
                                            resolve(false);
                                        });
                                })
                            }
                        ),
                    zip_code: Yup.string()
                        .min(5, 'El código postal debe tener 5 dígitos.')
                        .max(5, 'El código postal debe tener 5 dígitos.')
                        .required('Debes rellenar este campo.'),
                })}
                onSubmit={(values, { setSubmitting, setErrors }) => {
                    let self = this;
                    axios.put('/api/user/edit/data', values)
                        .then(function (response) {
                            self.setState({ success: `${values.name}, tus datos han sido modificados.` });
                            self.props.userData.loginUser();
                            setSubmitting(false);
                        })
                        .catch(function (error) {
                            setErrors({
                                name: error.response.data.errors.name,
                                zip_code: error.response.data.errors.zip_code,
                            });
                            self.setState({ error: 'El formulario tiene errores.' });
                            setSubmitting(false);
                        });
                }}
            >
                {formik => (
                    <Form>
                        <div className="container">
                            <div className="row form">
                                <div className="col-lg-12 col-sm-12">
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="text" className="form-control" name="email" value={this.props.userData.user.email} disabled />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Nombre de Usuario</label>
                                        <Field type="text" className={formik.errors.name ? "form-control is-invalid" : "form-control"} name="name" />
                                        <ErrorMessage name="name">{msg => <div className="invalid-feedback">{msg}</div>}</ErrorMessage>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="zip_code">Código Postal</label>
                                        <Field type="text" className={formik.errors.zip_code ? "form-control is-invalid" : "form-control"} name="zip_code" />
                                        <ErrorMessage name="zip_code">{msg => <div className="invalid-feedback">{msg}</div>}</ErrorMessage>
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
                                            Guardar cambios
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

export default withRouter(BaseEditProfileData);
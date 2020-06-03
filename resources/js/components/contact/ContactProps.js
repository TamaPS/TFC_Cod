import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


class ContactProps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            success: '',
        }
    }

    render() {
        if (this.props.userData.user.id) { //COMPRUEBA SI EL USUARIO ESTA LOGUEADO
            return (
                <Formik
                    initialValues={{ message: '', acepto_envio: false }}
                    validationSchema={Yup.object({
                        message: Yup.string()
                            .required('Debes rellenar este campo.'),
                        acepto_envio: Yup.boolean()
                            .oneOf([true], 'Debes aceptar el envio de datos.'),
                    })}
                    onSubmit={(values, { setSubmitting, setErrors, resetForm }) => {
                        let self = this;
                        self.setState({ success: '' });
                        Object.assign(values, { product_id: this.props.productId });

                        axios.post('/api/contact', values) //MANDA LOS VALORES AL BACK
                            .then(function (response) {
                                self.setState({ success: response.data.success });
                                resetForm();
                                setSubmitting(false);
                            })
                            .catch(function (error) {
                                setErrors({
                                    message: error.response.data.errors.message,
                                });
                                setSubmitting(false);
                            });

                    }}
                >
                    {formik => (
                        <div className="container justify-content-center">
                            <Form>
                                <div className="form-group">
                                    <div className="input-group">
                                        <Field name="message" className={formik.errors.message ? "form-control is-invalid" : "form-control"} as="textarea" placeholder="Escribe aquí tu mensaje para el vendedor." />
                                        <ErrorMessage name="message">{msg => <div className="invalid-feedback">{msg}</div>}</ErrorMessage>
                                    </div>
                                </div>
                                {this.state.success &&
                                    <div className="alert alert-success alert-dismissible fade show" role="alert"><small>{this.state.success}</small>
                                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>}
                                <div className="form-check">
                                    <Field name="acepto_envio" type="checkbox" className={formik.errors.acepto_envio ? "form-check-input is-invalid" : "form-check-input"} />
                                    <label htmlFor="acepto_envio" className="form-check-label"><small>Acepto enviar mis datos de contacto (email) al retager.</small></label>
                                    <ErrorMessage name="acepto_envio">{msg => <div className="invalid-feedback">{msg}</div>}</ErrorMessage>
                                </div>
                                <div className="col text-center">
                                    <button type="submit" className="boton-secundario" disabled={(formik.isSubmitting)}>
                                        Enviar
                                        <span className={formik.isSubmitting ? "spinner-border spinner-border-sm" : "spinner-border spinner-border-sm d-none"} role="status" aria-hidden="true"></span>
                                    </button>
                                </div>
                            </Form>
                        </div>)}
                </Formik>
            )
        } else {
            return (<div className="alert alert-danger" role="alert"><small>Si estas interesado en este producto. Inicia sesión para enviar un mensaje a este retager.</small></div>)
        }
    }
}

export default ContactProps;
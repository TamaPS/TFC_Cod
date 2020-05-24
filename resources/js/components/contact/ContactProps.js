import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


class ContactProps extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.userData.user.id) {
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
                        axios.post('/api/', values)
                            .then(function (response) {
                                console.log(response.data);
                                resetForm();
                                setSubmitting(false);
                                value.loginUser();
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
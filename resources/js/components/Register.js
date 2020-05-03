import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import AvatarEditor from 'react-avatar-editor'

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: 'images/retager2.jpeg',
            allowZoomOut: false,
            position: { x: 0.5, y: 0.5 },
            scale: 1.2,
            preview: null,
            width: 230,
            height: 350,
        }
        this.editor = React.createRef();
        this.handleNewImage = this.handleNewImage.bind(this);
        this.handleScale = this.handleScale.bind(this);
        this.handlePositionChange = this.handlePositionChange.bind(this);
    }

    handleNewImage(e) {
        if (e.target.files[0]) {
            this.setState({ image: e.target.files[0] })
        }
        else {
            this.setState({ image: 'images/retager2.jpeg' })
        }
    }

    handleScale(e) {
        const scale = parseFloat(e.target.value)
        this.setState({ scale })
    }

    handlePositionChange(position) {
        this.setState({ position })
    }

    render() {
        const SUPPORTED_FORMATS = [
            "image/jpg",
            "image/jpeg",
            "image/gif",
            "image/png"
        ];
        return (
            <Formik
                initialValues={{ name: 'Tamara', email: 'tami_noeps@hotmail.com', password: '1234abcd', password_confirmation: '1234abcd', zip_code: '28760', acepto_politica: true, file: undefined }}
                validationSchema={Yup.object({

                    name: Yup.string()
                        .max(255, 'Nombre demasiado largo.')
                        .required('Debes rellenar este campo.'),

                    email: Yup.string()
                        .max(255, 'Email demasiado largo.')
                        .email('Introduce un email válido.')
                        .required('Debes rellenar este campo.'),

                    password: Yup.string()
                        .matches(/^(?=.*\d)(?=.*[a-zA-Z])[\w~@#$%^&*+=`|{}:;!.?\"()\[\]-]{8,30}$/,
                            'La contraseña debe tener entre 8 y 30 caracteres, al menos un dígito, y letras.')
                        .required('Debes rellenar este campo.'),

                    password_confirmation: Yup.string()
                        .required('Debes rellenar este campo.')
                        .oneOf([Yup.ref('password'), null], 'La contraseña no coincide.'),

                    zip_code: Yup.string()
                        .min(5, 'El código postal debe tener 5 dígitos.')
                        .max(5, 'El código postal debe tener 5 dígitos.')
                        .required('Debes rellenar este campo.'),

                    acepto_politica: Yup.boolean()
                        .oneOf([true], 'Debes aceptar nuestra política para registrarte.'),

                }).shape({
                    file: Yup.mixed()
                        .required('Debes rellenar este campo.')
                        .test(
                            "fileFormat",
                            "Unsupported Format",
                            value => value && SUPPORTED_FORMATS.includes(value.type)
                        ),
                })}
                onSubmit={(values, { setSubmitting, setErrors }) => {
                    const imgURL = this.editor.current.getImageScaledToCanvas().toDataURL();
                    axios.get('/sanctum/csrf-cookie').then(response => {
                        axios.post('/api/login', values)
                            .then(function (response) {
                                console.log(response.data);
                            })
                            .catch(function (error) {
                                setErrors({
                                    email: error.response.data.errors.email,
                                    password: error.response.data.errors.password,
                                });
                                setSubmitting(false);
                            });
                    });
                }}
            >
                {formik => (
                    <div className="modal fade" id="registerModal" tabIndex="-1" role="dialog" aria-labelledby="registerModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content form">
                                <div className="modal-body">
                                    <div className="container mt-4">
                                        <div className="row justify-content-center">
                                            <label className="col-xl-6 col-sm-12" />
                                            <Form>
                                                <div className="form-group">
                                                    <label htmlFor="name">Nombre de Usuario</label>
                                                    <Field type="text" className={formik.errors.name ? "form-control is-invalid" : "form-control"} name="name" />
                                                    <ErrorMessage name="name">{msg => <div className="invalid-feedback">{msg}</div>}</ErrorMessage>
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="email">Email</label>
                                                    <Field type="text" className={formik.errors.email ? "form-control is-invalid" : "form-control"} name="email" />
                                                    <ErrorMessage name="email">{msg => <div className="invalid-feedback">{msg}</div>}</ErrorMessage>
                                                </div>

                                                <div className="form-group">
                                                    <label>Contraseña</label>
                                                    <div className="input-group" id="show_hide_password">
                                                        <Field type="password" className={formik.errors.password ? "form-control is-invalid" : "form-control"} name="password" />
                                                        <div className="input-group-addon ml-2">
                                                            <a href=""><i className="fa fa-eye-slash" aria-hidden="true"></i></a>
                                                        </div>
                                                        <ErrorMessage name="password">{msg => <div className="invalid-feedback">{msg}</div>}</ErrorMessage>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label>Repite la Contraseña</label>
                                                    <div className="input-group" id="show_hide_password2">
                                                        <Field type="password" className={formik.errors.password_confirmation ? "form-control is-invalid" : "form-control"} name="password_confirmation" />
                                                        <div className="input-group-addon ml-2">
                                                            <a href=""><i className="fa fa-eye-slash" aria-hidden="true"></i></a>
                                                        </div>
                                                        <ErrorMessage name="password_confirmation">{msg => <div className="invalid-feedback">{msg}</div>}</ErrorMessage>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="zip_code">Código Postal</label>
                                                    <Field type="text" className={formik.errors.zip_code ? "form-control is-invalid" : "form-control"} name="zip_code" />
                                                    <ErrorMessage name="zip_code">{msg => <div className="invalid-feedback">{msg}</div>}</ErrorMessage>
                                                </div>


                                                <br />
                                                <AvatarEditor
                                                    scale={parseFloat(this.state.scale)}
                                                    width={this.state.width}
                                                    height={this.state.height}
                                                    position={this.state.position}
                                                    onPositionChange={this.handlePositionChange}
                                                    image={this.state.image}
                                                    className="editor-canvas"
                                                    ref={this.editor}
                                                />

                                                <input id="file" name="file" type="file" onChange={(event) => {
                                                    formik.setFieldValue("file", event.currentTarget.files[0]);
                                                    this.handleNewImage(event);
                                                }} className={formik.errors.file ? "form-control is-invalid" : "form-control"} />
                                                <ErrorMessage name="file">{msg => <div className="invalid-feedback">{msg}</div>}</ErrorMessage>

                                                <br />
                                                <input
                                                    name="scale"
                                                    type="range"
                                                    onChange={this.handleScale}
                                                    min={this.state.allowZoomOut ? '0.1' : '1'}
                                                    max="2"
                                                    step="0.01"
                                                    defaultValue="1"
                                                />
                                                <br />
                                                <br />
                                                <div className="form-check">
                                                    <Field type="checkbox" className={formik.errors.acepto_politica ? "form-check-input is-invalid" : "form-check-input"} name="acepto_politica" />
                                                    <label htmlFor="acepto_politica" className="form-check-label">Acepto la política de privacidad</label>
                                                    <ErrorMessage name="acepto_politica">{msg => <div className="invalid-feedback">{msg}</div>}</ErrorMessage>
                                                </div>
                                                <br />
                                                <div className="col text-center">
                                                    <button type="submit" className="btn btn-default boton-secundario" id="registrarse" disabled={(formik.isSubmitting)}>
                                                        Registrarse
                                                        <span className={formik.isSubmitting ? "spinner-border spinner-border-sm" : "spinner-border spinner-border-sm d-none"} role="status" aria-hidden="true"></span>
                                                    </button>
                                                </div>
                                            </Form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Formik>
        )
    }
}

export default Register;
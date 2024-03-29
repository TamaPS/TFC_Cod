import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import AvatarEditor from 'react-avatar-editor';
import {
    withRouter
} from "react-router-dom";
class BaseRegister extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: 'images/retagerexample.png',
            allowZoomOut: false,
            position: { x: 0.5, y: 0.5 },
            scale: 1,
            preview: null,
            width: 350,
            height: 490,
            error: '',
            success: '',
            password: true,
            passwordConfirmation: true,
        }
        this.editor = React.createRef();
        this.handleNewImage = this.handleNewImage.bind(this);
        this.handleScale = this.handleScale.bind(this);
        this.handlePositionChange = this.handlePositionChange.bind(this);
        this.handlePaswordShow = this.handlePaswordShow.bind(this);
        this.handlePaswordConfirmationShow = this.handlePaswordConfirmationShow.bind(this);
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

    handlePaswordShow() {
        this.state.password ? this.setState({ password: false }) : this.setState({ password: true })
    }

    handlePaswordConfirmationShow() {
        this.state.passwordConfirmation ? this.setState({ passwordConfirmation: false }) : this.setState({ passwordConfirmation: true })
    }

    handleNewImage(e) {
        if (e.target.files[0]) {
            this.setState({ image: e.target.files[0] })
        }
        else {
            this.setState({ image: 'images/retagerexample.png' })
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
            "image/png"
        ];
        return (
            <Formik
                initialValues={{ name: '', email: '', password: '', password_confirmation: '', zip_code: '', acepto_politica: false, image: '' }}
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
                                    axios.post('/api/register/name', name) //COMPRUEBAS QUE EXISTA EL NOMBRE (REGISTERCONTROLLER)
                                        .then(function (response) {
                                            resolve(true);
                                        }).catch(() => {
                                            resolve(false);
                                        });
                                })
                            }
                        ),
                    email: Yup.string()
                        .max(255, 'Email demasiado largo.')
                        .email('Introduce un email válido.')
                        .required('Debes rellenar este campo.')
                        .test(
                            "checkEmail",
                            "Ya existe un Retager con este email.",
                            value => {
                                return new Promise((resolve, reject) => {
                                    let email = { email: value };
                                    axios.post('/api/register/email', email) //COMPRUEBAS QUE EXISTA EL MAIL EN REGISTERCONTROLLER
                                        .then(function (response) {
                                            resolve(true);
                                        }).catch(() => {
                                            resolve(false);
                                        });
                                })
                            }
                        ),
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
                    image: Yup.mixed()
                        .required('Debes rellenar este campo.')
                        .test(
                            "fileFormat",
                            "Selecciona una imágen.",
                            value => value && SUPPORTED_FORMATS.includes(value.type)
                        ),
                })}
                onSubmit={(values, { setSubmitting, setErrors, resetForm }) => {
                    let self = this;
                    self.setState({ success: '', error: '' });
                    const imageURL = this.editor.current.getImageScaledToCanvas().toDataURL();
                    values.image = imageURL;
                    axios.post('/api/register', values)
                        .then(function (response) {
                            self.setState({ success: `${values.name} revisa tu email para confirmar tu registro.`, image: 'images/retagerexample.png' });
                            resetForm();
                            setSubmitting(false);
                        })
                        .catch(function (error) {
                            setSubmitting(false);
                            self.setState({ error: 'El formulario tiene errores.' });
                            setErrors({
                                name: error.response.data.errors.name,
                                email: error.response.data.errors.email,
                                password: error.response.data.errors.password,
                                password_confirmation: error.response.data.errors.password_confirmation,
                                zip_code: error.response.data.errors.zip_code,
                            });                         
                        });
                }}
            >
                {formik => {
                    return (
                        <Form>
                            <div className="container">
                                <div className="row form">
                                    <div className="col-lg-6 col-sm-12">
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
                                            <div className="input-group">
                                                <Field type={this.state.password ? "password" : "text"} className={formik.errors.password ? "form-control is-invalid" : "form-control"} name="password" />
                                                <div className="input-group-addon ml-2">
                                                    <a href="#" onClick={this.handlePaswordShow}><i className={`fa ${this.state.password ? "fa-eye-slash" : "fa-eye"}`} aria-hidden="true"></i></a>
                                                </div>
                                                <ErrorMessage name="password">{msg => <div className="invalid-feedback">{msg}</div>}</ErrorMessage>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label>Repite la Contraseña</label>
                                            <div className="input-group">
                                                <Field type={this.state.passwordConfirmation ? "password" : "text"} className={formik.errors.password_confirmation ? "form-control is-invalid" : "form-control"} name="password_confirmation" />
                                                <div className="input-group-addon ml-2">
                                                    <a href="#" onClick={this.handlePaswordConfirmationShow}><i className={`fa ${this.state.passwordConfirmation ? "fa-eye-slash" : "fa-eye"}`} aria-hidden="true"></i></a>
                                                </div>
                                                <ErrorMessage name="password_confirmation">{msg => <div className="invalid-feedback">{msg}</div>}</ErrorMessage>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="zip_code">Código Postal</label>
                                            <Field type="text" className={formik.errors.zip_code ? "form-control is-invalid" : "form-control"} name="zip_code" />
                                            <ErrorMessage name="zip_code">{msg => <div className="invalid-feedback">{msg}</div>}</ErrorMessage>
                                        </div>

                                        <div className="form-check">
                                            <Field type="checkbox" className={formik.errors.acepto_politica ? "form-check-input is-invalid" : "form-check-input"} name="acepto_politica" />
                                            <label htmlFor="acepto_politica" className="form-check-label">Acepto la política de privacidad</label>
                                            <ErrorMessage name="acepto_politica">{msg => <div className="invalid-feedback">{msg}</div>}</ErrorMessage>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-12">
                                        <div className="row d-flex justify-content-center">
                                            <div className="mx-auto" style={{ width: '350px' }}>
                                                <AvatarEditor
                                                    scale={parseFloat(this.state.scale)}
                                                    width={this.state.width}
                                                    height={this.state.height}
                                                    position={this.state.position}
                                                    onPositionChange={this.handlePositionChange}
                                                    border={2}
                                                    image={this.state.image}
                                                    className="editor-canvas"
                                                    ref={this.editor}
                                                />
                                                <br />
                                                <input
                                                    name="scale"
                                                    type="range"
                                                    onChange={this.handleScale}
                                                    min={this.state.allowZoomOut ? '0.1' : '1'}
                                                    max="4"
                                                    step="0.01"
                                                    defaultValue="0"
                                                    style={{ width: '352px', color: 'pink' }}
                                                />
                                            </div>
                                            <br />
                                            <label className="boton-imagen custom-file-upload">
                                                Seleccionar imagen
                                            <input id="image" name="image" type="file" onChange={(event) => {
                                                    formik.setFieldValue("image", event.currentTarget.files[0]);
                                                    this.handleNewImage(event);
                                                }} />
                                            </label>
                                        </div>
                                        <div className="row d-flex justify-content-center">
                                            <div style={{ color: 'rgb(228, 60, 55)' }}><small>{formik.errors.image && formik.errors.image}</small></div>
                                        </div>
                                    </div>
                                    <div className="col-12 mx-auto">
                                        <br />
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
                                            {Object.keys(formik.errors).length > 0 &&
                                                <div style={{ color: 'rgb(228, 60, 55)' }}><small>Existen errores en el formulario.</small></div>
                                            }
                                            <button type="submit" className="boton-secundario" id="registrarse" disabled={(formik.isSubmitting)}>
                                                Registrarse
                                                        <span className={formik.isSubmitting ? "spinner-border spinner-border-sm" : "spinner-border spinner-border-sm d-none"} role="status" aria-hidden="true"></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    )
                }}
            </Formik>
        )
    }
}

export default withRouter(BaseRegister);
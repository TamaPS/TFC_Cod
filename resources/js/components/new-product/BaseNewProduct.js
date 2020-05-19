import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';

import AvatarEditor from 'react-avatar-editor';
import {
    withRouter
} from "react-router-dom";
class BaseNewProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: 'images/retager2.jpeg',
            allowZoomOut: false,
            position: { x: 0.5, y: 0.5 },
            scale: 1,
            preview: null,
            width: 350,
            height: 490,
            error: '',
            success: ''
        }
        this.editor = React.createRef();
        this.handleNewImage = this.handleNewImage.bind(this);
        this.handleScale = this.handleScale.bind(this);
        this.handlePositionChange = this.handlePositionChange.bind(this);

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
            "image/png"
        ];
        return (
            <Formik
                initialValues={{ name: '', description: '', size: '', price: '', zip_code: '', image: undefined }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required('Debes rellenar este campo.'),
                    description: Yup.string()
                        .required('Debes rellenar este campo.'),
                    size: Yup.string()
                        .max(15, 'Talla no valida')
                        .required('Debes rellenar este campo.'),
                    price: Yup.number()
                    .matches(/^\s*(?=.*[1-9])\d*(?:\.\d{1,2})?\s*$/,
                        'El precio solo puede contener números y un máximo de 2 decimales.')
                        .required('Debes rellenar este campo.'),
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
                    const imageURL = this.editor.current.getImageScaledToCanvas().toDataURL();
                    values.image = imageURL;
                    console.log(values);
                    axios.post('/api/register', values)
                        .then(function (response) {
                            self.setState({ success: `${values.name} revisa tu email para confirmar tu registro.` });
                            resetForm();
                            setSubmitting(false);
                        })
                        .catch(function (error) {
                            setErrors({
                                name: error.response.data.errors.name,
                                email: error.response.data.errors.email,
                                password: error.response.data.errors.password,
                                password_confirmation: error.response.data.errors.password_confirmation,
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
                                <div className="col-lg-6 col-sm-12">
                                    <br />
                                    <div className="mx-auto" >
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
                                    <input id="image" name="image" type="file" onChange={(event) => {
                                        formik.setFieldValue("image", event.currentTarget.files[0]);
                                        this.handleNewImage(event);
                                    }} className={formik.errors.image ? "form-control is-invalid" : "form-control"} />
                                    <ErrorMessage name="image">{msg => <div className="invalid-feedback">{msg}</div>}</ErrorMessage>

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
                                        <button type="submit" className="boton-secundario" id="registrarse" disabled={(formik.isSubmitting)}>
                                            Registrarse
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

export default withRouter(BaseNewProduct);
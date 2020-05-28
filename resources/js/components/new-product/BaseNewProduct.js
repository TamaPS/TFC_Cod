import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import AvatarEditor from 'react-avatar-editor';
import {
    withRouter
} from "react-router-dom";

class BaseNewProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: 'images/plantilla.png',
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
                initialValues={{ name: '', description: '', size: '', price: '', image: undefined }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .max(70, 'Nombre demasiado largo')
                        .required('Debes rellenar este campo.'),
                    description: Yup.string()
                        .required('Debes rellenar este campo.'),
                    size: Yup.string()
                        .max(15, 'Talla no valida')
                        .required('Debes rellenar este campo.'),
                    price: Yup.string()
                    .matches(/^\s*(?=.*[1-9])\d*(?:\.\d{1,2})?\s*$/,
                        'El precio solo puede contener números y un máximo de 2 decimales.')
                        .required('Debes rellenar este campo.'),
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
                    console.log(values)
                    /*axios.post('/api/register', values)*/
                        .then(function (response) {
                            self.setState({ success: `${values.name} Producto añadido con éxito.` });
                            resetForm();
                            setSubmitting(false);
                        })
                        .catch(function (error) {
                            setErrors({
                                name: error.response.data.errors.name,
                                description: error.response.data.errors.description,
                                size: error.response.data.errors.size,
                                price: error.response.data.errors.price,
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
                                    <div className="form-group">
                                        <label htmlFor="name">Nombre del producto</label>
                                        <Field type="text"  className={formik.errors.name ? "form-control is-invalid" : "form-control"} name="name" />
                                        <ErrorMessage name="name">{msg => <div className="invalid-feedback">{msg}</div>}</ErrorMessage>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="description">Descripción</label>
                                        <Field component="textarea" 
                                            placeholder="Procura utilizar palabras clave para que tu producto llegue a más gente."
                                            rows="5" 
                                            className={formik.errors.description ? "form-control is-invalid" : "form-control"} name="description" />
                                        <ErrorMessage name="description">{msg => <div className="invalid-feedback">{msg}</div>}</ErrorMessage>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="size">Talla</label>
                                        <Field type="text" className={formik.errors.size ? "form-control is-invalid" : "form-control"} name="size" />
                                        <ErrorMessage name="size">{msg => <div className="invalid-feedback">{msg}</div>}</ErrorMessage>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="price">Precio</label>
                                        <Field type="text" placeholder="0.00€" className={formik.errors.price ? "form-control is-invalid" : "form-control"} name="price" />
                                        <ErrorMessage name="price">{msg => <div className="invalid-feedback">{msg}</div>}</ErrorMessage>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-12">
                                    <br />
                                    <div className="mx-auto text-center" >
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
                                        <button type="submit" className="boton-secundario" id="subir-producto" disabled={(formik.isSubmitting)}>
                                            SUBIR PRODUCTO
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
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import AvatarEditor from 'react-avatar-editor';
import {
    withRouter
} from "react-router-dom";

class BaseEditProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: 'images/plantilla.png',
            allowZoomOut: false,
            position: { x: 0.5, y: 0.5 },
            scale: 1,
            preview: null,
            width: 270,
            height: 300,
            error: '',
            success: '',
            images: [],
            fileError: '',
            fileAdd: false,
            fileSelect: true,
        }
        this.editor = React.createRef();
        this.handleNewImage = this.handleNewImage.bind(this);
        this.handleScale = this.handleScale.bind(this);
        this.handlePositionChange = this.handlePositionChange.bind(this);
        this.addProductImage = this.addProductImage.bind(this);
        this.handleDeleteImage = this.handleDeleteImage.bind(this);
    }

    componentDidMount() {
        var images = this.props.product.images.map(image => image.name);
        this.setState({ images: images });
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            if (this.props.product.name) {
                var images = this.props.product.images.map(image => image.name);
                this.setState({ images: images });
            }
        }
    }

    handleNewImage(e) {
        const SUPPORTED_FORMATS = [
            "image/jpg",
            "image/jpeg",
            "image/png"
        ];

        if (e.target.files[0]) {
            if (SUPPORTED_FORMATS.includes(e.target.files[0].type)) {
                this.setState({ fileError: '', fileAdd: true });
                if (e.target.files[0]) {
                    this.setState({ image: e.target.files[0] })
                    e.target.value = '';
                }
                else {
                    this.setState({ image: 'images/retager2.jpeg' })
                }
            }
            else {
                this.setState({ fileError: 'Selecciona una imágen.', fileAdd: false, image: 'images/retager2.jpeg' });
            }
        }
        else {
            this.setState({ fileError: 'Selecciona una imágen.', fileAdd: false, image: 'images/retager2.jpeg' });
        }
    }

    handleDeleteImage(position) {
        var images = this.state.images;
        images.splice(position, 1);
        this.setState({ images });

        if (!images[0]) {
            this.formik.setFieldValue('image', '');
        }

        if (images.length >= 4) {
            this.setState({ fileSelect: false, fileAdd: false, image: 'images/retager2.jpeg' });
        } else {
            this.setState({ fileSelect: true, fileError: '', fileAdd: false, image: 'images/retager2.jpeg' });
        }
    }

    addProductImage() {
        var imageURL = this.editor.current.getImageScaledToCanvas().toDataURL();
        var images = this.state.images;
        images.push(imageURL);
        this.setState({ images });
        this.formik.setFieldValue('image', this.state.images[0]);

        if (images.length >= 4) {
            this.setState({ fileSelect: false, fileAdd: false, image: 'images/retager2.jpeg' });
        } else {
            this.setState({ fileSelect: true, fileError: '', fileAdd: false, image: 'images/retager2.jpeg' });
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
        if (this.props.product.name) {
            return (
                <Formik
                    initialValues={{ name: this.props.product.name, description: this.props.product.description, size: this.props.product.size, price: this.props.product.price, image: this.props.product.images[0].name, filetype: undefined }}
                    validationSchema={Yup.object({
                        name: Yup.string()
                            .max(70, 'Nombre demasiado largo.')
                            .required('Debes rellenar este campo.'),
                        description: Yup.string()
                            .max(500, 'Descripción demasiado larga.')
                            .required('Debes rellenar este campo.'),
                        size: Yup.string()
                            .max(15, 'Talla no valida')
                            .required('Debes rellenar este campo.'),
                        price: Yup.string()
                            .matches(/^\s*(?=.*[1-9])\d*(?:\.\d{1,2})?\s*$/,
                                'El precio solo puede contener números y un máximo de 2 decimales.')
                            .required('Debes rellenar este campo.'),
                        image: Yup.string()
                            .required('Debes añadir al menos una imagen.'),
                    })}
                    onSubmit={(values, { setSubmitting, setErrors }) => {
                        let self = this;
                        this.setState({ success: '' });
                        values.id = this.props.product.id;
                        values.images = this.state.images;
                        axios.put('/api/product/edit', values)
                            .then(function (response) {
                                self.setState({ success: `${response.data.success}` });
                                self.props.takeProduct();
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
                    {formik => {
                        this.formik = formik;
                        return (
                            <Form>
                                <br />
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="form-group">
                                                <label htmlFor="name">Nombre del producto</label>
                                                <Field type="text" className={formik.errors.name ? "form-control is-invalid" : "form-control"} name="name" />
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
                                                <Field type="number" step="any" placeholder="0.00€" className={formik.errors.price ? "form-control is-invalid" : "form-control"} name="price" />
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
                                            <div className="row d-flex justify-content-center mt-2">
                                                <label className={`mt-2 custom-file-upload ${this.state.fileError ? " is-invalid" : ""} ${this.state.fileSelect ? "boton-imagen" : "boton-imagen-disabled"}`}  >
                                                    Seleccionar imagen
                                                <input name="filetype" type="file" onChange={(event) => { this.handleNewImage(event); }} disabled={this.state.fileSelect ? "" : "disabled"} />
                                                </label>
                                                <button type="button" className="btn btn-link" onClick={this.addProductImage} disabled={this.state.fileAdd ? "" : "disabled"}>
                                                    <i className="fas fa-plus-circle fa-2x" style={{color: 'rgb(255, 129, 255)'}}></i>
                                                </button>
                                                <div className="invalid-feedback text-center">{this.state.fileError}</div>
                                            </div>

                                            <div className="row d-flex justify-content-center">
                                                <div className="imgShow" style={{ backgroundImage: `url(${this.state.images[0]})` }}>
                                                    <a className="delete-imgShow" hidden={this.state.images[0] ? false : true} onClick={(event) => { this.handleDeleteImage(0); }}>&#10006;</a>
                                                </div>
                                                <div className="imgShow" style={{ backgroundImage: `url(${this.state.images[1]})` }}>
                                                    <a className="delete-imgShow" hidden={this.state.images[1] ? false : true} onClick={(event) => { this.handleDeleteImage(1); }}>&#10006;</a>
                                                </div>
                                                <div className="imgShow" style={{ backgroundImage: `url(${this.state.images[2]})` }}>
                                                    <a className="delete-imgShow" hidden={this.state.images[2] ? false : true} onClick={(event) => { this.handleDeleteImage(2); }}>&#10006;</a>
                                                </div>
                                                <div className="imgShow" style={{ backgroundImage: `url(${this.state.images[3]})` }}>
                                                    <a className="delete-imgShow" hidden={this.state.images[3] ? false : true} onClick={(event) => { this.handleDeleteImage(3); }}>&#10006;</a>
                                                </div>
                                            </div>
                                            <div className="row text-center">
                                                <Field name="image" type="hidden" className={formik.errors.image ? "form-control is-invalid" : "form-control"} />
                                                <ErrorMessage name="image">{msg => <div className="invalid-feedback">{msg}</div>}</ErrorMessage>
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
                                                <button type="submit" className="boton-secundario" id="subir-producto" disabled={(formik.isSubmitting)}>
                                                    GUARDAR PRODUCTO
                                            <span className={formik.isSubmitting ? "spinner-border spinner-border-sm" : "spinner-border spinner-border-sm d-none"} role="status" aria-hidden="true"></span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        )
                    }
                    }
                </Formik>
            )
        }
        else {
            return (<div>Cargando...</div>);
        }
    }
}

export default withRouter(BaseEditProduct);
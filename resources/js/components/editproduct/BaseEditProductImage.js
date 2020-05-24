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
            image: this.props.userData.user.image,
            allowZoomOut: false,
            position: { x: 0.5, y: 0.5 },
            scale: 1,
            preview: null,
            width: 350,
            height: 490,
            error: '',
            success: '',
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
            this.setState({ image: this.props.productData.product.image })
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
                initialValues={{ image: undefined }}
                validationSchema={Yup.object().shape({
                    image: Yup.mixed()
                        .test(
                            "fileFormat",
                            "Selecciona una imágen.",
                            value => value && SUPPORTED_FORMATS.includes(value.type)
                        ),
                })}
                onSubmit={(values, { setSubmitting, setErrors, resetForm }) => {
                    let self = this;
                    const imageURL = this.editor.current.getImageScaledToCanvas().toDataURL();
                    values.image = imageURL

                    //axios.put('/api/product/edit/image', values)
                        .then(function (response) {
                            self.setState({ success: `${self.props.name}, El producto se ha modificado.` });
                            //self.props.userData.loginUser();
                            resetForm();
                            setSubmitting(false);
                        })
                        .catch(function (error) {
                            console.log(error);
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
                                    <br />
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

export default withRouter(BaseEditProduct);
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
    withRouter
} from "react-router-dom";

class BaseEditProductData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            success: '',
        }
    }

    componentDidUpdate(prevProps) {
        const { history } = this.props;
        if (this.props !== prevProps) {
            if (this.props.userData) {
                if (!this.props.userData.user.id) {
                    history.push("/");
                }
            }
        }
    }

    render() {
        return (
            <Formik
                initialValues={{ name: '', description: '', 
                                size: '', price: ''}}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .max(70, 'Nombre demasiado largo.'),
                    description: Yup.string(),
                    size: Yup.string()
                        .max(15, 'Talla no valida'),
                    price: Yup.string()
                        .matches(/^\s*(?=.*[1-9])\d*(?:\.\d{1,2})?\s*$/,
                        'El precio solo puede contener números y un máximo de 2 decimales.'),
                })}
                onSubmit={(values, { setSubmitting, setErrors }) => {
                    let self = this
                    //axios.put('/api/product/edit/data', values)
                        .then(function (response) {
                            self.setState({ success: `${values.name}, El producto se ha modificado.` });
                            //self.props.productData.loginUser();
                            setSubmitting(false);
                        })
                        .catch(function (error) {
                            setErrors({
                                name: error.response.data.errors.name,
                                description: error.response.data.errors.description,
                                size: error.response.data.errors.size,
                                price: error.response.data.errors.price
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

export default withRouter(BaseEditProductData);
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Introduce un email válido.')
            .required('Debes rellenar este campo.'),
          password: Yup.string()
            .required('Debes rellenar este campo.'),
        })}
        onSubmit={(values, { setSubmitting, setErrors }) => {
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
        {formik => (<div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content form">
              <div className="modal-body">
                <div className="container mt-4">
                  <div className="row justify-content-center">
                    <label className="col-xl-6 col-sm-12" />
                    <Form>
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <Field type="text" className={formik.errors.email ? "form-control is-invalid" : "form-control"} name="email" />
                        <ErrorMessage name="email">{msg => <div className="invalid-feedback">{msg}</div>}</ErrorMessage>
                      </div>
                      <div className="form-group">
                        <label>Contraseña</label>
                        <div className="input-group" id="show_hide_password">
                          <Field name="password" className={formik.errors.password ? "form-control is-invalid" : "form-control"} type="password" />
                          <div className="input-group-addon ml-2">
                            <a href=""><i className="fa fa-eye-slash" aria-hidden="true"></i></a>
                          </div>
                          <ErrorMessage name="password">{msg => <div className="invalid-feedback">{msg}</div>}</ErrorMessage>
                        </div>
                        <div className="col text-center mt-4">
                          <a href="">Olvidé la contraseña</a>
                        </div>
                      </div>
                      <div className="col text-center mt-4">
                        <a href="">Registrarse</a>
                      </div>
                      <div className="col text-center">
                        <button type="submit" className="btn btn-default boton-secundario" id="logearse" disabled={(formik.isSubmitting)}>
                          Iniciar sesión
                          <span className={formik.isSubmitting ? "spinner-border spinner-border-sm" : "spinner-border spinner-border-sm d-none"} role="status" aria-hidden="true"></span>
                        </button>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>)}
      </Formik>
    )
  }
}

export default Login;
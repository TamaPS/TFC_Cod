import React from 'react';
import {
    Link
  } from "react-router-dom";

class FooterAll extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            
            <div>
                <hr />
                {/* Footer */}
                <footer>
                    {/* Footer Links */}
                    <div className="container">
                        {/* Footer links */}
                        <div className="row text-center">
                            {/* Grid column */}
                            <div className="col-lg-4 col-sm-12 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">SOBRE RETAGED</h6>
                                <Link to="/history">Historia</Link><br />
                                <Link to="/medio-ambiente">Medio Ambiente</Link><br />
                                <br />
                                <h6 className="text-uppercase mb-4 font-weight-bold">COMPRA VENTA</h6>
                                <Link to="condiciones">Condiciones</Link><br />
                                <br />
                            </div>
                            {/* Grid column */}
                            <hr className="w-100 clearfix d-md-none" />
                            {/* Grid column */}
                            <div className="col-lg-4 col-sm-12 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Legal</h6>
                                <Link to="/legal">Aviso legal</Link><br />
                                <Link to="politica-de-cookies">Política de cookies</Link><br />
                                <Link to="politica-de-privacidad">Política de privacidad</Link><br />
                                <br />
                            </div>
                            {/* Grid column */}
                            {/* Grid column */}
                            <div className="col-lg-4 col-sm-12 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Contacto</h6>
                                <p> <i className="fas fa-envelope mr-3"></i>
                                    <a href="mailto:info@retaged.com">info@retaged.com</a></p>
                                <p><img src="images/insta2.png" />
                                    <a href="https://www.instagram.com/retagedmarket/">@retagedmarket</a></p>
                            </div>
                            {/* Grid column */}
                        </div>
                    </div>
                </footer>
                {/* Footer */}
                <hr />
                {/*Copyright*/}
                <p className="text-center" id="copyright">© 2020 Retaged</p>
            </div>
            
        )
    }
}

export default FooterAll;
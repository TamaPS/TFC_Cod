import React from 'react';
import {
    Link
  } from "react-router-dom";

class Copyright extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <hr/>
                {/*Copyright*/}
                <p className="text-center" id="copyright">
                    <Link to="/legal" >Aviso legal</Link><br />
                    <Link to="/politica-de-cookies" >Política de cookies</Link><br />
                    <Link to="/politica-de-privacidad" >Política de privacidad</Link><br />
                    © 2020 Retaged
                </p>
            </div>
        )
    }
}

export default Copyright;
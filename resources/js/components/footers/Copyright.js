import React from 'react';

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
                    <a href="legal.html" target="_blank">Aviso legal</a><br />
                    <a href="cookie.html" target="_blank">Política de cookies</a><br />
                    <a href="privacidad.html" target="_blank">Política de privacidad</a><br />
                    © 2020 Retaged
                </p>
            </div>
        )
    }
}

export default Copyright;
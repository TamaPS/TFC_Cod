import React from 'react';
import BaseEditProfileData from './BaseEditProfileData';
import BaseEditProfilePassword from './BaseEditProfilePassword';
import BaseEditProfileImage from './BaseEditProfileImage';
import BaseDeleteprofile from './BaseDeleteProfile';
class EditProfile extends React.Component {
    constructor(props) {
        super(props);
    }

    /*RENDERIZA UNA LISTA CON DIFERENTES VENTANAS, CADA UNA  LLAMA A UN COMPONENTE DIFERENTE, QUE MUESTRA UN FORMULARIO DISTINTO EN FUNCIÓN DE LO QUE SE DESEE VISUALIZAR*/

    render() {
        return (
            <div>
                <br />
                <br />
                <div >
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <a className="nav-link active" id="datprofile-tab" data-toggle="tab" href="#datprofile" role="tab" aria-controls="datprofile" aria-selected="true">Datos</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link" id="passprofile-tab" data-toggle="tab" href="#passprofile" role="tab" aria-controls="passprofile" aria-selected="false">Contraseña</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link" id="imgprofile-tab" data-toggle="tab" href="#imgprofile" role="tab" aria-controls="imgprofile" aria-selected="false">Imágen de perfil</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link" id="delprofile-tab" data-toggle="tab" href="#delprofile" role="tab" aria-controls="delprofile" aria-selected="false">Eliminar cuenta</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="datprofile" role="tabpanel" aria-labelledby="datprofile-tab">
                            <br />
                            <BaseEditProfileData userData={this.props.userData} />
                        </div>
                        <div className="tab-pane fade" id="passprofile" role="tabpanel" aria-labelledby="passprofile-tab">
                            <br />
                            <BaseEditProfilePassword userData={this.props.userData} />
                        </div>
                        <div className="tab-pane fade" id="imgprofile" role="tabpanel" aria-labelledby="imgprofile-tab">
                            <BaseEditProfileImage userData={this.props.userData} />
                        </div>
                        <div className="tab-pane fade" id="delprofile" role="tabpanel" aria-labelledby="delprofile-tab">
                            <BaseDeleteprofile userData={this.props.userData} />
                        </div>
                    </div>
                </div>
                <br />
                <br />
            </div>
        )
    }
}

export default EditProfile;
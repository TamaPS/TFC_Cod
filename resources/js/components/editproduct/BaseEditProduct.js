import React from 'react';
import BaseEditProductData from './BaseEditProductData';
import BaseEditProductImage from './BaseEditProductImage';

class EditProduct extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <br />
                <br />
                <div className="container">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Datos</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Imágenes</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <BaseEditProductData userData={this.props.userData} />
                        </div>
                        <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                            <BaseEditProductImage userData={this.props.userData} />
                        </div>
                    </div>
                </div>
                <br />
                <br />
            </div>
        )
    }
}

export default EditProduct;
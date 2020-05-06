import React from 'react';

class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-lg-4 mt-5">
                <div className="single-banner">
                    <img src={this.props.image} alt={this.props.alt} />
                    <div className="inner-text">
                        <a href="#" className="btn btn-default" role="button">
                            <button className="boton" onClick={location.href="${this.props.route}"}>{this.props.text}</button>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;
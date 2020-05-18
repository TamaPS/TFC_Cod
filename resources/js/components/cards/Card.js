import React from 'react';
import {
    Link
  } from "react-router-dom";

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
                        <Link to={this.props.route} className="btn btn-default" role="button">
                            <button className="boton">{this.props.text}</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;
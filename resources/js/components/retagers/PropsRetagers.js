import React from 'react';

class PropsRetagers extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="column">
            <div className="col retager d-flex justify-content-end">
                <a className="nav-link like" href="#">
                    <span className="likes">{this.props.likes}</span>
                    <i className="fas fa-heart fa-lg " onClick='changeColor(this)'></i>
                </a>
                <a href="#"><img src={this.props.image} alt={this.props.nombre} /></a>
            </div>
            <div className="col mt-3 mb-3 nombre text-center"><a href="#">{this.props.nombre} </a></div>
        </div>
    )
  }
}

export default PropsRetagers;
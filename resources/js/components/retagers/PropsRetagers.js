import React from 'react';
import { Link } from "react-router-dom";

class PropsRetagers extends React.Component {
  constructor(props) {
    super(props);
    this.addFavorite = this.addFavorite.bind(this);
  }

  addFavorite() {
    const self = this;
    axios.post('/api/favorites', { id: self.props.id })
      .then(function (response) {
        self.props.takeData(self.props.current_page);
      })
      .catch(function (error) {
      });
  }

  render() {
    return (
      <div className="column">
        <div className="col retager d-flex justify-content-end">
          <div className="nav-link like" onClick={this.addFavorite}>
            <span className="likes">{this.props.likes}</span>
            <i className="fas fa-heart fa-lg" style={this.props.heart ? { color: "rgb(249, 87, 255)" } : {}}></i>
          </div>
          <Link to={`/productos-retager?id=${this.props.id}`}><img src={this.props.image} alt={this.props.nombre} /></Link>
        </div>
        <div className="col mt-3 mb-3 nombre text-center"><a href="#">{this.props.nombre} </a></div>
      </div>
    )
  }
}

export default PropsRetagers;
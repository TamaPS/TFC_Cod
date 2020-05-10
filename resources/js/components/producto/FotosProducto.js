import React from 'react';


class FotosProducto extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
              <div className="carousel-item">
                <img className="d-block w-100" src={this.props.image} />
              </div>
       
      )
    }
  }
  
  export default FotosProducto;
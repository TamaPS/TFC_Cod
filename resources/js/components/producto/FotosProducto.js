import React from 'react';


class FotosProducto extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
              <div className="carousel-item active">
                <img className="d-block w-100" src={this.props.image} alt="First slide" />
              </div>
       
      )
    }
  }
  
  export default FotosProducto;
import React from 'react';


class FotoPortada extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
              <div className="carousel-item active">
                <img className="d-block w-100" src={this.props.image} />
              </div>
       
      )
    }
  }
  
  export default FotoPortada;
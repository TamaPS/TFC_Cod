import React from 'react';

class Carrousel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="carousel-example-2" className="carousel slide carousel-fade" data-ride="carousel">
        {/*Indicators*/}
        <ol className="carousel-indicators">
          <li data-target="#carousel-example-2" data-slide-to="0" className="active"></li>
          <li data-target="#carousel-example-2" data-slide-to="1"></li>
          <li data-target="#carousel-example-2" data-slide-to="2"></li>
        </ol>
        {/*/.Indicators*/}
        {/*Slides*/}
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <div className="view">
              <a href="productos.html"> <img className="d-block w-100" src="images/carrousel1.jpeg" alt="First slide" /></a>
              <div className="mask rgba-black-light"></div>
            </div>
            <div className="carousel-caption">
              <p>Vaqueros personalizados</p>
            </div>
          </div>
          <div className="carousel-item">
            {/*Mask color*/}
            <div className="view">
              <a href="productos.html"><img className="d-block w-100" src="images/carrousel2.jpeg" alt="Second slide" /></a>
              <div className="mask rgba-black-strong"></div>
            </div>
            <div className="carousel-caption">
              <p>Tejido a mano</p>
            </div>
          </div>
          <div className="carousel-item">
            {/*Mask color*/}
            <div className="view">
              <a href="productos.html"><img className="d-block w-100" src="images/carrousel3.jpeg" alt="Third slide" /></a>
              <div className="mask rgba-black-slight"></div>
            </div>
            <div className="carousel-caption">
              <p>¡¡Rebajado!!</p>
            </div>
          </div>
        </div>
        {/*/.Slides*/}
      </div>
    )
  }
}

export default Carrousel;
import React from 'react';
import Background from './Background';

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
            <Background
              image="images/carrousel1.jpeg"
              alt="First slide"
              link="/productos-denim"
            />
            <div className="carousel-caption">
              <p>Prendas denim</p>
            </div>
          </div>
          <div className="carousel-item">
            {/*Mask color*/}
            <Background
              image="images/carrousel2.jpeg"
              alt="Second slide"
              link="/productos-punto"
            />
            <div className="carousel-caption">
              <p>Prendas de punto</p>
            </div>
          </div>
          <div className="carousel-item">
            {/*Mask color*/}
            <Background
              image="images/carrousel3.jpeg"
              alt="Second slide"
              link="/productos-menos10"
            />
            <div className="carousel-caption">
              <p>¡Por menos de 10 euros!</p>
            </div>
          </div>
        </div>
        {/*/.Slides*/}
      </div>
    )
  }
}

export default Carrousel;
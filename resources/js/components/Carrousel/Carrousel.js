import React from 'react';
import Background from './Background';
import {
  Link
} from "react-router-dom";
class Carrousel extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    $('.carousel').carousel({
      interval: 3000
    })
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
              <p><Link to="/productos-denim" style={{color: 'white'}}>Prendas denim</Link></p>
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
              <p><Link to="/productos-punto" style={{color: 'white'}}>Prendas de punto</Link></p>
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
              <p><Link to="/productos-menos10" style={{color: 'white'}}>¡Por menos de 10 euros!</Link></p>
            </div>
          </div>
        </div>
        {/*/.Slides*/}
      </div>
    )
  }
}

export default Carrousel;
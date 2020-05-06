import React from 'react';
import Card from './Card';

class Cards extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="banner-section">
        <div className="container-fluid">
          <div className="row">
            <Card
              image="images/retager1.jpeg"
              alt="cerca"
              route="retagers.html"
              text="RETAGERS CERCA"
            />
            <Card
              image="images/retager2.jpeg"
              alt="top"
              route="retagers.html"
              text="TOP RETAGERS"
            />
            <Card
              image="images/retager3.jpeg"
              alt="todos"
              route="retagers.html"
              text="VER TODOS"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Cards;
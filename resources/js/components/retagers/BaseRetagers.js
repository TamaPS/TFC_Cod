import React from 'react';
import PropsRetagers from './PropsRetagers';

class BaseRetagers extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="container-fluid d-flex justify-content-center mt-5">
            <div className="row ">
                <PropsRetagers 
                    likes = "1234324"
                    image = "images/modelo1.jpeg"
                    nombre = "Retager 1"
                />
                <PropsRetagers 
                    likes = "1234324"
                    image = "images/modelo2.jpg"
                    nombre = "Retager 2"
                />
                <PropsRetagers 
                    likes = "1234324"
                    image = "images/modelo3.jpg"
                    nombre = "Retager 3"
                />
                <PropsRetagers 
                    likes = "1234324"
                    image = "images/modelo4.jpg"
                    nombre = "Retager 4"
                />
            </div>
        </div>
    )
  }
}

export default BaseRetagers;
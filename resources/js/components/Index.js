import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

function Index() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Index Component</div>

                        <div className="card-body">I'm an Index component!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}

axios.get('api/products')
    .then((response) => {
        console.log(response.data)
    })
    .catch(function (error) {
        // handle error
        console.log(error);
      })
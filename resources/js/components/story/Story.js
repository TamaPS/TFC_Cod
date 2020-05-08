import React from 'react';

class Story extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div class="container text-center">
            <br />
            <p> Somos Tamara y Mario, <img class="icoEnano" src="images/logo.svg" alt="logo2" id="icoEnano" /> nace como nuestro proyecto de TFC del ciclo de desarrollo de aplicaciones web.</p>
            <br />
            <div class="text-center">
              <img src="images/start.jpeg" class="rounded mx-auto d-block img-fluid" alt="us" />
            </div>
            <br />
            <p class="pb-3"> 
              Queremos fomentar a los pequeños sastres o diseñadores locales para dar una segunda
              vida a las prendas que ya tenemos o compartirlas
              con otros usuarios, creemos en reconvertir las prendas
              haciéndolas exclusivas, y haciendo de cada una de ellas una pieza especial.
            </p>
          </div>
        )
    }
}

export default Story;
import React from 'react';

class Ambiente extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div class="container my-5">
            En la actualidad la industria textil lanza 50 microtemporadas, convirtiéndose en la segunda industria más
            contaminante del planeta, por detrás del petróleo. Genera el 20% de las aguas residuales mundiales y es responsable
            del 10% de las emisiones de carbono del mundo.
            <br /> <br />
            Una prenda vaquera necesita 8000 litros de agua para fabricarse. Una camiseta de algodón implica 5000 litros.
            <br /> <br />
            <img src="images/seq.jpeg" class="rounded mx-auto d-block img-fluid" alt="sequia" />
            <br />
            Las fábricas vierten residuos tóxicos en los cursos de agua, exponiendo a trabajadoras y población local a
            sustancias perjudiciales para la salud
            <br /> <br />
            La industria de la moda se caracteriza por promover el consumo a través de sus constantes cambios de temporada lo
            que ha impulsado el “fast fashion”, prendas que se producen de forma rápida y que al ser de bajo costo también se
            adquieren rápidamente, lo cual genera una sensación de que la ropa es "desechable" y ahí viene otro gran daño, ya
            que las prendas que no usamos terminan en vertederos. Según cifras del documental,el estadounidense promedio tira 37
            kilos de desechos textiles al año y como la mayoría de estos desechos no son biodegradables, pueden llegar a demorar
            siglos en descomponerse, sin olvidar que emiten gases nocivos al aire.
            <br /> <br />
            <div class="text-center">
              <img src="images/nature.jpeg" class="rounded mx-auto d-block img-fluid" alt="hojas" />
            </div>
            <br />
            En <img class="icoEnano" src="images/logo.svg" alt="logo2" id="icoEnano" /> creemos que además de frenar esta contaminación podemos fomentar a los pequeños sastres locales para dar
            una segunda vida a las
            prendas que ya tenemos o compartirlas con otros usuarios, creemos en reconvertir las prendas haciéndolas exclusivas,
            y haciendo de cada una de ellas, una compra especial.
            <br />
          </div>
        )
    }
}

export default Ambiente;
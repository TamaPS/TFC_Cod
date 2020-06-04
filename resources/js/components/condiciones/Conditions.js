import React from 'react';

class Conditions extends React.Component{
    constructor(props){
        super(props);
    }

    /*RENDERIZA UN CONTAINER CON INFORMACIÓN SOBRE LAS CONDICIONES DE LA PÁGINA */

    render(){
        return(
            <div className="container">
            <br />
            <p><img className="icoEnano" src="images/logo.svg" alt="logo2" id="icoEnano" /> es un escaparate virtual. <br />
              ¡Queremos 
              dar una segunda vida a la ropa!
              </p>
        
            <div className="text-center">
              <img src="images/open.jpeg" className="rounded mx-auto d-block img-fluid" alt="us" />
            </div>
            <br />
            <p className="pb-3">
              Hay 4 formas de ser retager:<br />
              <ul>
                <li>Vendiendo prendas vintage, con encanto. Puedes darte una vuelta por
                  las tiendas de segunda mano de tu
                  zona y compartir aquellas prendas maravillosas que merecen una segunda vida
                  y no se la puedas dar tu por no ser tu estilo o tu talla...
                  aunque la siguiente opción quizá te haga replantearte esto :</li><br />
                <li>Mostrando y ofertando tus dotes de modista, ya sea haciendo arreglos o modificaciones.</li><br />
                <li>Si te gusta dibujar puedes probar a decorar cazadoras, camisetas, zapatillas... ¡el límite solo esta en tu
                  imaginación!
                </li><br />
                <li>O por último y no menos importante, consiguiendo los mejores chollos, los mejores sastres para llevar siempre todo como un guante, 
                  o los productos más exclusivos a través de nuestros retagers.
                </li>
              </ul>
        
              <p>Para ser un buen retager debes presentar tus productos de
                modo que resulten atractivos, puedes subir hasta 4 fotografías de cada uno</p>
              <p>También es importante ofrecer una descripción adecuada y utilizar nuestras tags que se adapten
                al producto para conseguir mayor repercusión. Cualquier producto o contenido inadecuado se eliminará
                de la web y se baneará al retager. Los usuarios podrán denunciar este contenido en info@retager.com,
                aunque nosotros estaremos personalmente vigilando el contenido en la medida de lo posible.
              </p>
        
              <div className="text-center">
                <img src="images/shopping.jpeg" className="rounded mx-auto d-block img-fluid" alt="us" />
              </div>
              <br />
        
             <p> Cuando subes una prenda otros retagers se pondrán en contacto contigo mediante el email que nos has facilitado 
              en el registro. Ese email genera de manera automática un asunto que hace referencia al producto que ha seleccionado
              la persona interesada, por lo que es importante que uses una nomenclatura que puedas distinguir.
             </p>
             
             <div className="text-center">
               <img src="images/maniqui.jpeg" className="rounded mx-auto d-block img-fluid" alt="us" />
             </div>
             <br />
        
             <p><i><img className="icoEnano" src="images/logo.svg" alt="logo2" id="icoEnano" /> no se hace responsable de transacciones, métodos de envío ni devoluciones.</i> </p>
        
            </p>
          </div>
        )
    }
}

export default Conditions;
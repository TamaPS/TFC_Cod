import React from 'react';

class Cookies extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="container my-5 ">
            <p>En cumplimiento con lo dispuesto en el artículo 22.2 de la Ley 34/2002, de 11 de julio, de Servicios de la
              Sociedad de la Información y de Comercio Electrónico, esta página web le informa, en esta sección, sobre la
              política de recogida y tratamiento de cookies. </p>
            <h2>¿Qué son las cookies? </h2>
            <p>Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies
              permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de
              un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su equipo,
              pueden utilizarse para reconocer al usuario. </p>
            <ul>
              <li>Cookies propias para mejorar la experiencia del usuario</li>
            </ul>
            <h2>¿Qué tipos de cookies utiliza esta página web? </h2>
            <ul>
              <li>Cookies de análisis - Son aquéllas que bien tratadas por nosotros o por terceros, nos permiten cuantificar el
                número de usuarios y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios
                del servicio ofertado. Para ello se analiza su navegación en nuestra página web con el fin de mejorar la oferta
                de productos o servicios que le ofrecemos. </li>
              <li>Cookies publicitarias - Son aquéllas que, bien tratadas por nosotros o por terceros, nos permiten gestionar de
                la forma más eficaz posible la oferta de los espacios publicitarios que hay en la página web, adecuando el
                contenido del anuncio al contenido del servicio solicitado o al uso que realice de nuestra página web. Para ello
                podemos analizar sus hábitos de navegación en Internet y podemos mostrarle publicidad relacionada con su perfil
                de navegación. </li>
            </ul>
            <h2>Cómo desactivar las Cookies</h2>
            <p>Puede usted permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las
              opciones del navegador instalado en su ordenador. </p>
            <br />
          </div>
        )
    }
}

export default Cookies;
import React from 'react';
import ContactProps from './ContactProps'
import { userContext } from '../login/userContext';

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  /*SE LLAMA AL COMPONENTE userContext Y DENTRO DE ESTE SE LLAMA AL COMPONENTE ContactProps PASÁNDOLE LOS DATOS DEL USUARIO Y LA ID DEL PRODUCTO */

  render() {
    var productId = this.props.productId;
    return (
      <userContext.Consumer>
        {
          function (value) {
            return(<ContactProps userData={value} productId={productId} />);
          }
        }
      </userContext.Consumer>
    )
  }
}

export default Contact;
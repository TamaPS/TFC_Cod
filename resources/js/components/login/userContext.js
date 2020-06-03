import React from 'react';
//COMPONENTE PARA OBTENER LOS DATOS DEL USUARIO EN CUALQUIER OTRO COMPONENTE (COMPONENTE GLOBAL)
const userContext = React.createContext({user: {}}); // Create a context object

export {
  userContext // Export it so it can be used by other Components
};
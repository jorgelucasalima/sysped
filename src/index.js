import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createServer} from 'miragejs'

createServer({
  routes(){
    this.namespace = 'api';

    this.get('/pedidos', () => {
      return [
        {
          id: 1,
          descricao: "Casa Tia Ua",
          status: 'Aberto',
          Obra: 'Obra Queiroz Galvão',
          data_pedido: '12/08/1994',
          data_entrega: '16/05/2020',
          responsável: 'Manoel',
        }
      ]
    })
  }
})



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createServer, Model} from 'miragejs'


/*
createServer({

  models: {
    pedido: Model,
    insumo: Model,
  },

  seeds(server){
    server.db.loadData({
      pedidos:[
        {
          idPedido: 1,
          statusPedido: 'aberto',
          obra: 'Obra do Cavouco',
          descricaoPedido: 'Pedido canal cavouco prefeitura',
          dataCriacaoPedido: new Date('2022-02-03 09:00:00'),
          dataEntregaPedido: new Date('2022-06-07 10:00:00'),
          responsavelPedido: 'Manoel'
        },
        {
          id: 2,
          statusPedido: 'cotacao',
          obra: 'Obra Varzea',
          descricaoPedido: 'Pedido Maria Eduarda',
          dataCriacaoPedido: new Date('2022-07-05 01:00:00'),
          dataEntregaPedido: new Date('2022-05-12 12:00:00'),
          responsavelPedido: 'Ayra Alves de Lima'
        },
      ]
    })
  },


  routes(){
    this.namespace = 'api';

    //rota para CRUD de pedidos
    this.get('/pedidos', () => {
      return this.schema.all('pedido')
    })

    this.post('/pedidos', (schema, request) => {
      const dados = JSON.parse(request.requestBody)

      return schema.create('pedido', dados)
    })

    //this.edit

    //this.delete

    //rota para CRUD de insumos

    
    this.get('/insumos', () => {
      return this.schema.all('insumo')
    })

    this.post('/insumos', (schema, request) => {
      const dados = JSON.parse(request.requestBody)

      return schema.create('insumo', dados)
    })
   

  }
})
 */



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



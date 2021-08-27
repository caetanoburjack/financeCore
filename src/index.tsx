import React from 'react'
import ReactDOM from 'react-dom'
import { createServer, Model } from 'miragejs'
import { App } from './App'

createServer({

  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Dev Logomarca',
          type: 'deposit',
          category: 'serviços',
          amount: 1500,
          createdAt: new Date('1989-09-30 10:14:00'),
        }, {
          id: 2,
          title: 'Dev Aplicativo',
          type: 'deposit',
          category: 'serviços',
          amount: 19000,
          createdAt: new Date('2015-10-02 10:14:00'),
        }
      ]
    })
  },
  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => {
      return this.schema.all('transaction');

      // return [
      //   {
      //     id: 1,
      //     title: 'Transaction 1',
      //     amount: 400,
      //     type: 'deposit',
      //     category: 'food',
      //     createdAt: new Date(),
      //   }
      // ]
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


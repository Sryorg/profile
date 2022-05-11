import React from 'react';
import ReactDOM from 'react-dom/client';

import{ createServer, Model } from 'miragejs'
import { App } from './App';

createServer({
  models: {
    post: Model,
  },

  seeds(server) {
    server.db.loadData({
      posts: [
        {
          id: 1,
          user: 'Srminhoca',
          type: 'coment',
          content: 'Site da brabo',
          createdAt: new Date('2022-05-10'),
        }
      ],
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/post', () => {
      return this.schema.all('post')
    })

    this.post('/post', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('post', data)
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
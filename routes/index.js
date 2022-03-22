const express = require('express');

// Route file imports
const productsRouter = require('./products.router');
const usersRouter = require('./users.router');
const categoriesRouter = require('./categories.router');

function routerApi(app) {
  //Express Router para agregar  /api/v1/ a todas las rutas
  const router = express.Router();

  // Definicion de la ruta de la version
  app.use('/api/v1', router);

  // Routes
  router.use('/products', productsRouter);
  router.use('/user', usersRouter);
  router.use('/categories', categoriesRouter);
}

module.exports = routerApi;

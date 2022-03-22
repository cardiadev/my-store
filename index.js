const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Routes de endpoints
routerApi(app);

app.get('/', (req, res) => {
  res.send('Hola mi server en Express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola soy una neva ruta');
});

// Listen Port
app.listen(port, () => {
  console.log('My port: ' + port);
});

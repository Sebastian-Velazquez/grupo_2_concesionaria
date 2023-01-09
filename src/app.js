
//VA SIEMPRE
const express = require('express');
//muestra infomacion adicional en la consela si se esta enviando informacion 
const morgan = require('morgan');
const app = express();

//Es necesario para que la carpeta views pueda estar adentro de la carpeta src
const path = require('path'); 

// ************ Middlewares - (don't touch) ************
//Es necesario para que la carpeta views pueda estar adentro de la carpeta src
app.use(express.static(path.join(__dirname, '../public')));  // Necesario para los archivos estáticos en el folder /public


// Importamos routers//const path = require('path');// para accder a las paginas
const homeRouter = require('./routes/homeRouter.js')
const usersRouter = require('./routes/usersRouter.js')
const productsRouter = require('./routes/productsRouter.js')

//muestra infomacion adicional en la consela si se esta enviando informacion 
app.use(morgan('dev'));

//es para que la carpeta del proyecto public sea publicom, van html ejs css
app.use(express.static('public'));

//para usar ejs
app.set('view engine', 'ejs'); 

//Es necesario para que la carpeta views pueda estar adentro de la carpeta src
app.set('views', path.join(__dirname, '/views')); // Define la ubicación de la carpeta de las Vistas

// Usando los enrutadores importados linea 5
app.use("/", homeRouter);
app.use("/user", usersRouter);
app.use("/product", productsRouter);

const port = process.env.PORT || 3000;
app.listen(port,()=> console.log('Servidor corriendo en http://localhost:3000'));



//Creación de rutas. 
/* app.get('/', (req, res) => res.sendFile(path.join(__dirname, './views/index.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, './views/login.html')));
app.get('/productCart', (req, res) => res.sendFile(path.join(__dirname, './views/productCart.html')));
app.get('/productDetail', (req, res) => res.sendFile(path.join(__dirname, './views/productDetail.html')));
app.get('/register', (req, res) => res.sendFile(path.join(__dirname, './views/register.html'))); */
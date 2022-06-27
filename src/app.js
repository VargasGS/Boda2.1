const express = require('express');
const app = express();


const invitadosRoutes = require('./routes/invitados')

const morgan = require('morgan');
const path = require('path');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const { urlencoded } = require('express');



//settings
app.set('port', process.env.PORT || 5000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views' ));

//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host: 'localhost',
    user: 'root',
    password: 'Yogui_123',
    port:3306,
    database:'BDBoda'
},'single'))

//app.use(express.urlencoded({
 //   extended:false
//}))

app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


//routes

app.use('/', invitadosRoutes);
app.use(express.static(path.join(__dirname,'public')));

app.listen(app.get('port'), ()=>{
    console.log('Server on port 5000');
});


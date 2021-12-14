const express = require('express');
const app = express();
const engine = require('ejs-mate');
const path = require('path');
const morgan = require('morgan');
const passport = require('passport');
const sesscions = require('express-session');
const flash = require('connect-flash');

require('./db');

app.set('port', process.env.PORT || 6000);
app.set('view engine', 'ejs')


app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(express.static('public'))

const alumnos = require('./routes/alumnos')
app.use(alumnos)

app.get('/', (req, res, next)=>{
    res.send('HOME')
})



app.listen(app.get('port'), ()=>{
    console.log('Server UP! en http://localhost:6000')
})

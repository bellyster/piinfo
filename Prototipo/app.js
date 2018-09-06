//
//imports
//
var express = require('express');
var app= express();
app.disable('x-powered-by'); //por seguridad, no transmite info del server

//handlebars y configuración Layout
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');



//Define Puerto y carpeta raiz para acceder elementos
app.set('port', process.env.PORT||3000);
//Scope del proyecto. :3
app.use(express.static(__dirname +'/public'));

//
//Direccionamiento de vistas: RUTEO
//

app.get('/', function(req, res){
    //El status marca como activa la pagina.
    res.render('home', {statusViewH:"active", username: "Antonio Salieri"});
});

app.get('/about', function(req, res){
    res.render('about',{statusViewA:"active", username: "Antonio Salieri"});
});

app.get('/tablero', function(req, res){
    res.render('bbs',{statusViewTab:"active", username: "Antonio Salieri"});
});

app.get('/material', function(req, res){
    res.render('material',{statusViewM:"active", username: "Antonio Salieri"});
});

app.get('/perfil', function(req, res){
    res.render('perfil',{statusViewP:"active", username: "Antonio Salieri"});
});

app.get('/test', function(req, res){
    res.render('test',{statusViewTest:"active", username: "Antonio Salieri"});
});

app.get('/inbox', function(req, res){
    res.render('inbox',{statusViewInbox:"active", username: "Antonio Salieri"});
});

app.get('/his1', function(req, res){
    res.render('historia1',{username: "Antonio Salieri"});
});
app.get('/his2', function(req, res){
    res.render('historia2',{username: "Antonio Salieri"});
});
app.get('/premium', function(req, res){
    res.render('premium',{username: "Antonio Salieri"});
});
app.get('/test1', function(req, res){
    res.render('test1',{username: "Antonio Salieri"});
});
app.get('/test2', function(req, res){
    res.render('test2',{username: "Antonio Salieri"});
});


//Direccionamiento en caso de error
app.use(function (req, res) {
    res.type('text/html');
    res.status(404);
    res.render('404');
});

//Mantener el server active.
app.listen(app.get('port'), function(){
    console.log('Ctrl+C to quit');
});
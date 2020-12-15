
//terminal : npm init
//terminal : npm install --save express body-parser nodemon ejs
//"dev" : "nodemon"; untuk memanggil program berupa perintah npm run dev

const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');


const layouts = require('express-ejs-layouts');

const app = express();

app.set('view engine', 'ejs');//engine menggunakan ejs

app.use(bodyParser.urlencoded());//bodyprasing supaya bisa ngeparsing kyk get post / ngirim data
app.use(express.static('public'));//mau pake css/js di webnya ditaruh di folder public
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/images', express.static(__dirname + 'public/images'))
//tanpa app.use('/css,/js/images'), bisa

//buat merahasiakan karena login bersifat sensitif
//menuju ke index ya routes check user session di get

// enable session
app.use(session({
    secret: 'som3_s3cret_key5',
    cookie: {}//buat expired brp sessionnya, setting waktu login, misal dalam 1 hari blm logout berarti harus login ulang, atau centang ingat saya cek 1 bln sekali
}))


// use Layouts
app.use(layouts);
app.set('layout', 'layouts/main.ejs');
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);//taruhnya dibawah sebelum body tutup, js paling bawah supaya halaman web keluar dlu baru js nya

// routes
// routes
const indexRouter = require('./routes/index');// index.js home
const masukRouter= require('./routes/masuk');
const caridokterRouter = require('./routes/caridokter');
const infokesehatanRouter = require('./routes/infokesehatan');
const tentangkamiRouter = require('./routes/tentangkami');
const hubungikamiRouter = require('./routes/hubungikami');

app.use('/', indexRouter);//jadi kalo dibuka slash samping, mau dilihat di files indexRoutes ini, akan ditaruh post dan get
app.use('/masuk', masukRouter);
app.use('/caridokter', caridokterRouter);
app.use('/infokesehatan', infokesehatanRouter);
app.use('/tentangkami', tentangkamiRouter);
app.use('/hubungikami', hubungikamiRouter);

app.listen( process.env.PORT || 3000);//mencoba running
console.log('Server runs at port 3000...');
//terminal: npm run dev->manggil script start dia di package.json tdi, dev perintah untuk jalanin nodemon
//1
//setelah itu buat folder routes, lalu edit index.js di folder routes

//2
//lalu buat auth.js di folder routes
//lalu menuju ke auth.js

//4
//lalu ke auth.js, menambahkan req.session.user
//lalu buat file main.ejs di folder layouts
//lalu pindah ke auth.js untuk mengubah layout = false........, jadi layout = false
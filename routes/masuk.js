const express = require('express');
const router = express.Router();

router.get('/masuk',
    async (req, res) => {
        if (req.session.user) {
            res.redirect('/');
        } else {
            res.render('pages/masuk', { layout: false });
        }
        //res.render('pages/login');
    }
);

//dari login.ejs
router.post('/masuk',
    async (req, res) => {
        // cek login
        const username = req.body.username;//mau dapatkan username di file html login.ejs
        const password = req.body.password;

        // check username and password
        if (username === "admin" && password === "admin") {
            // create session for user
            // session,cookies disimpan dibrowser
            //nama ssession bebas, session.________, lebih aman simpan di database dgn cara id user
            req.session.user = "admin";

            // login success and redirect to member area
            res.redirect('/');//jika sudah berhasil login di oper ke index
        } else {
            // render the login page with error information
            res.render('pages/masuk', { layout: false, error: 'Wrong username or password.' });//selain render, lempar data juga ke pages/login
        }
    }
);//cek login disini, dilempar ke sini user dan pasword yg diinput

module.exports = router;
//00:15:30

//lalu pindah ke login.ejs
//munculin error <persen if..........

//4
//terminal : npm install --save express session
//lalu ke index.js home, tambahkan (enable session) app.use
//time 00:43:26

//lalu tambahkan if(..........) di get diatas
//lalu bikin get logout

//time 00:58:45 pindah ke index.js routes lalu ganti jadi res.render(), yg diganti render, dari redirect, dan tambah isi if, else
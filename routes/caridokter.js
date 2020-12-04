//tambah const todo Router di index.js home & app.use todo
const express = require('express');
const router = express.Router();

router.get('/',
    async (req, res) => {
        res.render('pages/caridokter', { tasks: req.session.tasks });
    }
);

router.get('/dokterumum/dr-abcdefghijklmn',
    async (req, res) => {
        res.render('pages/dokterumum/dr-abcdefghijklmn', { tasks: req.session.tasks });
    }
);

router.get('/dokterumum/dr-abcdefghijklmn2',
    async (req, res) => {
        res.render('pages/dokterumum/dr-abcdefghijklmn2', { tasks: req.session.tasks });
    }
);

router.get('/dokterumum/dr-abcdefghijklmn3',
    async (req, res) => {
        res.render('pages/dokterumum/dr-abcdefghijklmn3', { tasks: req.session.tasks });
    }
);

router.get('/dokterumum/dr-abcdefghijklmn4',
    async (req, res) => {
        res.render('pages/dokterumum/dr-abcdefghijklmn4', { tasks: req.session.tasks });
    }
);

router.get('/dokterumum/dr-abcdefghijklmn5',
    async (req, res) => {
        res.render('pages/dokterumum/dr-abcdefghijklmn5', { tasks: req.session.tasks });
    }
);

router.get('/rumahsakit/rs-abcdefghijklmn',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn', { tasks: req.session.tasks });
    }
);

router.get('/rumahsakit/rs-abcdefghijklmn2',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn2', { tasks: req.session.tasks });
    }
);

router.get('/rumahsakit/rs-abcdefghijklmn3',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn3', { tasks: req.session.tasks });
    }
);

router.get('/rumahsakit/rs-abcdefghijklmn4',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn4', { tasks: req.session.tasks });
    }
);

router.get('/rumahsakit/rs-abcdefghijklmn5',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn5', { tasks: req.session.tasks });
    }
);

//lalu buat todo.ejs di folder pages

//misal kita akses /done/:index cth :index = 5, berarti kita menghapus array ke 5 dari task itu(codong latihan)

//jangan lupa module.exports
module.exports = router;

//time 01:39:40 pindah ke td.ejs
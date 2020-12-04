//tambah const todo Router di index.js home & app.use todo
const express = require('express');
const router = express.Router();

router.get('/',
    async (req, res) => {
        res.render('pages/hubungikami', { tasks: req.session.tasks });
    }
);
//lalu buat todo.ejs di folder pages

//misal kita akses /done/:index cth :index = 5, berarti kita menghapus array ke 5 dari task itu(codong latihan)

//jangan lupa module.exports
module.exports = router;

//time 01:39:40 pindah ke td.ejs
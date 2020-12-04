//lalu balik ke index.js home
//kasih tau/tambah indexRoutes di index home

const express = require('express');
const router = express.Router();

router.get('/',
    async (req, res) => {
        //res.send('ok');
        
            //check user session/login status
        if (!req.session.user) {
            res.redirect('/masuk/masuk');
        } else {
            //res.send('ok');
            res.render('pages/index');
        }
        
    }
);

router.get('/logout',
  async (req, res) => {
      // destroy all session
      req.session.destroy();

      // redirect to login
      res.redirect('/masuk/masuk');
  }
);
//yg dibuka adalah slash
//apa yg dilakukan - async (req, res)

module.exports = router;
//panggil module.exports = router, jadi router itu dilempar lagi ke indexRouter, index router adalah hasil dari router.get,export spt return
//menuju index.js home

//time 01:15:32 menuju ke index.ejs

//4
//lalu tambahkan folder index.ejs di pages lalu menuju ke index.ejs
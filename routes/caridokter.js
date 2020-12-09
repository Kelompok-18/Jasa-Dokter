//tambah const todo Router di index.js home & app.use todo
const express = require('express');
const router = express.Router();

router.get('/',
    async (req, res) => {
        res.render('pages/caridokter', { tasks: req.session.tasks });
    }
);

router.get('/dokter/dokterumum/dr-abcdefghijklmn',
    async (req, res) => {
        res.render('pages/dokter/dokterumum/dr-abcdefghijklmn', { tasks: req.session.tasks });
    }
);

router.get('/dokter/dokterumum/dr-abcdefghijklmn2',
    async (req, res) => {
        res.render('pages/dokter/dokterumum/dr-abcdefghijklmn2', { tasks: req.session.tasks });
    }
);

router.get('/dokter/dokterumum/dr-abcdefghijklmn3',
    async (req, res) => {
        res.render('pages/dokter/dokterumum/dr-abcdefghijklmn3', { tasks: req.session.tasks });
    }
);

router.get('/dokter/dokterumum/dr-abcdefghijklmn4',
    async (req, res) => {
        res.render('pages/dokter/dokterumum/dr-abcdefghijklmn4', { tasks: req.session.tasks });
    }
);

router.get('/dokter/dokterumum/dr-abcdefghijklmn5',
    async (req, res) => {
        res.render('pages/dokter/dokterdokterumum/dr-abcdefghijklmn5', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn2',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn2', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn3',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn3', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn4',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn4', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn5',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn5', { tasks: req.session.tasks });
    }
);

router.get('/spesialisasi/analis-lab',
    async (req, res) => {
        res.render('pages/spesialisasi/analis-lab', { tasks: req.session.tasks });
    }
);

router.get('/spesialisasi/dokter-gigi',
    async (req, res) => {
        res.render('pages/spesialisasi/dokter-gigi', { tasks: req.session.tasks });
    }
);

router.get('/spesialisasi/dokter-umum',
    async (req, res) => {
        res.render('pages/spesialisasi/dokter-umum', { tasks: req.session.tasks });
    }
);

router.get('/spesialisasi/spesialis-akupuntur',
    async (req, res) => {
        res.render('pages/spesialisasi/spesialis-akupuntur', { tasks: req.session.tasks });
    }
);

router.get('/spesialisasi/spesialis-farmokologi-klinik',
    async (req, res) => {
        res.render('pages/spesialisasi/spesialis-farmokologi-klinik', { tasks: req.session.tasks });
    }
);

//----------------------------------------------------------------------------------------------------------------

router.get('/fasilitas/rs-abcdefghijklmn/spesialis-akupuntur',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn/spesialisakupuntur', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn/spesialis-farmakologi-klinik',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn/spesialisfarmokologiklinik', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn/spesialis-bedah',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn/spesialisbedah', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn/spesialis-anak',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn/spesialisanak', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn/spesialis-jantung-dan-pembuluh-darah',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn/spesialisjantungdanpembuluhdarah', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn/dokter-gigi-spesialis-bedah-mulut-dan-maksilofasial',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn/doktergigispesialisbedahmulutdanmaksilofasial', { tasks: req.session.tasks });
    }
);

//------------------------------------------------------------------------------------------------------------------------------------

router.get('/fasilitas/rs-abcdefghijklmn/spesialis-akupuntur/dr-abcdefghijklmn',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn/spesialisakupuntur/dr-abcdefghijklmn', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn/spesialis-akupuntur/dr-abcdefghijklmn2',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn/spesialisakupuntur/dr-abcdefghijklmn2', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn/spesialis-akupuntur/dr-abcdefghijklmn3',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn/spesialisakupuntur/dr-abcdefghijklmn3', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn/spesialis-akupuntur/dr-abcdefghijklmn4',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn/spesialisakupuntur/dr-abcdefghijklmn4', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn/spesialis-akupuntur/dr-abcdefghijklmn5',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn/spesialisakupuntur/dr-abcdefghijklmn5', { tasks: req.session.tasks });
    }
);

//-----------------------------------------------------------------------------------------------------------------------------

router.get('/fasilitas/rs-abcdefghijklmn/spesialis-farmakologi-klinik/dr-abcdefghijklmn',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn/spesialisfarmakologiklinik/dr-abcdefghijklmn', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn/spesialis-farmakologi-klinik/dr-abcdefghijklmn2',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn/spesialisfarmakologiklinik/dr-abcdefghijklmn2', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn/spesialis-farmakologi-klinik/dr-abcdefghijklmn3',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn/spesialisfarmakologiklinik/dr-abcdefghijklmn3', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn/spesialis-farmakologi-klinik/dr-abcdefghijklmn4',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn/spesialisfarmakologiklinik/dr-abcdefghijklmn4', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn/spesialis-farmakologi-klinik/dr-abcdefghijklmn5',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn/spesialisfarmakologiklinik/dr-abcdefghijklmn5', { tasks: req.session.tasks });
    }
);

//------------------------------------------------------------------------------------------------------------------------------------

router.get('/fasilitas/rs-abcdefghijklmn/spesialis-bedah/dr-abcdefghijklmn',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn/spesialisbedah/dr-abcdefghijklmn', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn/spesialis-bedah/dr-abcdefghijklmn2',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn/spesialisbedah/dr-abcdefghijklmn2', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn/spesialis-bedah/dr-abcdefghijklmn3',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn/spesialisbedah/dr-abcdefghijklmn3', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn/spesialis-bedah/dr-abcdefghijklmn4',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn/spesialisbedah/dr-abcdefghijklmn4', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn/spesialis-bedah/dr-abcdefghijklmn5',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn/spesialisbedah/dr-abcdefghijklmn5', { tasks: req.session.tasks });
    }
);

//-----------------------------------------------------------------------------------------------------------------------------

router.get('/fasilitas/rs-abcdefghijklmn/spesialis-anak/dr-abcdefghijklmn',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn/spesialisanak/dr-abcdefghijklmn', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn/spesialis-anak/dr-abcdefghijklmn2',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn/spesialisanak/dr-abcdefghijklmn2', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn/spesialis-anak/dr-abcdefghijklmn3',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn/spesialisanak/dr-abcdefghijklmn3', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn/spesialis-anak/dr-abcdefghijklmn4',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn/spesialisanak/dr-abcdefghijklmn4', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn/spesialis-anak/dr-abcdefghijklmn5',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn/spesialisanak/dr-abcdefghijklmn5', { tasks: req.session.tasks });
    }
);

//---------------------------------------------------------------------------------------------------------------------------------------

router.get('/fasilitas/rs-abcdefghijklmn/spesialis-jantung-dan-pembuluh-darah/dr-abcdefghijklmn',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn/spesialisjantungdanpembuluhdarah/dr-abcdefghijklmn', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn/spesialis-jantung-dan-pembuluh-darah/dr-abcdefghijklmn2',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn/spesialisjantungdanpembuluhdarah/dr-abcdefghijklmn2', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn/spesialis-jantung-dan-pembuluh-darah/dr-abcdefghijklmn3',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn/spesialisjantungdanpembuluhdarah/dr-abcdefghijklmn3', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn/spesialis-jantung-dan-pembuluh=darah/dr-abcdefghijklmn4',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn/spesialisjantungdanpembuluhdarah/dr-abcdefghijklmn4', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn/spesialis-jantung-dan-pembuluh-darah/dr-abcdefghijklmn5',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn/spesialisjantungdanpembuluhdarah/dr-abcdefghijklmn5', { tasks: req.session.tasks });
    }
);

//------------------------------------------------------------------------------------------------------------------------------------

router.get('/fasilitas/rs-abcdefghijklmn/dokter-gigi-spesialis-bedah-mulut-dan-maksilofasial/dr-abcdefghijklmn',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn/doktergigispesialisbedahmulutdanmaksilofasial/dr-abcdefghijklmn', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn/dokter-gigi-spesialis-bedah-mulut-dan-maksilofasial/dr-abcdefghijklmn2',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn/doktergigispesialisbedahmulutdanmaksilofasial/dr-abcdefghijklmn2', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn/dokter-gigi-spesialis-bedah-mulut-dan-maksilofasial/dr-abcdefghijklmn3',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn/doktergigispesialisbedahmulutdanmaksilofasial/dr-abcdefghijklmn3', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn/dokter-gigi-spesialis-bedah-mulut-dan-maksilofasial/dr-abcdefghijklmn4',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn/doktergigispesialisbedahmulutdanmaksilofasial/dr-abcdefghijklmn4', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn/dokter-gigi-spesialis-bedah-mulut-dan-maksilofasial/dr-abcdefghijklmn5',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn/doktergigispesialisbedahmulutdanmaksilofasial/dr-abcdefghijklmn5', { tasks: req.session.tasks });
    }
);

//====================================================================================================================================
//fasilitas2
router.get('/fasilitas/rs-abcdefghijklmn2/spesialis-akupuntur',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn2/spesialisakupuntur', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn2/spesialis-farmakologi-klinik',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn2/spesialisfarmokologiklinik', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn2/spesialis-bedah',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn2/spesialisbedah', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn2/spesialis-anak',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn2/spesialisanak', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn2/spesialis-jantung-dan-pembuluh-darah',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn2/spesialisjantungdanpembuluhdarah', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn2/dokter-gigi-spesialis-bedah-mulut-dan-maksilofasial',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn2/doktergigispesialisbedahmulutdanmaksilofasial', { tasks: req.session.tasks });
    }
);

//------------------------------------------------------------------------------------------------------------------------------------

router.get('/fasilitas/rs-abcdefghijklmn2/spesialis-akupuntur/dr-abcdefghijklmn',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn2/spesialisakupuntur/dr-abcdefghijklmn', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn2/spesialis-akupuntur/dr-abcdefghijklmn2',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn2/spesialisakupuntur/dr-abcdefghijklmn2', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn2/spesialis-akupuntur/dr-abcdefghijklmn3',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn2/spesialisakupuntur/dr-abcdefghijklmn3', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn2/spesialis-akupuntur/dr-abcdefghijklmn4',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn2/spesialisakupuntur/dr-abcdefghijklmn4', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn2/spesialis-akupuntur/dr-abcdefghijklmn5',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn2/spesialisakupuntur/dr-abcdefghijklmn5', { tasks: req.session.tasks });
    }
);

//-----------------------------------------------------------------------------------------------------------------------------

router.get('/fasilitas/rs-abcdefghijklmn2/spesialis-farmakologi-klinik/dr-abcdefghijklmn',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn2/spesialisfarmakologiklinik/dr-abcdefghijklmn', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn2/spesialis-farmakologi-klinik/dr-abcdefghijklmn2',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn2/spesialisfarmakologiklinik/dr-abcdefghijklmn2', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn2/spesialis-farmakologi-klinik/dr-abcdefghijklmn3',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn2/spesialisfarmakologiklinik/dr-abcdefghijklmn3', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn2/spesialis-farmakologi-klinik/dr-abcdefghijklmn4',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn2/spesialisfarmakologiklinik/dr-abcdefghijklmn4', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn2/spesialis-farmakologi-klinik/dr-abcdefghijklmn5',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn2/spesialisfarmakologiklinik/dr-abcdefghijklmn5', { tasks: req.session.tasks });
    }
);

//------------------------------------------------------------------------------------------------------------------------------------

router.get('/fasilitas/rs-abcdefghijklmn2/spesialis-bedah/dr-abcdefghijklmn',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn2/spesialisbedah/dr-abcdefghijklmn', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn2/spesialis-bedah/dr-abcdefghijklmn2',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn2/spesialisbedah/dr-abcdefghijklmn2', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn2/spesialis-bedah/dr-abcdefghijklmn3',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn2/spesialisbedah/dr-abcdefghijklmn3', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn2/spesialis-bedah/dr-abcdefghijklmn4',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn2/spesialisbedah/dr-abcdefghijklmn4', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn2/spesialis-bedah/dr-abcdefghijklmn5',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn2/spesialisbedah/dr-abcdefghijklmn5', { tasks: req.session.tasks });
    }
);

//-----------------------------------------------------------------------------------------------------------------------------

router.get('/fasilitas/rs-abcdefghijklmn2/spesialis-anak/dr-abcdefghijklmn',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn2/spesialisanak/dr-abcdefghijklmn', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn2/spesialis-anak/dr-abcdefghijklmn2',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn2/spesialisanak/dr-abcdefghijklmn2', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn2/spesialis-anak/dr-abcdefghijklmn3',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn2/spesialisanak/dr-abcdefghijklmn3', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn2/spesialis-anak/dr-abcdefghijklmn4',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn2/spesialisanak/dr-abcdefghijklmn4', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn2/spesialis-anak/dr-abcdefghijklmn5',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn2/spesialisanak/dr-abcdefghijklmn5', { tasks: req.session.tasks });
    }
);

//---------------------------------------------------------------------------------------------------------------------------------------

router.get('/fasilitas/rs-abcdefghijklmn2/spesialis-jantung-dan-pembuluh-darah/dr-abcdefghijklmn',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn2/spesialisjantungdanpembuluhdarah/dr-abcdefghijklmn', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn2/spesialis-jantung-dan-pembuluh-darah/dr-abcdefghijklmn2',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn2/spesialisjantungdanpembuluhdarah/dr-abcdefghijklmn2', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn2/spesialis-jantung-dan-pembuluh-darah/dr-abcdefghijklmn3',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn2/spesialisjantungdanpembuluhdarah/dr-abcdefghijklmn3', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn2/spesialis-jantung-dan-pembuluh=darah/dr-abcdefghijklmn4',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn2/spesialisjantungdanpembuluhdarah/dr-abcdefghijklmn4', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn2/spesialis-jantung-dan-pembuluh-darah/dr-abcdefghijklmn5',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn2/spesialisjantungdanpembuluhdarah/dr-abcdefghijklmn5', { tasks: req.session.tasks });
    }
);

//------------------------------------------------------------------------------------------------------------------------------------

router.get('/fasilitas/rs-abcdefghijklmn2/dokter-gigi-spesialis-bedah-mulut-dan-maksilofasial/dr-abcdefghijklmn',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn2/doktergigispesialisbedahmulutdanmaksilofasial/dr-abcdefghijklmn', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn2/dokter-gigi-spesialis-bedah-mulut-dan-maksilofasial/dr-abcdefghijklmn2',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn2/doktergigispesialisbedahmulutdanmaksilofasial/dr-abcdefghijklmn2', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn2/dokter-gigi-spesialis-bedah-mulut-dan-maksilofasial/dr-abcdefghijklmn3',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn2/doktergigispesialisbedahmulutdanmaksilofasial/dr-abcdefghijklmn3', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn2/dokter-gigi-spesialis-bedah-mulut-dan-maksilofasial/dr-abcdefghijklmn4',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn2/doktergigispesialisbedahmulutdanmaksilofasial/dr-abcdefghijklmn4', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn2/dokter-gigi-spesialis-bedah-mulut-dan-maksilofasial/dr-abcdefghijklmn5',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn2/doktergigispesialisbedahmulutdanmaksilofasial/dr-abcdefghijklmn5', { tasks: req.session.tasks });
    }
);

//====================================================================================================================================
//3
router.get('/fasilitas/rs-abcdefghijklmn3/spesialis-akupuntur',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn3/spesialisakupuntur', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn3/spesialis-farmakologi-klinik',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn3/spesialisfarmokologiklinik', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn3/spesialis-bedah',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn3/spesialisbedah', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn3/spesialis-anak',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn3/spesialisanak', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn3/spesialis-jantung-dan-pembuluh-darah',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn3/spesialisjantungdanpembuluhdarah', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn3/dokter-gigi-spesialis-bedah-mulut-dan-maksilofasial',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn3/doktergigispesialisbedahmulutdanmaksilofasial', { tasks: req.session.tasks });
    }
);

//------------------------------------------------------------------------------------------------------------------------------------

router.get('/fasilitas/rs-abcdefghijklmn3/spesialis-akupuntur/dr-abcdefghijklmn',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn3/spesialisakupuntur/dr-abcdefghijklmn', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn3/spesialis-akupuntur/dr-abcdefghijklmn2',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn3/spesialisakupuntur/dr-abcdefghijklmn2', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn3/spesialis-akupuntur/dr-abcdefghijklmn3',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn3/spesialisakupuntur/dr-abcdefghijklmn3', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn3/spesialis-akupuntur/dr-abcdefghijklmn4',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn3/spesialisakupuntur/dr-abcdefghijklmn4', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn3/spesialis-akupuntur/dr-abcdefghijklmn5',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn3/spesialisakupuntur/dr-abcdefghijklmn5', { tasks: req.session.tasks });
    }
);

//-----------------------------------------------------------------------------------------------------------------------------

router.get('/fasilitas/rs-abcdefghijklmn3/spesialis-farmakologi-klinik/dr-abcdefghijklmn',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn3/spesialisfarmakologiklinik/dr-abcdefghijklmn', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn3/spesialis-farmakologi-klinik/dr-abcdefghijklmn2',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn3/spesialisfarmakologiklinik/dr-abcdefghijklmn2', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn3/spesialis-farmakologi-klinik/dr-abcdefghijklmn3',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn3/spesialisfarmakologiklinik/dr-abcdefghijklmn3', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn3/spesialis-farmakologi-klinik/dr-abcdefghijklmn4',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn3/spesialisfarmakologiklinik/dr-abcdefghijklmn4', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn3/spesialis-farmakologi-klinik/dr-abcdefghijklmn5',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn3/spesialisfarmakologiklinik/dr-abcdefghijklmn5', { tasks: req.session.tasks });
    }
);

//------------------------------------------------------------------------------------------------------------------------------------

router.get('/fasilitas/rs-abcdefghijklmn3/spesialis-bedah/dr-abcdefghijklmn',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn3/spesialisbedah/dr-abcdefghijklmn', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn3/spesialis-bedah/dr-abcdefghijklmn2',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn3/spesialisbedah/dr-abcdefghijklmn2', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn3/spesialis-bedah/dr-abcdefghijklmn3',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn3/spesialisbedah/dr-abcdefghijklmn3', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn3/spesialis-bedah/dr-abcdefghijklmn4',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn3/spesialisbedah/dr-abcdefghijklmn4', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn3/spesialis-bedah/dr-abcdefghijklmn5',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn3/spesialisbedah/dr-abcdefghijklmn5', { tasks: req.session.tasks });
    }
);

//-----------------------------------------------------------------------------------------------------------------------------

router.get('/fasilitas/rs-abcdefghijklmn3/spesialis-anak/dr-abcdefghijklmn',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn3/spesialisanak/dr-abcdefghijklmn', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn3/spesialis-anak/dr-abcdefghijklmn2',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn3/spesialisanak/dr-abcdefghijklmn2', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn3/spesialis-anak/dr-abcdefghijklmn3',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn3/spesialisanak/dr-abcdefghijklmn3', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn3/spesialis-anak/dr-abcdefghijklmn4',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn3/spesialisanak/dr-abcdefghijklmn4', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn3/spesialis-anak/dr-abcdefghijklmn5',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn3/spesialisanak/dr-abcdefghijklmn5', { tasks: req.session.tasks });
    }
);

//---------------------------------------------------------------------------------------------------------------------------------------

router.get('/fasilitas/rs-abcdefghijklmn3/spesialis-jantung-dan-pembuluh-darah/dr-abcdefghijklmn',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn3/spesialisjantungdanpembuluhdarah/dr-abcdefghijklmn', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn3/spesialis-jantung-dan-pembuluh-darah/dr-abcdefghijklmn2',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn3/spesialisjantungdanpembuluhdarah/dr-abcdefghijklmn2', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn3/spesialis-jantung-dan-pembuluh-darah/dr-abcdefghijklmn3',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn3/spesialisjantungdanpembuluhdarah/dr-abcdefghijklmn3', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn3/spesialis-jantung-dan-pembuluh=darah/dr-abcdefghijklmn4',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn3/spesialisjantungdanpembuluhdarah/dr-abcdefghijklmn4', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn3/spesialis-jantung-dan-pembuluh-darah/dr-abcdefghijklmn5',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn3/spesialisjantungdanpembuluhdarah/dr-abcdefghijklmn5', { tasks: req.session.tasks });
    }
);

//------------------------------------------------------------------------------------------------------------------------------------

router.get('/fasilitas/rs-abcdefghijklmn3/dokter-gigi-spesialis-bedah-mulut-dan-maksilofasial/dr-abcdefghijklmn',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn3/doktergigispesialisbedahmulutdanmaksilofasial/dr-abcdefghijklmn', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn3/dokter-gigi-spesialis-bedah-mulut-dan-maksilofasial/dr-abcdefghijklmn2',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn3/doktergigispesialisbedahmulutdanmaksilofasial/dr-abcdefghijklmn2', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn3/dokter-gigi-spesialis-bedah-mulut-dan-maksilofasial/dr-abcdefghijklmn3',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn3/doktergigispesialisbedahmulutdanmaksilofasial/dr-abcdefghijklmn3', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn3/dokter-gigi-spesialis-bedah-mulut-dan-maksilofasial/dr-abcdefghijklmn4',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn3/doktergigispesialisbedahmulutdanmaksilofasial/dr-abcdefghijklmn4', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn3/dokter-gigi-spesialis-bedah-mulut-dan-maksilofasial/dr-abcdefghijklmn5',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn3/doktergigispesialisbedahmulutdanmaksilofasial/dr-abcdefghijklmn5', { tasks: req.session.tasks });
    }
);

//====================================================================================================================================
//4
router.get('/fasilitas/rs-abcdefghijklmn4/spesialis-akupuntur',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn4/spesialisakupuntur', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn4/spesialis-farmakologi-klinik',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn4/spesialisfarmokologiklinik', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn4/spesialis-bedah',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn4/spesialisbedah', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn4/spesialis-anak',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn4/spesialisanak', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn4/spesialis-jantung-dan-pembuluh-darah',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn4/spesialisjantungdanpembuluhdarah', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn4/dokter-gigi-spesialis-bedah-mulut-dan-maksilofasial',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn4/doktergigispesialisbedahmulutdanmaksilofasial', { tasks: req.session.tasks });
    }
);

//------------------------------------------------------------------------------------------------------------------------------------

router.get('/fasilitas/rs-abcdefghijklmn4/spesialis-akupuntur/dr-abcdefghijklmn',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn4/spesialisakupuntur/dr-abcdefghijklmn', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn4/spesialis-akupuntur/dr-abcdefghijklmn2',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn4/spesialisakupuntur/dr-abcdefghijklmn2', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn4/spesialis-akupuntur/dr-abcdefghijklmn3',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn4/spesialisakupuntur/dr-abcdefghijklmn3', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn4/spesialis-akupuntur/dr-abcdefghijklmn4',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn4/spesialisakupuntur/dr-abcdefghijklmn4', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn4/spesialis-akupuntur/dr-abcdefghijklmn5',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn4/spesialisakupuntur/dr-abcdefghijklmn5', { tasks: req.session.tasks });
    }
);

//-----------------------------------------------------------------------------------------------------------------------------

router.get('/fasilitas/rs-abcdefghijklmn4/spesialis-farmakologi-klinik/dr-abcdefghijklmn',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn4/spesialisfarmakologiklinik/dr-abcdefghijklmn', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn4/spesialis-farmakologi-klinik/dr-abcdefghijklmn2',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn4/spesialisfarmakologiklinik/dr-abcdefghijklmn2', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn4/spesialis-farmakologi-klinik/dr-abcdefghijklmn3',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn4/spesialisfarmakologiklinik/dr-abcdefghijklmn3', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn4/spesialis-farmakologi-klinik/dr-abcdefghijklmn4',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn4/spesialisfarmakologiklinik/dr-abcdefghijklmn4', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn4/spesialis-farmakologi-klinik/dr-abcdefghijklmn5',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn4/spesialisfarmakologiklinik/dr-abcdefghijklmn5', { tasks: req.session.tasks });
    }
);

//------------------------------------------------------------------------------------------------------------------------------------

router.get('/fasilitas/rs-abcdefghijklmn4/spesialis-bedah/dr-abcdefghijklmn',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn4/spesialisbedah/dr-abcdefghijklmn', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn4/spesialis-bedah/dr-abcdefghijklmn2',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn4/spesialisbedah/dr-abcdefghijklmn2', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn4/spesialis-bedah/dr-abcdefghijklmn3',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn4/spesialisbedah/dr-abcdefghijklmn3', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn4/spesialis-bedah/dr-abcdefghijklmn4',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn4/spesialisbedah/dr-abcdefghijklmn4', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn4/spesialis-bedah/dr-abcdefghijklmn5',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn4/spesialisbedah/dr-abcdefghijklmn5', { tasks: req.session.tasks });
    }
);

//-----------------------------------------------------------------------------------------------------------------------------

router.get('/fasilitas/rs-abcdefghijklmn4/spesialis-anak/dr-abcdefghijklmn',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn4/spesialisanak/dr-abcdefghijklmn', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn4/spesialis-anak/dr-abcdefghijklmn2',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn4/spesialisanak/dr-abcdefghijklmn2', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn4/spesialis-anak/dr-abcdefghijklmn3',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn4/spesialisanak/dr-abcdefghijklmn3', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn4/spesialis-anak/dr-abcdefghijklmn4',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn4/spesialisanak/dr-abcdefghijklmn4', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn4/spesialis-anak/dr-abcdefghijklmn5',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn4/spesialisanak/dr-abcdefghijklmn5', { tasks: req.session.tasks });
    }
);

//---------------------------------------------------------------------------------------------------------------------------------------

router.get('/fasilitas/rs-abcdefghijklmn4/spesialis-jantung-dan-pembuluh-darah/dr-abcdefghijklmn',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn4/spesialisjantungdanpembuluhdarah/dr-abcdefghijklmn', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn4/spesialis-jantung-dan-pembuluh-darah/dr-abcdefghijklmn2',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn4/spesialisjantungdanpembuluhdarah/dr-abcdefghijklmn2', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn4/spesialis-jantung-dan-pembuluh-darah/dr-abcdefghijklmn3',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn4/spesialisjantungdanpembuluhdarah/dr-abcdefghijklmn3', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn4/spesialis-jantung-dan-pembuluh=darah/dr-abcdefghijklmn4',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn4/spesialisjantungdanpembuluhdarah/dr-abcdefghijklmn4', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn4/spesialis-jantung-dan-pembuluh-darah/dr-abcdefghijklmn5',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn4/spesialisjantungdanpembuluhdarah/dr-abcdefghijklmn5', { tasks: req.session.tasks });
    }
);

//------------------------------------------------------------------------------------------------------------------------------------

router.get('/fasilitas/rs-abcdefghijklmn4/dokter-gigi-spesialis-bedah-mulut-dan-maksilofasial/dr-abcdefghijklmn',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn4/doktergigispesialisbedahmulutdanmaksilofasial/dr-abcdefghijklmn', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn4/dokter-gigi-spesialis-bedah-mulut-dan-maksilofasial/dr-abcdefghijklmn2',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn4/doktergigispesialisbedahmulutdanmaksilofasial/dr-abcdefghijklmn2', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn4/dokter-gigi-spesialis-bedah-mulut-dan-maksilofasial/dr-abcdefghijklmn3',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn4/doktergigispesialisbedahmulutdanmaksilofasial/dr-abcdefghijklmn3', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn4/dokter-gigi-spesialis-bedah-mulut-dan-maksilofasial/dr-abcdefghijklmn4',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn4/doktergigispesialisbedahmulutdanmaksilofasial/dr-abcdefghijklmn4', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn4/dokter-gigi-spesialis-bedah-mulut-dan-maksilofasial/dr-abcdefghijklmn5',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn4/doktergigispesialisbedahmulutdanmaksilofasial/dr-abcdefghijklmn5', { tasks: req.session.tasks });
    }
);

//===================================================================================================================================
//5

router.get('/fasilitas/rs-abcdefghijklmn5/spesialis-akupuntur',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn5/spesialisakupuntur', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn5/spesialis-farmakologi-klinik',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn5/spesialisfarmokologiklinik', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn5/spesialis-bedah',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn5/spesialisbedah', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn5/spesialis-anak',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn5/spesialisanak', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn5/spesialis-jantung-dan-pembuluh-darah',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn5/spesialisjantungdanpembuluhdarah', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn5/dokter-gigi-spesialis-bedah-mulut-dan-maksilofasial',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn5/doktergigispesialisbedahmulutdanmaksilofasial', { tasks: req.session.tasks });
    }
);

//------------------------------------------------------------------------------------------------------------------------------------

router.get('/fasilitas/rs-abcdefghijklmn5/spesialis-akupuntur/dr-abcdefghijklmn',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn5/spesialisakupuntur/dr-abcdefghijklmn', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn5/spesialis-akupuntur/dr-abcdefghijklmn2',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn5/spesialisakupuntur/dr-abcdefghijklmn2', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn5/spesialis-akupuntur/dr-abcdefghijklmn3',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn5/spesialisakupuntur/dr-abcdefghijklmn3', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn5/spesialis-akupuntur/dr-abcdefghijklmn4',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn5/spesialisakupuntur/dr-abcdefghijklmn4', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn5/spesialis-akupuntur/dr-abcdefghijklmn5',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn5/spesialisakupuntur/dr-abcdefghijklmn5', { tasks: req.session.tasks });
    }
);

//-----------------------------------------------------------------------------------------------------------------------------

router.get('/fasilitas/rs-abcdefghijklmn5/spesialis-farmakologi-klinik/dr-abcdefghijklmn',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn5/spesialisfarmakologiklinik/dr-abcdefghijklmn', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn5/spesialis-farmakologi-klinik/dr-abcdefghijklmn2',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn5/spesialisfarmakologiklinik/dr-abcdefghijklmn2', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn5/spesialis-farmakologi-klinik/dr-abcdefghijklmn3',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn5/spesialisfarmakologiklinik/dr-abcdefghijklmn3', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn5/spesialis-farmakologi-klinik/dr-abcdefghijklmn4',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn5/spesialisfarmakologiklinik/dr-abcdefghijklmn4', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn5/spesialis-farmakologi-klinik/dr-abcdefghijklmn5',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn5/spesialisfarmakologiklinik/dr-abcdefghijklmn5', { tasks: req.session.tasks });
    }
);

//------------------------------------------------------------------------------------------------------------------------------------

router.get('/fasilitas/rs-abcdefghijklmn5/spesialis-bedah/dr-abcdefghijklmn',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn5/spesialisbedah/dr-abcdefghijklmn', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn5/spesialis-bedah/dr-abcdefghijklmn2',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn5/spesialisbedah/dr-abcdefghijklmn2', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn5/spesialis-bedah/dr-abcdefghijklmn3',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn5/spesialisbedah/dr-abcdefghijklmn3', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn5/spesialis-bedah/dr-abcdefghijklmn4',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn5/spesialisbedah/dr-abcdefghijklmn4', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn5/spesialis-bedah/dr-abcdefghijklmn5',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn5/spesialisbedah/dr-abcdefghijklmn5', { tasks: req.session.tasks });
    }
);

//-----------------------------------------------------------------------------------------------------------------------------

router.get('/fasilitas/rs-abcdefghijklmn5/spesialis-anak/dr-abcdefghijklmn',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn5/spesialisanak/dr-abcdefghijklmn', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn5/spesialis-anak/dr-abcdefghijklmn2',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn5/spesialisanak/dr-abcdefghijklmn2', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn5/spesialis-anak/dr-abcdefghijklmn3',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn5/spesialisanak/dr-abcdefghijklmn3', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn5/spesialis-anak/dr-abcdefghijklmn4',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn5/spesialisanak/dr-abcdefghijklmn4', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn5/spesialis-anak/dr-abcdefghijklmn5',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn5/spesialisanak/dr-abcdefghijklmn5', { tasks: req.session.tasks });
    }
);

//---------------------------------------------------------------------------------------------------------------------------------------

router.get('/fasilitas/rs-abcdefghijklmn5/spesialis-jantung-dan-pembuluh-darah/dr-abcdefghijklmn',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn5/spesialisjantungdanpembuluhdarah/dr-abcdefghijklmn', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn5/spesialis-jantung-dan-pembuluh-darah/dr-abcdefghijklmn2',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn5/spesialisjantungdanpembuluhdarah/dr-abcdefghijklmn2', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn5/spesialis-jantung-dan-pembuluh-darah/dr-abcdefghijklmn3',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn5/spesialisjantungdanpembuluhdarah/dr-abcdefghijklmn3', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn5/spesialis-jantung-dan-pembuluh=darah/dr-abcdefghijklmn4',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn5/spesialisjantungdanpembuluhdarah/dr-abcdefghijklmn4', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn5/spesialis-jantung-dan-pembuluh-darah/dr-abcdefghijklmn5',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn5/spesialisjantungdanpembuluhdarah/dr-abcdefghijklmn5', { tasks: req.session.tasks });
    }
);

//------------------------------------------------------------------------------------------------------------------------------------

router.get('/fasilitas/rs-abcdefghijklmn5/dokter-gigi-spesialis-bedah-mulut-dan-maksilofasial/dr-abcdefghijklmn',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn5/doktergigispesialisbedahmulutdanmaksilofasial/dr-abcdefghijklmn', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn5/dokter-gigi-spesialis-bedah-mulut-dan-maksilofasial/dr-abcdefghijklmn2',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn5/doktergigispesialisbedahmulutdanmaksilofasial/dr-abcdefghijklmn2', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn5/dokter-gigi-spesialis-bedah-mulut-dan-maksilofasial/dr-abcdefghijklmn3',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn5/doktergigispesialisbedahmulutdanmaksilofasial/dr-abcdefghijklmn3', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn5/dokter-gigi-spesialis-bedah-mulut-dan-maksilofasial/dr-abcdefghijklmn4',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn5/doktergigispesialisbedahmulutdanmaksilofasial/dr-abcdefghijklmn4', { tasks: req.session.tasks });
    }
);

router.get('/fasilitas/rs-abcdefghijklmn5/dokter-gigi-spesialis-bedah-mulut-dan-maksilofasial/dr-abcdefghijklmn5',
    async (req, res) => {
        res.render('pages/rumahsakit/rs-abcdefghijklmn5/doktergigispesialisbedahmulutdanmaksilofasial/dr-abcdefghijklmn5', { tasks: req.session.tasks });
    }
);

//lalu buat todo.ejs di folder pages

//misal kita akses /done/:index cth :index = 5, berarti kita menghapus array ke 5 dari task itu(codong latihan)

//jangan lupa module.exports
module.exports = router;

//time 01:39:40 pindah ke td.ejs
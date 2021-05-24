const controllers = require('../controllers');

const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => res.send('This is root!'));

router.get('/getAllCats', controllers.getAllCats);

module.exports = router;

const express = require('express');
const router = express.Router();

const mainController = require('./controllers/mainController');
const searchController = require('./controllers/searchController');
const deckController = require('./controllers/deckController');


router.get('/', mainController.homePage);
router.get('/card/:id', mainController.cardPage);
router.get('/search', searchController.searchPage);
router.get('/search/:element', searchController.searchCard)
router.get('/search/:level', searchController.searchCard)
router.get('/search/:direction/:value', searchController.searchCard)
router.get('/search/:name', searchController.searchCard)

router.get('/deck', deckController.deckPage);
router.get('/deck/add/:id', deckController.addCard);
router.get('/deck/delete/:id', deckController.deleteCard);



module.exports = router;
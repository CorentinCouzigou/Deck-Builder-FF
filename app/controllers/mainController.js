const dataMapper = require('../dataMapper');

const mainController = {
  homePage: (request, response) => {
    dataMapper.getAllCards((error, results) => {
      if (error) {
        response.status(500).send('Erreur ! Aucun enregidtrement n\'a été créé');
      } else {
        const allCards = results;
        response.render('cardList', { allCards, title: 'Liste des cartes' });
      }
    });
  },
  cardPage: (request, response) => {
    const cardId = request.params.id;
    dataMapper.getOneCard(cardId, (error, result) => {
      if (error) {
        response.status(500).send('Erreur ! Aucun enregistrement n\'a été créé');
      }
      else {
        const oneCard = result[0];
        response.render('card', { oneCard });
      }
    });
  }
};

module.exports = mainController;
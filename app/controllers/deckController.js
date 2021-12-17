const dataMapper = require('../dataMapper');

const deckController = {

  deckPage: (request, response) => {
    response.render('deck', { cards: request.session.deck, title: 'Deck de cartes' });

  },

  addCard: (request, response) => {
    const cardId = request.params.id;
    dataMapper.getOneCard(cardId, (error, result) => {
      const found = request.session.deck.find(card => card._id === cardId);
      if (found) {
        response.redirect('/deck');
      }
      if (error) {
        response.status(500).send('erreur, aucun enregistrement');
      }
      else {
        const deck = result[0];
        request.session.deck.push(deck);

        response.redirect('/deck');
      }
    })
  },

  deleteCard: (request, response) => {
    const cardId = request.params.id;
    let tableauFiltre = request.session.deck.filter((card) => {
      if (card._id !== cardId) {
        return card;
      }
    });
    request.session.deck = tableauFiltre;
    response.redirect('/deck')
  },
};

module.exports = deckController;
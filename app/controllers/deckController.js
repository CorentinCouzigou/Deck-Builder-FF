const dataMapper = require('../dataMapper');

const deckController = {
    deckPage: (request, response) => {
        response.render('deck');
    },
    addCard : (request, response) => {
        const cardId = +request.params.id;
        dataMapper.getOneCard(cardId, (error3, result3) => {
            if(!request.session.deck) {
              request.session.deck = [];
            }
            if(error3) {
              response.status(500).send('erreur, aucun enregistrement');
            }
            else{
              const deck = result3.rows[0];
              console.log(deck);
              request.session.deck.push(deck);
      
              response.redirect('/deck');
            }
          })
        },
        deleteCard: (request, response) => {
            const cardId = +request.params.id;
            let tableauFiltre = request.session.deck.filter((card) =>{
                if (card.id === cardId){
                    return false;
                }
                else {
                    return true;
                }
            });
            request.session.deck = tableauFiltre;
            response.redirect('/deck')
        },
      };

module.exports = deckController;
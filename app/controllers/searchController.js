const dataMapper = require('../dataMapper');

const searchController = {
  searchPage: (request, response) => {
    response.render('search');
  },
  searchCard: (request, response) => {
    const searchElement = request.query.element;
    console.log(`recherche controller 1 ${searchElement}`);
    dataMapper.searchCard(searchElement, (error, result) => {
      if (error) {
        response.status(500).send('Erreur ! Aucun enregistrement n\'a été créé');
      }
      else {
        const research = result;
        console.log(`recherche 2 controller.rows ${research}`);

        response.render('research', { research });
      }
    });
  },

};

module.exports = searchController;
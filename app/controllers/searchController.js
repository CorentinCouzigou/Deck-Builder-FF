const dataMapper = require('../dataMapper');
const nameSchema = require('../validations/validate');

const searchController = {
  searchPage: (request, response) => {
    response.render('search');
  },
  searchCard: (request, response) => {
    if (request.query.element) {
      const searchElement = request.query.element;
      console.log(`recherche controller 1 ${searchElement}`);
      dataMapper.searchCardByElement(searchElement, (error, result) => {
        if (error) {
          response.status(500).send('Erreur ! Aucun enregistrement n\'a été créé');
        }
        else {
          const research = result;
          console.log(`recherche 2 controller.rows ${research}`);

          response.render('research', { research });
        }
      });
    }

    else if (request.query.level) {
      const searchLevel = +request.query.level;
      console.log(`recherche controller 1 ${searchLevel}`);
      dataMapper.searchCardByLevel(searchLevel, (error, result) => {
        if (error) {
          response.status(500).send('Erreur ! Aucun enregistrement n\'a été créé');
        }
        else {
          const research = result;
          console.log(`recherche 2 controller.rows ${research}`);

          response.render('research', { research });
        }
      });
    }

    else if (request.query.direction && request.query.value) {
      const searchDirection = request.query.direction.toLowerCase();
      console.log('searchDirection', searchDirection)
      const searchValue = +request.query.value;
      console.log('searchValue', searchValue)
      console.log(`recherche controller 1 ${searchDirection}, `, searchValue);
      dataMapper.searchCardByDirectionAndValue(searchDirection, searchValue, (error, result) => {
        if (error) {
          response.status(500).send('Erreur ! Aucun enregistrement n\'a été créé');
          response.send('aucun enregistrement')
        }
        else {
          const research = result;
          console.log(`DIRECTION AND VALUEs ${research}`);

          response.render('research', { research });
        }
      });
    }

    else if (request.query.name) {
      const searchName = request.query.name;
      let errorMessage = nameSchema.validate({
        name: searchName
      }).error;
      console.log('errorMessage', errorMessage);
      console.log(`recherche controller 1 ${searchName}`);
      if (errorMessage) {
        return
      }
      const nameCardWithUppercase = searchName.charAt(0).toUpperCase() + searchName.slice(1);
      dataMapper.searchCardByName(nameCardWithUppercase, (error, result) => {
        if (error) {
          response.status(500).send('Erreur ! Aucun enregistrement n\'a été créé');
          response.send('aucun enregistrement')
        }
        else {
          const research = result;
          console.log(`recherche 2 controller.rows ${research}`);
          response.render('research', { research });
        }
      });
    }
  }


};

module.exports = searchController;
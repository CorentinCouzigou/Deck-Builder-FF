const dataMapper = require('../dataMapper');
const nameSchema = require('../validations/validate');

const searchController = {
  searchPage: (request, response) => {
    response.render('search');
  },
  searchCard: (request, response) => {
    if (request.query.element) {
      const searchElement = request.query.element;
      dataMapper.searchCardByElement(searchElement, (error, result) => {
        if (error) {
          response.status(500).send('Erreur ! Aucun enregistrement n\'a été créé');
        }
        else {
          const research = result;
        
          response.render('research', { research });
        }
      });
    }

    else if (request.query.level) {
      const searchLevel = +request.query.level;
      dataMapper.searchCardByLevel(searchLevel, (error, result) => {
        if (error) {
          response.status(500).send('Erreur ! Aucun enregistrement n\'a été créé');
        }
        else {
          const research = result;
      

          response.render('research', { research });
        }
      });
    }

    else if (request.query.direction && request.query.value) {
      const searchDirection = request.query.direction.toLowerCase();
      const searchValue = +request.query.value;

      dataMapper.searchCardByDirectionAndValue(searchDirection, searchValue, (error, result) => {
        if (error) {
          response.status(500).send('Erreur ! Aucun enregistrement n\'a été créé');
          response.send('aucun enregistrement')
        }
        else {
          const research = result;

          response.render('research', { research });
        }
      });
    }

    else if (request.query.name) {
      const searchName = request.query.name;
      let errorMessage = nameSchema.validate({
        name: searchName
      }).error;
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

          response.render('research', { research });
        }
      });
    }
  }


};

module.exports = searchController;
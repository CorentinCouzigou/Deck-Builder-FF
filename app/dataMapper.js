const cardSchema = require('./models/cardSchema');
const mongoose = require('mongoose');


const dataMapper = {
  getAllCards: async (callback) => {
    const allCards = await cardSchema.find().exec().then(card => {
      callback(null, card);
    }).catch((e) => {
      console.error(e)
      callback(e, null);
    });
  },

  getOneCard: async (id, callback) => {
    console.log('id in datamapper', id)
    const oneCard = await cardSchema.find({ _id: id }).exec().then(card => {
      callback(null, card);
    }).catch((e) => {
      console.error(e)
      callback(e, null);
    });
  },

  searchCard: (element, callback) => {
    const byElement = {
      text: `SELECT * FROM "card" WHERE "element"= '${element}';`,
      // values: [element]
    }
    console.log(`ma recherche mapper ${byElement}`);
    client.query(byElement, callback)
  }
};


module.exports = dataMapper;
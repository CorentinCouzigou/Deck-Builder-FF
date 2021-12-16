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

  searchCardByElement: async (element, callback) => {
    const byElement = await cardSchema.find({ element: element }).exec().then(card => {
      callback(null, card);
    }).catch((e) => {
      console.error(e)
      callback(e, null);
    });
    console.log(`ma recherche mapper ${byElement}`);
  },

  searchCardByLevel: async (level, callback) => {
    const byLevel = await cardSchema.find({ level: level }).exec().then(card => {
      callback(null, card);
    }).catch((e) => {
      console.error(e)
      callback(e, null);
    });
    console.log(`ma recherche mapper ${byLevel}`);
  },

  searchCardByDirectionAndValue: async (direction, value, callback) => {
    console.log(direction, "direction", "value", value);
    const directionValue = `values.${direction}`;
    const byDirecitonAndValue = await cardSchema.find({ [directionValue]: value }).exec().then(card => {
      callback(null, card);
    }).catch((e) => {
      console.error(e)
      callback(e, null);
    });
    console.log(`ma recherche dattamapper ${byDirecitonAndValue}`);
  },

  searchCardByName: async (name, callback) => {
    const byName = await cardSchema.find({ name: name }).exec().then(card => {
      callback(null, card);
    }).catch((e) => {
      console.error(e)
      callback(e, null);
    });
    console.log(`ma recherche mapper ${byName}`);
  }
};


module.exports = dataMapper;
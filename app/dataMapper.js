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
  },

  searchCardByLevel: async (level, callback) => {
    const byLevel = await cardSchema.find({ level: level }).exec().then(card => {
      callback(null, card);
    }).catch((e) => {
      console.error(e)
      callback(e, null);
    });
  },

  searchCardByDirectionAndValue: async (direction, value, callback) => {
    const directionValue = `values.${direction}`;
    const byDirecitonAndValue = await cardSchema.find({ [directionValue]: value }).exec().then(card => {
      callback(null, card);
    }).catch((e) => {
      console.error(e)
      callback(e, null);
    });
  },

  searchCardByName: async (name, callback) => {
    const byName = await cardSchema.find({ name: name }).exec().then(card => {
      callback(null, card);
    }).catch((e) => {
      console.error(e)
      callback(e, null);
    });
  }
};


module.exports = dataMapper;
const Joi = require('joi');
const nameSchema = Joi.object({
    name: Joi.string().pattern(new RegExp('^[A-Za-zéèÏïÉç]*$')).min(1).max(20).required(),
});

module.exports = nameSchema;
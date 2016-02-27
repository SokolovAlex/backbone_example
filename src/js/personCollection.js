/**
 * Created by alexs_000 on 22.02.2016.
 */

const Backbone = require('backbone');
let Person = require('./personModel.js');

module.exports = Backbone.Collection.extend({
    url: './data.json',
    model: Person
});
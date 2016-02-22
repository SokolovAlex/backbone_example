/**
 * Created by alexs_000 on 22.02.2016.
 */
let Backbone = require('backbone');
let appView = require('./personListView.js');

module.exports = Backbone.Router.extend({

    routes: {
        "/":               "empty",
        "person/:id":        "person"
    },

    empty () {
        console.log("empty");
    },

    person (id, page) {
        console.log("person");
    }

});
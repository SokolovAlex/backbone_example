/**
 * Created by alexs_000 on 22.02.2016.
 */
let Backbone = require('backbone');
let ListView = require('./personListView.js');
let PersonView = require('./personView.js');

let listView = new ListView();

module.exports = Backbone.Router.extend({
    routes: {
        "":               "empty",
        "person/:id":        "person"
    },

    empty () {
        console.log("empty");
        listView.render();
    },

    person (id, page) {
        console.log("person");
    }

});
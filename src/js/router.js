/**
 * Created by alexs_000 on 22.02.2016.
 */
let Backbone = require('backbone');
let ListView = require('./personListView.js');
let PersonView = require('./personView.js');
let _ = require('lodash');

let listView = new ListView(),
    personView = new PersonView();

let PersonCollection = require('./personCollection.js');
let persons = new PersonCollection();
let promise = persons.fetch();

module.exports = Backbone.Router.extend({
    routes: {
        "": "empty",
        "person/:id": "person"
    },
    empty() {
        promise.done((items) => {
            listView.render(items);
            personView.render();
        });
    },
    person(id) {
        promise.done((items) => {
            listView.render(items, id);
            let person = _.find((x) => x.id == id);
            personView.render(person);
        });
    }
});
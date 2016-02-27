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

let currentPersonId,
    currentPage = 0;
listView.on('select', (id) => {
    router.navigate(`person/${id}/page/${currentPage}`);
    renderPerson(id);
});

listView.on('page', (page) => {
    router.navigate(`person/${currentPersonId || 0}/page/${page}`);
    renderPerson(currentPersonId || 0, page);
});

var renderPerson = (id, page) => {
    currentPersonId = id || currentPersonId;
    currentPage = page || currentPage;
    promise.done((items) => {
        listView.render(items, currentPage);
        let person = _.find(items, (x) => x.id == currentPersonId);
        personView.render(person);
    });
};

let Router = Backbone.Router.extend({
    routes: {
        "": "empty",
        "person/:id/page/:page": "person"
    },
    empty() {
        promise.done((items) => {
            listView.render(items);
            personView.render();
        });
    },
    person: renderPerson
});

let router = new Router();

module.exports = router;
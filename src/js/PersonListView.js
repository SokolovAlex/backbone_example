/**
 * Created by alexs_000 on 22.02.2016.
 */
const Backbone = require('backbone'),
    $ = require('jquery'),
    Handlebars = require('handlebars');

let PersonCollection = require('./personCollection.js');
let persons = new PersonCollection();
let promise,
    templateFn;

module.exports = Backbone.View.extend({
    el: '#person_list',
    initialize() {
        promise = persons.fetch();
        let source = $('#personListTemplate').html();
        templateFn = Handlebars.compile(source);
    },
    render() {
        var self = this;
        promise.done((items) => {
            self.$el.html(templateFn({ persons: items}));
        });
    },
    events: {
        'keypress #new-todo': 'createTodoOnEnter'
    }
});
/**
 * Created by alexs_000 on 22.02.2016.
 */
const Backbone = require('backbone'),
    $ = require('jquery'),
    Handlebars = require('handlebars');

let templateFn;

module.exports = Backbone.View.extend({
    el: '#person_list',
    initialize() {
        let source = $('#personTemplate').html();
        templateFn = Handlebars.compile(source);
    },
    render(items) {
        this.$el.html(templateFn({ persons: items }));
    },
    selectPerson() {

    },
    events: {
        'click #person': 'selectPerson'
    }
});
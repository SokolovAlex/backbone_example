/**
 * Created by alexs_000 on 22.02.2016.
 */
let Backbone = require('backbone');
let $ = require('jquery');

// renders the full list of todo items calling TodoView for each one.
module.exports = Backbone.View.extend({
    el: '#app',
    initialize: function () {
        this.input = this.$('#new-todo');
    },
    events: {
        'keypress #new-todo': 'createTodoOnEnter'
    }
});
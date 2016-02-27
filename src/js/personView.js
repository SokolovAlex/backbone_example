/**
 * Created by alexs_000 on 23.02.2016.
 */
/**
 * Created by alexs_000 on 22.02.2016.
 */
let Backbone = require('backbone'),
    $ = require('jquery'),
    Handlebars = require('handlebars');

let templateFn;

module.exports = Backbone.View.extend({
    el: '#person',
    initialize: function () {
        let source = $('#personTemplate').html();
        templateFn = Handlebars.compile(source);
    },
    render(item) {
        this.$el.html(templateFn({person: item}));
    }
});
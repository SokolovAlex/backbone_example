/**
 * Created by alexs_000 on 22.02.2016.
 */
const Backbone = require('backbone'),
    $ = require('jquery'),
    _ = require('lodash'),
    Handlebars = require('handlebars');

let templateFn;

let events = {
    'select': _.noop,
    'page': _.noop
};
let pager = { size: 5, current: 1 };
let cached;

module.exports = Backbone.View.extend({
    el: '#person_list',
    initialize() {
        let source = $('#personListTemplate').html();
        templateFn = Handlebars.compile(source);
    },
    render(items, page) {
        cached = items || cached;
        if (page) {
            pager.current = page;
        }
        pager.all = Math.ceil(cached.length / pager.size);
        this.renderCached();
    },
    renderCached() {
        let pageItems = _.take(_.rest(cached, (pager.current - 1) * pager.size), pager.size);
        this.$el.html(templateFn({ persons: pageItems, pager: pager }));
    },
    selectPerson(ev) {
        let id = $(ev.currentTarget).data('id');
        events['select'](id);
    },
    on(name, cb) {
        if (_.isFunction(cb)) {
            events[name] = cb;
        }
    },
    next() {
        if (pager.current < pager.all) {
            pager.current++;
        }
        this.renderCached();
        events['page'](pager.current);
    },
    prev() {
        if (pager.current > 1) {
            pager.current--;
        }
        this.renderCached();
        events['page'](pager.current);
    },
    events: {
        'click .person': 'selectPerson',
        'click .next': 'next',
        'click .prev': 'prev'
    }
});
/**
 * Created by alexs_000 on 22.02.2016.
 */
const Backbone = require('backbone');

module.exports = Backbone.Model.extend({
    defaults: {
        fname: 'Vitold',
        lname: 'Gombrovich',
        age: 33,
        location: 'Polska'
    }
});
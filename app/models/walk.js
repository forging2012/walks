import DS from 'ember-data';

export default DS.Model.extend({
    _id: DS.attr('string'),
    author: DS.attr('string'),
    categories: DS.attr('array'),
    title: DS.attr('string'),
    locations: DS.attr('array'),
    pins: DS.attr('array'),
    created_at: DS.attr('date'),
    updated_at: DS.attr('date')
});

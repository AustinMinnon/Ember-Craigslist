import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  body: DS.attr(),
  user: DS.attr(),
  email: DS.attr(),
  date: DS.attr(),
  // category: belongsTo('category', {async: true})
});

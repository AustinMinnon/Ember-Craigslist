import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['date:desc'],
  sortedListings: Ember.computed.sort('category.listings', 'sortBy'),
  actions: {
    saveListing(params) {
      this.sendAction('saveListing', params);
    }
  }
});

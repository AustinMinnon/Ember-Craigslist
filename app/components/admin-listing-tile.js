import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(listing) {
      if (confirm('Are you sure you want to delete this forever?')) {
        this.sendAction('destroyListing', listing);
      }
    }
  }
});

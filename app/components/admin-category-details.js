import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveListing(params) {
      this.sendAction('saveListing', params);
    }
  }
});

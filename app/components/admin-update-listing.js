import Ember from 'ember';

export default Ember.Component.extend({
  updateListingForm: false,
  actions: {
    updateFormShow() {
      this.set('updateListingForm', true);
    },
    update(listing) {
      var params = {
        title: this.get('title'),
        body: this.get('body'),
        user: this.get('user'),
        email: this.get('email'),
        date: this.get('date')
      };
      this.set('updateListingForm', false);
      this.sendAction('updateListing', listing, params);
    }
  }
});

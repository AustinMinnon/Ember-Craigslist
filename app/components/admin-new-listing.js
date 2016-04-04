import Ember from 'ember';

export default Ember.Component.extend({
  addNewListing: false,
  actions: {
    listingFormShow() {
      this.set('addNewListing', true);
    },
    save() {
      var params = {
        category: this.get('category') ? this.get('category') :"",
        title: this.get('title') ? this.get('title') : "",
        body: this.get('body') ? this.get('body') : "",
        user: this.get('user') ? this.get('user') : "",
        email: this.get('email') ? this.get('email') : "",
        date: this.get('date') ? this.get('date') : "",
      };
      this.set('addNewListing', false);
      this.sendAction('saveListing', params);
    }
  }
});

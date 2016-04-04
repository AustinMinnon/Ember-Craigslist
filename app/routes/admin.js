import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash ({
      categories: this.store.findAll('category'),
      listings: this.store.findAll('listing')
    });
  },

  actions: {
    destroyCategory(category) {
      category.destroyRecord();
      this.transitionTo('admin');
    },
    saveCategory(params) {
      var newCategory = this.store.createRecord('category', params);
      newCategory.save();
      this.transitionTo('admin');
    },
    update(category, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !==undefined) {
          category.set(key, params[key]);
        }
      });
      category.save();
      this.transitionTo('admin')
    },
    destroyListing(listing) {
      listing.destroyRecord();
      this.transitionTo('admin');
    },
    saveListing(params) {
      var newListing = this.store.createRecord('listing', params);
      newListing.save();
      this.transitionTo('admin');
    },
  }
});

import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('category');
  },

  actions: {
    destroyCategory(category) {
      category.destroyRecord();
      this.transitionTo('admin');
    },
    save(params) {
      var newCategory = this.store.createRecord('category', params);
      newCategory.save();
      this.transitionTo('admin');
    }
  }
});

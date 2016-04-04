import Ember from 'ember';

export default Ember.Component.extend({
  updateCategoryForm: false,
  actions: {
    categoryUpdateShow() {
      this.set('updateCategoryForm', true);
    },
    update(category) {
      var params = {
        type: this.get('type'),
      };
      this.set('updateCategoryForm', false);
      this.sendAction('update', category, params);
    }
  }
});

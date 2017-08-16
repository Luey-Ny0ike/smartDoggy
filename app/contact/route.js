import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveComment() {
      var params = {
        firstname: this.get('firstname'),
        lastname: this.get('lastname'),
        email: this.get('email'),
        comment: this.get('comment')
      }
    },

    saveComment(params) {
      var newcomment = this.store.createRecord('comment', params);
      newcomment.save();
      this.transitionTo('contact')
    }
  }
});

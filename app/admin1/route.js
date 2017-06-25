import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveDog3(params){
      var newdog = this.store.createRecord('dog', params);
      newdog.save();
      this.transitionTo('admin');
    }
  }
});

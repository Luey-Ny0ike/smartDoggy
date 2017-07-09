import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('puppy', params.puppy_id);
  },
  actions:{
  destroyPuppy(puppy) {
    puppy.destroyRecord();
    this.transitionTo('admin');
  }
}
});

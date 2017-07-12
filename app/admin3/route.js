import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('trick', params.trick_id);
  },
  actions:{
  destroyTrick(trick) {
    trick.destroyRecord();
    this.transitionTo('admin');
  }
}
});

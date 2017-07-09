import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      dogs: this.store.findAll('dog'),
      puppies: this.store.findAll('puppy')
    });
  },
  actions:{
    saveDog3(params){
      var newdog = this.store.createRecord('dog', params);
      newdog.save();
      this.transitionTo('admin');
    },
    savePuppy3(params){
      var newpuppy = this.store.createRecord('puppy', params);
      newpuppy.save();
      this.transitionTo('admin');
   }
 }
});

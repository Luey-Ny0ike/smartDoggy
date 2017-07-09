import Ember from 'ember';

export default Ember.Route.extend({
 model(params){
   return this.store.findRecord('dog', params.dog_id);
 },
 actions:{
   destroyDog(dog) {
     dog.destroyRecord();
     this.transitionTo('admin');
   }
   destroyPuppy(puppy) {
     puppy.destroyRecord();
     this.transitionTo('admin');
   }
 }
});

import Ember from 'ember';

export default Ember.Route.extend({
 model(params){
   return this.store.findRecord('dog', params.dog_id);
 },
 actions:{
   update(dog, params) {
   Object.keys(params).forEach(function(key) {
     if(params[key]!==undefined) {
       dog.set(key,params[key]);
     }
   });
   dog.save();
   this.transitionTo('admin');
 },
   destroyDog(dog) {
     dog.destroyRecord();
     this.transitionTo('admin');
   }
 }
});

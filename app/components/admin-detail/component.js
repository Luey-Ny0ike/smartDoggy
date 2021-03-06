import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
   delete(dog){
     if(confirm('Msee, are you sure you want to delete this?')){
       this.sendAction('destroyDog', dog);
     }
   },
   update(dog, params) {
   Object.keys(params).forEach(function(key) {
     if(params[key]!==undefined) {
       dog.set(key,params[key]);
     }
   });
   dog.save();
   
 },
  }
});

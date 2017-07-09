import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
   delete(dog){
     if(confirm('Msee, are you sure you want to delete this?')){
       this.sendAction('destroyDog', dog);
     }
   },
   update(puppy, params) {
   Object.keys(params).forEach(function(key) {
     if(params[key]!==undefined) {
       puppy.set(key,params[key]);
     }
   });
   puppy.save();
 },
 }
});

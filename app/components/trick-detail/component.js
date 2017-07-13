import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
   delete(trick){
     if(confirm('Msee, are you sure you want to delete this?')){
       this.sendAction('destroyTrick', trick);
     }
   },
   update(trick, params) {
   Object.keys(params).forEach(function(key) {
     if(params[key]!==undefined) {
       trick.set(key,params[key]);
     }
   });
   trick.save();
  trick
 }
 }
});

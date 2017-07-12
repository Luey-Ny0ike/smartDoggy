import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
   delete(trick){
     if(confirm('Msee, are you sure you want to delete this?')){
       this.sendAction('destroyTrick', trick);
     }
   }
 }
});

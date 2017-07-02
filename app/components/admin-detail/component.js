import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    update(dog, params) {
     this.sendAction('update', dog, params);
   },
   delete(dog){
     if(confirm('Msee, are you sure you want to delete this?')){
       this.sendAction('destroyDog', dog);
     }
    }
}
});

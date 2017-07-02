import Ember from 'ember';

export default Ember.Route.extend({
  model() {
      return this.store.findAll('dog');
  },
  actions:{
    saveDog3(params){
      var newdog = this.store.createRecord('dog', params);
      newdog.save();
    },
    update(dog, params) {
    Object.keys(params).forEach(function(key) {
      if(params[key]!==undefined) {
        dog.set(key,params[key]);
      }
    });
    dog.save();
    this.transitionTo('admin');
  },
  delete(dog){
    if(confirm('Msee, are you sure you want to delete this?')){
      this.sendAction('destroyDog', dog);
    }
   }
  }
});

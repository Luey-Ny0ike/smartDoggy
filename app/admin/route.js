import Ember from 'ember';

export default Ember.Route.extend({
  model() {
      return this.store.findAll('dog');
  },
  actions:{
    saveDog3(params){
      var newdog = this.store.createRecord('dog', params);
      newdog.save();
    }  
   }
});

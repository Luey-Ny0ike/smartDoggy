import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    update(dog, params) {
     this.sendAction('update', dog, params);
   }
  }
});

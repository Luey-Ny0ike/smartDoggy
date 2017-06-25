import Ember from 'ember';

export default Ember.Component.extend({
  addNewDog: false,
  actions: {
    dogFormShow(){
      this.set('addNewDog', true)
    },
    dogFormHide(){
      this.set('addNewDog', false)
    },
    saveDog1(){
      var params ={
        name: this.get('name'),
        age: this.get('age'),
        breed: this.get('breed'),
        color: this.get('color'),
        title: this.get('title'),
        nickname: this.get('nickname'),
        description: this.get('description'),
      };
      this.set('addNewDog', false);
      this.sendAction('saveDog2', params)
    }
  }
});

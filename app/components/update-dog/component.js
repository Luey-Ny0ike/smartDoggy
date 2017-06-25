import Ember from 'ember';

export default Ember.Component.extend({
  updateDogForm: false,
  actions: {
    updateDogForm(){
      this.set('updateDogForm', true);
    },
    updateFormHide(){
      this.set('updateDogForm', false);
    },
    update(dog){
      var params = {
        name: this.get('name'),
        age:  this.get('age'),
        breed:  this.get('breed'),
        color:  this.get('color'),
        image1: this.get('image1'),
        image2: this.get('image2'),
        image3: this.get('image3'),
        nickname:  this.get('nickname'),
        title: this.get('title'),
        description: this.get('description'),
      };
      this.set('updateDogForm', false);
      this.sendAction('update', dog, params);
    }
  }
});

import Ember from 'ember';

export default Ember.Component.extend({
  updatePuppyForm: false,
  actions: {
    updatePuppyForm(){
      this.set('updatePuppyForm', true);
    },
    updateFormHide(){
      this.set('updatePuppyForm', false);
    },
    update(puppy){
      var params = {
        name: this.get('name'),
        age:  this.get('age'),
        breed:  this.get('breed'),
        color:  this.get('color'),
        gender: this.get('gender'),
        image1: this.get('image1'),
        image2: this.get('image2'),
        image3: this.get('image3'),
        nickname:  this.get('nickname'),
        title: this.get('title'),
        recomendation: this.get('recomendation'),
        price: this.get('price'),
        description: this.get('description'),
      };
      this.set('updatePuppyForm', false);
      this.sendAction('update', puppy, params);
    }
  }
});

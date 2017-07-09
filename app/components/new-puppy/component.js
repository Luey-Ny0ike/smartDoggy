import Ember from 'ember';

export default Ember.Component.extend({
  addNewPuppy: false,
  actions: {
    puppyFormShow(){
      this.set('addNewPuppy', true)
    },
    puppyFormHide(){
      this.set('addNewPuppy', false)
    },
    savePuppy1(){
      var params ={
        name: this.get('name'),
        age: this.get('age'),
        breed: this.get('breed'),
        color: this.get('color'),
        image1: this.get('image1'),
        image2: this.get('image2'),
        image3:this.get('image3'),
        title: this.get('title'),
        nickname: this.get('nickname'),
        description: this.get('description'),
        gender: this.get('gender'),
        recomendation: this.get('recomendation')
      };
      this.set('addNewPuppy', false);
      this.sendAction('savePuppy2', params)
    }
  }
});

import Ember from 'ember';

export default Ember.Component.extend({
  addNewTrick: false,
  actions: {
    trickFormShow() {
      this.set('addNewTrick', true)
    },
    trickFormHide() {
      this.set('addNewTrick', false)
    },
    saveTrick1() {
      var params = {
        title: this.get('title'),
        step1:  this.get('step1'),
        step2:  this.get('step2'),
        step3:  this.get('step3'),
        step4: this.get('step4'),
        image1: this.get('image1'),
        image2: this.get('image2'),
        extratips: this.get('extratips'),
        video:  this.get('video'),
      };
      this.set('addNewTrick', false);
      this.sendAction('saveTrick2', params)
    }
  }
});

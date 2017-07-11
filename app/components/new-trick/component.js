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
        content1: this.get('content1'),
        content2: this.get('content2'),
        image1: this.get('image1'),
        image2: this.get('image2'),
        video: this.get('video'),
      };
      this.set('addNewTrick', false);
      this.sendAction('saveTrick2', params)
    }
  }
});

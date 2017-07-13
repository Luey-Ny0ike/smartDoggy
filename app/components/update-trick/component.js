import Ember from 'ember';

export default Ember.Component.extend({
  updateTrickForm: false,
  actions: {
    updateTrickForm(){
      this.set('updateTrickForm', true);
    },
    updateFormHide(){
      this.set('updateTrickForm', false);
    },
    update(trick){
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
      this.set('updateTrickForm', false);
      this.sendAction('update', trick, params);
    }
  }
});

import Ember from 'ember';

export default Ember.Component.extend({
  firebase: Ember.inject.service(),
  actions: {
    logIn() {
      var user = {
        ema: this.get('email'),
        password: this.get('password')
      }
      this.sendAction('logIn', user);
    }
  }
});

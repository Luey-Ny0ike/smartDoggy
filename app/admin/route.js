import Ember from 'ember';

export default Ember.Route.extend({
firebase:Ember.inject.service(),
  model() {
    return Ember.RSVP.hash({
      dogs: this.store.findAll('dog'),
      puppies: this.store.findAll('puppy'),
      tricks: this.store.findAll('trick')
    });
  },
  actions:{
    saveDog3(params){
      var newdog = this.store.createRecord('dog', params);
      newdog.save();
      this.transitionTo('admin');
    },
    savePuppy3(params){
      var newpuppy = this.store.createRecord('puppy', params);
      newpuppy.save();
      this.transitionTo('admin');
   },
   saveTrick3(params){
     var newtrick = this.store.createRecord('trick', params);
     newtrick.save();
     this.transitionTo('admin');
   },

   logIn(user){
     var self = this;
     this.get('session').open('firebase', {
       provider: "password",
       email: user.ema,
       password: user.password
     }).then(function(){
       console.log("success logging in")
     }).catch(function(error){
       console.log("Error"+error)
       alert('Who are you trying to hack msee??')
     });
   },
   logout(){
     this.get('session').close();
   }
 }
});

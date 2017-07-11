import Ember from 'ember';

export default Ember.Route.extend({
firebase:Ember.inject.service(),
  model() {
    return Ember.RSVP.hash({
      dogs: this.store.findAll('dog'),
      puppies: this.store.findAll('puppy')
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

   login(admin){
    //  var self = this;
     //
    //    emails: this.get('email');
    //    password: this.get('password')
     //
    //    console.log(emails);
     this.get('session').open('firebase', {
       provider: "password",
       email: "nyoikelewis@gmail.com",
       password: "1234567"
     }).then(function(){
       console.log("success logging in")
     }).catch(function(error){
       console.log("Error"+error)
     });
   },
   logout(){
     this.get('session').close();
   }
 }
});

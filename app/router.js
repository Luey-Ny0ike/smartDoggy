import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('contact');
  this.route('train');
  this.route('admin');
  this.route('admin1', {path: '/admin1/:dog_id'});
  this.route('dog', {path:'/dog/:dog_id'});
  this.route('puppy',{path:'/puppy/:puppy_id'});
  this.route('admin2',{path: '/admin2/:puppy_id'});
  this.route('admin3');
});

export default Router;

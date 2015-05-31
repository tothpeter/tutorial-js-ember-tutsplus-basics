import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('contact');

  this.resource('friends', function() {
    this.route('issues');
    this.route('about', { path: "/:friend_id/about" });
  });
});

export default Router;

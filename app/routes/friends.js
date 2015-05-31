import Ember from "ember";

var FriendsIndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('friend');
  }
});

export default FriendsIndexRoute;
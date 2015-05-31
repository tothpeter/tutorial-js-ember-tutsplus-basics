import Ember from "ember";

var FriendsAboutRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('friend', params.friend_id);
  }
});

export default FriendsAboutRoute;
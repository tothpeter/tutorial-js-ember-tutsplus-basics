import Ember from 'ember';

export default Ember.Controller.extend({
  // needs: 'friends',
  isInvalid: true,

  validForm: function() {
    if (this.get('firstName') && this.get('lastName')) {
      this.set('isInvalid', false);
    }
    else {
      this.set('isInvalid', true);
    }
  }.observes('firstName', 'lastName'),

  actions: {
    create: function() {

      // var newFriend = Ember.copy(this.content);
      // this.get('controllers.friends').addObject(newFriend);

      var newFriend = this.store.createRecord('friend', {
        firstName: this.get('firstName'),
        lastName: this.get('lastName'),
        about: this.get('about')
      });
      
      this.set('firstName', '');
      this.set('lastName', '');
      this.set('about', '');

      newFriend.save();

      this.transitionToRoute('friends');
    }
  }
});

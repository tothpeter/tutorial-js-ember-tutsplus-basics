import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  about: DS.attr('string'),
}).reopenClass({
  FIXTURES: [
    {
      id: 1,
      firstName: 'John',
      lastName: '',
      about: 'Funny',
    },
    {
      id: 2,
      firstName: 'Mary',
      lastName: '',
      about: 'Smart',
    },
    {
      id: 3,
      firstName: 'Henry',
      lastName: '',
      about: 'Kind',
    }
  ]
});
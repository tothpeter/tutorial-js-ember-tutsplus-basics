import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  about: DS.attr('string'),
}).reopenClass({
  FIXTURES: [
    {
      id: 1,
      name: 'John',
      about: 'Funny',
    },
    {
      id: 2,
      name: 'Mary',
      about: 'Smart',
    },
    {
      id: 3,
      name: 'Henry',
      about: 'Kind',
    }
  ]
});
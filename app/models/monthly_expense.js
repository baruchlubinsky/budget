import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  amount: DS.attr('number'),
  user: DS.belongsTo('user'),
});

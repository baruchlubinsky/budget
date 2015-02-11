import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  startDate: DS.attr('date'),
  expenses: DS.hasMany('expense', {async: true}),
  user: DS.belongsTo('user'),
});

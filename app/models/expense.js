import DS from 'ember-data';

export default DS.Model.extend({
  category: DS.attr('string'),
  amount: DS.attr('number'),
  month: DS.belongsTo('month'),
  date: DS.attr('date'),
});

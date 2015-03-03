import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  salary: DS.attr('number'),
  monthStart: DS.attr('number'),
  expenses: DS.hasMany('expense', {async: true}),
  monthlyExpenses: DS.hasMany('monthlyExpense', {async: true}),
  monthlyTotal: function() {
  	var total = 0;
  	this.get('monthlyExpenses').forEach(function(expense) {
  		var amount = expense.get('amount');
  		if(amount != null) {
			total = total + amount;
		}
  	});
  	return total;
  }
});

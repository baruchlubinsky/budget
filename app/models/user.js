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
  }.property('monthlyExpenses.@each.amount'),
  thisMonth: function() {
    var start = this.get("monthStart");
    var expenses = this.get("expenses");
    var month;
    month = expenses.filter(function(item){
      var date = item.get('date');
      if(date === undefined) { return false; }
      var now = new Date();
      var itemDay = date.substr(8,2);
      var itemMonth = date.substr(5,2);
      var currentMonth = now.getMonth() + 1;
      if (start <= now.getDate()) {
        if(itemMonth == currentMonth && start <= itemDay || itemMonth == currentMonth + 1 && start > itemDay) {
          return true;
        }
      } else {
        if(itemMonth == currentMonth && start > itemDay || itemMonth == currentMonth - 1 && start < itemDay) {
          return true;
        }
      }
      return false;
    });
    return month;
  }.property('expenses.@each.date', 'monthStart'),
  subTotal: function() {
    var month = this.get('thisMonth');
    var total = 0;
    month.forEach(function(item) {
    var amount = item.get('amount');
      if(amount != null) {
        total = total + amount;
      }
    });
    return total;
  }.property('thisMonth'),
  remaining: function() {
    var salary = this.get('salary');
    var spend = this.get('subTotal');
    var monthly = this.get('monthlyTotal');
    return salary - spend - monthly; 
  }.property('salary', 'subTotal', 'monthlyTotal'),
});

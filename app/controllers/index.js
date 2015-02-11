import Ember from "ember";

export default Ember.ObjectController.extend({
	subTotal: function() {
		var allExpenses = this.get('expenses');
		var total = 0;
		allExpenses.forEach(function(item) {
			Ember.Logger.debug(item);
			var amount = item.get('amount')
			if(amount != null) {
				total = total + amount;
			}
		});
		return total;
	}.property('expenses.@each'),
	remaining: function() {
		var salary = this.get('model').get('salary');
		var spend = this.get('subTotal');
		return salary - spend;
	}.property('subTotal')
});
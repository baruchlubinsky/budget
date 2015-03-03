import Ember from "ember";

export default Ember.ObjectController.extend({
	needs: ['expenses'],
	thisMonth: [],
	filterMonth: function() {
		var start = this.get("model.monthStart");
		var expenses = this.get("model.expenses");
		var thisMonth;
			thisMonth = expenses.filter(function(item){
				var date = item.get('date');
				if(date === undefined) { return false; }
				var now = new Date();
				if (start < date.substr(8,2)) {
					return true;
				}
				return false;
			});

		this.set('thisMonth', thisMonth);
	}.observes('model', 'model.expenses.@each'),
	subTotal: function() {
		var month = this.get('thisMonth');
		if(month.get('length') === 0) {
			return 0;
		}
		var total = 0;
		Ember.Logger.debug(month);
		month.forEach(function(item) {
			var amount = item.get('amount');
			if(amount != null) {
				total = total + amount;
			}
		});
		return total;
	}.property('thisMonth'),
	remaining: function() {
		var model = this.get('model');
		if(model == null) {
			return 0;
		}
		var salary = model.get('salary');
		var spend = this.get('subTotal');
		var monthly = model.monthlyTotal();
		return salary - spend - monthly;
	}.property('controllers.expenses.subTotal', 'salary')
});
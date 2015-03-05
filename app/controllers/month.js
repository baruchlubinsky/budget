import Ember from "ember";

export default Ember.ArrayController.extend({
	needs: 'index',
	subTotal: function() {
		if(this.get('length') === 0) {
			return 0;
		}
		var total = 0;
		this.forEach(function(item) {
			var amount = item.get('amount');
			if(amount != null) {
				total = total + amount;
			}
		});
		return total;
	}.property('@each')
});
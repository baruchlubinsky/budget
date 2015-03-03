import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		var self = this;
		var userID = localStorage.getItem("budget.user.id");
		if(userID === undefined) {
			return null;
		} else {
			return this.store.find('user', userID).catch(function() {
				self.transitionTo('new-user');
				return null;
			});
		}
	},
	// calculate: function() {
	// 	var start = this.controller.get('model.monthStart');
	// 	var expenses = this.controllerFor('expenses').get('model');
	// 	var thisMonth = expenses.filter(function(item){
	// 		var date = item.get('date');
	// 		var res = date > start;
	// 		return res;
	// 	});
	// 	this.controllerFor('expenses').set('model', thisMonth);
	// }.observes('controllers.expenses.@each', 'model'),
});
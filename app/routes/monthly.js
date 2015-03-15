import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		return this.store.find('user', params.id);
	},
	setupController: function(controller, model) {
		if(model === null) {
			this.redirectTo('index');
			return;
		}
		controller.set('model', model.get('monthlyExpenses'));
		controller.set('user', model);
		var newExpense = this.store.createRecord('monthlyExpense',{});
		controller.set('newExpense', newExpense);
		
	},
	actions: {
		save: function() {
			var controller = this.get('controller');
			var user = controller.get('user');
			var expenses = controller.get('model');
			var newExpense = this.get('controller.newExpense');
			expenses.addObject(newExpense);
			newExpense.save().then(
				function() {
					user.save().then(
						function() {
							controller.set('newExpense', this.store.createRecord('monthlyExpense',{}));
						});
			});
		},
		delete: function(record) {
			var user = this.controller.get('user');
			var expenses = this.controller.get('model');
			expenses.removeObject(record);
			record.destroyRecord().then(function() {
				user.save();
			});
		}
	}
});
import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		var now = new Date();
		return this.store.createRecord('expense', {date: now});
	},
	actions: {
		create: function() {
			var self = this;
			var user = this.controller.get('controllers.index.model');
			var expense = this.controller.get('model');
			expense.set('user', user);
			this.controller.get('model').save().then(
				function() {
					user.get('expenses').addObject(expense);
					user.save();
					self.transitionTo('index');
				});
		}
	}
});
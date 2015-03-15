import Ember from 'ember';

export default Ember.Route.extend({
	setupController: function(controller, model) {
		var user = controller.get('controllers.index.model');
		if(user === null) {
			this.transitionTo('index');
		} else {
			var expenses = user.get('thisMonth');
			controller.set('model', expenses);
		}
	},
	actions: {
		edit: function(model) {
			this.transitionTo('edit-expense', model);
		},
		delete: function(model) {
			var user = this.controller.get('controllers.index.model');
			var expenses = this.controller.get('model');
			expenses.removeObject(model);
			model.destroyRecord().then(function() {
				user.save();
			});
		}
	}
});
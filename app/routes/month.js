import Ember from 'ember';

export default Ember.Route.extend({
	setupController: function(controller, model) {
		var expenses = controller.get('controllers.index.model.thisMonth');
		controller.set('model', expenses);
	},
});
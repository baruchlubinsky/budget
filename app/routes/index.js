import Ember from 'ember';

export default Ember.Route.extend({
	setupController: function(controller, model) {
		if(controller.get('model') == null) {
			controller.set('model', this.store.createRecord('user'));
			controller.set('expenses', this.store.find('expense'));
		}
	},
	actions: {
		willTransition: function() {
			this.controller.get('model').save();
		}
	}
});
import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		return this.store.find('user', params.id);
	},
	actions: {
		save: function() {
			var self = this;
			var user = this.get('controller.model');
			user.save().then(
				function() {
					var id = user.get('id');
					localStorage.setItem("budget.user.id", id);
					self.transitionTo('index');
				});
		}
	}
});
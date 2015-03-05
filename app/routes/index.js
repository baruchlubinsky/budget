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
});
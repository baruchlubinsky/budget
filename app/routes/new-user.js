import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Route.extend({
	renderTemplate: function() {
    	this.render('user');
  	},
  	controllerName: 'user',
	setupController: function(controller) {
		var theFirst = new Date();
		theFirst.setDate(1);
		var user = this.store.createRecord('user', {monthStart: theFirst});
		Ember.Logger.debug(controller);
		controller.set('model', user);
	},
	actions: {
		save: function() {
			var self = this;
			var user = this.get('controller.model');
			user.save().then(
				function() {
					var id = user.get('id');
					ENV.userID = id;
					localStorage.setItem("budget.user.id", id);
					self.transitionTo('index');
				});
		}
	}
});
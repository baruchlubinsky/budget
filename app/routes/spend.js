import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		var now = new Date();
		return this.store.createRecord('expense', {date: moment(now).format("YYYY-MM-DD")});
	},
	renderTemplate: function(controller, model){
	    this.render('expense',{
	    	model: model,
	    });
	},
	actions: {
		save: function() {
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
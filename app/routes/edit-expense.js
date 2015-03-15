import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		return this.store.find('expense', params.id);
	},
	renderTemplate: function(controller, model){
	    this.render('expense',{
	    	model: model,
	    });
	},
	actions: {
		save: function() {
			var self = this;
			var expense = this.get('controller.model');
			expense.save().then(
				function() {
					self.transitionTo('month');
				});
		}
	}
});
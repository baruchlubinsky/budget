import Ember from "ember";

export default Ember.ArrayController.extend({
	needs: 'index',
	name: function() {
		var monthStart = this.get('controllers.index.model').get('monthStart');
		var now = new Date();
		var thisMonth = now.getMonth();
		if(monthStart > 15) {
			thisMonth--;
			if(thisMonth == 12) {
				thisMonth = 0;
			}
		}
		var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		return monthNames[thisMonth] + " " + now.getFullYear();
	}.property('controllers.index.model.monthStart')
});
import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.route('spend');
	this.route('month', {controller: 'expenses'});
	this.route('user', {path: 'user/:id'});
	this.route('new-user');
	this.route('monthly', {path: 'user/:id/monthly'});
	this.route('edit-expense', {path: 'expense/:id'});
});

export default Router;

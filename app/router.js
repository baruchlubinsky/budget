import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.route('expense');
	this.route('month', {controller: 'expenses'});
	this.route('user', {path: 'user/:id'});
	this.route('new-user');
});

export default Router;

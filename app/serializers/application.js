import DS from 'ember-data';

// http://emberjs.com/api/data/classes/DS.RESTSerializer.html#method_serializeHasMany
export default DS.RESTSerializer.extend({
	serializeHasMany: function(snapshot, json, relationship) {
	   	json[relationship.key] = snapshot.get(relationship.key).mapBy('id');
	    this._super.apply(this, arguments);
	  }
});
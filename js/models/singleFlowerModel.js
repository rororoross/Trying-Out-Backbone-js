// Namespace our app
var app = app || {};

app.singleFlower = Backbone.Model.extend({

	defaults: {
		color: "pink",
		img: "images/placeholder.jpg"
	},

	initialize: function() {
		console.log("A model instance named " + this.get("name") +	" has been created and it costs " + 
			this.get("price"));

		// Cut and paste this inside our initialize method
		this.on('change', function(){
	  	console.log("Something in our model has changed");
	});
  }

});
FlowRouter.route("/", {
	action: function() {
		FlowLayout.render("home");
	},
	triggersEnter: function(context, redirect) {
		if(Meteor.user()) {
			redirect("/dashboard");
		}
	}
});

FlowRouter.route("/dashboard", {
	action: function() {
		FlowLayout.render("dashboard");
	}
});


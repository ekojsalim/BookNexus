AccountsTemplates.configure({
	defaultLayout: "accountLayout",
	defaultLayoutRegions: {
	},
	defaultContentRegion: "form",
	showForgotPasswordLink: true
});

AccountsTemplates.addFields([
	{
		_id: "name",
		type: "text",
		displayName: "Full Name",
	},
	{
		_id: "city",
		type: "text",
		displayName: "City",
	},
	{
		_id: "state",
		type: "text",
		displayName: "State"
	}
]);

AccountsTemplates.configureRoute("signIn");

AccountsTemplates.configureRoute("forgotPwd");

AccountsTemplates.configureRoute("signUp");

AccountsTemplates.configureRoute("resetPwd");

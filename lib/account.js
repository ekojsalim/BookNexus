AccountsTemplates.configure({
	defaultLayout: "accountLayout",
	defaultLayoutRegions: {
	},
	defaultContentRegion: "form",
	showForgotPasswordLink: true
});

AccountsTemplates.configureRoute("signIn");

AccountsTemplates.configureRoute("forgotPwd");

AccountsTemplates.configureRoute("signUp");

AccountsTemplates.configureRoute("resetPwd");

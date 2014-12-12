Router.configure({
	templateNameConverter: "upperCamelCase",
	routeControllerNameConverter: "upperCamelCase",
	layoutTemplate: "layout",
	notFoundTemplate: "notFound",
	loadingTemplate: "loading"
});

if(Meteor.isClient) {
	Router.onBeforeAction(function() {
		// loading indicator here
		if(!this.ready()) {
			$("body").addClass("wait");
		} else {
			$("body").removeClass("wait");
			this.next();
		}
	});
}

Router.map(function () {
	this.route("home", {path: "/", controller: "HomeController"});
	this.route("introduction", {path: "/introduction", controller: "IntroductionController"});
	this.route("rules", {path: "/rules", controller: "RulesController"})
	this.route("battle", {path: "/battle", controller: "BattleController"})
	this.route("outcome", {path: "/battle/outcome", controller: "OutcomeController"})
	this.route("politics", {path: "/politics", controller: "PoliticsController"})
	this.route("politicsOutcome", {path: "/politics/outcome", controller: "PoliticsOutcomeController"})
});

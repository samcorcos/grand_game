Template.Home.rendered = function() {
	
};

Template.Home.events({
	"click #page-close-button": function(e, t) {
		e.preventDefault();
		Router.go("", {});
	}
});

Template.Home.helpers({

});

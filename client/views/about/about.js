Template.About.rendered = function() {
	
};

Template.About.events({
	"click #page-close-button": function(e, t) {
		e.preventDefault();
		Router.go("", {});
	}
});

Template.About.helpers({

});

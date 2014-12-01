Template.home.rendered = function() {

};

Template.home.events({
	"click #page-close-button": function(e, t) {
		e.preventDefault();
		Router.go("", {});
	}
});

Template.home.helpers({

});

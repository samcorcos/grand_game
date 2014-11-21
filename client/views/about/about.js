Template.about.rendered = function() {

};

Template.about.events({
	"click #page-close-button": function(e, t) {
		e.preventDefault();
		Router.go("", {});
	}
});

Template.about.helpers({

});

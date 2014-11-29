Politics = new Mongo.Collection(null);

Template.politics.events({
  "click #submit-politics-button": function (event, template) {
      event.preventDefault();
      Router.go("/politics/outcome", {test: "it passed"});
  }
});

// Template.politics.events({
//   ""
// })

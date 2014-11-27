Template.politics.events({
  "click #submit-politics-button": function (event, template) {
      Router.go("/politics/outcome", {});
  }
});

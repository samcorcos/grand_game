Politics = new Mongo.Collection(null);

Template.politics.events({
  "click #submit-politics-button": function (event, template) {
      event.preventDefault();
      Router.go("/politics/outcome", {test: "it passed"});
  }
});

Template.politics.rendered = function() {
  Politics.remove({});
  Politics.insert({});
  Politics.insert({});
  Politics.insert({});
  Politics.insert({});
  Politics.insert({});
  Politics.insert({});
  Politics.insert({});
  Politics.insert({});
}

Template.politics.helpers({
  politics: Politics.find({})
})


// Template.politics.events({
//   ""
// })

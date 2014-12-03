Politics = new Mongo.Collection(null);

Template.politics.events({
  "click #submit-politics-button": function (event, template) {
    event.preventDefault();  
    Router.go("/politics/outcome", {test: "it passed"});
  }
});

Template.politics.events({
  "change #politician-name": function(events, template) {
    if ($("#dictatorship-" + this._id + ":checked").val()) {
      Politics.update(
        this._id,
        { $set: { government: "dictatorship"} }
      );
    } else {
      Politics.update(
        this._id,
        { $set: { government: "democracy" } }
      );
    }
    if ($("#politics-zero-" + this._id + ":checked").val()) {
      Politics.update(
        this._id,
        {$set: {allocation: 0}}
      );
    }
    Politics.update(
      this._id,
      {$set: { name: event.target.value}}
    );
  },
  "change [name^='dictatorship-democracy-']": function(events, template) {
    if ($("#dictatorship-" + this._id + ":checked").val()) {
      Politics.update(
        this._id,
        { $set: { government: "dictatorship"} }
      );
    } else {
      Politics.update(
        this._id,
        { $set: { government: "democracy" } }
      );
    }
  },
  "change [name^='political-allocation-']": function(events, template) {
    if ($("#politics-zero-" + this._id + ":checked").val()) {
      Politics.update(
        this._id,
        {$set: {allocation: 0}}
      );
    }
    if($("#politics-ten-" + this._id + ":checked").val()) {
      Politics.update(
        this._id,
        {$set: {allocation: 10}}
      );
    }
    if($("#politics-twenty-" + this._id + ":checked").val()) {
      Politics.update(
        this._id,
        {$set: {allocation: 20}}
      );
    }
    if($("#politics-thirty-" + this._id + ":checked").val()) {
      Politics.update(
        this._id,
        {$set: {allocation: 30}}
      );
    }
  }
  //needs something for change in political allocation
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
};

Template.politics.helpers({
  politics: Politics.find({})
});


// Template.politics.events({
//   ""
// })

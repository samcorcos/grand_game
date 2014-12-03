Politics = new Mongo.Collection(null);

// On the submit click, we are going to the new outcome page.
// We are also going to assign the appropriate card to the appropriate politician on the click event.
Template.politics.events({
  "click #submit-politics-button": function (event, template) {
    event.preventDefault();
    var democracyCards = PoliticsCards.find().fetch()[0].politicsCards.democracy;
    var dictatorshipCards = PoliticsCards.find().fetch()[0].politicsCards.dictatorship;
    // var rand = myArray[Math.floor(Math.random() * myArray.length)];
    for (var i in Politics.find().fetch()) {
      current = Politics.find().fetch()[i];
      var tempCard = "";
      if (current.government == "democracy") {
        if (current.allocation === 0) {
          tempCard = democracyCards.zero[Math.floor(Math.random() *democracyCards.zero.length)];
        }
        if (current.allocation === 10) {
          tempCard = democracyCards.ten[Math.floor(Math.random() *democracyCards.ten.length)];
        }
        if (current.allocation === 20) {
          tempCard = democracyCards.twenty[Math.floor(Math.random() *democracyCards.twenty.length)];
        }
        if (current.allocation === 30) {
          tempCard = democracyCards.thirty[Math.floor(Math.random() *democracyCards.thirty.length)];
        }
      }
      if (current.government == "dictatorship") {
        if (current.allocation === 0) {
          tempCard = dictatorshipCards.zero[Math.floor(Math.random() *dictatorshipCards.zero.length)];
        }
        if (current.allocation === 10) {
          tempCard = dictatorshipCards.ten[Math.floor(Math.random() *dictatorshipCards.ten.length)];
        }
        if (current.allocation === 20) {
          tempCard = dictatorshipCards.twenty[Math.floor(Math.random() *dictatorshipCards.twenty.length)];
        }
        if (current.allocation === 30) {
          tempCard = dictatorshipCards.thirty[Math.floor(Math.random() *dictatorshipCards.thirty.length)];
        }
      }
      Politics.update(
        current,
        {$set: {outcome: tempCard}}
      );
    }
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

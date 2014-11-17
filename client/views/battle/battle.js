// Template.newPost.events({
//   'click .button': function (event) {
//     event.preventDefault();
//     var postContent = $('.postContent').val();
//     Posts.insert({postContent: postContent});
//   }
// });

// Template.Home.events({
//   "click #page-close-button": function(e, t) {
//     e.preventDefault();
//     Router.go("", {});
//   }
// });



// This needs to be "submit", not "click", but I can't get "submit" to work properly
// The timer is really important!!! Otherwise, people won't trust the computer.
Template.battle.events({
  "click #submit-combat-button": function (event, template) {
    Router.go("/battle/outcome", {});
  }
});

Template.battle.events({
  "click #add-combatant-button": function (event, template) {
    Battles.insert({});
    // UI.insert(UI.render(Template.combat), $("#combatant-list").get(0));
  }
});


// It would be nice if this could just remove the last item added, instead of a total reset... but, oh well
Template.battle.events({
  "click #remove-combatant-button": function (events, template) {
    Battles.remove({});
    Battles.insert({});
    Battles.insert({});
  }
})


// // "change" is better than keyup
// Template.battle.events({
//   "keyup input": function (event, template) {
//     alert("running")
//   }
// });

// This needs to push the data into the objects in the collection
Template.battle.events({
  "change input": function (event, template) {
    Battles.update(
      this._id,
      // {name: event.currentTarget.getAttribute()}
      // {name: event.target }
      // {name: event.target.getAttribute() }
      // {name: Battles.findOne(this._id) }
      // {upsert: true}
    );
    console.log(this._id);
  }
})

// The originating element of the event is available as the target property, while the element that matched the selector and is currently handling it is called currentTarget.




// Creates a client-side collection that is not synchronized between the client and the server-- basically, its just a temporary place to store objects
Battles = new Mongo.Collection(null);

Template.battle.rendered = function () {
  Battles.remove({});
  Battles.insert({});
  Battles.insert({});
};

// sets the "battles" variable to all of the objects found in the Battles local collection
Template.battle.helpers({
  battles: Battles.find({})
});

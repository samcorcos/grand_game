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
      {name: this.input }
      // {upsert: true}
    );
    console.log(this._id);
  }
})



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


// using the context, we will know the id of the object we edited
// Battles.update of this.id, set the value I'm trying to set

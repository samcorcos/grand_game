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

Battles = new Mongo.Collection(null);

// This needs to be "submit", not "click", but I can't get "submit" to work properly
// The timer is really important!!! Otherwise, people won't trust the computer.
Template.battle.events({
  "click #submit-combat-button": function (event, template) {
    event.preventDefault();
    Router.go("/battle/outcome", {test: "it passed"});
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
  "change input#combatant-name": function (event, template) {
    Battles.update(
      this._id,
      { $set: { name: event.target.value } }
    );
  }
});

Template.battle.events({
  "change input#supplied-armor": function (events, template) {
    Battles.update(
      this._id,
      { $set: { suppliedArmor: event.target.value } }
    );
  }
});

Template.battle.events({
  "change input#supplied-infantry": function (events, template) {
    Battles.update(
      this._id,
      { $set: { suppliedInfantry: event.target.value } }
    );
  }
});

Template.battle.events({
  "change input#aircraft": function (events, template) {
    Battles.update(
      this._id,
      { $set: { aircraft: event.target.value } }
    );
  }
});

Template.battle.events({
  "change input#unsupplied-infantry": function (events, template) {
    Battles.update(
      this._id,
      { $set: { unsuppliedInfantry: event.target.value } }
    );
  }
});

Template.battle.events({
  "change input#unsupplied-armor": function (events, template) {
    Battles.update(
      this._id,
      { $set: { unsuppliedArmor: event.target.value } }
    );
  }
});
// The originating element of the event is available as the target property, while the element that matched the selector and is currently handling it is called currentTarget.




// Creates a client-side collection that is not synchronized between the client and the server-- basically, its just a temporary place to store objects


Template.battle.rendered = function () {
  Battles.remove({});
  Battles.insert({});
  Battles.insert({});
};

// sets the "battles" variable to all of the objects found in the Battles local collection
Template.battle.helpers({
  battles: Battles.find({})
});

// Template.combat.helpers({
//   name: Battles.findOne(_id).name,
//   suppliedArmor: Battles.findOne(_id).suppliedArmor
// });

Template.combat.helpers({
  offenseDefense: function() {
    return "offense-defense"
  }
})

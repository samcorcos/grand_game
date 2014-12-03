// Creates a client-side collection that is not synchronized between the client and the server-- basically, its just a temporary place to store objects
Battles = new Mongo.Collection(null);

// This needs to be "submit", not "click", but I can't get "submit" to work properly...
// The timer is really important!!! Otherwise, people won't trust the computer.
Template.battle.events({
  "click #submit-combat-button": function (event, template) {
    Battles.update(
      this._id, // The problem is on this line! It doesn't know what "this" you're referring to.
      { $set: {offense: true} }
    );
    Router.go("/battle/outcome", {test: "it passed"});
  }
});

// This adds an object that represents a new combatant
Template.battle.events({
  "click #add-combatant-button": function (event, template) {
    Battles.insert({});
  }
});
// It would be nice if this could just remove the last item added, instead of a total reset... but, oh well
Template.battle.events({
  "click #remove-combatant-button": function (events, template) {
    Battles.remove({});
    Battles.insert({});
    Battles.insert({});
  }
});


// These are all the events that add a property to the combatant objects whenever there is a change
Template.battle.events({
  "change input#combatant-name": function (event, template) {
    if ($("#offense-" + this._id + ":checked").val()) {
      Battles.update(
        this._id,
        { $set: { offense: true, defense: false} }
      );
    } else {
      Battles.update(
        this._id,
        { $set: { defense: true, offense: false } }
      );
    }
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
  },
  "change input#supplied-infantry": function (events, template) {
    Battles.update(
      this._id,
      { $set: { suppliedInfantry: event.target.value } }
    );
  },
  "change input#aircraft": function (events, template) {
    Battles.update(
      this._id,
      { $set: { aircraft: event.target.value } }
    );
  },
  "change input#unsupplied-infantry": function (events, template) {
    Battles.update(
      this._id,
      { $set: { unsuppliedInfantry: event.target.value } }
    );
  },
  "change input#unsupplied-armor": function (events, template) {
    Battles.update(
      this._id,
      { $set: { unsuppliedArmor: event.target.value } }
    );
  },
  "change [type='radio']": function(events, template) {
    if ($("#offense-" + this._id + ":checked").val()) {
      Battles.update(
        this._id,
        { $set: { offense: true, defense: false} }
      );
    } else {
      Battles.update(
        this._id,
        { $set: { defense: true, offense: false } }
      );
    }
  }
});

// Clears, then creates two new objects for the client-side database.
Template.battle.rendered = function () {
  Battles.remove({});
  Battles.insert({});
  Battles.insert({});
};

// Sets the "battles" variable to all of the objects found in the Battles local collection
Template.battle.helpers({
  battles: Battles.find({})
});

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
    Meteor.setTimeout(function() {
      Router.go("/battle/outcome", {});
    }, 1000)
  }
});

Template.battle.events({
  "click #add-combatant-button": function (event, template) {
    Battles.insert({});
    // UI.insert(UI.render(Template.combat), $("#combatant-list").get(0));
  }
});

Template.battle.events({
  "click #remove-combatant-button": function (events, template) {
    Battles.remove({});
    Battles.insert({});
    Battles.insert({});
  }
})



// Template.battle.events({
//   "keyup input": function (event, template) {
//     alert("running")
//   }
// });

Template.battle.events({
  "change input": function (event, template) {
    alert("running")
  }
})




Battles = new Mongo.Collection(null);

Template.battle.rendered = function () {
  Battles.remove({});
  Battles.insert({});
  Battles.insert({});
};

Template.battle.helpers({
  battles: Battles.find({})
});


// using the context, we will know the id of the object we edited
// Battles.update of this.id, set the value I'm trying to set

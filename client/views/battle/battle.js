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
    UI.insert(UI.render(Template.combat), $("#combatant-list").get(0));
    // $("#combatant-list").after("{{> combat}}");
  }
});

Battles = new Mongo.Collection(null);

Template.battle.rendered = function () {
  Battles.remove({});
  Battles.insert({},{});
};

Template.battle.helpers({
  battles: Battles.find({})
});

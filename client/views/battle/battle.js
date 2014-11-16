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


Template.battle.events({
  "click #submit-combat-button": function(e,t) {
    e.preventDefault();
    Router.go("/battle/outcome", {});
  }
});

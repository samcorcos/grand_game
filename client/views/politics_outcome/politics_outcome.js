Template.politicsOutcome.helpers({
  politicians: function() {
    return Politics.find({});
  }
});

Template.politicsOutcome.rendered = function() {
  var politics = Politics.find().fetch();
  PolStats.insert({
    date: Date().valueOf(),
    outcome: politics
  });
};

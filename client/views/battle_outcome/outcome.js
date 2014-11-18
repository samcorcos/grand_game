//going to need helpers to give name of each person

Template.winner.helpers({
  winnerName: "King George"
});

Template.combatant.helpers({
  combatantName: "Mike"
});

Template.armor.helpers({
  armorLosses: function() {
    return this.suppliedArmor;
  }
});

Template.infantry.helpers({
  infantryLosses: 2
});

Template.airplane.helpers({
  airplaneLosses: 1
});





Template.outcome.helpers({
  battles: Battles.find()
});

// Template.singleOutcome.helpers({
//   armor: this.Battles.suppliedArmor
// })

// var items = Battles.find();
// items.forEach(function(item) {
//   console.log(this.item)
// })

// Battles.find().fetch()[0].aircraft

Template.outcome.rendered = function () {
  for (i=0;i<Battles.find().count(); i++) {
    suppliedArmor = Battles.find().fetch()[i].suppliedArmor;
    suppliedInfantry = Battles.find().fetch()[i].suppliedInfantry;
    aircraft = Battles.find().fetch()[i].aircraft;
    unsuppliedArmor = Battles.find().fetch()[i].unsuppliedArmor;
    unsuppliedInfantry = Battles.find().fetch()[i].unsuppliedArmor;
  }




};

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

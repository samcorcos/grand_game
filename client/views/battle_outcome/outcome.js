Session.default("winner", "Not updating")

Template.winner.helpers({
  winnerName: Session.get("winner")
});

Template.combatant.helpers({
  combatantName: function() {
    return this.combatantName;
  },
  battles: Battles.find()
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

  combatStrengths = [];
  for (i=0; i<Battles.find().count(); i++) {
    (Battles.find().fetch()[i].suppliedArmor ? (suppliedArmor = Battles.find().fetch()[i].suppliedArmor) : (suppliedArmor = 0));
    (Battles.find().fetch()[i].suppliedInfantry ? (suppliedInfantry = Battles.find().fetch()[i].suppliedInfantry) : (suppliedInfantry = 0));
    (Battles.find().fetch()[i].aircraft ? (aircraft = Battles.find().fetch()[i].aircraft) : (aircraft = 0));
    (Battles.find().fetch()[i].unsuppliedArmor ? (unsuppliedArmor = Battles.find().fetch()[i].unsuppliedArmor) : (unsuppliedArmor = 0));
    (Battles.find().fetch()[i].unsuppliedInfantry ? (unsuppliedInfantry = Battles.find().fetch()[i].unsuppliedArmor) : (unsuppliedInfantry = 0));
    totalCS = function() {
      // if (defense/offense)
      return (suppliedArmor * 4) + (suppliedInfantry * 2) + (aircraft * 1) + (unsuppliedArmor * 1) + (unsuppliedInfantry * 1);
    }
    combatStrengths.push(totalCS());
  }

  // gives the winning percentage for each combatant
  var winArray = function(combatStrengthArray) {
    totalCombatStrength = 0;
    newArray = [];
    //should take in an array of combat strengths
    for (i=0; i<combatStrengthArray.length; i++) {
      totalCombatStrength += combatStrengthArray[i];
    };
    for (i=0; i<combatStrengthArray.length; i++) {
      newArray.push((combatStrengthArray[i] / totalCombatStrength));
    }
    // should return an array of percentages out of 100%
    return newArray;
  }

  console.log(winArray(combatStrengths));

  var combatWinner = function(array) {
    var x = Math.random();
    var prob = array[0];
    for (i=0; i<array.length; i++) {
      console.log(x);
      if (x < prob) {
        return i;
        console.log(i);
      } else {
        prob += array[i+1];
      }
    }
  }

  var z = winArray(combatStrengths);
  var winningIndex = combatWinner(z);
  winner = Battles.find().fetch()[winningIndex].combatantName;

  Session.set("winner", winner);

};

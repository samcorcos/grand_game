Template.winner.helpers({
  winnerName: "Still not fixed..."
});

Template.combatant.helpers({
  combatantName: function() {
    return this.name;
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



  var combatStrength = function() {
    combatStrengths = [];
    var b = Battles.find().fetch();
    for (i=0; i<Battles.find().count(); i++) {
      (b[i].suppliedArmor ? (suppliedArmor = b[i].suppliedArmor) : (suppliedArmor = 0));
      (b[i].suppliedInfantry ? (suppliedInfantry = b[i].suppliedInfantry) : (suppliedInfantry = 0));
      (b[i].aircraft ? (aircraft = b[i].aircraft) : (aircraft = 0));
      (b[i].unsuppliedArmor ? (unsuppliedArmor = b[i].unsuppliedArmor) : (unsuppliedArmor = 0));
      (b[i].unsuppliedInfantry ? (unsuppliedInfantry = b[i].unsuppliedArmor) : (unsuppliedInfantry = 0));
      totalCS = function() {
        // if (defense/offense)
        return (suppliedArmor * 4) + (suppliedInfantry * 2) + (aircraft * 1) + (unsuppliedArmor * 1) + (unsuppliedInfantry * 1);
      }
      combatStrengths.push(totalCS());
    }
    return combatStrengths;
  }

  // gives the winning percentage for each combatant
  var winArray = function() { // takes in combat strengths array
    totalCombatStrength = 0;
    combatStrengthArray = combatStrength();
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

  var combatWinner = function() { // takes in the winArray
    var x = Math.random();
    var array = winArray();
    var prob = array[0];
    indexOfWinner = function() {
      for (i=0; i<array.length; i++) {
        if (x < prob) {
          return i;
        } else {
          prob += array[i+1];
        }
      }
    }
    winningIndex = indexOfWinner();
    Session.set("winnerTest", Battles.find().fetch()[winningIndex].name)
    return Battles.find().fetch()[winningIndex].name;
  }

  // 1) date
  // 2) winner
  // 3) probabilities (with name and probability as property)
  // 4) armies


  Statistics.insert({
    date: Date().valueOf(),
    winner: combatWinner(),
    probabilities: winArray(),
    armies: Battles.find().fetch()
  })

};

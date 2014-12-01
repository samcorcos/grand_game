Template.outcomeCard.helpers({
  combatantName: function() {
    return this.name;
  },
  losses: function() {
    var allStats = Statistics.find().fetch();
    var getLast = allStats[allStats.length-1].losses;
    return getLast;
  }
});

Template.outcome.helpers({
  winnerName: function() {
    var allStats = Statistics.find().fetch();
    var getLast = allStats[allStats.length-1].winner;
    return getLast;
  },
  battles: Battles.find()
});



Template.outcome.rendered = function () {

  var buildArmyByNumber = function() {
    var army = [];
    var b = Battles.find().fetch();
    for (i=0; i<Battles.find().count(); i++) {
      (b[i].suppliedArmor ? (suppliedArmor = b[i].suppliedArmor) : (suppliedArmor = 0));
      (b[i].suppliedInfantry ? (suppliedInfantry = b[i].suppliedInfantry) : (suppliedInfantry = 0));
      (b[i].aircraft ? (aircraft = b[i].aircraft) : (aircraft = 0));
      (b[i].unsuppliedArmor ? (unsuppliedArmor = b[i].unsuppliedArmor) : (unsuppliedArmor = 0));
      (b[i].unsuppliedInfantry ? (unsuppliedInfantry = b[i].unsuppliedArmor) : (unsuppliedInfantry = 0));
      totalArmor = Number(suppliedArmor) + Number(unsuppliedArmor);
      totalInfantry = Number(suppliedInfantry) + Number(unsuppliedInfantry);
      tempArmy = {
        totalArmor: Number(totalArmor),
        totalInfantry: Number(totalInfantry),
        aircraft: Number(aircraft)
      }
      army.push(tempArmy);
    }
    return army;
  }


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

  var namedWinArray = function() {
    var win = winArray();
    var namedArray = [];
    for (i=0;i<win.length;i++) {
      temp = {
        name: Battles.find().fetch()[i].name,
        probability: win[i]
      }
      namedArray.push(temp);
    }
    return namedArray;
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
    // Session.set("winnerTest", Battles.find().fetch()[winningIndex].name)
    return Battles.find().fetch()[winningIndex].name;
  }

  var lossCalculator = function(units,lossProb) { // x is the total number of armor, etc; y is the loss probability;
    var i = 0, losses = 0;
    for (i=0;i<units;i++) {
      var random = Math.random();
      if (lossProb > random) {
        losses++;
      }
    }
    return losses;
  }

  var combatLosses = function() {
    armyNumbers = buildArmyByNumber();
    var x = Math.random();

    var totalLosses = [];
    var armorLosses = 0;
    var infantryLosses = 0;
    var aircraftLosses = 0;
    var prob = winArray();

    for (var i=0;i<prob.length;i++) { // this is going to run once for each person engaged
      temp = {};
      var currentArmy = armyNumbers[i];
      var lossProb = ((1 - prob[i]) / 2 ); // prob of i is going to be the persons chance of winning.
      temp.armorLoss = lossCalculator(currentArmy.totalArmor, lossProb);
      temp.infantryLoss = lossCalculator(currentArmy.totalInfantry, lossProb);
      temp.aircraftLoss = lossCalculator(currentArmy.aircraft, lossProb);
      totalLosses.push(temp);
              //then I want it to run as many times as there are units of each type
    }
    return totalLosses;

    // I want to return an array of objects. Generally there will be two objects in teh array.

    // takes in winArray
    // or... 1 - the current person's probability / 2.
  }

  // 1) date
  // 2) winner
  // 3) probabilities (with name and probability as property)
  // 4) armies


  Statistics.insert({
    date: Date().valueOf(),
    winner: combatWinner(),
    probabilities: winArray(),
    namedProbabilities: namedWinArray(),
    armies: Battles.find().fetch(),
    armyNumbers: buildArmyByNumber(),
    losses: combatLosses()
  })






};

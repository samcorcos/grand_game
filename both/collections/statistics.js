Statistics = new Mongo.Collection("statistics");

PolStats = new Mongo.Collection("polStats");

// You need to specify "ObjectId" when querying an object by its ID
// db.statistics.find({_id: ObjectId("5467dccab65c02e5d7dff68a")})

// Every battle should be its own object, with a unique id
// For example:

// {"_id" : ObjectId("5467de12b65c02e5d7dff68b"),
//   "battle" :
//     [{
//       "combatant" : "Mike",
//       "armor" : 3,
//       "infantry" : 2 },
//     {
//       "combatant" : "John",
//       "armor" : 2,
//       "infantry" : 1
//     }]}

// First, we need figure out how to output the results for two-person combat
// Given that in the last 3 iterations of the game, we have only encountered one three-way combat, I think we can just hard-code it
// We might want to also hard code 4-way combat in the extremely unlikely event that ever occors

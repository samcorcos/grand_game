Statistics = new Mongo.Collection("statistics");

// [
//   {combatant: "Mike", armor:3, infantry:2},
//   {combatant: "John", armor:2, infantry:1}
// ]
//
// {
// battle:
//   [
//     {combatant: "Mike", armor:3, infantry:2},
//     {combatant: "John", armor:2, infantry:1}
//   ]
// }

// You need to specify "ObjectId" when querying an object by its ID
// db.statistics.find({_id: ObjectId("5467dccab65c02e5d7dff68a")})

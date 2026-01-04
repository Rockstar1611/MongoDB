db.user.insertMany([
  {
    username: "Johndoe",
    email: "Johndoe@example.com",
    age: 30
  },
  {
    username: "James",
    age: 28
  }
])

db.users.deleteOne({ username: "John" })
db.users.drop()
db.users.find({ email: /\.com$/ })
db.users.find({ email: null })

db.users.find({
  $and: [
    { age: { $gt: 25 } },
    { age: { $lt: 35 } }
  ]
})
db.users.find({
  $or: [
    { username: "JohnDoe" },
    { email: "Johndoe@gmail.com" }
  ]
})
db.users.find({ age: { $not: { $eq: 30 } } })
db.users.find({ age: { $nor: [ { $eq: 30 }, { $eq: 31 } ] } })

db.users.updateMany({}, { $max: { age: 40 } })   // Set max age
db.users.updateMany({}, { $min: { age: 20 } })   // Set min age
db.users.updateMany({}, { $mul: { age: 1.5 } })  // Multiply age

db.users.aggregate([
  { $addFields: { doubleAge: { $multiply: ["$age", 2] } } },
  { $out: "users" }
])

db.users.aggregate([
  { $group: { _id: "$page", count: { $sum: 1 } } }
])

db.users.aggregate([
  { $sort: { age: -1 } },
  { $group: { _id: null, oldestUser: { $first: "$$ROOT" } } }
])

db.users.createIndex({ username: 1 }) 
db.users.getIndexes() 
db.users.dropIndex("username_1") 

db.users.createIndex({ email: 1 }, { unique: true })

db.users.insertOne({
  username: "john_doe",
  email: "john@example.com",
  posts: [
    { title: "Post 1", content: "Content 1" },
    { title: "Post 2", content: "Content 2" }
  ]
})

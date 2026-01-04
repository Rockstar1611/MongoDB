db.posts.insertOne({
  title: "Introduction to MongoDB",
  author: "John Doe",
  tags: ["mongodb", "nosql", "database"]
})

db.posts.updateMany(
  { tags: "mongodb" },
  { $addToSet: { tags: "database" } }
)

db.posts.updateOne(
  { username: "John" },
  { $set: { age: 31 } }
)
db.posts.find()

db.posts.findOneAndUpdate(
  { title: "Introduction to MongoDB" },
  { $set: { content: "MongoDB is a flexible database." } }
)

db.posts.findOneAndDelete({ author: "John" })
db.posts.find({}, { title: 1, author: 1 })

db.posts.find({ tags: { $isArray: true } })       
db.posts.find({ tags: { $size: 2 } })            
db.posts.aggregate([
  { $group: { _id: null, allTags: { $concatArrays: "$tags" } } }
])                                               
db.posts.updateMany({}, { $reverseArray: "$tags" })

db.posts.updateMany({}, { $pull: { tags: "mongodb" } })             
db.posts.updateMany({}, { $pop: { tags: 1 } })                      
db.posts.updateMany({}, { $pullAll: { tags: ["nosql", "database"] } }) 
db.posts.updateOne(
  { title: "Introduction of MongoDB" },
  { $push: { tags: "newTag" } }
)                                                                   
db.posts.updateMany(
  { tags: "mongodb" },
  { $set: { tags: "UpdatedTag" } }
)                                                                 

db.posts.aggregate([
  {
    $project: {
      fullText: { $concat: ["$title", " ", "$content"] }
    }
  }
])

db.posts.find({
  $expr: {
    $eq: [ { $strcasecmp: ["$title", "mongodb"] }, 0 ]
  }
})

db.posts.updateMany({}, {
  $set: { title: { $toUpper: "$title" } }
})

db.posts.updateMany({}, {
  $set: { title: { $toLower: "$title" } }
})

db.posts.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "author",
      foreignField: "username",
      as: "author_info"
    }
  }
])

db.posts.createIndex({ title: 1, content: 1 })
db.posts.createIndex({ tags: 1 })
db.posts.createIndex({ content: "text" })
db.student.insertMany([
  { name: "kiran", lang: "JavaScript", member_since: 5 },
  { name: "Sai", lang: "Python", member_since: 3 },
  { name: "John", lang: "Java", member_since: 3 }
])

db.student.find({ lang: "Python" })
db.student.find().limit(2)
db.student.find().count()

db.student.updateOne(
  { username: "JohnDoe" },
  { $set: { age: 31 } }
)

db.student.updateMany(
  { tags: "mongodb" },
  { $addToSet: { tags: "database" } }
)

db.student.update(
  { name: "Rohan" },
  { $inc: { member_since: 2 } }
)

db.student.update(
  { name: "Kiran" },
  { $rename: { member_since: "033" } }
)
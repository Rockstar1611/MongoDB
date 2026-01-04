db.developer.update(
  { name: "Sam" },
  {
    name: "Kiran",
    lang: "JavaScript",
    member_since: 151
  },
  { upsert: true }
)

db.developer.find()
db.developer.find().pretty()

db.developer.remove({ name: "Kiran" })
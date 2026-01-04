const session = db.getMongo().startSession();
session.startTransaction();

try {
  db.collection1.insertOne({ field1: "value1" }, { session });
  db.collection2.updateOne(
    { field2: "value2" },
    { $set: { field3: "value3" } },
    { session }
  );
  session.commitTransaction();
} catch (error) {
  session.abortTransaction();
}

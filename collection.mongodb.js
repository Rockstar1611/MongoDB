db.createCollection("collection_name", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["field1", "field2"],
      properties: {
        field1: { bsonType: "string" },
        field2: { bsonType: "number" }
      }
    }
  }
})

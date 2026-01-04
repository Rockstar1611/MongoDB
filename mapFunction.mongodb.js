var mapFunction = function () {
  emit("totalAge", this.age);
};

var reduceFunction = function (key, values) {
  return Array.sum(values);
};

db.users.mapReduce(mapFunction, reduceFunction, { out: { inline: 1 } });

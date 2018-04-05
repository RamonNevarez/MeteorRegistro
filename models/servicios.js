Servicios 						= new Mongo.Collection("servicios");
Servicios.allow({
  insert: function () { return true; },
  update: function () { return true; },
  remove: function () { return true; }
});
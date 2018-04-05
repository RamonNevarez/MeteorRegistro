Registros = new Mongo.Collection("registros");
Registros.allow({
    insert: function () { return true; },
    update: function () { return true; },
    remove: function () { return true; }
});
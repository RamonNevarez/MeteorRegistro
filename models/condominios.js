Condominios = new Mongo.Collection("condominios");
Condominios.allow({
    insert: function () { return true; },
    update: function () { return true; },
    remove: function () { return true; }
});
Meteor.publish("registros", function (params) {
    return Registros.find(params);
});
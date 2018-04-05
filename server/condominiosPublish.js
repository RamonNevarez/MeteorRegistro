Meteor.publish("condominios", function (params) {
    return Condominios.find(params);
});
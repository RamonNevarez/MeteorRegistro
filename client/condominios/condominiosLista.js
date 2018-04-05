angular.module("verificaciones")
    .controller("CondominiosListaCtrl", CondominiosListaCtrl);
function CondominiosListaCtrl($scope, $meteor, $reactive, $state, toastr) {

    let rc = $reactive(this).attach($scope);
    window.rc = rc;

    rc.arreglo = [];

    this.subscribe('usuarios', () => {
        return [{
            roles: ["Condominio"]
        }]
    });

    this.helpers({
        arreglo: () => {
            return Meteor.users.find({ roles: ["Condominio"] });

        },

    });


};
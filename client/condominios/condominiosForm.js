angular.module("verificaciones")
    .controller("CondominiosFormCtrl", CondominiosFormCtrl);
function CondominiosFormCtrl($scope, $meteor, $reactive, $state, toastr) {


    $reactive(this).attach($scope);
    this.action = true;
    this.nuevo = true;
    this.objeto = {};

    this.subscribe('condominios', () => {
        return [{

        }]
    });

    this.helpers({
        arreglo: () => {
            return Condominios.find();
        }
    });

    this.Nuevo = function () {
        this.action = true;
        this.nuevo = !this.nuevo;
        this.objeto = {};
    };
    this.guardar = function (objeto, form) {
        if (form.$invalid) {
            toastr.error('Error al guardar los datos.');
            return;
        }

        objeto.estatus = true;
        objeto.usuarioInserto = Meteor.userId();
        Condominios.insert(objeto);
        toastr.success('Guardado correctamente.');
        this.objeto = {};
        $('.collapse').collapse('hide');
        this.nuevo = true
    };
};
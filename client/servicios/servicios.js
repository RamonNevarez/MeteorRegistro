angular.module("verificaciones")
    .controller("ServiciosCtrl", ServiciosCtrl);
function ServiciosCtrl($scope, $meteor, $reactive, $state, toastr) {

    $reactive(this).attach($scope);
    this.action = true;
    this.nuevo = true;
    this.objeto = {};

    this.subscribe('servicios', () => {
        return [{

        }]
    });

    this.helpers({
        arreglo: () => {
            return Servicios.find();
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
        Servicios.insert(objeto);
        toastr.success('Guardado correctamente.');
        this.objeto = {};
        $('.collapse').collapse('hide');
        this.nuevo = true;
    };

    this.editar = function (id) {
        this.objeto = Servicios.findOne({ _id: id });
        this.action = false;
        $('.collapse').collapse('show');
        this.nuevo = false;
    };

    this.actualizar = function (objeto, form) {
        if (form.$invalid) {
            toastr.error('Error al actualizar los datos.');
            return;
        }
        var idTemp = objeto._id;
        delete objeto._id;
        objeto.usuarioActualizo = Meteor.userId();
        Servicios.update({ _id: idTemp }, { $set: objeto });
        toastr.success('Actualizado correctamente.');
        $('.collapse').collapse('hide');
        this.nuevo = true;
        form.$setPristine();
        form.$setUntouched();
    };

    this.cambiarEstatus = function (id) {
        var objeto = Servicios.findOne({ _id: id });
        if (objeto.estatus == true)
            objeto.estatus = false;
        else
            objeto.estatus = true;

        Servicios.update({ _id: id }, { $set: { estatus: objeto.estatus } });
    };
};
angular
.module("verificaciones")
.controller("buscarFolioCtrl", buscarFolioCtrl);
function buscarFolioCtrl($scope, $meteor, $reactive,  $state, $stateParams, toastr) {

	let rc = $reactive(this).attach($scope);
	
	this.buscar = {};
	this.buscar.folio = '';
		
	this.subscribe('buscarFolio', () => {
    return [{
	    options : { limit: 20 },
	    where : { 
		    folio : this.getReactively('buscar.folio') 		  
		  }  
    }];
  });
  
	this.subscribe('zona',()=>{
		return [{estatus: true}]
	});

	this.subscribe('usuarios',()=>{
		return [{"profile.estatus": true, roles: ["Analista"]}]
	});

  this.helpers({
	  folios : () => {
		  return Folios.find();
	  },
	  usuarios: ()=> {
		  return Meteor.users.find({roles : ["Analista"]});
	  },
	  zonas : () => {
		  return Zona.find();
	  }
  });
  
	this.getAnalista = function(usuario_id)
	{		
			var usuario = Meteor.users.findOne({_id:usuario_id});

			if (usuario)
				 return usuario.profile.nombre;
				 
	};
	
	this.getZona = function(zona_id)
	{		
			var zona = Zona.findOne({_id:zona_id});

			if (zona)
				 return zona.nombre;
				 
	};

};
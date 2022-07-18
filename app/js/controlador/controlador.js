(function () {
    'use strict';
    angular
        .module('Rhino')
        /*MAIN*/

        .controller('UsuarioController', ['$scope', '$q', 'Service', 'Auth', '$timeout', UsuarioController])
        .controller('EmpleadoController', ['$scope', '$q', 'Service', 'Auth', '$timeout', EmpleadoController])
        .controller('ActivosFijosController', ['$scope', '$q', 'Service', 'Auth', '$timeout', 'ssDate', ActivosFijosController])
        .controller('EntregasController', ['$scope', '$q', 'Service', 'Auth', '$timeout', 'ssDate', EntregasController])
        .controller('ReportesController', ['$scope', '$q', 'Service', 'Auth', '$timeout', 'ssDate', ReportesController])
        .controller('ConsumiblesController', ['$scope', '$q', 'Service', 'Auth', '$timeout', 'ssDate', ConsumiblesController])
        .controller('Reporte_Consu_Controller', ['$scope', '$q', 'Service', 'Auth', '$timeout', 'ssDate', Reporte_Consu_Controller])
        .controller('Reporte_Devoluciones_Controller', ['$scope', '$q', 'Service', 'Auth', '$timeout', 'ssDate', Reporte_Devoluciones_Controller])
        .controller('Reportehurtos', ['$scope', '$q', 'Service', 'Auth', '$timeout', 'ssDate', Reportehurtos])
        .controller('DecuentosController', ['$scope', '$q', 'Service', 'Auth', '$timeout', 'ssDate', DecuentosController])
        .controller('HvController', ['$scope', '$q', 'Service', 'Auth', '$timeout', 'ssDate', HvController])
        .controller('hvequiposcontroller', ['$scope', '$q', 'Service', 'Auth', '$timeout', 'ssDate', hvequiposcontroller])
        .controller('InspeccionesController', ['$scope', '$q', 'Service', 'Auth', '$timeout', 'ssDate', InspeccionesController])
        .controller('Reporte_equi_ltura_Controller', ['$scope', '$q', 'Service', 'Auth', '$timeout', 'ssDate', Reporte_equi_ltura_Controller])
        .controller('Inspecciones_escaleras_Controller', ['$scope', '$q', 'Service', 'Auth', '$timeout', 'ssDate', Inspecciones_escaleras_Controller])
        .controller('herramientascontroller', ['$scope', '$q', 'Service', 'Auth', '$timeout', herramientascontroller])
        .controller('Reporte_escaleras', ['$scope', '$q', 'Service', 'Auth', '$timeout', 'ssDate', Reporte_escaleras])
        .controller('gestion_equi_alt', ['$scope', '$q', 'Service', 'Auth', '$timeout', 'ssDate', gestion_equi_alt])
        .controller('Ingreso_Presupuesto', ['$scope', '$q', 'Service', 'Auth', '$timeout', Ingreso_Presupuesto])
        .controller('Ajuste_Presupuesto', ['$scope', '$q', 'Service', 'Auth', '$timeout', 'ssDate', Ajuste_Presupuesto])
        .controller('Generar_PedidoController', ['$scope', '$q', 'Service', 'Auth', '$timeout', 'ssDate',Generar_PedidoController])
        .controller('Reporte_Pedidos', ['$scope', '$q', 'Service', 'Auth', '$timeout', 'ssDate', Reporte_Pedidos])
        .controller('AprobarPresion', ['$scope', '$q', 'Service', 'Auth', '$timeout', 'ssDate', AprobarPresion])
        .controller('AprobarTraslado', ['$scope', '$q', 'Service', 'Auth', '$timeout', 'ssDate', AprobarTraslado])
        .controller('TrasladoEjecutados', ['$scope', '$q', 'Service', 'Auth', '$timeout', 'ssDate', TrasladoEjecutados])
        .controller('PresionesAprobadas', ['$scope', '$q', 'Service', 'Auth', '$timeout', 'ssDate', PresionesAprobadas])
        .controller('Reporte_srp', ['$scope', '$q', 'Service', 'Auth', '$timeout', 'ssDate', Reporte_srp])
        .controller('Reporte_pte_rp', ['$scope', '$q', 'Service', 'Auth', '$timeout', 'ssDate', Reporte_pte_rp])
        .controller('Reporte_pedidos_aprobados', ['$scope', '$q', 'Service', 'Auth', '$timeout', 'ssDate', Reporte_pedidos_aprobados])
        .controller('GestionArtController', ['$scope', '$q', 'Service', 'Auth', '$timeout', GestionArtController])
        .controller('inf_pedidos_srp_controller', ['$scope', '$q', 'Service', 'Auth', '$timeout', 'ssDate', inf_pedidos_srp_controller])
        .controller('Acta_satisfacccion_controller', ['$scope', '$q', 'Service', 'Auth', '$timeout', 'ssDate', Acta_satisfacccion_controller])
        .controller('Aprobar_AS_Controller', ['$scope', '$q', 'Service', 'Auth', '$timeout', 'ssDate', Aprobar_AS_Controller])
        .controller('aprobar_pedido_jefe', ['$scope', '$q', 'Service', 'Auth', '$timeout', 'ssDate', aprobar_pedido_jefe])
        .controller('Generar_Pedido_AF_Controller', ['$scope', '$q', 'Service', 'Auth', '$timeout', 'ssDate', Generar_Pedido_AF_Controller])
        .controller('Reporte_Conci', ['$scope', '$q', 'Service', 'Auth', '$timeout', 'ssDate', Reporte_Conci])
        .controller('Cargue_Nomina_Controller', ['$scope', '$q', 'Service', 'Auth', '$timeout', 'ssDate', Cargue_Nomina_Controller])
        .controller('Aprobacion_Nomina', ['$scope', '$q', 'Service', 'Auth', '$timeout', 'ssDate', Aprobacion_Nomina])
        .controller('Descargue_planillas_nomina', ['$scope', '$q', 'Service', 'Auth', '$timeout', 'ssDate', Descargue_planillas_nomina])
        .controller('Ingreso_activos_contable', ['$scope', '$q', 'Service', 'Auth', '$timeout', 'ssDate', Ingreso_activos_contable])
        .controller('Depreciacion_activos', ['$scope', '$q', 'Service', 'Auth', '$timeout', 'ssDate', Depreciacion_activos])
        .controller('Rep_movimiento_presu', ['$scope', '$q', 'Service', 'Auth', '$timeout', 'ssDate', Rep_movimiento_presu])
        .controller('opex_controller', ['$scope', '$q', 'Service', 'Auth', '$timeout', 'ssDate', opex_controller])
        .controller('ComoDato_Controller', ['$scope', '$q', 'Service', 'Auth', '$timeout', 'ssDate', ComoDato_Controller])
        .controller('recortepedidos_controller', ['$scope', '$q', 'Service', 'Auth', '$timeout', 'ssDate', recortepedidos_controller])
        .controller('controller_planillas_nomina', ['$scope', '$q', 'Service', 'Auth', '$timeout', 'ssDate', controller_planillas_nomina])
        .controller('Presion_Presupuestal_Controller', ['$scope', '$q', 'Service', 'Auth', '$timeout', 'ssDate', Presion_Presupuestal_Controller])
        .controller('Traslado_Presupuestal_Controller', ['$scope', '$q', 'Service', 'Auth', '$timeout', 'ssDate', Traslado_Presupuestal_Controller])
        .controller('ReportepedidoDetallado_Controller', ['$scope', '$q', 'Service', 'Auth', '$timeout', 'ssDate', ReportepedidoDetallado_Controller])
        .controller('Solicitud_Presion_Presupuestal_Controller', ['$scope', '$q', 'Service', 'Auth', '$timeout', 'ssDate', Solicitud_Presion_Presupuestal_Controller])
        .controller('ProveedorController', ['$scope', '$q', 'Service', 'Auth', '$timeout', ProveedorController])


/**hasta aqui  */



    function UsuarioController($scope, $q, Service, Auth, $timeout) {
        $scope.json = {};
        $scope.cargos = {};
        $scope.msj = '';
        $scope.cod_user = Auth.getUserObj().codigo;
        $scope.log_user = Auth.getUserObj().username;
        $scope.nivel = [];
        $scope.nivel_usu = [];
        $scope.openWaiting = false;
        $scope.ModalMessageOpen = false;



        Service.getCrud({ cedula: $scope.cod_user }, "/Servicios.svc/PreloadUsuario").then(function (d) {
            $scope.tipo_u = JSON.parse(d.data)[0];
            $scope.tabla = JSON.parse(d.data)[2];
            if (Auth.getUserObj().tipo_user == 1002) {
                $scope.json = JSON.parse(d.data)[1];
                console.log($scope.json);
                $scope.json.password = '';
                $scope.disabledbtn.editar = false;
                $timeout(function () {
                    document.getElementById("formUsuario-editar").click();
                });
            }
            $scope.tabla.forEach(function (item, index) {
                item.autorizado = 0;
                item.pe1 = 0;
                item.pe2 = 0;
            })
        });

        /*BARRA*/
        $scope.showbtn = { buscar: true, imprimir: false, nuevo: true, editar: true, eliminar: true, cerrar: false };
        $scope.disabledbtn = { buscar: false, imprimir: true, nuevo: false, editar: true, eliminar: true };

        Service.getCrud({ username: Auth.getUserObj().username, name_view: "Usuario" }, "/Servicios.svc/Validarpermisos").then(function (d) {
            var rs = JSON.parse(d.data);
            if (rs.pe1 == "1") {
                $scope.show_admin = true;
                $scope.disabledbtn.buscar = false;
                $scope.disabledbtn.nuevo = false;
            } else {
                $scope.show_admin = false;
                $scope.disabledbtn.buscar = true;
                $scope.disabledbtn.nuevo = true;
                Service.getCrud({ usuario: Auth.getUserObj().codigo }, "/Servicios.svc/ReadUsuario").then(function (d) {
                    var j = JSON.parse(d.data);
                    $scope.json = j[0];
                    $scope.json.codigo = parseInt(j[0].codigo);
                    $scope.tabla.forEach(function (item, index) {
                        j[1].forEach(function (it, ind) {
                            if (item.id == it.id_view) {
                                item.autorizado = parseInt(it.autorizacion);
                                item.pe1 = parseInt(it.pe1);
                                item.pe2 = parseInt(it.pe2);
                            }
                        })
                    })
                    /*BARRA*/
                    $scope.json.password = "";
                    $scope.disabledbtn.eliminar = false;
                    $scope.disabledbtn.editar = false;
                });
            }
        });





        $scope.nuevo = function () {
            $scope.json.cargo = " ";
            $scope.json.area = " ";
        }



        $scope.muestra = function () {
            alert("Muestraaa");
        }

        $scope.editar = function () {
            $('#usuario').attr('disabled', true);
            $('#nombre_usuario').attr('disabled', true); id_tipo_usuario
            $('#codigo').attr('disabled', true);
            $('#id_tipo_usuario').attr('disabled', true);
        }


        /*CRUD*/
        $scope.guardar = function () {
            $scope.cod_user = Auth.getUserObj().codigo;
            var defender = $q.defer();
            var promise = defender.promise;
            if (!$scope.formUsuario.$valid) {
                var cr = "Campos requeridos no diligenciados:";
                $scope.formUsuario.$error.required.forEach(function (item, index) {
                    cr += "\n - " + item.$name;
                });
                alert(cr);
                defender.resolve(false);
                return promise;
            } else {
                $timeout(function () {
                    try {
                        var rs = false;
                        Service.getCrud({ json: angular.toJson($scope.json), codigo_usuario: $scope.log_user, tabla: angular.toJson($scope.tabla) }, '/Servicios.svc/CreateUsuarios').then(function (d) {
                            rs = JSON.parse(d.data);
                            console.log(rs);
                            defender.resolve(rs);
                        });
                    } catch (e) {
                        defender.reject(e);
                    }


                });
            }
            return promise;

        };
        $scope.actualizar = function () {
            var defender = $q.defer();
            var promise = defender.promise;
            if (!$scope.formUsuario.$valid) {
                var cr = "Campos requeridos no diligenciados";
                $scope.formUsuario.$error.required.forEach(function (item, index) {
                    cr += "\n - " + item.$name;
                });
                alert(cr);
                defender.resolve(false);
                return promise;
            } else {
                $timeout(function () {
                    try {
                        var rs = false;
                        $scope.json.codigo = $scope.json.codigo + "";
                        Service.getCrud({ json: angular.toJson($scope.json), tabla: angular.toJson($scope.tabla) }, "/Servicios.svc/UpdateUsuario").then(function (d) {
                            rs = JSON.parse(d.data);
                            defender.resolve(rs);
                            if (Auth.getUserObj().tipo_user == 1002) {
                                $scope.showbtn.buscar = false;
                                $scope.showbtn.imprimir = false;
                                $scope.showbtn.nuevo = false;
                                $scope.showbtn.editar = false;
                                $timeout(function () {
                                    document.getElementById("formUsuario-editar").click();
                                });
                            }
                        });
                    } catch (e) {

                        defender.reject(e);

                    }
                });
            }
            return promise;
        };
        $scope.eliminar = function () {
            var defender = $q.defer();
            var promise = defender.promise;
            $timeout(function () {
                try {
                    var rs = false;
                    $scope.json.usu_nombre = $("#brUsuario-valor").val();
                    Service.getCrud({ json: angular.toJson($scope.json), usuario: $scope.json.usuario1, codigo: $scope.json.codigo, codigo_usuario: $scope.cod_user }, "/Archivo.svc/DeleteUsuario").then(function (d) {
                        rs = JSON.parse(d.data);
                        defender.resolve(rs);
                    });
                } catch (e) {
                    defender.reject(e);
                }
            }, 3000);
            return promise;
        };
        var brNombre = "";

        $scope.json = { usu_nombre: brNombre };


        $scope.rsBuscador = function (v) {
            $scope.cod = JSON.parse(v).Documento;
            if ($scope.cod.trim() != '') {
                Service.getCrud({ usuario: $scope.cod }, "/Servicios.svc/ReadUsuario").then(function (d) {
                    var j = JSON.parse(d.data);
                    $scope.json = j[0];
                    $scope.json.codigo = parseInt(j[0].codigo)
                    $scope.tabla.forEach(function (item, index) {
                        j[1].forEach(function (it, ind) {
                            if (item.id == it.id_view) {
                                item.autorizado = parseInt(it.autorizacion);
                                item.pe1 = parseInt(it.pe1);
                                item.pe2 = parseInt(it.pe2);
                            }
                        })
                    })
                    $scope.json.password = "";
                    $scope.disabledbtn.eliminar = false;
                    $scope.disabledbtn.editar = false;
                });
            }
        };
        $scope.dataUsuario = {
            id: 'dataUsuario',
            component: [{ id: 'formUsuario-buscar', type: 'btn' }],
            table: 'usuario',
            column: [
                { name: 'rtrim(ltrim(id))', as: 'ID', visible: false },
                { name: 'rtrim(ltrim(username))', as: 'Usuario', visible: true },
                { name: 'rtrim(ltrim(nombre_usuario))', as: 'Nombre', visible: true },
                { name: 'rtrim(ltrim(codigo))', as: 'Documento', visible: true }

            ],
            where: {},
            groupby: false,
            orderby: [],
            title: 'Busqueda de Usuario'
        };



        $scope.validateUsername = function () {
            var exist = false;
            if ($scope.json.usuario != '') {
                Service.getCrud({ username: $scope.json.username }, "/Servicios.svc/ValidateUsername").then(function (d) {
                    if (d.data == 'true') {
                        alert("EL USUARIO YA EXISTE");
                        $scope.json.username = "";
                        $('#usuario').focus();
                    }
                });
            }
        }
        /*
        $scope.ver_tipo_user = function () {
            if ($scope.show_tipoU == false) {
                $scope.show_tipoU = true;

            } else {
                $scope.show_tipoU = false;
            }


        }
        */


        $scope.$watch('json.confirmar', function () {
            $scope.x = false;
            if ($scope.json.password != $scope.json.confirmar) {
                $scope.msj = "Contraseñas no coinciden";
                $scope.x = true;
                $('#formUsuario-guardar').prop('disabled', 'disabled');
            } else {
                $scope.x = false;
                $('#formUsuario-guardar').prop('disabled', false);
            }
        });




        /*MODAL*/
        $scope.open = function () {
            $scope.openModal = true;
        }
        $scope.close = function () {
            $scope.openModal = false;
        }
    }
    function EmpleadoController($scope, $q, Service, Auth, $timeout) {
        $scope.json = {};
        $scope.msj = '';
        $scope.cod_user = Auth.getUserObj().codigo;
        $scope.log_user = Auth.getUserObj().username;
        $scope.key = { value: '' };
        $scope.openWaiting = false;
        /*CONFIG BUSQUEDA RAPIDA*/
        $scope.nuevo = function () {
            $scope.json = {};
            $scope.json.snombre = ' ';
        }

        /*BARRA*/
        $scope.showbtn = { buscar: true, imprimir: false, nuevo: true, editar: true, eliminar: true, cerrar: false };
        $scope.disabledbtn = { buscar: false, imprimir: true, nuevo: false, editar: true, eliminar: true };

        Service.getCrud({}, "/Servicios.svc/PreloadEmpresa").then(function (d) {
            $scope.empresa = JSON.parse(d.data)[0];

        });

        /*CRUD*/
        $scope.guardar = function () {
            var defender = $q.defer();
            var promise = defender.promise;
            if (!$scope.empleados.$valid) {
                var cr = "Campos requeridos no diligenciados:";
                $scope.empleados.$error.required.forEach(function (item, index) {
                    cr += "\n - " + item.$name;
                });
                alert(cr);
                defender.resolve(false);
                return promise;
            } else {
                $timeout(function () {
                    try {
                        var rs = false;
                        Service.getCrud({ json: angular.toJson($scope.json) }, '/Servicios.svc/CreateEmpleados').then(function (d) {
                            rs = JSON.parse(d.data);
                            defender.resolve(rs);
                        });
                    } catch (e) {
                        defender.reject(e);
                    }


                });
            }
            return promise;

        };
        $scope.actualizar = function () {
            var defender = $q.defer();
            var promise = defender.promise;
            if (!$scope.empleados.$valid) {
                var cr = "Campos requeridos no diligenciados";
                $scope.empleados.$error.required.forEach(function (item, index) {
                    cr += "\n - " + item.$name;
                });
                alert(cr);
                defender.resolve(false);
                return promise;
            } else {
                $timeout(function () {
                    try {
                        var rs = false;
                        Service.getCrud({ json: angular.toJson($scope.json) }, "/Servicios.svc/UpdateEmpleados").then(function (d) {
                            rs = JSON.parse(d.data);
                            defender.resolve(rs);

                        });
                    } catch (e) {

                        defender.reject(e);

                    }
                });
            }
            return promise;
        };
        $scope.eliminar = function () {
            var defender = $q.defer();
            var promise = defender.promise;
            $timeout(function () {
                try {
                    var rs = false;
                    Service.getCrud({ id: parseInt($scope.id) }, "/Salud.svc/DeleteEmpleados").then(function (d) {
                        rs = JSON.parse(d.data);
                        defender.resolve(rs);
                    });
                } catch (e) {
                    defender.reject(e);
                }
            });
            return promise;
        };
        $scope.editar = function () {
            $("#ced").prop("disabled", true);
            $("#pnombre").prop("disabled", true);
            $("#snombre").prop("disabled", true);
            $("#ppellido").prop("disabled", true);
            $("#spellido").prop("disabled", true);
        }

        $scope.rsEmpleado = function (v) {
            $scope.id = JSON.parse(v).id;
            if ($scope.id != '' && $scope.id != null) {
                Service.getCrud({ id: parseInt($scope.id) }, "/Servicios.svc/ReadEmpleados").then(function (d) {
                    var rs = JSON.parse(d.data);
                    $scope.json = rs;
                    $scope.json.cedula_emp = parseInt(rs.cedula_emp);
                    $scope.json.empresa = rs.empresa;
                    $scope.key.value = rs.ccosto;
                    console.log($scope.key.value);
                    $scope.disabledbtn.eliminar = false;
                    $scope.disabledbtn.editar = false;
                });
            }
        };
        $scope.dataEmpleado = {
            id: 'dataBuscador',
            component: [{ id: 'empleados-buscar', type: 'btn' }],
            table: 'empleado',
            column: [
                { name: 'id', as: 'id', visible: false },
                { name: 'cedula_emp', as: 'Cedula', visible: true },
                { name: 'nombre', as: 'Nombre', visible: true },
                { name: 'snombre', as: 'S_Nombre', visible: true },
                { name: 'ppellido', as: 'P_Apellido', visible: true },
                { name: 'spellido', as: 'S_Apellido', visible: true },
                { name: 'area', as: 'Area', visible: false },
                //{ name: 'cargo', as: 'Cargo', visible: false },

            ],
            where: [],
            groupby: false,
            orderby: [],
            title: 'Busqueda de Empleados'
        };
        //$scope.dataEmpleado.where.push({ col: "usu_id", filter: "='" + $scope.json.usu_id + "'", join: '' });

        $scope.Validate_Empleado = function () {
            if ($scope.json.cedula_emp != '' && $scope.json.cedula_emp != undefined) {
                Service.getCrud({ cedula: $scope.json.cedula_emp }, "/Servicios.svc/ValidateEmpleados").then(function (d) {
                    if (d.data == 'true') {
                        $scope.json.cedula_emp = '';
                        alert('El empleado ya existe, por favor ingrese uno nuevo');
                    }
                });
            }
        }

        /*CONFIG BUSQUEDA RAPIDA*/
        $scope.dataNombre = {
            id: 'buscadorNombre',
            component: [{ id: 'brNombre', type: '' }],
            table: 'area_ccosto',
            column: [
                { name: 'rtrim(ltrim(ccosto))', as: 'Ccosto', visible: true },
                { name: 'rtrim(ltrim(area))', as: 'Area', visible: true }



            ],
            where: {},
            groupby: true,
            orderby: [],
            title: 'Buscar Area',
            required: true
        };
        $scope.rsNombre = function (d) {
            var j = JSON.parse(d);
            $scope.json.ccosto = j.Ccosto;
            $scope.json.area = j.Area;

        }


    }
    function ActivosFijosController($scope, $q, Service, Auth, $timeout, ssDate) {
        $scope.json = {};
        $scope.msj = '';
        $scope.cod_user = Auth.getUserObj().codigo;
        $scope.log_user = Auth.getUserObj().username;
        $scope.key1 = { value: '' };
        $scope.key = { value: '' };
        $scope.key3 = { value: '' };
        $scope.key4 = { value: '' };
        $scope.openWaiting = false;
        $scope.show_estado = false;
        $scope.show_activos = false;
        


        /*CONFIG BUSQUEDA RAPIDA*/
        $scope.nuevo = function () {
            $scope.json.observacion = ' ';
            $scope.json.af = '';
        }


        $scope.Validate_imei = function () {
            if ($scope.json.imei != '' && $scope.json.imei != undefined) {
                Service.getCrud({ imei: $scope.json.imei }, "/Servicios.svc/Validateimei").then(function (d) {
                    if (d.data == 'true') {
                        $scope.json.imei = '';
                        alert('El imei ya existe, por favor ingrese uno nuevo');
                    }
                });
            }
        }

        /*BARRA*/
        $scope.showbtn = { buscar: true, imprimir: false, nuevo: true, editar: true, eliminar: true, cerrar: false };
        $scope.disabledbtn = { buscar: false, imprimir: true, nuevo: false, editar: true, eliminar: true };
        /*CRUD*/
        $scope.guardar = function () {

            var defender = $q.defer();
            var promise = defender.promise;
            if (!$scope.activos.$valid) {
                var cr = "Campos requeridos no diligenciados:";
                $scope.activos.$error.required.forEach(function (item, index) {
                    cr += "\n - " + item.$name;
                });
                alert(cr);
                defender.resolve(false);
                return promise;
            } else {
                $timeout(function () {
                    try {
                        var rs = false;
                        Service.getCrud({ json: angular.toJson($scope.json) }, '/Servicios.svc/CreateActivos').then(function (d) {
                            
                            rs = JSON.parse(d.data);
                            alert(rs);
                            defender.resolve(rs);
                        });
                    } catch (e) {
                        defender.reject(e);
                    }


                });
            }
            return promise;

        };

        $scope.actualizar = function () {
            var defender = $q.defer();
            var promise = defender.promise;
            if (!$scope.activos.$valid) {
                var cr = "Campos requeridos no diligenciados";
                $scope.empleados.$error.required.forEach(function (item, index) {
                    cr += "\n - " + item.$name;
                });
                alert(cr);
                defender.resolve(false);
                return promise;
            } else {
                $timeout(function () {
                    try {
                        var rs = false;
                        Service.getCrud({ json: angular.toJson($scope.json) }, "/Servicios.svc/UpdateActivos").then(function (d) {
                            rs = JSON.parse(d.data);
                            defender.resolve(rs);

                        });
                    } catch (e) {

                        defender.reject(e);

                    }
                });
            }
            return promise;
        };

        
        $scope.eliminar = function () {
            var defender = $q.defer();
            var promise = defender.promise;
            $timeout(function () {
                try {
                    var rs = false;
                    Service.getCrud({ id: parseInt($scope.id) }, "/Salud.svc/DeleteEmpleados").then(function (d) {
                        rs = JSON.parse(d.data);
                        defender.resolve(rs);
                    });
                } catch (e) {
                    defender.reject(e);
                }
            });
            return promise;
        };

        $scope.rsActivos = function (v) {
            $scope.id = JSON.parse(v).Id;
            if ($scope.id != '' && $scope.id != null) {
                Service.getCrud({ id: parseInt($scope.id) }, "/Servicios.svc/ReadActivos").then(function (d) {
                    var rs = JSON.parse(d.data);
             
                    $scope.json = rs;
                    $scope.json.tipo_articulo = rs.tipo_articulo + "";
                    $scope.key.value = rs.cod_articulo;
                    $scope.key1.value = rs.centro_costo;
                    $scope.json.estado = rs.estado + "";
                    $scope.json.tipo = rs.tipo + "";
                    $scope.json.af = rs.af;
                    if (rs.causacion != null && rs.causacion != undefined) {
                        $scope.json.causacion = ssDate.militodate(rs.causacion);
                    }
                    if (rs.fecha_estado != null && rs.fecha_estado != undefined) {
                        $scope.json.fecha_estado = ssDate.militodate(rs.fecha_estado);
                    }
                    $scope.disabledbtn.editar = false;
                    $scope.show_estado = true;
                });
            }
        };

        $scope.editar = function () {
            $("#tipo").prop("disabled", true);
            $("#imei").prop("disabled", true);
            $("#descrip").prop("disabled", true);
        }
        $scope.dataActivos = {
            id: 'dataBuscador',
            component: [{ id: 'activos-buscar', type: 'btn' }],
            table: 'objeto',
            column: [
                { name: 'id', as: 'Id', visible: false },
                { name: 'tipo', as: 'Tipo', visible: false },
                { name: 'descripcion', as: 'Descripcion', visible: true },
                { name: 'af', as: 'Af', visible: true },
                { name: 'imei', as: 'Imei', visible: true },
                { name: 'descripcion', as: 'Descripcion', visible: false },
                { name: 'observacion', as: 'Observacion', visible: false },
            ],
            where: [],
            groupby: false,
            orderby: [],
            title: 'Busqueda de Articulos'
        };

        $scope.ValidateClientes = function () {
            var exist = false;
            if ($scope.json.codigo != '' && $scope.json.codigo != undefined) {
                Service.getCrud({ clientes: $scope.json.codigo }, "/Servicios.svc/ValidateEmpleados").then(function (d) {
                    if (d.data == 'true') {
                        alert('El empleado ya existe, por favor ingrese uno nuevo');
                    }
                });
            }
        }



        /*CONFIG BUSQUEDA RAPIDA*/
        $scope.datacentro = {
            id: 'buscadorNombre',
            component: [{ id: 'brNombre', type: '' }],
            table: 'area_ccosto',
            column: [
                //{ name: 'rtrim(ltrim(id))', as: 'Id', visible: true },
                { name: 'rtrim(ltrim(ccosto))', as: 'Ccosto', visible: true },
                { name: 'rtrim(ltrim(area))', as: 'Area', visible: true },
            ],
            where: {},
            groupby: true,
            orderby: [],
            title: 'Buscar Centro de costo',
            required: true
        };
        $scope.rscentro = function (d) {
            var j = JSON.parse(d);
            $scope.json.centro_costo = j.Ccosto;

        }

        /*CONFIG BUSQUEDA RAPIDA ARTICULOS*/
        $scope.dataarticulos = {
            id: 'buscadorart',
            component: [{ id: 'brArt', type: '' }],
            table: 'articulos',
            column: [
                { name: 'rtrim(ltrim(codigo))', as: 'Codigo', visible: true },
                { name: 'rtrim(ltrim(descripcion))', as: 'Descripcion', visible: true },
                { name: 'rtrim(ltrim(tipo))', as: 'Tipo', visible: false },


            ],
            where: {},
            groupby: true,
            orderby: [],
            title: 'Buscar Articulo',
        };
        $scope.rsarticulos = function (d) {
            var j = JSON.parse(d);
            $scope.json.descripcion = j.Descripcion;
            $scope.json.tipo = j.Tipo;
            $scope.json.cod_articulo = j.Codigo;

        }


        /*CONFIG BUSQUEDA RAPIDA ARTICULOS NUEVOS*/
        $scope.dataarticulos_activosfijos = {
            id: 'buscadorartaf',
            component: [{ id: 'brArtaf', type: '' }],
            table: 'depreciacion',
            column: [
                { name: 'rtrim(ltrim(depreciacion.id))', as: 'id', visible: false },
                { name: 'rtrim(ltrim(depreciacion.id_pedido))', as: 'id_ped', visible: true },
                { name: 'rtrim(ltrim(depreciacion.cod_art))', as: 'Codigo', visible: true },
                { name: 'rtrim(ltrim(pedidos.usuario))', as: 'Usuario', visible: true },
                { name: 'rtrim(ltrim(depreciacion.descripcion))', as: 'Descripcion', visible: true },
                { name: 'rtrim(ltrim(articulos_af.grupo))', as: 'Grupo', visible: true },
                { name: 'depreciacion.valor', as: 'Valor', visible: true },
                { name: 'rtrim(ltrim(depreciacion.ccosto))', as: 'CECO', visible: true },
                { name: 'rtrim(ltrim(depreciacion.v_util))', as: 'V_util', visible: true },
            ],
            inner_join: [{ table: "articulos_af", on: "depreciacion.cod_art = articulos_af.codigo", join: "" }, { table: "pedidos", on: "depreciacion.id_pedido = pedidos.nro_pedido", join: "" }],
            where: [{ col: "depreciacion.inventario", filter: "= 0", join: '' },{ col: " and pedidoS.estado", filter: "!='CANCELADO'", join: '' }],
            groupby: false,
            orderby: [],
            title: 'Buscar Articulo Activo Fijo',
        };
        
        $scope.rsarticulos_activosfijos = function (d) {
            var j = JSON.parse(d);
            $scope.json.descripcion = j.Descripcion;
            $scope.json.id = j.id;
            console.log($scope.json.id);
            if (j.Grupo == "COMPUTO") {
                $scope.json.tipo = 5;
            } else if (j.Grupo == "MYE") {
                $scope.json.tipo = 6;
            } else if (j.Grupo == "LICENCIA") {
                $scope.json.tipo = 9;
            } else if (j.Grupo == "COMUNICACION") {
                $scope.json.tipo = 7;
            } else if (j.Grupo == "MAQUINARIA") {
                $scope.json.tipo = 4;
            } else if (j.Grupo == "CONSTRUCCION") {
                $scope.json.tipo = 8;
            }
            
            $scope.json.cod_articulo = j.Codigo;
            $scope.json.valor = j.Valor;
            $scope.json.v_util = j.V_util;
            $scope.json.id_pedido = j.id_ped;
            $scope.key1.value = j.CECO;
            

        }

        $scope.generar_informe = function () {
            $scope.openWai = true;
            $scope.query = "select d.id,d.id_pedido,d.cod_art,p.usuario,d.descripcion,ar.grupo,d.valor,d.ccosto,d.v_util from depreciacion d inner join pedidos p on d.id_pedido=p.nro_pedido inner join articulos_af ar on d.cod_art=ar.codigo where d.inventario = 0 and p.estado != 'CANCELADO'";
            Service.getCrud({ query: $scope.query }, "/Servicios.svc/consulta").then(function (d) {
                var rs = JSON.parse(d.data);
                $scope.grillareport = [];
                $scope.grillareport = rs;
                $scope.fnExcelReport();
                $scope.openWai = false;
            });

        }

        ////////////////////////////////////

        $scope.JSONToCSVConvertor = function (JSONData, ReportTitle, ShowLabel) {

            //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
            var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;

            var CSV = '';
            //Set Report title in first row or line

            CSV += ReportTitle + '\r\n\n';

            //This condition will generate the Label/Header
            if (ShowLabel) {
                var row = "";

                //This loop will extract the label from 1st index of on array
                for (var index in arrData[0]) {

                    //Now convert each value to string and comma-seprated
                    row += index + ';';
                }

                row = row.slice(0, -1);

                //append Label row with line break
                CSV += row + '\r\n';
            }

            //1st loop is to extract each row
            for (var i = 0; i < arrData.length; i++) {
                var row2 = "";

                //2nd loop will extract each column and convert it in string comma-seprated
                for (var index1 in arrData[i]) {
                    row2 += '"' + arrData[i][index1] + '";';
                }

                row2.slice(0, row2.length - 1);

                //add a line break after each row
                CSV += row2 + '\r\n';
            }

            if (CSV == '') {
                alert("Invalid data");
                return;
            }
            //FECHA ACTUAL
            var fecha = ssDate.dateToString(Date.now(), 'yyyy-MM-dd');

            //Generate a file name
            var fileName = "Descarga_" + fecha;
            //this will remove the blank-spaces from the title and replace it with an underscore
            fileName += ReportTitle.replace(/ /g, "_");

            //Initialize file format you want csv or xls
            var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);

            // Now the little tricky part.
            // you can use either>> window.open(uri);
            // but this will not work in some browsers
            // or you will not get the correct file extension    

            //this trick will generate a temp <a /> tag
            var link = document.createElement("a");
            link.href = uri;

            //set the visibility hidden so it will not effect on your web-layout
            link.style = "visibility:true";
            link.download = fileName + ".csv";

            //this part will append the anchor tag and remove it after automatic click
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        $scope.fnExcelReport = function () {
            $scope.JSONToCSVConvertor($scope.grillareport, "REPORTE PEDIDOS POR INGRESAR", true);
        }

        // JSON to CSV Converter
        $scope.ConvertToCSV = function (tabla) {
            var array = typeof tabla != 'object' ? JSON.parse(tabla) : tabla;
            var str = '';

            for (var i = 0; i < array.length; i++) {
                var line = '';
                for (var index in array[i]) {
                    if (line != '') line += ';'

                    line += array[i][index];
                }

                str += line + '\r\n';
            }
            $scope.resultcvs = str;
        }

        // Example


        // Create Object
        var items = [
            { name: "Item 1", color: "Green", size: "X-Large" },
            { name: "Item 2", color: "Green", size: "X-Large" },
            { name: "Item 3", color: "Green", size: "X-Large" }];

        // Convert Object to JSON
        var jsonObject = JSON.stringify(items);

      
     

        //////////////////////////////////////////

        /*CONFIG BUSQUEDA RAPIDA ARTICULOS ANTIGUOS */
        $scope.dataactivosold = {
            id: 'buscadorartafold',
            component: [{ id: 'brArtafold', type: '' }],
            table: 'articulos',
            column: [
                { name: 'rtrim(ltrim(codigo))', as: 'Codigo', visible: true },
                { name: 'rtrim(ltrim(descripcion))', as: 'Descripcion', visible: true },
                { name: 'rtrim(ltrim(tipo))', as: 'Tipo', visible: false },
            ],
            where: [],
            groupby: true,
            orderby: [],
            title: 'Buscar Articulo Activo Fijo',
        };

        $scope.rsactivosold = function (d) {
            var j = JSON.parse(d);
            $scope.json.descripcion = j.Descripcion;
            $scope.json.tipo = j.Tipo;
            $scope.json.cod_articulo = j.Codigo;
            $scope.json.id_ped = 0;

        }
    }
    function EntregasController($scope, $q, Service, Auth, $timeout, ssDate) {
        $scope.json = {};
        $scope.json2 = {};
        $scope.grilla = [];
        $scope.cod_user = Auth.getUserObj().codigo;
        $scope.log_user = Auth.getUserObj().username;
        $scope.lod_id = Auth.getUserObj().id;
        $scope.key = { value: '' };
        $scope.openWaiting = false;
        $scope.openModalPRO = false;
        $scope.sh_add = false;

        Service.getCrud({}, "/Servicios.svc/preload_jefes").then(function (d) {
            var rs = JSON.parse(d.data);
            $scope.jefes = rs[0];
        });



        /*CONFIG BUSQUEDA RAPIDA*/
        $scope.nuevo = function () {
            $scope.json = {};
            $scope.json2 = {};
            $scope.json.tipo_acta = 1;
            $scope.grilla = [];
            $scope.key = { value: '' };
            $("#acta").focus();
            $scope.json.fecha = new Date();
            $scope.sh_add = true;
            $scope.cargo = '';
        }

        /*CONFIG BUSQUEDA RAPIDA*/
        $scope.dataNombre = {
            id: 'buscadorNombre',
            component: [{ id: 'brNombre', type: '' }],
            table: 'empleado',
            column: [
                { name: 'rtrim(ltrim(CEDULA_EMP))', as: 'Cedula', visible: true },
                { name: 'rtrim(ltrim(NOMBRE))', as: 'Nombre', visible: true },
                { name: 'rtrim(ltrim(SNOMBRE))', as: 'S_Nombre', visible: true },
                { name: 'rtrim(ltrim(PPELLIDO))', as: 'Apellido', visible: true },
                { name: 'rtrim(ltrim(SPELLIDO))', as: 'S_Apellido', visible: true },
                { name: 'rtrim(ltrim(CARGO))', as: 'Cargo', visible: false },
                { name: 'rtrim(ltrim(CCOSTO))', as: 'Ccosto', visible: false },
            ],
            where: {},
            groupby: true,
            orderby: [],
            title: 'Buscar nombre de empleado',
            required: true
        };
        $scope.rsNombre = function (d) {
            var j = JSON.parse(d);
            $scope.cargo = j.Cargo;
            $scope.json.ced_empl = j.Cedula;
            $scope.json.nombre_completo = j.Nombre + ' ' + j.S_Nombre + ' ' + j.Apellido + ' ' + j.S_Apellido;
            $scope.ccosto = j.Ccosto;
        }

        /*BARRA*/
        $scope.showbtn = { buscar: true, imprimir: true, nuevo: true, editar: true, eliminar: true, cerrar: false };
        $scope.disabledbtn = { buscar: false, imprimir: true, nuevo: false, editar: true, eliminar: true };
        /*CRUD*/
        $scope.guardar = function () {
            var defender = $q.defer();
            var promise = defender.promise;
            if (!$scope.entrega.$valid) {
                var cr = "Campos requeridos no diligenciados:";
                $scope.entrega.$error.required.forEach(function (item, index) {
                    cr += "\n - " + item.$name;
                });
                alert(cr);
                defender.resolve(false);
                return promise;
            } else {
                if (jQuery.isEmptyObject($scope.grilla)) {
                    alert("SE DEBE ASIGNAR POR LO MENOS UN ACTIVO FIJO");
                    defender.resolve(false);
                    return promise;
                } else {
                    $timeout(function () {
                        try {
                            var rs = false;
                            $scope.json.id_empresa = 1;
                            $scope.json.cod_user = Auth.getUserObj().codigo;
                            $scope.json.hora = ssDate.dateToString(new Date(), 'HH:mm');
                            console.log($scope.json.hora);
                            Service.getCrud({ tipo: $scope.json.tipo, json: angular.toJson($scope.json), json2: angular.toJson($scope.grilla), log_usuario: $scope.lod_id }, '/Servicios.svc/create_entrega').then(function (d) {
                                rs = JSON.parse(d.data);
                                defender.resolve(rs);
                                $scope.disabledbtn.imprimir = false;
                            });
                        } catch (e) {
                            defender.reject(e);
                        }
                    });
                }
            }

            return promise;

        };
        $scope.actualizar = function () {
            var defender = $q.defer();
            var promise = defender.promise;
            if (!$scope.entrega.$valid) {
                var cr = "Campos requeridos no diligenciados:";
                $scope.entrega.$error.required.forEach(function (item, index) {
                    cr += "\n - " + item.$name;
                });
                alert(cr);
                defender.resolve(false);
                return promise;
            } else {
                if (jQuery.isEmptyObject($scope.grilla)) {
                    alert("SE DEBE ASIGNAR POR LO MENOS UN ACTIVO FIJO");
                    defender.resolve(false);
                    return promise;
                } else {
                    $timeout(function () {
                        try {
                            var rs = false;
                            $scope.json.id_empresa = 1;
                            $scope.json.cod_user = Auth.getUserObj().codigo;
                            $scope.json.hora = ssDate.dateToString(new Date(), 'HH:mm');
                            console.log($scope.json.hora);
                            Service.getCrud({ tipo: $scope.json.tipo, json: angular.toJson($scope.json), json2: angular.toJson($scope.grilla), log_usuario: $scope.lod_id }, '/Servicios.svc/update_entrega').then(function (d) {
                                rs = JSON.parse(d.data);
                                defender.resolve(rs);
                                $scope.disabledbtn.imprimir = false;
                                $scope.disabledbtn.editar = true
                            });
                        } catch (e) {
                            defender.reject(e);
                        }
                    });
                }
            }

            return promise;
        }
        $scope.imprimir = function () {
            Service.getCrud({ id_autoriza: $scope.json.autoriza }, "/Servicios.svc/validatejefe").then(function (d) {
                var rs = JSON.parse(d.data);
                $scope.jefe_inmediato = rs.nombre;
                $timeout(function () {
                    $('#menu').addClass("ss-nav-inactive");
                    $('#wrapper').addClass("ss-full-view");
                    window.print();
                });
            });
        }
        $scope.editar = function () {
            $scope.sh_add = true;
            $scope.sh_edit = true;
        }


        $scope.dataUsuario = {
            id: 'buscadorCliente',
            component: [{ id: 'brcliente', type: '' }],
            table: 'usuario',
            column: [
                { name: 'rtrim(ltrim(codigo))', as: 'Documento', visible: true },
                { name: 'rtrim(ltrim(nombre_usuario))', as: 'Nombre', visible: true },
                { name: 'id', as: 'Id', visible: false }
            ],
            where: {},
            groupby: true,
            orderby: [],
            title: 'Buscar Usuario',
            required_name: "USUARIO"
        };
        $scope.rsUsuario = function (d) {
            var j = JSON.parse(d);
            $scope.json.usu_id = parseInt(j.Id);
        }

        $scope.rsEmpleado = function (v) {
            $scope.id = JSON.parse(v).Id;
            if ($scope.id != '' && $scope.id != null) {
                Service.getCrud({ id: parseInt($scope.id) }, "/Servicios.svc/ReadEmpleados").then(function (d) {
                    var rs = JSON.parse(d.data);
                    $scope.json.ced_empl = rs.cedula_emp;
                    $scope.disabledbtn.eliminar = false;
                    $scope.disabledbtn.editar = false;
                });
            }
        };
        $scope.dataEmpleado = {
            id: 'dataBuscador',
            component: [{ id: 'empleados-buscar', type: 'btn' }],
            table: 'empleado',
            column: [
                { name: 'codigo', as: 'Cedula', visible: true },
                { name: 'nombres', as: 'Nombres', visible: true },
                { name: 'apellidos', as: 'Apellidos', visible: true },
                { name: 'id', as: 'Id', visible: false }

            ],
            where: [],
            groupby: false,
            orderby: [],
            title: 'Busqueda de Empleados'
        };
        $scope.dataEmpleado.where = [];
        //$scope.dataEmpleado.where.push({ col: "usu_id", filter: "='" + $scope.json.usu_id + "'", join: '' });

        $scope.dataElemento = {
            id: 'dataBuscador',
            component: [{ id: 'empleados-buscar', type: 'btn' }],
            table: 'empleado',
            column: [
                { name: 'codigo', as: 'Cedula', visible: true },
                { name: 'nombres', as: 'Nombres', visible: true },
                { name: 'apellidos', as: 'Apellidos', visible: true },
                { name: 'id', as: 'Id', visible: false },
            ],
            where: [],
            groupby: false,
            orderby: [],
            title: 'Busqueda de Empleados'
        };
        $scope.rsElemento = function (v) {
            $scope.id = JSON.parse(v).Id;
            if ($scope.id != '' && $scope.id != null) {
                Service.getCrud({ id: parseInt($scope.id) }, "/Servicios.svc/ReadEmpleados").then(function (d) {
                    var rs = JSON.parse(d.data);

                });
            }
        };

        $("#object").keydown(function (event) {
            if (event.which == 113) {
                if ($scope.json.ced_empl != undefined) {
                    $timeout(function () {
                        console.log($scope.json.tipo);
                        if ($scope.json.tipo == 1 || $scope.json.tipo == 5) {
                            document.getElementById("buscar_obj").click();
                        } else if ($scope.json.tipo == 2) {
                            $scope.dataBuscador_PRO.where = [];
                            $scope.dataBuscador_PRO.where.push({ col: 'objeto.tipo_articulo', filter: " = '2'", join: '' }, { col: ' and entregas.ced_empl', filter: " = '" + $scope.json.ced_empl + "'", join: '' });
                            document.getElementById("buscar_pro").click(); // Click on the checkbox
                        } else {
                            alert("DEBE SELECCIONAR EL TIPO DE ACTA");
                        }
                    });
                } else {
                    alert("DEBE SELECCIONAR UN EMPLEADO");
                }
            }
        });


        /*ACTIVO FIJO PARA ENTREGA*/
        $scope.dataBuscador_objeto = {
            id: 'buscadorobject',
            component: [{ id: 'buscar_obj', type: 'btn' }],
            table: 'objeto',
            column: [
                { name: 'rtrim(ltrim(objeto.af))', as: 'AF', visible: true },
                { name: 'rtrim(ltrim(objeto.imei))', as: 'IMEI', visible: true },
                { name: 'rtrim(ltrim(objeto.descripcion))', as: 'DESCRIPCION', visible: true },
                { name: 'rtrim(ltrim(objeto.observacion))', as: 'OBSERVACION', visible: false },
                { name: 'rtrim(ltrim(objeto.tipo))', as: 'Tipo', visible: false },
                { name: 'rtrim(ltrim(objeto.estado))', as: 'Estado', visible: false },
            ],
            left_join: [{ table: "articulos_af", on: "objeto.cod_articulo = articulos_af.codigo", join: "" }],
            where: [{ col: "objeto.estado", filter: "='1'", join: '' }, { col: " and tipo_articulo", filter: "='2'", join: '' }],
            orderby: [],
            groupby: true,
            title: 'BUSCAR ACTIVOS FIJOS DISPONIBLES',

        };
        $scope.resultado_objeto = function (d) {
            var j = JSON.parse(d);
            if (j.Estado != 0 || $scope.json.tipo != '1') {
                $scope.json2.cantidad = 1;
                $scope.json2.imei_inv = j.IMEI;
                $scope.json2.placa_af = j.AF;
                $scope.json2.tipo = j.Tipo;
                $scope.json2.elemento = j.DESCRIPCION;
                $scope.json2.marca = "";
            } else {
                alert("EL ACTIVO YA SE ENCUENTRA ASIGNADO");
            }

        }

        /*ACTIVO FIJO PARA DEVOLUCION*/
        $scope.dataBuscador_PRO = {
            id: 'buscadorobject',
            component: [{ id: 'buscar_pro', type: 'btn' }],
            table: 'detalle_entrega',
            column: [
                { name: 'rtrim(ltrim(objeto.af))', as: 'AF', visible: true },
                { name: 'rtrim(ltrim(objeto.imei))', as: 'IMEI', visible: true },
                { name: 'rtrim(ltrim(objeto.descripcion))', as: 'DESCRIPCION', visible: true },
                { name: 'rtrim(ltrim(objeto.observacion))', as: 'OBSERVACION', visible: false },
                { name: 'rtrim(ltrim(objeto.tipo))', as: 'Tipo', visible: false },
                { name: 'rtrim(ltrim(objeto.estado))', as: 'Estado', visible: false },
            ],
            inner_join: [{ table: "objeto", on: "detalle_entrega.placa_af = objeto.af", join: "" }, { table: "articulos_af", on: "objeto.cod_articulo = articulos_af.codigo", join: "" }, { table: "entregas", on: "detalle_entrega.id_ent = entregas.id_ent", join: "" }],
            where: [],
            orderby: [],
            groupby: true,
            title: 'BUSCAR ACTIVOS FIJOS ENTREGADOS',

        };
        $scope.resultadoBRPRO = function (d) {
            var j = JSON.parse(d);
            if (j.Estado != 0 || $scope.json.tipo != '1') {
                $scope.json2.cantidad = 1;
                $scope.json2.imei_inv = j.IMEI;
                $scope.json2.placa_af = j.AF;
                $scope.json2.tipo = j.Tipo;
                $scope.json2.elemento = j.DESCRIPCION;
                $scope.json2.marca = "";
            } else {
                alert("EL ACTIVO YA SE ENCUENTRA ASIGNADO");
            }

        }


        /*FUNCIONES TABLA*/
        $scope.add = function () {
            if ($scope.json2.estado != undefined) {
                if ($scope.json.ced_empl != undefined) {
                    Service.getCrud({ ced_empl: $scope.json.ced_empl, tipo_objeto: parseInt($scope.json2.tipo) }, "/Servicios.svc/ReadEntregas").then(function (d) {
                        var rs = JSON.parse(d.data);
                        if (rs == 1) {
                            if ($scope.json.tipo == 1) {
                                alert("ESTE ACTIVO NO PUEDE SER ENTREGADO EL EMPLEADO YA CUENTA CON UNA ASIGNACION DEL MISMO TIPO");
                            }
                            $scope.grilla.push($scope.json2);
                            $scope.json2 = {};
                        } else {
                            $scope.grilla.push($scope.json2);
                            $scope.json2 = {};
                        }
                    });
                } else {
                    alert("DEBE SELECCIONAR UN EMPLEADO")
                }


            } else {
                alert("DEGE INGRESAR EL ESTADO DE ACTIVO ESTADO")
            }
        }
        $scope.deleteGrilla = function (i) {
            $scope.grilla.splice($scope.grilla[i], 1);
        }
        $scope.load_edit = function (item) {
            $scope.json2 = item;
        }
        $scope.confirm_edit = function () {
            $scope.json2 = {};
        }


        $scope.data_activos = {
            id: 'databuscar',
            component: [{ id: 'entrega-buscar', type: 'btn' }],
            table: 'empleado',
            column: [
                { name: 'rtrim(ltrim(entregas.id_ent))', as: 'id_ent', visible: false },
                { name: 'rtrim(ltrim(devoluciones.id_dev))', as: 'id_dev', visible: false },
                { name: 'rtrim(ltrim(empleado.cedula_emp))', as: 'Cedula', visible: true },
                { name: 'rtrim(ltrim(empleado.NOMBRE))', as: 'Nombre', visible: true },
                { name: 'rtrim(ltrim(empleado.SNOMBRE))', as: 'S_Nombre', visible: true },
                { name: 'rtrim(ltrim(empleado.PPELLIDO))', as: 'P_Apellido', visible: true },
                { name: 'rtrim(ltrim(empleado.SPELLIDO))', as: 'S_Apellido', visible: true },
                { name: 'rtrim(ltrim(entregas.FECHA))', as: 'Fecha_Ent', visible: true },
                { name: 'rtrim(ltrim(devoluciones.FECHA))', as: 'Fecha_Dev', visible: true },

            ],
            inner_join: [{ table: "entregas", on: "entregas.ced_empl = empleado.cedula_emp", join: "" }],
            left_join: [{ table: "devoluciones", on: "devoluciones.ced_empl = empleado.cedula_emp", join: "" }],
            where: [
            ],
            orderby: [],
            groupby: true,
            title: 'Buscar Acta',

        };
        $scope.rs_act = function (d) {
            var j = JSON.parse(d);
            $scope.tipo_acta = 0;
            $scope.id_acta = null;
            $scope.json.nombre_completo = j.Nombre + " " + j.S_Nombre + " " + j.P_Apellido + " " + j.S_Apellido;
            console.log($scope.json.nombre_completo);
            if (j.id_ent != '' && j.id_dev != '') {
                $scope.openModaConfirmar = true;
                $scope.aux_acta_1 = j.id_ent;
                $scope.aux_acta_2 = j.id_dev;
            } else if (j.id_ent != '') {
                $scope.tipo_acta = 1;
                $scope.id_acta = j.id_ent;
                $scope.read_actasbyid();
            } else if (j.id_dev != '') {
                $scope.tipo_acta = 2;
                $scope.id_acta = j.id_dev;
                $scope.read_actasbyid();
            }
            if (j.Cedula != '') {
                $scope.key.value = j.Cedula;
            }


        }

        $scope.read_actasbyid = function () {
            console.log($scope.id_acta);
            Service.getCrud({ tipo: parseInt($scope.tipo_acta), id: parseInt($scope.id_acta) }, "/Servicios.svc/Read_Acta").then(function (d) {
                var rs = JSON.parse(d.data);
                console.log(rs);
                $scope.json = rs[0];

                $scope.grilla = rs[1];
                //$scope.json.nombre_completo = rs.nombre + " " + rs.snombre + " " + rs.ppellido + " " + rs.spellido;
                $scope.json.autoriza = $scope.json.autoriza;
                $scope.json.tipo = $scope.tipo_acta;
                $scope.json.fecha = ssDate.militodate($scope.json.fecha);
                $scope.openModaConfirmar = false;
                $scope.disabledbtn.editar = false;
                $scope.disabledbtn.imprimir = false;
            });
        }

        $scope.convert = function (fecha) {
            return ssDate.dateToString(fecha, 'dd-MM-yyyy');
        }

        //VALIDACIONES
        $scope.validate_tipo = function () {
            console.log("entrooo");
            console.log($scope.json.tipo);
            if ($scope.json.tipo == undefined) {
                $("#acta").focus();
                //alert("DEBE SELECCIONAR EL TIPO DE ACTA");
            }
        }

        //BUSCADOR
        $scope.rsActa = function (v) {
            var rs = JSON.parse(v);
            console.log(rs);
            Service.getCrud({ ced_empl: rs.Cedula, fecha: rs.Fecha, hora: rs.Hora }, "/Servicios.svc/ReadActa_entrega").then(function (d) {
                var rs = JSON.parse(d.data)[0];
                var x = JSON.parse(d.data)[1];
                var y = JSON.parse(d.data)[2];
                $scope.json = rs;
                $scope.table = [];
                $scope.table = x;
                $scope.json.tipo = 1;
                $scope.cargo = y.cargo;
                $scope.json.autoriza = parseInt(rs.autoriza);
                console.log("VA POR AQUI");
                console.log($scope.json.autoriza);
                var f = ssDate.militodate(rs.fecha)
                $scope.json.fecha = ssDate.dateToString(f, 'dd-MM-yyyy');
                //$scope.json.nombre_completo = y.nombre + " " + y.snombre + " " + y.ppellido + " " + y.spellido;
                $scope.ccosto = y.ccosto;
                $timeout(function () {
                    $('#menu').addClass("ss-nav-inactive");
                    $('#wrapper').addClass("ss-full-view");
                    window.print();
                });

            });
        };
        $scope.dataActa = {
            id: 'dataBuscador',
            component: [{ id: 'acta-buscar', type: 'btn' }],
            table: 'entregas',
            column: [
                { name: 'ced_empl', as: 'Cedula', visible: true },
                { name: 'fecha', as: 'Fecha', visible: true },
                { name: 'hora', as: 'Hora', visible: true },
                { name: 'id_ent', as: 'Id', visible: false }

            ],
            where: [],
            groupby: false,
            orderby: [],
            title: 'Busqueda de acta'
        };
        $scope.dataActa.where = [];


        $scope.closemodal = function () {
            $scope.openModaConfirmar = false;
        }

        $scope.aceptar = function () {


            if ($scope.radiotbnacta == '1') {
                $scope.tipo_acta = 1;
                $scope.id_acta = $scope.aux_acta_1;

            } else if ($scope.radiotbnacta == '2') {
                $scope.tipo_acta = 2;
                $scope.id_acta = $scope.aux_acta_2;
            }
            $scope.read_actasbyid();
        }

        $("#placa").keydown(function (event) {
            if (event.which == 13) {
                $timeout(function () {
                    if ($scope.json2.placa_af != '') {
                        Service.getCrud({ activo: $scope.json2.placa_af }, "/Servicios.svc/ReadObjeto").then(function (d) {
                            var rs = JSON.parse(d.data);
                            if (rs != null) {
                                if (rs.estado != 0 || $scope.json.tipo != '1') {
                                    $scope.json2.elemento = rs.descripcion;
                                    $scope.json2.tipo = rs.tipo;
                                    if (rs.tipo == 2) {
                                        $scope.json2.elemento = "TABLET " + rs.descripcion;
                                        $scope.json2.marca = "SAMSUNG";
                                        $scope.json2.observacion = rs.imei;
                                    }
                                    if (rs.tipo == 3) {
                                        $scope.json2.elemento = rs.descripcion;
                                        $scope.json2.marca = "FUTRONIC";
                                        $scope.json2.observacion = rs.imei;
                                    }
                                    if (rs.tipo == 1) {
                                        $scope.json2.marca = "SAMSUNG";
                                    }
                                    $scope.json2.placa_af = rs.af;
                                    $scope.json2.imei_inv = rs.af;
                                    $scope.json2.cantidad = 1;
                                } else {
                                    alert("EL ACTIVO YA SE ENCUENTRA ASIGNADO");
                                }
                            } else {
                                $timeout(function () {
                                    document.getElementById("buscar_pro").click(); // Click on the checkbox
                                });
                            }
                        });
                    }
                });
            }
        });

    }
    function ReportesController($scope, $q, Service, Auth, $timeout, ssDate) {
        $scope.json = {};
        $scope.buscar_report = function () {
            Service.getCrud({ tipo: $scope.tipo_activo }, "/Servicios.svc/Searchreport1").then(function (d) {
                var rs = JSON.parse(d.data);
                $scope.grilla = [];
                $scope.grilla = rs;
                $scope.jsonexcel = rs;
            });
        }
        $scope.tipo_activo = 1;
        $scope.buscar_report();
        $scope.rsActa = function (v) {
            var rs = JSON.parse(v);
            Service.getCrud({ ced_empl: rs.Cedula, fecha: rs.Fecha, hora: rs.Hora }, "/Servicios.svc/ReadActa_entrega").then(function (d) {
                var rs = JSON.parse(d.data)[0];
                var x = JSON.parse(d.data)[1];
                var y = JSON.parse(d.data)[2];
                var e = JSON.parse(d.data)[3];
                $scope.json = rs;
                $scope.table = [];
                $scope.table = x;
                $scope.json.tipo = 1;
                $scope.cargo = y.cargo;
                $scope.ruta = "img/" + e.ruta_logo;
                $scope.cod_emp = e.codigo;
                var f = ssDate.militodate(rs.fecha);
                $scope.json.fecha = ssDate.dateToString(f, 'dd-MM-yyyy');
                $scope.json.nombre_completo = y.nombre + " " + y.snombre + " " + y.ppellido + " " + y.spellido;
                $scope.ccosto = y.ccosto;
                Service.getCrud({ id_autoriza: $scope.json.autoriza }, "/Servicios.svc/validatejefe").then(function (d) {
                    var rs = JSON.parse(d.data);
                    $scope.jefe_inmediato = rs.nombre;
                    $timeout(function () {
                        $('#menu').addClass("ss-nav-inactive");
                        $('#wrapper').addClass("ss-full-view");
                        window.print();
                    }, 2000);
                });
            });
        };
        $scope.dataActa = {
            id: 'dataBuscador',
            component: [{ id: 'acta-buscar', type: 'btn' }],
            table: 'entregas',
            column: [
                { name: 'ced_empl', as: 'Cedula', visible: true },
                { name: 'fecha', as: 'Fecha', visible: true },
                { name: 'hora', as: 'Hora', visible: true },
                { name: 'id_ent', as: 'Id', visible: false }

            ],
            where: [],
            groupby: false,
            orderby: [],
            title: 'Busqueda de acta'
        };
        $scope.dataActa.where = [];

        $scope.buscar_acta = function (item) {
            $scope.dataActa.where = [];
            $scope.dataActa.where.push({ col: "ced_empl", filter: "='" + item.Cedula + "'", join: '' });
            $timeout(function () {
                document.getElementById("acta-buscar").click(); // Click on the checkbox
            });
        }

        //$scope.fnExcelReport = function () {
        //    var fecha = ssDate.dateToString(Date.now(), 'yyyy-MM-dd');
        //    var tab_text = '<html xmlns:x="urn:schemas-microsoft-com:office:excel">';
        //    tab_text = tab_text + '<head><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>';

        //    tab_text = tab_text + '<x:Name>Test Sheet</x:Name>';

        //    tab_text = tab_text + '<x:WorksheetOptions><x:Panes></x:Panes></x:WorksheetOptions></x:ExcelWorksheet>';
        //    tab_text = tab_text + '</x:ExcelWorksheets></x:ExcelWorkbook></xml></head><body>';

        //    tab_text = tab_text + "<table border='1px'>";
        //    tab_text = tab_text + $('#myTable').html();
        //    tab_text = tab_text + '</table></body></html>';

        //    var data_type = 'data:application/vnd.ms-excel';

        //    var ua = window.navigator.userAgent;
        //    var msie = ua.indexOf("MSIE ");

        //    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
        //        if (window.navigator.msSaveBlob) {
        //            var blob = new Blob([tab_text], {
        //                type: "application/csv;charset=utf-8;"
        //            });
        //            navigator.msSaveBlob(blob, 'Test file.xls');
        //        }
        //    } else {
        //        $('#test').attr('href', data_type + ', ' + encodeURIComponent(tab_text));
        //        $('#test').attr('download', 'Descarga' + fecha + '.xls');
        //    }

        //}

        $scope.JSONToCSVConvertor = function (JSONData, ReportTitle, ShowLabel) {

            //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
            var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;

            var CSV = '';
            //Set Report title in first row or line

            CSV += ReportTitle + '\r\n\n';

            //This condition will generate the Label/Header
            if (ShowLabel) {
                var row = "";

                //This loop will extract the label from 1st index of on array
                for (var index in arrData[0]) {

                    //Now convert each value to string and comma-seprated
                    row += index + ',';
                }

                row = row.slice(0, -1);

                //append Label row with line break
                CSV += row + '\r\n';
            }

            //1st loop is to extract each row
            for (var i = 0; i < arrData.length; i++) {
                var row2 = "";

                //2nd loop will extract each column and convert it in string comma-seprated
                for (var index1 in arrData[i]) {
                    row2 += '"' + arrData[i][index1] + '",';
                }

                row2.slice(0, row2.length - 1);

                //add a line break after each row
                CSV += row2 + '\r\n';
            }

            if (CSV == '') {
                alert("Invalid data");
                return;
            }
            //FECHA ACTUAL
            var fecha = ssDate.dateToString(Date.now(), 'yyyy-MM-dd');

            //Generate a file name
            var fileName = "Descarga_" + fecha;
            //this will remove the blank-spaces from the title and replace it with an underscore
            fileName += ReportTitle.replace(/ /g, "_");

            //Initialize file format you want csv or xls
            var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);

            // Now the little tricky part.
            // you can use either>> window.open(uri);
            // but this will not work in some browsers
            // or you will not get the correct file extension    

            //this trick will generate a temp <a /> tag
            var link = document.createElement("a");
            link.href = uri;

            //set the visibility hidden so it will not effect on your web-layout
            link.style = "visibility:true";
            link.download = fileName + ".csv";

            //this part will append the anchor tag and remove it after automatic click
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        $scope.fnExcelReport = function () {
            $scope.jsonexcel.forEach(function (item, index) {
                if (item.Causacion != '/Date(-62135578800000)/') {
                    item.Causacion = $scope.convert(item.Causacion);
                } else {
                    item.Causacion = "";
                }
                if (item.Fecha_estado != '/Date(-62135578800000)/') {
                    item.Fecha_estado = $scope.convert(item.Fecha_estado);
                } else {
                    item.Fecha_estado = "";
                }
            });
            $scope.JSONToCSVConvertor($scope.jsonexcel, "", true);
        }

        $scope.convert = function (x) {
            if (x != '/Date(-62135578800000)/') {
                var aux = ssDate.militodate(x);
                return ssDate.dateToString(aux, 'dd-MM-yyyy');

            }
        }

        // JSON to CSV Converter
        $scope.ConvertToCSV = function (tabla) {
            var array = typeof tabla != 'object' ? JSON.parse(tabla) : tabla;
            var str = '';

            for (var i = 0; i < array.length; i++) {
                var line = '';
                for (var index in array[i]) {
                    if (line != '') line += ';'

                    line += array[i][index];
                }

                str += line + '\r\n';
            }
            $scope.resultcvs = str;
        }

        // Example


        // Create Object
        var items = [
            { name: "Item 1", color: "Green", size: "X-Large" },
            { name: "Item 2", color: "Green", size: "X-Large" },
            { name: "Item 3", color: "Green", size: "X-Large" }];

        // Convert Object to JSON
        var jsonObject = JSON.stringify(items);
    }
    function ConsumiblesController($scope, $q, Service, Auth, $timeout, ssDate) {
        $scope.json = {};
        $scope.json2 = {};
        $scope.grilla = [];
        $scope.cod_user = Auth.getUserObj().codigo;
        $scope.log_user = Auth.getUserObj().username;
        $scope.lod_id = Auth.getUserObj().id;
        $scope.key = { value: '' };
        $scope.openWaiting = false;
        $scope.openModalPRO = false;
        $scope.sh_add = false;


        Service.getCrud({}, "/Servicios.svc/preload_jefes").then(function (d) {
            var rs = JSON.parse(d.data);
            $scope.jefes = rs[0];
        });


        /*CONFIG BUSQUEDA RAPIDA*/
        $scope.nuevo = function () {
            $scope.json = {};
            $scope.json2 = {};
            $scope.json.tipo_acta = 2;
            $scope.grilla = [];
            $scope.key = { value: '' };
            $scope.json.fecha = new Date();
            $scope.sh_add = true;
            $scope.cargo = '';
            $scope.ccosto = '';
        }

        /*CONFIG BUSQUEDA RAPIDA*/
        $scope.dataNombre = {
            id: 'buscadorNombre',
            component: [{ id: 'brNombre', type: '' }],
            table: 'empleado',
            column: [
                { name: 'rtrim(ltrim(CEDULA_EMP))', as: 'Cedula', visible: true },
                { name: 'rtrim(ltrim(NOMBRE))', as: 'Nombre', visible: true },
                { name: 'rtrim(ltrim(SNOMBRE))', as: 'S_Nombre', visible: true },
                { name: 'rtrim(ltrim(PPELLIDO))', as: 'Apellido', visible: true },
                { name: 'rtrim(ltrim(SPELLIDO))', as: 'S_Apellido', visible: true },
                { name: 'rtrim(ltrim(CARGO))', as: 'Cargo', visible: false },
                { name: 'rtrim(ltrim(CCOSTO))', as: 'Ccosto', visible: false },
                { name: 'rtrim(ltrim(EMPRESA))', as: 'Empresa', visible: false },
            ],
            where: {},
            groupby: true,
            orderby: [],
            title: 'Buscar nombre de empleado',
            required: true
        };
        $scope.rsNombre = function (d) {
            var j = JSON.parse(d);
            $scope.cargo = j.Cargo;
            $scope.json.ced_empl = j.Cedula;
            $scope.json.nombre_completo = j.Nombre + ' ' + j.S_Nombre + ' ' + j.Apellido + ' ' + j.S_Apellido;
            $scope.ccosto = j.Ccosto;
            $scope.read_empresa(j.Empresa);
        }

        /*CONFIG BUSQUEDA RAPIDA PARA TRASLADO*/
        $scope.dataNombretras = {
            id: 'buscadorNombre2',
            component: [{ id: 'brNombre2', type: '' }],
            table: 'empleado',
            column: [
                { name: 'rtrim(ltrim(CEDULA_EMP))', as: 'Cedula', visible: true },
                { name: 'rtrim(ltrim(NOMBRE))', as: 'Nombre', visible: true },
                { name: 'rtrim(ltrim(SNOMBRE))', as: 'S_Nombre', visible: true },
                { name: 'rtrim(ltrim(PPELLIDO))', as: 'Apellido', visible: true },
                { name: 'rtrim(ltrim(SPELLIDO))', as: 'S_Apellido', visible: true },
                { name: 'rtrim(ltrim(CARGO))', as: 'Cargo', visible: false },
                { name: 'rtrim(ltrim(CCOSTO))', as: 'Ccosto', visible: false },
                { name: 'rtrim(ltrim(EMPRESA))', as: 'Empresa', visible: false },
            ],
            where: {},
            groupby: true,
            orderby: [],
            title: 'Buscar nombre de empleado',
            required: true
        };
        $scope.rsNombretras = function (d) {
            var j = JSON.parse(d);
            $scope.cargo2 = j.Cargo;
            $scope.json.ced_empl_tras = j.Cedula;
            $scope.json.nombre_completo_tras = j.Nombre + ' ' + j.S_Nombre + ' ' + j.Apellido + ' ' + j.S_Apellido;
            $scope.ccosto_tras = j.Ccosto;
            $scope.read_empresa_tras(j.Empresa);
        }

        /*BARRA*/
        $scope.showbtn = { buscar: true, imprimir: true, nuevo: true, editar: true, eliminar: true, cerrar: false };
        $scope.disabledbtn = { buscar: false, imprimir: false, nuevo: false, editar: true, eliminar: true };
        /*CRUD*/
        $scope.guardar = function () {
            var defender = $q.defer();
            var promise = defender.promise;
            if ($scope.grilla.length >= 1) {
                if (!$scope.consumible.$valid) {
                    var cr = "Campos requeridos no diligenciados:";
                    $scope.entrega.$error.required.forEach(function (item, index) {
                        cr += "\n - " + item.$name;
                    });
                    alert(cr);
                    defender.resolve(false);
                    return promise;
                } else {
                    if (jQuery.isEmptyObject($scope.grilla)) {
                        alert("SE DEBE ASIGNAR POR LO MENOS UN ACTIVO FIJO");
                        defender.resolve(false);
                        return promise;
                    } else {
                        $timeout(function () {
                            try {
                                var rs = false;
                                $scope.json.id_empresa = 1;
                                $scope.json.cod_user = Auth.getUserObj().codigo;
                                $scope.json.hora = ssDate.dateToString(new Date(), 'HH:mm');
                                console.log($scope.json.hora);
                                Service.getCrud({ tipo: $scope.json.tipo, json: angular.toJson($scope.json), json2: angular.toJson($scope.grilla), log_usuario: $scope.lod_id }, '/Servicios.svc/create_acta').then(function (d) {
                                    rs = JSON.parse(d.data);
                                    defender.resolve(rs);
                                    $scope.imprimir();
                                    $scope.disabledbtn.imprimir = false;
                                });
                            } catch (e) {
                                defender.reject(e);
                            }
                        });
                    }
                }
            } else {
                alert("DEBE INGRESAR AL MENOS UN ITEM EN LA TABLA");
            }
            return promise;

        };
        $scope.actualizar = function () {
            var defender = $q.defer();
            var promise = defender.promise;
            if (!$scope.consumible.$valid) {
                var cr = "Campos requeridos no diligenciados:";
                $scope.entrega.$error.required.forEach(function (item, index) {
                    cr += "\n - " + item.$name;
                });
                alert(cr);
                defender.resolve(false);
                return promise;
            } else {
                if (jQuery.isEmptyObject($scope.grilla)) {
                    alert("SE DEBE ASIGNAR POR LO MENOS UN ACTIVO FIJO");
                    defender.resolve(false);
                    return promise;
                } else {
                    $timeout(function () {
                        try {
                            var rs = false;
                            $scope.json.id_empresa = 1;
                            $scope.json.cod_user = Auth.getUserObj().codigo;
                            $scope.json.hora = ssDate.dateToString(new Date(), 'HH:mm');
                            console.log($scope.json.hora);
                            Service.getCrud({ tipo: $scope.json.tipo, json: angular.toJson($scope.json), json2: angular.toJson($scope.grilla), log_usuario: $scope.lod_id }, '/Servicios.svc/update_consumibles').then(function (d) {
                                rs = JSON.parse(d.data);
                                defender.resolve(rs);
                                $scope.disabledbtn.imprimir = false;
                                $scope.disabledbtn.editar = true
                            });
                        } catch (e) {
                            defender.reject(e);
                        }
                    });
                }
            }

            return promise;
        }
        $scope.editar = function () {
            $scope.sh_add = true;
            $scope.sh_edit = true;
        }


        $scope.dataUsuario = {
            id: 'buscadorCliente',
            component: [{ id: 'brcliente', type: '' }],
            table: 'usuario',
            column: [
                { name: 'rtrim(ltrim(codigo))', as: 'Documento', visible: true },
                { name: 'rtrim(ltrim(nombre_usuario))', as: 'Nombre', visible: true },
                { name: 'id', as: 'Id', visible: false }
            ],
            where: {},
            groupby: true,
            orderby: [],
            title: 'Buscar Usuario',
            required_name: "USUARIO"
        };
        $scope.rsUsuario = function (d) {
            var j = JSON.parse(d);
            $scope.json.usu_id = parseInt(j.Id);
        }

        $scope.rsEmpleado = function (v) {
            $scope.id = JSON.parse(v).Id;
            if ($scope.id != '' && $scope.id != null) {
                Service.getCrud({ id: parseInt($scope.id) }, "/Servicios.svc/ReadEmpleados").then(function (d) {
                    var rs = JSON.parse(d.data);
                    $scope.json.ced_empl = rs.cedula_emp;
                    $scope.read_empresa();
                    $scope.disabledbtn.eliminar = false;
                    $scope.disabledbtn.editar = false;
                });
            }
        };
        $scope.dataEmpleado = {
            id: 'dataBuscador',
            component: [{ id: 'empleados-buscar', type: 'btn' }],
            table: 'empleado',
            column: [
                { name: 'codigo', as: 'Cedula', visible: true },
                { name: 'nombres', as: 'Nombres', visible: true },
                { name: 'apellidos', as: 'Apellidos', visible: true },
                { name: 'id', as: 'Id', visible: false }

            ],
            where: [],
            groupby: false,
            orderby: [],
            title: 'Busqueda de Empleados',
            required_name: 'EMPLEADO'
        };
        $scope.dataEmpleado.where = [];
        //$scope.dataEmpleado.where.push({ col: "usu_id", filter: "='" + $scope.json.usu_id + "'", join: '' });

        $scope.dataElemento = {
            id: 'dataBuscador',
            component: [{ id: 'empleados-buscar', type: 'btn' }],
            table: 'empleado',
            column: [
                { name: 'codigo', as: 'Cedula', visible: true },
                { name: 'nombres', as: 'Nombres', visible: true },
                { name: 'apellidos', as: 'Apellidos', visible: true },
                { name: 'id', as: 'Id', visible: false },
            ],
            where: [],
            groupby: false,
            orderby: [],
            title: 'Busqueda de Empleados'
        };
        $scope.rsElemento = function (v) {
            $scope.id = JSON.parse(v).Id;
            if ($scope.id != '' && $scope.id != null) {
                Service.getCrud({ id: parseInt($scope.id) }, "/Servicios.svc/ReadEmpleados").then(function (d) {
                    var rs = JSON.parse(d.data);

                });
            }
        };

        $("#object").keydown(function (event) {
            if (event.which == 113) {
                if ($scope.json.ced_empl != undefined) {
                    $timeout(function () {
                        console.log($scope.json.tipo);
                        if ($scope.json.tipo == 1 || $scope.json.tipo == 5) {
                            document.getElementById("buscar_obj").click();
                        } else if ($scope.json.tipo == 2 || $scope.json.tipo == 3) {
                            $scope.dataBuscador_PRO.where = [];
                            $scope.dataBuscador_PRO.where.push({ col: 'objeto.tipo_articulo', filter: " = '1'", join: '' }, { col: ' and entregas.ced_empl', filter: " = '" + $scope.json.ced_empl + "'", join: '' });
                            document.getElementById("buscar_pro").click(); // Click on the checkbox
                        } else {
                            alert("DEBE SELECCIONAR EL TIPO DE ACTA");
                        }
                    });
                } else {
                    alert("DEBE SELECCIONAR UN EMPLEADO");
                }
            }
        });

        /*OBJETO PARA DEVOLUCION*/
        $scope.dataBuscador_PRO = {
            id: 'buscadorobject',
            component: [{ id: 'buscar_pro', type: 'btn' }],
            table: 'detalle_entrega',
            column: [
                { name: 'rtrim(ltrim(objeto.af))', as: 'AF', visible: true },
                { name: 'rtrim(ltrim(objeto.imei))', as: 'IMEI', visible: true },
                { name: 'rtrim(ltrim(objeto.descripcion))', as: 'DESCRIPCION', visible: true },
                { name: 'rtrim(ltrim(objeto.observacion))', as: 'OBSERVACION', visible: false },
                { name: 'rtrim(ltrim(objeto.valor))', as: 'Valor', visible: false },
                { name: 'rtrim(ltrim(objeto.tipo))', as: 'Tipo', visible: false },
                { name: 'rtrim(ltrim(objeto.estado))', as: 'Estado', visible: false },
                { name: 'rtrim(ltrim(articulos.marca))', as: 'Marca', visible: false },
                { name: 'rtrim(ltrim(detalle_entrega.c))', as: 'c', visible: false },
                { name: 'rtrim(ltrim(detalle_entrega.l))', as: 'l', visible: false },
                { name: 'rtrim(ltrim(detalle_entrega.a))', as: 'a', visible: false },
                { name: 'rtrim(ltrim(detalle_entrega.v))', as: 'v', visible: false },
                { name: 'rtrim(ltrim(detalle_entrega.f))', as: 'f', visible: false },
            ],
            inner_join: [{ table: "objeto", on: "detalle_entrega.imei_inv = objeto.imei", join: "" }, { table: "articulos", on: "objeto.cod_articulo = articulos.codigo", join: "" }, { table: "entregas", on: "detalle_entrega.id_ent = entregas.id_ent", join: "" }],
            where: [],
            orderby: [],
            groupby: true,
            title: 'Buscar elementos devolutivos entregados',

        };
        $scope.resultadoBRPRO = function (d) {
            var j = JSON.parse(d);
            if (j.Estado != 0 || $scope.json.tipo != '1') {
                $scope.json2.cantidad = 1;
                $scope.json2.imei_inv = j.IMEI;
                $scope.json2.tipo = j.Tipo;
                $scope.json2.elemento = j.DESCRIPCION;
                $scope.json2.marca = j.Marca;
                $scope.json2.c = parseInt(j.c);
                $scope.json2.l = parseInt(j.l);
                $scope.json2.a = parseInt(j.a);
                $scope.json2.v = parseInt(j.v);
                $scope.json2.f = parseInt(j.f);
                $scope.json2.valor = j.Valor;

            } else {
                alert("EL ACTIVO YA SE ENCUENTRA ASIGNADO");
            }

        }


        /*OBJETO PARA ENTREGA*/
        $scope.dataBuscador_objeto = {
            id: 'buscadorobject',
            component: [{ id: 'buscar_obj', type: 'btn' }],
            table: 'objeto',
            column: [
                { name: 'rtrim(ltrim(objeto.af))', as: 'AF', visible: true },
                { name: 'rtrim(ltrim(objeto.imei))', as: 'IMEI', visible: true },
                { name: 'rtrim(ltrim(objeto.descripcion))', as: 'DESCRIPCION', visible: true },
                { name: 'rtrim(ltrim(objeto.observacion))', as: 'OBSERVACION', visible: false },
                { name: 'rtrim(ltrim(objeto.tipo))', as: 'Tipo', visible: false },
                { name: 'rtrim(ltrim(objeto.estado))', as: 'Estado', visible: false },
                { name: 'rtrim(ltrim(articulos.marca))', as: 'Marca', visible: false },
                { name: 'rtrim(ltrim(objeto.valor))', as: 'Valor', visible: false },
            ],
            inner_join: [{ table: "articulos", on: "objeto.cod_articulo = articulos.codigo", join: "" }],
            where: [{ col: "objeto.estado", filter: "='1'", join: '' }, { col: " and tipo_articulo", filter: "='1'", join: '' }],
            orderby: [],
            groupby: true,
            title: 'Buscar elementos devolutivos disponibles',

        };
        $scope.resultado_objeto = function (d) {
            var j = JSON.parse(d);
            if (j.Estado != 0 || $scope.json.tipo != '1') {
                $scope.json2.cantidad = 1;
                $scope.json2.imei_inv = j.IMEI;
                $scope.json2.tipo = j.Tipo;
                $scope.json2.elemento = j.DESCRIPCION;
                $scope.json2.marca = j.Marca;
                $scope.json2.valor = j.Valor;
                console.log($scope.json2.valor);

            } else {
                alert("EL ACTIVO YA SE ENCUENTRA ASIGNADO");
            }

        }

        /*FUNCIONES TABLA*/
        $scope.add = function () {
            if ($scope.json2.tipo != undefined && $scope.json2.tipo != null) {
                if ($scope.json2.estado != undefined) {
                    if ($scope.json.ced_empl != undefined) {
                        if ($scope.json2.c == undefined) {
                            $scope.json2.c = 0;
                        }
                        if ($scope.json2.l == undefined) {
                            $scope.json2.l = 0;
                        }
                        if ($scope.json2.a == undefined) {
                            $scope.json2.a = 0;
                        }
                        if ($scope.json2.v == undefined) {
                            $scope.json2.v = 0;
                        }
                        if ($scope.json2.f == undefined) {
                            $scope.json2.f = 0;
                        }
                        Service.getCrud({ ced_empl: $scope.json.ced_empl, tipo_objeto: parseInt($scope.json2.tipo) }, "/Servicios.svc/ReadEntregas").then(function (d) {
                            var rs = JSON.parse(d.data);
                            if (rs == 1) {
                                if ($scope.json.tipo == 1) {
                                    alert("ESTE ACTIVO NO PUEDE SER ENTREGADO EL EMPLEADO YA CUENTA CON UNA ASIGNACION DEL MISMO TIPO");
                                }
                                $scope.grilla.push($scope.json2);
                                $scope.json2 = {};
                                $timeout(function () {
                                    //$("#check").prop("disabled", true);
                                    $("input[name='check']").prop("disabled", true);
                                });
                            } else {
                                $scope.grilla.push($scope.json2);
                                $scope.json2 = {};
                                $timeout(function () {
                                    //$("#check").prop("disabled", true);
                                    $("input[name='check']").prop("disabled", true);
                                });
                            }
                        });
                    } else {
                        alert("DEBE SELECCIONAR UN EMPLEADO")
                    }


                } else {
                    alert("DEGE INGRESAR EL ESTADO DE ACTIVO ESTADO")
                }
            } else {
                alert("DEBE BUSCAR UN OBJETO")
            }
        }
        $scope.deleteGrilla = function (i) {
            $scope.grilla.splice($scope.grilla[i], 1);
        }
        $scope.load_edit = function (item) {
            $scope.json2 = item;
        }
        $scope.confirm_edit = function () {
            $scope.json2 = {};
        }


        $scope.data_consumible = {
            id: 'databuscar',
            component: [{ id: 'consumible-buscar', type: 'btn' }],
            table: 'empleado',
            column: [
                { name: 'rtrim(ltrim(entregas.id_ent))', as: 'id_ent', visible: false },
                { name: 'rtrim(ltrim(devoluciones.id_dev))', as: 'id_dev', visible: false },
                { name: 'rtrim(ltrim(empleado.cedula_emp))', as: 'Cedula', visible: true },
                { name: 'rtrim(ltrim(empleado.NOMBRE))', as: 'Nombre', visible: true },
                { name: 'rtrim(ltrim(empleado.SNOMBRE))', as: 'S_Nombre', visible: true },
                { name: 'rtrim(ltrim(empleado.PPELLIDO))', as: 'P_Apellido', visible: true },
                { name: 'rtrim(ltrim(empleado.SPELLIDO))', as: 'S_Apellido', visible: true },
                { name: 'rtrim(ltrim(entregas.FECHA))', as: 'Fecha_Ent', visible: true },
                { name: 'rtrim(ltrim(devoluciones.FECHA))', as: 'Fecha_Dev', visible: true },

            ],
            inner_join: [{ table: "entregas", on: "entregas.ced_empl = empleado.cedula_emp", join: "" }],
            left_join: [{ table: "devoluciones", on: "devoluciones.ced_empl = empleado.cedula_emp", join: "" }],
            where: [
            ],
            orderby: [],
            groupby: true,
            title: 'Buscar Acta',

        };
        $scope.rs_consumible = function (d) {
            var j = JSON.parse(d);
            $scope.tipo_acta = 0;
            $scope.id_acta = null;
            if (j.id_ent != '' && j.id_dev != '') {
                $scope.openModaConfirmar = true;
                $scope.aux_acta_1 = j.id_ent;
                $scope.aux_acta_2 = j.id_dev;
            } else if (j.id_ent != '') {
                $scope.tipo_acta = 1;
                $scope.id_acta = j.id_ent;
                $scope.read_actasbyid();
            } else if (j.id_dev != '') {
                $scope.tipo_acta = 2;
                $scope.id_acta = j.id_dev;
                $scope.read_actasbyid();
            }
            if (j.Cedula != '') {
                $scope.key.value = j.Cedula;
            }


        }

        $scope.read_actasbyid = function () {
            console.log($scope.id_acta);
            Service.getCrud({ tipo: parseInt($scope.tipo_acta), id: parseInt($scope.id_acta) }, "/Servicios.svc/Read_Acta").then(function (d) {
                var rs = JSON.parse(d.data);
                console.log(rs);
                $scope.grilla = rs[1];

                $scope.json.observacion = rs[0].observacion;
                $scope.json.estado = rs[0].estado;
                $scope.json.autoriza = rs[0].autoriza;
                $scope.json.tipo = $scope.tipo_acta;
                $scope.json.fecha = ssDate.militodate(rs[0].fecha);
                $scope.openModaConfirmar = false;
                $scope.disabledbtn.editar = false;
            });
        }

        $scope.convert = function (fecha) {
            return ssDate.dateToString(fecha, 'dd-MM-yyyy');
        }

        //VALIDACIONES
        $scope.validate_tipo = function () {
            if ($scope.json.tipo == undefined) {
                $("#act").focus();
                //alert("DEBE SELECCIONAR EL TIPO DE ACTA");
            }
        }

        $scope.imprimir = function () {
            Service.getCrud({ id_autoriza: $scope.json.autoriza }, "/Servicios.svc/validatejefe").then(function (d) {
                var rs = JSON.parse(d.data);
                $scope.jefe_inmediato = rs.nombre;
                if ($scope.json.tipo == '3') {
                    Service.getCrud({ id_autoriza: $scope.json.autoriza_tras }, "/Servicios.svc/validatejefe").then(function (d) {
                        var rs = JSON.parse(d.data);
                        $scope.autoriza_tras = rs.nombre;
                        $timeout(function () {
                            $('#menu').addClass("ss-nav-inactive");
                            $('#wrapper').addClass("ss-full-view");
                            window.print();
                        });
                    });
                } else {
                    $timeout(function () {
                        $('#menu').addClass("ss-nav-inactive");
                        $('#wrapper').addClass("ss-full-view");
                        window.print();
                    });
                }
            });
        }



        //BUSCADOR==-09
        $scope.rsActa = function (v) {
            var rs = JSON.parse(v);
            console.log(rs);
            Service.getCrud({ ced_empl: rs.Cedula, fecha: rs.Fecha, hora: rs.Hora }, "/Servicios.svc/ReadActa_entrega").then(function (d) {
                var rs = JSON.parse(d.data)[0];
                var x = JSON.parse(d.data)[1];
                var y = JSON.parse(d.data)[2];
                $scope.json = rs;
                $scope.table = [];
                $scope.table = x;
                $scope.json.tipo = 1;
                $scope.cargo = y.cargo;
                console.log(rs);
                var f = ssDate.militodate(rs.fecha)
                $scope.json.fecha = ssDate.dateToString(f, 'dd-MM-yyyy');
                $scope.json.nombre_completo = y.nombre + " " + y.snombre + " " + y.ppellido + " " + y.spellido;
                $scope.ccosto = y.ccosto;
                $timeout(function () {
                    $('#menu').addClass("ss-nav-inactive");
                    $('#wrapper').addClass("ss-full-view");
                    window.print();
                });

            });
        };
        $scope.dataActa = {
            id: 'dataBuscador',
            component: [{ id: 'acta-buscar', type: 'btn' }],
            table: 'entregas',
            column: [
                { name: 'ced_empl', as: 'Cedula', visible: true },
                { name: 'fecha', as: 'Fecha', visible: true },
                { name: 'hora', as: 'Hora', visible: true },
                { name: 'id_ent', as: 'Id', visible: false }

            ],
            where: [],
            groupby: false,
            orderby: [],
            title: 'Busqueda de acta'
        };
        $scope.dataActa.where = [];


        $scope.closemodal = function () {
            $scope.openModaConfirmar = false;
        }

        $scope.aceptar = function () {


            if ($scope.radiotbnacta == '1') {
                $scope.tipo_acta = 1;
                $scope.id_acta = $scope.aux_acta_1;

            } else if ($scope.radiotbnacta == '2') {
                $scope.tipo_acta = 2;
                $scope.id_acta = $scope.aux_acta_2;
            }
            $scope.read_actasbyid();
        }

        $("#placa").keydown(function (event) {
            if (event.which == 13) {
                $timeout(function () {
                    if ($scope.json2.placa_af != '') {
                        Service.getCrud({ activo: $scope.json2.imei_inv }, "/Servicios.svc/ReadConsumibles").then(function (d) {
                            var rs = JSON.parse(d.data)[0];
                            var x = JSON.parse(d.data)[1];
                            if (rs != null) {
                                if (rs.estado != 0 || $scope.json.tipo != '1') {
                                    $scope.json2.elemento = rs.descripcion;
                                    $scope.json2.tipo = rs.tipo;
                                    $scope.json2.placa_af = rs.imei;
                                    $scope.json2.cantidad = 1;
                                    $scope.json2.marca = x.marca;
                                } else {
                                    alert("EL ACTIVO YA SE ENCUENTRA ASIGNADO");
                                }
                            } else {
                                $timeout(function () {
                                    document.getElementById("buscar_pro").click(); // Click on the checkbox
                                });
                            }
                        });
                    }
                });
            }
        });


        $scope.read_empresa = function (id_emp) {

            Service.getCrud({ id_emp: id_emp }, "/Servicios.svc/readempresa").then(function (d) {
                var rs = JSON.parse(d.data);

                $scope.ruta = "img/" + rs.ruta_logo;
                $scope.cod_emp = rs.codigo;
                $scope.nombre_empresa = rs.nombre;
                console.log("Entro aqui");
                console.log($scope.ruta);

            });
        }

        $scope.read_empresa_tras = function (id_emp) {

            Service.getCrud({ id_emp: id_emp }, "/Servicios.svc/readempresa").then(function (d) {
                var rs = JSON.parse(d.data);

                $scope.ruta_tras = "img/" + rs.ruta_logo;
                $scope.cod_emp_tras = rs.codigo;
                $scope.nombre_empresa_tras = rs.nombre;
            });
        }

        $scope.validar_obs = function (swicht, value) {
            if (swicht == 1) {
                if ($scope.json.observacion == undefined) {
                    $scope.json.observacion = value;
                } else {
                    $scope.json.observacion = $scope.json.observacion + ' ' + value;
                }
            } else if (swicht == 0) {
                var result = $scope.json.observacion.split(value);
                $scope.json.observacion = result[0].trim() + ' ' + result[1].trim();
            }




        }
    }
    function Reporte_Consu_Controller($scope, $q, Service, Auth, $timeout, ssDate) {
        $scope.json = {};

        Service.getCrud({}, "/Servicios.svc/preload_ccosto").then(function (d) {
            var rs = JSON.parse(d.data);
            $scope.centros = rs[0];
        });


        
        $scope.buscar_report = function () {
            $scope.openWaiting = true;
            Service.getCrud({ tipo: $scope.tipo_activo }, "/Servicios.svc/ReporteConsumibles").then(function (d) {
                var rs = JSON.parse(d.data);
                $scope.grilla = [];
                $scope.grillareport = [];
                $scope.grilla = rs;
                $scope.grillareport = rs;
                $scope.jsonexcel = {};
                $scope.jsonexcel = rs;
                $scope.openWaiting = false;
            });

        }




        $scope.rsActa = function (v) {
            var rs = JSON.parse(v);
            Service.getCrud({ ced_empl: rs.Cedula, fecha: rs.Fecha, hora: rs.Hora }, "/Servicios.svc/ReadActa_entrega").then(function (d) {
                var rs = JSON.parse(d.data)[0];
                var x = JSON.parse(d.data)[1];
                var y = JSON.parse(d.data)[2];
                var e = JSON.parse(d.data)[3];
                $scope.json = rs;
                $scope.table = [];
                $scope.table = x;
                $scope.json.tipo = 1;
                $scope.cargo = y.cargo;
                $scope.ruta = "img/" + e.ruta_logo;
                $scope.cod_emp = e.codigo;
                //var f = ssDate.militodate(rs.fecha)
                //$scope.json.fecha = ssDate.dateToString(f, 'dd-MM-yyyy');
                $scope.json.nombre_completo = y.nombre + " " + y.snombre + " " + y.ppellido + " " + y.spellido;
                $scope.ccosto = y.ccosto;
                Service.getCrud({ id_autoriza: $scope.json.autoriza }, "/Servicios.svc/validatejefe").then(function (d) {
                    var rs = JSON.parse(d.data);
                    $scope.jefe_inmediato = rs.nombre;
                    $timeout(function () {
                        $('#menu').addClass("ss-nav-inactive");
                        $('#wrapper').addClass("ss-full-view");
                        window.print();
                    }, 2000);
                });


            });
        };
        $scope.dataActa = {
            id: 'dataBuscador',
            component: [{ id: 'acta-buscar', type: 'btn' }],
            table: 'entregas',
            column: [
                { name: 'ced_empl', as: 'Cedula', visible: true },
                { name: 'fecha', as: 'Fecha', visible: true },
                { name: 'hora', as: 'Hora', visible: true },
                { name: 'id_ent', as: 'Id', visible: false }

            ],
            where: [],
            groupby: false,
            orderby: [],
            title: 'Busqueda de acta'
        };
        $scope.dataActa.where = [];

        $scope.buscar_acta = function (item) {
            $scope.dataActa.where = [];
            $scope.dataActa.where.push({ col: "ced_empl", filter: "='" + item.Cedula + "'", join: '' });
            $timeout(function () {
                document.getElementById("acta-buscar").click(); // Click on the checkbox
            });
        }

        $scope.JSONToCSVConvertor = function (JSONData, ReportTitle, ShowLabel) {

            //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
            var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;

            var CSV = '';
            //Set Report title in first row or line

            CSV += ReportTitle + '\r\n\n';

            //This condition will generate the Label/Header
            if (ShowLabel) {
                var row = "";

                //This loop will extract the label from 1st index of on array
                for (var index in arrData[0]) {

                    //Now convert each value to string and comma-seprated
                    row += index + ',';
                }

                row = row.slice(0, -1);

                //append Label row with line break
                CSV += row + '\r\n';
            }

            //1st loop is to extract each row
            for (var i = 0; i < arrData.length; i++) {
                var row2 = "";

                //2nd loop will extract each column and convert it in string comma-seprated
                for (var index1 in arrData[i]) {
                    row2 += '"' + arrData[i][index1] + '",';
                }

                row2.slice(0, row2.length - 1);

                //add a line break after each row
                CSV += row2 + '\r\n';
            }

            if (CSV == '') {
                alert("Invalid data");
                return;
            }
            //FECHA ACTUAL
            var fecha = ssDate.dateToString(Date.now(), 'yyyy-MM-dd');

            //Generate a file name
            var fileName = "Descarga_" + fecha;
            //this will remove the blank-spaces from the title and replace it with an underscore
            fileName += ReportTitle.replace(/ /g, "_");

            //Initialize file format you want csv or xls
            var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);

            // Now the little tricky part.
            // you can use either>> window.open(uri);
            // but this will not work in some browsers
            // or you will not get the correct file extension    

            //this trick will generate a temp <a /> tag
            var link = document.createElement("a");
            link.href = uri;

            //set the visibility hidden so it will not effect on your web-layout
            link.style = "visibility:true";
            link.download = fileName + ".csv";

            //this part will append the anchor tag and remove it after automatic click
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        $scope.fnExcelReport = function () {
            $scope.grillareport.forEach(function (item, index) {
                if (item.Causacion != '/Date(-62135578800000)/') {
                    item.Causacion = $scope.convert(item.Causacion);
                } else {
                    item.Causacion = "";
                }
                if (item.Fecha_estado != '/Date(-62135578800000)/') {
                    item.Fecha_estado = $scope.convert(item.Fecha_estado);
                } else {
                    item.Fecha_estado = "";
                }
            });
            $scope.JSONToCSVConvertor($scope.jsonexcel, "", true);
        }

        // JSON to CSV Converter
        $scope.ConvertToCSV = function (tabla) {
            var array = typeof tabla != 'object' ? JSON.parse(tabla) : tabla;
            var str = '';

            for (var i = 0; i < array.length; i++) {
                var line = '';
                for (var index in array[i]) {
                    if (line != '') line += ';'

                    line += array[i][index];
                }

                str += line + '\r\n';
            }
            $scope.resultcvs = str;
        }

        // Example


        // Create Object
        var items = [
            { name: "Item 1", color: "Green", size: "X-Large" },
            { name: "Item 2", color: "Green", size: "X-Large" },
            { name: "Item 3", color: "Green", size: "X-Large" }];

        // Convert Object to JSON
        var jsonObject = JSON.stringify(items);

        $scope.convert = function (x) {
            if (x != '/Date(-62135578800000)/') {
                var aux = ssDate.militodate(x);
                return ssDate.dateToString(aux, 'dd-MM-yyyy');

            }
        }

        $scope.read_devolucion = function (v) {
            var rs = JSON.parse(v);
            Service.getCrud({ ced_empl: rs.Cedula, fecha: rs.Fecha, hora: rs.Hora }, "/Servicios.svc/ReadActa_devolucion").then(function (d) {
                var rs = JSON.parse(d.data)[0];
                var x = JSON.parse(d.data)[1];
                var y = JSON.parse(d.data)[2];
                var e = JSON.parse(d.data)[3];
                $scope.json = rs;
                $scope.table = [];
                $scope.table = x;
                $scope.json.tipo = 1;
                $scope.cargo = y.cargo;
                $scope.ruta = "img/" + e.ruta_logo;
                $scope.cod_emp = e.codigo;
                var f = ssDate.militodate(rs.fecha)
                $scope.json.fecha = ssDate.dateToString(f, 'dd-MM-yyyy');
                $scope.json.nombre_completo = y.nombre + " " + y.snombre + " " + y.ppellido + " " + y.spellido;
                $scope.ccosto = y.ccosto;
                if ($scope.json.autoriza == 1) {
                    $scope.jefe_inmediato = "LUIS EMILIO";
                } else if ($scope.json.autoriza == 2) {
                    $scope.jefe_inmediato = "ANGELA FIGUEROA";
                } else if ($scope.json.autoriza == 3) {
                    $scope.jefe_inmediato = "INDIRA PRADA";
                }
                else if ($scope.json.autoriza == 5) {
                    $scope.jefe_inmediato = "MONICA CONTRERAS";
                }
                $timeout(function () {
                    $('#menu').addClass("ss-nav-inactive");
                    $('#wrapper').addClass("ss-full-view");
                    window.print();
                }, 2000);

            });
        };

    }
    function Reporte_Devoluciones_Controller($scope, $q, Service, Auth, $timeout, ssDate) {
        
        $scope.json = {};
        $scope.openWaiting = false;
        $scope.query = "select CONCAT (empleado.nombre,' ',snombre,' ',ppellido,' ',spellido) AS nombre, devoluciones.id_dev,ced_empl,fecha,hora from devoluciones inner join empleado  on cedula_emp = ced_empl group by empleado.nombre,snombre,ppellido,spellido, devoluciones.id_dev,ced_empl,fecha,hora";
        $scope.buscar_report = function () {
            $scope.openWaiting = true;
            Service.getCrud({ query: $scope.query }, "/Servicios.svc/consulta").then(function (d) {
                var rs = JSON.parse(d.data);
                $scope.grilla = [];
                $scope.grilla = rs;
                $scope.openWaiting = false;
            });

        }


        $scope.buscar_report();


        $scope.convert = function (x) {
            if (x != '/Date(-62135578800000)/') {
                var aux = ssDate.militodate(x);
                return ssDate.dateToString(aux, 'dd-MM-yyyy');

            }
        }

        $scope.buscar_acta = function (item) {
            $scope.openWaiting = true;
            Service.getCrud({ id: item.id_dev }, "/Servicios.svc/ReadActa_devolucion").then(function (d) {
                var rs = JSON.parse(d.data)[0];
                var x = JSON.parse(d.data)[1];
                var y = JSON.parse(d.data)[2];
                var e = JSON.parse(d.data)[3];
                $scope.json = rs;
                $scope.table = [];
                $scope.table = x;
                $scope.json.tipo = rs.tipo_acta;
                $scope.cargo = y.cargo;
                $scope.ruta = "img/" + e.ruta_logo;
                $scope.cod_emp = e.codigo;
                var f = ssDate.militodate(rs.fecha)
                $scope.json.fecha = ssDate.dateToString(f, 'dd-MM-yyyy');
                $scope.json.nombre_completo = y.nombre + " " + y.snombre + " " + y.ppellido + " " + y.spellido;
                $scope.ccosto = y.ccosto;
                Service.getCrud({ id_autoriza: $scope.json.autoriza }, "/Servicios.svc/validatejefe").then(function (d) {
                    var rs = JSON.parse(d.data);
                    $scope.jefe_inmediato = rs.nombre;
                });
                $timeout(function () {
                    $('#menu').addClass("ss-nav-inactive");
                    $('#wrapper').addClass("ss-full-view");
                    window.print();
                    $scope.openWaiting = false;
                }, 2000);

            });
        }




    }
    function Reportehurtos($scope, $q, Service, Auth, $timeout, ssDate) {
        $scope.json = {};
        $scope.openWaiting = false;


        $scope.buscar_hurtos = function () {
            if ($scope.fecha_inicio != undefined && $scope.fecha_fin) {
                var fechaini = ssDate.dateToString($scope.fecha_inicio, 'yyyy-MM-dd');
                var fechafin = ssDate.dateToString($scope.fecha_fin, 'yyyy-MM-dd');
                $scope.query = "select descripcion,af,imei,ac.area,fecha_estado from objeto o INNER JOIN area_ccosto as ac on o.centro_costo = ac.ccosto where fecha_estado BETWEEN '" + fechaini + "' AND '" + fechafin + "' and o.estado = 4"
                console.log($scope.query);
                Service.getCrud({ query: $scope.query }, "/Servicios.svc/consulta").then(function (d) {
                    var rs = JSON.parse(d.data);
                    if (rs.length > 0) {
                        $scope.grilla = [];
                        $scope.grilla = rs;
                        $scope.grilla.forEach(function (item, index) {
                            $scope.query = "select top 1 CONCAT(nombre,' ',snombre,' ',ppellido,' ',spellido) as usuario from detalle_entrega as de INNER JOIN entregas as e on de.id_ent = e.id_ent INNER JOIN empleado as emp on e.ced_empl = emp.cedula_emp where imei_inv ='" + item.imei + "' order by fecha  desc";
                            Service.getCrud({ query: $scope.query }, "/Servicios.svc/consulta").then(function (d) {
                                var result = JSON.parse(d.data);
                                item.usuario = result.usuario;
                            });
                        });
                        $scope.openWaiting = false;
                    } else {
                        $scope.openWaiting = false;
                        alert("NO SE ENCONTRARON REGISTROS EN LA BASE DE DATOS");
                    }
                });
            } else {
                alert("DEBE SELECCIONAR UN RANGO DE FECHAS");
            }
        }


        $scope.convert = function (x) {
            var res = x.split(" ");
            return res[0];
        }

    }
    function DecuentosController($scope, $q, Service, Auth, $timeout, ssDate) {
        $scope.json = {};
        $scope.msj = '';
        $scope.cod_user = Auth.getUserObj().codigo;
        $scope.log_user = Auth.getUserObj().username;
        $scope.key = { value: '' };
        $scope.key1 = { value: '' };
        $scope.openWaiting = false;
        /*CONFIG BUSQUEDA RAPIDA*/
        $scope.nuevo = function () {
            $scope.json = {};
            $scope.json.fecha = new Date();
        }

        Service.getCrud({}, "/Servicios.svc/PreloadEmpresa").then(function (d) {
            $scope.empresa = JSON.parse(d.data)[0];

        });

        /*BARRA*/
        $scope.showbtn = { buscar: true, imprimir: false, nuevo: true, editar: true, eliminar: true, cerrar: false };
        $scope.disabledbtn = { buscar: false, imprimir: false, nuevo: false, editar: true, eliminar: true };


        /*CRUD*/
        $scope.guardar = function () {

            var defender = $q.defer();
            var promise = defender.promise;
            if (!$scope.descuentos.$valid) {
                var cr = "Campos requeridos no diligenciados:";
                $scope.descuentos.$error.required.forEach(function (item, index) {
                    cr += "\n - " + item.$name;
                });
                alert(cr);
                defender.resolve(false);
                return promise;
            } else {
                $timeout(function () {
                    try {
                        var rs = false;
                        $scope.json.usuario = Auth.getUserObj().username;
                        $scope.json.valor_letras = $scope.numtoleters($scope.json.valor);
                        $scope.json.fech = ssDate.dateToString($scope.json.fecha, 'dd-MM-yyyy');
                        Service.getCrud({ json: angular.toJson($scope.json) }, '/Servicios.svc/Createdescuento').then(function (d) {
                            rs = JSON.parse(d.data);
                            $scope.imprimir();
                            defender.resolve(rs);
                        });
                    } catch (e) {
                        defender.reject(e);
                    }


                });
            }
            return promise;

        };
        $scope.actualizar = function () {
            var defender = $q.defer();
            var promise = defender.promise;
            if (!$scope.empleados.$valid) {
                var cr = "Campos requeridos no diligenciados";
                $scope.empleados.$error.required.forEach(function (item, index) {
                    cr += "\n - " + item.$name;
                });
                alert(cr);
                defender.resolve(false);
                return promise;
            } else {
                $timeout(function () {
                    try {
                        var rs = false;
                        Service.getCrud({ json: angular.toJson($scope.json) }, "/Servicios.svc/UpdateEmpleados").then(function (d) {
                            rs = JSON.parse(d.data);
                            defender.resolve(rs);

                        });
                    } catch (e) {

                        defender.reject(e);

                    }
                });
            }
            return promise;
        };
        $scope.eliminar = function () {
            var defender = $q.defer();
            var promise = defender.promise;
            $timeout(function () {
                try {
                    var rs = false;
                    Service.getCrud({ id: parseInt($scope.id) }, "/Salud.svc/DeleteEmpleados").then(function (d) {
                        rs = JSON.parse(d.data);
                        defender.resolve(rs);
                    });
                } catch (e) {
                    defender.reject(e);
                }
            });
            return promise;
        };
        $scope.editar = function () {
            $("#ced").prop("disabled", true);
            $("#pnombre").prop("disabled", true);
            $("#snombre").prop("disabled", true);
            $("#ppellido").prop("disabled", true);
            $("#spellido").prop("disabled", true);
        }

        $scope.rsEmpleado = function (v) {
            $scope.id = JSON.parse(v).id;
            console.log($scope.id);
            if ($scope.id != '' && $scope.id != null) {
                Service.getCrud({ id: parseInt($scope.id) }, "/Servicios.svc/ReadEmpleados").then(function (d) {
                    var rs = JSON.parse(d.data);
                    $scope.json.cedula = parseInt(rs.cedula_emp);
                    $scope.json.empresa = rs.empresa;
                    $scope.json.nombre = rs.nombre + " " + rs.snombre + " " + rs.ppellido + " " + rs.spellido;
                    $scope.disabledbtn.eliminar = false;
                    $scope.disabledbtn.editar = false;
                });
            }
        };
        $scope.dataEmpleado = {
            id: 'dataBuscador',
            component: [{ id: 'empleados-buscar', type: 'btn' }],
            table: 'empleado',
            column: [
                { name: 'cedula_emp', as: 'Cedula', visible: true },
                { name: 'nombre', as: 'Nombre', visible: true },
                { name: 'snombre', as: 'S_Nombre', visible: true },
                { name: 'ppellido', as: 'P_Apellido', visible: true },
                { name: 'spellido', as: 'S_Apellido', visible: true },
                { name: 'area', as: 'Area', visible: false },
                { name: 'id', as: 'id', visible: false },
                //{ name: 'cargo', as: 'Cargo', visible: false },

            ],
            where: [],
            groupby: false,
            orderby: [],
            title: 'Busqueda de Empleados'
        };
        //$scope.dataEmpleado.where.push({ col: "usu_id", filter: "='" + $scope.json.usu_id + "'", join: '' });

        $scope.Validate_empresa = function () {
            if ($scope.json.cedula_emp != '' && $scope.json.cedula_emp != undefined) {
                Service.getCrud({ cedula: $scope.json.cedula_emp }, "/Servicios.svc/Validateempresa").then(function (d) {
                    if (d.data == 'true') {
                        $scope.json.cedula_emp = '';
                        alert('El empleado ya existe, por favor ingrese uno nuevo');
                    }
                });
            }
        }

        /*CONFIG BUSQUEDA RAPIDA*/
        $scope.dataArticulos = {
            id: 'buscadorArt',
            component: [{ id: 'brArt', type: '' }],
            table: 'objeto',
            column: [
                { name: 'rtrim(ltrim(imei))', as: 'IMEI', visible: true },
                { name: 'rtrim(ltrim(descripcion))', as: 'DESCRIPCION', visible: true },

            ],
            where: {},
            groupby: true,
            orderby: [],
            title: 'Buscar Articulo',
            required: true
        };
        $scope.rsArticulos = function (d) {
            var j = JSON.parse(d);
            $scope.json.imei_articulo = j.IMEI;

        }


        function Unidades(num) {

            switch (num) {
                case 1: return "UN";
                case 2: return "DOS";
                case 3: return "TRES";
                case 4: return "CUATRO";
                case 5: return "CINCO";
                case 6: return "SEIS";
                case 7: return "SIETE";
                case 8: return "OCHO";
                case 9: return "NUEVE";
            }

            return "";
        }//Unidades()

        function Decenas(num) {

            var decena = Math.floor(num / 10);
            var unidad = num - (decena * 10);

            switch (decena) {
                case 1:
                    switch (unidad) {
                        case 0: return "DIEZ";
                        case 1: return "ONCE";
                        case 2: return "DOCE";
                        case 3: return "TRECE";
                        case 4: return "CATORCE";
                        case 5: return "QUINCE";
                        default: return "DIECI" + Unidades(unidad);
                    }
                case 2:
                    switch (unidad) {
                        case 0: return "VEINTE";
                        default: return "VEINTI" + Unidades(unidad);
                    }
                case 3: return DecenasY("TREINTA", unidad);
                case 4: return DecenasY("CUARENTA", unidad);
                case 5: return DecenasY("CINCUENTA", unidad);
                case 6: return DecenasY("SESENTA", unidad);
                case 7: return DecenasY("SETENTA", unidad);
                case 8: return DecenasY("OCHENTA", unidad);
                case 9: return DecenasY("NOVENTA", unidad);
                case 0: return Unidades(unidad);
            }
        }//Unidades()

        function DecenasY(strSin, numUnidades) {
            if (numUnidades > 0)
                return strSin + " Y " + Unidades(numUnidades)

            return strSin;
        }//DecenasY()

        function Centenas(num) {
            var centenas = Math.floor(num / 100);
            var decenas = num - (centenas * 100);

            switch (centenas) {
                case 1:
                    if (decenas > 0)
                        return "CIENTO " + Decenas(decenas);
                    return "CIEN";
                case 2: return "DOSCIENTOS " + Decenas(decenas);
                case 3: return "TRESCIENTOS " + Decenas(decenas);
                case 4: return "CUATROCIENTOS " + Decenas(decenas);
                case 5: return "QUINIENTOS " + Decenas(decenas);
                case 6: return "SEISCIENTOS " + Decenas(decenas);
                case 7: return "SETECIENTOS " + Decenas(decenas);
                case 8: return "OCHOCIENTOS " + Decenas(decenas);
                case 9: return "NOVECIENTOS " + Decenas(decenas);
            }

            return Decenas(decenas);
        }//Centenas()

        function Seccion(num, divisor, strSingular, strPlural) {
            var cientos = Math.floor(num / divisor)
            var resto = num - (cientos * divisor)

            var letras = "";

            if (cientos > 0)
                if (cientos > 1)
                    letras = Centenas(cientos) + " " + strPlural;
                else
                    letras = strSingular;

            if (resto > 0)
                letras += "";

            return letras;
        }//Seccion()

        function Miles(num) {
            var divisor = 1000;
            var cientos = Math.floor(num / divisor)
            var resto = num - (cientos * divisor)

            var strMiles = Seccion(num, divisor, "UN MIL", "MIL");
            var strCentenas = Centenas(resto);

            if (strMiles == "")
                return strCentenas;

            return strMiles + " " + strCentenas;
        }//Miles()

        function Millones(num) {
            var divisor = 1000000;
            var cientos = Math.floor(num / divisor)
            var resto = num - (cientos * divisor)

            var strMillones = Seccion(num, divisor, "UN MILLON DE", "MILLONES DE");
            var strMiles = Miles(resto);

            if (strMillones == "")
                return strMiles;

            return strMillones + " " + strMiles;
        }//Millones()

        $scope.numtoleters = function (num) {
            var data = {
                numero: num,
                enteros: Math.floor(num),
                centavos: (((Math.round(num * 100)) - (Math.floor(num) * 100))),
                letrasCentavos: "",
                letrasMonedaPlural: 'PESOS',//"PESOS", 'D�lares', 'Bol�vares', 'etcs'
                letrasMonedaSingular: 'PESO', //"PESO", 'D�lar', 'Bolivar', 'etc'

                letrasMonedaCentavoPlural: "CENTAVOS",
                letrasMonedaCentavoSingular: "CENTAVO"
            };

            if (data.centavos > 0) {
                data.letrasCentavos = "CON " + (function () {
                    if (data.centavos == 1)
                        return Millones(data.centavos) + " " + data.letrasMonedaCentavoSingular;
                    else
                        return Millones(data.centavos) + " " + data.letrasMonedaCentavoPlural;
                })();
            };

            if (data.enteros == 0)
                return "CERO " + data.letrasMonedaPlural + " " + data.letrasCentavos;
            if (data.enteros == 1)
                return Millones(data.enteros) + " " + data.letrasMonedaSingular + " " + data.letrasCentavos;
            else
                return Millones(data.enteros) + " " + data.letrasMonedaPlural + " " + data.letrasCentavos;
        }//NumeroALetras()


        $scope.imprimir = function () {

            $scope.empresa.forEach(function (item, index) {
                if ($scope.json.empresa == item.id) {
                    $scope.name_empresa = item.nombre;
                    $timeout(function () {
                        $('#menu').addClass("ss-nav-inactive");
                        $('#wrapper').addClass("ss-full-view");
                        window.print();
                    });
                }

            })


        }
    }
    function HvController($scope, $q, Service, Auth, $timeout, ssDate) {
        $scope.json = {};
        $scope.openWaiting = false;
        $scope.key = { value: '' };

        /*BARRA*/
        $scope.showbtn = { buscar: true, imprimir: false, nuevo: true, editar: true, eliminar: true, cerrar: false };
        $scope.disabledbtn = { buscar: false, imprimir: false, nuevo: false, editar: true, eliminar: true };


        $scope.convert = function (x) {
            var res = x.split(" ");
            return res[0];
        }


        /*CONFIG BUSQUEDA RAPIDA ARTICULOS*/
        $scope.dataequipos = {
            id: 'buscadorequipos',
            component: [{ id: 'brArt', type: '' }],
            table: 'objeto',
            column: [
                { name: 'rtrim(ltrim(af))', as: 'NoInv', visible: true },
                { name: 'rtrim(ltrim(descripcion))', as: 'Descripcion', visible: true },
                { name: 'rtrim(ltrim(imei))', as: 'Serial', visible: true },

            ],
            where: {},
            groupby: true,
            orderby: [],
            title: 'Buscar Articulo',
            required: true
        };
        $scope.rsequipos = function (d) {
            var j = JSON.parse(d);
            $scope.json.No_inventario = j.NoInv;

        }



        /*CRUD*/
        $scope.guardar = function () {

            var defender = $q.defer();
            var promise = defender.promise;
            if (!$scope.hvequipos.$valid) {
                var cr = "Campos requeridos no diligenciados:";
                $scope.hvequipos.$error.required.forEach(function (item, index) {
                    cr += "\n - " + item.$name;
                });
                alert(cr);
                defender.resolve(false);
                return promise;
            } else {
                $timeout(function () {
                    try {
                        var rs = false;
                        Service.getCrud({ json: angular.toJson($scope.json) }, '/Servicios.svc/Create_hv_equipos').then(function (d) {
                            rs = JSON.parse(d.data);
                            defender.resolve(rs);
                        });
                    } catch (e) {
                        defender.reject(e);
                    }


                });
            }
            return promise;

        };


    }
    function hvequiposcontroller($scope, $q, Service, Auth, $timeout, ssDate) {
        $scope.json = {};
        $scope.json2 = {};
        $scope.sh_add = false;
        $scope.tabla = [];
        $scope.grillaInspecciones = [];

        /*BARRA*/
        $scope.showbtn = { buscar: true, imprimir: true, nuevo: false, editar: true, eliminar: true, cerrar: false };
        $scope.disabledbtn = { buscar: false, imprimir: false, nuevo: false, editar: false, eliminar: true };


        if (sessionStorage.length != 0) {
            console.log(sessionStorage);
            Service.getCrud({ codigo: sessionStorage.Codigo, serial: sessionStorage.Serial, tipo: sessionStorage.Tipo }, "/Servicios.svc/readequipoalt").then(function (d) {
                var rs = JSON.parse(d.data);
                console.log(rs);
                $scope.json = rs[0];
                $scope.json.codigo = $scope.json.codigo + "";
                if ($scope.json.f_compra != null) {
                    $scope.json.f_compra = ssDate.militodate($scope.json.f_compra);
                }
                $scope.tabla = rs[2];
                $scope.json.observaciones = rs[0].observaciones;
                $scope.grillaInspecciones = rs[1];
                $scope.validate_hv();
                sessionStorage.clear();
            });
        }

        $scope.nuevo = function () {
            $scope.json = {};
            $scope.json2 = {};
            $scope.sh_add = false;
            $scope.tabla = [];
            $scope.grillaInspecciones = [];
            $scope.sh_add = true;
        }

        $scope.validate_hv = function () {
            Service.getCrud({ codigo: $scope.json.codigo, serial: $scope.json.serial, tipo: $scope.json.tipo,id:$scope.json.id, lote: $scope.json.lote }, "/Servicios.svc/validatehv").then(function (d) {
                var rs = JSON.parse(d.data);
                $scope.tabla = [];
                if (rs[1] == 1) {
                    var aux = {};
                    aux.cedula = rs[0].cedula_emp;
                    aux.nombre = rs[0].nombre + " " + rs[0].snombre + " " + rs[0].ppellido + " " + rs[0].spellido;
                    aux.cargo = rs[0].cargo;
                    aux.f_entrega = '';
                    aux.f_devolucion = '';
                    $scope.tabla.push(aux);
                } else if (rs[1] == 0) {
                    rs[0].forEach(function (item, index) {
                        var aux = {};
                        aux.cedula = item.cedula;
                        aux.nombre = item.nombre;
                        aux.cargo = item.cargo;
                        if (item.f_entrega != '' && item.f_entrega != null) {
                            var f_aux = ssDate.militodate(item.f_entrega);
                            aux.f_entrega = ssDate.dateToString(f_aux, 'dd-MM-yyyy');
                        } else {
                            aux.f_entrega = item.f_entrega;
                        }
                        //CONVERSION FECHAS DEVOLUCION
                        if (item.f_devolucion != '' && item.f_devolucion != null) {
                            var f_dev = ssDate.militodate(item.f_devolucion);
                            aux.f_devolucion = ssDate.dateToString(f_dev, 'dd-MM-yyyy');
                        } else {
                            aux.f_devolucion = item.f_devolucion;
                        }
                        $scope.tabla.push(aux);
                    });
                }

            });
        }
        $scope.readequiposalt = function (codigo, serial, tipo,ID,lote) {
            Service.getCrud({ codigo: codigo, serial: serial, tipo: tipo, id: ID,lote: lote }, "/Servicios.svc/readequipoalt").then(function (d) {
                var rs = JSON.parse(d.data);
                //$scope.json = rs[0];
                //$scope.json.codigo = $scope.json.codigo + "";
                if ($scope.json.f_compra != null) {
                    $scope.json.f_compra = ssDate.militodate($scope.json.f_compra);
                }
                //if ($scope.json.F_prox_inspec != null) {
                //    $scope.json.F_prox_inspec = ssDate.militodate($scope.json.F_prox_inspec);
                //}
                //$scope.json.f_fabricacion = rs[0].mes_fabricacion + "/" + rs[0].ano_fabricacion;
                //$scope.json.observaciones = rs[0].observaciones;
                $scope.grillaInspecciones = rs[1];
                sessionStorage.clear();
            });
        }

        $scope.editar = function () {
            $scope.sh_add = true;
            $scope.sh_edit = true;
        }


        /*OBJETO PARA ENTREGA*/
        //$scope.dataBuscador_objeto = {
        //    id: 'buscadorobject',
        //    component: [{ id: 'buscar_obj', type: 'btn' }],
        //    table: 'bodegasst',
        //    column: [
        //        { name: 'rtrim(ltrim(bodegasst.codigo))', as: 'CODIGO', visible: true },
        //        { name: 'rtrim(ltrim(bodegasst.marca))', as: 'MARCA', visible: true },
        //        { name: 'rtrim(ltrim(bodegasst.serial))', as: 'SERIAL', visible: true },
        //        { name: 'rtrim(ltrim(bodegasst.proveedor))', as: 'PROVEEDOR', visible: true },
        //        { name: 'rtrim(ltrim(bodegasst.lote))', as: 'LOTE', visible: false },
        //        { name: 'rtrim(ltrim(bodegasst.mes_fabricacion))', as: 'MES_FABRI', visible: false },
        //        { name: 'rtrim(ltrim(bodegasst.ano_fabricacion))', as: 'ANO_FABRI', visible: false },
        //        { name: 'rtrim(ltrim(bodegasst.f_compra))', as: 'FECHA_COMPRA', visible: false },
        //        { name: 'rtrim(ltrim(bodegasst.referencia))', as: 'REFERENCIAS', visible: false },
        //        { name: 'rtrim(ltrim(bodegasst.tipo))', as: 'Tipo', visible: false },
        //    ],
        //    inner_join: [],
        //    where: [],
        //    orderby: [],
        //    groupby: true,
        //    title: 'Buscar Articulo',

        //};
        //$scope.resultado_objeto = function (d) {
        //    var j = JSON.parse(d);
        //    $scope.json.codigo = j.CODIGO;
        //    $scope.json.marca = j.MARCA;
        //    $scope.json.proveedor = j.PROVEEDOR;
        //    $scope.json.referencia = j.REFERENCIAS;
        //    $scope.json.serial = j.SERIAL;
        //    $scope.json.lote = j.LOTE;
        //    $scope.readequiposalt(J.CODIGO, J.SERIAL, $scope.tipo_equip);
        //    $scope.validate_hv();

        //}

        $scope.buscar_cod = function () {
            if ($scope.json.tipo != undefined & $scope.json.tipo != '' & $scope.json.tipo != null) {
                $timeout(function () {
                    document.getElementById("buscar_obj").click(); // Click on the checkbox
                    $scope.dataBuscador_objeto.where = [];
                    $scope.dataBuscador_objeto.where.push({ col: "tipo", filter: "='" + $scope.json.tipo + "'", join: '' }, { col: " and  estado", filter: "='1'", join: '' });
                });
            } else {
                alert("SELECCIONE EL TIPO DE EQUIPO")
            }

        }
        $scope.buscar_ced = function () {
            if ($scope.json.codigo != undefined & $scope.json.codigo != '' & $scope.json.codigo != null) {
                $timeout(function () {
                    document.getElementById("empleados").click(); // Click on the checkbox
                });
            } else {
                alert("SELECCIONE EL EQUIPO")
            }
        }

        $scope.actualizar = function () {
            var defender = $q.defer();
            var promise = defender.promise;
            $timeout(function () {
                try {
                    var rs = false;
                    $scope.tabla.forEach(function (item, index) {
                        if (item.f_entrega == null) {
                            item.f_entrega = "";
                        }
                        if (item.f_devolucion == null) {
                            item.f_devolucion = "";
                        }
                    })
                    Service.getCrud({ json: angular.toJson($scope.json), grilla: angular.toJson($scope.tabla) }, "/Servicios.svc/UpdateHv_equipos").then(function (d) {
                        rs = JSON.parse(d.data);
                        defender.resolve(rs);
                        $scope.disabledbtn.imprimir = false;
                        $scope.disabledbtn.editar = true;
                    });
                } catch (e) {
                    defender.reject(e);
                }
            });



            return promise;
        }


        /*CRUD*/
        $scope.guardar = function () {
            var defender = $q.defer();
            var promise = defender.promise;
            if (!$scope.hvaltura.$valid) {
                var cr = "Campos requeridos no diligenciados:";
                $scope.hvaltura.$error.required.forEach(function (item, index) {
                    cr += "\n - " + item.$name;
                });
                alert(cr);
                defender.resolve(false);
                return promise;
            } else {
                $timeout(function () {
                    try {
                        var rs = false;

                        Service.getCrud({ json: angular.toJson($scope.json), json2: angular.toJson($scope.grilla) }, '/Servicios.svc/Create_HV_Altura').then(function (d) {
                            rs = JSON.parse(d.data);
                            defender.resolve(rs);
                        });
                    } catch (e) {
                        defender.reject(e);
                    }


                });
            }
            return promise;

        };



        $scope.rsEmpleado = function (v) {
            $scope.id = JSON.parse(v).id;
            if ($scope.id != '' && $scope.id != null) {
                Service.getCrud({ id: parseInt($scope.id) }, "/Servicios.svc/ReadEmpleados").then(function (d) {
                    var rs = JSON.parse(d.data);
                    $scope.json2.cedula = parseInt(rs.cedula_emp);
                    $scope.json2.nombre = rs.nombre + " " + rs.snombre + " " + rs.ppellido + " " + rs.spellido;
                    $scope.json2.cargo = rs.cargo;
                    $scope.disabledbtn.eliminar = false;
                    $scope.disabledbtn.editar = false;
                });
            }
        };
        $scope.dataEmpleado = {
            id: 'dataBuscador',
            component: [{ id: 'empleados', type: 'btn' }],
            table: 'empleado',
            column: [
                { name: 'id', as: 'id', visible: false },
                { name: 'cedula_emp', as: 'Cedula', visible: true },
                { name: 'nombre', as: 'Nombre', visible: true },
                { name: 'snombre', as: 'S_Nombre', visible: true },
                { name: 'ppellido', as: 'P_Apellido', visible: true },
                { name: 'spellido', as: 'S_Apellido', visible: true },
                { name: 'area', as: 'Area', visible: false },
                //{ name: 'cargo', as: 'Cargo', visible: false },

            ],
            where: [],
            groupby: false,
            orderby: [],
            title: 'Busqueda de Empleados'
        };

        /////////////////

        $scope.buscar = function () {
            $scope.openModalPRO = true;
        }

        $scope.datahvequipo = {
            id: 'dataBuscador',
            component: [{ id: 'hvaltura', type: 'btn' }],
            table: 'empleado',
            column: [
                { name: 'id', as: 'id', visible: false },
                { name: 'cedula_emp', as: 'Cedula', visible: true },
                { name: 'nombre', as: 'Nombre', visible: true },
                { name: 'snombre', as: 'S_Nombre', visible: true },
                { name: 'ppellido', as: 'P_Apellido', visible: true },
                { name: 'spellido', as: 'S_Apellido', visible: true },
                { name: 'area', as: 'Area', visible: false },
                //{ name: 'cargo', as: 'Cargo', visible: false },

            ],
            where: [],
            groupby: false,
            orderby: [],
            title: 'Busqueda de Empleados'
        };
        $scope.rshvequipo = function (v) {
            $scope.id = JSON.parse(v).id;
            if ($scope.id != '' && $scope.id != null) {
                Service.getCrud({ id: parseInt($scope.id) }, "/Servicios.svc/ReadEmpleados").then(function (d) {
                    var rs = JSON.parse(d.data);
                    $scope.json2.cedula = parseInt(rs.cedula_emp);
                    $scope.json2.nombre = rs.nombre + " " + rs.snombre + " " + rs.ppellido + " " + rs.spellido;
                    $scope.json2.cargo = rs.cargo;
                    $scope.disabledbtn.eliminar = false;
                    $scope.disabledbtn.editar = false;
                });
            }
        };

        $scope.convert = function (x) {
            //console.log(x, typeof x);
            //if (typeof x == "string") {
            //    if (x != '/Date(-62135578800000)/') {
            //        var aux = ssDate.militodate(x);
            //        return ssDate.dateToString(aux, 'dd-MM-yyyy');

            //    }
            //} else {
            //    return x;
            //}
            return x;
        }

        $scope.convertinspec = function (x) {
            console.log(x, typeof x);
            if (typeof x == "string") {
                if (x != '/Date(-62135578800000)/') {
                    var aux = ssDate.militodate(x);
                    return ssDate.dateToString(aux, 'dd-MM-yyyy');

                }
            } else {
                return x;
            }
        }


        //FUNCIONES DE LA TABLA

        $scope.add = function () {
            if ($scope.json2.f_entrega != undefined) {

                $scope.json2.f_entrega = ssDate.dateToString($scope.json2.f_entrega, 'dd-MM-yyyy');
            } else {
                $scope.json2.f_entrega = null;
            }
            if ($scope.json2.f_devolucion != undefined) {
                $scope.json2.f_devolucion = ssDate.dateToString($scope.json2.f_devolucion, 'dd-MM-yyyy');
            } else {
                $scope.json2.f_devolucion = null;
            }
            $scope.tabla.push($scope.json2);
            console.log($scope.tabla);
            $scope.json2 = {};

        }
        $scope.confir_edit = function () {
            if ($scope.json2.f_entrega != undefined) {

                $scope.json2.f_entrega = ssDate.dateToString($scope.json2.f_entrega, 'dd-MM-yyyy');
            } else {
                $scope.json2.f_entrega = null;
            }
            if ($scope.json2.f_devolucion != undefined) {
                $scope.json2.f_devolucion = ssDate.dateToString($scope.json2.f_devolucion, 'dd-MM-yyyy');
            } else {
                $scope.json2.f_devolucion = null;
            }
            $scope.json2 = {};
            $scope.sh_add = true;
            $scope.sh_update = false;
        }
        $scope.load_edit = function (item, index) {
            $scope.json2 = item;
            $scope.sh_add = false;
            $scope.sh_update = true;
            //$scope.tabla.forEach(function (it, id) {
            //    if (index == id) {
            //        it = item;
            //    }
            //})
        }
        $scope.deleteGrilla = function (index) {
            $scope.tabla.splice(index, 1);
        }
        $scope.$watch('tipo_equip', function (d) {
            if ($scope.tipo_equip != undefined) {
            $timeout(function () {
                document.getElementById("buscar_obj").click(); // Click on the checkbox
                if ($scope.openModalPRO == true) {
                    $scope.dataBuscador.where = [];
                    $scope.dataBuscador.where.push({ col: "tipo", filter: "='" + $scope.tipo_equip + "'", join: '' }, { col: " and  estado", filter: "='1'", join: '' });
                    $scope.json.tipo = $scope.tipo_equip;
                    $scope.openModalPRO = false;
                }
            });
            }
        });

        //BUSCARDOR
        $scope.dataBuscador = {
            id: 'buscadorobject',
            component: [{ id: 'hvaltura-buscar', type: 'btn' }],
            table: 'bodegasst',
            column: [
                { name: 'rtrim(ltrim(bodegasst.codigo))', as: 'CODIGO', visible: true },
                { name: 'rtrim(ltrim(bodegasst.marca))', as: 'MARCA', visible: true },
                { name: 'rtrim(ltrim(bodegasst.serial))', as: 'SERIAL', visible: true },
                { name: 'rtrim(ltrim(bodegasst.proveedor))', as: 'PROVEEDOR', visible: true },
                { name: 'rtrim(ltrim(bodegasst.lote))', as: 'LOTE', visible: false },
                { name: 'rtrim(ltrim(bodegasst.mes_fabricacion))', as: 'MES_FABRI', visible: false },
                { name: 'rtrim(ltrim(bodegasst.ano_fabricacion))', as: 'ANO_FABRI', visible: false },
                { name: 'rtrim(ltrim(bodegasst.f_compra))', as: 'FECHA_COMPRA', visible: false },
                { name: 'rtrim(ltrim(bodegasst.referencia))', as: 'REFERENCIAS', visible: false },
                { name: 'rtrim(ltrim(bodegasst.tipo))', as: 'Tipo', visible: false },
                { name: 'rtrim(ltrim(bodegasst.id))', as: 'ID', visible: false },
            ],
            inner_join: [],
            where: [],
            orderby: [],
            groupby: true,
            title: 'Buscar Articulo',

        };
        $scope.rsbuscador = function (d) {
            var j = JSON.parse(d);
            $scope.json.codigo = j.CODIGO;
            $scope.json.marca = j.MARCA;
            $scope.json.proveedor = j.PROVEEDOR;
            $scope.json.referencia = j.REFERENCIAS;
            $scope.json.f_fabricacion = j.MES_FABRI + "/" + j.ANO_FABRI;
            $scope.json.f_compra = j.FECHA_COMPRA;
            $scope.json.serial = j.SERIAL;
            $scope.json.lote = j.LOTE;
            $scope.json.id = j.ID;
            $scope.readequiposalt(j.CODIGO, j.SERIAL, $scope.tipo_equip, j.ID,j.LOTE);
            $scope.validate_hv();

        }

        
        $scope.imprimir = function () {
            $timeout(function () {

                $('#menu').addClass("ss-nav-inactive");
                $('#wrapper').addClass("ss-full-view");
                window.print();
            });
        }

        $scope.closePRO = function () {
            $scope.openModalPRO = false;
        }
    }
    function InspeccionesController($scope, $q, Service, Auth, $timeout, ssDate) {
        $scope.json = {};
        $scope.json2 = {};
        $scope.sh_add = false;
        $scope.grilla = [];
        console.log(Auth.getUserObj());
        $scope.key = { value: '' };
        $scope.key1 = { value: '' };
        $scope.openModalPRO = false;

        /*BARRA*/
        $scope.showbtn = { buscar: true, imprimir: true, nuevo: true, editar: false, eliminar: true, cerrar: false };
        $scope.disabledbtn = { buscar: false, imprimir: false, nuevo: false, editar: true, eliminar: true };

        $scope.nuevo = function () {
            $scope.sh_add = true;
            $scope.json.f_inspeccion = new Date();
            $scope.json.resp_inspeccion = Auth.getUserObj().nombre_usuario;
            $scope.json.ced_rp_insp = Auth.getUserObj().codigo;
        }

        /*CONFIG BUSQUEDA RAPIDA TECNICO 1 */
        $scope.dataTecnico1 = {
            id: 'buscadorNombre',
            component: [{ id: 'brTecnico1', type: '' }],
            table: 'empleado',
            column: [
                { name: 'rtrim(ltrim(CEDULA_EMP))', as: 'Cedula', visible: true },
                { name: 'rtrim(ltrim(NOMBRE))', as: 'Nombre', visible: true },
                { name: 'rtrim(ltrim(SNOMBRE))', as: 'S_Nombre', visible: true },
                { name: 'rtrim(ltrim(PPELLIDO))', as: 'Apellido', visible: true },
                { name: 'rtrim(ltrim(SPELLIDO))', as: 'S_Apellido', visible: true },
                { name: 'rtrim(ltrim(CARGO))', as: 'Cargo', visible: false },
                { name: 'rtrim(ltrim(CCOSTO))', as: 'Ccosto', visible: false },
                { name: 'rtrim(ltrim(EMPRESA))', as: 'Empresa', visible: false },
            ],
            where: {},
            groupby: true,
            orderby: [],
            title: 'Buscar tecnico 1',
            required_name: "NOMBRE DEL TECNICO"
        };
        $scope.rsTecnico1 = function (d) {
            var j = JSON.parse(d);
            $scope.cargo = j.Cargo;
            $scope.json.cedulatec1 = j.Cedula;
            $scope.json.nombre_completo1 = j.Nombre + ' ' + j.S_Nombre + ' ' + j.Apellido + ' ' + j.S_Apellido;
            $scope.ccosto2 = j.Ccosto;
        }

        /*CONFIG BUSQUEDA RAPIDA TECNICO 2*/
        $scope.dataTecnico2 = {
            id: 'buscadorNombre',
            component: [{ id: 'brTecnico2', type: '' }],
            table: 'empleado',
            column: [
                { name: 'rtrim(ltrim(CEDULA_EMP))', as: 'Cedula', visible: true },
                { name: 'rtrim(ltrim(NOMBRE))', as: 'Nombre', visible: true },
                { name: 'rtrim(ltrim(SNOMBRE))', as: 'S_Nombre', visible: true },
                { name: 'rtrim(ltrim(PPELLIDO))', as: 'Apellido', visible: true },
                { name: 'rtrim(ltrim(SPELLIDO))', as: 'S_Apellido', visible: true },
                { name: 'rtrim(ltrim(CARGO))', as: 'Cargo', visible: false },
                { name: 'rtrim(ltrim(CCOSTO))', as: 'Ccosto', visible: false },
                { name: 'rtrim(ltrim(EMPRESA))', as: 'Empresa', visible: false },
            ],
            where: {},
            groupby: true,
            orderby: [],
            title: 'Buscar tecnico 2',
            required_name: "TECNICO 2"
        };
        $scope.rsTecnico2 = function (d) {
            var j = JSON.parse(d);
            $scope.cargo = j.Cargo;
            $scope.json.cedulatec2 = j.Cedula;
            $scope.json.nombre_completo2 = j.Nombre + ' ' + j.S_Nombre + ' ' + j.Apellido + ' ' + j.S_Apellido;
            $scope.ccosto2 = j.Ccosto;
        }

        $scope.editar = function () {
            $scope.sh_add = true;
            $scope.sh_edit = true;
        }


        //BUSCADORES DE CODIGO

        $scope.validarcod = function (value, index, index_usuario) {
            $scope.json.indexbloque = index;
            document.getElementById("buscar_obj").click();
            $scope.dataBuscador_objeto.where = [];
            if (index_usuario == 1) {
                $scope.dataBuscador_objeto.where.push({ col: 'estado', filter: " = '1'", join: '' }, { col: ' and tipo', filter: " = '" + value + "'", join: '' }, { col: ' and cedula_asig', filter: " = '" + $scope.json.cedulatec1 + "'", join: '' });
            } else if (index_usuario == 2) {
                $scope.dataBuscador_objeto.where.push({ col: 'estado', filter: " = '1'", join: '' }, { col: ' and tipo', filter: " = '" + value + "'", join: '' }, { col: ' and cedula_asig', filter: " = '" + $scope.json.cedulatec2 + "'", join: '' });
            }
        }


        $scope.convert = function (x) {
            var res = x.split(" ");
            return res[0];
        }



        /*OBJETO PARA ENTREGA*/
        $scope.dataBuscador_objeto = {
            id: 'buscadorobject',
            component: [{ id: 'buscar_obj', type: 'btn' }],
            table: 'bodegasst',
            column: [
                { name: 'rtrim(ltrim(bodegasst.codigo))', as: 'CODIGO', visible: true },
                { name: 'rtrim(ltrim(bodegasst.serial))', as: 'SERIAL', visible: true },
                { name: 'rtrim(ltrim(bodegasst.lote))', as: 'LOTE', visible: false },
            ],
            inner_join: [],
            where: [],
            orderby: [],
            groupby: true,
            title: 'Buscar Articulo',

        };
        $scope.resultado_objeto = function (d) {
            var j = JSON.parse(d);
            console.log($scope.campo_codigo);
            if ($scope.json.indexbloque == 1.1) {
                $scope.json.arn_codigo1 = j.CODIGO;
                $scope.json.arn_serial1 = j.SERIAL;
                $scope.json.arn_lote1 = j.LOTE;
            } else if ($scope.json.indexbloque == 1.2) {
                $scope.json.arn_codigo2 = j.CODIGO;
                $scope.json.arn_serial2 = j.SERIAL;
                $scope.json.arn_lote2 = j.LOTE;
            } else if ($scope.json.indexbloque == 2.1) {
                $scope.json.cod_erc1 = j.CODIGO;
                $scope.json.serial_erc1 = j.SERIAL;
                $scope.json.lote_erc1 = j.LOTE;
            } else if ($scope.json.indexbloque == 2.2) {
                $scope.json.cod_erc2 = j.CODIGO;
                $scope.json.serial_erc2 = j.SERIAL;
                $scope.json.lote_erc2 = j.LOTE;
            } else if ($scope.json.indexbloque == 3.1) {
                $scope.json.codigo_eai1 = j.CODIGO;
                $scope.json.serial_eai1 = j.SERIAL;
                $scope.json.lote_eai1 = j.LOTE;
            } else if ($scope.json.indexbloque == 3.2) {
                $scope.json.codigo_eai2 = j.CODIGO;
                $scope.json.serial_eai2 = j.SERIAL;
                $scope.json.lote_eai2 = j.LOTE;
            } else if ($scope.json.indexbloque == 4.1) {
                $scope.json.codigo_tieoff1 = j.CODIGO;
                $scope.json.serial_tieoff1 = j.SERIAL;
                $scope.json.lote_tieoff1 = j.LOTE;
            } else if ($scope.json.indexbloque == 4.2) {
                $scope.json.codigo_tieoff2 = j.CODIGO;
                $scope.json.serial_tieoff2 = j.SERIAL;
                $scope.json.lote_tieoff2 = j.LOTE;
            } else if ($scope.json.indexbloque == 5.1) {
                $scope.json.cod_arrest1 = j.CODIGO;
                $scope.json.serial_arrest1 = j.SERIAL;
                $scope.json.lote_arrest1 = j.LOTE;
            } else if ($scope.json.indexbloque == 5.2) {
                $scope.json.cod_arrest2 = j.CODIGO;
                $scope.json.serial_arrest2 = j.SERIAL;
                $scope.json.lote_arrest2 = j.LOTE;
            } else if ($scope.json.indexbloque == 6.1) {
                $scope.json.codigo_lv1 = j.CODIGO;
                $scope.json.serial_lv1 = j.SERIAL;
                $scope.json.lote_lv1 = j.LOTE;
            } else if ($scope.json.indexbloque == 6.2) {
                $scope.json.codigo_lv2 = j.CODIGO;
                $scope.json.serial_lv2 = j.SERIAL;
                $scope.json.lote_lv2 = j.LOTE;
            } else if ($scope.json.indexbloque == 7.1) {
                $scope.json.codigo_mosq1 = j.CODIGO;
                $scope.json.serial_mosq1 = j.SERIAL;
                $scope.json.lote_mosq1 = j.LOTE;
            } else if ($scope.json.indexbloque == 7.2) {
                $scope.json.codigo_mosq2 = j.CODIGO;
                $scope.json.serial_mosq2 = j.SERIAL;
                $scope.json.lote_mosq2 = j.LOTE;
            }


        }

        $scope.imprimir = function () {
            $scope.json.f_inspeccion = ssDate.dateToString($scope.json.f_inspeccion, 'dd-MM-yyyy');
            $timeout(function () {
                $scope.upload1 = "firmas/" + $scope.json.cedulatec1 + ".png";
                $scope.upload2 = "firmas/" + $scope.json.cedulatec2 + ".png";
                $scope.upload3 = "firmas/1143114672.png";
                $('#menu').addClass("ss-nav-inactive");
                $('#wrapper').addClass("ss-full-view");
                window.print();
            });
        }


        $scope.guardar = function () {
            var defender = $q.defer();
            var promise = defender.promise;
            if (!$scope.inspec_altura.$valid) {
                var cr = "Campos requeridos no diligenciados:";
                $scope.inspec_altura.$error.required.forEach(function (item, index) {
                    cr += "\n - " + item.$name;
                });
                alert(cr);
                defender.resolve(false);
                return promise;
            } else {
                $timeout(function () {
                    try {
                        var rs = false;
                        Service.getCrud({ json: angular.toJson($scope.json) }, '/Servicios.svc/CreateInspeccionaltura').then(function (d) {
                            rs = JSON.parse(d.data);
                            defender.resolve(rs);
                        });
                    } catch (e) {
                        defender.reject(e);
                    }


                });
            }
            return promise;

        };


        $scope.dataInsp_equi_altura = {
            id: 'dataBuscador',
            component: [{ id: 'inspec_altura-buscar', type: 'btn' }],
            table: 'insp_equi_altura',
            column: [
                { name: 'id', as: 'id', visible: false },
                { name: 'cedulatec1', as: 'Tecnico1', visible: true },
                { name: 'cedulatec2', as: 'Tecnico2', visible: true },
                { name: 'area', as: 'Area', visible: true },
                { name: 'f_inspeccion', as: 'Fecha', visible: true },

            ],
            where: [],
            groupby: false,
            orderby: [],
            title: 'Busqueda de Inspeccion'
        };
        $scope.rsInsp_equi_altura = function (v) {
            $scope.id = JSON.parse(v).id;
            if ($scope.id != '' && $scope.id != null) {
                Service.getCrud({ id: parseInt($scope.id) }, "/Servicios.svc/ReadIspeccionAlt").then(function (d) {
                    var rs = JSON.parse(d.data);
                    $scope.json = rs;
                    $scope.upload1 = "firmas/" + rs.cedulatec1 + ".png";
                    $scope.upload2 = "firmas/" + rs.cedulatec2 + ".png";
                    $scope.upload3 = "firmas/1143114672.png";
                    $scope.key.value = rs.cedulatec1;
                    $scope.key1.value = rs.cedulatec2;
                    $scope.json.f_inspeccion = ssDate.militodate(rs.f_inspeccion);
                    $scope.disabledbtn.eliminar = false;
                    $scope.disabledbtn.editar = false;
                    $scope.showbtn.imprimir = true;
                });
            }
        };

        $scope.openfirmas = function () {
            $scope.openModalPRO = true;
        }

        $scope.limpiarfirma1 = function () {
            var canvas = document.getElementById("sig-canvas");
            var ctx = canvas.getContext("2d");
            canvas.width = canvas.width;
        }

        $scope.limpiarfirma2 = function () {
            var canvas2 = document.getElementById("sig-canvas2");
            var ctx2 = canvas2.getContext("2d");
            canvas2.width = canvas2.width;
        }

        $scope.guardarfirmas = function () {
            var dataURL = canvas.toDataURL();
            var dataURL2 = canvas2.toDataURL();
            $scope.firmatec1 = canvas.toDataURL('image/png', 1.0);
            $scope.firmatec2 = canvas2.toDataURL('image/png', 1.0);
            Service.getCrud({ file: $scope.firmatec1, name: $scope.json.cedulatec1, ruta: 'firmas' }, "/Generic.svc/SaveImg").then(function (d) {
                if ($scope.json.cedulatec2 != undefined && $scope.json.cedulatec2 != null && $scope.json.cedulatec2 != '') {
                    Service.getCrud({ file: $scope.firmatec2, name: $scope.json.cedulatec2, ruta: 'firmas' }, "/Generic.svc/SaveImg").then(function (d) {
                        $scope.closePRO();
                    });
                } else {
                    $scope.closePRO();
                }
            });

        }

        //Cerrar modal 
        $scope.closePRO = function () {
            $scope.openModalPRO = false;
            $scope.limpiarfirma1();
            $scope.limpiarfirma2();
        }

        // Set up the canvas
        var canvas = document.getElementById("sig-canvas");
        var ctx = canvas.getContext("2d");
        ctx.strokeStyle = "#222222";
        ctx.lineWith = 2;


        // Set up mouse events for drawing
        var drawing = false;
        var mousePos = { x: 0, y: 0 };
        var lastPos = mousePos;
        canvas.addEventListener("mousedown", function (e) {
            drawing = true;
            lastPos = getMousePos(canvas, e);
        }, false);
        canvas.addEventListener("mouseup", function (e) {
            drawing = false;
        }, false);
        canvas.addEventListener("mousemove", function (e) {
            mousePos = getMousePos(canvas, e);
        }, false);

        // Get the position of the mouse relative to the canvas
        function getMousePos(canvasDom, mouseEvent) {
            var rect = canvasDom.getBoundingClientRect();
            return {
                x: mouseEvent.clientX - rect.left,
                y: mouseEvent.clientY - rect.top
            };
        }

        // Get a regular interval for drawing to the screen
        window.requestAnimFrame = (function (callback) {
            return window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimaitonFrame ||
                function (callback) {
                    window.setTimeout(callback, 1000 / 60);
                };
        })();

        // Draw to the canvas
        function renderCanvas() {
            if (drawing) {
                ctx.moveTo(lastPos.x, lastPos.y);
                ctx.lineTo(mousePos.x, mousePos.y);
                ctx.stroke();
                lastPos = mousePos;
            }
        }

        // Allow for animation
        (function drawLoop() {
            requestAnimFrame(drawLoop);
            renderCanvas();
        })();

        // Set up touch events for mobile, etc
        canvas.addEventListener("touchstart", function (e) {
            mousePos = getTouchPos(canvas, e);
            var touch = e.touches[0];
            var mouseEvent = new MouseEvent("mousedown", {
                clientX: touch.clientX,
                clientY: touch.clientY
            });
            canvas.dispatchEvent(mouseEvent);
        }, false);
        canvas.addEventListener("touchend", function (e) {
            var mouseEvent = new MouseEvent("mouseup", {});
            canvas.dispatchEvent(mouseEvent);
        }, false);
        canvas.addEventListener("touchmove", function (e) {
            var touch = e.touches[0];
            var mouseEvent = new MouseEvent("mousemove", {
                clientX: touch.clientX,
                clientY: touch.clientY
            });
            canvas.dispatchEvent(mouseEvent);
        }, false);

        // Get the position of a touch relative to the canvas
        function getTouchPos(canvasDom, touchEvent) {
            var rect = canvasDom.getBoundingClientRect();
            return {
                x: touchEvent.touches[0].clientX - rect.left,
                y: touchEvent.touches[0].clientY - rect.top
            };
        }

        // Prevent scrolling when touching the canvas
        document.body.addEventListener("touchstart", function (e) {
            if (e.target == canvas) {
                e.preventDefault();
            }
        }, false);
        document.body.addEventListener("touchend", function (e) {
            if (e.target == canvas) {
                e.preventDefault();
            }
        }, false);
        document.body.addEventListener("touchmove", function (e) {
            if (e.target == canvas) {
                e.preventDefault();
            }
        }, false);


        ///////////////////PANEL DE FIRMAS CANVAR NO. 2//////////////////////

        //CONFIGURAR LIENZO
        var canvas2 = document.getElementById("sig-canvas2");
        var ctx2 = canvas2.getContext("2d");
        ctx2.strokeStyle = "#222222";
        ctx2.lineWith = 2;

        //Configurar eventos del mouse para dibujar
        var drawing2 = false;
        var mousePos2 = { x: 0, y: 0 };
        var lastPos2 = mousePos2;

        // Configurar eventos del mouse para dibujar

        canvas2.addEventListener("mousedown", function (e) {
            drawing2 = true;
            lastPos2 = getMousePos(canvas2, e);
        }, false);
        canvas2.addEventListener("mouseup", function (e) {
            drawing2 = false;
        }, false);
        canvas2.addEventListener("mousemove", function (e) {
            mousePos2 = getMousePos(canvas2, e);
        }, false);

        // Dibujar en el lienzo
        function renderCanvas2() {
            if (drawing2) {
                ctx2.moveTo(lastPos2.x, lastPos2.y);
                ctx2.lineTo(mousePos2.x, mousePos2.y);
                ctx2.stroke();
                lastPos2 = mousePos2;
            }
        }

        // Permitir animación
        (function drawLoop2() {
            requestAnimFrame(drawLoop2);
            renderCanvas2();
        })();


        //Configure eventos táctiles para dispositivos móviles, etc.

        canvas2.addEventListener("touchstart", function (e) {
            mousePos2 = getTouchPos(canvas2, e);
            var touch2 = e.touches[0];
            var mouseEvent = new MouseEvent("mousedown", {
                clientX: touch2.clientX,
                clientY: touch2.clientY
            });
            canvas2.dispatchEvent(mouseEvent);
        }, false);
        canvas2.addEventListener("touchend", function (e) {
            var mouseEvent = new MouseEvent("mouseup", {});
            canvas2.dispatchEvent(mouseEvent);
        }, false);
        canvas2.addEventListener("touchmove", function (e) {
            var touch2 = e.touches[0];
            var mouseEvent = new MouseEvent("mousemove", {
                clientX: touch2.clientX,
                clientY: touch2.clientY
            });
            canvas2.dispatchEvent(mouseEvent);
        }, false);


        // Evita el desplazamiento al tocar el lienzo
        document.body.addEventListener("touchstart", function (e) {
            if (e.target == canvas2) {
                e.preventDefault();
            }
        }, false);
        document.body.addEventListener("touchend", function (e) {
            if (e.target == canvas2) {
                e.preventDefault();
            }
        }, false);
        document.body.addEventListener("touchmove", function (e) {
            if (e.target == canvas2) {
                e.preventDefault();
            }
        }, false);

    }
    function Reporte_equi_ltura_Controller($scope, $q, Service, Auth, $timeout, ssDate) {
        $scope.json = {};
        $scope.query = {};
        $scope.openWaiting = true;

        Service.getCrud({}, "/Servicios.svc/preload_ccosto").then(function (d) {
            var rs = JSON.parse(d.data);
            $scope.centros = rs[0];
        });

        Service.getCrud({ tipo: $scope.tipo_activo }, "/Servicios.svc/Report_bodegasst").then(function (d) {
            var rs = JSON.parse(d.data);
            $scope.openWaiting = false;
            $scope.grilla = [];
            $scope.grillareport = [];
            $scope.grilla = rs;
            $scope.grillareport = rs;
            $scope.tablainspeccionmes = [];
            var f = new Date();
            $scope.grilla.forEach(function (item, index) {
                var p = (f.getMonth() + 1);
                var aux = ssDate.militodate(item.F_prox_inspec);
                var auxmes = (aux.getMonth() + 1);
                var cont = 0;
                if (auxmes <= p) {
                    $scope.tablainspeccionmes.push(item);
                }
            });
            $scope.jsonexcel = {};
            $scope.jsonexcel = rs;
        });


        $scope.readquery = function () {
            Service.getCrud({ tipo: $scope.tipo_activo, startdate: $scope.startdate, enddate: $scope.enddate }, "/Servicios.svc/Report_bodegasstfordate").then(function (d) {
                var rs = JSON.parse(d.data);
                $scope.grilla = [];
                $scope.grillareport = [];
                $scope.grilla = rs;
                $scope.grillareport = rs;
                $scope.tablainspeccionmes = [];
                var f = new Date();
                $scope.grilla.forEach(function (item, index) {
                    var p = (f.getMonth() + 1);
                    var aux = ssDate.militodate(item.F_prox_inspec);
                    var auxmes = (aux.getMonth() + 1);
                    var cont = 0;
                    if (auxmes <= p) {
                        $scope.tablainspeccionmes.push(item);
                    }
                });
            });
        }


        $scope.buscar_acta = function (item) {
            $timeout(function () {
                console.log(item);
                sessionStorage.setItem("Tipo", item.Tipo);
                sessionStorage.setItem("Codigo", item.Codigo);
                sessionStorage.setItem("Serial", item.Serial);
                document.getElementById("sst-2").click();
                document.getElementById("menucerrar").click();
            });
        }

        $scope.convert = function (x) {
            if (x != '/Date(-62135578800000)/') {
                var aux = ssDate.militodate(x);
                return ssDate.dateToString(aux, 'dd-MM-yyyy');

            }
        }

        $scope.read_devolucion = function (v) {
            var rs = JSON.parse(v);
            Service.getCrud({ ced_empl: rs.Cedula, fecha: rs.Fecha, hora: rs.Hora }, "/Servicios.svc/ReadActa_devolucion").then(function (d) {
                var rs = JSON.parse(d.data)[0];
                var x = JSON.parse(d.data)[1];
                var y = JSON.parse(d.data)[2];
                var e = JSON.parse(d.data)[3];
                $scope.json = rs;
                $scope.table = [];
                $scope.table = x;
                $scope.json.tipo = 1;
                $scope.cargo = y.cargo;
                $scope.ruta = "img/" + e.ruta_logo;
                $scope.cod_emp = e.codigo;
                var f = ssDate.militodate(rs.fecha)
                $scope.json.fecha = ssDate.dateToString(f, 'dd-MM-yyyy');
                $scope.json.nombre_completo = y.nombre + " " + y.snombre + " " + y.ppellido + " " + y.spellido;
                $scope.ccosto = y.ccosto;
                if ($scope.json.autoriza == 1) {
                    $scope.jefe_inmediato = "LUIS EMILIO";
                } else if ($scope.json.autoriza == 2) {
                    $scope.jefe_inmediato = "ANGELA FIGUEROA";
                } else if ($scope.json.autoriza == 3) {
                    $scope.jefe_inmediato = "INDIRA PRADA";
                }
                else if ($scope.json.autoriza == 5) {
                    $scope.jefe_inmediato = "MONICA CONTRERAS";
                }
                $timeout(function () {
                    $('#menu').addClass("ss-nav-inactive");
                    $('#wrapper').addClass("ss-full-view");
                    window.print();
                }, 2000);

            });
        };

        $scope.JSONToCSVConvertor = function (JSONData, ReportTitle, ShowLabel) {

            //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
            var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;

            var CSV = '';
            //Set Report title in first row or line

            CSV += ReportTitle + '\r\n\n';

            //This condition will generate the Label/Header
            if (ShowLabel) {
                var row = "";

                //This loop will extract the label from 1st index of on array
                for (var index in arrData[0]) {

                    //Now convert each value to string and comma-seprated
                    row += index + ',';
                }

                row = row.slice(0, -1);

                //append Label row with line break
                CSV += row + '\r\n';
            }

            //1st loop is to extract each row
            for (var i = 0; i < arrData.length; i++) {
                var row2 = "";

                //2nd loop will extract each column and convert it in string comma-seprated
                for (var index1 in arrData[i]) {
                    row2 += '"' + arrData[i][index1] + '",';
                }

                row2.slice(0, row2.length - 1);

                //add a line break after each row
                CSV += row2 + '\r\n';
            }

            if (CSV == '') {
                alert("Invalid data");
                return;
            }
            //FECHA ACTUAL
            var fecha = ssDate.dateToString(Date.now(), 'yyyy-MM-dd');

            //Generate a file name
            var fileName = "Descarga_" + fecha;
            //this will remove the blank-spaces from the title and replace it with an underscore
            fileName += ReportTitle.replace(/ /g, "_");

            //Initialize file format you want csv or xls
            var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);

            // Now the little tricky part.
            // you can use either>> window.open(uri);
            // but this will not work in some browsers
            // or you will not get the correct file extension    

            //this trick will generate a temp <a /> tag
            var link = document.createElement("a");
            link.href = uri;

            //set the visibility hidden so it will not effect on your web-layout
            link.style = "visibility:true";
            link.download = fileName + ".csv";

            //this part will append the anchor tag and remove it after automatic click
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        $scope.fnExcelReport = function () {
            $scope.grillareport.forEach(function (item, index) {
                if (item.F_compra != '/Date(-62135578800000)/') {
                    item.F_compra = $scope.convert(item.F_compra);
                } else {
                    item.Causacion = "";
                }
                if (item.F_inspeccion != '/Date(-62135578800000)/') {
                    item.F_inspeccion = $scope.convert(item.F_inspeccion);
                } else {
                    item.F_inspeccion = "";
                }
                if (item.F_prox_inspec != '/Date(-62135578800000)/') {
                    item.F_prox_inspec = $scope.convert(item.F_prox_inspec);
                } else {
                    item.F_prox_inspec = "";
                }
                if (item.F_seguimiento != '/Date(-62135578800000)/') {
                    item.F_seguimiento = $scope.convert(item.F_seguimiento);
                } else {
                    item.F_seguimiento = "";
                }
            });
            $scope.JSONToCSVConvertor($scope.jsonexcel, "", true);
        }

        // JSON to CSV Converter
        $scope.ConvertToCSV = function (tabla) {
            var array = typeof tabla != 'object' ? JSON.parse(tabla) : tabla;
            var str = '';

            for (var i = 0; i < array.length; i++) {
                var line = '';
                for (var index in array[i]) {
                    if (line != '') line += ';'

                    line += array[i][index];
                }

                str += line + '\r\n';
            }
            $scope.resultcvs = str;
        }

        // Example


        // Create Object
        var items = [
            { name: "Item 1", color: "Green", size: "X-Large" },
            { name: "Item 2", color: "Green", size: "X-Large" },
            { name: "Item 3", color: "Green", size: "X-Large" }];

        // Convert Object to JSON
        var jsonObject = JSON.stringify(items);
    }
    function Inspecciones_escaleras_Controller($scope, $q, Service, Auth, $timeout, ssDate) {
        $scope.json = {};
        $scope.json2 = {};
        $scope.sh_add = false;
        $scope.grilla = [];
        console.log(Auth.getUserObj());
        $scope.key = { value: '' };
        $scope.openModalPRO = false;

        /*BARRA*/
        $scope.showbtn = { buscar: true, imprimir: true, nuevo: true, editar: false, eliminar: true, cerrar: false };
        $scope.disabledbtn = { buscar: false, imprimir: false, nuevo: false, editar: true, eliminar: true };

        $scope.nuevo = function () {
            $scope.sh_add = true;
            $scope.json.f_inspeccion = new Date();
            $scope.json.resp_inspeccion = Auth.getUserObj().nombre_usuario;
            $scope.json.ced_usu_inspec = Auth.getUserObj().codigo;
        }

        /*CONFIG BUSQUEDA RAPIDA TECNICO 1 */
        $scope.dataTecnico1 = {
            id: 'buscadortecnico',
            component: [{ id: 'brTecnico', type: '' }],
            table: 'empleado',
            column: [
                { name: 'rtrim(ltrim(CEDULA_EMP))', as: 'Cedula', visible: true },
                { name: 'rtrim(ltrim(NOMBRE))', as: 'Nombre', visible: true },
                { name: 'rtrim(ltrim(SNOMBRE))', as: 'S_Nombre', visible: true },
                { name: 'rtrim(ltrim(PPELLIDO))', as: 'Apellido', visible: true },
                { name: 'rtrim(ltrim(SPELLIDO))', as: 'S_Apellido', visible: true },
                { name: 'rtrim(ltrim(CARGO))', as: 'Cargo', visible: false },
                { name: 'rtrim(ltrim(CCOSTO))', as: 'Ccosto', visible: false },
                { name: 'rtrim(ltrim(EMPRESA))', as: 'Empresa', visible: false },
            ],
            where: {},
            groupby: true,
            orderby: [],
            title: 'Buscar tecnico 1',
            required_name: "TECNICO 1"
        };
        $scope.rsTecnico1 = function (d) {
            var j = JSON.parse(d);
            $scope.cargo = j.Cargo;
            $scope.json.ced_empleado = j.Cedula;
            $scope.json.nombre_completo1 = j.Nombre + ' ' + j.S_Nombre + ' ' + j.Apellido + ' ' + j.S_Apellido;
            $scope.ccosto2 = j.Ccosto;
        }

        $scope.editar = function () {
            $scope.sh_add = true;
            $scope.sh_edit = true;
        }



        $scope.convert = function (x) {
            var res = x.split(" ");
            return res[0];
        }



        /*OBJETO PARA ENTREGA*/
        $scope.dataBuscador_objeto = {
            id: 'buscadorobject',
            component: [{ id: 'buscar_obj', type: 'btn' }],
            table: 'bodegasst',
            column: [
                { name: 'rtrim(ltrim(bodegasst.codigo))', as: 'CODIGO', visible: true },
                { name: 'rtrim(ltrim(bodegasst.serial))', as: 'SERIAL', visible: true },
                { name: 'rtrim(ltrim(bodegasst.lote))', as: 'LOTE', visible: false },
            ],
            inner_join: [],
            where: [],
            orderby: [],
            groupby: true,
            title: 'Buscar Articulo',

        };
        $scope.resultado_objeto = function (d) {
            var j = JSON.parse(d);
            console.log($scope.campo_codigo);
            if ($scope.json.indexbloque == 1.1) {
                $scope.json.arn_codigo1 = j.CODIGO;
                $scope.json.arn_serial1 = j.SERIAL;
                $scope.json.arn_lote1 = j.LOTE;
            } else if ($scope.json.indexbloque == 1.2) {
                $scope.json.arn_codigo2 = j.CODIGO;
                $scope.json.arn_serial2 = j.SERIAL;
                $scope.json.arn_lote2 = j.LOTE;
            } else if ($scope.json.indexbloque == 2.1) {
                $scope.json.cod_erc1 = j.CODIGO;
                $scope.json.serial_erc1 = j.SERIAL;
                $scope.json.lote_erc1 = j.LOTE;
            } else if ($scope.json.indexbloque == 2.2) {
                $scope.json.cod_erc2 = j.CODIGO;
                $scope.json.serial_erc2 = j.SERIAL;
                $scope.json.lote_erc2 = j.LOTE;
            } else if ($scope.json.indexbloque == 3.1) {
                $scope.json.codigo_eai1 = j.CODIGO;
                $scope.json.serial_eai1 = j.SERIAL;
                $scope.json.lote_eai1 = j.LOTE;
            } else if ($scope.json.indexbloque == 3.2) {
                $scope.json.codigo_eai2 = j.CODIGO;
                $scope.json.serial_eai2 = j.SERIAL;
                $scope.json.lote_eai2 = j.LOTE;
            } else if ($scope.json.indexbloque == 4.1) {
                $scope.json.codigo_tieoff1 = j.CODIGO;
                $scope.json.serial_tieoff1 = j.SERIAL;
                $scope.json.lote_tieoff1 = j.LOTE;
            } else if ($scope.json.indexbloque == 4.2) {
                $scope.json.codigo_tieoff2 = j.CODIGO;
                $scope.json.serial_tieoff2 = j.SERIAL;
                $scope.json.lote_tieoff2 = j.LOTE;
            } else if ($scope.json.indexbloque == 5.1) {
                $scope.json.cod_arrest1 = j.CODIGO;
                $scope.json.serial_arrest1 = j.SERIAL;
                $scope.json.lote_arrest1 = j.LOTE;
            } else if ($scope.json.indexbloque == 5.2) {
                $scope.json.cod_arrest2 = j.CODIGO;
                $scope.json.serial_arrest2 = j.SERIAL;
                $scope.json.lote_arrest2 = j.LOTE;
            } else if ($scope.json.indexbloque == 6.1) {
                $scope.json.codigo_lv1 = j.CODIGO;
                $scope.json.serial_lv1 = j.SERIAL;
                $scope.json.lote_lv1 = j.LOTE;
            } else if ($scope.json.indexbloque == 6.2) {
                $scope.json.codigo_lv2 = j.CODIGO;
                $scope.json.serial_lv2 = j.SERIAL;
                $scope.json.lote_lv2 = j.LOTE;
            } else if ($scope.json.indexbloque == 7.1) {
                $scope.json.codigo_mosq1 = j.CODIGO;
                $scope.json.serial_mosq1 = j.SERIAL;
                $scope.json.lote_mosq1 = j.LOTE;
            } else if ($scope.json.indexbloque == 7.2) {
                $scope.json.codigo_mosq2 = j.CODIGO;
                $scope.json.serial_mosq2 = j.SERIAL;
                $scope.json.lote_mosq2 = j.LOTE;
            }


        }

        $scope.imprimir = function () {
            console.log($scope.json.f_inspeccion);
            $scope.json.f_inspeccion = ssDate.dateToString($scope.json.f_inspeccion, 'dd-MM-yyyy');
            $timeout(function () {
                $scope.upload1 = "firmas/" + $scope.json.ced_empleado + ".png";
                $scope.upload3 = "firmas/" + $scope.json.ced_usu_inspec + ".png";
                $('#menu').addClass("ss-nav-inactive");
                $('#wrapper').addClass("ss-full-view");
                window.print();
            });
        }


        $scope.guardar = function () {
            var defender = $q.defer();
            var promise = defender.promise;
            if (!$scope.inspec_escaleras.$valid) {
                var cr = "Campos requeridos no diligenciados:";
                $scope.inspec_escaleras.$error.required.forEach(function (item, index) {
                    cr += "\n - " + item.$name;
                });
                alert(cr);
                defender.resolve(false);
                return promise;
            } else {
                $timeout(function () {
                    try {
                        var rs = false;
                        Service.getCrud({ json: angular.toJson($scope.json) }, '/Servicios.svc/CreateInspeccionescalera').then(function (d) {
                            rs = JSON.parse(d.data);
                            defender.resolve(rs);
                        });
                    } catch (e) {
                        defender.reject(e);
                    }


                });
            }
            return promise;

        };




        $scope.datainspescaleras = {
            id: 'dataBuscador',
            component: [{ id: 'inspec_escaleras-buscar', type: 'btn' }],
            table: 'inspec_escalera',
            column: [
                { name: 'id', as: 'id', visible: false },
                { name: 'ced_empleado', as: 'Empleado', visible: true },
                { name: 'area', as: 'Area', visible: true },
                { name: 'f_inspeccion', as: 'Fecha', visible: true },
                { name: 'identifiticacion', as: 'ID', visible: true },

            ],
            where: [],
            groupby: false,
            orderby: [],
            title: 'Busqueda de Inspeccion'
        };
        $scope.rsinspescaleras = function (v) {
            $scope.id = JSON.parse(v).id;
            if ($scope.id != '' && $scope.id != null) {
                Service.getCrud({ id: parseInt($scope.id) }, "/Servicios.svc/Readinspec_esacaleras").then(function (d) {
                    var rs = JSON.parse(d.data);
                    console.log(rs);
                    $scope.json = rs[0];
                    $scope.upload1 = "firmas/" + rs[0].ced_empleado + ".png";
                    $scope.upload3 = "firmas/" + rs[0].ced_usu_inspec + ".png";
                    $scope.key.value = rs[0].ced_empleado;
                    $scope.json.f_inspeccion = ssDate.militodate(rs[0].f_inspeccion);
                    $scope.json.resp_inspeccion = rs[1].nombre_usuario;
                    $scope.disabledbtn.eliminar = false;
                    $scope.disabledbtn.editar = false;
                    $scope.showbtn.imprimir = true;
                });
            }
        };

        $scope.openfirmas = function () {
            $scope.openModalPRO = true;
        }

        $scope.limpiarfirma1 = function () {
            var canvas = document.getElementById("sig-canvas");
            var ctx = canvas.getContext("2d");
            canvas.width = canvas.width;
        }

        //$scope.limpiarfirma2 = function () {
        //    var canvas2 = document.getElementById("sig-canvas2");
        //    var ctx2 = canvas2.getContext("2d");
        //    canvas2.width = canvas2.width;
        //}

        $scope.guardarfirmas = function () {
            var dataURL = canvas.toDataURL();
            $scope.firmatec1 = canvas.toDataURL('image/png', 1.0);
            Service.getCrud({ file: $scope.firmatec1, name: $scope.json.ced_empleado, ruta: 'firmas' }, "/Generic.svc/SaveImg").then(function (d) {
                $scope.closePRO();
            });

        }

        //Cerrar modal 
        $scope.closePRO = function () {
            $scope.openModalPRO = false;
            $scope.limpiarfirma1();
            $scope.limpiarfirma2();
        }

        // Set up the canvas
        var canvas = document.getElementById("sig-canvas");
        var ctx = canvas.getContext("2d");
        ctx.strokeStyle = "#222222";
        ctx.lineWith = 2;


        // Set up mouse events for drawing
        var drawing = false;
        var mousePos = { x: 0, y: 0 };
        var lastPos = mousePos;
        canvas.addEventListener("mousedown", function (e) {
            drawing = true;
            lastPos = getMousePos(canvas, e);
        }, false);
        canvas.addEventListener("mouseup", function (e) {
            drawing = false;
        }, false);
        canvas.addEventListener("mousemove", function (e) {
            mousePos = getMousePos(canvas, e);
        }, false);

        // Get the position of the mouse relative to the canvas
        function getMousePos(canvasDom, mouseEvent) {
            var rect = canvasDom.getBoundingClientRect();
            return {
                x: mouseEvent.clientX - rect.left,
                y: mouseEvent.clientY - rect.top
            };
        }

        // Get a regular interval for drawing to the screen
        window.requestAnimFrame = (function (callback) {
            return window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimaitonFrame ||
                function (callback) {
                    window.setTimeout(callback, 1000 / 60);
                };
        })();

        // Draw to the canvas
        function renderCanvas() {
            if (drawing) {
                ctx.moveTo(lastPos.x, lastPos.y);
                ctx.lineTo(mousePos.x, mousePos.y);
                ctx.stroke();
                lastPos = mousePos;
            }
        }

        // Allow for animation
        (function drawLoop() {
            requestAnimFrame(drawLoop);
            renderCanvas();
        })();

        // Set up touch events for mobile, etc
        canvas.addEventListener("touchstart", function (e) {
            mousePos = getTouchPos(canvas, e);
            var touch = e.touches[0];
            var mouseEvent = new MouseEvent("mousedown", {
                clientX: touch.clientX,
                clientY: touch.clientY
            });
            canvas.dispatchEvent(mouseEvent);
        }, false);
        canvas.addEventListener("touchend", function (e) {
            var mouseEvent = new MouseEvent("mouseup", {});
            canvas.dispatchEvent(mouseEvent);
        }, false);
        canvas.addEventListener("touchmove", function (e) {
            var touch = e.touches[0];
            var mouseEvent = new MouseEvent("mousemove", {
                clientX: touch.clientX,
                clientY: touch.clientY
            });
            canvas.dispatchEvent(mouseEvent);
        }, false);

        // Get the position of a touch relative to the canvas
        function getTouchPos(canvasDom, touchEvent) {
            var rect = canvasDom.getBoundingClientRect();
            return {
                x: touchEvent.touches[0].clientX - rect.left,
                y: touchEvent.touches[0].clientY - rect.top
            };
        }

        // Prevent scrolling when touching the canvas
        document.body.addEventListener("touchstart", function (e) {
            if (e.target == canvas) {
                e.preventDefault();
            }
        }, false);
        document.body.addEventListener("touchend", function (e) {
            if (e.target == canvas) {
                e.preventDefault();
            }
        }, false);
        document.body.addEventListener("touchmove", function (e) {
            if (e.target == canvas) {
                e.preventDefault();
            }
        }, false);


    }
    function Reporte_escaleras($scope, $q, Service, Auth, $timeout, ssDate) {
        $scope.json = {};
        $scope.query = {};
        $scope.openWaiting = true;

        Service.getCrud({}, "/Servicios.svc/preload_ccosto").then(function (d) {
            var rs = JSON.parse(d.data);
            $scope.centros = rs[0];
        });

        

        Service.getCrud({ tipo: $scope.tipo_activo }, "/Servicios.svc/Report_Escaleras").then(function (d) {
            var rs = JSON.parse(d.data);
            $scope.openWaiting = false;
            console.log(rs);
            $scope.tablainspeccion = rs;
        });


        $scope.readquery = function () {
            Service.getCrud({ tipo: $scope.tipo_activo, startdate: $scope.startdate, enddate: $scope.enddate }, "/Servicios.svc/Report_bodegasstfordate").then(function (d) {
                var rs = JSON.parse(d.data);
                $scope.grilla = [];
                $scope.grillareport = [];
                $scope.grilla = rs;
                $scope.grillareport = rs;
                $scope.tablainspeccionmes = [];
                var f = new Date();
                $scope.grilla.forEach(function (item, index) {
                    var p = (f.getMonth() + 1);
                    var aux = ssDate.militodate(item.F_prox_inspec);
                    var auxmes = (aux.getMonth() + 1);
                    var cont = 0;
                    if (auxmes <= p) {
                        $scope.tablainspeccionmes.push(item);
                    }
                });
            });
        }

        //$scope.est = function (item) {

        //    var rs = '';
        //    var f = new Date();
        //    var p = (f.getMonth() +1);
        //    var aux = ssDate.militodate(item.F_prox_inspec);
        //    var auxmes = (aux.getMonth() + 1);
        //    var cont = 0;
        //    if (auxmes == p) {
        //        rs = 'amarillo';
        //    } else if (auxmes > p) {
        //        rs = 'rojo';
        //    } else if (p > auxmes) {
        //        rs = 'verde';
        //    }

        //    return rs;
        //}




        $scope.rsActa = function (v) {
            var rs = JSON.parse(v);
            Service.getCrud({ ced_empl: rs.Cedula, fecha: rs.Fecha, hora: rs.Hora }, "/Servicios.svc/ReadActa_entrega").then(function (d) {
                var rs = JSON.parse(d.data)[0];
                var x = JSON.parse(d.data)[1];
                var y = JSON.parse(d.data)[2];
                var e = JSON.parse(d.data)[3];
                $scope.json = rs;
                $scope.table = [];
                $scope.table = x;
                $scope.json.tipo = 1;
                $scope.cargo = y.cargo;
                $scope.ruta = "img/" + e.ruta_logo;
                $scope.cod_emp = e.codigo;
                //var f = ssDate.militodate(rs.fecha)
                //$scope.json.fecha = ssDate.dateToString(f, 'dd-MM-yyyy');
                $scope.json.nombre_completo = y.nombre + " " + y.snombre + " " + y.ppellido + " " + y.spellido;
                $scope.ccosto = y.ccosto;
                Service.getCrud({ id_autoriza: $scope.json.autoriza }, "/Servicios.svc/validatejefe").then(function (d) {
                    var rs = JSON.parse(d.data);
                    $scope.jefe_inmediato = rs.nombre;
                    $timeout(function () {
                        $('#menu').addClass("ss-nav-inactive");
                        $('#wrapper').addClass("ss-full-view");
                        window.print();
                    }, 2000);
                });


            });
        };
        $scope.dataActa = {
            id: 'dataBuscador',
            component: [{ id: 'acta-buscar', type: 'btn' }],
            table: 'entregas',
            column: [
                { name: 'ced_empl', as: 'Cedula', visible: true },
                { name: 'fecha', as: 'Fecha', visible: true },
                { name: 'hora', as: 'Hora', visible: true },
                { name: 'id_ent', as: 'Id', visible: false }

            ],
            where: [],
            groupby: false,
            orderby: [],
            title: 'Busqueda de acta'
        };
        $scope.dataActa.where = [];

        $scope.buscar_acta = function (item) {
            $timeout(function () {
                console.log(item);
                sessionStorage.setItem("Tipo", item.Tipo);
                sessionStorage.setItem("Codigo", item.Codigo);
                sessionStorage.setItem("Serial", item.Serial);
                document.getElementById("sst-2").click();
                document.getElementById("menucerrar").click();
            });


        }

        $scope.fnExcelReport = function () {

            var fecha = ssDate.dateToString(Date.now(), 'yyyy-MM-dd');
            var tab_text = '<html xmlns:x="urn:schemas-microsoft-com:office:excel">';
            tab_text = tab_text + '<head><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>';

            tab_text = tab_text + '<x:Name>Hoja 1</x:Name>';

            tab_text = tab_text + '<x:WorksheetOptions><x:Panes></x:Panes></x:WorksheetOptions></x:ExcelWorksheet>';
            tab_text = tab_text + '</x:ExcelWorksheets></x:ExcelWorkbook></xml></head><body>';

            if ($scope.tipo_elemento == 1) {
                $scope.idtable = '#myTable1';
            } else if ($scope.tipo_elemento == 2) {
                $scope.idtable = '#myTable2';
            }
            tab_text = tab_text + "<table border='1px'>";
            tab_text = tab_text + $($scope.idtable).html();
            tab_text = tab_text + '</table></body></html>';

            var data_type = 'data:application/vnd.ms-excel';

            var ua = window.navigator.userAgent;
            var msie = ua.indexOf("MSIE ");

            if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
                if (window.navigator.msSaveBlob) {
                    var blob = new Blob([tab_text], {
                        type: "application/csv;charset=utf-8;"
                    });

                    navigator.msSaveBlob(blob, 'Test file.xls');
                }
            } else {
                $('#test').attr('href', data_type + ', ' + encodeURIComponent(tab_text));
                $('#test').attr('download', 'Descarga' + fecha + '.xls');
            }

        }




        $scope.convert = function (x) {
            if (x != '/Date(-62135578800000)/') {
                var aux = ssDate.militodate(x);
                return ssDate.dateToString(aux, 'dd-MM-yyyy');

            }
        }

        $scope.read_devolucion = function (v) {
            var rs = JSON.parse(v);
            Service.getCrud({ ced_empl: rs.Cedula, fecha: rs.Fecha, hora: rs.Hora }, "/Servicios.svc/ReadActa_devolucion").then(function (d) {
                var rs = JSON.parse(d.data)[0];
                var x = JSON.parse(d.data)[1];
                var y = JSON.parse(d.data)[2];
                var e = JSON.parse(d.data)[3];
                $scope.json = rs;
                $scope.table = [];
                $scope.table = x;
                $scope.json.tipo = 1;
                $scope.cargo = y.cargo;
                $scope.ruta = "img/" + e.ruta_logo;
                $scope.cod_emp = e.codigo;
                var f = ssDate.militodate(rs.fecha)
                $scope.json.fecha = ssDate.dateToString(f, 'dd-MM-yyyy');
                $scope.json.nombre_completo = y.nombre + " " + y.snombre + " " + y.ppellido + " " + y.spellido;
                $scope.ccosto = y.ccosto;
                if ($scope.json.autoriza == 1) {
                    $scope.jefe_inmediato = "LUIS EMILIO";
                } else if ($scope.json.autoriza == 2) {
                    $scope.jefe_inmediato = "ANGELA FIGUEROA";
                } else if ($scope.json.autoriza == 3) {
                    $scope.jefe_inmediato = "INDIRA PRADA";
                }
                else if ($scope.json.autoriza == 5) {
                    $scope.jefe_inmediato = "MONICA CONTRERAS";
                }
                $timeout(function () {
                    $('#menu').addClass("ss-nav-inactive");
                    $('#wrapper').addClass("ss-full-view");
                    window.print();
                }, 2000);

            });
        };

    }
    function gestion_equi_alt($scope, $q, Service, Auth, $timeout, ssDate) {
        $scope.json = {};
        $scope.msj = '';
        $scope.cod_user = Auth.getUserObj().codigo;
        $scope.log_user = Auth.getUserObj().username;
        $scope.key1 = { value: '' };
        $scope.key = { value: '' };
        $scope.openWaiting = false;
        $scope.show_estado = false;
        $scope.show_activos = false;



        /*CONFIG BUSQUEDA RAPIDA*/
        $scope.nuevo = function () {

        }



        /*BARRA*/
        $scope.showbtn = { buscar: true, imprimir: false, nuevo: true, editar: true, eliminar: true, cerrar: false };
        $scope.disabledbtn = { buscar: false, imprimir: true, nuevo: false, editar: true, eliminar: true };
        /*CRUD*/
        $scope.guardar = function () {
            var defender = $q.defer();
            var promise = defender.promise;
            if (!$scope.equipos.$valid) {
                var cr = "Campos requeridos no diligenciados:";
                $scope.equipos.$error.required.forEach(function (item, index) {
                    cr += "\n - " + item.$name;
                });
                alert(cr);
                defender.resolve(false);
                return promise;
            } else {
                $timeout(function () {
                    try {
                        var rs = false;
                        $scope.json.ccosto = "";
                        Service.getCrud({ json: angular.toJson($scope.json) }, '/Servicios.svc/CreateEquipo').then(function (d) {
                            rs = JSON.parse(d.data);
                            defender.resolve(rs);
                        });
                    } catch (e) {
                        defender.reject(e);
                    }


                });
            }
            return promise;

        };
        $scope.actualizar = function () {
            var defender = $q.defer();
            var promise = defender.promise;
            if (!$scope.activos.$valid) {
                var cr = "Campos requeridos no diligenciados";
                $scope.empleados.$error.required.forEach(function (item, index) {
                    cr += "\n - " + item.$name;
                });
                alert(cr);
                defender.resolve(false);
                return promise;
            } else {
                $timeout(function () {
                    try {
                        var rs = false;
                        Service.getCrud({ json: angular.toJson($scope.json) }, "/Servicios.svc/UpdateActivos").then(function (d) {
                            rs = JSON.parse(d.data);
                            defender.resolve(rs);

                        });
                    } catch (e) {

                        defender.reject(e);

                    }
                });
            }
            return promise;
        };
        $scope.eliminar = function () {
            var defender = $q.defer();
            var promise = defender.promise;
            $timeout(function () {
                try {
                    var rs = false;
                    Service.getCrud({ id: parseInt($scope.id) }, "/Salud.svc/DeleteEmpleados").then(function (d) {
                        rs = JSON.parse(d.data);
                        defender.resolve(rs);
                    });
                } catch (e) {
                    defender.reject(e);
                }
            });
            return promise;
        };

        $scope.rsActivos = function (v) {
            $scope.id = JSON.parse(v).Id;
            if ($scope.id != '' && $scope.id != null) {
                Service.getCrud({ id: parseInt($scope.id) }, "/Servicios.svc/ReadActivos").then(function (d) {
                    var rs = JSON.parse(d.data);
                    $scope.json = rs;
                    $scope.json.tipo_articulo = rs.tipo_articulo + "";
                    $scope.key.value = rs.cod_articulo;
                    $scope.key1.value = rs.centro_costo;
                    $scope.json.estado = rs.estado + "";
                    $scope.json.tipo = rs.tipo + "";
                    $scope.json.af = rs.af;
                    if (rs.causacion != null && rs.causacion != undefined) {
                        $scope.json.causacion = ssDate.militodate(rs.causacion);
                    }
                    if (rs.fecha_estado != null && rs.fecha_estado != undefined) {
                        $scope.json.fecha_estado = ssDate.militodate(rs.fecha_estado);
                    }
                    $scope.disabledbtn.editar = false;
                    $scope.show_estado = true;
                });
            }
        };

        $scope.editar = function () {
            $("#tipo").prop("disabled", true);
            $("#imei").prop("disabled", true);
            $("#descrip").prop("disabled", true);
        }
        $scope.dataActivos = {
            id: 'dataBuscador',
            component: [{ id: 'equipos-buscar', type: 'btn' }],
            table: 'bodegasst',
            column: [
                { name: 'id', as: 'Id', visible: false },
                { name: 'tipo', as: 'Tipo', visible: false },
                { name: 'descripcion', as: 'Descripcion', visible: true },
                { name: 'af', as: 'Af', visible: true },
                { name: 'imei', as: 'Imei', visible: true },
                { name: 'descripcion', as: 'Descripcion', visible: false },
                { name: 'observacion', as: 'Observacion', visible: false },
            ],
            where: [],
            groupby: false,
            orderby: [],
            title: 'Busqueda de Articulos'
        };

        $scope.ValidateClientes = function () {
            var exist = false;
            if ($scope.json.codigo != '' && $scope.json.codigo != undefined) {
                Service.getCrud({ clientes: $scope.json.codigo }, "/Servicios.svc/ValidateEmpleados").then(function (d) {
                    if (d.data == 'true') {
                        alert('El empleado ya existe, por favor ingrese uno nuevo');
                    }
                });
            }
        }



        ///*CONFIG BUSQUEDA RAPIDA*/
        //$scope.datacentro = {
        //    id: 'buscadorNombre',
        //    component: [{ id: 'brNombre', type: '' }],
        //    table: 'area_ccosto',
        //    column: [
        //        //{ name: 'rtrim(ltrim(id))', as: 'Id', visible: true },
        //        { name: 'rtrim(ltrim(ccosto))', as: 'Ccosto', visible: true },
        //        { name: 'rtrim(ltrim(area))', as: 'Area', visible: true },
        //    ],
        //    where: {},
        //    groupby: true,
        //    orderby: [],
        //    title: 'Buscar Centro de costo',
        //    required: true
        //};
        //$scope.rscentro = function (d) {
        //    var j = JSON.parse(d);
        //    $scope.json.ccosto = j.Ccosto;

        //}

        /*CONFIG BUSQUEDA RAPIDA ARTICULOS*/
        $scope.dataarticulos = {
            id: 'buscadorart',
            component: [{ id: 'brArt', type: '' }],
            table: 'articulos',
            column: [
                { name: 'rtrim(ltrim(codigo))', as: 'Codigo', visible: true },
                { name: 'rtrim(ltrim(descripcion))', as: 'Descripcion', visible: true },
                { name: 'rtrim(ltrim(tipo))', as: 'Tipo', visible: false },


            ],
            where: {},
            groupby: true,
            orderby: [],
            title: 'Buscar Articulo',
            required: true
        };
        $scope.rsarticulos = function (d) {
            var j = JSON.parse(d);
            $scope.json.descripcion = j.Descripcion;
            $scope.json.tipo = j.Tipo;
            $scope.json.cod_articulo = j.Codigo;

        }
    }
    //MODULO HERRAMIENTAS
    function herramientascontroller($scope, $q, Service, Auth, $timeout) {
        $scope.json = {};
        $scope.msj = '';
        $scope.cod_user = Auth.getUserObj().codigo;
        $scope.log_user = Auth.getUserObj().username;
        $scope.key = { value: '' };
        $scope.openWaiting = false;
        /*CONFIG BUSQUEDA RAPIDA*/
        $scope.nuevo = function () {
            $scope.json = {};
            $scope.json.snombre = ' ';
        }

        /*BARRA*/
        $scope.showbtn = { buscar: true, imprimir: false, nuevo: true, editar: true, eliminar: true, cerrar: false };
        $scope.disabledbtn = { buscar: false, imprimir: true, nuevo: false, editar: true, eliminar: true };

        Service.getCrud({}, "/Servicios.svc/PreloadEmpresa").then(function (d) {
            $scope.empresa = JSON.parse(d.data)[0];

        });

        /*CRUD*/
        $scope.guardar = function () {
            var defender = $q.defer();
            var promise = defender.promise;
            if (!$scope.empleados.$valid) {
                var cr = "Campos requeridos no diligenciados:";
                $scope.empleados.$error.required.forEach(function (item, index) {
                    cr += "\n - " + item.$name;
                });
                alert(cr);
                defender.resolve(false);
                return promise;
            } else {
                $timeout(function () {
                    try {
                        var rs = false;
                        Service.getCrud({ json: angular.toJson($scope.json) }, '/Servicios.svc/CreateEmpleados').then(function (d) {
                            rs = JSON.parse(d.data);
                            defender.resolve(rs);
                        });
                    } catch (e) {
                        defender.reject(e);
                    }


                });
            }
            return promise;

        };
        $scope.actualizar = function () {
            var defender = $q.defer();
            var promise = defender.promise;
            if (!$scope.empleados.$valid) {
                var cr = "Campos requeridos no diligenciados";
                $scope.empleados.$error.required.forEach(function (item, index) {
                    cr += "\n - " + item.$name;
                });
                alert(cr);
                defender.resolve(false);
                return promise;
            } else {
                $timeout(function () {
                    try {
                        var rs = false;
                        Service.getCrud({ json: angular.toJson($scope.json) }, "/Servicios.svc/UpdateEmpleados").then(function (d) {
                            rs = JSON.parse(d.data);
                            defender.resolve(rs);

                        });
                    } catch (e) {

                        defender.reject(e);

                    }
                });
            }
            return promise;
        };
        $scope.eliminar = function () {
            var defender = $q.defer();
            var promise = defender.promise;
            $timeout(function () {
                try {
                    var rs = false;
                    Service.getCrud({ id: parseInt($scope.id) }, "/Salud.svc/DeleteEmpleados").then(function (d) {
                        rs = JSON.parse(d.data);
                        defender.resolve(rs);
                    });
                } catch (e) {
                    defender.reject(e);
                }
            });
            return promise;
        };
        $scope.editar = function () {
            $("#ced").prop("disabled", true);
            $("#pnombre").prop("disabled", true);
            $("#snombre").prop("disabled", true);
            $("#ppellido").prop("disabled", true);
            $("#spellido").prop("disabled", true);
        }

        $scope.rsEmpleado = function (v) {
            $scope.id = JSON.parse(v).id;
            if ($scope.id != '' && $scope.id != null) {
                Service.getCrud({ id: parseInt($scope.id) }, "/Servicios.svc/ReadEmpleados").then(function (d) {
                    var rs = JSON.parse(d.data);
                    $scope.json = rs;
                    $scope.json.cedula_emp = parseInt(rs.cedula_emp);
                    $scope.json.empresa = rs.empresa;
                    $scope.key.value = rs.area;
                    console.log($scope.key.value);
                    $scope.disabledbtn.eliminar = false;
                    $scope.disabledbtn.editar = false;
                });
            }
        };
        $scope.dataEmpleado = {
            id: 'dataBuscador',
            component: [{ id: 'empleados-buscar', type: 'btn' }],
            table: 'empleado',
            column: [
                { name: 'id', as: 'id', visible: false },
                { name: 'cedula_emp', as: 'Cedula', visible: true },
                { name: 'nombre', as: 'Nombre', visible: true },
                { name: 'snombre', as: 'S_Nombre', visible: true },
                { name: 'ppellido', as: 'P_Apellido', visible: true },
                { name: 'spellido', as: 'S_Apellido', visible: true },
                { name: 'area', as: 'Area', visible: false },
                //{ name: 'cargo', as: 'Cargo', visible: false },

            ],
            where: [],
            groupby: false,
            orderby: [],
            title: 'Busqueda de Empleados'
        };
        //$scope.dataEmpleado.where.push({ col: "usu_id", filter: "='" + $scope.json.usu_id + "'", join: '' });

        $scope.Validate_Empleado = function () {
            if ($scope.json.cedula_emp != '' && $scope.json.cedula_emp != undefined) {
                Service.getCrud({ cedula: $scope.json.cedula_emp }, "/Servicios.svc/ValidateEmpleados").then(function (d) {
                    if (d.data == 'true') {
                        $scope.json.cedula_emp = '';
                        alert('El empleado ya existe, por favor ingrese uno nuevo');
                    }
                });
            }
        }

        /*CONFIG BUSQUEDA RAPIDA*/
        $scope.dataNombre = {
            id: 'buscadorNombre',
            component: [{ id: 'brNombre', type: '' }],
            table: 'area_ccosto',
            column: [
                { name: 'rtrim(ltrim(id))', as: 'Id', visible: true },
                { name: 'rtrim(ltrim(area))', as: 'Area', visible: true },
                { name: 'rtrim(ltrim(ccosto))', as: 'Ccosto', visible: false },


            ],
            where: {},
            groupby: true,
            orderby: [],
            title: 'Buscar Area',
            required: true
        };
        $scope.rsNombre = function (d) {
            var j = JSON.parse(d);
            $scope.json.ccosto = j.Ccosto;
            $scope.json.area = j.Area;

        }


    }
    //MODULO COMPRAS
    function Ingreso_Presupuesto($scope, $q, Service, Auth, $timeout) {
        $scope.json2 = {};
        $scope.sh_add = true;
        $scope.tabla = [];
        $scope.openWai = false;

        /*BARRA*/
        $scope.showbtn = { buscar: false, imprimir: false, nuevo: true, editar: false, eliminar: true, cerrar: false };
        $scope.disabledbtn = { buscar: false, imprimir: true, nuevo: false, editar: true, eliminar: true };

        $scope.nuevo = function () {
            $timeout(function () {
                $scope.json2 = {};
                $scope.tabla = [];
            });
        }

        $scope.buscar_ccosto = function () {
            $timeout(function () {
                document.getElementById("br_ccosto").click(); // Click on the checkbox
            });
        }

        $scope.buscar_cuenta= function () {
            $timeout(function () {
                document.getElementById("br_cuentas").click(); // Click on the checkbox
            });
        }

        /*CONFIG BUSQUEDA*/
        $scope.dataCcosto = {
            id: 'dataBuscador',
            component: [{ id: 'br_ccosto', type: 'btn' }],
            table: 'area_ccosto',
            column: [
                { name: 'rtrim(ltrim(ccosto))', as: 'Ccosto', visible: true },
                { name: 'rtrim(ltrim(area))', as: 'Descripcion', visible: true }

            ],
            where: [],
            groupby: false,
            orderby: [],
            title: 'BUSQUEDA CENTRO DE COSTO'
        };
        $scope.rsCcosto = function (v) {
            var rs = JSON.parse(v);
            $scope.json2.ccosto = rs.Ccosto;
            $scope.json2.des_ccosto = rs.Descripcion;
        }

        /*CONFIG BUSQUEDA CUENTA*/
        $scope.dataCuenta= {
            id: 'dataCuentas',
            component: [{ id: 'br_cuentas', type: 'btn' }],
            table: 'cuentas',
            column: [
                { name: 'rtrim(ltrim(cuenta))', as: 'Cuenta', visible: true },
                { name: 'rtrim(ltrim(rubro))', as: 'Rubro', visible: true }

            ],
            where: [],
            groupby: false,
            orderby: [],
            title: 'BUSQUEDA CUENTAS'
        };
        $scope.rsCuenta= function (v) {
            var rs = JSON.parse(v);
            $scope.json2.cuenta = rs.Cuenta;
            $scope.json2.rubro = rs.Rubro;
        }

        $scope.add = function () {
            Service.getCrud({ ano:$scope.ano, cuenta: $scope.json2.cuenta, ccosto: $scope.json2.ccosto}, '/Servicios.svc/ValidatePresupuesto').then(function (d) {
                var rs = JSON.parse(d.data);
                if (rs <= 0) {
                    if ($scope.ano != undefined && $scope.ano != "") {
                        if ($scope.json2.rubro != undefined && $scope.json2.rubro != "") {
                            if ($scope.json2.ccosto != undefined && $scope.json2.ccosto != "") {
                                if ($scope.json2.valor != undefined && $scope.json2.valor != "" && $scope.json2.valor > 0) {
                                    $scope.json2.ano = $scope.ano;
                                    $scope.tabla.push($scope.json2);
                                    $scope.json2 = {};
                                } else {
                                    alert("DEBE INGRESAR UN VALOR VALIDO");
                                }
                            } else {
                                alert("DEBE SELECCIONAR EL CENTRO DE COSTO");
                            }
                        } else {
                            alert("DEBE SELECCIONAR UNA CUENTA");
                        }
                    } else {
                        alert("DEBE SELECCIONAR EL AÑO");
                    }
                } else {
                    alert("EL PRESUPUESTO YA EXISTE");
                }
            });

        }

        $scope.deleteGrilla = function (index) {
            $scope.tabla.splice(index, 1);
        }

        $scope.guardar = function () {
            var defender = $q.defer();
            var promise = defender.promise;
            if (!$scope.ing_presu.$valid) {
                var cr = "Campos requeridos no diligenciados";
                $scope.ing_presu.$error.required.forEach(function (item, index) {
                    cr += "\n - " + item.$name;
                });
                alert(cr);
                defender.resolve(false);
                return promise;
            } else {
                $timeout(function () {
                    try {
                        var rs = false;
                        if ($scope.tabla.length > 0) {
                            $scope.openWai = true;
                            Service.getCrud({ codigo_usuario: $scope.log_user, tabla: angular.toJson($scope.tabla) }, '/Servicios.svc/CreatePresupuesto').then(function (d) {
                                rs = JSON.parse(d.data);
                                defender.resolve(rs);
                                alert("GUARDADO EXITOSO!");
                                $scope.openWai = false;
                            });
                        } else {
                            alert("DEBE INGRESAR AL MENOS UN PRESUPUESTO")
                        }
                    } catch (e) {
                        defender.reject(e);
                    }


                });
            }
            return promise;
        };


    }
    function Ajuste_Presupuesto($scope, $q, Service, Auth, $timeout,ssDate) {
        $scope.json2 = {};
        $scope.json = {};
        $scope.json3 = {};
        $scope.sh_add = true;
        $scope.key = { value: '' };
        $scope.key2 = { value: '' };
        $scope.openWaiting = true;
        $scope.message = false;
        $scope.message_confirm = false;
        $scope.show_pp = true;
        $scope.log_user = Auth.getUserObj().username;
        $scope.json.log_user = Auth.getUserObj().username;
        $scope.openWait = false;
        $scope.openModalPRO = false;


        $scope.show_mov = function (id) {
            $scope.openWait = true;
            $scope.openModalPRO = true;
            Service.getCrud({ id: id }, '/Servicios.svc/buscar_movimientos_pre').then(function (d) {
                var rs = JSON.parse(d.data);
                $scope.json5 = {};
                $scope.json5 = rs[0];
                $scope.grillapre = [];
                $scope.grillapre = rs[1];
            /******************************************************************************************** */
                $scope.report = [];
                $scope.grillapre.forEach(function (item, index) {
                    $scope.ins = {};
                    $scope.ins.id_presupuesto = item.id_presupuesto;
                    if (item.fecha != '/Date(-62135578800000)/') {
                        $scope.ins.fecha  = $scope.convert(item.fecha);
                    } else {
                        $scope.ins.fecha= "";

                    }
                   
                    $scope.ins.observacion = item.observacion;
                    $scope.ins.saldo_anterior = item.valor_ant;
                    $scope.ins.nuevo_saldo = item.nuevo_saldo;
                    $scope.ins.diferencia = parseFloat(item.nuevo_saldo - item.valor_ant);

                    $scope.report.push($scope.ins);
                })
                $scope.jsonexcel2 = {};
                $scope.jsonexcel2 = $scope.report;


/*************************************************************************************** */
                $scope.openWait = true;
                $scope.openModalPRO = true;
            });
        }

        $scope.closePRO = function () {
            $scope.openWait = false;
            $scope.openModalPRO = false;
        }

        $scope.formatnumber = function (num) {
            //var num = input.value.replace(/\./g, '');
            if (!isNaN(num)) {
                num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
                num = num.split('').reverse().join('').replace(/^[\.]/, '');
                return '$' + num;
            }
        }

        $scope.show_tabs = function (x) {
            if (x == 1) {
                $scope.show_pp = true;
                $scope.TRAS_PRE = false;
                $scope.INFORME_PRE = false;
                $scope.show_asig_anual = false;
            } else if (x == 2) {
                $scope.show_pp = false;
                $scope.TRAS_PRE = false;
                $scope.INFORME_PRE = true;
                $scope.show_asig_anual = false;
            } else if (x == 3) {
                $scope.show_pp = false;
                $scope.TRAS_PRE = true;
                $scope.INFORME_PRE = false;
                $scope.show_asig_anual = false;
            } else if (x == 4) {
                $scope.show_pp = false;
                $scope.TRAS_PRE = false;
                $scope.INFORME_PRE = false;
                $scope.show_asig_anual = true;
            }
        }


        $scope.preload = function () {
        Service.getCrud({}, "/Servicios.svc/PreloadPresupuesto").then(function (d) {
            $scope.tabla = JSON.parse(d.data)[0];
            $scope.openWaiting = false;
            $scope.report = [];
            $scope.tabla.forEach(function (item, index) {
                $scope.ins = {};
                $scope.ins.Año = item.ano;
                $scope.ins.cuenta = item.cuenta;
                $scope.ins.Rubro = item.rubro;
                $scope.ins.CECO = item.ccosto;
                $scope.ins.Presupuesto_Inicial = item.total_presupuesto;
                $scope.ins.Ejecutado = item.total_ejecucion;
                $scope.ins.Disponible = item.disponibilidad;

                $scope.report.push($scope.ins);
            })
            $scope.jsonexcel = {};
            $scope.jsonexcel = $scope.report;
        });
        }
        $scope.preload();

        $scope.ejecutar = function () {
            $scope.openWaiting = true;
            Service.getCrud({}, "/Servicios.svc/execute_saldos_pdte_af").then(function (d) {
                $scope.grilla_no_ejec = [];
                $scope.grilla_no_ejec = JSON.parse(d.data);
                console.log($scope.grilla_no_ejec);
                $scope.openWaiting = false;

            });
        }
        

        $scope.ajustar = function () {
            if ($scope.json.cuenta != null) {
                if ($scope.json.observacion != null && $scope.json.observacion != '') {
                    $scope.openWaiting = true;
                    Service.getCrud({ json: angular.toJson($scope.json), observacion: $scope.json.observacion, valor_ant: $scope.valor_ant, adiccion: $scope.json.adiccion, log_user: $scope.log_user }, '/Servicios.svc/AjustarPresupuesto').then(function (d) {
                        var rs = JSON.parse(d.data);
                        $scope.message = true;
                        $scope.preload();
                        $scope.json = {};
                    });
                } else {
                    alert("EL CAMPO OBSERVACION ES OBLIGATORIO");
                }
            } else {
                alert("DEBE SELECCIONAR EL PRESPUESTO A EDITAR");
            }
        }

        $scope.guardar_traslado = function () {
            if ($scope.json2.cuenta != null && $scope.json3.cuenta != null) {
                if ($scope.json2.observacion != null && $scope.json2.observacion != '') {
                    $scope.openWaiting = true;
                    Service.getCrud({ json1: angular.toJson($scope.json2), json2: angular.toJson($scope.json3) }, '/Servicios.svc/TrasladoPresupuesto').then(function (d) {
                        var rs = JSON.parse(d.data);
                        if (rs > 0) {
                            $scope.message_confirm = true;
                            $scope.preload();
                            $scope.json2 = {};
                            $scope.json3 = {};
                        } else {
                            alert("EL VALOR A TRASLADAR SUPERA LA DISPONIBILIDAD");
                            $scope.openWaiting = false;
                        }
                    });
                } else {
                    alert("EL CAMPO OBSERVACION ES OBLIGATORIO");
                    $scope.openWaiting = false;
                }
            } else {
                alert("DEBE SELECCIONAR LAS CUENTA PARA REALIZAR LA TRANFERENCIA");
                $scope.openWaiting = false;
            }
        }

        /*CONFIG BUSQUEDA RAPIDA*/
        $scope.dataPresupuesto = {
            id: 'buscadorNombre',
            component: [{ id: 'brNombre', type: '' }],
            table: 'presupuesto',
            column: [
                { name: 'rtrim(ltrim(cuenta))', as: 'Cuenta', visible: true },
                { name: 'rtrim(ltrim(rubro))', as: 'Rubro', visible: true },
                { name: 'rtrim(ltrim(ccosto))', as: 'CECO', visible: true },
                { name: 'str(total_presupuesto)', as: 'Presupuesto_Inicial', visible: true },
                { name: 'str(disponibilidad)', as: 'Disponibilidad', visible: true },
                { name: 'rtrim(ltrim(ano))', as: 'Año', visible: true },
                { name: 'rtrim(ltrim(id))', as: 'ID', visible: true }

            ],
            where: {},
            groupby: true,
            orderby: [],
            title: 'Buscar Presupuesto',
            required: true
        };
        $scope.dataPresupuesto.where = [];
        $scope.dataPresupuesto.where.push({ col: "ano", filter: "='2022'", join: '' });
        $scope.rsPresupuesto = function (d) {
            var x = JSON.parse(d);
            $scope.message = false;
            $scope.json.cuenta = x.Cuenta;
            $scope.json.rubro = x.Rubro;
            $scope.json.ccosto = x.CECO;
            $scope.json.total_presupuesto = parseFloat(x.Presupuesto_Inicial);
            $scope.valor_ant = parseFloat(x.Disponibilidad);
            $scope.json.disponible = parseFloat(x.Disponibilidad);
            $scope.json.id = x.ID;
            $scope.json.ano = x.Año;
        }

        /*CONFIG BUSQUEDA RAPIDA PRESUPUESTO INICIAL*/
        $scope.dataPresupuestoini = {
            id: 'buscadorpresuini',
            component: [{ id: 'brpresuini', type: '' }],
            table: 'presupuesto',
            column: [
                { name: 'rtrim(ltrim(cuenta))', as: 'Cuentaa', visible: true },
                { name: 'rtrim(ltrim(rubro))', as: 'Rubroo', visible: true },
                { name: 'rtrim(ltrim(ccosto))', as: 'CECOO', visible: true },
                { name: 'str(total_presupuesto)', as: 'Presupuesto_Inicial', visible: true },
                { name: 'str(disponibilidad)', as: 'Disponible', visible: true },
                { name: 'rtrim(ltrim(ano))', as: 'Añoo', visible: true },
                { name: 'rtrim(ltrim(id))', as: 'IDD', visible: false }

            ],
            where: {},
            groupby: true,
            orderby: [],
            title: 'Buscar Presupuesto',
            required: true
        };
        $scope.dataPresupuestoini.where = [];
        $scope.dataPresupuestoini.where.push({ col: "ano", filter: "='2022'", join: '' });
        $scope.rsPresupuestofin = function (d) {
            var x = JSON.parse(d);
            $scope.json2.cuenta = x.Cuentaa;
            $scope.json2.rubro = x.Rubroo;
            $scope.json2.ccosto = x.CECOO;
            $scope.json2.total_presupuesto = parseFloat(x.Presupuesto_Inicial);
            $scope.json2.disponible = parseFloat(x.Disponible);
            $scope.json2.id = x.IDD;
        }

        /*CONFIG BUSQUEDA RAPIDA PRESUPUESTO FINAL*/
        $scope.dataPresupuestofinal = {
            id: 'buscadorpresufin',
            component: [{ id: 'brpresufin', type: '' }],
            table: 'presupuesto',
            column: [
                { name: 'rtrim(ltrim(cuenta))', as: 'Cuenta', visible: true },
                { name: 'rtrim(ltrim(rubro))', as: 'Rubro', visible: true },
                { name: 'rtrim(ltrim(ccosto))', as: 'CECO', visible: true },
                { name: 'str(total_presupuesto)', as: 'Presupuesto_Inicial', visible: true },
                { name: 'str(disponibilidad)', as: 'Disponible', visible: true },
                { name: 'rtrim(ltrim(ano))', as: 'Año', visible: true },
                { name: 'rtrim(ltrim(id))', as: 'ID', visible: false }

            ],
            where: {},
            groupby: true,
            orderby: [],
            title: 'Buscar Presupuesto',
            required: true
        };
        $scope.dataPresupuestofinal.where = [];
        $scope.dataPresupuestofinal.where.push({ col: "ano", filter: "='2022'", join: '' });
        $scope.rsPresupuestofinal = function (d) {
            var x = JSON.parse(d);
            $scope.json3.cuenta = x.Cuenta;
            $scope.json3.rubro = x.Rubro;
            $scope.json3.ccosto = x.CECO;
            $scope.json3.total_presupuesto = parseFloat(x.Presupuesto_Inicial);
            $scope.json3.disponible = parseFloat(x.Disponible);
            $scope.json3.id = x.ID;
            
        }

        $scope.calcular_valor = function () {
            if ($scope.json2.valor_traslado > 0) {
                $scope.json2.nuevo_total = $scope.json2.valor_traslado + $scope.json3.disponible;
            } else {
                $scope.json2.valor_traslado = '';
                alert("EL VALOR A TRASLADAR DEBE SER SUPERIOR A 0");
            }
            
        }

        /*BARRA*/
        $scope.showbtn = { buscar: true, imprimir: false, nuevo: true, editar: true, eliminar: true, cerrar: false };
        $scope.disabledbtn = { buscar: false, imprimir: true, nuevo: false, editar: true, eliminar: true };


        $scope.convert = function (x) {
            var aux = ssDate.militodate(x);
            return ssDate.dateToString(aux, 'dd-MM-yyyy');
        }

        //EXPORTAR A EXCEL

        $scope.JSONToCSVConvertor = function (JSONData, ReportTitle, ShowLabel) {

            //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
            var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;

            var CSV = '';
            //Set Report title in first row or line

            CSV += ReportTitle + '\r\n\n';

            //This condition will generate the Label/Header
            if (ShowLabel) {
                var row = "";

                //This loop will extract the label from 1st index of on array
                for (var index in arrData[0]) {

                    //Now convert each value to string and comma-seprated
                    row += index + ',';
                }

                row = row.slice(0, -1);

                //append Label row with line break
                CSV += row + '\r\n';
            }

            //1st loop is to extract each row
            for (var i = 0; i < arrData.length; i++) {
                var row2 = "";

                //2nd loop will extract each column and convert it in string comma-seprated
                for (var index1 in arrData[i]) {
                    row2 += '"' + arrData[i][index1] + '",';
                }

                row2.slice(0, row2.length - 1);

                //add a line break after each row
                CSV += row2 + '\r\n';
            }

            if (CSV == '') {
                alert("Invalid data");
                return;
            }
            //FECHA ACTUAL
            var fecha = ssDate.dateToString(Date.now(), 'yyyy-MM-dd');

            //Generate a file name
            var fileName = "Descarga_" + fecha;
            //this will remove the blank-spaces from the title and replace it with an underscore
            fileName += ReportTitle.replace(/ /g, "_");

            //Initialize file format you want csv or xls
            var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);
            // Now the little tricky part.
            // you can use either>> window.open(uri);
            // but this will not work in some browsers
            // or you will not get the correct file extension    

            //this trick will generate a temp <a /> tag
            var link = document.createElement("a");
            link.href = uri;
            //link.target = "_blank";
            //set the visibility hidden so it will not effect on your web-layout
            link.style = "visibility:true";
            link.download = fileName + ".csv";

            //this part will append the anchor tag and remove it after automatic click
            console.log(link)
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        $scope.fnExcelReport = function () {
            $scope.tabla.forEach(function (item, index) {
                if (item.Fecha != '/Date(-62135578800000)/') {
                    item.Fecha = $scope.convert(item.Fecha);
                } else {
                    item.Fecha = "";
                }
            });
            $scope.JSONToCSVConvertor($scope.jsonexcel, "", true);
        }

        $scope.fnExcelReport2 = function () {
            $scope.grillapre.forEach(function (item, index) {
              if (item.fecha != '/Date(-62135578800000)/') {
                    item.fecha = $scope.convert(item.fecha);
                } else {
                  item.fecha = "";
                  
                }
            });
            $scope.JSONToCSVConvertor($scope.jsonexcel2, "", true);
        }

        // JSON to CSV Converter
        $scope.ConvertToCSV = function (tabla) {
            var array = typeof tabla != 'object' ? JSON.parse(tabla) : tabla;
            var str = '';

            for (var i = 0; i < array.length; i++) {
                var line = '';
                for (var index in array[i]) {
                    if (line != '') line += ';'

                    line += array[i][index];
                }

                str += line + '\r\n';
            }
            $scope.resultcvs = str;
        }

        // Example


        // Create Object
        var items = [
            { name: "Item 1", color: "Green", size: "X-Large" },
            { name: "Item 2", color: "Green", size: "X-Large" },
            { name: "Item 3", color: "Green", size: "X-Large" }];

        // Convert Object to JSON
        var jsonObject = JSON.stringify(items);
    }
    function Generar_PedidoController($scope, $q, Service, Auth, $timeout, ssDate) {
        $scope.json2 = {};
        $scope.json = {};
        $scope.tabla = [];
        $scope.sh_add = true;
        $scope.key2 = { value: '' };
        $scope.key3 = { value: '' };
        $scope.key5 = { value: '' };
        $scope.openWaiting = true;
        $scope.usuario = Auth.getUserObj().nombre_usuario;

        Service.getCrud({}, "/Servicios.svc/PreloaDirectivos").then(function (d) {
            $scope.directivos = JSON.parse(d.data)[0];

        });

        /*BARRA*/
        $scope.showbtn = { buscar: true, imprimir: false, nuevo: true, editar: false, eliminar: false, cerrar: false };
        $scope.disabledbtn = { buscar: false, imprimir: false, nuevo: false, editar: true, eliminar: true };

        $scope.nuevo = function () {
            
            $scope.json2 = {};
            $scope.json = {};
            $scope.tabla = [];
            $scope.key2 = { value: '' };
            $scope.key3 = { value: '' };
            $scope.json.fecha = "";
            $scope.json.usuario = "";

            $timeout(function () {
                $scope.json.usuario = Auth.getUserObj().nombre_usuario;
                $scope.json.fecha = new Date();
            });
        }

        $scope.cancelar = function () {
            $scope.json2 = {};
            $scope.json = {};
            $scope.tabla = [];
            $scope.key2 = { value: '' };
            $scope.key3 = { value: '' };
            $scope.json.fecha = "";
            $scope.json.usuario = "";
        }

        $scope.guardar = function () {

                var defender = $q.defer();
                var promise = defender.promise;
                if (!$scope.pedidos.$valid) {
                    var cr = "Campos requeridos no diligenciados:";
                    $scope.pedidos.$error.required.forEach(function (item, index) {
                        cr += "\n - " + item.$name;
                    });
                    alert(cr);
                    defender.resolve(false);
                    return promise;
                } else {
                    if ($scope.tabla.length > 0) {
                    $timeout(function () {
                        try {
                            var rs = false;
                            Service.getCrud({ json: angular.toJson($scope.json), tabla: angular.toJson($scope.tabla) }, '/Servicios.svc/CreatePedidos').then(function (d) {
                                rs = JSON.parse(d.data);
                                defender.resolve(rs[0] > 0);
                                $scope.json.nro_pedido = rs[1];
                                alert("SU PEDIDO FUE GENERADO CON NUMERO " + $scope.json.nro_pedido);
                               
                            });
                        } catch (e) {
                            defender.reject(e);
                        }
                    });
                    } else {
                        alert("DEBE INGRESAR AL MENOS UN ARTICULO EN EL PEDIDO");
                    }
                }
                return promise;
        };

        /*CONFIG BUSQUEDA RAPIDA*/
        $scope.dataPresupuesto = {
            id: 'buscadorNombre',
            component: [{ id: 'brNombre', type: '' }],
            table: 'presupuesto',
            column: [
                { name: 'rtrim(ltrim(cuenta))', as: 'Cuenta', visible: true },
                { name: 'rtrim(ltrim(rubro))', as: 'Rubro', visible: true },
                { name: 'rtrim(ltrim(ccosto))', as: 'CECO', visible: true },
                { name: 'rtrim(ltrim(total_presupuesto))', as: 'Total_Presupuesto', visible: true },
                { name: 'rtrim(ltrim(disponibilidad))', as: 'Disponibilidad', visible: true },
                { name: 'rtrim(ltrim(ano))', as: 'Año', visible: true },
                { name: 'rtrim(ltrim(id))', as: 'ID', visible: true }

            ],
            where: {},
            groupby: true,
            orderby: [],
            title: 'Buscar Presupuesto',
            required: true
        };
        $scope.rsPresupuesto = function (d) {
            var x = JSON.parse(d);
            $scope.message = false;
            $scope.json.cuenta = x.Cuenta;
            $scope.json.rubro = x.Rubro;
            $scope.json.ccosto = x.CECO;
            $scope.json.total_presupuesto = parseFloat(x.Total_Presupuesto);
            $scope.valor_ant = parseFloat(x.Disponibilidad);
            $scope.json.id = x.ID;
            $scope.json.ano = x.Año;
        }



        //BUSCADOR DE PEDIDOS

        $scope.dataPedido = {
            id: 'dataBuscador',
            component: [{ id: 'pedidos-buscar', type: 'btn' }],
            table: 'pedidos',
            column: [
                { name: 'id', as: 'id', visible: false },
                { name: 'nro_pedido', as: 'Nro_pedido', visible: true },
                { name: 'fecha', as: 'Fecha', visible: true },
                { name: 'vlr_total', as: 'Total', visible: true }
            ],
            where: [{ col: "pedidos.usuario", filter: "='" + $scope.usuario+"'", join: '' }],
            groupby: false,
            orderby: [],
            title: 'Busqueda de Pedidos'
        };
        $scope.rsPedido = function (v) {
            $scope.id = JSON.parse(v).id;
            if ($scope.id != '' && $scope.id != null) {
                Service.getCrud({ id: parseInt($scope.id) }, "/Servicios.svc/ReadPedido").then(function (d) {
                    var rs = JSON.parse(d.data);
                    console.log(rs);
                    $scope.json = rs[0];
                    $scope.json.fecha = ssDate.militodate(rs[0].fecha);
                    $scope.tabla = rs[1];
                    $scope.sh_add = false;
                    $scope.sh_update = false;
                    $scope.sh_edit = false;
                    $scope.key2.value = rs[0].ccosto;
                    $scope.key3.value = rs[0].proveedor;
                    $scope.showbtn.imprimir = true;
                });
            }
        };



        $("#articulo").keydown(function (event) {
            console.log("entrooo")
            if (event.which == 113) {
                console.log("entrooo2")
                document.getElementById("buscar_pro").click(); // Click on the checkbox
            }
        });

        /*OBJETO PARA ENTREGA*/
        $scope.dataBuscador_objeto = {
            id: 'buscadorobject',
            component: [{ id: 'articulo', type: 'btn' }],
            table: 'compras_articulos',
            column: [
                { name: 'rtrim(ltrim(compras_articulos.id))', as: 'id', visible: false },
                { name: 'rtrim(ltrim(compras_articulos.codigo))', as: 'Codigo', visible: true },
                { name: 'rtrim(ltrim(compras_articulos.descripcion))', as: 'Descripcion', visible: true },
                { name: 'rtrim(ltrim(compras_articulos.und))', as: 'Und', visible: true },
                { name: 'rtrim(ltrim(iva.porcentaje))', as: 'iva', visible: false },
                { name: 'rtrim(ltrim(compras_articulos.cuenta))', as: 'Cuenta', visible: true }
            ],
            inner_join: [{ table: "iva", on: "compras_articulos.tipo_iva = iva.tipo", join: "" }],
            where: [],
            orderby: [],
            groupby: true,
            title: 'Buscar Articulo',

        };
        $scope.resultado_objeto = function (d) {
            var j = JSON.parse(d);
            $scope.json2.codigo_art = j.Codigo;
            $scope.json2.descripcion = j.Descripcion;
            $scope.json2.iva = parseFloat(j.iva);
            $scope.json2.cuenta = j.Cuenta;
            $scope.json2.und = j.Und;
            
        }

        //FUNCIONES DE LA TABLA

        $scope.add = function () {
            if ($scope.json2.codigo_art != undefined && $scope.json2.codigo_art != "") {
                if ($scope.json2.cantidad != undefined && $scope.json2.cantidad != "" && $scope.json2.cantidad > 0) {
                    if ($scope.json2.valor != undefined && $scope.json2.valor != "" && $scope.json2.valor > 0) {
                        $scope.json2.iva = $scope.json2.valor * ($scope.json2.iva);
                        $scope.json2.subtotal = ($scope.json2.cantidad * $scope.json2.valor);
                        $scope.json2.total = Math.round(($scope.json2.valor + $scope.json2.iva) * $scope.json2.cantidad);
                        $scope.tabla.push($scope.json2);
                        $scope.json2 = {};
                        $scope.calcular_total();
                    } else {
                        alert("DEBE INGRESAR UN VALOR VALIDO");
                    }
                } else {
                    alert("DEBE INGRESAR UNA CANTIDAD DE VALIDA");
                }
            } else {
                alert("DEBE SELECCIONAR UN CODIGO DE ARTICULO");
            }
        }

        $scope.deleteGrilla = function (index) {
            $scope.tabla.splice(index, 1);
            $scope.calcular_total();
        }

        $scope.calcular_total = function () {
            $scope.json.vlr_total = 0;
            $scope.tabla.forEach(function (item, index) {
                $scope.json.vlr_total += item.total;
            })
        }

        $scope.formatnumber = function (num) {
            //var num = input.value.replace(/\./g, '');
            if (!isNaN(num)) {
                num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
                num = num.split('').reverse().join('').replace(/^[\.]/, '');
                return '$' + num;
            }
        }

        $scope.imprimir = function () {
                $timeout(function () {
                    $('#menu').addClass("ss-nav-inactive");
                    $('#wrapper').addClass("ss-full-view");
                    window.print();
                });
        }

        /*CONFIG BUSQUEDA RAPIDA CCOSTO*/
        $scope.dataccosto = {
            id: 'buscadorccosto',
            component: [{ id: 'brCosto', type: '' }],
            table: 'area_ccosto',
            column: [
                { name: 'rtrim(ltrim(ccosto))', as: 'Ccosto', visible: true },
                { name: 'rtrim(ltrim(area))', as: 'Area', visible: true }
            ],
            where: {},
            groupby: true,
            orderby: [],
            title: 'BUSCAR CENTRO DE COSTO',
            required_name: "CENTRO DE COSTO"
        };
        $scope.rsccosto = function (d) {
            var j = JSON.parse(d);
            $scope.json.ccosto = j.Ccosto;
            $scope.json.name_ceco = j.Area;
        }

    /*CONFIG BUSQUEDA RAPIDA CCOSTO*/
        $scope.dataproveedor = {
            id: 'buscadorprov',
            component: [{ id: 'brProvee', type: '' }],
            table: 'proveedor',
            column: [
                { name: 'rtrim(ltrim(nit))', as: 'NIT', visible: true },
                { name: 'rtrim(ltrim(razon_social))', as: 'RZ', visible: true },
                { name: 'rtrim(ltrim(contrato))', as: 'CONT', visible: true }
            ],
            where: [{ col: "PROVEEDOR.estado", filter: "= 2", join: '' }],
            groupby: true,
            orderby: [],
            title: 'BUSCAR PROVEEDOR',
            required_name: "PROVEEDOR"
        };
        $scope.rsproveedor = function (d) {
            var j = JSON.parse(d);
            $scope.json.proveedor = j.NIT;
            $scope.json.name_proveedor = j.RZ;

            if (j.CONT != '') {
                $scope.json.nro_contrato = j.CONT;
            }
        }

    }
    function Reporte_Pedidos($scope, $q, Service, Auth, $timeout, ssDate) {
        $scope.json = {};
        $scope.json3 = {};
        $scope.key = { value: '' };
        $scope.key2 = { value: '' };
        $scope.openWai = true;
        $scope.key2 = { value: '' };
        Service.getCrud({}, "/Servicios.svc/preload_ccosto").then(function (d) {
            var rs = JSON.parse(d.data);
            $scope.centros = rs[0];
        });
        $scope.preload = function () {
            Service.getCrud({ tipo: $scope.tipo_activo }, "/Servicios.svc/ReportePedidos_finan").then(function (d) {
                var rs = JSON.parse(d.data)[0];
                $scope.grilla = [];
                $scope.grilla = rs;
                $scope.openWai = false;
            });
        }
        $scope.preload();
        $scope.formatnumber = function (num) {
            //var num = input.value.replace(/\./g, '');
            if (!isNaN(num)) {
                num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
                num = num.split('').reverse().join('').replace(/^[\.]/, '');
                return '$' + num;
            }
        }


        $timeout(function () {
            $("#brNombre-btn-clave").attr('disabled', 'disabled');
            $("#brProvee-btn-clave").attr('disabled', 'disabled');
            $("#brProvee-btn-valor").attr('disabled', 'disabled');
            $("#brProvee-btn-btn").attr('disabled', 'disabled');
            $("#brNombre-btn-valor").attr('disabled', 'disabled');
            $("#brNombre-btn-btn").attr('disabled', 'disabled');

            $("#brProvee-clave").attr('disabled', 'disabled');
            $("#brProvee-valor").attr('disabled', 'disabled');
            $("#brProvee-btn").attr('disabled', 'disabled');
            $("#brNombre-clave").attr('disabled', 'disabled');
            $("#brNombre-valor").attr('disabled', 'disabled');
            $("#brNombre-btn").attr('disabled', 'disabled');
        });

        $scope.clickCheck = function (key) {
             
            console.log(key);
        }

        $scope.buscar_acta = function (item) {
            $scope.openWaiting = true;
            $scope.openModalPRO = true;
            Service.getCrud({ numero_ped: item.nro_pedido }, "/Servicios.svc/Reporte_Nro_pedido").then(function (d) {
                var rs = JSON.parse(d.data);
                $scope.json3 = rs[0];
                $scope.json3.fecha = ssDate.militodate($scope.json3.fecha);
                $scope.key2.value = rs[0].ccosto;
                $scope.key3.value = rs[0].proveedor;
                $scope.tablapedidos = [];
                $scope.tablapedidos = rs[1];
            });
        }

        $scope.buscar_srp = function (item) {
            $scope.showsrp = true;
            $scope.openModalPRO = true;
            Service.getCrud({ numero_ped: item.nro_pedido }, "/Servicios.svc/Reporte_SRP").then(function (d) {
                var rs = JSON.parse(d.data);
                $scope.json3 = rs[0];
                $scope.json3.fecha = ssDate.militodate($scope.json3.fecha);
                $scope.key2.value = rs[0].ccosto;
                $scope.key3.value = rs[0].proveedor;
                $scope.tablapedidos = [];
                $scope.tablapedidos = rs[1];
                $scope.vlr_total = 0;
                $scope.tablapedidos.forEach(function (item, index) {
                    $scope.vlr_total = $scope.vlr_total + item.total;
                })
            });
        }

        $scope.closePRO = function () {
            $scope.openWaiting = false;
            $scope.openModalPRO = false;
            $scope.showsrp = false;
        }


       

        $scope.guardar_aprobados = function () {

            $scope.openWai = true;
            $timeout(function () {

                var rs = false;

                $scope.grillaAprobados = [];

                $scope.grilla.forEach(function (item, index) {

                    if (item.vto_bueno_finan != 1) {
                        item.vto_bueno_finan = 0;
                    } else if (item.estado == "PENDIENTE") { 
                        $scope.grillaAprobados.push(item);
                    }
                })

                
                Service.getCrud({ tabla: angular.toJson($scope.grillaAprobados) }, '/Servicios.svc/Aprobado_financiera').then(function (d) {
                        rs = JSON.parse(d.data);
                        $scope.preload();
                        alert('Guardado exitoso');
                        $scope.openWai = false;

                        });
                });
            return promise;

        };





        $scope.convert = function (x) {
                var aux = ssDate.militodate(x);
                return ssDate.dateToString(aux, 'dd-MM-yyyy');
        }

        $scope.convertst = function (x) {
            return x = '$ ' + x;
        }


        /*CONFIG BUSQUEDA RAPIDA CCOSTO*/
        $scope.dataccosto = {
            id: 'buscadorNombre',
            component: [{ id: 'brNombre', type: '' }],
            table: 'area_ccosto',
            column: [
                { name: 'rtrim(ltrim(ccosto))', as: 'Ccosto', visible: true },
                { name: 'rtrim(ltrim(area))', as: 'Area', visible: true }



            ],
            where: {},
            groupby: true,
            orderby: [],
            title: 'BUSCAR CENTRO DE COSTO',
            required_name: "CENTRO DE COSTO"
        };
        $scope.rsccosto = function (d) {
            var j = JSON.parse(d);
            $scope.json.ccosto = j.Ccosto;

        }

        /*CONFIG BUSQUEDA RAPIDA CCOSTO*/
        $scope.key3 = { value: '' };
        $scope.dataproveedor = {
            id: 'buscadorprov',
            component: [{ id: 'brProvee', type: '' }],
            table: 'proveedor',
            column: [
                { name: 'rtrim(ltrim(nit))', as: 'NIT', visible: true },
                { name: 'rtrim(ltrim(razon_social))', as: 'RZ', visible: true }

            ],
            where: {},
            groupby: true,
            orderby: [],
            title: 'BUSCAR PROVEEDOR',
            required_name: "PROVEEDOR"
        };
        $scope.rsproveedor = function (d) {
            var j = JSON.parse(d);
            $scope.json.proveedor = j.NIT;
        }

        //EXPORTAR A EXCEL

        $scope.JSONToCSVConvertor = function (JSONData, ReportTitle, ShowLabel) {

            //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
            var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;

            var CSV = '';
            //Set Report title in first row or line

            CSV += ReportTitle + '\r\n\n';

            //This condition will generate the Label/Header
            if (ShowLabel) {
                var row = "";

                //This loop will extract the label from 1st index of on array
                for (var index in arrData[0]) {

                    //Now convert each value to string and comma-seprated
                    row += index + ';';
                }

                row = row.slice(0, -1);

                //append Label row with line break
                CSV += row + '\r\n';
            }

            //1st loop is to extract each row
            for (var i = 0; i < arrData.length; i++) {
                var row2 = "";

                //2nd loop will extract each column and convert it in string comma-seprated
                for (var index1 in arrData[i]) {
                    row2 += '"' + arrData[i][index1] + '";';
                }

                row2.slice(0, row2.length - 1);

                //add a line break after each row
                CSV += row2 + '\r\n';
            }

            if (CSV == '') {
                alert("Invalid data");
                return;
            }
            //FECHA ACTUAL
            var fecha = ssDate.dateToString(Date.now(), 'yyyy-MM-dd');

            //Generate a file name
            var fileName = "Descarga_" + fecha;
            //this will remove the blank-spaces from the title and replace it with an underscore
            fileName += ReportTitle.replace(/ /g, "_");

            //Initialize file format you want csv or xls
            var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);

            // Now the little tricky part.
            // you can use either>> window.open(uri);
            // but this will not work in some browsers
            // or you will not get the correct file extension    

            //this trick will generate a temp <a /> tag
            var link = document.createElement("a");
            link.href = uri;

            //set the visibility hidden so it will not effect on your web-layout
            link.style = "visibility:true";
            link.download = fileName + ".csv";

            //this part will append the anchor tag and remove it after automatic click
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        $scope.fnExcelReport = function () {
            $scope.JSONToCSVConvertor($scope.grillareport, "REPORTE PEDIDOS PENDIENTES", true);
        }

        // JSON to CSV Converter
        $scope.ConvertToCSV = function (tabla) {
            var array = typeof tabla != 'object' ? JSON.parse(tabla) : tabla;
            var str = '';

            for (var i = 0; i < array.length; i++) {
                var line = '';
                for (var index in array[i]) {
                    if (line != '') line += ';'

                    line += array[i][index];
                }

                str += line + '\r\n';
            }
            $scope.resultcvs = str;
        }

        // Example


        // Create Object
        var items = [
            { name: "Item 1", color: "Green", size: "X-Large" },
            { name: "Item 2", color: "Green", size: "X-Large" },
            { name: "Item 3", color: "Green", size: "X-Large" }];

        // Convert Object to JSON
        var jsonObject = JSON.stringify(items);

        $scope.buscar_report = function () {
            $scope.openWai = true;
            Service.getCrud({ tipo: $scope.tipo_activo }, "/Servicios.svc/ExportarPedidosFinanciera").then(function (d) {
                var rs = JSON.parse(d.data);
                $scope.grillareport = [];
                $scope.grillareport = rs;
                $scope.fnExcelReport();
                $scope.openWai = false;
            });
        }

    }
    function AprobarPresion($scope, $q, Service, Auth, $timeout, ssDate) {
        $scope.json = {};
        $scope.json3 = {};
        $scope.key = { value: '' };
        $scope.key2 = { value: '' };
        $scope.openWai = true;
        $scope.key2 = { value: '' };
        Service.getCrud({}, "/Servicios.svc/preload_ccosto").then(function (d) {
            var rs = JSON.parse(d.data);
            $scope.centros = rs[0];
        });
        $scope.preload = function () {
            Service.getCrud({}, "/Servicios.svc/ReportePresion").then(function (d) {
                var rs = JSON.parse(d.data)[0];
                $scope.grilla = [];
                $scope.grilla = rs;
                $scope.openWai = false;
            });
        }
        $scope.preload();
        $scope.formatnumber = function (num) {
            //var num = input.value.replace(/\./g, '');
            if (!isNaN(num)) {
                num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
                num = num.split('').reverse().join('').replace(/^[\.]/, '');
                return '$' + num;
            }
        }


        $timeout(function () {
            $("#brNombre-btn-clave").attr('disabled', 'disabled');
            $("#brProvee-btn-clave").attr('disabled', 'disabled');
            $("#brProvee-btn-valor").attr('disabled', 'disabled');
            $("#brProvee-btn-btn").attr('disabled', 'disabled');
            $("#brNombre-btn-valor").attr('disabled', 'disabled');
            $("#brNombre-btn-btn").attr('disabled', 'disabled');

            $("#brProvee-clave").attr('disabled', 'disabled');
            $("#brProvee-valor").attr('disabled', 'disabled');
            $("#brProvee-btn").attr('disabled', 'disabled');
            $("#brNombre-clave").attr('disabled', 'disabled');
            $("#brNombre-valor").attr('disabled', 'disabled');
            $("#brNombre-btn").attr('disabled', 'disabled');
        });

        $scope.clickCheck = function (key) {

            console.log(key);
        }

        $scope.buscar_acta = function (item) {


            $scope.json3 = {};
            $scope.tablapresiones = [];
            $scope.openWaiting = true;
            $scope.openModalPRO = true;
            console.log(item);
            Service.getCrud({ id: item.id }, "/Servicios.svc/ReadPresion").then(function (d) {
                var rs = JSON.parse(d.data);
                if (rs.length > 0) {
                    $scope.json3 = rs[0];
                    $scope.json3.fecha = ssDate.militodate($scope.json3.fecha);
                    //scope.key2.value = rs[0].dependencia;
                    //  $scope.key3.value = rs[0].dependencia;

                    $scope.tablapresiones = rs[1];
                    console.log($scope.tablapresiones)
                } else {
                    $scope.tablapresiones = [];
                    alert(rs)
                }

            });
           
        }

      
        $scope.closePRO = function () {
            $scope.openWaiting = false;
            $scope.openModalPRO = false;
            $scope.showsrp = false;
        }

        $scope.guardar = function () {

        };



        $scope.guardar_aprobados = function (item) {

            $scope.openWai = true;
            $timeout(function () {

                var rs = false;
                Service.getCrud({ id: item.id }, '/Servicios.svc/Guardar_aprobacion_presion').then(function (d) {
                    var rs = JSON.parse(d.data);
                    alert(rs);
                    if (rs != "") {
                        alert('Guardado exitoso');
                        $scope.openWai = false;
                        $scope.preload();
                    }
                    else {
                        alert('No se puede guardar');
                        $scope.openWai = false;
                        $scope.preload();
                    }

                });
            });
            return promise;

        };





        $scope.convert = function (x) {
            var aux = ssDate.militodate(x);
            return ssDate.dateToString(aux, 'dd-MM-yyyy');
        }

        $scope.convertst = function (x) {
            return x = '$ ' + x;
        }


        /*CONFIG BUSQUEDA RAPIDA CCOSTO*/
        $scope.dataccosto = {
            id: 'buscadorNombre',
            component: [{ id: 'brNombre', type: '' }],
            table: 'area_ccosto',
            column: [
                { name: 'rtrim(ltrim(ccosto))', as: 'Ccosto', visible: true },
                { name: 'rtrim(ltrim(area))', as: 'Area', visible: true }



            ],
            where: {},
            groupby: true,
            orderby: [],
            title: 'BUSCAR CENTRO DE COSTO',
            required_name: "CENTRO DE COSTO"
        };
        $scope.rsccosto = function (d) {
            var j = JSON.parse(d);
            $scope.json.ccosto = j.Ccosto;

        }

        /*CONFIG BUSQUEDA RAPIDA CCOSTO*/
        $scope.key3 = { value: '' };
        $scope.dataproveedor = {
            id: 'buscadorprov',
            component: [{ id: 'brProvee', type: '' }],
            table: 'proveedor',
            column: [
                { name: 'rtrim(ltrim(nit))', as: 'NIT', visible: true },
                { name: 'rtrim(ltrim(razon_social))', as: 'RZ', visible: true }

            ],
            where: {},
            groupby: true,
            orderby: [],
            title: 'BUSCAR PROVEEDOR',
            required_name: "PROVEEDOR"
        };
        $scope.rsproveedor = function (d) {
            var j = JSON.parse(d);
            $scope.json.proveedor = j.NIT;
        }

        //EXPORTAR A EXCEL

        $scope.JSONToCSVConvertor = function (JSONData, ReportTitle, ShowLabel) {

            //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
            var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;

            var CSV = '';
            //Set Report title in first row or line

            CSV += ReportTitle + '\r\n\n';

            //This condition will generate the Label/Header
            if (ShowLabel) {
                var row = "";

                //This loop will extract the label from 1st index of on array
                for (var index in arrData[0]) {

                    //Now convert each value to string and comma-seprated
                    row += index + ';';
                }

                row = row.slice(0, -1);

                //append Label row with line break
                CSV += row + '\r\n';
            }

            //1st loop is to extract each row
            for (var i = 0; i < arrData.length; i++) {
                var row2 = "";

                //2nd loop will extract each column and convert it in string comma-seprated
                for (var index1 in arrData[i]) {
                    row2 += '"' + arrData[i][index1] + '";';
                }

                row2.slice(0, row2.length - 1);

                //add a line break after each row
                CSV += row2 + '\r\n';
            }

            if (CSV == '') {
                alert("Invalid data");
                return;
            }
            //FECHA ACTUAL
            var fecha = ssDate.dateToString(Date.now(), 'yyyy-MM-dd');

            //Generate a file name
            var fileName = "Descarga_" + fecha;
            //this will remove the blank-spaces from the title and replace it with an underscore
            fileName += ReportTitle.replace(/ /g, "_");

            //Initialize file format you want csv or xls
            var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);

            // Now the little tricky part.
            // you can use either>> window.open(uri);
            // but this will not work in some browsers
            // or you will not get the correct file extension    

            //this trick will generate a temp <a /> tag
            var link = document.createElement("a");
            link.href = uri;

            //set the visibility hidden so it will not effect on your web-layout
            link.style = "visibility:true";
            link.download = fileName + ".csv";

            //this part will append the anchor tag and remove it after automatic click
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        $scope.fnExcelReport = function () {
            $scope.JSONToCSVConvertor($scope.grillareport, "REPORTE PEDIDOS PENDIENTES", true);
        }

        // JSON to CSV Converter
        $scope.ConvertToCSV = function (tabla) {
            var array = typeof tabla != 'object' ? JSON.parse(tabla) : tabla;
            var str = '';

            for (var i = 0; i < array.length; i++) {
                var line = '';
                for (var index in array[i]) {
                    if (line != '') line += ';'

                    line += array[i][index];
                }

                str += line + '\r\n';
            }
            $scope.resultcvs = str;
        }

        // Example


        // Create Object
        var items = [
            { name: "Item 1", color: "Green", size: "X-Large" },
            { name: "Item 2", color: "Green", size: "X-Large" },
            { name: "Item 3", color: "Green", size: "X-Large" }];

        // Convert Object to JSON
        var jsonObject = JSON.stringify(items);

        $scope.buscar_report = function () {
            $scope.openWai = true;
            Service.getCrud({ tipo: $scope.tipo_activo }, "/Servicios.svc/ExportarPedidosFinanciera").then(function (d) {
                var rs = JSON.parse(d.data);
                $scope.grillareport = [];
                $scope.grillareport = rs;
                $scope.fnExcelReport();
                $scope.openWai = false;
            });
        }

    }
    function AprobarTraslado($scope, $q, Service, Auth, $timeout, ssDate) {
        $scope.json = {};
        $scope.json3 = {};
        $scope.key = { value: '' };
        $scope.key2 = { value: '' };
        $scope.openWai = true;
        $scope.key2 = { value: '' };
        Service.getCrud({}, "/Servicios.svc/preload_ccosto").then(function (d) {
            var rs = JSON.parse(d.data);
            $scope.centros = rs[0];
        });
        $scope.preload = function () {
            Service.getCrud({ tipo: $scope.tipo_activo }, "/Servicios.svc/ReporteTraslado").then(function (d) {
                var rs = JSON.parse(d.data)[0];
                $scope.grilla = [];
                $scope.grilla = rs;
                $scope.openWai = false;
            });
        }
        $scope.preload();
        $scope.formatnumber = function (num) {
            //var num = input.value.replace(/\./g, '');
            if (!isNaN(num)) {
                num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
                num = num.split('').reverse().join('').replace(/^[\.]/, '');
                return '$' + num;
            }
        }


        $timeout(function () {
            $("#brNombre-btn-clave").attr('disabled', 'disabled');
            $("#brProvee-btn-clave").attr('disabled', 'disabled');
            $("#brProvee-btn-valor").attr('disabled', 'disabled');
            $("#brProvee-btn-btn").attr('disabled', 'disabled');
            $("#brNombre-btn-valor").attr('disabled', 'disabled');
            $("#brNombre-btn-btn").attr('disabled', 'disabled');

            $("#brProvee-clave").attr('disabled', 'disabled');
            $("#brProvee-valor").attr('disabled', 'disabled');
            $("#brProvee-btn").attr('disabled', 'disabled');
            $("#brNombre-clave").attr('disabled', 'disabled');
            $("#brNombre-valor").attr('disabled', 'disabled');
            $("#brNombre-btn").attr('disabled', 'disabled');
        });

        $scope.clickCheck = function (key) {

            console.log(key);
        }

        $scope.buscar_acta = function (item) {
            $scope.json3 = {};
            $scope.tablapresiones = [];
            $scope.openWaiting = true;
            $scope.openModalPRO = true;
            console.log(item);
            Service.getCrud({ id: item.id }, "/Servicios.svc/ReadTraslados").then(function (d) {
                var rs = JSON.parse(d.data);
                if (rs.length > 0) {
                    $scope.json3 = rs[0];
                    $scope.json3.fecha = ssDate.militodate($scope.json3.fecha);
                   //scope.key2.value = rs[0].dependencia;
                  //  $scope.key3.value = rs[0].dependencia;
                  
                    $scope.tablapresiones = rs[1];
                    console.log($scope.tablapresiones)
                } else {
                    $scope.tablapresiones = [];
                    alert(rs)
                }
                             
            });
        }


        $scope.closePRO = function () {
            $scope.openWaiting = false;
            $scope.openModalPRO = false;
            $scope.showsrp = false;
        }

        $scope.guardar = function () {

        };



        $scope.guardar_aprobados = function (item) {

            $scope.openWai = true;
            $timeout(function () {

                Service.getCrud({ id: item.id}, '/Servicios.svc/Guardar_Aprobacion_traslado').then(function (d) {
                    var rs = JSON.parse(d.data);
                    alert(rs);
                    alert('Guardado exitoso');
                    $scope.openWai = false;
                    $scope.preload();
                });


            });
            return promise;

        }





        $scope.convert = function (x) {
            var aux = ssDate.militodate(x);
            return ssDate.dateToString(aux, 'dd-MM-yyyy');
        }

        $scope.convertst = function (x) {
            return x = '$ ' + x;
        }


        /*CONFIG BUSQUEDA RAPIDA CCOSTO*/
        $scope.dataccosto = {
            id: 'buscadorNombre',
            component: [{ id: 'brNombre', type: '' }],
            table: 'area_ccosto',
            column: [
                { name: 'rtrim(ltrim(ccosto))', as: 'Ccosto', visible: true },
                { name: 'rtrim(ltrim(area))', as: 'Area', visible: true }



            ],
            where: {},
            groupby: true,
            orderby: [],
            title: 'BUSCAR CENTRO DE COSTO',
            required_name: "CENTRO DE COSTO"
        };
        $scope.rsccosto = function (d) {
            var j = JSON.parse(d);
            $scope.json.ccosto = j.Ccosto;

        }

        /*CONFIG BUSQUEDA RAPIDA CCOSTO*/
        $scope.key3 = { value: '' };
        $scope.dataproveedor = {
            id: 'buscadorprov',
            component: [{ id: 'brProvee', type: '' }],
            table: 'proveedor',
            column: [
                { name: 'rtrim(ltrim(nit))', as: 'NIT', visible: true },
                { name: 'rtrim(ltrim(razon_social))', as: 'RZ', visible: true }

            ],
            where: {},
            groupby: true,
            orderby: [],
            title: 'BUSCAR PROVEEDOR',
            required_name: "PROVEEDOR"
        };
        $scope.rsproveedor = function (d) {
            var j = JSON.parse(d);
            $scope.json.proveedor = j.NIT;
        }

        //EXPORTAR A EXCEL

        $scope.JSONToCSVConvertor = function (JSONData, ReportTitle, ShowLabel) {

            //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
            var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;

            var CSV = '';
            //Set Report title in first row or line

            CSV += ReportTitle + '\r\n\n';

            //This condition will generate the Label/Header
            if (ShowLabel) {
                var row = "";

                //This loop will extract the label from 1st index of on array
                for (var index in arrData[0]) {

                    //Now convert each value to string and comma-seprated
                    row += index + ';';
                }

                row = row.slice(0, -1);

                //append Label row with line break
                CSV += row + '\r\n';
            }

            //1st loop is to extract each row
            for (var i = 0; i < arrData.length; i++) {
                var row2 = "";

                //2nd loop will extract each column and convert it in string comma-seprated
                for (var index1 in arrData[i]) {
                    row2 += '"' + arrData[i][index1] + '";';
                }

                row2.slice(0, row2.length - 1);

                //add a line break after each row
                CSV += row2 + '\r\n';
            }

            if (CSV == '') {
                alert("Invalid data");
                return;
            }
            //FECHA ACTUAL
            var fecha = ssDate.dateToString(Date.now(), 'yyyy-MM-dd');

            //Generate a file name
            var fileName = "Descarga_" + fecha;
            //this will remove the blank-spaces from the title and replace it with an underscore
            fileName += ReportTitle.replace(/ /g, "_");

            //Initialize file format you want csv or xls
            var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);

            // Now the little tricky part.
            // you can use either>> window.open(uri);
            // but this will not work in some browsers
            // or you will not get the correct file extension    

            //this trick will generate a temp <a /> tag
            var link = document.createElement("a");
            link.href = uri;

            //set the visibility hidden so it will not effect on your web-layout
            link.style = "visibility:true";
            link.download = fileName + ".csv";

            //this part will append the anchor tag and remove it after automatic click
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        $scope.fnExcelReport = function () {
            $scope.JSONToCSVConvertor($scope.grillareport, "REPORTE PEDIDOS PENDIENTES", true);
        }

        // JSON to CSV Converter
        $scope.ConvertToCSV = function (tabla) {
            var array = typeof tabla != 'object' ? JSON.parse(tabla) : tabla;
            var str = '';

            for (var i = 0; i < array.length; i++) {
                var line = '';
                for (var index in array[i]) {
                    if (line != '') line += ';'

                    line += array[i][index];
                }

                str += line + '\r\n';
            }
            $scope.resultcvs = str;
        }

        // Example


        // Create Object
        var items = [
            { name: "Item 1", color: "Green", size: "X-Large" },
            { name: "Item 2", color: "Green", size: "X-Large" },
            { name: "Item 3", color: "Green", size: "X-Large" }];

        // Convert Object to JSON
        var jsonObject = JSON.stringify(items);

        $scope.buscar_report = function () {
            $scope.openWai = true;
            Service.getCrud({ tipo: $scope.tipo_activo }, "/Servicios.svc/ExportarPedidosFinanciera").then(function (d) {
                var rs = JSON.parse(d.data);
                $scope.grillareport = [];
                $scope.grillareport = rs;
                $scope.fnExcelReport();
                $scope.openWai = false;
            });
        }

    }

    function TrasladoEjecutados($scope, $q, Service, Auth, $timeout, ssDate) {
        $scope.json = {};
        $scope.json3 = {};
        $scope.key = { value: '' };
        $scope.key2 = { value: '' };
        $scope.openWai = true;
        $scope.key2 = { value: '' };
        $scope.grilla = [];
      //  $scope.tipo_filtro = 1;

        Service.getCrud({}, "/Servicios.svc/preload_ccosto").then(function (d) {
            var rs = JSON.parse(d.data);
            $scope.centros = rs[0];
        });
        $scope.reportetraslados = function () {
            if ($scope.tipo_filtro == undefined || $scope.tipo_filtro == "") {
                $scope.tipo_filtro = 1;
        
            }
            $scope.fecha_actual = new Date();
            if ($scope.fecha_inicio == undefined || $scope.fecha_inicio== "") {
                $scope.fecha_inicio = $scope.fecha_actual;
            }

            if ($scope.fecha_fin == undefined || $scope.fecha_fin == "") {
                $scope.fecha_fin = $scope.fecha_actual;
            }
            var rs = {};
            Service.getCrud({ tipo: $scope.tipo_filtro, fechainicio: $scope.fecha_inicio, fechafin: $scope.fecha_fin}, "/Servicios.svc/TrasladosEjecutados").then(function (d) {
                    rs = JSON.parse(d.data)[0];
                    $scope.grilla = [];
                    $scope.grilla = rs;
                    $scope.openWai = false;
                });
           
        }
        $scope.reportetraslados();
        $scope.formatnumber = function (num) {
            //var num = input.value.replace(/\./g, '');
            if (!isNaN(num)) {
                num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
                num = num.split('').reverse().join('').replace(/^[\.]/, '');
                return '$' + num;
            }
        }


        $timeout(function () {
            $("#brNombre-btn-clave").attr('disabled', 'disabled');
            $("#brProvee-btn-clave").attr('disabled', 'disabled');
            $("#brProvee-btn-valor").attr('disabled', 'disabled');
            $("#brProvee-btn-btn").attr('disabled', 'disabled');
            $("#brNombre-btn-valor").attr('disabled', 'disabled');
            $("#brNombre-btn-btn").attr('disabled', 'disabled');

            $("#brProvee-clave").attr('disabled', 'disabled');
            $("#brProvee-valor").attr('disabled', 'disabled');
            $("#brProvee-btn").attr('disabled', 'disabled');
            $("#brNombre-clave").attr('disabled', 'disabled');
            $("#brNombre-valor").attr('disabled', 'disabled');
            $("#brNombre-btn").attr('disabled', 'disabled');
        });

        $scope.clickCheck = function (key) {

            console.log(key);
        }

        $scope.buscar_acta = function (item) {
            $scope.json3 = {};
            $scope.tablapresiones = [];
            $scope.openWaiting = true;
            $scope.openModalPRO = true;
            console.log(item);
            Service.getCrud({ id: item.id }, "/Servicios.svc/ReadTraslados").then(function (d) {
                var rs = JSON.parse(d.data);
                if (rs.length > 0) {
                    $scope.json3 = rs[0];
                    $scope.json3.fecha = ssDate.militodate($scope.json3.fecha);
                    //scope.key2.value = rs[0].dependencia;
                    //  $scope.key3.value = rs[0].dependencia;

                    $scope.tablapresiones = rs[1];
                    console.log($scope.tablapresiones)
                } else {
                    $scope.tablapresiones = [];
                    alert(rs)
                }

            });
        }


        $scope.closePRO = function () {
            $scope.openWaiting = false;
            $scope.openModalPRO = false;
            $scope.showsrp = false;
        }

        $scope.guardar = function () {

        };



        $scope.guardar_aprobados = function (item) {

            $scope.openWai = true;
            $timeout(function () {

                Service.getCrud({ id: item.id }, '/Servicios.svc/Guardar_Aprobacion_traslado').then(function (d) {
                    var rs = JSON.parse(d.data);
                    alert(rs);
                    $scope.preload();
                    alert('Guardado exitoso');
                    $scope.openWai = false;

                });


            });
            return promise;

        }





        $scope.convert = function (x) {
            var aux = ssDate.militodate(x);
            return ssDate.dateToString(aux, 'dd-MM-yyyy');
        }

        $scope.convertst = function (x) {
            return x = '$ ' + x;
        }


        /*CONFIG BUSQUEDA RAPIDA CCOSTO*/
        $scope.dataccosto = {
            id: 'buscadorNombre',
            component: [{ id: 'brNombre', type: '' }],
            table: 'area_ccosto',
            column: [
                { name: 'rtrim(ltrim(ccosto))', as: 'Ccosto', visible: true },
                { name: 'rtrim(ltrim(area))', as: 'Area', visible: true }



            ],
            where: {},
            groupby: true,
            orderby: [],
            title: 'BUSCAR CENTRO DE COSTO',
            required_name: "CENTRO DE COSTO"
        };
        $scope.rsccosto = function (d) {
            var j = JSON.parse(d);
            $scope.json.ccosto = j.Ccosto;

        }

        /*CONFIG BUSQUEDA RAPIDA CCOSTO*/
        $scope.key3 = { value: '' };
        $scope.dataproveedor = {
            id: 'buscadorprov',
            component: [{ id: 'brProvee', type: '' }],
            table: 'proveedor',
            column: [
                { name: 'rtrim(ltrim(nit))', as: 'NIT', visible: true },
                { name: 'rtrim(ltrim(razon_social))', as: 'RZ', visible: true }

            ],
            where: {},
            groupby: true,
            orderby: [],
            title: 'BUSCAR PROVEEDOR',
            required_name: "PROVEEDOR"
        };
        $scope.rsproveedor = function (d) {
            var j = JSON.parse(d);
            $scope.json.proveedor = j.NIT;
        }

        //EXPORTAR A EXCEL

        $scope.JSONToCSVConvertor = function (JSONData, ReportTitle, ShowLabel) {

            //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
            var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;

            var CSV = '';
            //Set Report title in first row or line

            CSV += ReportTitle + '\r\n\n';

            //This condition will generate the Label/Header
            if (ShowLabel) {
                var row = "";

                //This loop will extract the label from 1st index of on array
                for (var index in arrData[0]) {

                    //Now convert each value to string and comma-seprated
                    row += index + ';';
                }

                row = row.slice(0, -1);

                //append Label row with line break
                CSV += row + '\r\n';
            }

            //1st loop is to extract each row
            for (var i = 0; i < arrData.length; i++) {
                var row2 = "";

                //2nd loop will extract each column and convert it in string comma-seprated
                for (var index1 in arrData[i]) {
                    row2 += '"' + arrData[i][index1] + '";';
                }

                row2.slice(0, row2.length - 1);

                //add a line break after each row
                CSV += row2 + '\r\n';
            }

            if (CSV == '') {
                alert("Invalid data");
                return;
            }
            //FECHA ACTUAL
            var fecha = ssDate.dateToString(Date.now(), 'yyyy-MM-dd');

            //Generate a file name
            var fileName = "Descarga_" + fecha;
            //this will remove the blank-spaces from the title and replace it with an underscore
            fileName += ReportTitle.replace(/ /g, "_");

            //Initialize file format you want csv or xls
            var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);

            // Now the little tricky part.
            // you can use either>> window.open(uri);
            // but this will not work in some browsers
            // or you will not get the correct file extension    

            //this trick will generate a temp <a /> tag
            var link = document.createElement("a");
            link.href = uri;

            //set the visibility hidden so it will not effect on your web-layout
            link.style = "visibility:true";
            link.download = fileName + ".csv";

            //this part will append the anchor tag and remove it after automatic click
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        $scope.fnExcelReport = function () {
            $scope.JSONToCSVConvertor($scope.grillareport, "REPORTE PEDIDOS PENDIENTES", true);
        }

        // JSON to CSV Converter
        $scope.ConvertToCSV = function (tabla) {
            var array = typeof tabla != 'object' ? JSON.parse(tabla) : tabla;
            var str = '';

            for (var i = 0; i < array.length; i++) {
                var line = '';
                for (var index in array[i]) {
                    if (line != '') line += ';'

                    line += array[i][index];
                }

                str += line + '\r\n';
            }
            $scope.resultcvs = str;
        }

        // Example


        // Create Object
        var items = [
            { name: "Item 1", color: "Green", size: "X-Large" },
            { name: "Item 2", color: "Green", size: "X-Large" },
            { name: "Item 3", color: "Green", size: "X-Large" }];

        // Convert Object to JSON
        var jsonObject = JSON.stringify(items);

        $scope.buscar_report = function () {
            $scope.openWai = true;
            Service.getCrud({ tipo: $scope.tipo_activo }, "/Servicios.svc/ExportarPedidosFinanciera").then(function (d) {
                var rs = JSON.parse(d.data);
                $scope.grillareport = [];
                $scope.grillareport = rs;
                $scope.fnExcelReport();
                $scope.openWai = false;
            });
        }

    }

    function PresionesAprobadas($scope, $q, Service, Auth, $timeout, ssDate) {
        $scope.json = {};
        $scope.json3 = {};
        $scope.key = { value: '' };
        $scope.key2 = { value: '' };
        $scope.openWai = true;
        $scope.key2 = { value: '' };
        $scope.grilla = [];
        //  $scope.tipo_filtro = 1;

        Service.getCrud({}, "/Servicios.svc/preload_ccosto").then(function (d) {
            var rs = JSON.parse(d.data);
            $scope.centros = rs[0];
        });
        $scope.reportepresiones = function () {
            if ($scope.tipo_filtro == undefined || $scope.tipo_filtro == "") {
                $scope.tipo_filtro = 1;

            }
            $scope.fecha_actual = new Date();
            if ($scope.fecha_inicio == undefined || $scope.fecha_inicio == "") {
                $scope.fecha_inicio = $scope.fecha_actual;
            }

            if ($scope.fecha_fin == undefined || $scope.fecha_fin == "") {
                $scope.fecha_fin = $scope.fecha_actual;
            }
            var rs = {};
            Service.getCrud({ tipo: $scope.tipo_filtro, fechainicio: $scope.fecha_inicio, fechafin: $scope.fecha_fin }, "/Servicios.svc/PresionesAprobadas").then(function (d) {
                rs = JSON.parse(d.data)[0];
                $scope.grilla = [];
                $scope.grilla = rs;
                $scope.openWai = false;
            });

        }
        $scope.reportepresiones();
        $scope.formatnumber = function (num) {
            //var num = input.value.replace(/\./g, '');
            if (!isNaN(num)) {
                num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
                num = num.split('').reverse().join('').replace(/^[\.]/, '');
                return '$' + num;
            }
        }


        $timeout(function () {
            $("#brNombre-btn-clave").attr('disabled', 'disabled');
            $("#brProvee-btn-clave").attr('disabled', 'disabled');
            $("#brProvee-btn-valor").attr('disabled', 'disabled');
            $("#brProvee-btn-btn").attr('disabled', 'disabled');
            $("#brNombre-btn-valor").attr('disabled', 'disabled');
            $("#brNombre-btn-btn").attr('disabled', 'disabled');

            $("#brProvee-clave").attr('disabled', 'disabled');
            $("#brProvee-valor").attr('disabled', 'disabled');
            $("#brProvee-btn").attr('disabled', 'disabled');
            $("#brNombre-clave").attr('disabled', 'disabled');
            $("#brNombre-valor").attr('disabled', 'disabled');
            $("#brNombre-btn").attr('disabled', 'disabled');
        });

        $scope.clickCheck = function (key) {

            console.log(key);
        }

        $scope.buscar_acta = function (item) {
            $scope.json3 = {};
            $scope.tablapresiones = [];
            $scope.openWaiting = true;
            $scope.openModalPRO = true;
            console.log(item);
            Service.getCrud({ id: item.id }, "/Servicios.svc/ReadPresion").then(function (d) {
                var rs = JSON.parse(d.data);
                if (rs.length > 0) {
                    $scope.json3 = rs[0];
                    $scope.json3.fecha = ssDate.militodate($scope.json3.fecha);
                    //scope.key2.value = rs[0].dependencia;
                    //  $scope.key3.value = rs[0].dependencia;

                    $scope.tablapresiones = rs[1];
                    console.log($scope.tablapresiones)
                } else {
                    $scope.tablapresiones = [];
                    alert(rs)
                }

            });
        }


        $scope.closePRO = function () {
            $scope.openWaiting = false;
            $scope.openModalPRO = false;
            $scope.showsrp = false;
        }

        $scope.guardar = function () {

        };



        $scope.guardar_aprobados = function (item) {

            $scope.openWai = true;
            $timeout(function () {

                Service.getCrud({ id: item.id }, '/Servicios.svc/Guardar_Aprobacion_traslado').then(function (d) {
                    var rs = JSON.parse(d.data);
                    alert(rs);
                    $scope.preload();
                    alert('Guardado exitoso');
                    $scope.openWai = false;

                });


            });
            return promise;

        }





        $scope.convert = function (x) {
            var aux = ssDate.militodate(x);
            return ssDate.dateToString(aux, 'dd-MM-yyyy');
        }

        $scope.convertst = function (x) {
            return x = '$ ' + x;
        }


        /*CONFIG BUSQUEDA RAPIDA CCOSTO*/
        $scope.dataccosto = {
            id: 'buscadorNombre',
            component: [{ id: 'brNombre', type: '' }],
            table: 'area_ccosto',
            column: [
                { name: 'rtrim(ltrim(ccosto))', as: 'Ccosto', visible: true },
                { name: 'rtrim(ltrim(area))', as: 'Area', visible: true }



            ],
            where: {},
            groupby: true,
            orderby: [],
            title: 'BUSCAR CENTRO DE COSTO',
            required_name: "CENTRO DE COSTO"
        };
        $scope.rsccosto = function (d) {
            var j = JSON.parse(d);
            $scope.json.ccosto = j.Ccosto;

        }

        /*CONFIG BUSQUEDA RAPIDA CCOSTO*/
        $scope.key3 = { value: '' };
        $scope.dataproveedor = {
            id: 'buscadorprov',
            component: [{ id: 'brProvee', type: '' }],
            table: 'proveedor',
            column: [
                { name: 'rtrim(ltrim(nit))', as: 'NIT', visible: true },
                { name: 'rtrim(ltrim(razon_social))', as: 'RZ', visible: true }

            ],
            where: {},
            groupby: true,
            orderby: [],
            title: 'BUSCAR PROVEEDOR',
            required_name: "PROVEEDOR"
        };
        $scope.rsproveedor = function (d) {
            var j = JSON.parse(d);
            $scope.json.proveedor = j.NIT;
        }

        //EXPORTAR A EXCEL

        $scope.JSONToCSVConvertor = function (JSONData, ReportTitle, ShowLabel) {

            //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
            var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;

            var CSV = '';
            //Set Report title in first row or line

            CSV += ReportTitle + '\r\n\n';

            //This condition will generate the Label/Header
            if (ShowLabel) {
                var row = "";

                //This loop will extract the label from 1st index of on array
                for (var index in arrData[0]) {

                    //Now convert each value to string and comma-seprated
                    row += index + ';';
                }

                row = row.slice(0, -1);

                //append Label row with line break
                CSV += row + '\r\n';
            }

            //1st loop is to extract each row
            for (var i = 0; i < arrData.length; i++) {
                var row2 = "";

                //2nd loop will extract each column and convert it in string comma-seprated
                for (var index1 in arrData[i]) {
                    row2 += '"' + arrData[i][index1] + '";';
                }

                row2.slice(0, row2.length - 1);

                //add a line break after each row
                CSV += row2 + '\r\n';
            }

            if (CSV == '') {
                alert("Invalid data");
                return;
            }
            //FECHA ACTUAL
            var fecha = ssDate.dateToString(Date.now(), 'yyyy-MM-dd');

            //Generate a file name
            var fileName = "Descarga_" + fecha;
            //this will remove the blank-spaces from the title and replace it with an underscore
            fileName += ReportTitle.replace(/ /g, "_");

            //Initialize file format you want csv or xls
            var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);

            // Now the little tricky part.
            // you can use either>> window.open(uri);
            // but this will not work in some browsers
            // or you will not get the correct file extension    

            //this trick will generate a temp <a /> tag
            var link = document.createElement("a");
            link.href = uri;

            //set the visibility hidden so it will not effect on your web-layout
            link.style = "visibility:true";
            link.download = fileName + ".csv";

            //this part will append the anchor tag and remove it after automatic click
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        $scope.fnExcelReport = function () {
            $scope.JSONToCSVConvertor($scope.grillareport, "REPORTE PEDIDOS PENDIENTES", true);
        }

        // JSON to CSV Converter
        $scope.ConvertToCSV = function (tabla) {
            var array = typeof tabla != 'object' ? JSON.parse(tabla) : tabla;
            var str = '';

            for (var i = 0; i < array.length; i++) {
                var line = '';
                for (var index in array[i]) {
                    if (line != '') line += ';'

                    line += array[i][index];
                }

                str += line + '\r\n';
            }
            $scope.resultcvs = str;
        }

        // Example


        // Create Object
        var items = [
            { name: "Item 1", color: "Green", size: "X-Large" },
            { name: "Item 2", color: "Green", size: "X-Large" },
            { name: "Item 3", color: "Green", size: "X-Large" }];

        // Convert Object to JSON
        var jsonObject = JSON.stringify(items);

        $scope.buscar_report = function () {
            $scope.openWai = true;
            Service.getCrud({ tipo: $scope.tipo_activo }, "/Servicios.svc/ExportarPedidosFinanciera").then(function (d) {
                var rs = JSON.parse(d.data);
                $scope.grillareport = [];
                $scope.grillareport = rs;
                $scope.fnExcelReport();
                $scope.openWai = false;
            });
        }

    }

    function Reporte_srp($scope, $q, Service, Auth, $timeout, ssDate) {
        $scope.json = {};
        $scope.json3 = {};
        $scope.key = { value: '' };
        $scope.key2 = { value: '' };
        $scope.openWai = true;
        $scope.grilla = []; 


        $timeout(function () {
            $("#brNombre-btn-clave").attr('disabled', 'disabled');
            $("#brProvee-btn-clave").attr('disabled', 'disabled');
            $("#brProvee-btn-valor").attr('disabled', 'disabled');
            $("#brProvee-btn-btn").attr('disabled', 'disabled');
            $("#brNombre-btn-valor").attr('disabled', 'disabled');
            $("#brNombre-btn-btn").attr('disabled', 'disabled');

            $("#brProvee-clave").attr('disabled', 'disabled');
            $("#brProvee-valor").attr('disabled', 'disabled');
            $("#brProvee-btn").attr('disabled', 'disabled');
            $("#brNombre-clave").attr('disabled', 'disabled');
            $("#brNombre-valor").attr('disabled', 'disabled');
            $("#brNombre-btn").attr('disabled', 'disabled');
        });

        Service.getCrud({}, "/Servicios.svc/preload_ccosto").then(function (d) {
            var rs = JSON.parse(d.data);
            $scope.centros = rs[0];
        });
        $scope.reportepedidos = function () {
            if ($scope.tipo_filtro == undefined || $scope.tipo_filtro == "") {
                $scope.tipo_filtro = 1;

            }

            Service.getCrud({ tipo: $scope.tipo_filtro }, "/Servicios.svc/ReportePedidos").then(function (d) {
                var rs = JSON.parse(d.data)[0];
                $scope.grilla = []; 
                $scope.grilla = rs;
                $scope.openWai = false;
            });
        }
        $scope.reportepedidos();

        $scope.aprobar_srp = function (item) {
            $scope.openWai = true;
            Service.getCrud({ nro_ped: item.nro_pedido }, "/Servicios.svc/Aprobar_srp").then(function (d) {
                var rs = JSON.parse(d.data);
                $scope.openWai = false;
                alert("EL SRP FUE APROBADO CON NUMERO " + rs);
                $scope.reportepedidos();
            });
        }

        $scope.verificar_srp = function (item) {
            $scope.openWai = true;
            Service.getCrud({ nro_ped: item.nro_pedido }, "/Servicios.svc/verificar_srp").then(function (d) {
                var rs = JSON.parse(d.data);
                $scope.openWai = false;
                $scope.json3.nro_srp = rs[1];
                if (rs[1] == "RETENIDO") {
                    alert("EL SRP FUE VERIFICADO, SE ENCUENTRA EN ESTADO " + rs[1]);
                    $scope.reportepedidos();
                } else {
                    alert("EL SRP FUE VERIFICADO Y SE ENCUENTRA EN ESTADO PENDIENTE");
                    $scope.reportepedidos();
                }
            });
        }

        $scope.formatnumber = function (num) {
            //var num = input.value.replace(/\./g, '');
            if (!isNaN(num)) {
                num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
                num = num.split('').reverse().join('').replace(/^[\.]/, '');
                return '$' + num;
            }
        }



        $scope.buscar_acta = function (item) {
            $scope.openWaiting = true;
            $scope.openModalPRO = true;
            Service.getCrud({ numero_ped: item.nro_pedido }, "/Servicios.svc/Reporte_Nro_pedido").then(function (d) {
                var rs = JSON.parse(d.data);
                $scope.json3 = rs[0];
                $scope.json3.fecha = ssDate.militodate($scope.json3.fecha);
                $scope.key2.value = rs[0].ccosto;
                $scope.key3.value = rs[0].proveedor;
                $scope.tablapedidos = [];
                $scope.tablapedidos = rs[1];
            });
        }

        $scope.buscar_srp = function (item) {
            $scope.showsrp = true;
            $scope.openModalPRO = true;
            Service.getCrud({ numero_ped: item.nro_pedido }, "/Servicios.svc/Reporte_SRP").then(function (d) {
                var rs = JSON.parse(d.data);
                $scope.json3 = rs[0];
                $scope.json3.fecha = ssDate.militodate($scope.json3.fecha);
                $scope.key2.value = rs[0].ccosto;
                $scope.key3.value = rs[0].proveedor;
                $scope.tablapedidos = [];
                $scope.tablapedidos = rs[1];
                $scope.vlr_total = 0;
                $scope.tablapedidos.forEach(function (item, index) {
                    $scope.vlr_total = $scope.vlr_total + item.total;
                })
            });
        }

        $scope.closePRO = function () {
            $scope.openWaiting = false;
            $scope.openModalPRO = false;
            $scope.showsrp = false;
        }

        $scope.convert = function (x) {
            var aux = ssDate.militodate(x);
            return ssDate.dateToString(aux, 'dd-MM-yyyy');
        }

        $scope.convertst = function (x) {
            return x = '$ ' + x;
        }



        /*CONFIG BUSQUEDA RAPIDA CCOSTO*/
        $scope.dataccosto = {
            id: 'buscadorNombre',
            component: [{ id: 'brNombre', type: '' }],
            table: 'area_ccosto',
            column: [
                { name: 'rtrim(ltrim(ccosto))', as: 'Ccosto', visible: true },
                { name: 'rtrim(ltrim(area))', as: 'Area', visible: true }



            ],
            where: {},
            groupby: true,
            orderby: [],
            title: 'BUSCAR CENTRO DE COSTO',
            required_name: "CENTRO DE COSTO"
        };
        $scope.rsccosto = function (d) {
            var j = JSON.parse(d);
            $scope.json.ccosto = j.Ccosto;

        }

        /*CONFIG BUSQUEDA RAPIDA CCOSTO*/
        $scope.key3 = { value: '' };
        $scope.dataproveedor = {
            id: 'buscadorprov',
            component: [{ id: 'brProvee', type: '' }],
            table: 'proveedor',
            column: [
                { name: 'rtrim(ltrim(nit))', as: 'NIT', visible: true },
                { name: 'rtrim(ltrim(razon_social))', as: 'RZ', visible: true }

            ],
            where: {},
            groupby: true,
            orderby: [],
            title: 'BUSCAR PROVEEDOR',
            required_name: "PROVEEDOR"
        };
        $scope.rsproveedor = function (d) {
            var j = JSON.parse(d);
            $scope.json.proveedor = j.NIT;
        }


    }
    function Reporte_pte_rp($scope, $q, Service, Auth, $timeout, ssDate) {
        $scope.json = {};
        $scope.json3 = {};
        $scope.key = { value: '' };
        $scope.key2 = { value: '' };


        $timeout(function () {
            $("#brNombre-btn-clave").attr('disabled', 'disabled');
            $("#brProvee-btn-clave").attr('disabled', 'disabled');
            $("#brProvee-btn-valor").attr('disabled', 'disabled');
            $("#brProvee-btn-btn").attr('disabled', 'disabled');
            $("#brNombre-btn-valor").attr('disabled', 'disabled');
            $("#brNombre-btn-btn").attr('disabled', 'disabled');

            $("#brProvee-clave").attr('disabled', 'disabled');
            $("#brProvee-valor").attr('disabled', 'disabled');
            $("#brProvee-btn").attr('disabled', 'disabled');
            $("#brNombre-clave").attr('disabled', 'disabled');
            $("#brNombre-valor").attr('disabled', 'disabled');
            $("#brNombre-btn").attr('disabled', 'disabled');
        });

        Service.getCrud({}, "/Servicios.svc/preload_ccosto").then(function (d) {
            var rs = JSON.parse(d.data);
            $scope.centros = rs[0];
        });
        $scope.reportepedidos = function () {
            if ($scope.tipo_filtro == undefined || $scope.tipo_filtro == "") {
                $scope.tipo_filtro = 1;
            }
            $scope.openWai = true;
            Service.getCrud({ tipo: $scope.tipo_filtro, fechaini: $scope.fecha_inicio, fechafin: $scope.fecha_fin}, "/Servicios.svc/Reporte_pte_rp").then(function (d) {
                var rs = JSON.parse(d.data)[0];
                $scope.grilla = [];
                $scope.grilla = rs;
                $scope.openWai = false;
            });
        }
       // $scope.reportepedidos();

        $scope.Aprobar_RP = function (item) {
            $scope.openWai = true;
            console.log($scope.grilla);
            Service.getCrud({ tabla: angular.toJson($scope.grilla)}, "/Servicios.svc/Aprobar_RP").then(function (d) {
                var rs = JSON.parse(d.data);
                $scope.json3.nro_rp = rs;
                $scope.openWai = false;
                alert("GUARDADO EXITOSO");
                $scope.reportepedidos();
            });
        }

        $scope.verificar_srp = function (item) {
            $scope.openWai = true;
            Service.getCrud({ nro_ped: item.nro_pedido }, "/Servicios.svc/verificar_srp").then(function (d) {
                var rs = JSON.parse(d.data);
                $scope.openWai = false;
                $scope.json3.nro_srp = rs[1];
                console.log(rs);
                if (rs[1] == "RETENIDO") {
                    alert("EL SRP FUE VERIFICADO, SE ENCUENTRA EN ESTADO " + rs[1]);
                } else {
                    alert("EL SRP FUE VERIFICADO Y SE ENCUENTRA EN ESTADO PENDIENTE");
                }
            });
        }

        $scope.formatnumber = function (num) {
            //var num = input.value.replace(/\./g, '');
            if (!isNaN(num)) {
                num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
                num = num.split('').reverse().join('').replace(/^[\.]/, '');
                return '$' + num;
            }
        }



        $scope.buscar_acta = function (item) {
            $scope.openWaiting = true;
            $scope.openModalPRO = true;
            Service.getCrud({ numero_ped: item.nro_pedido }, "/Servicios.svc/Reporte_Nro_pedido").then(function (d) {
                var rs = JSON.parse(d.data);
                $scope.json3 = rs[0];
                $scope.json3.fecha = ssDate.militodate($scope.json3.fecha);
                $scope.key2.value = rs[0].ccosto;
                $scope.key3.value = rs[0].proveedor;
                $scope.tablapedidos = [];
                $scope.tablapedidos = rs[1];
            });
        }

        $scope.buscar_srp = function (item) {
            $scope.showsrp = true;
            $scope.openModalPRO = true;
            Service.getCrud({ numero_ped: item.nro_pedido }, "/Servicios.svc/Reporte_SRP").then(function (d) {
                var rs = JSON.parse(d.data);
                $scope.json3 = rs[0];
                $scope.json3.fecha = ssDate.militodate($scope.json3.fecha);
                $scope.key3.value = rs[0].proveedor;
                $scope.key2.value = rs[0].ccosto;
                $scope.tablapedidos = [];
                $scope.tablapedidos = rs[1];
            });
        }

        $scope.closePRO = function () {
            $scope.openWaiting = false;
            $scope.openModalPRO = false;
            $scope.showsrp = false;
        }




        $scope.convert = function (x) {
            var aux = ssDate.militodate(x);
            return ssDate.dateToString(aux, 'dd-MM-yyyy');
        }

        $scope.convertst = function (x) {
            return x = '$ ' + x;
        }

        /*CONFIG BUSQUEDA RAPIDA CCOSTO*/
        $scope.dataccosto = {
            id: 'buscadorNombre',
            component: [{ id: 'brNombre', type: '' }],
            table: 'area_ccosto',
            column: [
                { name: 'rtrim(ltrim(ccosto))', as: 'Ccosto', visible: true },
                { name: 'rtrim(ltrim(area))', as: 'Area', visible: true }



            ],
            where: {},
            groupby: true,
            orderby: [],
            title: 'BUSCAR CENTRO DE COSTO',
            required_name: "CENTRO DE COSTO"
        };
        $scope.rsccosto = function (d) {
            var j = JSON.parse(d);
            $scope.json.ccosto = j.Ccosto;

        }

        /*CONFIG BUSQUEDA RAPIDA CCOSTO*/
        $scope.key3 = { value: '' };
        $scope.dataproveedor = {
            id: 'buscadorprov',
            component: [{ id: 'brProvee', type: '' }],
            table: 'proveedor',
            column: [
                { name: 'rtrim(ltrim(nit))', as: 'NIT', visible: true },
                { name: 'rtrim(ltrim(razon_social))', as: 'RZ', visible: true }

            ],
            where: {},
            groupby: true,
            orderby: [],
            title: 'BUSCAR PROVEEDOR',
            required_name: "PROVEEDOR"
        };
        $scope.rsproveedor = function (d) {
            var j = JSON.parse(d);
            $scope.json.proveedor = j.NIT;
        }

    }
    function Reporte_pedidos_aprobados($scope, $q, Service, Auth, $timeout, ssDate) {
        var fechaini1 = ssDate.dateToString($scope.fecha_inicio, 'yyyy-MM-dd');
        var fechafin1 = ssDate.dateToString($scope.fecha_fin, 'yyyy-MM-dd');
        $scope.json = {};
        $scope.json3 = {};
        $scope.key = { value: '' };
        $scope.key2 = { value: '' };


        $timeout(function () {
            $("#brNombre-btn-clave").attr('disabled', 'disabled');
            $("#brProvee-btn-clave").attr('disabled', 'disabled');
            $("#brProvee-btn-valor").attr('disabled', 'disabled');
            $("#brProvee-btn-btn").attr('disabled', 'disabled');
            $("#brNombre-btn-valor").attr('disabled', 'disabled');
            $("#brNombre-btn-btn").attr('disabled', 'disabled');

            $("#brProvee-clave").attr('disabled', 'disabled');
            $("#brProvee-valor").attr('disabled', 'disabled');
            $("#brProvee-btn").attr('disabled', 'disabled');
            $("#brNombre-clave").attr('disabled', 'disabled');
            $("#brNombre-valor").attr('disabled', 'disabled');
            $("#brNombre-btn").attr('disabled', 'disabled');
        });

        Service.getCrud({}, "/Servicios.svc/preload_ccosto").then(function (d) {
            var rs = JSON.parse(d.data);
            $scope.centros = rs[0];
        });

        Service.getCrud({ username: Auth.getUserObj().username }, "/Servicios.svc/Validarpermiso").then(function (d) {
            var rs = parseInt(JSON.parse(d.data));
            if (rs > 0) {
                $scope.show_privilege = true;
                $scope.disabledcheck = false;
            } else {
                $scope.show_privilege = false;
                $scope.disabledcheck = true;
            }
        });
        $scope.reportepedidos = function (tipo_rep) {
            $scope.openWai = true;

            Service.getCrud({ usuario: Auth.getUserObj().nombre_usuario, tipo: tipo_rep, username: Auth.getUserObj().username, fechaini: $scope.fecha_inicio, fechafin: $scope.fecha_fin }, "/Servicios.svc/ReportePedidos_contratos").then(function (d) {
                var rs = JSON.parse(d.data)[0];
                $scope.grilla = [];
                $scope.grilla = rs;
                $scope.openWai = false;
            });
        }

        $scope.aprobar_srp = function (item) {
            $scope.openWai = true;
            Service.getCrud({ nro_ped: item.nro_pedido }, "/Servicios.svc/Aprobar_srp").then(function (d) {
                var rs = JSON.parse(d.data);
                $scope.openWai = false;
                alert("EL SRP FUE APROBADO CON NUMERO " + rs);
                $scope.reportepedidos();
            });
        }

        $scope.verificar_srp = function (item) {
            $scope.openWai = true;
            Service.getCrud({ nro_ped: item.nro_pedido }, "/Servicios.svc/verificar_srp").then(function (d) {
                var rs = JSON.parse(d.data);
                $scope.openWai = false;
                $scope.json3.nro_srp = rs[1];
                console.log(rs);
                if (rs[1] == "RETENIDO") {
                    alert("EL SRP FUE VERIFICADO, SE ENCUENTRA EN ESTADO " + rs[1]);
                } else {
                    alert("EL SRP FUE VERIFICADO Y SE ENCUENTRA EN ESTADO PENDIENTE");
                }
            });
        }

        $scope.formatnumber = function (num) {
            //var num = input.value.replace(/\./g, '');
            if (!isNaN(num)) {
                num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
                num = num.split('').reverse().join('').replace(/^[\.]/, '');
                return '$' + num;
            }
        }

        $scope.buscar_acta = function (item) {
            $scope.openWaiting = true;
            $scope.openModalPRO = true;
            Service.getCrud({ numero_ped: item.nro_pedido }, "/Servicios.svc/Reporte_Nro_pedido").then(function (d) {
                var rs = JSON.parse(d.data);
                $scope.json3 = rs[0];
                $scope.json3.fecha = ssDate.militodate($scope.json3.fecha);
                $scope.key2.value = rs[0].ccosto;
                $scope.key3.value = rs[0].proveedor;
                $scope.tablapedidos = [];
                $scope.tablapedidos = rs[1];
            });
        }

        $scope.buscar_srp = function (item) {
            $scope.showsrp = true;
            $scope.openModalPRO = true;
            Service.getCrud({ numero_ped: item.nro_pedido }, "/Servicios.svc/Reporte_SRP").then(function (d) {
                var rs = JSON.parse(d.data);
                $scope.json3 = rs[0];
                $scope.json3.fecha = ssDate.militodate($scope.json3.fecha);
                $scope.key2.value = rs[0].ccosto;
                $scope.key3.value = rs[0].proveedor;
                $scope.tablapedidos = [];
                $scope.tablapedidos = rs[1];
                $scope.vlr_total = 0;
                $scope.tablapedidos.forEach(function (item, index) {
                    $scope.vlr_total = $scope.vlr_total + item.total;
                })
            });
        }

        $scope.closePRO = function () {
            $scope.openWaiting = false;
            $scope.openModalPRO = false;
            $scope.showsrp = false;
        }

        $scope.convert = function (x) {
            var aux = ssDate.militodate(x);
            return ssDate.dateToString(aux, 'dd-MM-yyyy');
        }

        $scope.convertst = function (x) {
            return x = '$ ' + x;
        }

        $scope.show_observacion = function (item, index)
        {
            //if (item.nro_contrato != null) {
            //    $("#btn_obs").prop('disabled', true);
            //} else {
            //    $("#btn_obs").prop('disabled', false);
            //}
            $scope.observacion = item.obs_compras;
            $scope.index = index; 
            $scope.openModaOBS = true;
        }

        $scope.closeobs = function () {
            $scope.openModaOBS = false;
            $scope.observacion = "";
        }

        $scope.agregar = function () {
            $scope.grilla.forEach(function (it, ind) {
                if (ind == $scope.index) {
                    it.obs_compras = $scope.observacion;
                }
            })
            $scope.closeobs();
        }

        $scope.updateestados = function (item) {
            $scope.openWai = true;
            item.fecha = ssDate.militodate(item.fecha);
            item.fecha_vto_finan = ssDate.militodate(item.fecha_vto_finan);
            item.fecha_vto_bueno = ssDate.militodate(item.fecha_vto_bueno);
            Service.getCrud({ json: angular.toJson(item) }, "/Servicios.svc/Update_estados").then(function (d) {
                var rs = JSON.parse(d.data);
                $scope.openWai = false;
                alert("ACTUALIZACION DE ESTADO EXITOSO");
                $scope.reportepedidos($scope.filtro);
            });
        }

        /*CONFIG BUSQUEDA RAPIDA CCOSTO*/
        $scope.dataccosto = {
            id: 'buscadorNombre',
            component: [{ id: 'brNombre', type: '' }],
            table: 'area_ccosto',
            column: [
                { name: 'rtrim(ltrim(ccosto))', as: 'Ccosto', visible: true },
                { name: 'rtrim(ltrim(area))', as: 'Area', visible: true }

            ],
            where: {},
            groupby: true,
            orderby: [],
            title: 'BUSCAR CENTRO DE COSTO',
            required_name: "CENTRO DE COSTO"
        };
        $scope.rsccosto = function (d) {
            var j = JSON.parse(d);
            $scope.json.ccosto = j.Ccosto;

        }

        /*CONFIG BUSQUEDA RAPIDA CCOSTO*/
        $scope.key3 = { value: '' };
        $scope.dataproveedor = {
            id: 'buscadorprov',
            component: [{ id: 'brProvee', type: '' }],
            table: 'proveedor',
            column: [
                { name: 'rtrim(ltrim(nit))', as: 'NIT', visible: true },
                { name: 'rtrim(ltrim(razon_social))', as: 'RZ', visible: true }

            ],
            where: {},
            groupby: true,
            orderby: [],
            title: 'BUSCAR PROVEEDOR',
            required_name: "PROVEEDOR"
        };
        $scope.rsproveedor = function (d) {
            var j = JSON.parse(d);
            $scope.json.proveedor = j.NIT;
        }

        $scope.formatnumber = function (num) {
            //var num = input.value.replace(/\./g, '');
            if (!isNaN(num)) {
                num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
                num = num.split('').reverse().join('').replace(/^[\.]/, '');
                return '$' + num;
            }
        }




        //EXPORTAR A EXCEL

        $scope.JSONToCSVConvertor = function (JSONData, ReportTitle, ShowLabel) {

            //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
            var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;

            var CSV = '';
            //Set Report title in first row or line

            CSV += ReportTitle + '\r\n\n';

            //This condition will generate the Label/Header
            if (ShowLabel) {
                var row = "";

                //This loop will extract the label from 1st index of on array
                for (var index in arrData[0]) {

                    //Now convert each value to string and comma-seprated
                    row += index + ';';
                }

                row = row.slice(0, -1);

                //append Label row with line break
                CSV += row + '\r\n';
            }

            //1st loop is to extract each row
            for (var i = 0; i < arrData.length; i++) {
                var row2 = "";

                //2nd loop will extract each column and convert it in string comma-seprated
                for (var index1 in arrData[i]) {
                    row2 += '"' + arrData[i][index1] + '";';
                }

                row2.slice(0, row2.length - 1);

                //add a line break after each row
                CSV += row2 + '\r\n';
            }

            if (CSV == '') {
                alert("Invalid data");
                return;
            }
            //FECHA ACTUAL
            var fecha = ssDate.dateToString(Date.now(), 'yyyy-MM-dd');

            //Generate a file name
            var fileName = "Descarga_" + fecha;
            //this will remove the blank-spaces from the title and replace it with an underscore
            fileName += ReportTitle.replace(/ /g, "_");

            //Initialize file format you want csv or xls
            var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);

            // Now the little tricky part.
            // you can use either>> window.open(uri);
            // but this will not work in some browsers
            // or you will not get the correct file extension    

            //this trick will generate a temp <a /> tag
            var link = document.createElement("a");
            link.href = uri;

            //set the visibility hidden so it will not effect on your web-layout
            link.style = "visibility:true";
            link.download = fileName + ".csv";

            //this part will append the anchor tag and remove it after automatic click
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        $scope.fnExcelReport = function () {
            $scope.JSONToCSVConvertor($scope.reporte, "REPORTE DE PEDIDOS", true);
        }

        // JSON to CSV Converter
        $scope.ConvertToCSV = function (tabla) {
            var array = typeof tabla != 'object' ? JSON.parse(tabla) : tabla;
            var str = '';

            for (var i = 0; i < array.length; i++) {
                var line = '';
                for (var index in array[i]) {
                    if (line != '') line += ';'

                    line += array[i][index];
                }

                str += line + '\r\n';
            }
            $scope.resultcvs = str;
        }

        // Example


        // Create Object
        var items = [
            { name: "Item 1", color: "Green", size: "X-Large" },
            { name: "Item 2", color: "Green", size: "X-Large" },
            { name: "Item 3", color: "Green", size: "X-Large" }];

        // Convert Object to JSON
        var jsonObject = JSON.stringify(items);

        $scope.generar_informe = function () {
            $scope.openWai = true;
            Service.getCrud({}, "/Servicios.svc/ExportarPedidosCompras").then(function (d) {
                var rs = JSON.parse(d.data);
                $scope.reporte = [];
                $scope.reporte = rs;
                $scope.fnExcelReport();
                $scope.openWai = false;
            });

        }


    }
    function GestionArtController($scope, $q, Service, Auth, $timeout) {
        $scope.json = {};
        $scope.msj = '';
        $scope.cod_user = Auth.getUserObj().codigo;
        $scope.log_user = Auth.getUserObj().username;
        $scope.key = { value: '' };
        $scope.openWaiting = false;





        /*CONFIG BUSQUEDA RAPIDA*/
        $scope.nuevo = function () {
            $scope.json = {};
            Service.getCrud({}, "/Servicios.svc/PreloadArticulos").then(function (d) {
                $scope.json.codigo = JSON.parse(d.data)[0];
                $scope.iva = JSON.parse(d.data)[1];
                console.log($scope.iva);
            });
        }

        /*BARRA*/
        $scope.showbtn = { buscar: true, imprimir: false, nuevo: true, editar: false, eliminar: false, cerrar: false };
        $scope.disabledbtn = { buscar: false, imprimir: true, nuevo: false, editar: true, eliminar: true };

        

        /*CRUD*/
        $scope.guardar = function () {
            var defender = $q.defer();
            var promise = defender.promise;
            if (!$scope.articulos.$valid) {
                var cr = "Campos requeridos no diligenciados:";
                $scope.articulos.$error.required.forEach(function (item, index) {
                    cr += "\n - " + item.$name;
                });
                alert(cr);
                defender.resolve(false);
                return promise;
            } else {
                $timeout(function () {
                    try {
                        var rs = false;
                        Service.getCrud({ json: angular.toJson($scope.json) }, '/Servicios.svc/CreateArticulos').then(function (d) {
                            rs = JSON.parse(d.data);
                            defender.resolve(rs);
                        });
                    } catch (e) {
                        defender.reject(e);
                    }


                });
            }
            return promise;

        };
        $scope.actualizar = function () {
            var defender = $q.defer();
            var promise = defender.promise;
            if (!$scope.empleados.$valid) {
                var cr = "Campos requeridos no diligenciados";
                $scope.empleados.$error.required.forEach(function (item, index) {
                    cr += "\n - " + item.$name;
                });
                alert(cr);
                defender.resolve(false);
                return promise;
            } else {
                $timeout(function () {
                    try {
                        var rs = false;
                        Service.getCrud({ json: angular.toJson($scope.json) }, "/Servicios.svc/UpdateEmpleados").then(function (d) {
                            rs = JSON.parse(d.data);
                            defender.resolve(rs);

                        });
                    } catch (e) {

                        defender.reject(e);

                    }
                });
            }
            return promise;
        };
        $scope.eliminar = function () {
            var defender = $q.defer();
            var promise = defender.promise;
            $timeout(function () {
                try {
                    var rs = false;
                    Service.getCrud({ id: parseInt($scope.id) }, "/Salud.svc/DeleteEmpleados").then(function (d) {
                        rs = JSON.parse(d.data);
                        defender.resolve(rs);
                    });
                } catch (e) {
                    defender.reject(e);
                }
            });
            return promise;
        };
        $scope.editar = function () {
            $("#ced").prop("disabled", true);
            $("#pnombre").prop("disabled", true);
            $("#snombre").prop("disabled", true);
            $("#ppellido").prop("disabled", true);
            $("#spellido").prop("disabled", true);
        }

       
        $scope.dataArticulos = {
            id: 'dataBuscador',
            component: [{ id: 'articulos-buscar', type: 'btn' }],
            table: 'compras_articulos',
            column: [
                { name: 'id', as: 'id', visible: false },
                { name: 'codigo', as: 'codigo', visible: true },
                { name: 'descripcion', as: 'descripcion', visible: true },
                { name: 'und', as: 'und', visible: false },
                { name: 'cuenta', as: 'cuenta', visible: false },
                { name: 'tipo_iva', as: 'tipo_iva', visible: false },
                { name: 'grupo', as: 'grupo', visible: false }
            ],
            where: [],
            groupby: false,
            orderby: [],
            title: 'Busqueda de Articulos'
        };
        $scope.rsArticulos = function (d) {
            var v = JSON.parse(d);
            $scope.json.codigo = parseInt(v.codigo);
            $scope.json.descripcion = v.descripcion;
            $scope.json.und = v.und;
            $scope.json.cuenta = v.cuenta;
            $scope.json.tipo_iva = v.tipo_iva;
            $scope.json.grupo = v.grupo;
            $scope.key.value = v.cuenta;
        };
       
        /*CONFIG BUSQUEDA RAPIDA*/
        $scope.dataGrupo = {
            id: 'buscadorNombre',
            component: [{ id: 'brgrupo', type: '' }],
            table: 'grupos',
            column: [
                { name: 'rtrim(ltrim(id))', as: 'ID', visible: true },
                { name: 'rtrim(ltrim(grupo))', as: 'Grupo', visible: true },
                { name: 'rtrim(ltrim(cuenta))', as: 'Cuenta', visible: false },
                { name: 'rtrim(ltrim(rubro))', as: 'Rubro', visible: true }
            ],
            where: {},
            groupby: true,
            orderby: [],
            title: 'Buscar Area',
            required: true
        };
        $scope.rsGrupo = function (d) {
            var j = JSON.parse(d);
            $scope.json.grupo = j.Grupo;
            $scope.json.cuenta = j.Cuenta;
            $scope.json.rubro = j.Rubro;
        }

    }
    function inf_pedidos_srp_controller($scope, $q, Service, Auth, $timeout, ssDate) {
        $scope.json = {};
        $scope.json3 = {};
        $scope.key = { value: '' };
        $scope.key2 = { value: '' };

        $timeout(function () {
            $("#brNombre-btn-clave").attr('disabled', 'disabled');
            $("#brProvee-btn-clave").attr('disabled', 'disabled');
            $("#brProvee-btn-valor").attr('disabled', 'disabled');
            $("#brProvee-btn-btn").attr('disabled', 'disabled');
            $("#brNombre-btn-valor").attr('disabled', 'disabled');
            $("#brNombre-btn-btn").attr('disabled', 'disabled');

            $("#brProvee-clave").attr('disabled', 'disabled');
            $("#brProvee-valor").attr('disabled', 'disabled');
            $("#brProvee-btn").attr('disabled', 'disabled');
            $("#brNombre-clave").attr('disabled', 'disabled');
            $("#brNombre-valor").attr('disabled', 'disabled');
            $("#brNombre-btn").attr('disabled', 'disabled');
        });

        Service.getCrud({}, "/Servicios.svc/preload_ccosto").then(function (d) {
            var rs = JSON.parse(d.data);
            $scope.centros = rs[0];
        });

        Service.getCrud({ username: Auth.getUserObj().username }, "/Servicios.svc/Validarpermiso").then(function (d) {
            var rs = parseInt(JSON.parse(d.data));
            if (rs > 0) {
                $scope.show_privilege = true;
                $scope.disabledcheck = false;
            } else {
                $scope.show_privilege = false;
                $scope.disabledcheck = true;
            }
        });
        $scope.reportepedidos = function () {
            $scope.openWai = true;
            Service.getCrud({ usuario: Auth.getUserObj().nombre_usuario, tipo: 1, username: Auth.getUserObj().username }, "/Servicios.svc/Info_ped_srp").then(function (d) {
                var rs = JSON.parse(d.data);
                $scope.grilla = [];
                $scope.grilla = rs;
                $scope.jsonexcel = {};
                $scope.jsonexcel = rs;
                $scope.openWai = false;
            });
        }
        $scope.reportepedidos();
        $scope.aprobar_srp = function (item) {
            $scope.openWai = true;
            Service.getCrud({ nro_ped: item.nro_pedido }, "/Servicios.svc/Aprobar_srp").then(function (d) {
                var rs = JSON.parse(d.data);
                $scope.openWai = false;
                alert("EL SRP FUE APROBADO CON NUMERO " + rs);
                $scope.reportepedidos();
            });
        }

        $scope.verificar_srp = function (item) {
            $scope.openWai = true;
            Service.getCrud({ nro_ped: item.nro_pedido }, "/Servicios.svc/verificar_srp").then(function (d) {
                var rs = JSON.parse(d.data);
                $scope.openWai = false;
                $scope.json3.nro_srp = rs[1];
                console.log(rs);
                if (rs[1] == "RETENIDO") {
                    alert("EL SRP FUE VERIFICADO, SE ENCUENTRA EN ESTADO " + rs[1]);
                } else {
                    alert("EL SRP FUE VERIFICADO Y SE ENCUENTRA EN ESTADO PENDIENTE");
                }
            });
        }

        $scope.formatnumber = function (num) {
            //var num = input.value.replace(/\./g, '');
            if (!isNaN(num)) {
                num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
                num = num.split('').reverse().join('').replace(/^[\.]/, '');
                return '$' + num;
            }
        }

        $scope.buscar_acta = function (item) {
            $scope.openWaiting = true;
            $scope.openModalPRO = true;
            Service.getCrud({ numero_ped: item.nro_pedido }, "/Servicios.svc/Reporte_Nro_pedido").then(function (d) {
                var rs = JSON.parse(d.data);
                $scope.json3 = rs[0];
                $scope.json3.fecha = ssDate.militodate($scope.json3.fecha);
                $scope.key2.value = rs[0].ccosto;
                $scope.key3.value = rs[0].proveedor;
                $scope.tablapedidos = [];
                $scope.tablapedidos = rs[1];
            });
        }

        $scope.buscar_srp = function (item) {
            $scope.showsrp = true;
            $scope.openModalPRO = true;
            Service.getCrud({ numero_ped: item.nro_pedido }, "/Servicios.svc/Reporte_SRP").then(function (d) {
                var rs = JSON.parse(d.data);
                $scope.json3 = rs[0];
                $scope.json3.fecha = ssDate.militodate($scope.json3.fecha);
                $scope.key2.value = rs[0].ccosto;
                $scope.key3.value = rs[0].proveedor;
                $scope.tablapedidos = [];
                $scope.tablapedidos = rs[1];
                $scope.vlr_total = 0;
                $scope.tablapedidos.forEach(function (item, index) {
                    $scope.vlr_total = $scope.vlr_total + item.total;
                })
            });
        }

        $scope.closePRO = function () {
            $scope.openWaiting = false;
            $scope.openModalPRO = false;
            $scope.showsrp = false;
        }

        $scope.convert = function (x) {
            var aux = ssDate.militodate(x);
            return ssDate.dateToString(aux, 'dd-MM-yyyy');
        }

        $scope.convertst = function (x) {
            return x = '$ ' + x;
        }

        $scope.show_observacion = function (item, index) {
            //if (item.nro_contrato != null) {
            //    $("#btn_obs").prop('disabled', true);
            //} else {
            //    $("#btn_obs").prop('disabled', false);
            //}
            $scope.observacion = item.obs_compras;
            $scope.index = index;
            $scope.openModaOBS = true;
        }

        $scope.closeobs = function () {
            $scope.openModaOBS = false;
            $scope.observacion = "";
        }

        $scope.agregar = function () {
            $scope.grilla.forEach(function (it, ind) {
                if (ind == $scope.index) {
                    it.obs_compras = $scope.observacion;
                }
            })
            $scope.closeobs();
        }

        $scope.updateestados = function (item) {
            $scope.openWai = true;
            item.fecha = ssDate.militodate(item.fecha);
            item.fecha_vto_finan = ssDate.militodate(item.fecha_vto_finan);
            item.fecha_vto_bueno = ssDate.militodate(item.fecha_vto_bueno);
            Service.getCrud({ json: angular.toJson(item) }, "/Servicios.svc/Update_estados").then(function (d) {
                var rs = JSON.parse(d.data);
                $scope.openWai = false;
                alert("ACTUALIZACION DE ESTADO EXITOSO");
                $scope.reportepedidos($scope.filtro);
            });
        }

        /*CONFIG BUSQUEDA RAPIDA CCOSTO*/
        $scope.dataccosto = {
            id: 'buscadorNombre',
            component: [{ id: 'brNombre', type: '' }],
            table: 'area_ccosto',
            column: [
                { name: 'rtrim(ltrim(ccosto))', as: 'Ccosto', visible: true },
                { name: 'rtrim(ltrim(area))', as: 'Area', visible: true }

            ],
            where: {},
            groupby: true,
            orderby: [],
            title: 'BUSCAR CENTRO DE COSTO',
            required_name: "CENTRO DE COSTO"
        };
        $scope.rsccosto = function (d) {
            var j = JSON.parse(d);
            $scope.json.ccosto = j.Ccosto;

        }

        /*CONFIG BUSQUEDA RAPIDA CCOSTO*/
        $scope.key3 = { value: '' };
        $scope.dataproveedor = {
            id: 'buscadorprov',
            component: [{ id: 'brProvee', type: '' }],
            table: 'proveedor',
            column: [
                { name: 'rtrim(ltrim(nit))', as: 'NIT', visible: true },
                { name: 'rtrim(ltrim(razon_social))', as: 'RZ', visible: true }

            ],
            where: {},
            groupby: true,
            orderby: [],
            title: 'BUSCAR PROVEEDOR',
            required_name: "PROVEEDOR"
        };
        $scope.rsproveedor = function (d) {
            var j = JSON.parse(d);
            $scope.json.proveedor = j.NIT;
        }



        //EXPORTAR A EXCEL

        $scope.JSONToCSVConvertor = function (JSONData, ReportTitle, ShowLabel) {

            //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
            var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;

            var CSV = '';
            //Set Report title in first row or line

            CSV += ReportTitle + '\r\n\n';

            //This condition will generate the Label/Header
            if (ShowLabel) {
                var row = "";

                //This loop will extract the label from 1st index of on array
                for (var index in arrData[0]) {

                    //Now convert each value to string and comma-seprated
                    row += index + ',';
                }

                row = row.slice(0, -1);

                //append Label row with line break
                CSV += row + '\r\n';
            }

            //1st loop is to extract each row
            for (var i = 0; i < arrData.length; i++) {
                var row2 = "";

                //2nd loop will extract each column and convert it in string comma-seprated
                for (var index1 in arrData[i]) {
                    row2 += '"' + arrData[i][index1] + '",';
                }

                row2.slice(0, row2.length - 1);

                //add a line break after each row
                CSV += row2 + '\r\n';
            }

            if (CSV == '') {
                alert("Invalid data");
                return;
            }
            //FECHA ACTUAL
            var fecha = ssDate.dateToString(Date.now(), 'yyyy-MM-dd');

            //Generate a file name
            var fileName = "Descarga_" + fecha;
            //this will remove the blank-spaces from the title and replace it with an underscore
            fileName += ReportTitle.replace(/ /g, "_");

            //Initialize file format you want csv or xls
            var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);

            // Now the little tricky part.
            // you can use either>> window.open(uri);
            // but this will not work in some browsers
            // or you will not get the correct file extension    

            //this trick will generate a temp <a /> tag
            var link = document.createElement("a");
            link.href = uri;

            //set the visibility hidden so it will not effect on your web-layout
            link.style = "visibility:true";
            link.download = fileName + ".csv";

            //this part will append the anchor tag and remove it after automatic click
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        $scope.fnExcelReport = function () {
            $scope.grilla.forEach(function (item, index) {
                if (item.Fecha != '/Date(-62135578800000)/') {
                    item.Fecha = $scope.convert(item.Fecha);
                } else {
                    item.Fecha = "";
                }
            });
            $scope.JSONToCSVConvertor($scope.jsonexcel, "", true);
        }

        // JSON to CSV Converter
        $scope.ConvertToCSV = function (tabla) {
            var array = typeof tabla != 'object' ? JSON.parse(tabla) : tabla;
            var str = '';

            for (var i = 0; i < array.length; i++) {
                var line = '';
                for (var index in array[i]) {
                    if (line != '') line += ';'

                    line += array[i][index];
                }

                str += line + '\r\n';
            }
            $scope.resultcvs = str;
        }

        // Example


        // Create Object
        var items = [
            { name: "Item 1", color: "Green", size: "X-Large" },
            { name: "Item 2", color: "Green", size: "X-Large" },
            { name: "Item 3", color: "Green", size: "X-Large" }];

        // Convert Object to JSON
        var jsonObject = JSON.stringify(items);
    }
    function Acta_satisfacccion_controller($scope, $q, Service, Auth, $timeout, ssDate) {
        $scope.json = {};
        $scope.json2 = {};
        $scope.msj = '';
        $scope.cod_user = Auth.getUserObj().codigo;
        $scope.log_user = Auth.getUserObj().username;
        $scope.name_user = Auth.getUserObj().nombre_usuario;
        $scope.key3 = { value: '' };
        $scope.key2 = { value: '' };
        $scope.openWaiting = false;
        $scope.tablarp = [];
        $scope.openWait = false;
        $scope.openModalPRO = false;
        $scope.sh_add_rp = true;
        $scope.detalle_rp = [];
        $scope.modal = false;
        $scope.tabla = [];
        $scope.registros = [];
        $scope.fecha_actual = new Date();
        $scope.anio = $scope.fecha_actual.getFullYear();
        //ESTA TABLA SE USA PARA SUMAR VALORES DE LOS RP ACTUALES
        $scope.grillaaux = [];
        $scope.ruta = "img/Logo_optecom.jpg";
        Service.getCrud({}, "/Servicios.svc/PreloaDirectivos").then(function (d) {
            $scope.directivos = JSON.parse(d.data)[0];

        });

        /*CONFIG BUSQUEDA RAPIDA*/
        $scope.nuevo = function () {
            $scope.json = {};
            $scope.json2 = {};
            $scope.msj = '';
            $scope.cod_user = Auth.getUserObj().codigo;
            $scope.log_user = Auth.getUserObj().username;
            $scope.name_user = Auth.getUserObj().nombre_usuario;
            $scope.key3 = { value: '' };
            $scope.key2 = { value: '' };
            $scope.openWaiting = false;
            $scope.tablarp = [];
            $scope.openWait = false;
            $scope.openModalPRO = false;
            $scope.sh_add_rp = true;
            $scope.detalle_rp = [];
            $scope.modal = false;
            $scope.tabla = [];
            $scope.registros = [];
            $scope.sh_add = true;
            $scope.json2.otros = 0;
            $scope.showbtn.imprimir = false;
            console.log($scope.dataCECO);
            //ESTA TABLA SE USA PARA SUMAR VALORES DE LOS RP ACTUALES
            $scope.grillaaux = [];
            //VALIDAR USUARIO
                Service.getCrud({ cedula: $scope.cod_user }, "/Servicios.svc/Read_User").then(function (d) {
                    var rs = JSON.parse(d.data);
                    $scope.json.elaborado_por = rs.nombre + ' ' + rs.ppellido + ' ' + rs.spellido;
                    $scope.json.dependencia = rs.area;
                });
            $scope.data_orden.where = [];
            $scope.data_orden.where.push({ col: "nro_contrato", filter: "!='NULL'", join: '' });
            $scope.dataRP.where = [];
            $scope.dataRP.where.push({ col: "nro_rp", filter: "!=''", join: '' });
        }

        $scope.cancelar = function () {
            $scope.json = {};
            $scope.json2 = {};
            $scope.msj = '';
            $scope.cod_user = Auth.getUserObj().codigo;
            $scope.log_user = Auth.getUserObj().username;
            $scope.name_user = Auth.getUserObj().nombre_usuario;
            $scope.key3 = { value: '' };
            $scope.key2 = { value: '' };
            $scope.openWaiting = false;
            $scope.tablarp = [];
            $scope.openWait = false;
            $scope.openModalPRO = false;
            $scope.sh_add_rp = true;
            $scope.detalle_rp = [];
            $scope.modal = false;
            $scope.tabla = [];
            $scope.json2.otros = null;
            $scope.registros = [];
            $scope.sh_add = false;
            //ESTA TABLA SE USA PARA SUMAR VALORES DE LOS RP ACTUALES
            $scope.grillaaux = [];
            $scope.data_orden.where = [];
            $scope.data_orden.where.push({ col: "nro_contrato", filter: "!='NULL'", join: '' });
            $scope.dataRP.where = [];
            $scope.dataRP.where.push({ col: "nro_rp", filter: "!=''", join: '' });
        }

        /*CONFIG BUSQUEDA RAPIDA PROVEEDOR*/
        $scope.dataproveedor = {
            id: 'buscadorprov',
            component: [{ id: 'brProvee', type: '' }],
            table: 'proveedor',
            column: [
                { name: 'rtrim(ltrim(nit))', as: 'NIT', visible: true },
                { name: 'rtrim(ltrim(razon_social))', as: 'RZ', visible: true }

            ],
            where: {},
            groupby: true,
            orderby: [],
            title: 'BUSCAR PROVEEDOR',
            required_name: "PROVEEDOR"
        };
        $scope.rsproveedor = function (d) {
            var j = JSON.parse(d);
            $scope.json.nit_proveedor = j.NIT;
            $scope.json.nombre_proveedor = j.RZ;
        }



        /*BARRA*/
        $scope.showbtn = { buscar: true, imprimir: false, nuevo: true, editar: true, eliminar: true, cerrar: false };
        $scope.disabledbtn = { buscar: false, imprimir: false, nuevo: false, editar: true, eliminar: true };

        Service.getCrud({}, "/Servicios.svc/PreloadEmpresa").then(function (d) {
            $scope.empresa = JSON.parse(d.data)[0];

        });

        /*CRUD*/
        $scope.guardar = function () {
            var defender = $q.defer();
            var promise = defender.promise;
            $scope.json.tipo_comp = parseInt($scope.json.tipo_comp);
            if ($scope.json.tipo_comp != 4 && $scope.json.nro_oden != undefined || $scope.json.tipo_comp == 4 ) {
                if (!$scope.acta_satis.$valid) {
                    var cr = "Campos requeridos no diligenciados:";
                    $scope.acta_satis.$error.required.forEach(function (item, index) {
                        cr += "\n - " + item.$name;
                    });
                    alert(cr);
                    defender.resolve(false);
                    return promise;
                } else {
                    $timeout(function () {
                        try {
                            var rs = false;
                            if ($scope.tabla.length > 0) {
                                $scope.json.aprobado = "0";
                                $scope.total1 = 0;

                              Service.getCrud({ json: angular.toJson($scope.json), tabla: angular.toJson($scope.tabla), lista_rp: angular.toJson($scope.tablarp) }, '/Servicios.svc/CreateActa_Satisfaccion').then(function (d) {
                                            rs = JSON.parse(d.data);
                                            alert("GUARDADO CON EXITO. SU NUMERO DE CONSECUTIVO: " + rs[1])
                                            defender.resolve(rs[0]);
                                        });


                            } else {
                                alert("DEBE AGREGAR AL MENOS UNA PRESTACION DE SERVICIO");
                            }
                        } catch (e) {
                            defender.reject(e);
                        }


                    });
                }

            } else {
                alert("DEBE ESCOGER UN NUMERO DE ORDEN O CONTRATO")
            }
            return promise;

        };
        $scope.actualizar = function () {
            var defender = $q.defer();
            var promise = defender.promise;
            $scope.json.tipo_comp = parseInt($scope.json.tipo_comp);
            if ($scope.json.tipo_comp != 4 && $scope.json.nro_oden != undefined || $scope.json.tipo_comp == 4) {
                if (!$scope.acta_satis.$valid) {
                    var cr = "Campos requeridos no diligenciados:";
                    $scope.acta_satis.$error.required.forEach(function (item, index) {
                        cr += "\n - " + item.$name;
                    });
                    alert(cr);
                    defender.resolve(false);
                    return promise;
                } else {
                    $timeout(function () {
                        try {
                            var rs = false;
                            if ($scope.tabla.length > 0) {
                                $scope.json.aprobado = "0";
                                $scope.total1 = 0;
                                Service.getCrud({ json: angular.toJson($scope.json), tabla: angular.toJson($scope.tabla), lista_rp: angular.toJson($scope.tablarp) }, '/Servicios.svc/Update_ASatisfaccion').then(function (d) {
                                    rs = JSON.parse(d.data);
                                    alert("REGISTRO ACTUALIZADO")
                                    defender.resolve(rs);
                                });
                            } else {
                                alert("DEBE AGREGAR AL MENOS UNA PRESTACION DE SERVICIO");
                            }
                        } catch (e) {
                            defender.reject(e);
                        }
                    });
                }

            } else {
                alert("DEBE ESCOGER UN NUMERO DE ORDEN O CONTRATO")
            }
            return promise;

        };
        $scope.eliminar = function () {
            var defender = $q.defer();
            var promise = defender.promise;
            $timeout(function () {
                try {
                    var rs = false;
                    Service.getCrud({ id: parseInt($scope.id) }, "/Salud.svc/DeleteEmpleados").then(function (d) {
                        rs = JSON.parse(d.data);
                        defender.resolve(rs);
                    });
                } catch (e) {
                    defender.reject(e);
                }
            });
            return promise;
        };


        $scope.rsEmpleado = function (v) {
            $scope.id = JSON.parse(v).id;
            if ($scope.id != '' && $scope.id != null) {
                Service.getCrud({ id: parseInt($scope.id) }, "/Servicios.svc/ReadEmpleados").then(function (d) {
                    var rs = JSON.parse(d.data);
                    $scope.json = rs;
                    $scope.json.cedula_emp = parseInt(rs.cedula_emp);
                    $scope.json.empresa = rs.empresa;
                    $scope.key.value = rs.ccosto;
                    console.log($scope.key.value);
                    $scope.disabledbtn.eliminar = false;
                    $scope.disabledbtn.editar = false;
                });
            }
        };
        $scope.dataEmpleado = {
            id: 'dataBuscador',
            component: [{ id: 'empleados-buscar', type: 'btn' }],
            table: 'empleado',
            column: [
                { name: 'id', as: 'id', visible: false },
                { name: 'cedula_emp', as: 'Cedula', visible: true },
                { name: 'nombre', as: 'Nombre', visible: true },
                { name: 'snombre', as: 'S_Nombre', visible: true },
                { name: 'ppellido', as: 'P_Apellido', visible: true },
                { name: 'spellido', as: 'S_Apellido', visible: true },
                { name: 'area', as: 'Area', visible: false },
                //{ name: 'cargo', as: 'Cargo', visible: false },

            ],
            where: [],
            groupby: false,
            orderby: [],
            title: 'Busqueda de Empleados'
        };
        //$scope.dataEmpleado.where.push({ col: "usu_id", filter: "='" + $scope.json.usu_id + "'", join: '' });

        $scope.open = function () {
            if ($scope.json.nro_oden == undefined && $scope.json.tipo_comp != '4') {
                alert("DEBE SELECCIONAR UN CONTRATO");
            } else {
                document.getElementById("brCeco").click(); // Click on the checkbox
            }
        }



        $scope.openrp = function () {
            if ($scope.json.nro_factura != undefined && $scope.json.nro_factura != "") {
                document.getElementById("brRP").click(); // Click on the checkbox
            } else {
                alert("DEBE AGREGAR EL NUMERO DE FACTURA");
                $scope.close();
            }
        }
        /* BUSQUEDA PRESTACION DEL SERVICIO*/
        $scope.dataCECO = {
            id: 'buscadorceco',
            component: [{ id: 'brCeco', type: 'btn' }],
            table: 'pedidos',
            column: [
                { name: 'rtrim(ltrim(nro_pedido))', as: 'Nro_pedido', visible: true },
                { name: 'year(fecha)', as: 'ANIO', visible: true },
                { name: 'rtrim(ltrim(nro_srp))', as: 'Nro_srp', visible: true },
                { name: 'rtrim(ltrim(srp.ccosto))', as: 'Ceco', visible: true },
                { name: 'rtrim(ltrim(srp.cuenta))', as: 'Cuenta', visible: true },
                { name: 'rtrim(ltrim(nro_rp))', as: 'Nro_rp', visible: true },
                { name: 'srp.total', as: 'Valor', visible: true },
            ],
            inner_join: [{ table: "srp", on: "pedidos.nro_pedido = srp.id_pedido", join: "" }],
            where: [],
            groupby: false,
            orderby: [],
            title: 'Buscar Centro de Costo',
            required: true
        };
        $scope.rsCECO = function (d) {
            var j = JSON.parse(d);
            if (j.Nro_pedido != undefined) {
            $scope.json2.nro_pedido = j.Nro_pedido;
            $scope.json2.nro_srp = j.Nro_srp;
            $scope.json2.ceco = j.Ceco;
            $scope.json2.cuenta = j.Cuenta;
            $scope.json2.nro_rp = j.Nro_rp;
            $scope.json2.valor_max = parseInt(j.Valor);

            Service.getCrud({ pedido: parseInt($scope.json2.nro_pedido), ceco: $scope.json2.ceco, cuenta: $scope.json2.cuenta  }, "/Servicios.svc/Validar_saldo_disponibe").then(function (d) {
                var rs = JSON.parse(d.data);
                console.log(rs);
                $scope.json2.saldo_disponible = $scope.json2.valor_max - rs;
            });
            }
        }

        /* BUSQUEDA RP*/
        $scope.dataRP= {
            id: 'buscador_rp',
            component: [{ id: 'brRP', type: 'btn' }],
            table: 'pedidos',
            column: [
                { name: 'rtrim(ltrim(nro_rp))', as: 'Nro_rp', visible: true },
            ],
            where: {},
            groupby: true,
            orderby: [],
            title: 'BUSCAR RECURSO PRESUPUESTAL',
            required: true
        };
        $scope.dataRP.where = [];
        $scope.dataRP.where.push({ col: "nro_rp", filter: "!=''", join: '' });
        $scope.rsRP= function (d) {
            var j = JSON.parse(d);
            if (j.Nro_rp != undefined) {
                var check = false;
                $scope.tablarp.forEach(function (item, index) {
                    if (item.nro_rp == j.Nro_rp) {
                        check = true;
                    } 
                })
                if (check != true) {
                    $scope.result = {};
                    $scope.result.id_ped = j.Nro_rp;
                    $scope.result.nro_rp = j.Nro_rp;
                    $scope.result.activo = 0;
                    $scope.tablarp.push($scope.result);
                    if ($scope.data_orden.where.length <= 1) {
                        $scope.data_orden.where.push({ col: " AND nro_rp", filter: "='" + j.Nro_rp + "'", join: '' });
                    } else {
                        $scope.data_orden.where.push({ col: " OR nro_rp", filter: "='" + j.Nro_rp + "'", join: '' });
                    }
                } else {
                    alert("EL RP SELECCIONADO YA SE ENCUENTRA AGREGADO");
                }
            }

        }

        //BUSQUEDA ORDEN O CONTRATO
        $scope.data_orden = {
            id: 'buscador_orden',
            component: [{ id: 'br_orden', type: 'btn' }],
            table: 'pedidos',
            column: [
                { name: 'rtrim(ltrim(nro_contrato))', as: 'Nro_orden', visible: true }
            ],
            where: {},
            groupby: true,
            orderby: [],
            title: 'BUSCAR ORDEN O CONTRATO',
        };
        $scope.data_orden.where = [];
        $scope.data_orden.where.push({ col: "nro_contrato", filter: "!='NULL'", join: '' });
        $scope.rs_orden = function (d) {
            var j = JSON.parse(d);
            $scope.json.nro_oden = j.Nro_orden;
            $scope.dataCECO.where = [];
            $scope.dataCECO.where.push({ col: "year(fecha)", filter: "='" + $scope.anio + "'", join: '' });
            $scope.dataCECO.where.push({ col: " AND nro_contrato", filter: "='" + $scope.json.nro_oden+ "'", join: '' });
        }

        $scope.delete_detallerp = function (index) {
            $scope.detalle_rp.splice(index, 1);
        }

        //ELIMINAR DE TABLA RP
        $scope.deleteGrilla = function (index) {
            $scope.tablarp.splice(index, 1);
            if (index == 0 && $scope.data_orden.where.length >= 2) {
                $scope.data_orden.where.splice(index, 1);
                $scope.data_orden.where[0].col = "nro_rp";
            } else {
                $scope.data_orden.where.splice(index, 1);
            }
            
        }

        // AGREGAR EN TABLA DETALLE RP

        $scope.add_rp = function () {
            if ($scope.json3.factura == $scope.json.nro_factura) {
                if ($scope.json3.valor != undefined && $scope.json3.valor != "") {
                    if ($scope.json3.factura != undefined && $scope.json3.factura != "") {
                        if ($scope.json3.fecha != undefined) {
                            $scope.json3.fecha = ssDate.dateToString($scope.json3.fecha, 'dd-MM-yyyy');
                            $scope.json3.actual = 1;
                            $scope.detalle_rp.push($scope.json3);
                            $scope.json3 = {};
                        } else {
                            alert("DEBE SELECCIONAR UNA FECHA VALIDA");
                        }
                    } else {
                        alert("DEBE DIGITAR UNA FACTURA VALIDA");
                    }
                } else {
                    alert("DEBE DIGITAR UN VALOR VALIDO");
                }
            } else {
                alert("EL NUMERO DE FACTURA NO COINCIDE");
            }
        }

        //AGREGAR EN TABLA PRESTACION DE SERVICIO

        $scope.add = function () {

            if ($scope.json2.ceco != undefined && $scope.json2.ceco != "") {
                if ($scope.json2.valor != undefined && $scope.json2.valor != "" && $scope.json2.valor > 0) {
                    if ($scope.json.tipo_acta == "3") {
                        $scope.json2.valor = $scope.json2.valor * -1;
                        $scope.json2.otros = $scope.json2.otros * -1;
                    }
                    if ($scope.json2.otros == undefined || $scope.json2.otros == "") {
                        $scope.json2.otros = 0;
                    }
                    if ($scope.json2.iva == undefined || $scope.json2.iva == "") {
                        $scope.json2.iva = 0;
                    }

                    if ($scope.json2.activo == "SI") {
                        $scope.json2.subtotal = $scope.json2.valor + $scope.json2.otros;
                        $scope.json2.saldo_disponible = $scope.json2.saldo_disponible - $scope.json2.subtotal;
                        if ($scope.json2.saldo_disponible < 0) {
                            $scope.json2.saldo_disponible = 0;
                        }
                        $scope.tabla.push($scope.json2);
                        $scope.json2 = {};
                        $scope.json2.otros = 0;
                        $scope.json2.subtotal = $scope.json2.valor + $scope.json2.otros;
                        $scope.calcular_valores();
                    } else {
                        $scope.json2.activo = "NO";
                        if ($scope.json2.valor + $scope.json2.otros <= $scope.json2.saldo_disponible) {
                            $scope.json2.subtotal = $scope.json2.valor + $scope.json2.otros;
                            $scope.json2.saldo_disponible = $scope.json2.saldo_disponible - $scope.json2.subtotal;
                            $scope.tabla.push($scope.json2);
                            $scope.json2 = {};
                            $scope.json2.otros = 0;
                            $scope.calcular_valores();
                        } else {
                            alert("EL VALOR SUPERA EL SALDO DISPONIBLE");
                        }
                    }
                            
                } else {
                    alert("DEBE AGREGAR UN VALOR VALIDO");
                }
            } else {
                alert("DEBE SELECCIONAR UN CENTRO DE COSTO");
            }
            
        }

        $scope.calcular_valores = function () {
            $scope.json.subtotal = 0;
            $scope.json.iva = 0;
            $scope.json.total = 0;
            $scope.tabla.forEach(function (item, index) {
                $scope.json.subtotal = parseInt($scope.json.subtotal) + parseInt(item.valor) + parseInt(item.otros);
                $scope.json.iva = parseInt($scope.json.iva) + parseInt(item.iva);
            })
            $scope.json.total = parseInt($scope.json.subtotal + $scope.json.iva);
        }

        //ELIMINAR EN TABLA PRESTACION DE SERVICIO

        $scope.deleteservicio = function (index) {
            $scope.tabla.splice(index, 1);
            $scope.calcular_valores();
        }

        //VISUALIZAR DETALLES DE RP 
        $scope.detalle = function (nro_rp) {
            $scope.numero_rp = nro_rp;
            $scope.openWait = true;
            $scope.openModalPRO = true;
            Service.getCrud({ id: parseInt($scope.numero_rp) }, "/Servicios.svc/ReadPedidos_detalle_rp").then(function (d) {
                var rs = JSON.parse(d.data);
                $scope.saldo_inicial = rs[0];
                $scope.valor_ini = rs[0].vlr_total;
                $scope.detalle_rp = rs[1];
                $scope.detalle_rp.forEach(function (item, index) {
                    var aux = ssDate.militodate(item.fecha);
                    item.fecha = ssDate.dateToString(aux, 'dd-MM-yyyy');
                    $scope.tablarp.forEach(function (it, id) {
                        if (it.nro_rp == $scope.numero_rp && item.factura == $scope.json.nro_factura) {
                            it.valor = item.valor;

                        }
                    })
                })
                $scope.calcular_saldo();
            });
        }

        //GUARDAR DETALLE 

        $scope.guardar_rp = function () {
            if ($scope.json3.factura == $scope.json.nro_factura) {
                if ($scope.json3.valor != undefined && $scope.json3.valor != "") {
                    if ($scope.json3.factura != undefined && $scope.json3.factura != "") {
                        if ($scope.json3.fecha != undefined) {
                            var defender = $q.defer();
                            var promise = defender.promise;
                            $timeout(function () {
                                try {
                                    var rs = false;
                                    $scope.hora = ssDate.dateToString(new Date(), 'HH:mm');
                                    $scope.modal = true;
                                    Service.getCrud({ nro_rp: $scope.numero_rp, username: $scope.log_user, hora: $scope.hora, json: angular.toJson($scope.json3) }, '/Servicios.svc/Save_detalles_rp').then(function (d) {
                                        rs = JSON.parse(d.data);
                                        $scope.modal = false;
                                        alert("GUARDADO CON EXITO");
                                        $scope.json3 = {};
                                        $scope.detalle($scope.numero_rp);
                                        $scope.detalle_rp.forEach(function (item, index) {
                                            if (item.actual == 1) {
                                                $scope.grillaaux.push(item.valor);
                                            }
                                            item.actual = 0;


                                        })
                                        $scope.calcular_saldo();
                                        $scope.calcular_general();
                                        $scope.tablarp.forEach(function (item, index) {
                                            if (item.nro_rp == $scope.numero_rp) {
                                                item.activo = 1;

                                            }
                                        })
                                        defender.resolve(rs);
                                    });
                                } catch (e) {
                                    defender.reject(e);
                                }
                            });

                            return promise;
                        } else {
                            alert("DEBE SELECCIONAR UNA FECHA VALIDA");
                        }
                    } else {
                        alert("DEBE DIGITAR UNA FACTURA VALIDA");
                    }
                } else {
                    alert("DEBE DIGITAR UN VALOR VALIDO");
                }
            } else {
                alert("EL NUMERO DE FACTURA NO COINCIDE");
            }
        }

        $scope.formatnumber = function (num) {
            //var num = input.value.replace(/\./g, '');
            if (!isNaN(num)) {
                num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
                num = num.split('').reverse().join('').replace(/^[\.]/, '');
                console.log(num);
                return '$' + num;
            }
        }

        $scope.formatnumber2 = function (num) {
            //var num = input.value.replace(/\./g, '');
            if (!isNaN(num)) {
                num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
                num = num.split('').reverse().join('').replace(/^[\.]/, '');
                return num;
            }
        }

        //limpiar tabla de rp si cambiar numero de factura
        $scope.cleartablarp = function(){
            $scope.tablarp = [];
            $scope.tabla = [];
            $scope.registros = [];
            //ESTA TABLA SE USA PARA SUMAR VALORES DE LOS RP ACTUALES
            $scope.grillaaux = [];
        }

        //$scope.convert = function (fecha) {
        //    return ssDate.dateToString(fecha, 'dd-MM-yyyy');
        //}
        $scope.convert = function (x) {
            if (x != '/Date(-62135578800000)/') {
                var aux = ssDate.militodate(x);
                return ssDate.dateToString(aux, 'dd-MM-yyyy');

            }
        }
        $scope.cerrar_detalle = function() {
            $scope.openWait = false;
            $scope.openModalPRO = false;
        }

        $scope.calcular_saldo = function () {
            $scope.total = 0;
            $scope.disponible = 0; 
            $scope.detalle_rp.forEach(function (item, index) {
                $scope.total = $scope.total + parseFloat(item.valor);
            })
            $scope.disponible = parseInt($scope.saldo_inicial) - $scope.total;

        } 

        $scope.calcular_general = function () {

            $scope.registros = [];
            $scope.tablarp.forEach(function (item, index) {
                Service.getCrud({ id: parseInt(item.id_ped) }, "/Servicios.svc/ReadPedidos_detalle_rp").then(function (d) {
                    var rs = JSON.parse(d.data);
                    $scope.aux = {};
                    $scope.aux.valor_inicial  = parseInt(rs[0]);
                    $scope.tablaaux = rs[1];
                    $scope.sum_total = 0;
                    $scope.tablaaux.forEach(function (it, id) {
                        $scope.sum_total = $scope.sum_total + parseInt(it.valor);
                    })
                    $scope.aux.disponible = $scope.aux.valor_inicial - $scope.sum_total;
                    $scope.aux.ejecutado = $scope.sum_total;
                    $scope.registros.push($scope.aux);
                    $scope.json.valor_orden = 0;
                    $scope.json.valor_ejecutado = 0;
                    $scope.json.saldo_disponible = 0;
                    $scope.registros.forEach(function (item, index) {
                        $scope.json.valor_orden = $scope.json.valor_orden + item.valor_inicial;
                        $scope.json.valor_ejecutado = $scope.json.valor_ejecutado + item.ejecutado;
                        $scope.json.saldo_disponible = $scope.json.saldo_disponible + item.disponible;
                    })
                    $scope.valor_letras($scope.json.valor_ejecutado);
                });
            })

        }

        $scope.calcular_disponible = function () {
            if ($scope.json.valor_orden != undefined && $scope.json.valor_orden != null && $scope.json.valor_ejecutado != undefined && $scope.json.valor_ejecutado != null) {
                $scope.json.saldo_disponible = $scope.json.valor_orden - $scope.json.valor_ejecutado;
            }
            
        }

        function Unidades(num) {

            switch (num) {
                case 1: return "UN";
                case 2: return "DOS";
                case 3: return "TRES";
                case 4: return "CUATRO";
                case 5: return "CINCO";
                case 6: return "SEIS";
                case 7: return "SIETE";
                case 8: return "OCHO";
                case 9: return "NUEVE";
            }

            return "";
        }//Unidades()

        function Decenas(num) {

            var decena = Math.floor(num / 10);
            var unidad = num - (decena * 10);

            switch (decena) {
                case 1:
                    switch (unidad) {
                        case 0: return "DIEZ";
                        case 1: return "ONCE";
                        case 2: return "DOCE";
                        case 3: return "TRECE";
                        case 4: return "CATORCE";
                        case 5: return "QUINCE";
                        default: return "DIECI" + Unidades(unidad);
                    }
                case 2:
                    switch (unidad) {
                        case 0: return "VEINTE";
                        default: return "VEINTI" + Unidades(unidad);
                    }
                case 3: return DecenasY("TREINTA", unidad);
                case 4: return DecenasY("CUARENTA", unidad);
                case 5: return DecenasY("CINCUENTA", unidad);
                case 6: return DecenasY("SESENTA", unidad);
                case 7: return DecenasY("SETENTA", unidad);
                case 8: return DecenasY("OCHENTA", unidad);
                case 9: return DecenasY("NOVENTA", unidad);
                case 0: return Unidades(unidad);
            }
        }//Unidades()

        function DecenasY(strSin, numUnidades) {
            if (numUnidades > 0)
                return strSin + " Y " + Unidades(numUnidades)

            return strSin;
        }//DecenasY()

        function Centenas(num) {
            var centenas = Math.floor(num / 100);
            var decenas = num - (centenas * 100);

            switch (centenas) {
                case 1:
                    if (decenas > 0)
                        return "CIENTO " + Decenas(decenas);
                    return "CIEN";
                case 2: return "DOSCIENTOS " + Decenas(decenas);
                case 3: return "TRESCIENTOS " + Decenas(decenas);
                case 4: return "CUATROCIENTOS " + Decenas(decenas);
                case 5: return "QUINIENTOS " + Decenas(decenas);
                case 6: return "SEISCIENTOS " + Decenas(decenas);
                case 7: return "SETECIENTOS " + Decenas(decenas);
                case 8: return "OCHOCIENTOS " + Decenas(decenas);
                case 9: return "NOVECIENTOS " + Decenas(decenas);
            }

            return Decenas(decenas);
        }//Centenas()

        function Seccion(num, divisor, strSingular, strPlural) {
            var cientos = Math.floor(num / divisor)
            var resto = num - (cientos * divisor)

            var letras = "";

            if (cientos > 0)
                if (cientos > 1)
                    letras = Centenas(cientos) + " " + strPlural;
                else
                    letras = strSingular;

            if (resto > 0)
                letras += "";

            return letras;
        }//Seccion()

        function Miles(num) {
            var divisor = 1000;
            var cientos = Math.floor(num / divisor)
            var resto = num - (cientos * divisor)

            var strMiles = Seccion(num, divisor, "UN MIL", "MIL");
            var strCentenas = Centenas(resto);

            if (strMiles == "")
                return strCentenas;

            return strMiles + " " + strCentenas;
        }//Miles()

        function Millones(num) {
            var divisor = 1000000;
            var cientos = Math.floor(num / divisor)
            var resto = num - (cientos * divisor)

            var strMillones = Seccion(num, divisor, "UN MILLON DE", "MILLONES DE");
            var strMiles = Miles(resto);

            if (strMillones == "")
                return strMiles;

            return strMillones + " " + strMiles;
        }//Millones()

        $scope.numtoleters = function (num) {
            var data = {
                numero: num,
                enteros: Math.floor(num),
                centavos: (((Math.round(num * 100)) - (Math.floor(num) * 100))),
                letrasCentavos: "",
                letrasMonedaPlural: 'PESOS',//"PESOS", 'D�lares', 'Bol�vares', 'etcs'
                letrasMonedaSingular: 'PESO', //"PESO", 'D�lar', 'Bolivar', 'etc'

                letrasMonedaCentavoPlural: "CENTAVOS",
                letrasMonedaCentavoSingular: "CENTAVO"
            };

            if (data.centavos > 0) {
                data.letrasCentavos = "CON " + (function () {
                    if (data.centavos == 1)
                        return Millones(data.centavos) + " " + data.letrasMonedaCentavoSingular;
                    else
                        return Millones(data.centavos) + " " + data.letrasMonedaCentavoPlural;
                })();
            };

            if (data.enteros == 0)
                return "CERO " + data.letrasMonedaPlural + " " + data.letrasCentavos;
            if (data.enteros == 1)
                return Millones(data.enteros) + " " + data.letrasMonedaSingular + " " + data.letrasCentavos;
            else
                return Millones(data.enteros) + " " + data.letrasMonedaPlural + " " + data.letrasCentavos;
        }//NumeroALetras()

        $scope.valor_letras = function (valor) {
            $scope.json.valor_letras =  $scope.numtoleters(valor);
        }

        $scope.validarfirma = function () {
            $scope.json.aprobado_por = $scope.name_user;
            $scope.json.autoriza = $scope.name_user;
            $scope.json.cargo = "AD";
            $scope.ruta = "firmas/" + "1143152147" + ".png";
        }


        $scope.dataActa = {
            id: 'buscadorNombre',
            component: [{ id: 'acta_satis-buscar', type: 'btn' }],
            table: 'acta_satisfaccion_nueva',
            column: [
                { name: 'rtrim(ltrim(id))', as: 'id', visible: true },
                { name: 'rtrim(ltrim(consecutivo))', as: 'Consecutivo', visible: true },
                { name: 'rtrim(ltrim(fecha))', as: 'fecha', visible: true },
                { name: 'rtrim(ltrim(nombre_proveedor))', as: 'Proveedor', visible: true },
                //{ name: 'rtrim(ltrim(valor_total))', as: 'Total', visible: true },

            ],
            where: {},
            groupby: true,
            orderby: [],
            title: 'Buscar Acta de satisfaccion',
            required: true
        };
        $scope.rsActa = function (d) {
            var j = JSON.parse(d);
            var conse = parseInt(j.Consecutivo);
            Service.getCrud({ consecutivo: conse }, "/Servicios.svc/Read_Acta_Sat").then(function (d) {
                var rs = JSON.parse(d.data);
                $scope.json = rs[0];
                $scope.tabla = [];
                $scope.tabla = rs[1];
                console.log($scope.tabla);
                //$scope.tablarp = [];
                //$scope.tablarp = rs[2];
                $scope.json.fecha = ssDate.militodate($scope.json.fecha);
                $scope.json.fecha_inicio = ssDate.militodate($scope.json.fecha_inicio);
                $scope.json.fecha_terminacion = ssDate.militodate($scope.json.fecha_terminacion);
                $scope.key3.value = $scope.json.nit_proveedor;
                $scope.key2.value = $scope.json.nro_oden;
                if ($scope.json.aprobado != 0) {
                    $scope.disabledbtn.editar = true;
                } else {
                    $scope.disabledbtn.editar = false;
                }
                //$scope.json.saldo_disponible = parseInt($scope.json.saldo_disponible);
                //$scope.json.subtotal = parseInt($scope.json.subtotal);
                //$scope.json.valor_ejecutado = parseInt($scope.json.valor_ejecutado);
                //$scope.json.valor_orden = parseInt($scope.json.valor_orden);
                //$scope.json.valor_total = parseInt($scope.json.valor_total);
                //$scope.json.iva = parseInt($scope.json.iva);
                $scope.showbtn.imprimir = true;
                //$scope.tablarp.forEach(function (item, index) {
                //    Service.getCrud({ nro_rp: item.nro_rp, factura: $scope.json.nro_factura }, "/Servicios.svc/Read_Detalle_rp").then(function (d) {
                //        var rs = JSON.parse(d.data);
                //        item.valor = rs.valor;
                //    })

                //})
                $scope.calcular_valores();
            });

        }
        Service.getCrud({ username: Auth.getUserObj().username, name_view: "Acta Satisfaccion" }, "/Servicios.svc/Validarpermisos").then(function (d) {
            var rs = JSON.parse(d.data);
            if (rs.pe1 != "1") {
                $scope.dataActa.where = [];
                $scope.dataActa.where.push({ col: "elaborado_por", filter: "='" + $scope.name_user + "'", join: '' });
            }
        });

        $scope.editar = function () {
            $scope.sh_add = true;
            $scope.sh_add = true;
        }
        
        $scope.imprimir = function () {
            $scope.modal = true;
            $scope.list_rp = '';
            $scope.tablarp.forEach(function (item, index) {
                $scope.list_rp = $scope.list_rp + ' ' + item.nro_rp;
            })
            
            $timeout(function () {
                $('#menu').addClass("ss-nav-inactive");
                $('#wrapper').addClass("ss-full-view");
                window.print();
                $scope.modal = false;
            },2000);
        }
    }
    function Aprobar_AS_Controller($scope, $q, Service, Auth, $timeout, ssDate) {
        $scope.json = {};
        $scope.json3 = {};
        $scope.key = { value: '' };
        $scope.key2 = { value: '' };
        $scope.openWai = true;
        $scope.username = Auth.getUserObj().username;
        $scope.name_user = Auth.getUserObj().nombre_usuario;
        $scope.ruta = "img/Logo_optecom.jpg";


        $timeout(function () {
            $("#brNombre-btn-clave").attr('disabled', 'disabled');
            $("#brProvee-btn-clave").attr('disabled', 'disabled');
            $("#brProvee-btn-valor").attr('disabled', 'disabled');
            $("#brProvee-btn-btn").attr('disabled', 'disabled');
            $("#brNombre-btn-valor").attr('disabled', 'disabled');
            $("#brNombre-btn-btn").attr('disabled', 'disabled');

            $("#brProvee-clave").attr('disabled', 'disabled');
            $("#brProvee-valor").attr('disabled', 'disabled');
            $("#brProvee-btn").attr('disabled', 'disabled');
            $("#brNombre-clave").attr('disabled', 'disabled');
            $("#brNombre-valor").attr('disabled', 'disabled');
            $("#brNombre-btn").attr('disabled', 'disabled');
        });

        Service.getCrud({}, "/Servicios.svc/preload_ccosto").then(function (d) {
            var rs = JSON.parse(d.data);
            $scope.centros = rs[0];
        });
        $scope.reportepedidos = function () {
            if ($scope.tipo_filtro == undefined || $scope.tipo_filtro == "") {
                $scope.tipo_filtro = 1;
            }
            Service.getCrud({ tipo: $scope.tipo_filtro, usuario: $scope.username }, "/Servicios.svc/ReporteAS").then(function (d) {
                var rs = JSON.parse(d.data)[0];
                $scope.grilla = [];
                $scope.grilla = rs;
                $scope.openWai = false;
            });
        }
        $scope.reportepedidos();

        $scope.validar_est = function (x) {
            if (x != "1") {
                return "PENDIENTE"
            } else {
                return "APROBADO"
            }
        }

        $scope.aprobar_as = function (item) {
            $scope.openWai = true;
            Service.getCrud({ consecutivo: item.consecutivo, usuario: $scope.name_user, log_user: $scope.username }, "/Servicios.svc/Aprobar_AS").then(function (d) {
                var rs = JSON.parse(d.data);
                if (rs > 0) {
                    alert("APROBADO CON EXITO");
                    $scope.reportepedidos();
                }

            });
        }

        $scope.verificar_srp = function (item) {
            $scope.openWai = true;
            Service.getCrud({ nro_ped: item.nro_pedido }, "/Servicios.svc/verificar_srp").then(function (d) {
                var rs = JSON.parse(d.data);
                $scope.openWai = false;
                $scope.json3.nro_srp = rs[1];
                if (rs[1] == "RETENIDO") {
                    alert("EL SRP FUE VERIFICADO, SE ENCUENTRA EN ESTADO " + rs[1]);
                    $scope.reportepedidos();
                } else {
                    alert("EL SRP FUE VERIFICADO Y SE ENCUENTRA EN ESTADO PENDIENTE");
                    $scope.reportepedidos();
                }
            });
        }

        $scope.formatnumber = function (num) {
            //var num = input.value.replace(/\./g, '');
            if (!isNaN(num)) {
                num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
                num = num.split('').reverse().join('').replace(/^[\.]/, '');
                return '$' + num;
            }
        }



        $scope.buscar_acta = function (item) {
            $scope.openWaiting = true;
            $scope.openModalPRO = true;
            Service.getCrud({ consecutivo: item.consecutivo }, "/Servicios.svc/Read_Acta_Sat").then(function (d) {
                var rs = JSON.parse(d.data);
                $scope.json = rs[0];
                $scope.json.tipo_acta = parseInt(rs[0].tipo_acta);
                $scope.json.tipo_comp = rs[0].tipo_comp;
                console.log($scope.json);
                $scope.json.fecha = ssDate.militodate($scope.json.fecha);
                $scope.json.fecha_inicio = ssDate.militodate($scope.json.fecha_inicio);
                $scope.json.fecha_terminacion = ssDate.militodate($scope.json.fecha_terminacion);
                $scope.tabla = [];
                $scope.tabla = rs[1];


            });
        }

        $scope.imprimir2 = function (item) {
            $scope.openWai = true;
            Service.getCrud({ consecutivo: item.consecutivo }, "/Servicios.svc/Read_Acta_Sat").then(function (d) {
                var rs = JSON.parse(d.data);
                $scope.json = rs[0];
                $scope.json.fecha = ssDate.militodate($scope.json.fecha);
                $scope.json.fecha_inicio = ssDate.militodate($scope.json.fecha_inicio);
                $scope.json.fecha_terminacion = ssDate.militodate($scope.json.fecha_terminacion);
                $scope.tabla = [];
                $scope.tabla = rs[1];
                $scope.tablarp = [];
                $scope.tablarp = rs[2];
                $scope.tablarp.forEach(function (item, index) {
                    Service.getCrud({ nro_rp: item.nro_rp, factura: $scope.json.nro_factura }, "/Servicios.svc/Read_Detalle_rp").then(function (d) {
                        var rs = JSON.parse(d.data);
                        item.valor = rs.valor;
                    })

                })
                $timeout(function () {
                    $('#menu').addClass("ss-nav-inactive");
                    $('#wrapper').addClass("ss-full-view");
                    window.print();
                    $scope.openWai = false;
                }, 3000);
                $scope.calcular_valores();
            });

        }

        $scope.closePRO = function () {
            $scope.openWaiting = false;
            $scope.openModalPRO = false;
            $scope.showsrp = false;
        }

        $scope.convert = function (x) {
            var aux = ssDate.militodate(x);
            return ssDate.dateToString(aux, 'dd-MM-yyyy');
        }

        $scope.convertst = function (x) {
            return x = '$ ' + x;
        }


        //VISUALIZAR DETALLES DE RP 
        $scope.detalle = function (item) {
            $scope.numero_rp = item.nro_rp;
            $scope.openWait = true;
            $scope.openModalPRO = true;
            Service.getCrud({ id: parseInt(item.id_ped) }, "/Servicios.svc/ReadPedidos_detalle_rp").then(function (d) {
                var rs = JSON.parse(d.data);
                $scope.saldo_inicial = rs[0];
                $scope.detalle_rp = rs[1];
                $scope.detalle_rp.forEach(function (item, index) {
                    var aux = ssDate.militodate(item.fecha);
                    item.fecha = ssDate.dateToString(aux, 'dd-MM-yyyy');
                })
                $scope.calcular_saldo();
            });
        }

        $scope.cerrar_detalle = function () {
            $scope.openWait = false;
            $scope.openWaiting = false;
            $scope.openModalPRO = false;
        }

        $scope.calcular_saldo = function () {
            $scope.total = 0;
            $scope.disponible = 0;
            $scope.detalle_rp.forEach(function (item, index) {
                $scope.total = $scope.total + parseFloat(item.valor);
            })
            $scope.disponible = parseInt($scope.saldo_inicial) - $scope.total;

        } 

    }
    function aprobar_pedido_jefe($scope, $q, Service, Auth, $timeout, ssDate) {
        $scope.json = {};
        $scope.json3 = {};
        $scope.key = { value: '' };
        $scope.key2 = { value: '' };
        $scope.openWai = true;
        $scope.log_user = Auth.getUserObj().username;


        $timeout(function () {
            $("#brNombre-btn-clave").attr('disabled', 'disabled');
            $("#brProvee-btn-clave").attr('disabled', 'disabled');
            $("#brProvee-btn-valor").attr('disabled', 'disabled');
            $("#brProvee-btn-btn").attr('disabled', 'disabled');
            $("#brNombre-btn-valor").attr('disabled', 'disabled');
            $("#brNombre-btn-btn").attr('disabled', 'disabled');

            $("#brProvee-clave").attr('disabled', 'disabled');
            $("#brProvee-valor").attr('disabled', 'disabled');
            $("#brProvee-btn").attr('disabled', 'disabled');
            $("#brNombre-clave").attr('disabled', 'disabled');
            $("#brNombre-valor").attr('disabled', 'disabled');
            $("#brNombre-btn").attr('disabled', 'disabled');
        });

        Service.getCrud({}, "/Servicios.svc/preload_ccosto").then(function (d) {
            var rs = JSON.parse(d.data);
            $scope.centros = rs[0];
        });
        $scope.reportepedidos = function () {
            if ($scope.tipo_filtro == undefined || $scope.tipo_filtro == "") {
                $scope.tipo_filtro = 1;
            }
            Service.getCrud({ tipo: $scope.tipo_filtro, usuario: $scope.log_user}, "/Servicios.svc/ReportePedidos_ptes").then(function (d) {
                var rs = JSON.parse(d.data)[0];
                $scope.grilla = [];
                $scope.grilla = rs;
                $scope.openWai = false;
            });
        }
        $scope.reportepedidos();

        $scope.verificar_srp = function (item) {
            $scope.openWai = true;
            Service.getCrud({ nro_ped: item.nro_pedido }, "/Servicios.svc/verificar__aprobar_srp").then(function (d) {
                var rs = JSON.parse(d.data);
                $scope.openWai = false;
                if (rs[1] == "RETENIDO") {
                    alert("GUARDADO CON EXITO NUMERO: " + rs[0] + " CON ESTADO " + rs[1] + " POR DISPONIBILIDAD DE PRESUPUESTO");
                } else {
                    alert("GUARDADO CON EXITO NUMERO: " + rs[0]);
                }
                $scope.reportepedidos();
            });
        }

        $scope.formatnumber = function (num) {
            //var num = input.value.replace(/\./g, '');
            if (!isNaN(num)) {
                num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
                num = num.split('').reverse().join('').replace(/^[\.]/, '');
                return '$' + num;
            }
        }



        $scope.buscar_acta = function (item) {
            $scope.openWaiting = true;
            $scope.openModalPRO = true;
            Service.getCrud({ numero_ped: item.nro_pedido }, "/Servicios.svc/Reporte_Nro_pedido").then(function (d) {
                var rs = JSON.parse(d.data);
                $scope.json3 = rs[0];
                $scope.json3.fecha = ssDate.militodate($scope.json3.fecha);
                $scope.key2.value = rs[0].ccosto;
                $scope.key3.value = rs[0].proveedor;
                $scope.tablapedidos = [];
                $scope.tablapedidos = rs[1];
            });
        }

        $scope.buscar_srp = function (item) {
            $scope.showsrp = true;
            $scope.openModalPRO = true;
            Service.getCrud({ numero_ped: item.nro_pedido }, "/Servicios.svc/Reporte_SRP").then(function (d) {
                var rs = JSON.parse(d.data);
                $scope.json3 = rs[0];
                $scope.json3.fecha = ssDate.militodate($scope.json3.fecha);
                $scope.key2.value = rs[0].ccosto;
                $scope.key3.value = rs[0].proveedor;
                $scope.tablapedidos = [];
                $scope.tablapedidos = rs[1];
                $scope.vlr_total = 0;
                $scope.tablapedidos.forEach(function (item, index) {
                    $scope.vlr_total = $scope.vlr_total + item.total;
                })
            });
        }

        $scope.closePRO = function () {
            $scope.openWaiting = false;
            $scope.openModalPRO = false;
            $scope.showsrp = false;
        }

        $scope.convert = function (x) {
            var aux = ssDate.militodate(x);
            return ssDate.dateToString(aux, 'dd-MM-yyyy');
        }

        $scope.convertst = function (x) {
            return x = '$ ' + x;
        }



        /*CONFIG BUSQUEDA RAPIDA CCOSTO*/
        $scope.dataccosto = {
            id: 'buscadorNombre',
            component: [{ id: 'brNombre', type: '' }],
            table: 'area_ccosto',
            column: [
                { name: 'rtrim(ltrim(ccosto))', as: 'Ccosto', visible: true },
                { name: 'rtrim(ltrim(area))', as: 'Area', visible: true }



            ],
            where: {},
            groupby: true,
            orderby: [],
            title: 'BUSCAR CENTRO DE COSTO',
            required_name: "CENTRO DE COSTO"
        };
        $scope.rsccosto = function (d) {
            var j = JSON.parse(d);
            $scope.json.ccosto = j.Ccosto;

        }

        /*CONFIG BUSQUEDA RAPIDA CCOSTO*/
        $scope.key3 = { value: '' };
        $scope.dataproveedor = {
            id: 'buscadorprov',
            component: [{ id: 'brProvee', type: '' }],
            table: 'proveedor',
            column: [
                { name: 'rtrim(ltrim(nit))', as: 'NIT', visible: true },
                { name: 'rtrim(ltrim(razon_social))', as: 'RZ', visible: true }

            ],
            where: {},
            groupby: true,
            orderby: [],
            title: 'BUSCAR PROVEEDOR',
            required_name: "PROVEEDOR"
        };
        $scope.rsproveedor = function (d) {
            var j = JSON.parse(d);
            $scope.json.proveedor = j.NIT;
        }

        $scope.convert_proveedor = function (nit ) { 
            Service.getCrud({ nit: nit }, "/Servicios.svc/convert_proveedor").then(function (d) {
            var rs = JSON.parse(d.data);
            return rz;
        });
        }
    }
    function Generar_Pedido_AF_Controller($scope, $q, Service, Auth, $timeout, ssDate) {
        $scope.json2 = {};
        $scope.json = {};
        $scope.tabla = [];
        $scope.sh_add = true;
        $scope.key2 = { value: '' };
        $scope.key3 = { value: '' };
        $scope.key5 = { value: '' };
        $scope.openWaiting = true;
        $scope.usuario = Auth.getUserObj().nombre_usuario;

        Service.getCrud({}, "/Servicios.svc/PreloaDirectivos").then(function (d) {
            $scope.directivos = JSON.parse(d.data)[0];

        });

        /*BARRA*/
        $scope.showbtn = { buscar: true, imprimir: false, nuevo: true, editar: false, eliminar: false, cerrar: false };
        $scope.disabledbtn = { buscar: false, imprimir: false, nuevo: false, editar: true, eliminar: true };

        $scope.nuevo = function () {

            $scope.json2 = {};
            $scope.json = {};
            $scope.tabla = [];
            $scope.key2 = { value: '' };
            $scope.key3 = { value: '' };
            $scope.json.fecha = "";
            $scope.json.usuario = "";

            $timeout(function () {
                $scope.json.usuario = Auth.getUserObj().nombre_usuario;
                $scope.json.fecha = new Date();
            });
        }

        $scope.cancelar = function () {
            $scope.json2 = {};
            $scope.json = {};
            $scope.tabla = [];
            $scope.key2 = { value: '' };
            $scope.key3 = { value: '' };
            $scope.json.fecha = "";
            $scope.json.usuario = "";
        }

        $scope.guardar = function () {

            var defender = $q.defer();
            var promise = defender.promise;
            if (!$scope.pedidos.$valid) {
                var cr = "Campos requeridos no diligenciados:";
                $scope.pedidos.$error.required.forEach(function (item, index) {
                    cr += "\n - " + item.$name;
                });
                alert(cr);
                defender.resolve(false);
                return promise;
            } else {
                if ($scope.tabla.length > 0) {
                    $timeout(function () {
                        try {
                            var rs = false;
                            Service.getCrud({ json: angular.toJson($scope.json), tabla: angular.toJson($scope.tabla) }, '/Servicios.svc/CreatePedidos_AF').then(function (d) {
                                rs = JSON.parse(d.data);
                                defender.resolve(rs[0] > 0);
                                $scope.json.nro_pedido = rs[1];
                                alert("SU PEDIDO FUE GENERADO CON NUMERO " + $scope.json.nro_pedido);

                            });
                        } catch (e) {
                            defender.reject(e);
                        }
                    });
                } else {
                    alert("DEBE INGRESAR AL MENOS UN ARTICULO EN EL PEDIDO");
                }
            }
            return promise;
        };

        /*CONFIG BUSQUEDA RAPIDA*/
        $scope.dataPresupuesto = {
            id: 'buscadorNombre',
            component: [{ id: 'brNombre', type: '' }],
            table: 'presupuesto',
            column: [
                { name: 'rtrim(ltrim(cuenta))', as: 'Cuenta', visible: true },
                { name: 'rtrim(ltrim(rubro))', as: 'Rubro', visible: true },
                { name: 'rtrim(ltrim(ccosto))', as: 'CECO', visible: true },
                { name: 'rtrim(ltrim(total_presupuesto))', as: 'Total_Presupuesto', visible: true },
                { name: 'rtrim(ltrim(disponibilidad))', as: 'Disponibilidad', visible: true },
                { name: 'rtrim(ltrim(ano))', as: 'Año', visible: true },
                { name: 'rtrim(ltrim(id))', as: 'ID', visible: true }

            ],
            where: {},
            groupby: true,
            orderby: [],
            title: 'Buscar Presupuesto',
            required: true
        };
        $scope.rsPresupuesto = function (d) {
            var x = JSON.parse(d);
            $scope.message = false;
            $scope.json.cuenta = x.Cuenta;
            $scope.json.rubro = x.Rubro;
            $scope.json.ccosto = x.CECO;
            $scope.json.total_presupuesto = parseFloat(x.Total_Presupuesto);
            $scope.valor_ant = parseFloat(x.Disponibilidad);
            $scope.json.id = x.ID;
            $scope.json.ano = x.Año;
        }



        //BUSCADOR DE PEDIDOS

        $scope.dataPedido = {
            id: 'dataBuscador',
            component: [{ id: 'pedidos-buscar', type: 'btn' }],
            table: 'pedidos',
            column: [
                { name: 'id', as: 'id', visible: false },
                { name: 'nro_pedido', as: 'Nro_pedido', visible: true },
                { name: 'fecha', as: 'Fecha', visible: true },
                { name: 'vlr_total', as: 'Total', visible: true }
            ],
            where: [{ col: "pedidos.usuario", filter: "='" + $scope.usuario + "'", join: '' }],
            groupby: false,
            orderby: [],
            title: 'Busqueda de Pedidos'
        };
        $scope.rsPedido = function (v) {
            $scope.id = JSON.parse(v).id;
            if ($scope.id != '' && $scope.id != null) {
                Service.getCrud({ id: parseInt($scope.id) }, "/Servicios.svc/ReadPedido").then(function (d) {
                    var rs = JSON.parse(d.data);
                    console.log(rs);
                    $scope.json = rs[0];
                    $scope.json.fecha = ssDate.militodate(rs[0].fecha);
                    $scope.tabla = rs[1];
                    $scope.sh_add = false;
                    $scope.sh_update = false;
                    $scope.sh_edit = false;
                    $scope.key2.value = rs[0].ccosto;
                    $scope.key3.value = rs[0].proveedor;
                    $scope.showbtn.imprimir = true;
                });
            }
        };



        $("#articulo").keydown(function (event) {
            console.log("entrooo")
            if (event.which == 113) {
                console.log("entrooo2")
                document.getElementById("buscar_pro").click(); // Click on the checkbox
            }
        });

        /*OBJETO PARA ENTREGA*/
        $scope.dataBuscador_objeto = {
            id: 'buscadorobject',
            component: [{ id: 'articulo', type: 'btn' }],
            table: 'articulos_af',
            column: [
                { name: 'rtrim(ltrim(articulos_af.id))', as: 'id', visible: false },
                { name: 'rtrim(ltrim(articulos_af.codigo))', as: 'Codigo', visible: true },
                { name: 'rtrim(ltrim(articulos_af.descripcion))', as: 'Descripcion', visible: true },
                { name: 'rtrim(ltrim(articulos_af.und))', as: 'Und', visible: true },
                { name: 'rtrim(ltrim(iva.porcentaje))', as: 'iva', visible: false },
                { name: 'rtrim(ltrim(articulos_af.cuenta))', as: 'Cuenta', visible: true }
            ],
            inner_join: [{ table: "iva", on: "articulos_af.tipo_iva = iva.tipo", join: "" }],
            where: [],
            orderby: [],
            groupby: true,
            title: 'Buscar Articulo',

        };
        $scope.resultado_objeto = function (d) {
            var j = JSON.parse(d);
            $scope.json2.codigo_art = j.Codigo;
            $scope.json2.descripcion = j.Descripcion;
            $scope.json2.iva = parseFloat(j.iva);
            $scope.json2.cuenta = j.Cuenta;
            $scope.json2.und = j.Und;

        }

        //FUNCIONES DE LA TABLA

        $scope.add = function () {
            if ($scope.json2.codigo_art != undefined && $scope.json2.codigo_art != "") {
                if ($scope.json2.cantidad != undefined && $scope.json2.cantidad != "" && $scope.json2.cantidad > 0) {
                    if ($scope.json2.valor != undefined && $scope.json2.valor != "" && $scope.json2.valor > 0) {
                        $scope.json2.iva = $scope.json2.valor * ($scope.json2.iva);
                        $scope.json2.subtotal = ($scope.json2.cantidad * $scope.json2.valor);
                        $scope.json2.total = Math.round(($scope.json2.valor + $scope.json2.iva) * $scope.json2.cantidad);
                        $scope.tabla.push($scope.json2);
                        $scope.json2 = {};
                        $scope.calcular_total();
                    } else {
                        alert("DEBE INGRESAR UN VALOR VALIDO");
                    }
                } else {
                    alert("DEBE INGRESAR UNA CANTIDAD DE VALIDA");
                }
            } else {
                alert("DEBE SELECCIONAR UN CODIGO DE ARTICULO");
            }
        }

        $scope.deleteGrilla = function (index) {
            $scope.tabla.splice(index, 1);
            $scope.calcular_total();
        }

        $scope.calcular_total = function () {
            $scope.json.vlr_total = 0;
            $scope.tabla.forEach(function (item, index) {
                $scope.json.vlr_total += item.total;
            })
        }

        $scope.formatnumber = function (num) {
            //var num = input.value.replace(/\./g, '');
            if (!isNaN(num)) {
                num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
                num = num.split('').reverse().join('').replace(/^[\.]/, '');
                return '$' + num;
            }
        }

        $scope.imprimir = function () {
            $timeout(function () {
                $('#menu').addClass("ss-nav-inactive");
                $('#wrapper').addClass("ss-full-view");
                window.print();
            });
        }

        /*CONFIG BUSQUEDA RAPIDA CCOSTO*/
        $scope.dataccosto = {
            id: 'buscadorccosto',
            component: [{ id: 'brCosto', type: '' }],
            table: 'area_ccosto',
            column: [
                { name: 'rtrim(ltrim(ccosto))', as: 'Ccosto', visible: true },
                { name: 'rtrim(ltrim(area))', as: 'Area', visible: true }
            ],
            where: {},
            groupby: true,
            orderby: [],
            title: 'BUSCAR CENTRO DE COSTO',
            required_name: "CENTRO DE COSTO"
        };
        $scope.rsccosto = function (d) {
            var j = JSON.parse(d);
            $scope.json.ccosto = j.Ccosto;
            $scope.json.name_ceco = j.Area;
        }

        /*CONFIG BUSQUEDA RAPIDA CCOSTO SHIRLEY*/
        $scope.dataproveedor = {
            id: 'buscadorprov',
            component: [{ id: 'brProvee', type: '' }],
            table: 'proveedor',
            column: [
                { name: 'rtrim(ltrim(nit))', as: 'NIT', visible: true },
                { name: 'rtrim(ltrim(razon_social))', as: 'RZ', visible: true },
                { name: 'rtrim(ltrim(contrato))', as: 'CONT', visible: true }
            ],
            where: [{ col: "PROVEEDOR.estado", filter: "= 2", join: '' }],
            groupby: true,
            orderby: [],
            title: 'BUSCAR PROVEEDOR',
            required_name: "PROVEEDOR"
        };
        $scope.rsproveedor = function (d) {
            var j = JSON.parse(d);
            $scope.json.proveedor = j.NIT;
            $scope.json.name_proveedor = j.RZ;
            if (j.CONT != '') {
                $scope.json.nro_contrato = j.CONT;

            }
        
        }

    }
    function Reporte_Conci($scope, $q, Service, Auth, $timeout, ssDate) {
        $scope.openWai = true;

        $scope.openWaiting = false;
        $scope.query = "SELECT s.cuenta,s.ccosto,s.total,p.nro_rp,p.nro_pedido,nro_srp,p.usuario,pv.razon_social,REPLACE(REPLACE(s.comprobado,1,'EJECUTADO'),0,'PENDIENTE') as estado,CONVERT(varchar,p.fecha,23) as fecha from srp as s INNER JOIN pedidos as p on s.id_pedido = p.nro_pedido left JOIN proveedor as pv on p.proveedor = pv.nit WHERE  p.estado != 'CANCELADO' GROUP BY s.cuenta,s.ccosto,s.total,p.nro_rp,nro_pedido,nro_srp,p.usuario,pv.razon_social,REPLACE(s.comprobado,1,'EJECUTADO'),p.fecha";
        $scope.buscar_report = function () {
            $scope.openWai = true;
            Service.getCrud({ query: $scope.query }, "/Servicios.svc/consulta").then(function (d) {
                var rs = JSON.parse(d.data);
                $scope.jsonexcel = [];
                $scope.grilla = [];
                $scope.grilla = rs;
                $scope.jsonexcel = rs;
                $scope.openWai = false;
            });

        }
        $scope.buscar_report();

        $scope.formatnumber = function (num) {
            //var num = input.value.replace(/\./g, '');
            if (!isNaN(num)) {
                num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
                num = num.split('').reverse().join('').replace(/^[\.]/, '');
                return '$' + num;
            }
        }



        $scope.JSONToCSVConvertor = function (JSONData, ReportTitle, ShowLabel) {

            //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
            var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;

            var CSV = '';
            //Set Report title in first row or line

            CSV += ReportTitle + '\r\n\n';

            //This condition will generate the Label/Header
            if (ShowLabel) {
                var row = "";

                //This loop will extract the label from 1st index of on array
                for (var index in arrData[0]) {

                    //Now convert each value to string and comma-seprated
                    row += index + ',';
                }

                row = row.slice(0, -1);

                //append Label row with line break
                CSV += row + '\r\n';
            }

            //1st loop is to extract each row
            for (var i = 0; i < arrData.length; i++) {
                var row2 = "";

                //2nd loop will extract each column and convert it in string comma-seprated
                for (var index1 in arrData[i]) {
                    row2 += '"' + arrData[i][index1] + '",';
                }

                row2.slice(0, row2.length - 1);

                //add a line break after each row
                CSV += row2 + '\r\n';
            }

            if (CSV == '') {
                alert("Invalid data");
                return;
            }
            //FECHA ACTUAL
            var fecha = ssDate.dateToString(Date.now(), 'yyyy-MM-dd');

            //Generate a file name
            var fileName = "Descarga_" + fecha;
            //this will remove the blank-spaces from the title and replace it with an underscore
            fileName += ReportTitle.replace(/ /g, "_");

            //Initialize file format you want csv or xls
            var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);

            // Now the little tricky part.
            // you can use either>> window.open(uri);
            // but this will not work in some browsers
            // or you will not get the correct file extension    

            //this trick will generate a temp <a /> tag
            var link = document.createElement("a");
            link.href = uri;

            //set the visibility hidden so it will not effect on your web-layout
            link.style = "visibility:true";
            link.download = fileName + ".csv";

            //this part will append the anchor tag and remove it after automatic click
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        $scope.fnExcelReport = function () {
            $scope.JSONToCSVConvertor($scope.jsonexcel, "", true);
        }

        $scope.convert = function (x) {
            if (x != '/Date(-62135578800000)/') {
                var aux = ssDate.militodate(x);
                return ssDate.dateToString(aux, 'dd-MM-yyyy');

            }
        }

        // JSON to CSV Converter
        $scope.ConvertToCSV = function (tabla) {
            var array = typeof tabla != 'object' ? JSON.parse(tabla) : tabla;
            var str = '';

            for (var i = 0; i < array.length; i++) {
                var line = '';
                for (var index in array[i]) {
                    if (line != '') line += ';'

                    line += array[i][index];
                }

                str += line + '\r\n';
            }
            $scope.resultcvs = str;
        }

    }
    function Cargue_Nomina_Controller($scope, $q, Service, Auth, $timeout, ssDate) {
        $scope.json = {};
        $scope.msj = '';
        $scope.cod_user = Auth.getUserObj().codigo;
        $scope.log_user = Auth.getUserObj().username;
        $scope.key = { value: '' };
        $scope.openWaiting = false;
        /*CONFIG BUSQUEDA RAPIDA*/
        $scope.nuevo = function () {
            $scope.json = {};
            $scope.json.snombre = ' ';
        }

        /*BARRA*/
        $scope.showbtn = { buscar: true, imprimir: false, nuevo: true, editar: true, eliminar: true, cerrar: false };
        $scope.disabledbtn = { buscar: false, imprimir: true, nuevo: false, editar: true, eliminar: true };

        Service.getCrud({}, "/Servicios.svc/PreloadEmpresa").then(function (d) {
            $scope.empresa = JSON.parse(d.data)[0];

        });

        $scope.procesar = function () {
        }

        //EXCEL

        $scope.getBase64 = function (file) {
            var defender = $q.defer();
            var promise = defender.promise;
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                defender.resolve(reader.result);
            };
            reader.onerror = function (error) {
                console.log('Error: ', error);
            };
            return promise;
        }

        $scope.checkSize = function () {
            var sw = true
            var selectedFile = document.getElementById("archivo");
            if (selectedFile != undefined) {
                console.log(selectedFile.files[0].name);
                var auxsplit = selectedFile.files[0].name.split(".");
                var validar = auxsplit[1];
                if (validar == 'xlsx' || validar == 'xls') {
                    if (selectedFile.files.length > 0) {
                        for (var i = 0; i < selectedFile.files.length; i++) {
                            var size = Math.round((selectedFile.files[i].size / 1024 / 1024) * 1000) / 1000;
                            if (size <= 13) {
                                if (sw != false) {
                                    sw = true
                                }

                            }
                            else {
                                sw = false
                            }
                        }

                        if (sw == true) {
                            console.log("ARCHIVOS CORRECTOS")
                            $scope.convertToBase64();
                        }
                        else {
                            alert("Uno o mas archivos superan el limite permitido de 12 mb")
                            document.getElementById("archivo").value = '';
                        }
                    }
                } else {
                    alert("El Archivo es incorrecto");
                }
            }




        }

        $scope.convertToBase64 = function () {
            //Read File
            $timeout(function () {
                var selectedFile = [];
                var selectedFile = document.getElementById("archivo");
                for (var i = 0; i < selectedFile.files.length; i++) {
                    $scope.fileToLoad = selectedFile.files[i];
                    // FileReader function for read the file.  ss
                    $scope.base64;
                    $scope.getBase64(selectedFile.files[i]).then(function (d) {
                        $scope.base64 = d;
                    });
                    // Onload of file read the file content
                    // Convert data to base64
                }
            }, 600)
        }

        $scope.Anexar = function () {
            $scope.openWaiting = true;
            $scope.checkSize();
            $scope.openWaiting = true;
            var fecha = ssDate.dateToString(new Date(), 'dd-MM-yyyy');
            var hora = ssDate.dateToString(new Date(), 'HH_mm');
            var filename = "planilla" + fecha +"_"+hora
            $timeout(function () {
                Service.getCrud({ file: $scope.base64, name: filename }, "/Generic.svc/SaveFile2").then(function (d) {
                    var rs = JSON.parse(d.data);
                    if (rs[0] == '?') {
                        alert("Error Anexar: " + rs);
                        $scope.openWaiting = false;
                    }
                    else {
                        $scope.planilla = [];
                        $scope.openWaiting = true;
                        Service.getCrud({ name: filename, usu: Auth.getUserObj().nombre_usuario }, "/Generic.svc/CargarAuto").then(function (d) {
                            var rs = JSON.parse(d.data);
                            if (rs[0] == '?') {
                                alert("Error Cargar: " + rs);
                                $scope.openWaiting = false;
                            }
                            else {
                                alert("PLANILLA CARGADA CON EXITO, CONSECUTIVO " + rs[2]+ " CON ESTADO " + rs[1]);
                                $scope.planilla = rs[0];
                                $scope.openWaiting = false;
                            }
                        });
                        document.getElementById("archivo").value = '';
                    }
                });
                document.getElementById("archivo").value = '';
            }, 3000);
        }

        $scope.formatnumber = function (num) {
            //var num = input.value.replace(/\./g, '');
            if (!isNaN(num)) {
                num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
                num = num.split('').reverse().join('').replace(/^[\.]/, '');
                return '$' + num;
            }
        }


        //EXPORTAR A EXCEL

        $scope.JSONToCSVConvertor = function (JSONData, ReportTitle, ShowLabel) {

            //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
            var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;

            var CSV = '';
            //Set Report title in first row or line

            CSV += ReportTitle + '\r\n\n';

            //This condition will generate the Label/Header
            if (ShowLabel) {
                var row = "";

                //This loop will extract the label from 1st index of on array
                for (var index in arrData[0]) {

                    //Now convert each value to string and comma-seprated
                    row += index + ',';
                }

                row = row.slice(0, -1);

                //append Label row with line break
                CSV += row + '\r\n';
            }

            //1st loop is to extract each row
            for (var i = 0; i < arrData.length; i++) {
                var row2 = "";

                //2nd loop will extract each column and convert it in string comma-seprated
                for (var index1 in arrData[i]) {
                    row2 += '"' + arrData[i][index1] + '",';
                }

                row2.slice(0, row2.length - 1);

                //add a line break after each row
                CSV += row2 + '\r\n';
            }

            if (CSV == '') {
                alert("Invalid data");
                return;
            }
            //FECHA ACTUAL
            var fecha = ssDate.dateToString(Date.now(), 'yyyy-MM-dd');

            //Generate a file name
            var fileName = "Descarga_" + fecha;
            //this will remove the blank-spaces from the title and replace it with an underscore
            fileName += ReportTitle.replace(/ /g, "_");

            //Initialize file format you want csv or xls
            var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);

            // Now the little tricky part.
            // you can use either>> window.open(uri);
            // but this will not work in some browsers
            // or you will not get the correct file extension    

            //this trick will generate a temp <a /> tag
            var link = document.createElement("a");
            link.href = uri;

            //set the visibility hidden so it will not effect on your web-layout
            link.style = "visibility:true";
            link.download = fileName + ".csv";

            //this part will append the anchor tag and remove it after automatic click
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        $scope.fnExcelReport = function () {
            $scope.JSONToCSVConvertor($scope.planilla, "", true);
        }

        // JSON to CSV Converter
        $scope.ConvertToCSV = function (tabla) {
            var array = typeof tabla != 'object' ? JSON.parse(tabla) : tabla;
            var str = '';

            for (var i = 0; i < array.length; i++) {
                var line = '';
                for (var index in array[i]) {
                    if (line != '') line += ';'

                    line += array[i][index];
                }

                str += line + '\r\n';
            }
            $scope.resultcvs = str;
        }

        // Example


        // Create Object
        var items = [
            { name: "Item 1", color: "Green", size: "X-Large" },
            { name: "Item 2", color: "Green", size: "X-Large" },
            { name: "Item 3", color: "Green", size: "X-Large" }];

        // Convert Object to JSON
        var jsonObject = JSON.stringify(items);

    }
    function Aprobacion_Nomina($scope, $q, Service, Auth, $timeout, ssDate) {
        $scope.json = {};
        $scope.json3 = {};
        $scope.key = { value: '' };
        $scope.key2 = { value: '' };
        //$scope.openWai = true;


        Service.getCrud({}, "/Servicios.svc/preload_ccosto").then(function (d) {
            var rs = JSON.parse(d.data);
            $scope.centros = rs[0];
        });
        $scope.reporteplanillas = function () {
            if ($scope.tipo_filtro == undefined || $scope.tipo_filtro == "") {
                $scope.tipo_filtro = 1;
            }
            Service.getCrud({ tipo: $scope.tipo_filtro }, "/Servicios.svc/Reporte_planilla_nomina").then(function (d) {
                var rs = JSON.parse(d.data)[0];
                $scope.grilla = [];
                $scope.grilla = rs;
                $scope.openWai = false;
            });
        }
        $scope.reporteplanillas();


        $scope.formatnumber = function (num) {
            //var num = input.value.replace(/\./g, '');
            if (!isNaN(num)) {
                num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
                num = num.split('').reverse().join('').replace(/^[\.]/, '');
                return '$' + num;
            }
        }

        $scope.buscar_planilla = function (ruta) {
            Service.getCrud({ ruta: ruta }, "/Generic.svc/Read_planilla").then(function (d) {
                var rs = JSON.parse(d.data);
                $scope.planilla = [];
                $scope.planilla = rs;
                $scope.fnExcelReport();
                $scope.openWai = false;
            });
        }

        $scope.Aprobar_planilla = function (item) {
            Service.getCrud({ ruta: item.ruta, consecutivo: parseInt(item.consecutivo) }, "/Generic.svc/Aprobar_planilla").then(function (d) {
                var rs = JSON.parse(d.data);
                $scope.planilla = [];
                $scope.planilla = rs[0];
                alert("ESTA PLANILLA SE ENCUENTRA EN ESTADO " + rs[1]);
                $scope.fnExcelReport();
                $scope.reporteplanillas();
                $scope.openWai = false;
            });
        }

        $scope.convert = function (x) {
            var aux = ssDate.militodate(x);
            return ssDate.dateToString(aux, 'dd-MM-yyyy');
        }

        //EXPORTAR A EXCEL

        $scope.JSONToCSVConvertor = function (JSONData, ReportTitle, ShowLabel) {

            //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
            var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;

            var CSV = '';
            //Set Report title in first row or line

            CSV += ReportTitle + '\r\n\n';

            //This condition will generate the Label/Header
            if (ShowLabel) {
                var row = "";

                //This loop will extract the label from 1st index of on array
                for (var index in arrData[0]) {

                    //Now convert each value to string and comma-seprated
                    row += index + ',';
                }

                row = row.slice(0, -1);

                //append Label row with line break
                CSV += row + '\r\n';
            }

            //1st loop is to extract each row
            for (var i = 0; i < arrData.length; i++) {
                var row2 = "";

                //2nd loop will extract each column and convert it in string comma-seprated
                for (var index1 in arrData[i]) {
                    row2 += '"' + arrData[i][index1] + '",';
                }

                row2.slice(0, row2.length - 1);

                //add a line break after each row
                CSV += row2 + '\r\n';
            }

            if (CSV == '') {
                alert("Invalid data");
                return;
            }
            //FECHA ACTUAL
            var fecha = ssDate.dateToString(Date.now(), 'yyyy-MM-dd');

            //Generate a file name
            var fileName = "Descarga_" + fecha;
            //this will remove the blank-spaces from the title and replace it with an underscore
            fileName += ReportTitle.replace(/ /g, "_");

            //Initialize file format you want csv or xls
            var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);

            // Now the little tricky part.
            // you can use either>> window.open(uri);
            // but this will not work in some browsers
            // or you will not get the correct file extension    

            //this trick will generate a temp <a /> tag
            var link = document.createElement("a");
            link.href = uri;

            //set the visibility hidden so it will not effect on your web-layout
            link.style = "visibility:true";
            link.download = fileName + ".csv";

            //this part will append the anchor tag and remove it after automatic click
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        $scope.fnExcelReport = function () {
            $scope.JSONToCSVConvertor($scope.planilla, "", true);
        }

        // JSON to CSV Converter
        $scope.ConvertToCSV = function (tabla) {
            var array = typeof tabla != 'object' ? JSON.parse(tabla) : tabla;
            var str = '';

            for (var i = 0; i < array.length; i++) {
                var line = '';
                for (var index in array[i]) {
                    if (line != '') line += ';'

                    line += array[i][index];
                }

                str += line + '\r\n';
            }
            $scope.resultcvs = str;
        }

        // Example


        // Create Object
        var items = [
            { name: "Item 1", color: "Green", size: "X-Large" },
            { name: "Item 2", color: "Green", size: "X-Large" },
            { name: "Item 3", color: "Green", size: "X-Large" }];

        // Convert Object to JSON
        var jsonObject = JSON.stringify(items);

    }
    function Descargue_planillas_nomina($scope, $q, Service, Auth, $timeout, ssDate) {
        $scope.json = {};
        $scope.json3 = {};
        $scope.key = { value: '' };
        $scope.key2 = { value: '' };
        //$scope.openWai = true;

        Service.getCrud({}, "/Servicios.svc/preload_ccosto").then(function (d) {
            var rs = JSON.parse(d.data);
            $scope.centros = rs[0];
        });
        $scope.reporteplanillas = function () {
            Service.getCrud({}, "/Servicios.svc/Read_planillas_aprobada_nomina").then(function (d) {
                var rs = JSON.parse(d.data)[0];
                $scope.grilla = [];
                $scope.grilla = rs;
                $scope.openWai = false;
            });
        }
        $scope.reporteplanillas();


        $scope.formatnumber = function (num) {
            //var num = input.value.replace(/\./g, '');
            if (!isNaN(num)) {
                num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
                num = num.split('').reverse().join('').replace(/^[\.]/, '');
                return '$' + num;
            }
        }



        $scope.convert = function (x) {
            var aux = ssDate.militodate(x);
            return ssDate.dateToString(aux, 'dd-MM-yyyy');
        }

        $scope.buscar_planilla = function (ruta) {
            Service.getCrud({ ruta: ruta }, "/Generic.svc/Read_planilla").then(function (d) {
                var rs = JSON.parse(d.data);
                $scope.planilla = [];
                $scope.planilla = rs;
                $scope.fnExcelReport();
                $scope.openWai = false;
            });
        }


        //EXPORTAR A EXCEL

        $scope.JSONToCSVConvertor = function (JSONData, ReportTitle, ShowLabel) {

            //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
            var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;

            var CSV = '';
            //Set Report title in first row or line

            CSV += ReportTitle + '\r\n\n';

            //This condition will generate the Label/Header
            if (ShowLabel) {
                var row = "";

                //This loop will extract the label from 1st index of on array
                for (var index in arrData[0]) {

                    //Now convert each value to string and comma-seprated
                    row += index + ',';
                }

                row = row.slice(0, -1);

                //append Label row with line break
                CSV += row + '\r\n';
            }

            //1st loop is to extract each row
            for (var i = 0; i < arrData.length; i++) {
                var row2 = "";

                //2nd loop will extract each column and convert it in string comma-seprated
                for (var index1 in arrData[i]) {
                    row2 += '"' + arrData[i][index1] + '",';
                }

                row2.slice(0, row2.length - 1);

                //add a line break after each row
                CSV += row2 + '\r\n';
            }

            if (CSV == '') {
                alert("Invalid data");
                return;
            }
            //FECHA ACTUAL
            var fecha = ssDate.dateToString(Date.now(), 'yyyy-MM-dd');

            //Generate a file name
            var fileName = "Descarga_" + fecha;
            //this will remove the blank-spaces from the title and replace it with an underscore
            fileName += ReportTitle.replace(/ /g, "_");

            //Initialize file format you want csv or xls
            var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);

            // Now the little tricky part.
            // you can use either>> window.open(uri);
            // but this will not work in some browsers
            // or you will not get the correct file extension    

            //this trick will generate a temp <a /> tag
            var link = document.createElement("a");
            link.href = uri;

            //set the visibility hidden so it will not effect on your web-layout
            link.style = "visibility:true";
            link.download = fileName + ".csv";

            //this part will append the anchor tag and remove it after automatic click
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        $scope.fnExcelReport = function () {
            $scope.JSONToCSVConvertor($scope.planilla, "", true);
        }

        // JSON to CSV Converter
        $scope.ConvertToCSV = function (tabla) {
            var array = typeof tabla != 'object' ? JSON.parse(tabla) : tabla;
            var str = '';

            for (var i = 0; i < array.length; i++) {
                var line = '';
                for (var index in array[i]) {
                    if (line != '') line += ';'

                    line += array[i][index];
                }

                str += line + '\r\n';
            }
            $scope.resultcvs = str;
        }

        // Example


        // Create Object
        var items = [
            { name: "Item 1", color: "Green", size: "X-Large" },
            { name: "Item 2", color: "Green", size: "X-Large" },
            { name: "Item 3", color: "Green", size: "X-Large" }];

        // Convert Object to JSON
        var jsonObject = JSON.stringify(items);

    }
    function Ingreso_activos_contable($scope, $q, Service, Auth, $timeout, ssDate) {
        $scope.json = {};
        $scope.json3 = {};
        $scope.key = { value: '' };
        $scope.key2 = { value: '' };
        //$scope.openWai = true;

        Service.getCrud({}, "/Servicios.svc/preload_ccosto").then(function (d) {
            var rs = JSON.parse(d.data);
            $scope.centros = rs[0];
        });
        $scope.reporteplanillas = function () {
            if ($scope.tipo_filtro == undefined || $scope.tipo_filtro == "") {
                $scope.tipo_filtro = 1;
            }

       
            $scope.query = "select d.id, id_pedido,d.descripcion,placa_af,o.valor,v_util,d.cuota,o.factura, CONVERT(varchar,o.causacion,103) as causacion ,d.ccosto,d.cuenta,d.rubro,d.inventario from depreciacion d LEFT JOIN objeto as o on d.placa_af = af where inventario != 3"
            Service.getCrud({ query: $scope.query }, "/Servicios.svc/consulta").then(function (d) {
               
                var rs = JSON.parse(d.data);
                $scope.grilla = [];
                $scope.grilla = rs;
                $scope.openWai = false;
            });
            //Service.getCrud({ tipo: $scope.tipo_filtro }, "/Servicios.svc/Reporte_activos_pendientes").then(function (d) {
            //    var rs = JSON.parse(d.data)[0];
            //    $scope.grilla = [];
            //    $scope.grilla = rs;
            //    $scope.openWai = false;
            //});
        }
        $scope.reporteplanillas();


        $scope.formatnumber = function (num) {
            //var num = input.value.replace(/\./g, '');
            if (!isNaN(num)) {
                num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
                num = num.split('').reverse().join('').replace(/^[\.]/, '');
                return '$' + num;
            }
        }



        $scope.convert = function (x) {
            var aux = ssDate.militodate(x);
            return ssDate.dateToString(aux, 'dd-MM-yyyy');
        }


        $scope.activar = function (item) {
            var defender = $q.defer();
            var promise = defender.promise;
            $scope.openWai = true;
                $timeout(function () {
                    try {
                        var rs = false; 
                        item.id_pedido = parseInt(item.id_pedido);
                        item.valor = parseInt(item.valor);
                        item.v_util = parseInt(item.v_util);
                        item.cuota = parseInt(item.cuota);
                        item.id = parseInt(item.id);
                        Service.getCrud({ json: angular.toJson(item) }, '/Servicios.svc/Ingreso_depreciacion_af').then(function (d) {
                            rs = JSON.parse(d.data);
                            defender.resolve(rs);
                            $scope.reporteplanillas();
                            $scope.openWai = false;
                        });
                    } catch (e) {
                        defender.reject(e);
                    }


                });

            return promise;

        };
    }
    function Depreciacion_activos($scope, $q, Service, Auth, $timeout, ssDate) {
        $scope.json = {};
        $scope.json3 = {};
        $scope.key = { value: '' };
        $scope.key2 = { value: '' };
        $scope.grilla = [];
        //$scope.openWai = true;

        Service.getCrud({}, "/Servicios.svc/preload_ccosto").then(function (d) {
            var rs = JSON.parse(d.data);
            $scope.centros = rs[0];
        });
        $scope.reportedepreciacion_af = function (tipo_rep) {

            if (tipo_rep == 1) {

                $scope.query = "select * from detalle_depre dp INNER JOIN depreciacion_2021 as d on dp.placa_af = d.placa"
                Service.getCrud({ query: $scope.query }, "/Servicios.svc/consulta").then(function (d) {
                    var rs = JSON.parse(d.data);
                    $scope.grilla = [];
                    $scope.grilla = rs;
                    $scope.openWaiting = false;
                });

            }
            else {
                $scope.query = "select * from detalle_depre dp INNER JOIN depreciacion_2022 as d on dp.placa_af = d.placa"
                Service.getCrud({ query: $scope.query }, "/Servicios.svc/consulta").then(function (d) {
                    var rs = JSON.parse(d.data);
                    $scope.grilla = [];
                    $scope.grilla = rs;
                    $scope.openWaiting = false;
                });
            }




        }
        
           
        

        $scope.formatnumber = function (num) {
            //var num = input.value.replace(/\./g, '');
            if (!isNaN(num)) {
                num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
                num = num.split('').reverse().join('').replace(/^[\.]/, '');
                return '$' + num;
            }
        }



        $scope.convert = function (x) {
            var aux = ssDate.militodate(x);
            return ssDate.dateToString(aux, 'dd-MM-yyyy');
        }

        //EXPORTAR A EXCEL

        $scope.JSONToCSVConvertor = function (JSONData, ReportTitle, ShowLabel) {

            //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
            var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;

            var CSV = '';
            //Set Report title in first row or line

            CSV += ReportTitle + '\r\n\n';

            //This condition will generate the Label/Header
            if (ShowLabel) {
                var row = "";

                //This loop will extract the label from 1st index of on array
                for (var index in arrData[0]) {

                    //Now convert each value to string and comma-seprated
                    row += index + ',';
                }

                row = row.slice(0, -1);

                //append Label row with line break
                CSV += row + '\r\n';
            }

            //1st loop is to extract each row
            for (var i = 0; i < arrData.length; i++) {
                var row2 = "";

                //2nd loop will extract each column and convert it in string comma-seprated
                for (var index1 in arrData[i]) {
                    row2 += '"' + arrData[i][index1] + '",';
                }

                row2.slice(0, row2.length - 1);

                //add a line break after each row
                CSV += row2 + '\r\n';
            }

            if (CSV == '') {
                alert("Invalid data");
                return;
            }
            //FECHA ACTUAL
            var fecha = ssDate.dateToString(Date.now(), 'yyyy-MM-dd');

            //Generate a file name
            var fileName = "Descarga_" + fecha;
            //this will remove the blank-spaces from the title and replace it with an underscore
            fileName += ReportTitle.replace(/ /g, "_");

            //Initialize file format you want csv or xls
            var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);

            // Now the little tricky part.
            // you can use either>> window.open(uri);
            // but this will not work in some browsers
            // or you will not get the correct file extension    

            //this trick will generate a temp <a /> tag
            var link = document.createElement("a");
            link.href = uri;

            //set the visibility hidden so it will not effect on your web-layout
            link.style = "visibility:true";
            link.download = fileName + ".csv";

            //this part will append the anchor tag and remove it after automatic click
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        $scope.fnExcelReport = function () {
            $scope.JSONToCSVConvertor($scope.grilla, "", true);
        }

        // JSON to CSV Converter
        $scope.ConvertToCSV = function (tabla) {
            var array = typeof tabla != 'object' ? JSON.parse(tabla) : tabla;
            var str = '';

            for (var i = 0; i < array.length; i++) {
                var line = '';
                for (var index in array[i]) {
                    if (line != '') line += ';'

                    line += array[i][index];
                }

                str += line + '\r\n';
            }
            $scope.resultcvs = str;
        }

        // Example


        // Create Object
        var items = [
            { name: "Item 1", color: "Green", size: "X-Large" },
            { name: "Item 2", color: "Green", size: "X-Large" },
            { name: "Item 3", color: "Green", size: "X-Large" }];

        // Convert Object to JSON
        var jsonObject = JSON.stringify(items);

        $scope.Depreciar_activos = function (item) {
            var defender = $q.defer();
            var promise = defender.promise;
            $scope.openWai = true;
            $timeout(function () {
                try {
                    var rs = false;
                    Service.getCrud({}, '/Servicios.svc/Depreciar_af_nuevo').then(function (d) {
                        rs = JSON.parse(d.data);
                        defender.resolve(rs);
                        $scope.reportedepreciacion_af();
                        alert("EJECUTADO CON EXITO");
                        $scope.openWai = false;
                    });
                } catch (e) {
                    defender.reject(e);
                }


            });

            return promise;

        };

    }
    function Rep_movimiento_presu($scope, $q, Service, Auth, $timeout, ssDate) {
        $scope.json = {};
        $scope.json3 = {};
        $scope.key = { value: '' };
        $scope.key2 = { value: '' };
        //$scope.openWai = true;

        Service.getCrud({}, "/Servicios.svc/preload_ccosto").then(function (d) {
            var rs = JSON.parse(d.data);
            $scope.centros = rs[0];
        });
        $scope.reporte = function () {
            $scope.fechini = ssDate.dateToString($scope.fecha_inicio, 'yyyy-MM-dd');
            $scope.fechafin = ssDate.dateToString($scope.fecha_fin, 'yyyy-MM-dd');
           
            $scope.query = "select p.id,ano,cuenta,rubro,ccosto,total_presupuesto as presupuesto_inicial, total_ejecucion,disponibilidad,valor_ant,nuevo_saldo,(nuevo_saldo - valor_ant) as diferencia,observacion,CONVERT(varchar,hp.fecha,3) as fecha from presupuesto p LEFT JOIN histo_ajuste_presu as hp on p.id = hp.id_presupuesto where hp.fecha BETWEEN '" + $scope.fechini + "'AND'" + $scope.fechafin + "' AND ano ='" + $scope.ano + "' ORDER BY hp.id_presupuesto"
            Service.getCrud({ query: $scope.query }, "/Servicios.svc/consulta").then(function (d) {
              var rs = JSON.parse(d.data);
              $scope.grilla = [];
              $scope.grilla = rs;
               $scope.openWaiting = false;
            });
        }



        $scope.formatnumber = function (num) {
            //var num = input.value.replace(/\./g, '');
            if (!isNaN(num)) {
                num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
                num = num.split('').reverse().join('').replace(/^[\.]/, '');
                return '$' + num;
            }
        }



        $scope.convert = function (x) {
            var aux = ssDate.militodate(x);
            return ssDate.dateToString(aux, 'dd-MM-yyyy');
        }

        //EXPORTAR A EXCEL

        $scope.JSONToCSVConvertor = function (JSONData, ReportTitle, ShowLabel) {

            //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
            var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;

            var CSV = '';
            //Set Report title in first row or line

            CSV += ReportTitle + '\r\n\n';

            //This condition will generate the Label/Header
            if (ShowLabel) {
                var row = "";

                //This loop will extract the label from 1st index of on array
                for (var index in arrData[0]) {

                    //Now convert each value to string and comma-seprated
                    row += index + ',';
                }

                row = row.slice(0, -1);

                //append Label row with line break
                CSV += row + '\r\n';
            }

            //1st loop is to extract each row
            for (var i = 0; i < arrData.length; i++) {
                var row2 = "";

                //2nd loop will extract each column and convert it in string comma-seprated
                for (var index1 in arrData[i]) {
                    row2 += '"' + arrData[i][index1] + '",';
                }

                row2.slice(0, row2.length - 1);

                //add a line break after each row
                CSV += row2 + '\r\n';
            }

            if (CSV == '') {
                alert("Invalid data");
                return;
            }
            //FECHA ACTUAL
            var fecha = ssDate.dateToString(Date.now(), 'yyyy-MM-dd');

            //Generate a file name
            var fileName = "Descarga_" + fecha;
            //this will remove the blank-spaces from the title and replace it with an underscore
            fileName += ReportTitle.replace(/ /g, "_");

            //Initialize file format you want csv or xls
            var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);

            // Now the little tricky part.
            // you can use either>> window.open(uri);
            // but this will not work in some browsers
            // or you will not get the correct file extension    

            //this trick will generate a temp <a /> tag
            var link = document.createElement("a");
            link.href = uri;

            //set the visibility hidden so it will not effect on your web-layout
            link.style = "visibility:true";
            link.download = fileName + ".csv";

            //this part will append the anchor tag and remove it after automatic click
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        $scope.fnExcelReport = function () {
            $scope.JSONToCSVConvertor($scope.grilla, "", true);
        }

        // JSON to CSV Converter
        $scope.ConvertToCSV = function (tabla) {
            var array = typeof tabla != 'object' ? JSON.parse(tabla) : tabla;
            var str = '';

            for (var i = 0; i < array.length; i++) {
                var line = '';
                for (var index in array[i]) {
                    if (line != '') line += ';'

                    line += array[i][index];
                }

                str += line + '\r\n';
            }
            $scope.resultcvs = str;
        }

        // Example


        // Create Object
        var items = [
            { name: "Item 1", color: "Green", size: "X-Large" },
            { name: "Item 2", color: "Green", size: "X-Large" },
            { name: "Item 3", color: "Green", size: "X-Large" }];

        // Convert Object to JSON
        var jsonObject = JSON.stringify(items);

        $scope.Depreciar_activos = function (item) {
            var defender = $q.defer();
            var promise = defender.promise;
            $scope.openWai = true;
            $timeout(function () {
                try {
                    var rs = false;
        
                    Service.getCrud({}, '/Servicios.svc/Depreciar_af_nuevo').then(function (d) {

                  /*  Service.getCrud({}, '/Servicios.svc/Depreciar_af').then(function (d) {*/
                        rs = JSON.parse(d.data);
                        defender.resolve(rs);
                        $scope.reportedepreciacion_af();
                        alert("EJECUTADO CON EXITO");
                        $scope.openWai = false;
                    });
                } catch (e) {
                    defender.reject(e);
                }


            });

            return promise;

        };

    }
    function opex_controller($scope, $q, Service, Auth, $timeout, ssDate) {
        $scope.json = {};
        $scope.json3 = {};
        $scope.key = { value: '' };
        $scope.key2 = { value: '' };
        //$scope.openWai = true;

        Service.getCrud({}, "/Servicios.svc/preload_ccosto").then(function (d) {
            var rs = JSON.parse(d.data);
            $scope.centros = rs[0];
        });
        $scope.reporte = function () {
            $scope.fechini = ssDate.dateToString($scope.fecha_inicio, 'yyyy-MM-dd');
            $scope.fechafin = ssDate.dateToString($scope.fecha_fin, 'yyyy-MM-dd');
            $scope.query = "select p.id,ano,cuenta,rubro,ccosto,total_presupuesto as presupuesto_inicial, total_ejecucion,disponibilidad,valor_ant,nuevo_saldo,(nuevo_saldo - valor_ant) as diferencia,observacion,CONVERT(varchar,hp.fecha,3) as fecha from presupuesto p LEFT JOIN histo_ajuste_presu as hp on p.id = hp.id_presupuesto where hp.fecha BETWEEN '" + $scope.fechini + "'AND'" + $scope.fechafin + "' AND ano ='" + $scope.ano + "' ORDER BY hp.id_presupuesto"
            Service.getCrud({ query: $scope.query }, "/Servicios.svc/consulta").then(function (d) {
                var rs = JSON.parse(d.data);
                $scope.grilla = [];
                $scope.grilla = rs;
                $scope.openWaiting = false;
            });
        }



        $scope.json.totalenero1 = 0;
        $scope.total_enero_adsl = function (valor) {
            if (valor > 0) {
            $scope.json.totalenero1 = $scope.json.totalenero1 + valor;
                console.log($scope.json.totalenero1);
            }
        }

        $scope.formatnumber = function (num) {
            //var num = input.value.replace(/\./g, '');
            if (!isNaN(num)) {
                num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
                num = num.split('').reverse().join('').replace(/^[\.]/, '');
                return '$' + num;
            }
        }



        $scope.convert = function (x) {
            var aux = ssDate.militodate(x);
            return ssDate.dateToString(aux, 'dd-MM-yyyy');
        }

        //EXPORTAR A EXCEL

        $scope.JSONToCSVConvertor = function (JSONData, ReportTitle, ShowLabel) {

            //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
            var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;

            var CSV = '';
            //Set Report title in first row or line

            CSV += ReportTitle + '\r\n\n';

            //This condition will generate the Label/Header
            if (ShowLabel) {
                var row = "";

                //This loop will extract the label from 1st index of on array
                for (var index in arrData[0]) {

                    //Now convert each value to string and comma-seprated
                    row += index + ',';
                }

                row = row.slice(0, -1);

                //append Label row with line break
                CSV += row + '\r\n';
            }

            //1st loop is to extract each row
            for (var i = 0; i < arrData.length; i++) {
                var row2 = "";

                //2nd loop will extract each column and convert it in string comma-seprated
                for (var index1 in arrData[i]) {
                    row2 += '"' + arrData[i][index1] + '",';
                }

                row2.slice(0, row2.length - 1);

                //add a line break after each row
                CSV += row2 + '\r\n';
            }

            if (CSV == '') {
                alert("Invalid data");
                return;
            }
            //FECHA ACTUAL
            var fecha = ssDate.dateToString(Date.now(), 'yyyy-MM-dd');

            //Generate a file name
            var fileName = "Descarga_" + fecha;
            //this will remove the blank-spaces from the title and replace it with an underscore
            fileName += ReportTitle.replace(/ /g, "_");

            //Initialize file format you want csv or xls
            var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);

            // Now the little tricky part.
            // you can use either>> window.open(uri);
            // but this will not work in some browsers
            // or you will not get the correct file extension    

            //this trick will generate a temp <a /> tag
            var link = document.createElement("a");
            link.href = uri;

            //set the visibility hidden so it will not effect on your web-layout
            link.style = "visibility:true";
            link.download = fileName + ".csv";

            //this part will append the anchor tag and remove it after automatic click
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        $scope.fnExcelReport = function () {
            $scope.JSONToCSVConvertor($scope.grilla, "", true);
        }

        // JSON to CSV Converter
        $scope.ConvertToCSV = function (tabla) {
            var array = typeof tabla != 'object' ? JSON.parse(tabla) : tabla;
            var str = '';

            for (var i = 0; i < array.length; i++) {
                var line = '';
                for (var index in array[i]) {
                    if (line != '') line += ';'

                    line += array[i][index];
                }

                str += line + '\r\n';
            }
            $scope.resultcvs = str;
        }

        // Example


        // Create Object
        var items = [
            { name: "Item 1", color: "Green", size: "X-Large" },
            { name: "Item 2", color: "Green", size: "X-Large" },
            { name: "Item 3", color: "Green", size: "X-Large" }];

        // Convert Object to JSON
        var jsonObject = JSON.stringify(items);

        $scope.Depreciar_activos = function (item) {
            var defender = $q.defer();
            var promise = defender.promise;
            $scope.openWai = true;
            $timeout(function () {
                try {
                    var rs = false;
                    Service.getCrud({}, '/Servicios.svc/Depreciar_af').then(function (d) {
                        rs = JSON.parse(d.data);
                        defender.resolve(rs);
                        $scope.reportedepreciacion_af();
                        alert("EJECUTADO CON EXITO");
                        $scope.openWai = false;
                    });
                } catch (e) {
                    defender.reject(e);
                }


            });

            return promise;

        };

    }
    function ComoDato_Controller($scope, $q, Service, Auth, $timeout, ssDate) {
        $scope.json = {};
        $scope.openWaiting = false;
        $scope.openModalPRO = false;

        $scope.closePRO = function (){
            $scope.openWaiting = false;
            $scope.openModalPRO = false;
        }

        $scope.load = function () {
            Service.getCrud({}, "/Servicios.svc/preload_comodato").then(function (d) {
                var rs = JSON.parse(d.data);
                $scope.listado_com = rs[0];
                $scope.listado_com.forEach(function (item, index) {
                    if (item.causacion != null) {
                        item.causacion = ssDate.militodateString(item.causacion);
                    }
                    if (item.fecha_estado != null) {
                        item.fecha_estado  = ssDate.militodateString(item.fecha_estado);
                    }
                   
                });
            });

        }
        $scope.load();

        $scope.abrirmodal = function (codigo, tipo) {
            $timeout(function () {
                $scope.openWaiting = true;
                $scope.openModalPRO = true;
            }),1000;
            if (tipo == 1) {
                $scope.json = {};
                $scope.showtbn1 = false;
                $scope.showtbn2 = true;
            } else if (tipo == 2) {
                $scope.showtbn1 = true;
                $scope.showtbn2 = false;
                $scope.actualizarcomodato(codigo);
            }

        }


        $scope.actualizarcomodato = function (id) {
            $scope.json = {};
            Service.getCrud({ id: parseInt(id) }, "/Servicios.svc/Read_comodato").then(function (d) {
                var rs = JSON.parse(d.data);
                $scope.json = rs;
            });
        }

        $scope.Guardarcomodato = function (id) {
            $scope.json = {};
            Service.getCrud({ id: parseInt(id) }, "/Servicios.svc/CreateComodato").then(function (d) {
                var rs = JSON.parse(d.data);
                $scope.json = rs;
            });
        }

        $scope.guardar = function () {
            var defender = $q.defer();
            var promise = defender.promise;
            if (!$scope.comodato.$valid) {
                var cr = "Campos requeridos no diligenciados:";
                $scope.comodato.$error.required.forEach(function (item, index) {
                    cr += "\n - " + item.$name;
                });
                alert(cr);
                defender.resolve(false);
                return promise;
            } else {
                $timeout(function () {
                    try {
                        var rs = false;
                        Service.getCrud({ json: angular.toJson($scope.json) }, '/Servicios.svc/CreateComodato').then(function (d) {
                            rs = JSON.parse(d.data);
                            defender.resolve(rs);
                            alert("GUARDADO EXITOSO");
                            $scope.json = {};
                            $scope.closePRO();

                        });
                    } catch (e) {
                        defender.reject(e);
                    }


                });
            }
            return promise;

        };


        $scope.UpdateComodato = function () {
            console.log("Entro");
            var defender = $q.defer();
            var promise = defender.promise;
            if (!$scope.comodato.$valid) {
                var cr = "Campos requeridos no diligenciados";
                $scope.comodato.$error.required.forEach(function (item, index) {
                    cr += "\n - " + item.$name;
                });
                alert(cr);
                defender.resolve(false);
                return promise;
            } else {
                $timeout(function () {
                    try {
                        var rs = false;
                        $scope.json.causacion = ssDate.dateToString($scope.json.causacion, 'dd-MM-yyyy');
                        $scope.json.fecha_estado = ssDate.dateToString($scope.json.fecha_estado, 'dd-MM-yyyy');
                        Service.getCrud({ json: angular.toJson($scope.json) }, "/Servicios.svc/Update_Comodato").then(function (d) {
                            rs = JSON.parse(d.data);
                            alert("REGISTRO ACTUALIZADO!");
                            $scope.load();
                            $scope.json = {};
                            $scope.closePRO();
                            defender.resolve(rs);

                        });
                    } catch (e) {

                        defender.reject(e);

                    }
                });
            }
            return promise;
        };


        /**
        excel
         */
        $scope.JSONToCSVConvertor = function (JSONData, ReportTitle, ShowLabel) {

            //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
            var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;

            var CSV = '';
            //Set Report title in first row or line

            CSV += ReportTitle + '\r\n\n';

            //This condition will generate the Label/Header
            if (ShowLabel) {
                var row = "";

                //This loop will extract the label from 1st index of on array
                for (var index in arrData[0]) {

                    //Now convert each value to string and comma-seprated
                    row += index + ';';
                }

                row = row.slice(0, -1);

                //append Label row with line break
                CSV += row + '\r\n';
            }

            //1st loop is to extract each row
            for (var i = 0; i < arrData.length; i++) {
                var row2 = "";

                //2nd loop will extract each column and convert it in string comma-seprated
                for (var index1 in arrData[i]) {
                    row2 += '"' + arrData[i][index1] + '";';
                }

                row2.slice(0, row2.length - 1);

                //add a line break after each row
                CSV += row2 + '\r\n';
            }

            if (CSV == '') {
                alert("Invalid data");
                return;
            }
            //FECHA ACTUAL
            var fecha = ssDate.dateToString(Date.now(), 'yyyy-MM-dd');

            //Generate a file name
            var fileName = "Descarga_" + fecha;
            //this will remove the blank-spaces from the title and replace it with an underscore
            fileName += ReportTitle.replace(/ /g, "_");

            //Initialize file format you want csv or xls
            var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);

            // Now the little tricky part.
            // you can use either>> window.open(uri);
            // but this will not work in some browsers
            // or you will not get the correct file extension    

            //this trick will generate a temp <a /> tag
            var link = document.createElement("a");
            link.href = uri;

            //set the visibility hidden so it will not effect on your web-layout
            link.style = "visibility:true";
            link.download = fileName + ".csv";

            //this part will append the anchor tag and remove it after automatic click
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        $scope.fnExcelReport = function () {
            $scope.JSONToCSVConvertor($scope.listado_com, "REPORTE DE COMODATOS", true);
        }

        // JSON to CSV Converter
        $scope.ConvertToCSV = function (tabla) {
            var array = typeof tabla != 'object' ? JSON.parse(tabla) : tabla;
            var str = '';

            for (var i = 0; i < array.length; i++) {
                var line = '';
                for (var index in array[i]) {
                    if (line != '') line += ';'

                    line += array[i][index];
                }

                str += line + '\r\n';
            }
            $scope.resultcvs = str;
        }

        // Example


        // Create Object
        var items = [
            { name: "Item 1", color: "Green", size: "X-Large" },
            { name: "Item 2", color: "Green", size: "X-Large" },
            { name: "Item 3", color: "Green", size: "X-Large" }];

        // Convert Object to JSON
        var jsonObject = JSON.stringify(items);


    }
    function recortepedidos_controller($scope, $q, Service, Auth, $timeout, ssDate) {
        $scope.json = {};
        $scope.json3 = {};
        $scope.key3 = { value: '' };
        $scope.key2 = { value: '' };
        $scope.cod_user = Auth.getUserObj().codigo;
        $scope.usuario = Auth.getUserObj().nombre_usuario;


        $timeout(function () {
            $("#brNombre-btn-clave").attr('disabled', 'disabled');
            $("#brProvee-btn-clave").attr('disabled', 'disabled');
            $("#brProvee-btn-valor").attr('disabled', 'disabled');
            $("#brProvee-btn-btn").attr('disabled', 'disabled');
            $("#brNombre-btn-valor").attr('disabled', 'disabled');
            $("#brNombre-btn-btn").attr('disabled', 'disabled');

            $("#brProvee-clave").attr('disabled', 'disabled');
            $("#brProvee-valor").attr('disabled', 'disabled');
            $("#brProvee-btn").attr('disabled', 'disabled');
            $("#brCosto-clave").attr('disabled', 'disabled');
            $("#brCosto-valor").attr('disabled', 'disabled');
            $("#brCosto-btn").attr('disabled', 'disabled');
        });

        Service.getCrud({}, "/Servicios.svc/preload_ccosto").then(function (d) {
            var rs = JSON.parse(d.data);
            $scope.centros = rs[0];
        });

        Service.getCrud({ username: Auth.getUserObj().username }, "/Servicios.svc/Validarpermiso").then(function (d) {
            var rs = parseInt(JSON.parse(d.data));
            if (rs > 0) {
                $scope.show_privilege = true;
                $scope.disabledcheck = false;
            } else {
                $scope.show_privilege = false;
                $scope.disabledcheck = true;
            }
        });
        $scope.reportepedidos = function () {
            $scope.openWai = true;
            Service.getCrud({ usuario: Auth.getUserObj().nombre_usuario, tipo: 1, username: Auth.getUserObj().username }, "/Servicios.svc/Info_ped_srp").then(function (d) {
                var rs = JSON.parse(d.data);
                $scope.grilla = [];
                $scope.grilla = rs;
                $scope.jsonexcel = {};
                $scope.jsonexcel = rs;
                $scope.openWai = false;
            });
        }
        $scope.aprobar_srp = function (item) {
            $scope.openWai = true;
            Service.getCrud({ nro_ped: item.nro_pedido }, "/Servicios.svc/Aprobar_srp").then(function (d) {
                var rs = JSON.parse(d.data);
                $scope.openWai = false;
                alert("EL SRP FUE APROBADO CON NUMERO " + rs);
                $scope.reportepedidos();
            });
        }

        $scope.verificar_srp = function (item) {
            $scope.openWai = true;
            Service.getCrud({ nro_ped: item.nro_pedido }, "/Servicios.svc/verificar_srp").then(function (d) {
                var rs = JSON.parse(d.data);
                $scope.openWai = false;
                $scope.json3.nro_srp = rs[1];
                console.log(rs);
                if (rs[1] == "RETENIDO") {
                    alert("EL SRP FUE VERIFICADO, SE ENCUENTRA EN ESTADO " + rs[1]);
                } else {
                    alert("EL SRP FUE VERIFICADO Y SE ENCUENTRA EN ESTADO PENDIENTE");
                }
            });
        }

        $scope.formatnumber = function (num) {
            //var num = input.value.replace(/\./g, '');
            if (!isNaN(num)) {
                num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
                num = num.split('').reverse().join('').replace(/^[\.]/, '');
                return '$' + num;
            }
        }

        $scope.buscar_acta = function (item) {
            $scope.openWaiting = true;
            $scope.openModalPRO = true;
            Service.getCrud({ numero_ped: item.nro_pedido }, "/Servicios.svc/Reporte_Nro_pedido").then(function (d) {
                var rs = JSON.parse(d.data);
                $scope.json3 = rs[0];
                $scope.json3.fecha = ssDate.militodate($scope.json3.fecha);
                $scope.key2.value = rs[0].ccosto;
                $scope.key3.value = rs[0].proveedor;
                $scope.tablapedidos = [];
                $scope.tablapedidos = rs[1];
            });
        }



        $scope.closePRO = function () {
            $scope.openWaiting = false;
            $scope.openModalPRO = false;
            $scope.showsrp = false;
        }

        $scope.convert = function (x) {
            var aux = ssDate.militodate(x);
            return ssDate.dateToString(aux, 'dd-MM-yyyy');
        }

        $scope.convertst = function (x) {
            return x = '$ ' + x;
        }

        $scope.show_observacion = function (item, index) {
            //if (item.nro_contrato != null) {
            //    $("#btn_obs").prop('disabled', true);
            //} else {
            //    $("#btn_obs").prop('disabled', false);
            //}
            $scope.observacion = item.obs_compras;
            $scope.index = index;
            $scope.openModaOBS = true;
        }

        $scope.closeobs = function () {
            $scope.openModaOBS = false;
            $scope.observacion = "";
        }

        $scope.agregar = function () {
            $scope.grilla.forEach(function (it, ind) {
                if (ind == $scope.index) {
                    it.obs_compras = $scope.observacion;
                }
            })
            $scope.closeobs();
        }

        $scope.updateestados = function (item) {
            $scope.openWai = true;
            item.fecha = ssDate.militodate(item.fecha);
            item.fecha_vto_finan = ssDate.militodate(item.fecha_vto_finan);
            item.fecha_vto_bueno = ssDate.militodate(item.fecha_vto_bueno);
            Service.getCrud({ json: angular.toJson(item) }, "/Servicios.svc/Update_estados").then(function (d) {
                var rs = JSON.parse(d.data);
                $scope.openWai = false;
                alert("ACTUALIZACION DE ESTADO EXITOSO");
                $scope.reportepedidos($scope.filtro);
            });
        }

        /*CONFIG BUSQUEDA PEDIDO*/
        $scope.dataPedido = {
            id: 'buscadorNombre',
            component: [{ id: 'brNombre', type: 'btn' }],
            table: 'pedidos',
            column: [
                { name: 'rtrim(ltrim(nro_pedido))', as: 'Nro_Pedido', visible: true },
                { name: 'rtrim(ltrim(nro_srp))', as: 'Nro_srp', visible: true },
                { name: 'rtrim(ltrim(proveedor.razon_social))', as: 'Proveedor', visible: true },
                { name: 'rtrim(ltrim(ccosto))', as: 'ccosto', visible: true },
                { name: 'pedidos.vlr_total', as: 'Valor', visible: true },

            ],
            inner_join: [{ table: "proveedor", on: "pedidos.proveedor = proveedor.nit", join: "" }],
            where: [{ col: "pedidos.estado", filter: "='APROBADO'", join: '' },{ col: " and pedidos.usuario", filter: "='"+$scope.usuario+"'", join: '' }],
            groupby: true,
            orderby: [],
            title: 'BUSCAR PEDIDO'
        };
        $scope.rsPedido = function (d) {
            var j = JSON.parse(d);
            $scope.pedido = j.Nro_Pedido;
            if ($scope.pedido != null && $scope.pedido != undefined) {
                $scope.buscar_srp($scope.pedido);
            } 
            

        }

        /*CONFIG BUSQUEDA RAPIDA CCOSTO aqui consigo disponibles*/

        $scope.buscar_srp = function (pedido) {
            $scope.showsrp = true;
            $scope.openModalPRO = true;
            Service.getCrud({ numero_ped: pedido }, "/Servicios.svc/Reporte_SRP").then(function (d) {
                var rs = JSON.parse(d.data);
                $scope.json3 = rs[0];
                $scope.json3.fecha = ssDate.militodate($scope.json3.fecha);
                $scope.key2.value = rs[0].ccosto;
                $scope.key3.value = rs[0].proveedor;
                $scope.tablapedidos = [];
                $scope.tablapedidos = rs[1];
                $scope.vlr_total = 0;
                $scope.tablapedidos.forEach(function (item, index) {
                    $scope.vlr_total = $scope.vlr_total + item.total;
                    Service.getCrud({ pedido: parseInt(pedido), ceco: rs[0].ccosto, cuenta: item.cuenta }, "/Servicios.svc/Validar_saldo_disponibe").then(function (d) {
                        var x = JSON.parse(d.data);
                        item.disponible = item.total - x;
                    });

                })
            });
        }


        /*CONFIG BUSQUEDA RAPIDA CCOSTO*/
        $scope.dataccosto = {
            id: 'buscadorccosto',
            component: [{ id: 'brCosto', type: '' }],
            table: 'area_ccosto',
            column: [
                { name: 'rtrim(ltrim(ccosto))', as: 'Ccosto', visible: true },
                { name: 'rtrim(ltrim(area))', as: 'Area', visible: true }
            ],
            where: {},
            groupby: true,
            orderby: [],
            title: 'BUSCAR CENTRO DE COSTO',
            required_name: "CENTRO DE COSTO"
        };
        $scope.rsccosto = function (d) {
            var j = JSON.parse(d);
            $scope.json.ccosto = j.Ccosto;
            $scope.json.name_ceco = j.Area;
        }

        /*CONFIG BUSQUEDA RAPIDA CCOSTO*/
        $scope.dataproveedor = {
            id: 'buscadorprov',
            component: [{ id: 'brProvee', type: '' }],
            table: 'proveedor',
            column: [
                { name: 'rtrim(ltrim(nit))', as: 'NIT', visible: true },
                { name: 'rtrim(ltrim(razon_social))', as: 'RZ', visible: true }

            ],
            where: {},
            groupby: true,
            orderby: [],
            title: 'BUSCAR PROVEEDOR',
            required_name: "PROVEEDOR"
        };
        $scope.rsproveedor = function (d) {
            var j = JSON.parse(d);
            $scope.json.proveedor = j.NIT;
            $scope.json.name_proveedor = j.RZ;
        }

        $scope.save_recorte = function () {
            $scope.tablapedidos.forEach(function (item, index) {
                
                if (item.saldo_reducir > 0 && item.disponible < item.saldo_reducir) {
                    alert("SALDO SUPERA EL MONTO DISPONIBLE");
                } else {
                    Service.getCrud({ nro_pedido: parseInt($scope.pedido), ceco: $scope.json3.ccosto, cuenta: item.cuenta, disponible: item.disponible, saldo_reducir: item.saldo_reducir, justificacion: $scope.justificacion_recorte }, "/Servicios.svc/recorte_pedido").then(function (d) {
                        var x = JSON.parse(d.data);
                        alert("GUARDADO CON EXITO!");
                        $scope.showsrp = false;
                        $scope.openModalPRO = false;
                    });
                }

            })
        }

        $scope.cerrar = function () {
            $timeout(function () {
                $('#salud-system').click();
                currentButton.triggerHandler("click");
            });
        }
    }
    function controller_planillas_nomina($scope, $q, Service, Auth, $timeout, ssDate) {
        $scope.json = {};
        $scope.json3 = {};
        $scope.key = { value: '' };
        $scope.key2 = { value: '' };
        //$scope.openWai = true;


        Service.getCrud({}, "/Servicios.svc/preload_ccosto").then(function (d) {
            var rs = JSON.parse(d.data);
            $scope.centros = rs[0];
        });
        $scope.reporteplanillas = function () {
            if ($scope.tipo_filtro == undefined || $scope.tipo_filtro == "") {
                $scope.tipo_filtro = 1;
            }
            Service.getCrud({ tipo: $scope.tipo_filtro }, "/Servicios.svc/Reporte_planilla_nomina").then(function (d) {
                var rs = JSON.parse(d.data)[0];
                $scope.grilla = [];
                $scope.grilla = rs;
                $scope.openWai = false;
            });
        }
        $scope.reporteplanillas();


        $scope.formatnumber = function (num) {
            //var num = input.value.replace(/\./g, '');
            if (!isNaN(num)) {
                num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
                num = num.split('').reverse().join('').replace(/^[\.]/, '');
                return '$' + num;
            }
        }

        $scope.buscar_planilla = function (ruta) {
            Service.getCrud({ ruta: ruta }, "/Generic.svc/Read_planilla").then(function (d) {
                var rs = JSON.parse(d.data);
                $scope.planilla = [];
                $scope.planilla = rs;
                $scope.fnExcelReport();
                $scope.openWai = false;
            });
        }

        $scope.Aprobar_planilla = function (item) {
            Service.getCrud({ ruta: item.ruta, consecutivo: parseInt(item.consecutivo) }, "/Generic.svc/Verificar_planilla").then(function (d) {
                var rs = JSON.parse(d.data);
                $scope.planilla = [];
                $scope.planilla = rs[0];
                alert("ESTA PLANILLA SE ENCUENTRA EN ESTADO " + rs[1]);
                $scope.fnExcelReport();
                $scope.reporteplanillas();
                $scope.openWai = false;
            });
        }

        $scope.convert = function (x) {
            var aux = ssDate.militodate(x);
            return ssDate.dateToString(aux, 'dd-MM-yyyy');
        }

        //EXPORTAR A EXCEL

        $scope.JSONToCSVConvertor = function (JSONData, ReportTitle, ShowLabel) {

            //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
            var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;

            var CSV = '';
            //Set Report title in first row or line

            CSV += ReportTitle + '\r\n\n';

            //This condition will generate the Label/Header
            if (ShowLabel) {
                var row = "";

                //This loop will extract the label from 1st index of on array
                for (var index in arrData[0]) {

                    //Now convert each value to string and comma-seprated
                    row += index + ',';
                }

                row = row.slice(0, -1);

                //append Label row with line break
                CSV += row + '\r\n';
            }

            //1st loop is to extract each row
            for (var i = 0; i < arrData.length; i++) {
                var row2 = "";

                //2nd loop will extract each column and convert it in string comma-seprated
                for (var index1 in arrData[i]) {
                    row2 += '"' + arrData[i][index1] + '",';
                }

                row2.slice(0, row2.length - 1);

                //add a line break after each row
                CSV += row2 + '\r\n';
            }

            if (CSV == '') {
                alert("Invalid data");
                return;
            }
            //FECHA ACTUAL
            var fecha = ssDate.dateToString(Date.now(), 'yyyy-MM-dd');

            //Generate a file name
            var fileName = "Descarga_" + fecha;
            //this will remove the blank-spaces from the title and replace it with an underscore
            fileName += ReportTitle.replace(/ /g, "_");

            //Initialize file format you want csv or xls
            var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);

            // Now the little tricky part.
            // you can use either>> window.open(uri);
            // but this will not work in some browsers
            // or you will not get the correct file extension    

            //this trick will generate a temp <a /> tag
            var link = document.createElement("a");
            link.href = uri;

            //set the visibility hidden so it will not effect on your web-layout
            link.style = "visibility:true";
            link.download = fileName + ".csv";

            //this part will append the anchor tag and remove it after automatic click
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        $scope.fnExcelReport = function () {
            $scope.JSONToCSVConvertor($scope.planilla, "", true);
        }

        // JSON to CSV Converter
        $scope.ConvertToCSV = function (tabla) {
            var array = typeof tabla != 'object' ? JSON.parse(tabla) : tabla;
            var str = '';

            for (var i = 0; i < array.length; i++) {
                var line = '';
                for (var index in array[i]) {
                    if (line != '') line += ';'

                    line += array[i][index];
                }

                str += line + '\r\n';
            }
            $scope.resultcvs = str;
        }

        // Example


        // Create Object
        var items = [
            { name: "Item 1", color: "Green", size: "X-Large" },
            { name: "Item 2", color: "Green", size: "X-Large" },
            { name: "Item 3", color: "Green", size: "X-Large" }];

        // Convert Object to JSON
        var jsonObject = JSON.stringify(items);

    }
    function Presion_Presupuestal_Controller($scope, $q, Service, Auth, $timeout,ssDate) {
        $scope.json2 = {};
        $scope.json = {};
        $scope.tabla = [];
        $scope.sh_add = true;
        $scope.key2 = { value: '' };
        $scope.key3 = { value: '' };
        $scope.key5 = { value: '' };
        $scope.openWaiting = true;
        $scope.usuario = Auth.getUserObj().nombre_usuario;
        $scope.json.fecha = ssDate.dateToString(new Date(), 'dd-MM-yyyy');
        $scope.myArr = $scope.json.fecha.split("-");
        $scope.anio = $scope.myArr[2];
        console.log($scope.anio);


        /*BARRA*/
        $scope.showbtn = { buscar: true, imprimir: false, nuevo: true, editar: false, eliminar: false, cerrar: false };
        $scope.disabledbtn = { buscar: false, imprimir: false, nuevo: false, editar: true, eliminar: true };

        $scope.nuevo = function () {

            $scope.json2 = {};
            $scope.json = {};
            $scope.tabla = [];
            $scope.key2 = { value: '' };
            $scope.key3 = { value: '' };
            $scope.json.fecha = "";
            $scope.json.usuario = "";

            $timeout(function () {
                $scope.json.usuario = Auth.getUserObj().nombre_usuario;
                $scope.json.fecha = new Date();
            });
        }

        $scope.cancelar = function () {
            $scope.json2 = {};
            $scope.json = {};
            $scope.tabla = [];
            $scope.key2 = { value: '' };
            $scope.key3 = { value: '' };
            $scope.json.fecha = "";
            $scope.json.usuario = "";
        }

        $scope.guardar = function () {

            var defender = $q.defer();
            var promise = defender.promise;
            if (!$scope.presion_presu.$valid) {
                var cr = "Campos requeridos no diligenciados:";
                $scope.presion_presu.$error.required.forEach(function (item, index) {
                    cr += "\n - " + item.$name;
                });
                alert(cr);
                defender.resolve(false);
                return promise;
            } else {
                if ($scope.tabla.length > 0) {
                    $timeout(function () {
                        try {
                            var rs = false;
                            Service.getCrud({ json: angular.toJson($scope.json), tabla: angular.toJson($scope.tabla) }, '/Servicios.svc/create_presion').then(function (d) {
                                rs = JSON.parse(d.data);
                                defender.resolve(rs[0] > 0);
                                alert("GUARDADO EXITOSO CONSECUTIVO " + rs[1]);
                            });
                        } catch (e) {
                            defender.reject(e);
                        }
                    });
                } else {
                    alert("DEBE INGRESAR AL MENOS UNA PRESION");
                }
            }
            return promise;
        };

        /*CONFIG BUSQUEDA RAPIDA*/
        $scope.dataPresupuesto = {
            id: 'buscadorNombre',
            component: [{ id: 'brNombre', type: '' }],
            table: 'presupuesto',
            column: [
                { name: 'rtrim(ltrim(id))', as: 'Id', visible: false },
                { name: 'rtrim(ltrim(cuenta))', as: 'Cuenta', visible: true },
                { name: 'rtrim(ltrim(rubro))', as: 'Rubro', visible: true },
                { name: 'rtrim(ltrim(ccosto))', as: 'CECO', visible: true },
                { name: 'rtrim(ltrim(total_presupuesto))', as: 'Total_Presupuesto', visible: true },
                { name: 'rtrim(ltrim(disponibilidad))', as: 'Disponibilidad', visible: true },
                { name: 'rtrim(ltrim(ano))', as: 'Año', visible: true },
                { name: 'rtrim(ltrim(id))', as: 'ID', visible: true }
            ],
            where: {},
            groupby: true,
            orderby: [],
            title: 'Buscar Presupuesto',
            required: true
        };
        $scope.rsPresupuesto = function (d) {
            var x = JSON.parse(d);
            $scope.message = false;
            $scope.json.id_presupuesto = x.Id;
            $scope.json.cuenta = x.Cuenta;
            $scope.json.rubro = x.Rubro;
            $scope.json.ccosto = x.CECO;
            $scope.json.total_presupuesto = parseFloat(x.Total_Presupuesto);
            $scope.valor_ant = parseFloat(x.Disponibilidad);
            $scope.json.id = x.ID;
            $scope.json.ano = x.Año;
        }



        //BUSCADOR DE PRESIONES REALIZADAS

        $scope.datapresion = {
            id: 'dataBuscador',
            component: [{ id: 'pedidos-buscar', type: 'btn' }],
            table: 'pedidos',
            column: [
                { name: 'id', as: 'id', visible: false },
                { name: 'nro_pedido', as: 'Nro_pedido', visible: true },
                { name: 'fecha', as: 'Fecha', visible: true },
                { name: 'vlr_total', as: 'Total', visible: true }
            ],
            where: [{ col: "pedidos.usuario", filter: "='" + $scope.usuario + "'", join: '' }],
            groupby: false,
            orderby: [],
            title: 'Busqueda de Pedidos'
        };
        $scope.rspresion = function (v) {
            $scope.id = JSON.parse(v).id;
            if ($scope.id != '' && $scope.id != null) {
                Service.getCrud({ id: parseInt($scope.id) }, "/Servicios.svc/ReadPedido").then(function (d) {
                    var rs = JSON.parse(d.data);
                    console.log(rs);
                    $scope.json = rs[0];
                    $scope.json.fecha = ssDate.militodate(rs[0].fecha);
                    $scope.tabla = rs[1];
                    $scope.sh_add = false;
                    $scope.sh_update = false;
                    $scope.sh_edit = false;
                    $scope.key2.value = rs[0].ccosto;
                    $scope.key3.value = rs[0].proveedor;
                    $scope.showbtn.imprimir = true;
                });
            }
        };



        $("#articulo").keydown(function (event) {
            console.log("entrooo")
            if (event.which == 113) {
                console.log("entrooo2")
                document.getElementById("buscar_pro").click(); // Click on the checkbox
            }
        });

        /*OBJETO PARA ENTREGA*/
        $scope.dataBuscador_objeto = {
            id: 'buscadorobject',
            component: [{ id: 'articulo', type: 'btn' }],
            table: 'presupuesto',
            column: [
                { name: 'rtrim(ltrim(id))', as: 'id', visible: false },
                { name: 'rtrim(ltrim(ccosto))', as: 'Ceco', visible: true },
                { name: 'rtrim(ltrim(cuenta))', as: 'Cuenta', visible: true },
                { name: 'rtrim(ltrim(rubro))', as: 'Rubro', visible: true },
                { name: 'rtrim(ltrim(ano))', as: 'Ano', visible: true },
                { name: 'CONVERT(numeric(38,0), disponibilidad)', as: 'Disponible', visible: true },
            ],
            where: [{ col: "ano", filter: "='" + $scope.anio + "'", join: '' }],
            orderby: [],
            groupby: false,
            title: 'BUSCAR PRESUPUESTO',

        };
        $scope.resultado_objeto = function (d) {
            var j = JSON.parse(d);
            $scope.json2.ccosto = j.Ceco;
            $scope.json2.cuenta = j.Cuenta;
            $scope.json2.rubro = j.Rubro;
            $scope.json2.ano = j.Ano;
            $scope.json2.id_presupuesto = j.id;
            $scope.json2.disponible = j.Disponible;
        }

        //FUNCIONES DE LA TABLA

        $scope.add = function () {
            if ($scope.json2.ccosto != undefined && $scope.json2.ccosto != "") {
                    if ($scope.json2.valor != undefined && $scope.json2.valor != "" && $scope.json2.valor > 0) {
                        $scope.tabla.push($scope.json2);
                        $scope.json2 = {};
                        $scope.calcular_total();
                    } else {
                        alert("DEBE INGRESAR UN VALOR VALIDO");
                    }
            } else {
                alert("DEBE SELECCIONAR UN CENTROD DE COSTO");
            }
        }

        $scope.deleteGrilla = function (index) {
            $scope.tabla.splice(index, 1);
            $scope.calcular_total();
        }

        $scope.calcular_total = function () {
            console.log("entroooo");
            $scope.json.vlr_total = 0;
            $scope.tabla.forEach(function (item, index) {
                console.log(item);
                $scope.json.vlr_total += item.valor;
            })
        }

        $scope.formatnumber = function (num) {
            //var num = input.value.replace(/\./g, '');
            if (!isNaN(num)) {
                num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
                num = num.split('').reverse().join('').replace(/^[\.]/, '');
                return '$' + num;
            }
        }


        /*CONFIG BUSQUEDA RAPIDA CCOSTO*/
        $scope.dataccosto = {
            id: 'buscadorccosto',
            component: [{ id: 'brCosto', type: '' }],
            table: 'area_ccosto',
            column: [
                { name: 'rtrim(ltrim(ccosto))', as: 'Ccosto', visible: true },
                { name: 'rtrim(ltrim(area))', as: 'Area', visible: true }
            ],
            where: {},
            groupby: true,
            orderby: [],
            title: 'BUSCAR CENTRO DE COSTO',
            required_name: "CENTRO DE COSTO"
        };
        $scope.rsccosto = function (d) {
            var j = JSON.parse(d);
            $scope.json.dependencia = j.Area;
        }


    }
    function Solicitud_Presion_Presupuestal_Controller($scope, $q, Service, Auth, $timeout, ssDate) {
        $scope.json2 = {};
        $scope.json = {};
        $scope.tabla = [];
        $scope.sh_add = true;
        $scope.key2 = { value: '' };
        $scope.key3 = { value: '' };
        $scope.key5 = { value: '' };
        $scope.openWaiting = true;
        $scope.usuario = Auth.getUserObj().nombre_usuario;
        $scope.json.fecha = ssDate.dateToString(new Date(), 'dd-MM-yyyy');
        $scope.myArr = $scope.json.fecha.split("-");
        $scope.anio = $scope.myArr[2];
        console.log($scope.anio);


        /*BARRA*/
        $scope.showbtn = { buscar: true, imprimir: false, nuevo: true, editar: false, eliminar: false, cerrar: false };
        $scope.disabledbtn = { buscar: false, imprimir: false, nuevo: false, editar: true, eliminar: true };

        $scope.nuevo = function () {

            $scope.json2 = {};
            $scope.json = {};
            $scope.tabla = [];
            $scope.key2 = { value: '' };
            $scope.key3 = { value: '' };
            $scope.json.fecha = "";
            $scope.json.usuario = "";

            $timeout(function () {
                $scope.json.usuario = Auth.getUserObj().nombre_usuario;
                $scope.json.fecha = new Date();
            });
        }

        $scope.cancelar = function () {
            $scope.json2 = {};
            $scope.json = {};
            $scope.tabla = [];
            $scope.key2 = { value: '' };
            $scope.key3 = { value: '' };
            $scope.json.fecha = "";
            $scope.json.usuario = "";
        }

        $scope.guardar = function () {

            var defender = $q.defer();
            var promise = defender.promise;
            if (!$scope.presion_presu.$valid) {
                var cr = "Campos requeridos no diligenciados:";
                $scope.presion_presu.$error.required.forEach(function (item, index) {
                    cr += "\n - " + item.$name;
                });
                alert(cr);
                defender.resolve(false);
                return promise;
            } else {
                if ($scope.tabla.length > 0) {
                    $timeout(function () {
                        try {
                            var rs = false;
                            Service.getCrud({ json: angular.toJson($scope.json), tabla: angular.toJson($scope.tabla) }, '/Servicios.svc/Solicitud_create_presion').then(function (d) {
                                rs = JSON.parse(d.data);
                                defender.resolve(rs[0] > 0);
                                alert("GUARDADO EXITOSO CONSECUTIVO " + rs[1]);
                            });
                        } catch (e) {
                            defender.reject(e);
                        }
                    });
                } else {
                    alert("DEBE INGRESAR AL MENOS UNA PRESION");
                }
            }
            return promise;
        };

        /*CONFIG BUSQUEDA RAPIDA*/
        $scope.dataPresupuesto = {
            id: 'buscadorNombre',
            component: [{ id: 'brNombre', type: '' }],
            table: 'presupuesto',
            column: [
                { name: 'rtrim(ltrim(id))', as: 'Id', visible: false },
                { name: 'rtrim(ltrim(cuenta))', as: 'Cuenta', visible: true },
                { name: 'rtrim(ltrim(rubro))', as: 'Rubro', visible: true },
                { name: 'rtrim(ltrim(ccosto))', as: 'CECO', visible: true },
                { name: 'rtrim(ltrim(total_presupuesto))', as: 'Total_Presupuesto', visible: true },
                { name: 'rtrim(ltrim(disponibilidad))', as: 'Disponibilidad', visible: true },
                { name: 'rtrim(ltrim(ano))', as: 'Año', visible: true },
                { name: 'rtrim(ltrim(id))', as: 'ID', visible: true }
            ],
            where: {},
            groupby: true,
            orderby: [],
            title: 'Buscar Presupuesto',
            required: true
        };
        $scope.rsPresupuesto = function (d) {
            var x = JSON.parse(d);
            $scope.message = false;
            $scope.json.id_presupuesto = x.Id;
            $scope.json.cuenta = x.Cuenta;
            $scope.json.rubro = x.Rubro;
            $scope.json.ccosto = x.CECO;
            $scope.json.total_presupuesto = parseFloat(x.Total_Presupuesto);
            $scope.valor_ant = parseFloat(x.Disponibilidad);
            $scope.json.id = x.ID;
            $scope.json.ano = x.Año;
        }



        //BUSCADOR DE PRESIONES REALIZADAS

        $scope.datapresion = {
            id: 'dataBuscador',
            component: [{ id: 'pedidos-buscar', type: 'btn' }],
            table: 'pedidos',
            column: [
                { name: 'id', as: 'id', visible: false },
                { name: 'nro_pedido', as: 'Nro_pedido', visible: true },
                { name: 'fecha', as: 'Fecha', visible: true },
                { name: 'vlr_total', as: 'Total', visible: true }
            ],
            where: [{ col: "pedidos.usuario", filter: "='" + $scope.usuario + "'", join: '' }],
            groupby: false,
            orderby: [],
            title: 'Busqueda de Pedidos'
        };
        $scope.rspresion = function (v) {
            $scope.id = JSON.parse(v).id;
            if ($scope.id != '' && $scope.id != null) {
                Service.getCrud({ id: parseInt($scope.id) }, "/Servicios.svc/ReadPresion").then(function (d) {
                    var rs = JSON.parse(d.data);
                    console.log(rs);
                    $scope.json = rs[0];
                    $scope.json.fecha = ssDate.militodate(rs[0].fecha);
                    $scope.tabla = rs[1];
                    $scope.sh_add = false;
                    $scope.sh_update = false;
                    $scope.sh_edit = false;
                    $scope.key2.value = rs[0].dependencia;
                    $scope.key3.value = rs[0].dependencia;
                    $scope.showbtn.imprimir = true;
                });
            }
        };



        $("#articulo").keydown(function (event) {
            console.log("entrooo")
            if (event.which == 113) {
                console.log("entrooo2")
                document.getElementById("buscar_pro").click(); // Click on the checkbox
            }
        });

        /*OBJETO PARA ENTREGA*/
        $scope.dataBuscador_objeto = {
            id: 'buscadorobject',
            component: [{ id: 'articulo', type: 'btn' }],
            table: 'presupuesto',
            column: [
                { name: 'rtrim(ltrim(id))', as: 'id', visible: false },
                { name: 'rtrim(ltrim(ccosto))', as: 'Ceco', visible: true },
                { name: 'rtrim(ltrim(cuenta))', as: 'Cuenta', visible: true },
                { name: 'rtrim(ltrim(rubro))', as: 'Rubro', visible: true },
                { name: 'rtrim(ltrim(ano))', as: 'Ano', visible: true },
                { name: 'CONVERT(numeric(38,0), disponibilidad)', as: 'Disponible', visible: true },
            ],
            where: [{ col: "ano", filter: "='" + $scope.anio + "'", join: '' }],
            orderby: [],
            groupby: false,
            title: 'BUSCAR PRESUPUESTO',

        };
        $scope.resultado_objeto = function (d) {
            var j = JSON.parse(d);
            $scope.json2.ccosto = j.Ceco;
            $scope.json2.cuenta = j.Cuenta;
            $scope.json2.rubro = j.Rubro;
            $scope.json2.ano = j.Ano;
            $scope.json2.id_presupuesto = j.id;
            $scope.json2.disponible = j.Disponible;
        }

        //FUNCIONES DE LA TABLA

        $scope.add = function () {
            if ($scope.json2.ccosto != undefined && $scope.json2.ccosto != "") {
                if ($scope.json2.valor != undefined && $scope.json2.valor != "" && $scope.json2.valor > 0) {
                    $scope.tabla.push($scope.json2);
                    $scope.json2 = {};
                    $scope.calcular_total();
                } else {
                    alert("DEBE INGRESAR UN VALOR VALIDO");
                }
            } else {
                alert("DEBE SELECCIONAR UN CENTROD DE COSTO");
            }
        }

        $scope.deleteGrilla = function (index) {
            $scope.tabla.splice(index, 1);
            $scope.calcular_total();
        }

        $scope.calcular_total = function () {
            console.log("entroooo");
            $scope.json.vlr_total = 0;
            $scope.tabla.forEach(function (item, index) {
                console.log(item);
                $scope.json.vlr_total += item.valor;
            })
        }

        $scope.formatnumber = function (num) {
            //var num = input.value.replace(/\./g, '');
            if (!isNaN(num)) {
                num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
                num = num.split('').reverse().join('').replace(/^[\.]/, '');
                return '$' + num;
            }
        }


        /*CONFIG BUSQUEDA RAPIDA CCOSTO*/
        $scope.dataccosto = {
            id: 'buscadorccosto',
            component: [{ id: 'brCosto', type: '' }],
            table: 'area_ccosto',
            column: [
                { name: 'rtrim(ltrim(ccosto))', as: 'Ccosto', visible: true },
                { name: 'rtrim(ltrim(area))', as: 'Area', visible: true }
            ],
            where: {},
            groupby: true,
            orderby: [],
            title: 'BUSCAR CENTRO DE COSTO',
            required_name: "CENTRO DE COSTO"
        };
        $scope.rsccosto = function (d) {
            var j = JSON.parse(d);
            $scope.json.dependencia = j.Area;
        }


    }
    function Traslado_Presupuestal_Controller($scope, $q, Service, Auth, $timeout, ssDate) {
        $scope.json2 = {};
        $scope.json = {};
        $scope.tabla = [];
        $scope.sh_add = true;
        $scope.key2 = { value: '' };
        $scope.key3 = { value: '' };
        $scope.key5 = { value: '' };
        $scope.openWaiting = true;
        $scope.usuario = Auth.getUserObj().nombre_usuario;
        $scope.fecha = ssDate.dateToString(new Date(), 'dd-MM-yyyy');
        $scope.myArr = $scope.fecha.split("-");
        $scope.anio = $scope.myArr[2];
        console.log($scope.anio);


        /*BARRA*/
        $scope.showbtn = { buscar: true, imprimir: false, nuevo: true, editar: false, eliminar: false, cerrar: false };
        $scope.disabledbtn = { buscar: false, imprimir: false, nuevo: false, editar: true, eliminar: true };

        $scope.nuevo = function () {

            $scope.json2 = {};
            $scope.json = {};
            $scope.tabla = [];
            $scope.key2 = { value: '' };
            $scope.key3 = { value: '' };
            $scope.json.fecha = "";
            $scope.json.usuario = "";

            $timeout(function () {
                $scope.json.usuario = Auth.getUserObj().nombre_usuario;
                $scope.json.fecha = new Date();
            });
        }

        $scope.cancelar = function () {
            $scope.json2 = {};
            $scope.json = {};
            $scope.tabla = [];
            $scope.key2 = { value: '' };
            $scope.key3 = { value: '' };
            $scope.json.fecha = "";
            $scope.json.usuario = "";
        }

        $scope.guardar = function () {

            var defender = $q.defer();
            var promise = defender.promise;
            if (!$scope.traslado_controller.$valid) {
                var cr = "Campos requeridos no diligenciados:";
                $scope.traslado_controller.$error.required.forEach(function (item, index) {
                    cr += "\n - " + item.$name;
                });
                alert(cr);
                defender.resolve(false);
                return promise;
            } else {
                if ($scope.tabla.length > 0) {
                    $timeout(function () {
                        try {
                            var rs = false;
                            Service.getCrud({ json: angular.toJson($scope.json), json2: angular.toJson($scope.tabla) }, '/Servicios.svc/create_traslado2').then(function (d) {
                                rs = JSON.parse(d.data);
                                defender.resolve(rs[0] > 0);
                                alert("GUARDADO EXITOSO CONSECUTIVO " + rs[1]);

                            });
                        } catch (e) {
                            defender.reject(e);
                        }
                    });
                } else {
                    alert("DEBE INGRESAR AL MENOS UN ARTICULO EN EL PEDIDO");
                }
            }
            return promise;
        };

        /*CONFIG BUSQUEDA RAPIDA*/
        $scope.dataPresupuesto = {
            id: 'buscadorNombre',
            component: [{ id: 'brNombre', type: '' }],
            table: 'presupuesto',
            column: [
                { name: 'rtrim(ltrim(cuenta))', as: 'Cuenta', visible: true },
                { name: 'rtrim(ltrim(rubro))', as: 'Rubro', visible: true },
                { name: 'rtrim(ltrim(ccosto))', as: 'CECO', visible: true },
                { name: 'rtrim(ltrim(total_presupuesto))', as: 'Total_Presupuesto', visible: true },
                { name: 'rtrim(ltrim(disponibilidad))', as: 'Disponibilidad', visible: true },
                { name: 'rtrim(ltrim(ano))', as: 'Año', visible: true },
                { name: 'rtrim(ltrim(id))', as: 'ID', visible: true }
            ],
            where: {},
            groupby: true,
            orderby: [],
            title: 'Buscar Presupuesto',
            required: true
        };
        $scope.rsPresupuesto = function (d) {
            var x = JSON.parse(d);
            $scope.message = false;
            $scope.json.cuenta = x.Cuenta;
            $scope.json.rubro = x.Rubro;
            $scope.json.ccosto = x.CECO;
            $scope.json.total_presupuesto = parseFloat(x.Total_Presupuesto);
            $scope.valor_ant = parseFloat(x.Disponibilidad);
            $scope.json.id = x.ID;
            $scope.json.ano = x.Año;
        }



        //BUSCADOR DE PRESIONES REALIZADAS

        $scope.datapresion = {
            id: 'dataBuscador',
            component: [{ id: 'pedidos-buscar', type: 'btn' }],
            table: 'pedidos',
            column: [
                { name: 'id', as: 'id', visible: false },
                { name: 'nro_pedido', as: 'Nro_pedido', visible: true },
                { name: 'fecha', as: 'Fecha', visible: true },
                { name: 'vlr_total', as: 'Total', visible: true }
            ],
            where: [{ col: "pedidos.usuario", filter: "='" + $scope.usuario + "'", join: '' }],
            groupby: false,
            orderby: [],
            title: 'Busqueda de Pedidos'
        };
        $scope.rspresion = function (v) {
            $scope.id = JSON.parse(v).id;
            if ($scope.id != '' && $scope.id != null) {
                Service.getCrud({ id: parseInt($scope.id) }, "/Servicios.svc/ReadPedido").then(function (d) {
                    var rs = JSON.parse(d.data);
                    console.log(rs);
                    $scope.json = rs[0];
                    $scope.json.fecha = ssDate.militodate(rs[0].fecha);
                    $scope.tabla = rs[1];
                    $scope.sh_add = false;
                    $scope.sh_update = false;
                    $scope.sh_edit = false;
                    $scope.key2.value = rs[0].ccosto;
                    $scope.key3.value = rs[0].proveedor;
                    $scope.showbtn.imprimir = true;
                });
            }
        };



        $("#articulo").keydown(function (event) {
            console.log("entrooo")
            if (event.which == 113) {
                console.log("entrooo2")
                document.getElementById("buscar_pro").click(); // Click on the checkbox
            }
        });

        $("#ccostofin").keydown(function (event) {
            console.log("entrooo")
            if (event.which == 113) {
                console.log("entrooo2")
                document.getElementById("buscar_pro").click(); // Click on the checkbox
            }
        });

        /*PRESUPUESTO INICIAL*/
        $scope.dataBuscador_objeto = {
            id: 'buscadorobject',
            component: [{ id: 'articulo', type: 'btn' }],
            table: 'presupuesto',
            column: [
                { name: 'rtrim(ltrim(id))', as: 'id', visible: false },
                { name: 'rtrim(ltrim(ccosto))', as: 'Ceco', visible: true },
                { name: 'rtrim(ltrim(cuenta))', as: 'Cuenta', visible: true },
                { name: 'rtrim(ltrim(rubro))', as: 'Rubro', visible: true },
                { name: 'rtrim(ltrim(ano))', as: 'Ano', visible: true },
                { name: 'CONVERT(numeric(38,0), disponibilidad)', as: 'Disponible', visible: true },
            ],
            where: [{ col: "ano", filter: "='" + $scope.anio + "'", join: '' }],
            orderby: [],
            groupby: false,
            title: 'BUSCAR PRESUPUESTO INICIAL',

        };
        $scope.resultado_objeto = function (d) {
            var j = JSON.parse(d);
            $scope.json2.ccosto_ini = j.Ceco;
            $scope.json2.cuenta_ini = j.Cuenta;
            $scope.json2.rubro_ini = j.Rubro;
            $scope.json2.ano_ini = j.Ano;
            $scope.json2.disponible_ini = parseInt(j.Disponible);
            $scope.json2.id_presu_ini = j.id;

        }

        /*PRESUPUESTO FINAL*/
        $scope.dataPresupuesto_fin = {
            id: 'buscadorpresupuestofin',
            component: [{ id: 'ccostofin', type: 'btn' }],
            table: 'presupuesto',
            column: [
                { name: 'rtrim(ltrim(id))', as: 'id', visible: false },
                { name: 'rtrim(ltrim(ccosto))', as: 'Ceco', visible: true },
                { name: 'rtrim(ltrim(cuenta))', as: 'Cuenta', visible: true },
                { name: 'rtrim(ltrim(rubro))', as: 'Rubro', visible: true },
                { name: 'rtrim(ltrim(ano))', as: 'Ano', visible: true },
                { name: 'CONVERT(numeric(38,0), disponibilidad)', as: 'Disponible', visible: true },
            ],
            where: [{ col: "ano", filter: "='" + $scope.anio + "'", join: '' }],
            orderby: [],
            groupby: false,
            title: 'BUSCAR PRESUPUESTO FINAL',

        };
        $scope.rsPresupuesto_fin = function (d) {
            var j = JSON.parse(d);
            $scope.json2.ccosto_fin = j.Ceco;
            $scope.json2.cuenta_fin = j.Cuenta;
            $scope.json2.rubro_fin = j.Rubro;
            $scope.json2.ano_fin = j.Ano;
            $scope.json2.disponible_fin = parseInt(j.Disponible);
            $scope.json2.id_presu_fin = j.id;

        }

        //FUNCIONES DE LA TABLA

        $scope.add = function () {
            if ($scope.json2.ccosto_ini != undefined && $scope.json2.ccosto_ini != "" && $scope.json2.ccosto_fin != undefined && $scope.json2.ccosto_fin != "" ) {
                if ($scope.json2.valor_traslado != undefined && $scope.json2.valor_traslado != "" && $scope.json2.valor_traslado > 0 && $scope.json2.valor_traslado < $scope.json2.disponible_ini) {
                    $scope.tabla.push($scope.json2);
                    $scope.json2 = {};
                } else {
                    alert("DEBE SELECCIONAR UN SALDO DISPONIBLE VALIDO");
                }
            } else {
                alert("DEBE COMPLETAR TODOS LOS CAMPOS");
            }
        }

        $scope.deleteGrilla = function (index) {
            $scope.tabla.splice(index, 1);
            $scope.calcular_total();
        }

        $scope.calcular_total = function () {
            console.log("entroooo");
            $scope.json.vlr_total = 0;
            $scope.tabla.forEach(function (item, index) {
                console.log(item);
                $scope.json.vlr_total += item.valor;
            })
        }

        $scope.formatnumber = function (num) {
            //var num = input.value.replace(/\./g, '');
            if (!isNaN(num)) {
                num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
                num = num.split('').reverse().join('').replace(/^[\.]/, '');
                return '$' + num;
            }
        }


        /*CONFIG BUSQUEDA RAPIDA CCOSTO*/
        $scope.dataccosto = {
            id: 'buscadorccosto',
            component: [{ id: 'brCosto', type: '' }],
            table: 'area_ccosto',
            column: [
                { name: 'rtrim(ltrim(ccosto))', as: 'Ccosto', visible: true },
                { name: 'rtrim(ltrim(area))', as: 'Area', visible: true }
            ],
            where: {},
            groupby: true,
            orderby: [],
            title: 'BUSCAR CENTRO DE COSTO',
            required_name: "CENTRO DE COSTO"
        };
        $scope.rsccosto = function (d) {
            var j = JSON.parse(d);
            $scope.json.ccosto = j.Ccosto;
            $scope.json.name_ceco = j.Area;
        }


    }
    function ReportepedidoDetallado_Controller($scope, $q, Service, Auth, $timeout, ssDate) {
            
        $scope.json = {};
        $scope.openWaiting = false;
      
        $scope.buscar_pedidos = function () {
            $scope.json = {};
            if ($scope.fecha_inicio != undefined && $scope.fecha_fin) {
                var fechaini = ssDate.dateToString($scope.fecha_inicio, 'yyyy-MM-dd');
                var fechafin = ssDate.dateToString($scope.fecha_fin, 'yyyy-MM-dd');
                $scope.query = "select p.nro_pedido as numero,pr.razon_social,p.nro_contrato,p.ccosto,dp.codigo_art,dp.descripcion,dp.cantidad,dp.valor,dp.total, CONVERT(varchar, p.fecha, 103) as fecha, p.usuario, dp.cuenta, p.vlr_total, p.asignado_a, p.estado from pedidos p inner join detalle_pedido dp ON p.nro_pedido = dp.id_pedido inner join(SELECT DISTINCT(nit), razon_social from proveedor where estado = 2) as pr on pr.nit = p.proveedor where p.fecha BETWEEN '" + fechaini + "' AND '" + fechafin + "' and p.estado<>'CANCELADO'"

              /*  $scope.query = "select p.nro_pedido as numero,pr.razon_social,p.nro_contrato,p.ccosto,dp.codigo_art,dp.descripcion,dp.cantidad,dp.valor,dp.total,CONVERT(varchar,p.fecha,103) as fecha,p.usuario,dp.cuenta,p.vlr_total,p.asignado_a ,p.estado from pedidos p inner join detalle_pedido dp ON p.nro_pedido=dp.id_pedido inner join proveedor pr on pr.nit=p.proveedor where p.fecha BETWEEN '" + fechaini + "' AND '" + fechafin + "' and p.estado<>'CANCELADO'"*/
                console.log($scope.query);
                Service.getCrud({ query: $scope.query }, "/Servicios.svc/consulta").then(function (d) {
                    var rs = JSON.parse(d.data);
                    if (rs.length == 0) {
                        $scope.openWaiting = false;
                        alert("NO SE ENCONTRARON REGISTROS EN LA BASE DE DATOS");
                        
                       
                    } else {
                        $scope.grilla = [];
                        $scope.grilla = rs;
                        $scope.grilla.forEach(function (item, index) {
                            if (item.fecha != null) {
                                item.fecha = convert(item.fecha);
                            }
                        });

                    }
                });
            } else {
                alert("DEBE SELECCIONAR UN RANGO DE FECHAS");
            }
            
            $scope.convert = function (x) {
                var aux = ssDate.militodate(x);
                alert(aux);
                return ssDate.dateToString(aux, 'dd-MM-yyyy');
            }

            $scope.formatnumber = function (num) {
                //var num = input.value.replace(/\./g, '');
                if (!isNaN(num)) {
                    num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
                    num = num.split('').reverse().join('').replace(/^[\.]/, '');
                    return '$' + num;
                }
            }
            
         

            }


           // $scope.buscar_report();            
            


        /**
        excel
         */
        $scope.JSONToCSVConvertor = function (JSONData, ReportTitle, ShowLabel) {

            //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
            var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;

            var CSV = '';
            //Set Report title in first row or line

            CSV += ReportTitle + '\r\n\n';

            //This condition will generate the Label/Header
            if (ShowLabel) {
                var row = "";

                //This loop will extract the label from 1st index of on array
                for (var index in arrData[0]) {

                    //Now convert each value to string and comma-seprated
                    row += index + ';';
                }

                row = row.slice(0, -1);

                //append Label row with line break
                CSV += row + '\r\n';
            }

            //1st loop is to extract each row
            for (var i = 0; i < arrData.length; i++) {
                var row2 = "";

                //2nd loop will extract each column and convert it in string comma-seprated
                for (var index1 in arrData[i]) {
                    row2 += '"' + arrData[i][index1] + '";';
                }

                row2.slice(0, row2.length - 1);

                //add a line break after each row
                CSV += row2 + '\r\n';
            }

            if (CSV == '') {
                alert("Invalid data");
                return;
            }
            //FECHA ACTUAL
            var fecha = ssDate.dateToString(Date.now(), 'yyyy-MM-dd');

            //Generate a file name
            var fileName = "Descarga_" + fecha;
            //this will remove the blank-spaces from the title and replace it with an underscore
            fileName += ReportTitle.replace(/ /g, "_");

            //Initialize file format you want csv or xls
            var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);

            // Now the little tricky part.
            // you can use either>> window.open(uri);
            // but this will not work in some browsers
            // or you will not get the correct file extension    

            //this trick will generate a temp <a /> tag
            var link = document.createElement("a");
            link.href = uri;

            //set the visibility hidden so it will not effect on your web-layout
            link.style = "visibility:true";
            link.download = fileName + ".csv";

            //this part will append the anchor tag and remove it after automatic click
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        $scope.fnExcelReport = function () {
            $scope.JSONToCSVConvertor($scope.grilla, "REPORTE PEDIDOS DETALLADO", true);
        }

        // JSON to CSV Converter
        $scope.ConvertToCSV = function (tabla) {
            var array = typeof tabla != 'object' ? JSON.parse(tabla) : tabla;
            var str = '';

            for (var i = 0; i < array.length; i++) {
                var line = '';
                for (var index in array[i]) {
                    if (line != '') line += ';'

                    line += array[i][index];
                }

                str += line + '\r\n';
            }
            $scope.resultcvs = str;
        }

        // Example


        // Create Object
        var items = [
            { name: "Item 1", color: "Green", size: "X-Large" },
            { name: "Item 2", color: "Green", size: "X-Large" },
            { name: "Item 3", color: "Green", size: "X-Large" }];

        // Convert Object to JSON
        var jsonObject = JSON.stringify(items);


    }


    //***************************FUNCION PROVEEDOR JSEQUEA******************************** */

    function ProveedorController($scope, $q, Service, Auth, $timeout) {
        $scope.json = {};
        $scope.msj = '';
        $scope.cod_user = Auth.getUserObj().codigo;
        $scope.log_user = Auth.getUserObj().username;
        $scope.key = { value: '' };
        $scope.openWaiting = false;

        /*CONFIG BUSQUEDA RAPIDA*/
        $scope.nuevo = function () {
            $scope.json = {};
            $scope.json.id = ' ';

            Service.getCrud({}, "/Servicios.svc/PreloadProveedores").then(function (d) {
                $scope.proveedor = JSON.parse(d.data)[0];
    
            });
        }

        /*BARRA*/
        $scope.showbtn = { buscar: true, imprimir: false, nuevo: true, editar: true, eliminar: true, cerrar: false };
            $scope.disabledbtn = { buscar: false, imprimir: true, nuevo: false, editar: true, eliminar: true };

        /*CRUD*/
        $scope.guardar = function () {
            var defender = $q.defer();
            var promise = defender.promise;
            // if (!$scope.proveedor.$valid) {
            //     var cr = "Campos requeridos no diligenciados:";
            //     $scope.proveedor.$error.required.forEach(function (item, index) {
            //         cr += "\n - " + item.$name;
            //     });
            //     alert(cr);
            //     defender.resolve(false);
            //     return promise;
            // } else {
                $timeout(function () {
                    try {
                        var rs = false;
                        Service.getCrud({ json: angular.toJson($scope.json) }, '/Servicios.svc/CreateProveedores').then(function (d) {
                            rs = JSON.parse(d.data);
                            defender.resolve(rs);
                        });
                    } catch (e) {
                        defender.reject(e);
                    }


                });
            // }
            return promise;

        };
        $scope.actualizar = function () {
            var defender = $q.defer();
            var promise = defender.promise;
            // if (!$scope.proveedor.$valid) {
            //     var cr = "Campos requeridos no diligenciados";
            //     $scope.proveedor.$error.required.forEach(function (item, index) {
            //         cr += "\n - " + item.$name;
            //     });
            //     alert(cr);
            //     defender.resolve(false);
            //     return promise;
            // } else {
                $timeout(function () {
                    try {
                        var rs = false;
                        Service.getCrud({ json: angular.toJson($scope.json) }, "/Servicios.svc/UpdateProveedores").then(function (d) {
                            rs = JSON.parse(d.data);
                            defender.resolve(rs);

                        });
                    } catch (e) {

                        defender.reject(e);

                    }
                });
            //}
            return promise;
        };
        $scope.eliminar = function () {
            var defender = $q.defer();
            var promise = defender.promise;
            $timeout(function () {
                try {
                    var rs = false;
                    Service.getCrud({ id: parseInt($scope.id) }, "/Servicios.svc/DeleteProveedores").then(function (d) {
                        rs = JSON.parse(d.data);
                        defender.resolve(rs);
                    });
                } catch (e) {
                    defender.reject(e);
                }
            });
            return promise;
        };
        $scope.editar = function () {
            $("#id").prop("disabled", true);
            $("#nit").prop("disabled", true);
            $("#razon_social").prop("disabled", false);
            $("#representante_legal").prop("disabled", false);
            $("#tel").prop("disabled", false);
            $("#asesor").prop("disabled", false);
            $("#correo").prop("disabled", false);
            $("#contrato").prop("disabled", true);
        }

        $scope.Rsproveedor = function (v) {
            $scope.id = JSON.parse(v).id;
            if ($scope.id != '' && $scope.id != null) {
                Service.getCrud({ id: parseInt($scope.id) }, "/Servicios.svc/ReadProveedores").then(function (d) {
                    var rs = JSON.parse(d.data);
                    $scope.json = rs;
                    $scope.json.nit = parseInt(rs.nit);
                    $scope.json.proveedor = rs.proveedor;
                    $scope.key.value = rs.id;
                    console.log($scope.key.value);
                    $scope.disabledbtn.eliminar = false;
                    $scope.disabledbtn.editar = false;
                });
            }
        };

        $scope.dataproveedor = {
            id: 'dataBuscador',
            component: [{ id: 'proveedores-buscar', type: 'btn' }],
            table: 'proveedor',
            column: [
                { name: 'id', as: 'id', visible: false },
                { name: 'nit', as: 'Nit', visible: true },
                { name: 'razon_social', as: 'Razon', visible: true },
                { name: 'representante_legal', as: 'R_legal', visible: true },
                { name: 'tel', as: 'Telefono', visible: true },
                { name: 'asesor', as: 'asesor', visible: true },
                { name: 'correo', as: 'Correo', visible: true },
                { name: 'contrato', as: 'Contrato', visible: true },
                { name: 'Estado', as: 'Estado', visible: true },
                //{ name: 'cargo', as: 'Cargo', visible: false },

            ],
            where: [],
            groupby: false,
            orderby: [],
            title: 'Busqueda de Proveedores'
        };
        //$scope.dataEmpleado.where.push({ col: "usu_id", filter: "='" + $scope.json.usu_id + "'", join: '' });

        $scope.Validate_Proveedores = function () {
            if ($scope.json.nit != '' && $scope.json.nit != undefined) {
                Service.getCrud({ nit: $scope.json.nit }, "/Servicios.svc/ValidateProveedores").then(function (d) {
                    if (d.data == 'true') {
                        $scope.json.nit = '';
                        alert('El proveedor ya existe, por favor ingrese uno nuevo');
                    }
                });
            }
        }

        /*CONFIG BUSQUEDA RAPIDA*/
        $scope.dataNombre = {
            id: 'buscadorNombre',
            component: [{ id: 'brNombre', type: '' }],
            table: 'razon_social',
            column: [
                { name: 'rtrim(ltrim(nit))', as: 'Nit', visible: true },
                { name: 'rtrim(ltrim(razon_social))', as: 'Razon', visible: true }



            ],
            where: {},
            groupby: true,
            orderby: [],
            title: 'Buscar Nit',
            required: true
        };
        $scope.rsNombre = function (d) {
            var j = JSON.parse(d);
            $scope.json.nit = j.nit;
            $scope.json.razon_social = j.Razon;

        }


    }




})();

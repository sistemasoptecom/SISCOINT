(function () {
    'use strict';
    angular
    .module('Rhino')
    .controller('LoginController', ['$scope', 'Service', 'Auth', LoginController])
        .controller('HomeController', ['$scope', 'Auth', '$timeout', 'ssDate','Service', HomeController])
        .controller('Select_module', ['$scope', 'Auth','$location', Select_module])

    function LoginController($scope, Service, Auth) {
        $scope.Message = '';
        $scope.Submitted = false;
        $scope.IsFormValid = false;
        $scope.LoginData = { username: '', password: '' };
        $scope.LoginData.consecutivo = 16;
        $scope.$watch('f1.$valid', function (newVal) {
            $scope.IsFormValid = newVal;
        });
        $scope.dato = {};

        $scope.Login = function () {
            $scope.Submitted = true;
            if ($scope.IsFormValid) {
                $scope.Message1 = '';
                $scope.Message = '';
                $scope.Message1 = 'La informacion se  esta procesando, espere por favor...';
                //var dato = {};
                 Service.getCrud($scope.LoginData, "/Archivo.svc/Auth").then(function (d) {
                     var result = JSON.parse(d.data);
                     var rs = result[0];
                     if (result[1] == 1) {
                         if (rs.username != undefined) {
                             $scope.dato.nombre_usuario = (rs.nombre_usuario).trim();
                             $scope.dato.username = (rs.username).trim();
                             $scope.dato.codigo = (rs.codigo).trim();
                             $scope.dato.id = (rs.id);
                             $scope.dato.tipo_user = rs.id_tipo_usuario;
                             $scope.dato.area = rs.area;
                             $scope.dato.modulo = sessionStorage.Modulo;
                             Auth.Login($scope.dato);

                         } else if (rs.usuario1 == undefined || rs.usuario1 == '' || rs.usuario1 == null) {
                             $scope.Message = 'Usuario y contraseña incorrectos';
                             $scope.Message1 = '';
                         }
                     } else {
                         $scope.Message = 'DEBE BORRAR CACHE ANTES DE INGRESAR';
                         $scope.Message1 = '';
                     }
                 });
            } else {
                $scope.Message = 'Para iniciar sesion ingrese un usuario y contraseña';
                $scope.Message1 = '';
            }
        };

    }
    function Select_module($scope, Auth, $location) {
        $scope.validatemodule = function (x) {
            sessionStorage.setItem("Modulo", x);
            $location.path("/Login");
        }
    }
    function HomeController($scope, Auth, $timeout, ssDate, Service) {
        var UserObj = Auth.getUserObj();
        $scope.fecha = new Date();
        $timeout(function () {
            $('#menucerrar').click();
            currentButton.triggerHandler("click");
        });
        $timeout(function () {
            $('.side-nav-container > ul').slimscroll({
                height: '100% ',
                railVisible: true,
                alwaysVisible: true,
                railColor: '#222',
            });

            $('ul li a').click(function (event) {
                var sub_menu = $(this).parent().find('>ul');
                if ($(sub_menu).length > 0) {
                    event.preventDefault();
                    if (!$(this).hasClass('in')) {
                        $('ul li a').removeClass('in');
                        $(this).toggleClass('in');
                        $('ul li ul').removeClass('in');
                        $(sub_menu).toggleClass('in');
                    } else {
                        $('ul li a').removeClass('in');
                        $('ul li ul').removeClass('in');
                    }
                }
            });


        });  
        $scope.fecha = ssDate.dateToString($scope.fecha, 'dd/MM/yyyy');

              $scope.name_user = UserObj.usuario1;
              if (UserObj) {

                $scope.actualwindow = 'ssWindowDefault';
                $scope.LogOut = function () {
                    Auth.LogOut();
                }
                $scope.username = UserObj.username;

                  Service.getCrud({ usuario: $scope.username }, "/Servicios.svc/PreloadViews").then(function (d) {
                      $scope.mainMenu = {};
                      $scope.mainMenu = JSON.parse(d.data)[0];
                      console.log($scope.mainMenu);
                  });
                  ///*JSON menu*/
                  //$scope.getMenu = function () {
                  //    $scope.tipo_user = Auth.getUserObj().tipo_user;
                  //    $scope.modulo = Auth.getUserObj().area;
                  //    console.log($scope.tipo_user);
                  //    console.log($scope.modulo);
                  //    if ($scope.modulo == "SST") {
                  //        $scope.show_menu_Usuario = true;
                  //        $scope.show_menu_empleados = true;
                  //        $scope.show_menu_activos = false;
                  //        $scope.show_menu_entrega = false;
                  //        $scope.show_menu_reporte_activos = false;
                  //        $scope.show_menu_consumibles = false;
                  //        $scope.show_menu_reporte_consumibles = false;
                  //        $scope.show_menu_reporte_devoluciones = false;
                  //        $scope.show_menu_descuentos = false;
                  //        $scope.show_menu_hv_altura = true;
                  //        $scope.show_menu_inspec_alt = true;
                  //        $scope.show_menu_rep_equi_alt = true;
                  //    }
                  //    if ($scope.tipo_user == 1 && $scope.modulo != "SST") {
                  //        $scope.show_menu_Usuario = true;
                  //        $scope.show_menu_empleados = true;
                  //        $scope.show_menu_activos = true;
                  //        $scope.show_menu_entrega = true;
                  //        $scope.show_menu_reporte_activos = true;
                  //        $scope.show_menu_consumibles = true;
                  //        $scope.show_menu_reporte_consumibles = true;
                  //        $scope.show_menu_reporte_devoluciones = true;
                  //        $scope.show_menu_descuentos = true;
                  //        $scope.show_menu_ent_herr = true;
                  //        $scope.show_menu_entregaaprov = true;
                  //    } else {
                  //        //$scope.show_menu_Usuario = false;
                  //        $scope.show_menu_cliente = false;

                  //    }
                  //    $scope.menuPrincipal = [
                  //        //USUARIO
                  //        {
                  //            name_module: 'Usuario',
                  //            module: 'Gestion de Usuario',
                  //            icon: 'fa-user',
                  //            url: 'app/js/views/usuarios.html',
                  //            visible: $scope.show_menu_Usuario,
                  //        },
                  //        //Empleado
                  //        {
                  //            name_module: 'Empleado',
                  //            module: 'Gestion de empleado',
                  //            icon: 'fa-user-plus',
                  //            url: 'app/js/views/empleados.html',
                  //            visible: $scope.show_menu_empleados,
                  //        },
                  //        {
                  //            name_module: 'Entrada elementos',
                  //            module: 'Entrada',
                  //            icon: 'fa-mobile',
                  //            url: 'app/js/views/activofijos.html',
                  //            visible: $scope.show_menu_activos,
                  //        },
                  //        {
                  //            name_module: 'Gestionar Activos',
                  //            module: 'GESTIONAR ACTA DE ACTIVOS FIJOS',
                  //            icon: 'fa-book',
                  //            url: 'app/js/views/entrega.html',
                  //            visible: $scope.show_menu_entrega,
                  //        },
                  //        {
                  //            name_module: 'Reporte Activos',
                  //            module: 'REPORTES',
                  //            icon: 'fa-clipboard',
                  //            url: 'app/js/views/reporte_activos.html',
                  //            visible: $scope.show_menu_reporte_activos,
                  //        },
                  //        {
                  //            name_module: 'Gest. Devolutivos',
                  //            module: 'GESTIONAR ACTA DEVOLUTIVOS',
                  //            icon: 'fa-book',
                  //            url: 'app/js/views/consumible.html',
                  //            visible: $scope.show_menu_consumibles,
                  //        },
                  //        {
                  //            name_module: 'Re. Devolutivos',
                  //            module: 'REPORTE DEVOLUTIVO',
                  //            icon: 'fa-clipboard',
                  //            url: 'app/js/views/reporte_consu.html',
                  //            visible: $scope.show_menu_reporte_consumibles,
                  //        },
                  //        {
                  //            name_module: 'Reg. Devoluciones',
                  //            module: 'REPORTE DE DEVOLUCIUONES',
                  //            icon: 'fa-clipboard',
                  //            url: 'app/js/views/reporte_devoluciones.html',
                  //            visible: $scope.show_menu_reporte_devoluciones,
                  //        },
                  //        {
                  //            name_module: 'Rep. Hurtos',
                  //            module: 'REPORTE DE HURTOS',
                  //            icon: 'fa-clipboard',
                  //            url: 'app/js/views/hurtos.html',
                  //            visible: $scope.show_menu_reporte_devoluciones,
                  //        },
                  //        {
                  //            name_module: 'Descuentos',
                  //            module: 'AUTORIZACION DE DESCUENTOS',
                  //            icon: 'fa-clipboard',
                  //            url: 'app/js/views/autorizacion_desc.html',
                  //            visible: $scope.show_menu_descuentos,
                  //        },
                  //        {
                  //            name_module: 'H.V. Equipo',
                  //            module: 'HOJA DE VIDA EQUIPOS',
                  //            icon: 'fa-clipboard',
                  //            url: 'app/js/views/hv_equipos.html',
                  //            visible: $scope.show_menu_descuentos,
                  //        },
                  //        {
                  //            name_module: 'H.V. Altura',
                  //            module: 'sst',
                  //            icon: 'fa-clipboard',
                  //            url: 'app/js/views/hv_altura.html',
                  //            visible: $scope.show_menu_hv_altura,
                  //        },
                  //        {
                  //            name_module: 'Inspec Equipos Alt',
                  //            module: 'sst',
                  //            icon: 'fa-clipboard',
                  //            url: 'app/js/views/inspeccion_altura.html',
                  //            visible: $scope.show_menu_inspec_alt,
                  //        },
                  //        {
                  //            name_module: 'Rep. Equipos Alt',
                  //            module: 'sst',
                  //            icon: 'fa-clipboard',
                  //            url: 'app/js/views/reporte_equi_alt.html',
                  //            visible: $scope.show_menu_rep_equi_alt,
                  //        },
                  //        {
                  //            name_module: 'Inspec. Escalera',
                  //            module: 'sst',
                  //            icon: 'fa-clipboard',
                  //            url: 'app/js/views/inspeccion_escalera.html',
                  //            visible: $scope.show_menu_inspec_alt,
                  //        },
                  //        {
                  //            name_module: 'Entrada Herramienta',
                  //            module: 'Inspecciones',
                  //            icon: 'fa-clipboard',
                  //            url: 'app/js/views/entrada_herramienta.html',
                  //            visible: $scope.show_menu_ent_herr,
                  //        },
                  //        {
                  //            name_module: 'Entrega Proveedor',
                  //            module: 'Inspecciones',
                  //            icon: 'fa-clipboard',
                  //            url: 'app/js/views/entrega_aproveedor.html',
                  //            visible: $scope.show_menu_entregaaprov,
                  //        },
                  //        {
                  //            name_module: 'Reporte Escaleras',
                  //            module: 'sst',
                  //            icon: 'fa-clipboard',
                  //            url: 'app/js/views/reporte_escaleras.html',
                  //            visible: $scope.show_menu_rep_equi_alt,
                  //        },
                  //        {
                  //            name_module: 'Gestion equipos de altura',
                  //            module: 'sst',
                  //            icon: 'fa-clipboard',
                  //            url: 'app/js/views/gestionequipos_alt.html',
                  //            visible: $scope.show_menu_rep_equi_alt,
                  //        },
                  //    ];
                  //    return $scope.menuPrincipal;
                  //}
                  /*Montar el menu*/
                  //$scope.mainMenu = $scope.getMenu();
                  //console.log($scope.mainMenu);
                /*Titulo de la ventana*/
                $scope.nameTemplate = '';
                $scope.setnameTemplate = function(ntmp, tmp) { 
                    if (tmp != '') {
                        $scope.nameTemplate = ntmp;
                            $timeout(function () {
                                $('#menucerrar').click();
                                currentButton.triggerHandler("click");
                            });
                    }
                }


                //Funcion Busqeda Menu//
                /*Ruta de la ventana*/
                $scope.template = 'app/js/Default.html';
                $scope.settemplate = function (tmp,ntmp) {
                    console.log("entro template");
                    console.log(tmp);
                    console.log(ntmp);
                    if (tmp != '') {
                        $scope.template = tmp;
                        $scope.nameTemplate = ntmp;
                    }
                }
                $scope.view = {
                    getView: function () { 
                        if ($scope.template != 'app/js/Default.html') {
                                $scope.actualwindow = 'ssWindow';
                            }
                            return $scope.template;
                        }
                    }

                $scope.viewDefault = function () {
                    $scope.actualwindow = 'ssWindowDefault';
                    $scope.nameTemplate = '';
                    $scope.template = 'app/js/Default.html';
                }
                $('#salud-system').on('click', function () {
                    $scope.$apply(function () {
                        $scope.viewDefault();
                    });

                });
                $scope.movbar = function (m) {
                    if (m) {
                        $('.barra').addClass("movbar");
                    } else {
                        $('.barra').removeClass("movbar");
                    }
                };



                //$timeout(function () {
                //    $('#menucerrar').click();
                //    currentButton.triggerHandler("click");
                //}, 500);
            }
}
})();

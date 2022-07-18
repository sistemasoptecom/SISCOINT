(function () {

    'use strict';

    angular
        .module('Rhino')
        .directive('ssBarra', [ssBarra])
        .directive('ssBuscador', [ssBuscador])
        .directive('ssBusquedaRapida', ssBusquedaRapida)
        .directive('ssImgChooser', ssImgChooser)
        .directive('ssModalYesNo', [ssModalYesNo])
        .directive('ssModalView', [ssModalView])
        .directive('ssModalPopUp', [ssModalPopUp])
        .directive('ssShowMessage', [ssShowMessage]);

    function ssBarra() {
        return {
            restrict: 'E',
            templateUrl: 'app/js/template-components/ss-barra.html',
            controllerAs: 'ssBarraCtrl',
            transclude: true,
            bindToController: true,
            scope: {
                formulario: '@',
                cerrar2: '=',
                profilenivel: '@',
                showbtn: '=',
                disabledbtn: '=',
                buscar: '&',
                imprimir: '&',
                nuevo: '&',
                guardar: '&',
                actualizar: '&',
                editar: '&',
                eliminar: '&',
                preeliminar: '&',
                cancelar: '&',
                cerrar:'&'
            },
            controller: function (Service, $scope, $interval, ssDate, $timeout) {
                //VARIABLES
                var formulario = this.formulario || null;
                var nivel = this.profilenivel || null;
                nivel = JSON.parse(nivel);
                var using = {
                    buscar: false,
                    imprimir: false,
                    nuevo: false,
                    editar: false,
                    eliminar: false,
                    cerrar: true
                };
                //LLAMADO A LAS FUNCIONES EXTERNAS QUE SE EJECUTAN AL DARLE CLICK EN UN BOTON  DE LA BARRA
                $scope.state = this.disabledbtn || null;
                $scope.showBtn = this.showbtn || null;
                var _nuevo = this.nuevo || null;
                var _buscar = this.buscar || null;
                var _guardar = this.guardar || null;
                var _editar = this.editar || null;
                var _actualizar = this.actualizar || null;
                var _borrar = this.eliminar || null;
                var _eliminar = this.preeliminar || null;
                var _cancelar = this.cancelar || null;
                var _cerrar = this.cerrar || null;
                $scope.imprimir = this.imprimir || null;
                $scope.formulario = formulario.substring(1);
                $scope.cerrar2 = this.cerrar2 || null;
                //


                    using.nuevo = $scope.showBtn.nuevo;
                    using.buscar = $scope.showBtn.buscar;
                    using.editar = $scope.showBtn.editar;
                    using.eliminar = $scope.showBtn.eliminar;
                    using.cerrar = $scope.showBtn.cerrar;
                    using.imprimir = $scope.showBtn.imprimir;


                    //

                    //ESTADO DE LOS COMPONENTES DEL FORMULARIO
                    var stateForm = function (state) {
                        $(formulario).find('input, textarea, button, select, file').prop('disabled', state);
                        $(formulario).find(".ss-img-choo-body img").attr('src', '');
                        $("input[name=valorbr]").prop('disabled', true);
                    }
                    stateForm(true);
                    //LIMPIAR LO COMPONENTES DEL FORULARIO
                    var clearForm = function () {
                        $(formulario).find('input[type=text],input[type=number],input[type=date],input[type=time],input[type=checkbox],input[type=password],textarea,select').val('');
                        $(formulario).find('input[type=checkbox]').attr('checked', false);
                    }
                    //VERIFICAR QUE BOTONES SE VAN A USAR
                    var validateBtnUsing = function () {
                        if (using.buscar == true) { $scope.showBtn.buscar = true; } else { $scope.showBtn.buscar = false; }
                        if (using.imprimir == true) { $scope.showBtn.imprimir = true; } else { $scope.showBtn.imprimir = false; }
                        if (using.nuevo == true) { $scope.showBtn.nuevo = true; $scope.showBtn.guardar = false; } else { $scope.showBtn.nuevo = false; }
                        if (using.editar == true) { $scope.showBtn.editar = true; /*//console.log();*/ $scope.showBtn.actualizar = false; } else { $scope.showBtn.editar = false; }
                        if (using.eliminar == true) { $scope.showBtn.eliminar = true; } else { $scope.showBtn.eliminar = false; }
                        $scope.showBtn.cerrar = true;
                        $scope.showBtn.cancelar = false;
                        $scope.showBtn_borrar = false;
                    }
                    validateBtnUsing();
                    //
                    var barReset = function (state) {
                        if (using.buscar == true) { $scope.showBtn.buscar = state; }
                        if (using.imprimir == true) { $scope.showBtn.imprimir = state; }
                        if (using.nuevo == true) { $scope.showBtn.nuevo = state; $scope.showBtn.guardar = !state; }
                        if (using.editar == true) { $scope.showBtn.editar = state; $scope.showBtn.actualizar = !state; }
                        if (using.eliminar == true) { $scope.showBtn.eliminar = state; $scope.showBtn.borrar = !state; }
                        $scope.showBtn.cerrar = state;
                        $scope.showBtn.cancelar = !state;
                    }


                    $scope.buscar = function () {
                        _buscar();
                    }
                    $scope.actualizar = function () {
                        isOpen(true);
                        _actualizar().then(
                            function (rs) {
                                if (rs == true) {
                                    barReset(rs);
                                    stateForm(rs);
                                }
                                $timeout(function () {
                                    isOpen(false);
                                }, 1000);
                            },
                            function (err) {
                                isOpen(false);
                            }
                        );
                    }

                    $scope.nuevo = function () {
                        stateForm(false);
                        clearForm();
                        $timeout(function () {
                            _nuevo();
                            barReset(false);
                            if (using.editar == true) { $scope.showBtn.actualizar = false; }
                            if (using.eliminar == true) { $scope.showBtn.borrar = false; }
                        })

                    }
                    $scope.editar = function () {
                        stateForm(false);
                        _editar();
                        barReset(false);
                        if (using.nuevo == true) { $scope.showBtn.guardar = false; }
                        if (using.eliminar == true) { $scope.showBtn.borrar = false; }
                    }
                    $scope.cancelar = function () {
                        if (this.cancelar != null) {
                            clearForm();
                            $timeout(function () {
                                _cancelar();
                            });

                        }

                        stateForm(true);
                        barReset(true);
                    }
                    $scope.cerrar = function () {
                        if ($scope.cerrar2 == false || $scope.cerrar2 == null ) {
                            var currentButton = angular.element(document.getElementById('salud-system'));
                            $timeout(function () {
                                $('#salud-system').click();
                                currentButton.triggerHandler("click");
                            });

                        }
                            $timeout(function () {
                            _cerrar();
                            });

                    }


                    $scope.eliminar = function () {
                        _eliminar();
                        barReset(false);
                        if (using.nuevo == true) { $scope.showBtn.guardar = false; }
                        if (using.editar == true) { $scope.showBtn.actualizar = false; }
                    }
                    //
                    $scope.guardar = function () {
                        isOpen(true);
                        _guardar().then(
                            function (rs) {
                                if (rs == true) {
                                    barReset(rs);
                                    stateForm(rs);
                                    isOpen(false);
                                }

                            },
                            function (err) {
                                //console.log("Err in Create:" + err);
                                isOpen(false);
                            }
                        );
                        $timeout(function () {
                            isOpen(false);
                        },5000);
                    }
                    $scope.borrar = function () {
                        isOpen(true);
                        _borrar().then(
                            function (rs) {

                                clearForm();
                                barReset(rs);
                                stateForm(rs);

                                isOpen(false);
                            },
                            function (err) {
                                isOpen(false);
                            }
                        );
                    }
                    //
                    $scope.openWaiting = false;
                    function isOpen(est) {
                        $scope.openWaiting = est;
                    }
            }
        }
    }

    function ssBuscador() {
        return {
            restrict: 'E',
            templateUrl: 'app/js/template-components/ss-buscador.html',
            controllerAs: 'ssBuscadorCtrl',
            trasclude: true,
            bindToController: true,
            scope: { data: '=', resultado: '=', pasardato: '=' },
            controller: function ($scope, $log, Service, $sce, $timeout) {
                //console.log(this.data);
                //console.log(this.resultado);
                //console.log(this.pasardato);
                /*
                ********** ESTRUCTURA **********

                var data = {
                    ##id para el componente html <table>##
                    id: '',
                    ##id del componente(s) que abre la busqueda rapida##
                    component: [{id:'',type:'text'},
                                {id:'',type:'btn'}]
                    ##Nombre de la tabla en la BD##
                    table: '',
                    ##Datos a buscar##
                    column: [
                        { name: 'nameBD', as:'alias', visible:false },
                        {...}
                    ],
                    inner_join:[{table:'',on:'',join:''}],
                    left_join:[{table:'',on:'',join:''}],

                    ## where: [
                        {
                            col:'CODIGO',
                            filter:"='111111111'",
                            join:'AND || OR' ---> si tiene mas de un filtro, de lo contrario el dato de join seria ('')
                        },
                        {...},{...}
                    ] ##
                    where: [],
                    ##falso o verdades -- para agrupar los campos##
                    groupby: false,
                    ##vector de dato(s) para ordenamiento -- ej. ['FECHA desc','HORA desc'] o ['FECHA asc','HORA asc']##
                    orderby: [],
                    title:'titulo de la ventana'
                 };*/
                /*Igualar la variable "data" con el json de entrada*/
                $scope.buscadorOpen = false;
                var data = this.data || null;
                $scope.pasardato = (this.pasardato || null);
                /*Asociar funcion para retornar resultados de la busqueda rapida*/
                var resultadoBR = this.resultado || null;
                /*Add evento click al componenete encargado de abrir el buscador*/
                $scope.filtro = { campo: '', combo: '' };
                for (var i = 0; i < data.component.length; i++) {
                    var comp = data.component[i];
                    var openComponent = "#" + comp.id;
                    if (comp.type == 'txt') {
                        //$("body").off("keydown", openComponent);
                        $("body").on("keydown", openComponent, function (e) {
                            if (e.which == 113) {
                                $timeout(function () { $scope.open(data, resultadoBR); });
                            }
                        });
                    } else if (comp.type == 'btn') {
                        //$("body").off("click", openComponent);
                        $("body").on("click", openComponent, function () {
                            $timeout(function () { $scope.open(data, resultadoBR); });

                        });
                    }
                }
                $scope.open = function (data, resultadoBR) {
                    $scope.buscadorOpen = true;
                    $scope.title = data.title;
                    $scope.id = data.id;
                    /*para resultados encontrados*/
                    $scope.resultado = [];
                    montarTabla($scope.resultado, false);
                    /*modelo para almacenar los datos capturados de la caja de texto y el combo box*/

                    /*Evento para cerra la ventana*/
                    /*metodo que se ejecuta cuando ingresamos datos a la caja de texto*/
                    $scope.evtBuscar = function ($event) {
                        /*Validar si el campo de texto tiene datos*/
                        if (($scope.filtro.campo).length > 0) {
                            var keyCode = $event.which || $event.keyCode;
                            /*Validar si presiono la tecla ENTER*/
                            if (keyCode === 13) {
                                /*Construir el SQL*/
                                var sql = '';
                                sql += ' SELECT';
                                var campos = '';
                                for (i in data.column) {
                                    var col = data.column[i];
                                    campos += col.name + " as " + col.as + ",";
                                }
                                campos = campos.substring(0, (campos.length - 1));
                                sql += " " + campos;
                                var where = '';
                                if (!jQuery.isEmptyObject(data.where)) {

                                    where += ' WHERE ';

                                    data.where.forEach(function (item, idex) {
                                        where += " " + item.col + " " + item.filter + " " + item.join;
                                    });
                                }
                                if (!$scope.filtro.combo.trim() && !$scope.filtro.campo.trim() || !!$scope.filtro.combo.trim() && !$scope.filtro.campo.trim()) {

                                } else if (!$scope.filtro.combo.trim() && !!$scope.filtro.campo.trim()) {
                                    if (/WHERE/.test(where)) {
                                        where += " AND ";
                                    } else {
                                        where += " WHERE ";
                                    }
                                    where += allFiltro($scope.filtro.campo);
                                } else if (!!$scope.filtro.combo.trim() && !!$scope.filtro.campo.trim()) {
                                    if (/WHERE/.test(where)) {
                                        where += " AND ";
                                    } else {
                                        where += " WHERE ";
                                    }
                                    if ($scope.filtro.esp == 1) {
                                        where += $scope.filtro.combo + " like '%" + $scope.filtro.campo + "%'";
                                    } else {
                                        where += $scope.filtro.combo + " like '" + $scope.filtro.campo + "%'";

                                    }
                                }
                                sql += ' FROM ' + data.table;
                                var inner_join = '';
                                if (!jQuery.isEmptyObject(data.inner_join)) {
                                    for (i in data.inner_join) {
                                        inner_join += ' INNER JOIN ';
                                        inner_join += ' ' + data.inner_join[i].table + ' on ' + data.inner_join[i].on;
                                    }
                                }
                                sql += inner_join;
                                var left_join = '';
                                if (!jQuery.isEmptyObject(data.left_join)) {

                                    for (i in data.left_join) {
                                        left_join += ' LEFT JOIN ';
                                        left_join += ' ' + data.left_join[i].table + ' on ' + data.left_join[i].on;
                                    }
                                }
                                sql += left_join;
                                sql += where;
                                var groupby = '';
                                if (data.groupby) {
                                    groupby += ' GROUP BY ';
                                    for (i in data.column) {
                                        var col = data.column[i];
                                        var c = col.name.split("(");
                                        var _col = "";
                                        if (c.length == 2) {
                                            var tam = c[1].trim().length;
                                            var _col = c[1].trim().substring(0, tam - 1);
                                        }
                                        else if (c.length == 3) {
                                            var tam = c[2].trim().length;
                                            var _col = c[2].trim().substring(0, tam - 2);
                                        } else if (c.length == 1) {
                                            var _col = c[0];
                                        }
                                        groupby += _col + ',';
                                    }
                                    groupby = groupby.substring(0, groupby.length - 1);
                                }
                                sql += groupby;
                                var orderby = '';
                                if (data.orderby.length > 0) {
                                    orderby += ' ORDER BY ';
                                    for (var or in data.orderby) {
                                        orderby += data.orderby[or] + ',';
                                    }
                                    orderby = orderby.substring(0, orderby.length - 1);
                                }
                                sql += orderby;
                                var exist = '';
                                var existfrom = '';
                                var exist2 = '';
                                var exist3 = '';
                                if (!jQuery.isEmptyObject(data.exist)) {
                                    exist += ' if exists( ';
                                    existfrom += ' from '
                                    exist2 += ' where EXISTS ( ';
                                    exist3 += ' )'
                                    for (i in data.exist) {
                                        exist += sql + ')' + ' begin ' + sql + ' end else begin ' + ' select ' + data.exist[i].campo + ' from ' + data.exist[i].table + ' where ' + data.exist[i].where1 + " like '" + $scope.filtro.campo + "%' OR " + data.exist[i].where2 + " like '" + $scope.filtro.campo + "%' OR " + data.exist[i].where3 + " like '" + $scope.filtro.campo + "%' OR " + data.exist[i].where4 + " like '" + $scope.filtro.campo + "%' OR " + data.exist[i].where5 + " like '" + $scope.filtro.campo + "%' end ";
                                        sql = exist;
                                    }
                                }

                                var existdynamic = '';
                                var whereexist = '';
                                var wherefiltro = '';
                                if ($scope.filtro.combo != "" && $scope.filtro.combo != undefined && $scope.filtro.combo != null) {
                                    wherefiltro += $scope.filtro.combo + " like '" + $scope.filtro.campo + "%'";
                                }
                                else {
                                    if (/WHERE/.test(where)) {
                                        wherefiltro += " AND ";
                                    } else {
                                        wherefiltro += " WHERE ";
                                    }
                                    wherefiltro += allFiltroexist($scope.filtro.campo);

                                }


                                if (!jQuery.isEmptyObject(data.existdynamic)) {
                                    for (i in data.existdynamic) {
                                        data.existdynamic[i].where.forEach(function (item, idex) {
                                            whereexist += " " + item.col + " " + item.filter + " " + item.join;
                                            existdynamic += ' if exists( ';
                                            existdynamic += sql + ')' + ' begin ' + sql + ' end else begin ' + ' select ' + data.existdynamic[i].campo + ' from ' + data.existdynamic[i].table + ' where ' + whereexist + wherefiltro + ' end';
                                            sql = existdynamic;
                                        });
                                    }
                                }
                                //console.log(sql);
                                function allFiltroexist(campo) {
                                    var cols = "";
                                    for (var i in data.existdynamic) {
                                        var col = data.existdynamic[i];
                                        var aux = col.campo.split(",");
                                        aux.forEach(function (item, index) {
                                            cols += " " + item + " like '" + campo + "%' or";
                                        })
                                    }
                                    var tam = cols.length;
                                    //console.log(tam);
                                    cols = cols.substring(0, tam - 2);
                                    //console.log(cols);

                                    return "(" + cols + ")";
                                }
                                function allFiltro(campo) {
                                    var cols = "";
                                    for (var i in data.column) {
                                        var col = data.column[i];
                                        if ($scope.filtro.esp == 1) {
                                            cols += " " + col.name + " like '%" + campo + "%' or";

                                        }
                                        else {
                                            cols += " " + col.name + " like '" + campo + "%' or";

                                        }

                                    }
                                    var tam = cols.length;
                                    cols = cols.substring(0, tam - 2);

                                    return "(" + cols + ")";
                                }
                                Service.getCrud({ sqls: sql }, "/Generic.svc/buscador").then(function (d) {
                                    $scope.resultado = JSON.parse(d.data);
                                    montarTabla($scope.resultado, true);
                                    if (jQuery.isEmptyObject($scope.resultado)) {
                                        resultadoBR(angular.toJson(false));
                                    }
                                    var row = {};
                                    var $headers = $("#" + data.id + "_head").find("th");
                                    $("#" + data.id).off('click');
                                    $("#" + data.id).on('click', 'tr', function () {
                                        var rs = $scope.resultado[($(this).index())];
                                        resultadoBR(angular.toJson(rs));
                                        $timeout(function () { $scope.close(); });
                                    });

                                });
                            }
                        }

                    }
                    function montarTabla(d, est) {
                        var body = GetTbody($scope.resultado);
                        $scope.t_body = $sce.trustAsHtml(body);
                        function GetTbody(obj) {
                            var cont = "";
                            for (var d in obj) {
                                var p = obj[d];
                                cont += "<tr >";
                                var a = 0;
                                for (var i in p) {
                                    var col = data.column[a];
                                    if (col.visible) {
                                        cont += "<td>" + p[i] + "</td>";
                                    }
                                    a++;
                                }
                                cont += "</tr>";
                            }

                            return cont;
                        }
                        if (jQuery.isEmptyObject($scope.resultado)) {
                            if (est) { $scope.noData = 'No se encontraron registros'; } else { $scope.noData = ''; }

                        } else {
                            $scope.noData = '';
                        }
                    }
                    var GetHeaders = function (etiqueta) {
                        var cols = "";
                        for (var i in data.column) {
                            var col = data.column[i];
                            if (col.visible) {
                                if (etiqueta == 'option') {
                                    cols += "<" + etiqueta + " value = '" + col.name + "'>" + col.as + "</" + etiqueta + ">"
                                } else {
                                    cols += "<" + etiqueta + ">" + col.as + "</" + etiqueta + ">"
                                }
                            }
                        }
                        return cols;
                    }
                    $scope.t_head = $sce.trustAsHtml(GetHeaders('th'));
                    $scope.combo = $sce.trustAsHtml("<option></option>" + GetHeaders('option'));
                };
                $scope.close = function () {
                    $scope.buscadorOpen = false;
                    $scope.filtro.campo = '';
                    $scope.filtro.combo = '';
                };
                /**/
                $scope.$watch('pasardato.val', function (d) {
                    if (d != undefined) {
                        if (d != '') {

                            $scope.filtro.campo = d;
                        }
                    }
                })
            }
        }
    }
    function ssBusquedaRapida() {
        return {
            restrict: 'E',
            templateUrl: 'app/js/template-components/ss-busqueda-rapida.html',
            controllerAs: 'ssBrCtrl',
            trasclude: true,
            bindToController: true,
            scope: {
                data: '=',
                resultado: '=',
                key: '='
            },
            controller: function ($scope, Service) {
                var data = this.data || null;
                $scope.pasardato = { val: '' };
                if (data != null) {
                    $scope.key = {};
                    $scope._key = '';
                    var resultadoBR = this.resultado || null;
                    $scope.isRequired = false;
                    var dr = data.required_name || null;
                    if (dr != null) {
                        $scope.isRequired = true;
                        $scope.required_name = dr;
                    }
                    $scope.key = this.key || null;
                    var dComponet = data.component[0];
                    $scope.idClave = dComponet.id + '-clave';
                    $scope.idValor = dComponet.id + '-valor';
                    $scope.idBtn = dComponet.id + '-btn';
                    $scope.dataB = data;
                    $scope.dataB.component = [
                        { id: $scope.idBtn, type: 'btn' },
                        { id: $scope.idClave, type: 'txt' }
                    ];
                    $scope.rsBuscador = function (value) {
                        if (value != undefined) {
                            var sw = 1;
                            var rs = '';
                            var con = 1;
                            if (typeof value != 'boolean') {
                                $.each(JSON.parse(value), function (index, v) {
                                    if (sw == 1) {
                                        $scope._key = v;
                                        $('#' + $scope.idClave).val(v);
                                        sw = 2;

                                    } else if (sw == 2) {
                                        if ($scope.dataB.column[con].visible) {
                                            con++;
                                            rs += " " + v;
                                            $('#' + $scope.idValor).val(rs);
                                        }
                                    }
                                });
                            }
                            resultadoBR(value);
                        }
                    };
                    $scope.evtBuscarBR = function ($event) {
                        var col = data.column;
                        var keyCode = $event.which || $event.keyCode;
                        if (keyCode === 13) {
                            var d = $("#" + $scope.idClave).val();
                            if (d.trim().length > 0) {
                                var rs = {};
                                var key, val, btn;
                                key = "#" + $scope.idClave;
                                val = "#" + $scope.idValor;
                                btn = "#" + $scope.idBtn;
                                var sql;
                                sql = getSql(col[0].name, $("#" + $scope.idClave).val());
                                Service.getCrud({ sqls: sql }, "/Generic.svc/buscador").then(function (d) {
                                    var result = JSON.parse(d.data)[0];
                                    if (!jQuery.isEmptyObject(result)) {
                                        var a = 0;
                                        for (var i in result) {
                                            if (a == 0) {
                                                $(key).val(result[i]);
                                                a++;
                                            } else if (a == 1) {
                                                $(val).val(result[i]);
                                                a++;
                                            }
                                        }
                                        $scope.rsBuscador(angular.toJson(result));
                                    } else {
                                        sql = getSql(col[1].name, $("#" + $scope.idClave).val());
                                        Service.getCrud({ sqls: sql }, "/Generic.svc/buscador").then(function (d) {
                                            var result = JSON.parse(d.data)[0];
                                            if (!jQuery.isEmptyObject(result)) {
                                                var a = 0;
                                                for (i in result) {
                                                    if (a == 0) {
                                                        $(key).val(result[i]);
                                                        a++;
                                                    } else if (a == 1) {
                                                        $(val).val(result[i]);
                                                        a++;
                                                    }
                                                }
                                                $scope.rsBuscador(angular.toJson(result));
                                            } else {
                                                var rs = angular.toJson(result);
                                                if (rs == undefined) {
                                                    $scope.rsBuscador("{}");
                                                } else {
                                                    $scope.rsBuscador(rs);
                                                }
                                                $scope.pasardato.val = $(key).val();
                                                // $(key).val("");
                                                $(val).val("");
                                                $(btn).click();

                                            }
                                        });
                                    }
                                });
                            }
                        }
                    };
                    $scope.evtsearch = function () {
                        console.log("entro blur");
                        var col = data.column;
                        var d = $("#" + $scope.idClave).val();
                        if (d.trim().length > 0) {
                            var rs = {};
                            var key, val, btn;
                            key = "#" + $scope.idClave;
                            val = "#" + $scope.idValor;
                            btn = "#" + $scope.idBtn;
                            var sql;
                            sql = getSql(col[0].name, $("#" + $scope.idClave).val());
                            Service.getCrud({ sqls: sql }, "/Generic.svc/buscador").then(function (d) {
                                var result = JSON.parse(d.data)[0];
                                if (!jQuery.isEmptyObject(result)) {
                                    var a = 0;
                                    for (var i in result) {
                                        if (a == 0) {
                                            $(key).val(result[i]);
                                            a++;
                                        } else if (a == 1) {
                                            $(val).val(result[i]);
                                            a++;
                                        }
                                    }
                                    $scope.rsBuscador(angular.toJson(result));
                                } else {
                                    sql = getSql(col[1].name, $("#" + $scope.idClave).val());
                                    Service.getCrud({ sqls: sql }, "/Generic.svc/buscador").then(function (d) {
                                        var result = JSON.parse(d.data)[0];
                                        if (!jQuery.isEmptyObject(result)) {
                                            var a = 0;
                                            for (i in result) {
                                                if (a == 0) {
                                                    $(key).val(result[i]);
                                                    a++;
                                                } else if (a == 1) {
                                                    $(val).val(result[i]);
                                                    a++;
                                                }
                                            }
                                            $scope.rsBuscador(angular.toJson(result));
                                        } else {
                                            var rs = angular.toJson(result);
                                            if (rs == undefined) {
                                                $scope.rsBuscador("{}");
                                            } else {
                                                $scope.rsBuscador(rs);
                                            }
                                            $scope.pasardato.val = $(key).val();
                                            // $(key).val("");
                                            $(val).val("");
                                            $(btn).click();

                                        }
                                    });
                                }
                            });
                        }
                    }
                    function getSql(k, v) {
                        /*Construir el SQL*/
                        var sql = '';
                        sql += ' SELECT';
                        var campos = '';

                        for (var i in data.column) {
                            var col = data.column[i];
                            campos += col.name + " as " + col.as + ",";
                        }
                        campos = campos.substring(0, (campos.length - 1));
                        sql += " " + campos;

                        var where = '';
                        if (!jQuery.isEmptyObject(data.where)) {

                            where += ' WHERE ';

                            data.where.forEach(function (item, idex) {
                                where += " " + item.col + " " + item.filter + " " + item.join;
                            });
                        }
                        if (/WHERE/.test(where)) {
                            where += " AND ";
                        } else {
                            where += " WHERE ";
                        }
                        where += " " + k + " = '" + v + "'";

                        sql += ' FROM ' + data.table;
                        var inner_join = '';
                        if (!jQuery.isEmptyObject(data.inner_join)) {
                            inner_join += ' INNER JOIN ';
                            for (i in data.inner_join) {
                                inner_join += ' ' + data.inner_join[i].table + ' on ' + data.inner_join[i].on; + ' ' + data.inner_join[i].join + ' ';
                            }
                        }

                        sql += inner_join;
                        var left_join = '';
                        if (!jQuery.isEmptyObject(data.left_join)) {
                            left_join += ' LEFT JOIN ';
                            for (i in data.left_join) {
                                left_join += ' ' + data.left_join[i].table + ' on ' + data.left_join[i].on; + ' ' + data.left_join[i].join + ' ';
                            }
                        }
                        sql += left_join;

                        sql += where;
                        var groupby = '';
                        if (data.groupby) {
                            groupby += ' GROUP BY ';
                            for (i in data.column) {
                                var col = data.column[i];
                                groupby += col.name + ',';
                            }
                            groupby = groupby.substring(0, groupby.length - 1);
                        }
                        sql += groupby;
                        var orderby = '';
                        if (data.orderby.length > 0) {
                            orderby += ' ORDER BY ';
                            for (var or in data.orderby) {
                                orderby += data.orderby[or] + ',';
                            }
                            orderby = orderby.substring(0, orderby.length - 1);
                        }
                        sql += orderby;
                        var exist = '';
                        var existfrom = '';
                        var exist2 = '';
                        var exist3 = '';
                        if (!jQuery.isEmptyObject(data.exist)) {
                            exist += ' if exists( ';
                            existfrom += ' from '
                            exist2 += ' where EXISTS ( ';
                            exist3 += ' )'
                            for (i in data.exist) {
                                //exist += sql + ')' + ' begin ' + sql + ' end else begin ' + ' select ' + data.exist[i].campo + ' from ' + data.exist[i].table + ' where ' + data.exist[i].where + '=' + + ' end ';
                                exist += sql + ')' + ' begin ' + sql + ' end else begin ' + ' select ' + data.exist[i].campo + ' from ' + data.exist[i].table + ' where ' + data.exist[i].where1 + "= '" + $(key).val() + "' OR " + data.exist[i].where2 + "= '" + $(key).val() + "' OR " + data.exist[i].where3 + "= '" + $(key).val() + "' OR " + data.exist[i].where4 + "= '" + $(key).val() + "' OR " + data.exist[i].where5 + "= '" + $(key).val() + "' end ";
                                sql = exist;

                            }
                        }
                        return sql;
                    }
                    var key, val;
                    key = "#" + $scope.idClave;
                    val = "#" + $scope.idValor;
                    $scope.$watch('key.value', function (d) {
                        if (d != null) {
                            if (d != undefined) {
                                if (d != '') {
                                    var col = data.column;
                                    var sql = getSql(col[0].name, d);
                                    Service.getCrud({ sqls: sql }, "/Generic.svc/buscador").then(function (d) {
                                        var result = JSON.parse(d.data)[0];

                                        if (!jQuery.isEmptyObject(result)) {
                                            var a = 0;

                                            for (var i in result) {
                                                if (a == 0) {
                                                    $(key).val(result[i]);
                                                    a++;
                                                } else if (a == 1) {
                                                    $(val).val(result[i]);
                                                    a++;
                                                }
                                            }
                                            $scope.rsBuscador(angular.toJson(result));
                                        }
                                    });
                                } else {
                                    clearCom();
                                }
                            } else {
                                clearCom();
                            }
                        } else {
                            clearCom();
                        }
                    });

                    var clearCom = function () {
                        $(key).val('');
                        $(val).val('');
                    }
                }
            }
        }
    }
    function ssImgChooser() {
        return {
            restrict: 'E',
            templateUrl: 'app/js/template-components/ss-image-chooser.html',
            controllerAs: 'ssImgChooserCtrl',
            trasclude: true,
            bindToController: true,
            scope: {
                data: '@',
                resultado: '=',
                image: '='
            },
            controller: function ($scope) {
                $scope.imgchoo = JSON.parse(this.data) || null;
                $scope.resultado = this.resultado || null;
                $scope.image = this.image;
                $scope.uploadme = '';
                $scope.$watch('image.img', function () {
                    if ($scope.image.img != '') {
                        $scope.uploadme = $scope.image.img;
                    }
                });
                $scope.$watch('uploadme', function () {
                    if ($scope.resultado != null) {
                        $scope.resultado($scope.uploadme);
                    }
                });

            }
        };
    }
    function ssModalYesNo() {
        return {
            restrict: 'E',
            templateUrl: 'app/js/template-components/ss-modal-yes-no.html',
            controllerAs: 'ssModalYesNoCtrl',
            transclude: true,
            bindToController: true,
            scope: {
                data: '=',
                showview: '=',
                result: '='
            },
            controller: function ($scope, $timeout, $q) {

                $scope.yesNoOpen = false;
                $scope.yesNoOption = 0;

                $scope.data = this.data || null;
                $scope.showview = this.showview || null;
                $scope.result = this.result || null;
                $scope.$watch('showview.state', function (d) {
                    if (d) {
                        open().then(function (rs) { $scope.result(rs); });
                    }
                });
                $scope.yes = function () {
                    $scope.yesNoOption = 1;
                    $scope.yesNoOpen = false;
                }
                $scope.no = function () {
                    $scope.yesNoOption = 2;
                    $scope.yesNoOpen = false;
                }
                open = function () {
                    $scope.yesNoOpen = true;
                    $scope.yesNoOption = -1;
                    var defender = $q.defer();
                    var promise = defender.promise;

                    $scope.$watch('yesNoOption', function (d) {
                        if (d > 0) {
                            defender.resolve(d == 1 ? true : false);
                        }
                    });

                    return promise;
                };
            }
        }
    }
    function ssModalView() {
        return {
            restrict: 'E',
            templateUrl: 'app/js/template-components/ss-modal-view.html',
            controllerAs: 'ssModalViewCtrl',
            transclude: true,
            bindToController: true,
            scope: {
                data: '=',
                showview: '='
            },
            controller: function ($scope, $q, $timeout,Datos) {
                $scope.modalViewOpen = false;
                $scope.data = this.data || null;
                $scope.showview = this.showview || null;
                $scope.url = $scope.data.url;
                $scope.$watch('showview.state', function (d) {

                    if (d) { $timeout(open()); }
                });

                $scope.close = function () {
                    $scope.url = "";
                    $scope.modalViewOpen = false;
                    Datos.info = {};
                }

                var open = function () {

                    $scope.modalViewOpen = true;
                    $scope.url = $scope.data.url;

                };
            }
        }
    }
    function ssPanelDiag() {
        return {
            restrict: 'E',
            templateUrl: 'app/js/template-components/ss-panel-diag.html',
            controllerAs: 'ssPanelDiagCtrl',
            trasclude: true,
            bindToController: true,
            scope: { resultado: '=', keys: '=' },
            controller: function ($scope, Service) {
                $scope.resultado = this.resultado || null;
                $scope.diagnosticos = [
                    { codigo: '', nombre: '' },
                    { codigo: '', nombre: '' },
                    { codigo: '', nombre: '' },
                    { codigo: '', nombre: '' },
                    { tipo_dx: '' },
                    { manejo: '' }
                ];
                $scope.enviar = function (n) {
                    if (n == 1) {
                        $scope.diagnosticos[4].tipo_dx = $scope.tipo_dx;
                    } else {
                        $scope.diagnosticos[5].manejo = $scope.manejo;
                    }
                    $scope.resultado($scope.diagnosticos);
                }

                $scope.dataDiag1 = {
                    id: 'br_table_diag1',
                    component: [{ id: 'br_diag1', type: '' }],
                    table: 'diagnosticos',
                    column: [
                        { name: 'RTRIM(LTRIM(CODIGO))', as: 'Codigo', visible: true },
                        { name: 'RTRIM(LTRIM(NOMBRE))', as: 'Nombre', visible: true }
                    ],
                    where: {},
                    groupby: false,
                    orderby: ['CODIGO DESC', 'NOMBRE DESC'],
                    title: 'Busqueda de Diagnosticos',
                    required_name: "Diagnostico principal"
                };
                $scope.dataDiag2 = {
                    id: 'br_table_diag2',
                    component: [{ id: 'br_diag2', type: '' }],
                    table: 'diagnosticos',
                    column: [
                        { name: 'RTRIM(LTRIM(CODIGO))', as: 'Codigo', visible: true },
                        { name: 'RTRIM(LTRIM(NOMBRE))', as: 'Nombre', visible: true }
                    ],
                    where: {},
                    groupby: false,
                    orderby: ['CODIGO DESC', 'NOMBRE DESC'],
                    title: 'Busqueda de Diagnosticos',
                    required_name: ""
                };
                $scope.dataDiag3 = {
                    id: 'br_table_diag3',
                    component: [{ id: 'br_diag3', type: '' }],
                    table: 'diagnosticos',
                    column: [
                        { name: 'RTRIM(LTRIM(CODIGO))', as: 'Codigo', visible: true },
                        { name: 'RTRIM(LTRIM(NOMBRE))', as: 'Nombre', visible: true }
                    ],
                    where: {},
                    groupby: false,
                    orderby: ['CODIGO DESC', 'NOMBRE DESC'],
                    title: 'Busqueda de Diagnosticos',
                    required_name: ""
                };
                $scope.dataDiag4 = {
                    id: 'br_table_diag4',
                    component: [{ id: 'br_diag4', type: '' }],
                    table: 'diagnosticos',
                    column: [
                        { name: 'RTRIM(LTRIM(CODIGO))', as: 'Codigo', visible: true },
                        { name: 'RTRIM(LTRIM(NOMBRE))', as: 'Nombre', visible: true }
                    ],
                    where: {},
                    groupby: false,
                    orderby: ['CODIGO DESC', 'NOMBRE DESC'],
                    title: 'Busqueda de Diagnosticos',
                    required_name: ""
                };

                $scope.rsDiag1 = function (rs) {
                    var _rs = JSON.parse(rs);
                    $scope.diagnosticos[0].codigo = _rs.Codigo;
                    $scope.diagnosticos[0].nombre = _rs.Nombre;
                    $scope.resultado($scope.diagnosticos);
                }
                $scope.rsDiag2 = function (rs) {
                    var _rs = JSON.parse(rs);
                    $scope.diagnosticos[1].codigo = _rs.Codigo;
                    $scope.diagnosticos[1].nombre = _rs.Nombre;
                    $scope.resultado($scope.diagnosticos);
                }
                $scope.rsDiag3 = function (rs) {
                    var _rs = JSON.parse(rs);
                    $scope.diagnosticos[2].codigo = _rs.Codigo;
                    $scope.diagnosticos[2].nombre = _rs.Nombre;
                    $scope.resultado($scope.diagnosticos);
                }
                $scope.rsDiag4 = function (rs) {
                    var _rs = JSON.parse(rs);
                    $scope.diagnosticos[3].codigo = _rs.Codigo;
                    $scope.diagnosticos[3].nombre = _rs.Nombre;
                    $scope.resultado($scope.diagnosticos);
                }
                Service.getCrud({}, "/Salud.svc/PreloadTipodx").then(function (d) {
                    $scope.tipo_dx2 = JSON.parse(d.data)[0];
                });

                $scope.keys = this.keys || null;
                /*
                $scope.keys = {key:'',key2:'',key3:'',key4:'',tipo_dx:'',manejo:''}
                */
                $scope.key = { value: '' };
                $scope.key2 = { value: '' };
                $scope.key3 = { value: '' };
                $scope.key4 = { value: '' };


                $scope.$watch('keys.key', function (d) {
                    $scope.key.value = d;
                });
                $scope.$watch('keys.key2', function (d) {
                    $scope.key2.value = d;
                });
                $scope.$watch('keys.key3', function (d) {
                    $scope.key3.value = d;
                });
                $scope.$watch('keys.key4', function (d) {
                    $scope.key4.value = d;
                });
                $scope.$watch('keys.tipo_dx', function (d) {
                    $scope.tipo_dx = d;
                });
                $scope.$watch('keys.manejo', function (d) {
                    $scope.manejo = d;
                });


            }

        }
    }
    function ssModalPopUp() {
        return {
            restrict: 'E',
            templateUrl: 'app/js/template-components/ss-modal-pop-up.html',
            controllerAs: 'ssModalViewCtrl',
            transclude: true,
            bindToController: true,
            scope: {
                data: '=',
                showview: '='
            },
            controller: function ($scope, $q, $timeout, Datos) {
                $scope.modalViewOpen = false;
                $scope.data = this.data || null;
                $scope.showview = this.showview || null;
                $scope.url = $scope.data.url;
                $scope.$watch('showview.state', function (d) {

                    if (d) { $timeout(open()); }
                });

                $scope.close = function () {
                    $scope.url = "";
                    $scope.modalViewOpen = false;
                    Datos.info = {};
                }

                var open = function () {

                    $scope.modalViewOpen = true;
                    $scope.url = $scope.data.url;

                };
            }
        }
    }
    function ssShowMessage() {
        console.log("entro show");
        return {
            restrict: 'E',
            templateUrl: 'app/js/template-components/ss-show-message.html',
            controllerAs: 'ssShowMessageCtrl',
            transclude: true,
            bindToController: true,
            scope: {
                data: '=',
                showview: '=',

            },
            controller: function ($scope, $timeout, $q) {
                $scope.ModalMessageOpen = false;
                $scope.data = this.data || null;
                $scope.showview = this.showview || null;
                $scope.result = this.result || null;
                $scope.$watch('showview.state', function (d) {
                    console.log("entro message");
                    if (d) {
                        console.log("entro show message");
                        $timeout(open());
                    }

                });
                $scope.close = function () {
                    $scope.ModalMessageOpen = false;
                    $scope.showview.state = false;
                    var id = $scope.data.newfocus;
                    $('#'+id).focus();
                }
                open = function () {
                    $scope.ModalMessageOpen = true;
                        $('#closePend').focus();

                };
            }
        }
    }

})();

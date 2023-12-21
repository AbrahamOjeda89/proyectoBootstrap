// Modal del principio (Abrir Modal)
function showModal(){
    const modalDIV = new bootstrap.Modal(document.getElementById("exampleModal"))
    modalDIV.show()
}

function alertSuccess(msg){
    Swal.fire({
        icon: "success",
        title: "¡Correcto!",
        text: msg
    }).then(function(){
        window.location = window.location.pathname
    })
}

function alertConfirm(msg){
    Swal.fire({
        icon: "warning",
        title: msg,
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        confirmButtonText: "Aceptar"
    }).then(function(result){
        if(result.isConfirmed){
            window.location = window.location.pathname
        } else {
            showModal()
        }
    })
}


    

// Pruebas para conseguir añadir un modal con las funcionalidades que buscaba

/*
$(document).ready(function(){
    $('#example').DataTable({
        ajax:"data.json",
        dom:'Blfrtip',
        pagingType:"simple_numbers",
        buttons:[
            {
                text:'<i class="bi bi-file-earmark-arrow-down""> Exportar</i>',
                className: "btn btn-outline-primary",
                titleAttr:"Exportar",
                
                action: function(e, dt, node, config){
                    alertConfirm2("¿Quieres exportar la página actual o todo el contenido?")
                    //this.disable()
                    //formatoExport()
                }

            },
            {
                extend:"pdf",
                //text:"Exportar a PDF",
                text:'<i class="bi bi-filetype-pdf invisible"></i>',
                className: "btn",
                //titleAttr:"Exportar a PDF",

                /*action: function () {         //Al añadir otra función no realiza la exportación
                    this.disable()
                },*/
                /*exportOptions: {              Revisar la exportación
                    modifier: {
                        selected: undefined
                    }
                }*/
  /*          },
            ],
            language:{
                
                paginate:{
                    previous:"Anterior",
                    next:"Siguiente"
                },
                "search":"Buscar:",
                "lengthMenu": "Mostrar _MENU_ registros por página",
                "zeroRecords": "No hemos encontrado nada",
                "info": "Mostrando página _PAGE_ de _PAGES_",
                "infoEmpty": "No hay datos disponibles",
                "infoFiltered": "(filtrado de _MAX_ registros totales)",
                buttons: {
                    copyTitle: 'Información copiada',
                    copyKeys: 'Presione <i>ctrl</i> ou <i>\u2318</i> para seleccionar los campos y presiona enter.',
                    copySuccess:{
                        1: "Se ha copiado 1 fila al portapapeles",
                        _: "Se han copiado %d filas al portapapeles" 
                    },
                    
                    processing: '<div style="color:black;position:absolute;top:45%;left:50%"><img src="https://media.giphy.com/media/l0HlR76x9YvXW4bG4/source.gif"/></div>'
                }
            }
        })
    })
    */

    /* Más pruebas del Modal

    function showModal2(){
        const modalDIV = new bootstrap.Modal(document.getElementById("exportarModal"))
        modalDIV.show()
    }
    
    function alertSuccess2(msgExport){
        Swal.fire({
            icon: "success",
            title: "¡Correcto!",
            text: msgExport
        }).then(function(){
            window.location = window.location.pathname
        })
    }
    */


// Creación del modal con todas las opciones, tanto la opción de los datos, como el formato
function exportModal(){
    Swal.fire({
        icon: "info",
        title: "¿Quieres exportar la página actual o todo el contenido?",
        showCancelButton: true,
        html:
        '<div class="d-flex justify-content-evenly">'+

        '<div class="form-check form-check-inline">' +
        '<input type="radio" id="opActual" class="form-check-input" name="opDescarga" checked value="actual"> Página Actual </input></br>'+
        '<input type="radio" id="opTodo" class="form-check-input" name="opDescarga" value="todo"> Todo el Documento </input>'+
        '</div>'+


        '<div class="form-check form-check-inline">' +
        '<input type="radio" id="opPdf" class="form-check-input" name="opFormato" checked value="pdf"> PDF </input></br>'+
        '<input type="radio" id="opCsv" class="form-check-input" name="opFormato" value="csv"> CSV </input></br>'+
        '<input type="radio" id="opExcel" class="form-check-input" name="opFormato" value="excel"> EXCEL </input></br>'+
        '<input type="radio" id="opCopy" class="form-check-input" name="opFormato" value="copy"> COPY </input></br>'+
        '<input type="radio" id="opPrint" class="form-check-input" name="opFormato" value="print"> PRINT </input>'+
        '</div>'+

        '</div>'
        ,
        cancelButtonText: "Cancelar",
        confirmButtonText: "Aceptar",  
    })
    .then(function(result){  
        if (result.isConfirmed) {
            formatoExport();
            //Swal.fire('¿Exportado con éxito!', '', 'success'),5000
            } else {
            Swal.fire('No se han guardado los cambios', '', 'info')
            }
    })
}

// Función para recoger los datos seleccionados en el modal
function formatoExport(){
    //alert("Entra")
    let opcionDescarga=document.querySelector("[name='opDescarga']:checked").value;
    let opcionFormato=document.querySelector("[name='opFormato']:checked").value;
    //alert(opcionFormato)
/*
    if(opcionDescarga == "actual"){     // ARREGLAR
        alert("actual")
        document.querySelector(".copyActual").click();
        }else{
            alert("todo")
            document.querySelector(".copyTodo").click();
        }
*/        
    //alert(`.${opcionFormato}_${opcionDescarga}`)
    document.querySelector(`.${opcionFormato}_${opcionDescarga}`).click();

    if(opcionFormato != "copy"){
        Swal.fire('¿Exportado con éxito!', '', 'success')
    }
    
    /*
    switch(opcionFormato){
        case "pdf":
            
            
            break;
        case "csv":
            alert("funciona")
            //exportToCSV();
            break;
        case "excel":
            
            
            break;
        case "copy":
            
            
            break;
        case "print":


            break;
        default:
            console.log("Opcion no valida");
    }*/

}



    // Creación del modal con todas las opciones, tanto la opción de los datos, como el formato
 /*   function alertConfirm2(){
        Swal.fire({
            icon: "info",
            title: "¿Quieres exportar la página actual o todo el contenido?",
            showCancelButton: true,
            html:
            '<div class="d-flex justify-content-evenly">'+

            '<div class="form-check form-check-inline">' +
            '<input type="radio" id="opActual" class="form-check-input" name="opDescarga" checked value="actual"> Página Actual </input></br>'+
            '<input type="radio" id="opTodo" class="form-check-input" name="opDescarga" value="todo"> Todo el Documento </input>'+
            '</div>'+


            '<div class="form-check form-check-inline">' +
            '<input type="radio" id="opPdf" class="form-check-input" name="opFormato" checked value="pdf"> PDF </input></br>'+
            '<input type="radio" id="opCsv" class="form-check-input" name="opFormato" value="csv"> CSV </input></br>'+
            '<input type="radio" id="opExcel" class="form-check-input" name="opFormato" value="excel"> EXCEL </input></br>'+
            '<input type="radio" id="opCopy" class="form-check-input" name="opFormato" value="copy"> COPY </input></br>'+
            '<input type="radio" id="opPrint" class="form-check-input" name="opFormato" value="print"> PRINT </input>'+
            '</div>'+

            '</div>'
            ,
            cancelButtonText: "Cancelar",
            confirmButtonText: "Aceptar",  
        })
        .then(function(result){  
            if (result.isConfirmed) {
                formatoExport();
                //Swal.fire('¿Exportado con éxito!', '', 'success'),5000
              } else {
                Swal.fire('No se han guardado los cambios', '', 'info')
              }
        })
    }*/

/*
function seleccionExport(){
        //alert("Entra")
        let opcionDescarga=document.querySelector("[name='opDescarga']:checked").value;
        //let opcionFormato=document.querySelector("[name='opFormato']:checked").value;
        //alert(opcionFormato)
    if(opcionDescarga == "actual"){     // ARREGLAR
        alert("actual")
        document.querySelector(`.${opcionFormato}_${opcionDescarga}`).click();
    }else{
            alert("todo")
            document.querySelector(".copyTodo").click();
        }
}
*/



/*
function showModal(){
    const modalDIV = new bootstrap.Modal(document.getElementById("exportarModal"))
    modalDIV.show()
}

function alertExportar(msg){
    Swal.fire({
        icon: "success",
        title: "¡Correcto!",
        text: msg,
        action: function(){
            alert("funciona")
        }
    }).then(function(){
        window.location = window.location.pathname
       /* $(document).ready(function(){
            $('#exportarModal').DataTable({
                ajax:"data.json",
                dom:'Blfrtip',
                pagingType:"simple_numbers",
                buttons:[
                    {
                        extend:"pdf",
                        //text:"Exportar a PDF",
                        text:'<i class="bi bi-filetype-pdf"></i>',
                        className: "btn btn-outline-primary",
                        titleAttr:"Exportar a PDF",
                        /*action: function () {         Al añadir otra función no realiza la exportación
                            alert("Funciona")
                        },*/
                        /*exportOptions: {              Revisar la exportación
                            modifier: {
                                selected: undefined
                            }
                        }*/
                 /*   },
                    {
                        extend:"csv",
                        text:'<i class="bi bi-filetype-csv"></i>',
                        className: "btn btn-outline-primary",
                        titleAttr:"Exportar a csv"
                    },
                    {
                        extend:"excel",
                        text:'<i class="bi bi-file-earmark-spreadsheet"></i>',
                        className: "btn btn-outline-primary",
                        titleAttr:"Exportar a Excel"
                    },
                    {
                        extend:"copy",
                        text:'<i class="bi bi-copy exportar"></i>',
                        className: "btn btn-outline-primary",
                        titleAttr:"Copiar",
                    },
                    {
                        extend:"print",
                        text:'<i class="bi bi-printer"></i>',
                        className: "btn btn-outline-primary",
                        titleAttr:"Imprimir"
                    }
                ]
            });

        })*/
/*    })
}
*/


//new DataTable('#example');
// Creación de los botones (invisibles) para exportar los datos de la tabla actuales

$(document).ready(function(){       
    let table = $('#example').DataTable({
        ajax:"data.json",
        dom:'Blfrtip',
        pagingType:"simple_numbers",
        buttons:[
            /*{
                text:'<i>Exportar</i>',
                className: "export btn btn-outline-primary  ",
                titleAttr:"Exportar",
                action: function () {         
                    exportModal()
                },
            },*/
            {
                extend:"pdf",
                //text:"Exportar a PDF",
                text:'<i class="bi bi-filetype-pdf"></i>',
                className: "pdf_todo btn btn-outline-primary invisible ",
                titleAttr:"Exportar a PDF",
                /*action: function () {         //Al añadir otra función no realiza la exportación
                    alert("Funciona")
                },*/
                exportOptions: {             
                    modifier: {
                        selected: "current"
                    }
                }
            },
            {
                extend:"csv",
                text:'<i class="bi bi-filetype-csv"></i>',
                className: "csv_todo btn btn-outline-primary invisible",
                titleAttr:"Exportar a csv"
            },

            {
                text:'<i>Exportar</i>',                                         // BOTON EXPORTAR, QUE PERMITE ACCEDER A LOS DEMÁS QUE ESTÁN INVISIBLES
                className: "export btn btn-outline-primary  ",
                titleAttr:"Exportar",
                action: function () {         
                    exportModal()
                },
            },
            {
                extend:"excel",
                text:'<i class="bi bi-file-earmark-spreadsheet"></i>',
                className: "excel_todo btn btn-outline-primary invisible",
                titleAttr:"Exportar a Excel"
            },
            {
                extend:"copy",
                text:'<i class="bi bi-copy exportar"></i>',
                className: "copy_todo btn btn-outline-primary invisible",
                titleAttr:"Copiar",
                /*exportOptions: {             // Revisar la exportación
                    modifier: {
                        selected: "all"
                    }
                }*/
            },
            {
                extend:"print",
                text:'<i class="bi bi-printer"></i>',
                className: "print_todo btn btn-outline-primary invisible",
                titleAttr:"Imprimir"
            }
        ],
        
        // Cambia toda la información que ofrece el DataTable a español o personalizada a mi gusto
        language:{
            
            paginate:{
                previous:"Anterior",
                next:"Siguiente"
            },
            "search":"Buscar:",
            "lengthMenu": "Mostrar _MENU_ registros por página",
            "zeroRecords": "No hemos encontrado nada",
            "info": "Mostrando página _PAGE_ de _PAGES_",
            "infoEmpty": "No hay datos disponibles",
            "infoFiltered": "(filtrado de _MAX_ registros totales)",
            buttons: {
                copyTitle: 'Información copiada',
                copyKeys: 'Presione <i>ctrl</i> ou <i>\u2318</i> para seleccionar los campos y presiona enter.',
                copySuccess:{
                    1: "Se ha copiado 1 fila al portapapeles",
                    _: "Se han copiado %d filas al portapapeles" 
                },
                
                processing: '<div style="color:black;position:absolute;top:45%;left:50%"><img src="https://media.giphy.com/media/l0HlR76x9YvXW4bG4/source.gif"/></div>'
            }
        }
            
    })


    // Creación de los botones (invisibles) para exportar los datos de la tabla actuales
    new $.fn.dataTable.Buttons( table, {
        buttons: [
            {
                extend:"pdf",
                //text:"Exportar a PDF",
                text:'<i class="bi bi-filetype-pdf"></i>',
                className: "pdf_actual btn btn-outline-primary invisible",
                titleAttr:"Exportar a PDF",
                /*action: function () {         
                    alert("Funciona")
                },*/
                exportOptions: {             
                    modifier: {
                        page: "current"
                    }
                }
            },
            {
                extend:"csv",
                text:'<i class="bi bi-filetype-csv"></i>',
                className: "csv_actual btn btn-outline-primary invisible",
                titleAttr:"Exportar a csv",
                exportOptions: {             
                    modifier: {
                        page: "current"
                    }
                }
            },
            {
                extend:"excel",
                text:'<i class="bi bi-file-earmark-spreadsheet"></i>',
                className: "excel_actual btn btn-outline-primary invisible",
                titleAttr:"Exportar a Excel",
                exportOptions: {             
                    modifier: {
                        page: "current"
                    }
                }
            },
            {
                extend:"copy",
                text:'<i class="bi bi-copy exportar"></i>',
                className: "copy_actual btn btn-outline-primary invisible",
                titleAttr:"Copiar",
                exportOptions: {             
                    modifier: {
                        page: "current"
                    }
                }
            },
            {
                extend:"print",
                text:'<i class="bi bi-printer"></i>',
                className: "print_actual btn btn-outline-primary invisible",
                titleAttr:"Imprimir",
                exportOptions: {             
                    modifier: {
                        page: "current"
                    }
                }
            }
        ]
    } );
    table.buttons( 1, null ).container().appendTo(
        table.table().container()
    );

})




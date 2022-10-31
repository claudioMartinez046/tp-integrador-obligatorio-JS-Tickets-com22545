//event.preventDefault();// con esta funcion desactivo el default de los botones ej el submit lo que hace  es que solo haga los que nosotros le decimos xq al estar activado hace un error dentro del form
// function msjErrores(){ // ver
//     alert('Debe completar cantidad y categoria para realizar la compra');
//     totalPagar = document.getElementById('fondoazul').value ="Total a pagar: $"
// }

function mostrar(event) {
    event.preventDefault()
    let categoria = document.getElementById('categoria').value;
    let cantidad = parseInt(document.getElementById('cantidad').value);
   
    var pCategoria;
switch (categoria) {
    case 'Estudiante':
        pCategoria = 200 * 0.8;
        break;
    case 'Trainee':
        pCategoria = 200 * 0.5;
        break;
    case 'Junior':
        pCategoria = 200 * 0.15;
        break;

    default:
        alert('Debe completar cantidad y categoria para realizar la compra');
        totalPagar = document.getElementById('fondoazul').value ="Total a pagar: $"
        break;
}

//(expresion logica) ? valor_true : valor_false

if(isNaN(cantidad) ){
    alert('Debe completar cantidad y categoria para realizar la compra');
    document.getElementById('fondoazul').value ="Total a pagar: $"
}

total = cantidad * pCategoria;
 document.getElementById('fondoazul').value ="Total a pagar: $" + total;

}

//defincion de botones y inout
const btn_resumen = document.getElementById('btn_resumen');
//ejecuciones
btn_resumen.addEventListener('click', mostrar);






/*
const form = document.querySelector('#formu');
form.addEventListener('submit', validarForm);

function validarForm(event){
    event.preventDefault();
    /*tomar los datos ingresados
    const nombre = document.querySelector("#nombre").value;
    const apellido = document.querySelector("#apellido").value;
    const mail = document.querySelector("#mail").value;
    const cantidad = document.querySelector("#cantidad").value;
    const categoria = document.querySelector("#categoria").value;
    
    
    
    /*descuentos
    const ticket = 200;

    let precio = ticket*cantidad;
    let desc = 0;
    switch(categoria){
        case 'estudiante': 
            desc = precio*0.8;
            break;
        case "trainee":
            desc = precio*0.5;
            break;
        case "junior":
            desc = precio*0.15;
            break;
    }
    
    let total = precio-desc;

    
    
    const mostrar = document.getElementById("azul");
    mostrar.textContent = "Total a Pagar: $"+ total;

  
}

function borrar(){
    const mostrar = document.getElementById("azul");
    mostrar.textContent = "Total a Pagar: $0";
}
*/
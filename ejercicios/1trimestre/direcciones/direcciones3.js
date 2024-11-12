let usuarioActivo = false;
let empresaActivo = false;
let ciudadActivo = false;


let registros = [];
let listaregistros = [];

const btnusuario = document.getElementById("btnusuario");
const btnempresa = document.getElementById("btnempresa");
const btnciudad = document.getElementById("btnciudad");

const lienzo = document.getElementById("lienzo");

// Función para crear las líneas de dirección
function creaLineasDirecciones() {
    registros = listaUsuarios.split("\n");
    console.log(registros);
}

// Función para crear las direcciones (dividir por comas)
function creaDirecciones() {
    for (let i = 0; i < registros.length; i++) {
        listaregistros[i] = registros[i].split(",");
        console.log(listaregistros[i]);
    }
}


function usuario() {
    let txtusers = "";
    txtusers = '<table>';
    txtusers += '<tr><th> Usuario</th></tr > ';
    for (let i = 0; i < listaregistros.length; i++) {
        txtusers += `<tr><td>${listaregistros[i][1]}</td></tr>`;
    }
    txtusers += '</table>';
    return txtusers;

}

function empresa() {
    let txtemp = "";
    txtemp = '<table>';
    txtemp += '<tr><th> Empresa    </th></tr > ';
    for (let i = 0; i < listaregistros.length; i++) {
        txtemp += `<tr><td>${listaregistros[i][2]}</td></tr>`;
    }
    txtemp += '</table>';
    return txtemp;

}

function ciudad() {
    let txtcity = "";
    txtcity = '<table>';
    txtcity += '<tr><th> Ciudad </th></tr > ';
    for (let i = 0; i < listaregistros.length; i++) {
        txtcity += `<tr><td>${listaregistros[i][3]}</td></tr>`;
    }
    txtcity += '</table>';
    return txtcity;

}

function juntar() {

    let html = "";/*Para limpiar */

    if (usuarioActivo) {
        html += usuario();
    }
    if (empresaActivo) {
        html +=
            empresa();
    } if (ciudadActivo) {
        html +=
            ciudad();
    }
    lienzo.innerHTML = html;
}

function usuarioJuntar() {
    usuarioActivo = !usuarioActivo;/*cAMBIAMOS EL ESTADO*/
    juntar();
}

function empresaJuntar() {
    empresaActivo = !empresaActivo;/*cAMBIAMOS EL ESTADO*/
    juntar();
}
function ciudadJuntar() {
    ciudadActivo = !ciudadActivo;/*cAMBIAMOS EL ESTADO*/
    juntar();
}

creaLineasDirecciones();
creaDirecciones();

btnusuario.addEventListener("click", usuarioJuntar);

btnempresa.addEventListener("click", empresaJuntar);

btnciudad.addEventListener("click", ciudadJuntar);



// Carolina Yelmo López :)
// ==============================

const nequipo = document.getElementById("nequipo");
const nombre = document.getElementById("nombre");
const altura1 = document.getElementById("altura1");
const altura2 = document.getElementById("altura2");
const altura3 = document.getElementById("altura3");
const altura4 = document.getElementById("altura4");
const altura5 = document.getElementById("altura5");
const altmin = document.getElementById("altmin");
const altmax = document.getElementById("altmax");
const descripcion = document.getElementById("descripcion");
const findcomment = document.getElementById("findcomment");

let listaEquipos = [];
let equiposPartidos = [];
let alturas = [];

let cont = -1;  //pa saber en que equipo estamos

//1
function creaLineasEquipos() {
    listaEquipos = datosEquipos.split("\n");
    console.log(listaEquipos);
}

function separarDatos() {
    for (let i = 0; i < listaEquipos.length; i++) {
        equiposPartidos[i] = listaEquipos[i].split(":");
        console.log(equiposPartidos[i]);
    }

    for (let i = 0; i < equiposPartidos.length; i++) {
        alturas[i] = equiposPartidos[i][1].split(";");
        console.log(alturas[i]);
    }
}

//2
const reset = document.getElementById("reset");
const avisos = document.getElementById("avisos");

function resetear() {
    nequipo.innerText = "";
    nombre.innerText = "";
    altura1.innerText = "";
    altura2.innerText = "";
    altura3.innerText = "";
    altura4.innerText = "";
    altura5.innerText = "";
    altmax.innerText = "Mayor";
    altmin.innerText = "Menor";
    descripcion.innerText = "";
    avisos.innerText = "";
    cont = -1;
}

reset.addEventListener("click", resetear);

// escribir los datos
function escribir(num) {

    let nequipoE = num + 1;
    nequipo.innerText = nequipoE;

    let nombreE = equiposPartidos[num][0];
    nombre.innerText = nombreE;

    let altura1E = alturas[num][0];
    altura1.innerText = altura1E;

    let altura2E = alturas[num][1];
    altura2.innerText = altura2E;

    let altura3E = alturas[num][2];
    altura3.innerText = altura3E;

    let altura4E = alturas[num][3];
    altura4.innerText = altura4E;

    let altura5E = alturas[num][4];
    altura5.innerText = altura5E;

    let altmaxE = Math.max(altura1E, altura2E, altura3E, altura4E, altura5E);
    altmax.innerText = altmaxE;

    let altminE = Math.min(altura1E, altura2E, altura3E, altura4E, altura5E);
    altmin.innerText = altminE;

    let descripcionE = equiposPartidos[num][2];
    descripcion.innerText = descripcionE;
}


//3

const first = document.getElementById("first");
function primerito() {
    escribir(0);
    cont = 0;
}
first.addEventListener("click", primerito);

const last = document.getElementById("last");
function ultimito() {
    let cuantosHay = (equiposPartidos.length - 1);
    escribir(cuantosHay);
    cont = cuantosHay;
}
last.addEventListener("click", ultimito);

//4
const prev = document.getElementById("prev");
function previo() {
    if (cont <= 0) {
        avisos.innerText = "¡¡ Ya estás al inicio de la lista !!";
    } else {
        avisos.innerText = "Los fallos de uso se muestran aqui";
        cont--;
        escribir(cont);
    }
}
prev.addEventListener("click", previo);

const next = document.getElementById("next");
function siguiente() {
    let cuantosHay = (equiposPartidos.length - 1);
    if (cont === cuantosHay) {
        avisos.innerText = "¡¡ Ya llegaste al final de la lista !!";
    } else {
        avisos.innerText = "Los fallos de uso se muestran aqui";
        cont++;
        escribir(cont);
    }
}
next.addEventListener("click", siguiente);


//5
const auto = document.getElementById("auto");
function automatico() {
    let cuantosHay = (equiposPartidos.length);
    cont++;
    if (cont === cuantosHay) {
        cont = 0;
        escribir(0);
    } else {
        escribir(cont);
    }
}

let myVar;
function usoAutomico() {
    avisos.innerText = "Los fallos de uso se muestran aqui";
    if (auto.innerText === "Parar") {
        clearInterval(myVar);
        auto.innerText = "Automático";
    } else {
        auto.innerText = "Parar";
        myVar = setInterval(automatico, 500);
    }
}
auto.addEventListener("click", usoAutomico);


//6 
const gofind = document.getElementById("gofind");
function busqueda() {
    let buscaComentario = findcomment.value;

    let nEncontrados = 0;

    for (let i = 0; i < equiposPartidos.length; i++) {
        if (equiposPartidos[i][2].includes(buscaComentario)) {
            cont = i;
            nEncontrados++;
            break;
        }
    }
    if (nEncontrados == 0) {
        avisos.innerText = "No se encuentra esa palabra en los comenarios";
    } else {
        avisos.innerText = "Los fallos de uso se muestran aqui";
        escribir(cont);
    }
}
gofind.addEventListener("click", busqueda);

creaLineasEquipos();
separarDatos();






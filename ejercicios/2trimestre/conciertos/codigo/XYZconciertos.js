const showtable = document.getElementById("showtable"); //e van a mostrar los distintos resultados de la tabla
const showdetail = document.getElementById("showdetail"); //aparece el detalle del elemento seleccionado con el botón “Go!

//botones
const find = document.getElementById("find"); //boton go
const btnall = document.getElementById("btnall"); //mostrar todos
const btnorden = document.getElementById("btnorden"); //mostrar por orden
const bso = document.getElementsByName("bso");

const idsong = document.getElementById("idsong");


let listaConciertoSeparados = [];

function creaLista() {
    for (let i = 0; i < listaConciertos.length; i++){
        listaConciertoSeparados.push(listaConciertos[i]);
    }
    console.log(listaConciertoSeparados);
}

creaLista();

//imprimir la tabla
function mostrarCirculo(concierto){
  const fila = document.createElement("tr");
      
  let idsong = document.createElement("td");
  idsong.textContent = concierto.idsong;
  idsong.classList.add("celda");

  let bso = document.createElement("td");
  bso.textContent = concierto.BSO;
  bso.classList.add("celda");

  let director = document.createElement("td");
  director.textContent = concierto.director;
  director.classList.add("celda");

  let orquesta = document.createElement("td");
  orquesta.textContent = concierto.orquesta;
  orquesta.classList.add("celda");

  let nconciertos = document.createElement("td");
  nconciertos.textContent = concierto.nconciertos;
  nconciertos.classList.add("celda");

  let ciudad = document.createElement("td");
  ciudad.textContent = concierto.ciudad;
  ciudad.classList.add("celda");
    
  fila.appendChild(idsong);
  fila.appendChild(bso);
  fila.appendChild(director);
  fila.appendChild(orquesta);
  fila.appendChild(nconciertos);
  fila.appendChild(ciudad);

  return fila;
  }

function pintarCabecera(){
    const tabla = document.createElement("table");
  
    const filaCabeceras = document.createElement("tr");
    let cabeceras = ["idsong", "BSO", "director", "orquesta" , "nconciertos", "ciudad" ];
    cabeceras.forEach(headerText => {
      const th = document.createElement("th");
      th.textContent = headerText;
      th.classList.add("cabecera");
      th.classList.add("celda");
      filaCabeceras.appendChild(th);
    });
    tabla.appendChild(filaCabeceras);

    const tbody = document.createElement("tbody");
    tabla.appendChild(tbody);

    showtable.appendChild(tabla);
    showtable.appendChild(tbody);
}

pintarCabecera()

function MostrarTodos(){
  const vaciarBody = showtable.querySelector("tbody");
  vaciarBody.innerHTML = "";  
  
  const tbody = vaciarBody; 

listaConciertos.forEach(concierto => {
 const fila = mostrarCirculo(concierto);
  
  tbody.appendChild(fila);
});

showtable.appendChild(tbody);
}



  btnall.addEventListener("click", MostrarTodos);



function BSOmostrar(valorBSO){
 
    if (valorBSO === "T"){
        
      const vaciarBody = showtable.querySelector("tbody");
      vaciarBody.innerHTML = "";  
      
      const tbody = vaciarBody; 
  
    listaConciertos.forEach(concierto => {
    if(concierto.BSO.includes("Titanic")){
     const fila = mostrarCirculo(concierto);
      
      tbody.appendChild(fila);}
    });
  
    showtable.appendChild(tbody);
    } else  if (valorBSO === "K"){
                
      const vaciarBody = showtable.querySelector("tbody");
      vaciarBody.innerHTML = "";  
      
      const tbody = vaciarBody; 
  
    listaConciertos.forEach(concierto => {
    if(concierto.BSO.includes("The Lion King")){
      const fila = mostrarCirculo(concierto);
      
      tbody.appendChild(fila);}
    });
  
    showtable.appendChild(tbody);
    }else  if (valorBSO === "L"){
                
      const vaciarBody = showtable.querySelector("tbody");
      vaciarBody.innerHTML = "";  
      
      const tbody = vaciarBody; 
  
    listaConciertos.forEach(concierto => {
    if(concierto.BSO.includes("La La Land")){
      const fila = mostrarCirculo(concierto);
      
      tbody.appendChild(fila);}
    });
  
    showtable.appendChild(tbody);
    }else if (valorBSO === "G"){
                
      const vaciarBody = showtable.querySelector("tbody");
      vaciarBody.innerHTML = "";  
      
      const tbody = vaciarBody; 
   
    listaConciertos.forEach(concierto => {
    if(concierto.BSO.includes("Grease")){
      const fila = mostrarCirculo(concierto);
      
      tbody.appendChild(fila);}
    });
  
    showtable.appendChild(tbody);
    }
}


function BSOespecifica(){
    let bso = document.querySelector('input[name="bso"]:checked'); 
    let bandaSonora = bso ? bso.value : "No seleccionada";
    BSOmostrar(bandaSonora);
    console.log(bandaSonora);
}



bso.forEach(radio => {
    radio.addEventListener('change', BSOespecifica);
});

function mostrarOrdenados(){
  let copiaLista = [];
  copiaLista = listaConciertos.slice().sort((a,b)=> b.nconciertos - a.nconciertos);

  const vaciarBody = showtable.querySelector("tbody");
  vaciarBody.innerHTML = "";  
  
  const tbody = vaciarBody; 

  copiaLista.forEach(concierto => {
 const fila = mostrarCirculo(concierto);
  
  tbody.appendChild(fila);
});

showtable.appendChild(tbody);
}


btnorden.addEventListener("click", mostrarOrdenados);

function detalleConcierto() {
  let cancionBuscar = idsong.value;
  let existe = false;

  let infoCancion1 = "";
  let infoCancion2 = "";
  let infoCancion3 = "";
  let infoCancion4 = "";
  let infoCancion5 = "";

  listaConciertos.forEach(concierto => {
    if (cancionBuscar === concierto.idsong) {
      existe = true;  
      infoCancion1 = "BSO: " + concierto.BSO;
      infoCancion2 = "Director: " + concierto.director + '\n';
      infoCancion3 = "Orquesta: " + concierto.orquesta + '\n';
      infoCancion4 = "Ciudad: " + concierto.ciudad + '\n';
      infoCancion5 = "N. Conciertos: " + concierto.nconciertos + '\n';
    }
  });

  const div = document.createElement("div");  
  div.classList.add("fondo");

  if (!existe) {
    const p2 = document.createElement("p");  
    p2.classList.add("identificador");
    p2.textContent = "Este ID es incorrecto";
    div.appendChild(p2);
  } else {

    const p = document.createElement("p");  
    p.classList.add("foto");   
    div.appendChild(p);

    const p2 = document.createElement("p");  
    p2.classList.add("identificador");
    p2.textContent = cancionBuscar;  
    div.appendChild(p2);

    const bso = document.createElement("p");  
    bso.textContent = infoCancion1;
    bso.classList.add("data");
    div.appendChild(bso);

    const director = document.createElement("p");  
    director.textContent = infoCancion2;
    director.classList.add("data");
    div.appendChild(director);

    const orquesta = document.createElement("p");  
    orquesta.textContent = infoCancion3;
    orquesta.classList.add("data");
    div.appendChild(orquesta);

    const ciudad = document.createElement("p");  
    ciudad.textContent = infoCancion4;
    ciudad.classList.add("data");
    div.appendChild(ciudad);

    const nconciertos = document.createElement("p");  
    nconciertos.textContent = infoCancion5;
    nconciertos.classList.add("data");
    div.appendChild(nconciertos);
  }
  showdetail.innerHTML = "";
  showdetail.appendChild(div);
}

find.addEventListener("click",detalleConcierto);

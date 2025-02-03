//CYL

// Ciudades a añadir como opciones al input select
const cities = ["Granada", "Valencia", "Madrid", "Toledo"];

const grafica = document.getElementById("grafica");
const cityname = document.getElementById("cityname");
const citystats = document.getElementById("citystats");
const scities = document.getElementById("scities");



let listaCirculos = [];

function creaLista() {
    listaCirculos = JSON.parse(circle_data);
    console.log(listaCirculos);
}

creaLista();


function graficaInicial(){
  listaCirculos.forEach(circulo => {
    const circul = mostrarCirculo(circulo); 
    grafica.appendChild(circul);
  });
}

graficaInicial();

function rellenarSelect(){
  const op = document.createElement("option");
  op.textContent = "Todas las provincias";
  op.value = 't';
  scities.appendChild(op);

  cities.forEach(ciudad => {
    const op = document.createElement("option");
    op.textContent = ciudad;
    op.value = `${ciudad}`;
    console.log(ciudad);
    scities.appendChild(op);
  });
}

rellenarSelect();

function mostrarCirculo(circulo){
  const div = document.createElement("div");
  div.classList.add("circle");
  div.style.left = `${circulo.ejex}px` ;
  div.style.top = `${circulo.ejey }px`;
  div.style.width =  `${circulo.box}px` ;
  div.style.height =   `${circulo.box}px`;
  div.style.boxShadow= ` 0 0 0  ${circulo.margin}px ${circulo.colormargin}`  ;
  div.style.backgroundColor =  `${circulo.colorbox}`;

  div.addEventListener('mouseover', () => {
    cityname.textContent = circulo.label;
    cityname.classList.add('info');
  });

  div.addEventListener('click', () => {
    citystats.innerHTML = ''; 
    const infoDiv = document.createElement('div');
    infoDiv.classList.add('info');
    infoDiv.innerHTML = `Código: ${circulo.cod}<br>Valor: ${circulo.box}<br>Incremento: ${circulo.margin}`;
    citystats.appendChild(infoDiv);
  });
  
  return div;
  }

function pintarSelect(){
  let scities = document.getElementById("scities");
  let ciudad = scities.value;
  grafica.innerHTML = "";  
  console.log(ciudad);

  if (ciudad === "t"){
    listaCirculos.forEach(circulo => {
   const circul = mostrarCirculo(circulo);
   grafica.appendChild(circul);
  });

  } else  if (ciudad === "Granada"){
    listaCirculos.forEach(circulo => {
    if(circulo.label.includes("Granada")){
    const circul = mostrarCirculo(circulo);
   grafica.appendChild(circul);}
  });

  }else  if (ciudad === "Valencia"){
    listaCirculos.forEach(circulo => {
      if(circulo.label.includes("Valencia")){
        const circul = mostrarCirculo(circulo);
       grafica.appendChild(circul);}
      });
    
  }else if (ciudad === "Madrid"){

  listaCirculos.forEach(circulo => {
    if(circulo.label.includes("Madrid")){
      const circul = mostrarCirculo(circulo);
     grafica.appendChild(circul);}
    });
  
}else if (ciudad === "Toledo"){

  listaCirculos.forEach(circulo => {
    if(circulo.label.includes("Toledo")){
      const circul = mostrarCirculo(circulo);
     grafica.appendChild(circul);}
    });}}

scities.addEventListener('change', pintarSelect);

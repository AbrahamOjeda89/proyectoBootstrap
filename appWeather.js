// Creación de constantes y variables para la tabla del tiempo
const tiempo = []
let ciudadBuscada = {}
const ciudades = ["madrid","barcelona","villena","murcia","almansa","elda"]
let datosTiempo
let json

// Se añade un evento de teclado para que reconozca la tecla "Enter" y así poder añadir la ciudad buscada y poder realizar todo el funcionamiento
document.querySelector("#ciudadEntrada").addEventListener("keydown",teclado)

function teclado(e){
  //console.log(e.key)
  if(e.key=="Enter"){
    e.preventDefault()
    ciudadBuscada = document.querySelector("#ciudadEntrada").value
    //console.log(ciudadBuscada)
    ciudades.push(ciudadBuscada)
    appTiempo()
    //console.log(ciudades)
    document.querySelector("#ciudadEntrada").value="";
  }
}

// Creación de la función que realiza la conexión con la API y pinta los datos en la tabla y en la ciudad buscada si procede
const appTiempo = async() =>{

// Recorremos todo el array para recoger los datos de cada ciudad y recoger lo que nos interesa en el array tiempo
//console.log(ciudades)
for (var i in ciudades){
  
const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${ciudades[i]}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '938df8e3c1mshe27ff1797a80833p1b662ajsnbc088ff189e6',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();

  //
  json = JSON.parse(result);
     //console.log('JSON:', json);

     datosTiempo = {
      ciudad: json.location.name,
      region: json.location.region,
      pais: json.location.country,
      ultimaActualizacion: json.current.last_updated,
      temperatura: json.current.temp_c + "ºC",
      sensacionTermica: json.current.feelslike_c + "ºC",
      precipitaciones: json.current.precip_mm +"mm",
      condiciones: json.current.condition.text,
      icono: json.current.condition.icon

   };
  
   //console.log('Datos Tiempo:', datosTiempo);
   tiempo.push(datosTiempo)
   //if(i == ciudadBuscada){
    ciudadBuscada = datosTiempo
    //console.log(ciudadBuscada)
   //}
   



} catch (error) {
	console.error(error);
}
i++
}

//console.log(tiempo)

// Se limpia la tabla y se recorre todo el array para ir pintando la tabla
document.querySelector(".tiempo").innerHTML=""

for(let i=0; i<6; i++){
  document.querySelector(".tiempo").innerHTML+=`
<tr>
  <td>${tiempo[i].ciudad}</td>
  <td>${tiempo[i].region}</td>
  <td>${tiempo[i].pais}</td>
  <td>${tiempo[i].temperatura}</td>
  <td>${tiempo[i].condiciones}</td>
  <td>${tiempo[i].precipitaciones}</td>
  <td>${tiempo[i].sensacionTermica}</td>
  <td><img src="${tiempo[i].icono}"></td>
</tr>
`
//console.log(tiempo[i].icono)
}

// Se añade debajo de la tabla la hora de actualización de los datos
document.querySelector(".actualizacion").innerHTML=`
${tiempo[0].ultimaActualizacion}
`

// Si se añade una ciudad en el input se pinta los datos de la ciudad buscada
//console.log(ciudadBuscada)
if(ciudadBuscada.ciudad != "Elda"){
    document.querySelector("#ciudad").innerHTML=`
    <div id="tiempoCiudad">
      <div>
        <div>Ciudad: ${ciudadBuscada.ciudad}</div>
        <div>Región: ${ciudadBuscada.region}</div>
        <div>País: ${ciudadBuscada.pais}</div>
        <div>Temperatura: ${ciudadBuscada.temperatura}</div>
        <div>Condiciones del clima: ${ciudadBuscada.condiciones}</div>
        <div>Precipitaciones: ${ciudadBuscada.precipitaciones}</div>
        <div>Sensación termica: ${ciudadBuscada.sensacionTermica}</div>
      </div>
      <div><img src="${ciudadBuscada.icono}"></div>
    <div>
    `


}
}

// Se llama a la función para que funcione
appTiempo()

//console.log(ciudadBuscada)


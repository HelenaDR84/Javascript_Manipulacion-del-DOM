//Crear un botón en HTML y usar JavaScript para mostrar un mensaje cuando se hace clic.
function myFunction() {
    document.getElementById("download_button").innerHTML = "Descargando...";
  }
//Cambiar el contenido de un elemento HTML mediante JavaScript. (Está en en HTML)
//Ocultar y mostrar elementos HTML utilizando JavaScript.  (Está en en HTML)

        // Al inicio, ocultamos el elemento
        document.getElementById("demo").style.display = "none";

        function myFunction() {
          // Cuando se hace clic en el botón, mostramos el elemento
          document.getElementById("demo").style.display = "block";
        }

//Crear un array de 10 nombres.
let nombres = ["Antonio", "Pedro", "José", "Ana", "Lucía", "Sonia", "Carlos", "Eva", "Silvia", "Hugo"];
console.log(nombres);

//Crear una función que imprima en pantalla una lista con los nombres del array de nombres.
function imprimir_nombres(nombres) {
  for(let i = 0; i < array.length; i++) {
      console.log(nombres[i]);
  }
}
imprimir_nombres(nombres);

//Crear un array de números.
let num = [6, 7, 8, 9, 10];

//Crear una función que pinte en pantalla cuántos números tiene el array de números.
function contar_numeros(num) {"Este array tiene"+ num.length+ "números."};
contar_numeros (num);

//Crea los nodos necesarios para imprimir un formulario.
let form  = document.createElement ("form");
let input = document.createElement ("input");
document.body.appendChild(form);
document.body.appendChild(Input);


//Crea los nodos necesarios para imprimir una tabla.
let table = document.createElement ("table")
document.body.appendChild(table);

//Crea array de objetos 10 objetos con su respectivos key:value. Cada objeto deberá tener las siguientes keys: id, name, status, species, type, gender (El value de cada key lo asignas tú)
let coders = [
{
  id: 1,
  name: "Alberto",
  status: "Soltero",
  species: "humano",
  type: "persona",
  gender: "masculino",
},
{
  id: 2,
  name: "Lorena",
  status: "casada",
  species: "humano",
  type: "persona",

},
{
  id: 3,
  name: "Carla",
  status: "Soltera",
  species: "humano",
  type: "persona",
  gender: "femenino",
},
{
  id: 4,
  name: "Carlos",
  status: "Soltero",
  species: "humano",
  type: "persona",
  gender: "masculino",
},
{
  id: 5,
  name: "Sofia",
  status: "Soltera",
  species: "humano",
  type: "persona",
  gender: "femenino",
},
{
  id: 6,
  name: "Celia",
  status: "Casada",
  species: "humano",
  type: "persona",
  gender: "femenino",
},
{
  id: 7,
  name: "Pedro",
  status: "Viudo",
  species: "humano",
  type: "persona",
  gender: "masculino",
},
{
  id: 8,
  name: "Andrea",
  status: "Soltero",
  species: "humano",
  type: "persona",
  gender: "prefiere no decirlo",
},
{
  id: 9,
  name: "Camila",
  status: "Separada",
  species: "humano",
  type: "persona",
  gender: "femenino",
},
{
  id: 10,
  name: "Jorge",
  status: "Casado",
  species: "humano",
  type: "persona",
  gender: "masculino",
},
]

//Imprime cada elemento del objeto dentro de la tabla que creaste anteriormente.

let headerRow = document.createElement("tr");
["id", "name", "status", "species", "type", "gender"].forEach(text => {
  let th = document.createElement("th");
  th.textContent = text;
  headerRow.appendChild(th);
});
table.appendChild(headerRow);

coders.forEach(coder => {
  let row = document.createElement("tr");
  
  let tdId = document.createElement("td");
  tdId.textContent = coder.id;
  row.appendChild(tdId);
  
  let tdName = document.createElement("td");
  tdName.textContent = coder.name;
  row.appendChild(tdName);
  
  let tdStatus = document.createElement("td");
  tdStatus.textContent = coder.status;
  row.appendChild(tdStatus);
  
  let tdSpecies = document.createElement("td");
  tdSpecies.textContent = coder.species;
  row.appendChild(tdSpecies);
  
  let tdType = document.createElement("td");
  tdType.textContent = coder.type;
  row.appendChild(tdType);
  
  let tdGender = document.createElement("td");
  tdGender.textContent = coder.gender;
  row.appendChild(tdGender);
  
  table.appendChild(row);
});

document.body.appendChild(table);



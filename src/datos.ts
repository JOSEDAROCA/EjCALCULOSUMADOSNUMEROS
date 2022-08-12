import "./styles.css";

let btnEnv = document.getElementById("btnEnviar");
let dato = document.getElementById("dato");
let dato2 = document.getElementById("dato2");

btnEnv.addEventListener("click", () => {
  let datoNumerico: number = Number(dato.value);
  let datoNumerico2: number = Number(dato2.value);

  let resultado: number = datoNumerico + datoNumerico2;

  console.log("El resultado de la suma es: ", resultado);
});

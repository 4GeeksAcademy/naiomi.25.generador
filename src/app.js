/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let quien = ["mama", "profesora", "hamster", "jefa"];
  let accion = ["robó", "chocó", "gritó", "saltó"];
  let qué = ["trabajo", "ascensor", "establo", "parque"];
  let cuándo = [
    "cuando salia de casa",
    "cuando estaba dormida",
    "mientras conducia",
    "mientras comia"
  ];

  let quienAleatorio = quien[Math.floor(Math.random() * quien.length)];
  let accionAleatorio = accion[Math.floor(Math.random() * accion.length)];
  let quéAleatorio = qué[Math.floor(Math.random() * qué.length)];
  let cuándoAleatorio = cuándo[Math.floor(Math.random() * cuándo.length)];

  let excusa = `Mi ${quienAleatorio} ${accionAleatorio} en el ${quéAleatorio} ${cuándoAleatorio} `;
  console.log(excusa);

  document.getElementById("excuse").innerHTML = excusa;
  //write your code here
  console.log("Hello Rigo from the console!");
};

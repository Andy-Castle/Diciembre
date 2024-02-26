const cronometro = document.getElementById("cronometro");
const botonInicioPausa = document.getElementById("boton-inicio-pausa");
const botonReiniciar = document.getElementById("boton-reiniciar");

let [hora, minutos, segundos] = [0, 0, 0];

let intervaloDelTiempo;
let estadoCronometro = "pausado";

function actualizarCronometro() {
  segundos++;
  if (segundos / 60 === 1) {
    segundos = 0;
    minutos++;

    if (minutos / 60 === 1) {
      minutos = 0;
      hora++;
    }
  }

  const segundosConFormato = asignarFormato(segundos);
  const minutosConFormato = asignarFormato(minutos);
  const horasConFormato = asignarFormato(hora);

  cronometro.innerText = `${horasConFormato}:${minutosConFormato}:${segundosConFormato}`;
}

function asignarFormato(unidadDeTiempo) {
  return unidadDeTiempo < 10 ? "0" + unidadDeTiempo : unidadDeTiempo;
}

function pauseFill() {
  botonInicioPausa.innerHTML = `<i class="bi bi-pause-fill"></i>`;
  botonInicioPausa.classList.remove("iniciar");
  botonInicioPausa.classList.add("pausar");
}

function playFill() {
  botonInicioPausa.innerHTML = `<i class="bi bi-play-fill"></i>`;
  botonInicioPausa.classList.remove("pausar");
  botonInicioPausa.classList.add("iniciar");
}

botonInicioPausa.addEventListener("click", function () {
  if (estadoCronometro === "pausado") {
    intervaloDelTiempo = window.setInterval(actualizarCronometro, 1000);
    pauseFill();
    estadoCronometro = "andando";
  } else {
    window.clearInterval(intervaloDelTiempo);
    playFill();
    estadoCronometro = "pausado";
  }
});

botonReiniciar.addEventListener("click", function () {
  window.clearInterval(intervaloDelTiempo);

  hora = 0;
  minutos = 0;
  segundos = 0;

  cronometro.innerText = "00:00:00";
  playFill();
  estadoCronometro = "pausado";
});

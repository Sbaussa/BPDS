lucide.createIcons();

let contador = 0;

function actualizarColor() {
  const numero = document.getElementById("numero");
  numero.classList.remove("positivo", "negativo");

  if (contador >= 1) {
    numero.classList.add("positivo");
  } else if (contador < 0) {
    numero.classList.add("negativo");
  }
}

function sumar() {
  contador = contador + 1;
  document.getElementById("numero").textContent = contador;
  actualizarColor();
}

function restar() {
  contador = contador - 1;
  document.getElementById("numero").textContent = contador;
  actualizarColor();
}

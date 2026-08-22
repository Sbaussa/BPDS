lucide.createIcons();

let contador = 0;

function sumar() {
  contador = contador + 1;
  document.getElementById("numero").textContent = contador;
}

function restar() {
  contador = contador - 1;
  document.getElementById("numero").textContent = contador;
}

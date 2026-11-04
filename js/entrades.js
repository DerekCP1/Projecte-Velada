const selectZona = document.getElementById("zona");
const inputNumEntrades = document.getElementById("num-entrades");
const spanPreuTotal = document.getElementById("preu-total");
const formEntrades = document.getElementById("form-entrades");

// Funció per calcular el preu total (Preu zona * quantitat + 5€ de gestió)
function calcularPreu() {
  const preuZona = parseFloat(selectZona.value);
  const quantitat = parseInt(inputNumEntrades.value) || 1;
  const despesesGestio = 5;

  const total = (preuZona * quantitat) + despesesGestio;
  spanPreuTotal.textContent = total + " €";
}

// Actualitzar el preu quan canvia la zona o el nombre d'entrades
selectZona.onchange = calcularPreu;
inputNumEntrades.oninput = calcularPreu;

// Missatge de confirmació en enviar el formulari
formEntrades.onsubmit = function(event) {
  event.preventDefault(); // Evita que la pàgina es recarregui
 
  const nom = document.getElementById("nom").value;
  alert("Gràcies per la teva compra, " + nom + "! Les teves entrades s'han reservat correctament.");
 
  formEntrades.reset(); // Neteja el formulari
  calcularPreu(); // Torna a calcular el preu base
};
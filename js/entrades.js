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
  return total;
}

// Actualitzar el preu quan canvia la zona o el nombre d'entrades
selectZona.onchange = calcularPreu;
inputNumEntrades.oninput = calcularPreu;

// Missatge de confirmació en enviar el formulari
formEntrades.onsubmit = function(event) {
  event.preventDefault();

  const nom = document.getElementById("nom").value.trim();
  const email = document.getElementById("email").value.trim();
  const telefon = document.getElementById("telefon").value.trim();

  // Validar nom
  if (!/^[A-Za-zà-ÿ\s]{3,60}$/.test(nom)) {
    alert("Camp nom incorrecte. Només es permeten lletres i espais.");
    return;
  }

  // Validar telèfon
  if (!/^[0-9]{9}$/.test(telefon)) {
    alert("Camp incorrecte: el telèfon ha de tenir 9 números.");
    return;
  }

  // Validar correu electrònic
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Camp incorrecte: introdueix un correu electrònic vàlid.");
    return;
  }

  // Alerta d'agraïment original
  alert(
    "Gràcies per la teva compra, " +
    nom +
    "! Les teves entrades s'han reservat correctament."
  );

  // Generar el resum i el codi de reserva
  const codiReserva = "VELADA7-" + Math.floor(Math.random() * 90000 + 10000);
  const total = calcularPreu();
  const quantitat = inputNumEntrades.value;

  // Ocultar el formulari
  formEntrades.style.display = "none";

  // Mostrar les dades al resum
  document.getElementById("resum-text").innerHTML = 
    "<strong>Nom:</strong> " + nom + "<br>" +
    "<strong>Email:</strong> " + email + "<br>" +
    "<strong>Telèfon:</strong> " + telefon + "<br>" +
    "<strong>Entrades:</strong> " + quantitat + "<br>" +
    "<strong>Total:</strong> " + total + " €";

  document.getElementById("resum-codi").textContent = "Codi de reserva: " + codiReserva;
  
  document.getElementById("resum").style.display = "block";
};

// Calcular preu inicial
calcularPreu();
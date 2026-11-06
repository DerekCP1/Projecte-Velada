const selectZona = document.getElementById("zona");
const inputNumEntrades = document.getElementById("num-entrades");
const spanPreuTotal = document.getElementById("preu-total");
const formEntrades = document.getElementById("form-entrades");

const nom = document.getElementById("nom");
const email = document.getElementById("email");
const telefon = document.getElementById("telefon");

// Missatges personalitzats
nom.addEventListener("invalid", function () {
  this.setCustomValidity("Camp incorrecte. Només es permeten lletres i espais.");
});

nom.addEventListener("input", function () {
  this.setCustomValidity("");
});

telefon.addEventListener("invalid", function () {
  this.setCustomValidity("Camp incorrecte. El telèfon ha de tenir 9 dígits.");
});

telefon.addEventListener("input", function () {
  this.setCustomValidity("");
});

email.addEventListener("invalid", function () {
  this.setCustomValidity("Camp incorrecte. Introdueix un correu electrònic vàlid.");
});

email.addEventListener("input", function () {
  this.setCustomValidity("");
});

// Funció per calcular el preu total
function calcularPreu() {
  const preuZona = parseFloat(selectZona.value);
  const quantitat = parseInt(inputNumEntrades.value) || 1;
  const despesesGestio = 5;

  const total = (preuZona * quantitat) + despesesGestio;
  spanPreuTotal.textContent = total + " €";
}

// Actualitzar preu
selectZona.onchange = calcularPreu;
inputNumEntrades.oninput = calcularPreu;

// Enviar formulari
formEntrades.onsubmit = function (event) {
  event.preventDefault();

  if (!formEntrades.checkValidity()) {
    return;
  }

  alert(
    "Gràcies per la teva compra, " +
    nom.value +
    "! Les teves entrades s'han reservat correctament."
  );

  formEntrades.reset();
  calcularPreu();
};

// Preu inicial
calcularPreu();
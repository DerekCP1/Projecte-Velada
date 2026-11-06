
const selectZona = document.getElementById("zona");
const inputNumEntrades = document.getElementById("num-entrades");
const spanPreuTotal = document.getElementById("preu-total");
const formEntrades = document.getElementById("form-entrades");

function calcularPreu() {
  const preuZona = parseFloat(selectZona.value);
  const quantitat = parseInt(inputNumEntrades.value) || 1;
  const total = (preuZona * quantitat) + 5;

  spanPreuTotal.textContent = total + " €";
  return total;
}

selectZona.onchange = calcularPreu;
inputNumEntrades.oninput = calcularPreu;

formEntrades.onsubmit = function(event) {
  event.preventDefault();

  const nom = document.getElementById("nom").value.trim();
  const email = document.getElementById("email").value.trim();
  const telefon = document.getElementById("telefon").value.trim();

  if (!/^[A-Za-zà-ÿ\s]{3,60}$/.test(nom)) {
    return alert("Camp nom incorrecte. Només es permeten lletres i espais.");
  }
  if (!/^[0-9]{9}$/.test(telefon)) {
    return alert("Camp incorrecte: el telèfon ha de tenir 9 números.");
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return alert("Camp incorrecte: introdueix un correu electrònic vàlid.");
  }

  alert(`Gràcies per la teva compra, ${nom}! Les teves entrades s'han reservat correctament.`);

  const codiReserva = "VELADA7-" + Math.floor(Math.random() * 90000 + 10000);
  const total = calcularPreu();
  const quantitat = inputNumEntrades.value;

  formEntrades.style.display = "none";

  document.getElementById("resum-text").innerHTML = `
    <strong>Nom:</strong> ${nom}<br>
    <strong>Email:</strong> ${email}<br>
    <strong>Telèfon:</strong> ${telefon}<br>
    <strong>Entrades:</strong> ${quantitat}<br>
    <strong>Total:</strong> ${total} €
  `;

  document.getElementById("resum-codi").textContent = "Codi de reserva: " + codiReserva;
  document.getElementById("resum").style.display = "block";
};

calcularPreu();
const formParticipa = document.getElementById("form-participa");

formParticipa.onsubmit = function(event) {
  event.preventDefault(); 

  const nom = document.getElementById("nom").value;
  const tipus = document.getElementById("tipus").value;

  alert("Gràcies, " + nom + "! La teva sol·licitud per a '" + tipus + "' s'ha enviat correctament.");

  formParticipa.reset(); 
};
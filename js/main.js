document.getElementById("btn-combats").onclick = function() {
    window.location.href = "combats.html";
};

document.getElementById("btn-horaris").onclick = function() {
    window.location.href = "horaris.html";
};

document.getElementById("btn-faq").onclick = function() {
    window.location.href = "faq.html";
};

var DATA_VELADA = new Date("2027-07-24T20:00:00").getTime();

function actualitzarCompteEnrere() {
  var ara = new Date().getTime();
  var diferencia = DATA_VELADA - ara;

  if (diferencia <= 0) {
    document.getElementById("countdown").innerHTML =
      "<h2>🥊 La Velada ja ha començat!</h2>";
    return;
  }

  var dies = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  var hores = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minuts = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  var segons = Math.floor((diferencia % (1000 * 60)) / 1000);

  document.getElementById("dies").textContent = dies;
  document.getElementById("hores").textContent = hores;
  document.getElementById("minuts").textContent = minuts;
  document.getElementById("segons").textContent = segons;
}

actualitzarCompteEnrere();                  
setInterval(actualitzarCompteEnrere, 1000); 

// --- Enllaços del footer ---

document.getElementById("btn-privacitat").onclick = function() {
    window.location.href = "html/privacitat.html";
};

document.getElementById("btn-cookies").onclick = function() {
    window.location.href = "html/cookies.html";
};

document.getElementById("btn-avis").onclick = function() {
    window.location.href = "html/avis.html";
};

document.getElementById("btn-proteccio").onclick = function() {
    window.location.href = "html/proteccio.html";
};


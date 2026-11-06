
var botoTema = document.getElementById("theme-toggle");

function aplicarTema(tema) {
  document.documentElement.setAttribute("data-theme", tema);
  botoTema.textContent = tema === "light" ? "🌙" : "☀️";
  localStorage.setItem("tema", tema);
}

aplicarTema(localStorage.getItem("tema") || "dark");

botoTema.onclick = function() {
  var actual = document.documentElement.getAttribute("data-theme");
  aplicarTema(actual === "light" ? "dark" : "light");
};

document.getElementById("btn-combats").onclick = function() {
    window.location.href = "combats.html";
};

document.getElementById("btn-combats").onclick = function() {
    window.location.href = "combats.html";
};

document.getElementById("btn-horaris").onclick = function() {
    window.location.href = "horaris.html";
};

document.getElementById("btn-faq").onclick = function() {
    window.location.href = "faq.html";
};

document.getElementById("btn-entrades").onclick = function() {
  window.location.href = "entrades.html";
};

document.getElementById("btn-participa").onclick = function() {
  window.location.href = "participa.html";
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

document.getElementById("privacitat").onclick = function() {
    window.location.href = "privacitat.html";
};

document.getElementById("cookies").onclick = function() {
    window.location.href = "cookies.html";
};

document.getElementById("avis").onclick = function() {
    window.location.href = "avis.html";
};

document.getElementById("proteccio").onclick = function() {
    window.location.href = "proteccio.html";
};

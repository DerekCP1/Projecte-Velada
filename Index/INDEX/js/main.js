document.getElementById("btn-combats").onclick = function() {
    alert("<!DOCTYPE html>
<html lang="ca">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cartellera de Combats - La Velada 7</title>
  <style>
    /* Estils generals de la pàgina */
    body {
      background-color: #0d0d0d;
      color: #ffffff;
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 20px;
      text-align: center;
    }

    h1 {
      color: #ff3b30;
      font-size: 2.5rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-bottom: 30px;
    }

    /* Contenidor de cada combat (Targeta estil UFC) */
    .fight-card {
      background: #1a1a1a;
      border: 2px solid #333;
      border-radius: 12px;
      max-width: 800px;
      margin: 25px auto;
      padding: 20px;
      box-shadow: 0 4px 15px rgba(255, 59, 48, 0.2);
    }

    /* Estil especial per al combat estel·lar (Main Event) */
    .fight-card.main-event {
      border-color: #ff3b30;
      box-shadow: 0 6px 20px rgba(255, 59, 48, 0.5);
    }

    /* Capçalera del combat (Tipus, Categoria, Assalts) */
    .fight-header {
      border-bottom: 1px solid #333;
      padding-bottom: 10px;
      margin-bottom: 15px;
    }

    .fight-number {
      color: #ff3b30;
      font-size: 1.2rem;
      font-weight: bold;
      text-transform: uppercase;
    }

    .fight-meta {
      color: #aaa;
      font-size: 0.95rem;
      margin-top: 5px;
    }

    /* Secció dels lluitadors cara a cara */
    .matchup {
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      margin: 20px 0;
    }

    .fighter {
      flex: 1;
      min-width: 220px;
      padding: 10px;
    }

    .fighter-name {
      font-size: 1.4rem;
      font-weight: bold;
      color: #fff;
      margin-bottom: 10px;
    }

    /* Dades tècniques del lluitador */
    .fighter-stats {
      font-size: 0.9rem;
      color: #ccc;
      line-height: 1.6;
      text-align: left;
      background: #242424;
      padding: 12px;
      border-radius: 8px;
    }

    /* El "VS" central */
    .versus {
      font-size: 2rem;
      font-weight: bold;
      color: #ff3b30;
      margin: 15px;
    }

    /* Citació / Frase del combat */
    .fighter-quote {
      font-style: italic;
      color: #ffca28;
      font-size: 0.85rem;
      margin-top: 8px;
    }

    /* Botó per tornar enrere */
    .btn-back {
      display: inline-block;
      margin-top: 30px;
      padding: 12px 25px;
      background-color: #ff3b30;
      color: white;
      text-decoration: none;
      font-weight: bold;
      border-radius: 6px;
      text-transform: uppercase;
    }

    .btn-back:hover {
      background-color: #e02d22;
    }
  </style>
</head>
<body>

  <h1>🥊 Cartellera de Combats</h1>

  <!-- COMBAT 1 -->
  <div class="fight-card">
    <div class="fight-header">
      <div class="fight-number">Combat 1 • Obertura</div>
      <div class="fight-meta">Categoria: Lleuger | Assalts: 4 × 2 min</div>
    </div>
    
    <div class="matchup">
      <!-- Lluitador 1 -->
      <div class="fighter">
        <div class="fighter-name">Ehren "El Verdugo"</div>
        <div class="fighter-stats">
          <p><strong>Edat:</strong> 26 anys</p>
          <p><strong>Alçada i pes:</strong> 1,70 m / 67 kg</p>
          <p><strong>Estil:</strong> Contraatacador, guàrdia ortodoxa</p>
          <p><strong>Preparació:</strong> 8 setmanes amb entrenador professional</p>
          <p class="fighter-quote">"Avui el veredicte el dic jo."</p>
        </div>
      </div>

      <div class="versus">VS</div>

      <!-- Lluitador 2 -->
      <div class="fighter">
        <div class="fighter-name">Fiona "De la villa de la hoja"</div>
        <div class="fighter-stats">
          <p><strong>Edat:</strong> 24 anys</p>
          <p><strong>Alçada i pes:</strong> 1,68 m / 61 kg</p>
          <p><strong>Estil:</strong> Ràpida, de mitja distància, guàrdia esquerra</p>
          <p><strong>Preparació:</strong> 10 setmanes amb entrenador professional</p>
          <p class="fighter-quote">"La fulla talla més que els guants."</p>
        </div>
      </div>
    </div>
  </div>


  <!-- COMBAT 2 -->
  <div class="fight-card">
    <div class="fight-header">
      <div class="fight-number">Combat 2 • Esportiu</div>
      <div class="fight-meta">Categoria: Pesos molt molt pesats | Assalts: 4 × 2 min</div>
    </div>
    
    <div class="matchup">
      <div class="fighter">
        <div class="fighter-name">Derek "El cazador de conejas"</div>
        <div class="fighter-stats">
          <p><strong>Edat:</strong> 31 anys</p>
          <p><strong>Alçada i pes:</strong> 1,95 m / 128 kg</p>
          <p><strong>Estil:</strong> Pegador de pressió, guàrdia ortodoxa</p>
          <p><strong>Preparació:</strong> 6 setmanes amb entrenador professional</p>
          <p class="fighter-quote">"Aquesta nit la caça és meva."</p>
        </div>
      </div>

      <div class="versus">VS</div>

      <div class="fighter">
        <div class="fighter-name">Judith Pam Huevo</div>
        <div class="fighter-stats">
          <p><strong>Edat:</strong> 28 anys</p>
          <p><strong>Alçada i pes:</strong> 1,74 m / 118 kg</p>
          <p><strong>Estil:</strong> De pressió, molt resistent, guàrdia ortodoxa</p>
          <p><strong>Preparació:</strong> 9 setmanes amb entrenador professional</p>
          <p class="fighter-quote">"Pesada o no, arribo fins al final."</p>
        </div>
      </div>
    </div>
  </div>


  <!-- COMBAT 3 -->
  <div class="fight-card">
    <div class="fight-header">
      <div class="fight-number">Combat 3 • Masculí</div>
      <div class="fight-meta">Categoria: Pes ploma | Assalts: 5 × 2 min</div>
    </div>
    
    <div class="matchup">
      <div class="fighter">
        <div class="fighter-name">David "El termo"</div>
        <div class="fighter-stats">
          <p><strong>Edat:</strong> 23 anys</p>
          <p><strong>Alçada i pes:</strong> 1,70 m / 57 kg</p>
          <p><strong>Estil:</strong> Mòbil, de joc de cames, guàrdia ortodoxa</p>
          <p><strong>Preparació:</strong> 12 setmanes amb entrenador professional</p>
          <p class="fighter-quote">"Mantinc la calma fins al darrer assalt."</p>
        </div>
      </div>

      <div class="versus">VS</div>

      <div class="fighter">
        <div class="fighter-name">Juan "El archienemigo" Heredia</div>
        <div class="fighter-stats">
          <p><strong>Edat:</strong> 27 anys</p>
          <p><strong>Alçada i pes:</strong> 1,72 m / 58 kg</p>
          <p><strong>Estil:</strong> Agressiu, de curta distància, guàrdia esquerra</p>
          <p><strong>Preparació:</strong> 11 setmanes amb entrenador professional</p>
          <p class="fighter-quote">"Un enemic de tota la vida i un combat per guanyar."</p>
        </div>
      </div>
    </div>
  </div>


  <!-- COMBAT 4 -->
  <div class="fight-card">
    <div class="fight-header">
      <div class="fight-number">Combat 4 • Revenja</div>
      <div class="fight-meta">Categoria: Pes mitjà | Assalts: 5 × 2 min</div>
    </div>
    
    <div class="matchup">
      <div class="fighter">
        <div class="fighter-name">Pau la V</div>
        <div class="fighter-stats">
          <p><strong>Edat:</strong> 25 anys</p>
          <p><strong>Alçada i pes:</strong> 1,80 m / 71 kg</p>
          <p><strong>Estil:</strong> Tècnic, de jab, guàrdia ortodoxa</p>
          <p><strong>Preparació:</strong> 10 setmanes amb entrenador professional</p>
          <p class="fighter-quote">"La V és de victòria."</p>
        </div>
      </div>

      <div class="versus">VS</div>

      <div class="fighter">
        <div class="fighter-name">Ivan del Pozo</div>
        <div class="fighter-stats">
          <p><strong>Edat:</strong> 30 anys</p>
          <p><strong>Alçada i pes:</strong> 1,82 m / 73 kg</p>
          <p><strong>Estil:</strong> Pegador, guàrdia esquerra</p>
          <p><strong>Preparació:</strong> 8 setmanes amb entrenador professional</p>
          <p class="fighter-quote">"Qui no cau, guanya."</p>
        </div>
      </div>
    </div>
  </div>


  <!-- COMBAT 5 (EVENT PRINCIPAL) -->
  <div class="fight-card main-event">
    <div class="fight-header">
      <div class="fight-number" style="color: #ffca28;">⭐ COMBAT ESTEL·LAR ⭐</div>
      <div class="fight-meta">Categoria: Pes pesat | Assalts: 6 × 2 min</div>
    </div>
    
    <div class="matchup">
      <div class="fighter">
        <div class="fighter-name">Sasha "La matriarca"</div>
        <div class="fighter-stats">
          <p><strong>Edat:</strong> 29 anys</p>
          <p><strong>Alçada i pes:</strong> 1,77 m / 82 kg</p>
          <p><strong>Estil:</strong> De control del ring, guàrdia ortodoxa</p>
          <p><strong>Preparació:</strong> 12 setmanes amb entrenador professional</p>
          <p class="fighter-quote">"La matriarca mana dins i fora del ring."</p>
        </div>
      </div>

      <div class="versus">VS</div>

      <div class="fighter">
        <div class="fighter-name">Cloe Undertaker</div>
        <div class="fighter-stats">
          <p><strong>Edat:</strong> 32 anys</p>
          <p><strong>Alçada i pes:</strong> 1,79 m / 85 kg</p>
          <p><strong>Estil:</strong> Pegadora, de cops potents, guàrdia esquerra</p>
          <p><strong>Preparació:</strong> 10 setmanes amb entrenador professional</p>
          <p class="fighter-quote">"Quan m'enfronto, jo ja us he enterrat."</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Enllaç per tornar a la pàgina principal -->
  <a href="index.html" class="btn-back">Tornar a l'Inici</a>

</body>
</html>");
};

document.getElementById("btn-horaris").onclick = function() {
    alert("Aquí anirien els horaris.");
};

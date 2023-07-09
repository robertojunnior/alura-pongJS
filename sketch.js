//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadeBolinhaX = 7;
let velocidadeBolinhaY = 7;

// variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let comprimentoRaquete = 10;
let alturaRaquete = 90;
let colidiu = false;

// variaveis da raquete oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//placar jogo
let meusPontos = 0;
let pontosOponente = 0;

// sons do jogo
let somRaquete;
let somPonto;
let somTrilha;

//cria a janela de preview
function setup() {
  createCanvas(600, 400);
  // somTrilha.loop();
}

//musica jogo
function preload() {
  somTrilha = loadSound("trilha.mp3");
  somRaquete = loadSound("raquetada.mp3");
  somPonto = loadSound("ponto.mp3");
}

//funcao principal, cria a cor do bg e abriga as outras funções abaixo
function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();

  verificaColisaoBorda();

  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);

  mostrarPlacar();
  marcarPonto();

  movimentarRaquete();
  movimentarRaqueteOponente();

  verificarColisaoRaquete(xRaquete, yRaquete);
  verificarColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
}

function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  xBolinha = xBolinha + velocidadeBolinhaX;
  yBolinha = yBolinha + velocidadeBolinhaY;
}

function verificaColisaoBorda() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeBolinhaX = velocidadeBolinhaX * -1;
  }

  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeBolinhaY = velocidadeBolinhaY * -1;
  }
}

function mostraRaquete(x, y) {
  rect(x, y, comprimentoRaquete, alturaRaquete);
}

function movimentarRaquete() {
  if (keyIsDown(87)) {
    yRaquete -= 10;
  }
  if (keyIsDown(83)) {
    yRaquete += 10;
  }
  if (keyIsDown(65)) {
    xRaquete -= 10;
  }
  if (keyIsDown(68)) {
    xRaquete += 10;
  }
}

function movimentarRaqueteOponente() {
  // 1 jogador
  // velocidadeYOponente = yBolinha - yRaqueteOponente - comprimentoRaquete / 2 - 50
  // yRaqueteOponente += velocidadeYOponente;

  // 2 jogadores
  if (keyIsDown(UP_ARROW)) {
    yRaqueteOponente -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaqueteOponente += 10;
  }
  if (keyIsDown(LEFT_ARROW)) {
    xRaqueteOponente -= 10;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    xRaqueteOponente += 10;
  }
}

function verificarColisaoRaquete() {
  if (
    xBolinha - raio < xRaquete + comprimentoRaquete &&
    yBolinha - raio < yRaquete + alturaRaquete &&
    yBolinha + raio > yRaquete - alturaRaquete
  ) {
    velocidadeBolinhaX *= -1;
    somRaquete.play();
  }
}

function verificarColisaoRaquete(x, y) {
  colidiu = collideRectCircle(
    x,
    y,
    comprimentoRaquete,
    alturaRaquete,
    xBolinha,
    yBolinha,
    raio
  );
  if (colidiu) {
    velocidadeBolinhaX *= -1;
    somRaquete.play();
  }
}

function mostrarPlacar() {
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(180, 10, 40, 20);
  fill(255);
  text(meusPontos, 200, 26);
  fill(color(255, 140, 0));
  rect(380, 10, 40, 20);
  fill(255);
  text(pontosOponente, 400, 26);
}

function marcarPonto() {
  if (xBolinha > 590) {
    meusPontos += 1;
    somPonto.play();
  }
  if (xBolinha < 10) {
    pontosOponente += 1;
    somPonto.play();
  }
}

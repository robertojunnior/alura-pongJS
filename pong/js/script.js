// conteúdo utilizado no P5JS em aula com Gilherme Lima.

//variaveis da bolinha
let xBolinha = 300
let yBolinha = 200
let diametro = 20
let raio = diametro / 2

//velocidade da bolinha
let velocidadeBolinhaX = 6
let velocidadeBolinhaY = 6

// variáveis da raquete
let xRaquete = 5
let yRaquete = 150
let comprimentoRaquete = 10
let alturaRaquete = 90

//cria a janela de preview
function setup() {
  createCanvas(600, 400);
}

//funcao principal, cria a cor do bg e abriga as outras funções abaixo
function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete();
  movimentarRaquete();
  verificarColisaoRaquete();
}

function mostraBolinha() {
  circle(xBolinha,yBolinha,diametro)
}

function movimentaBolinha(){
  xBolinha = xBolinha + velocidadeBolinhaX
  yBolinha = yBolinha + velocidadeBolinhaY
}

function verificaColisaoBorda(){
   if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeBolinhaX = velocidadeBolinhaX *(-1)
  }
  
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeBolinhaY = velocidadeBolinhaY *(-1)
  }
}

function mostraRaquete() {
  rect(xRaquete, yRaquete, comprimentoRaquete, alturaRaquete);
}

function movimentarRaquete() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
   if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}

function verificarColisaoRaquete() {
  if (xBolinha - raio < xRaquete + comprimentoRaquete) {
    velocidadeBolinhaX *= -1
  }
}
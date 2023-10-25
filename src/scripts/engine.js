// Seleciona todos os elementos com a classe "key" dentro da coleção com a classe "piano-keys".
const pianoKeys = document.querySelectorAll(".piano-keys .key");

// Seleciona o elemento de entrada de volume com a classe "volume-piano".
const volumePiano = document.querySelector(".volume-piano input");

// Seleciona o elemento de entrada de verificação de teclas com a classe "keys-check".
const keysCheck = document.querySelector(".keys-check input");

// Inicializa uma coleção vazia chamada "mapedKeys" para rastrear as teclas mapeadas.
let mapedKeys = [];

// Inicializa um objeto de áudio com um arquivo de som de piano "a.wav".
let audio = new Audio("src/tunes/piano/a.wav");

// Define uma função chamada "playTune" que reproduz um som associado a uma tecla.
const playTune = (key) => {
  // Atualiza a fonte de áudio para o arquivo de som correspondente à tecla (baseado no valor de "key").
  audio.src = `src/tunes/piano/${key}.wav`;

  // Reproduz o som.
  audio.play();

  // Encontra o elemento da tecla clicada no documento com o atributo "data-key" correspondente.
  const clickedKey = document.querySelector(`[data-key="${key}"]`);

  // Adiciona a classe "active" para destacar a tecla quando reproduz o som.
  clickedKey.classList.add("active");

  // Define um temporizador para remover a classe "active" após 150 milissegundos (0,15 segundos).
  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 150);
};

// Adiciona ouvintes de clique a cada elemento das teclas do piano para executar a função "playTune".
pianoKeys.forEach((key) => {
  key.addEventListener("click", () => playTune(key.dataset.key));
  
  // Adiciona o valor do atributo "data-key" do elemento à coleção "mapedKeys".
  mapedKeys.push(key.dataset.key);
});

// Adiciona um ouvinte de evento de teclado para tocar notas quando as teclas correspondentes são pressionadas.
document.addEventListener("keydown", (e) => {
  // Verifica se a tecla pressionada (e.key) está mapeada em "mapedKeys".
  if (mapedKeys.includes(e.key)) {
    playTune(e.key);
  }
});

// Define uma função para lidar com a alteração do volume, usando o valor da entrada de volume.
const handleVolume = (e) => {
  // Atualiza o volume do objeto de áudio com o valor da entrada de volume.
  audio.volume = e.target.value;
};

// Define uma função para mostrar ou ocultar as teclas do piano com a classe "hide".
const showHideKeys = () => {
  // Alterna a classe "hide" em cada elemento das teclas do piano.
  pianoKeys.forEach((key) => key.classList.toggle("hide"));
};

// Adiciona um ouvinte de evento de entrada à entrada de volume para chamar "handleVolume" quando o valor muda.
volumePiano.addEventListener("input", handleVolume);

// Adiciona um ouvinte de clique à entrada de verificação de teclas para chamar "showHideKeys" quando clicada.
keysCheck.addEventListener("click", showHideKeys);

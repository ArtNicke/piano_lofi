const lofiKeys = document.querySelectorAll(".lofi-keys .keys");
const volumeBeats = document.querySelector(".volume-beats input");

let mapedKeys = [];
let audio = new Audio("src/tunes/beats/a.wav");

const playTune = (keys) => {
    audio.src = `src/tunes/beats/${keys}.wav`;
    audio.play();

    const clickedKeys = document.querySelector(`[data-keys="${keys}"]`);
  clickedKeys.classList.add("active");
  setTimeout(() => {
    clickedKeys.classList.remove("active");
  }, 300);
};

lofiKeys.forEach((keys) => {
    keys.addEventListener("click", () => playTune(keys.dataset.keys));
    mapedKeys.push(keys.dataset.keys);
  });

  document.addEventListener("keydown", (e) => {
    
    if (mapedKeys.includes(e.key)) {
      playTune(e.key);
    }
  });
  
  
  const showHideKeys = () => {

    lofiKeys.forEach((keys) => keys.classList.toggle("hide"));
  };
  
  
  // Adiciona um ouvinte de clique à entrada de verificação de teclas para chamar "showHideKeys" quando clicada.
  keysCheck.addEventListener("click", showHideKeys);
  
const $warning = document.getElementById('warning');
const $validate = document.getElementById('validate');
const $data = document.getElementById('data');
const $modal = document.getElementById('modal');
const $points = document.getElementById('pts');
const $ptsLabel = document.getElementById('pts-label');
const $guesses = document.getElementById('guessed-numbers');

let pts = 0,
  valueRandom = 0,
  numberGuesses = 10,
  guessedNumbers = [];

const generateValue = (min, max) =>
  valueRandom = Math.floor(Math.random() * (max - min) + min);

const openModal = () => {
  $modal.style.display = "flex";
  $points.textContent = "Cantidad de intentos: " + pts;
}

const validateData = (min, max) => {
  const userGuess = parseInt($data.value);
  if (isNaN(userGuess)) return;
  if (userGuess > max || userGuess < min) {
    $warning.textContent = `El número debe ser del ${min} al ${max}`;
    return;
  }

  guessedNumbers.push(userGuess);

  if (userGuess === valueRandom) {
    openModal();
  } else if (userGuess > valueRandom) {
    $warning.textContent = "El número es menor al ingresado.";
  }  else {
    $warning.textContent = "El número es mayor al ingresado.";
  }

  numberGuesses--;
  pts++;

  $ptsLabel.textContent = "Quedan " + numberGuesses + " intentos.";
  $ptsLabel.style.display = "flex";

  $guesses.textContent = "Números ingresados: " + guessedNumbers.join(", ");
  $guesses.style.display = "flex";

  if (numberGuesses === 0 & userGuess !== valueRandom) {
    $warning.textContent = "Se acabaron los intentos 😭";
    $validate.disabled = true;
    $data.disabled = true;
  }

  $data.value = "";

}

document.addEventListener("DOMContentLoaded", (e) => {

  let $difficulty = window.location.pathname.split("/").pop().replace(".html", "").toLowerCase();

  if ($difficulty === "easy") {
    generateValue(0, 100);
  } else {
    generateValue(0, 1000000);
  }
});

document.addEventListener("click", (e) => {
  if (e.target === $validate) validateData(0, 100);

});

$data.addEventListener("keydown", (e) => {
  if (e.key === "Enter") validateData(0, 1000000);

});


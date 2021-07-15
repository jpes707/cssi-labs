console.log("script running");

// define list of languages
const languages = [
  "English",
  "Spanish",
  "Chinese",
  "Tagalog",
  "Vietnamese",
  "Arabic",
  "French",
  "Korean",
  "Russian",
  "German",
  "Haitian Creole",
  "Hindi"
];

// create an object for mapping languages to tiles
let tileObject = {};
languages.forEach((language) => {
  tileObject[language.toLowerCase()] = document.querySelector(`#${language.replace(/\s/g, "")}`);
});

// check a guessed language against the tiles and show tile if valid
const inputField = document.querySelector("#guess");
inputField.addEventListener("change", () => {
    const guess = inputField.value.toLowerCase();
    if (guess in tileObject) {
      tileObject[guess].classList.remove("hidden");
    }
    inputField.value = "";
});

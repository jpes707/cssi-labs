console.log("Script running");

// We'll want to get some random integers, and that isn't built right into JavaScript.
// Here's a pre-built function that will do it for ya.
const getRandom = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

// Capture the three major foci of user interaction in variables.
const submitButton = document.querySelector("#submit");
const queryField = document.querySelector("#search");
const imageHolderDiv = document.querySelector("#imageholder");

// Log the elements to confirm that the querySelectors worked.
console.log(submitButton);
console.log(queryField);
console.log(imageHolderDiv);

submitButton.addEventListener("click", (e) => {
  let myKey = 'yergaJf5UU43EeOlLI9eKICgzSnPEPoq';
  let topic = encodeURIComponent(queryField.value);
  const urlToFetch = `https://api.giphy.com/v1/gifs/search?api_key=${myKey}&q=${topic}&limit=25&offset=0&rating=g&lang=en`;
  fetch(urlToFetch)
    .then(response => response.json())
    .then(myJson => {
      const imageUrl = myJson.data[0].images.original.url
      imageHolderDiv.innerHTML = `<img src="${imageUrl}" />`
  });
});

console.log("running")

const guess = document.querySelector("#guess")
const error = document.querySelector("#error")
const errorClose = document.querySelector("#error-close")
const errorText = document.querySelector("#error-text")
const success = document.querySelector("#success")

const checkGuess = () => {
  const guessNumber = parseInt(guess.value)
  try {
    if (guessNumber % 2 != 0) {
      throw "Correct number is even"
    }
    if (guessNumber <= 4) {
      throw "Correct number is greater than 4"
    }
    if (guessNumber % 3 != 0) {
      throw "Correct number is a multiple of 3"
    }
  } catch (errorMessage) {
    errorText.innerHTML = errorMessage
    success.classList.add("hidden")
    error.classList.remove("hidden")
    return
  }
  error.classList.add("hidden")
  success.classList.remove("hidden")
}

errorClose.addEventListener("click", () => {
  error.classList.add("hidden")
})

guess.addEventListener("change", checkGuess)
checkGuess()  // run once after the page is loaded to force the error pop-up for the initial value.

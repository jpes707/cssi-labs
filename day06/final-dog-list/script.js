console.log("running")

const submit = document.querySelector("#submit")

const drawOneDog = (url, name, goodnessLevel, note) => `
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by5">
        <img src="${url}" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">${name}</p>
          <p class="subtitle is-6">${goodnessLevel}</p>
        </div>
      </div>
      <div class="content">
        ${note}
      </div>
    </div>
  </div>
`

let dogList = []

submit.addEventListener("click", () => {
  // Get references to relevant HTML / DOM elements.
  const dogName = document.querySelector("#dog-name")
  const dogUrl = document.querySelector("#dog-url")
  const dogGoodnessLevel = document.querySelector("#dog-goodness-level")
  const dogNote = document.querySelector("#dog-note")
  
  const newDog = {
    url: dogUrl.value,
    name: dogName.value,
    goodnessLevel: dogGoodnessLevel.value,
    note: dogNote.value
  }
  dogList.push(newDog)
  
  // Render the HTML for our new dog.
  let newHtml = ""
  dogList.forEach(dog => {
    newHtml += drawOneDog(newDog.url, newDog.name, newDog.goodnessLevel, newDog.note)
  })
  document.querySelector("#dog-list").innerHTML = newHtml
  
  // Reset the new dog form to its starting values.
  dogName.value = ""
  dogUrl.value = ""
  dogGoodnessLevel.value = "Improving"
  dogNote.value = ""
})

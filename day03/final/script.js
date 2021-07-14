console.log("script running!");

const button1 = document.querySelector("#button1");
console.log(button1);

const onButton1Click = () => {
  console.log("button clicked!");
  alert("GOAT SOUNDS ... CUTE");
}
button1.addEventListener("click", onButton1Click);

const brodieButton = document.querySelector("#button2");
console.log(brodieButton);
brodieButton.addEventListener("click", () => {
  console.log("bunny button click!");
});


const goatButton = document.querySelector("#button3");
let carrots = 2;
goatButton.addEventListener("click", () => {
  document.getElementById("status3").innerHTML = `Coco has had ${++carrots} carrots today.`;
});

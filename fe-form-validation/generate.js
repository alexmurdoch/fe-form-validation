const form = document.getElementById("submit-form");
const topInput = document.getElementById("meme_top");
const botInput = document.getElementById("meme_bot");
const imgInput = document.getElementById("meme_img");

form.addEventListener("submit", (event) => {
  if (
    topInput.classList.contains("invalid") ||
    botInput.classList.contains("invalid") ||
    imgInput.classList.contains("invalid")
  ) {
    console.log("check");
    event.preventDefault();
  }
});

topInput.addEventListener("change", (event) => {
  const input = event.target.value;
  const isValid = /^.{1,50}$/.test(input);
  
  console.log(topErr);
  if (isValid) {
    topErr.innerText = "";
    topInput.classList.add("valid");
    topInput.classList.remove("invalid");
  } else {
    topErr.innerText = "NOT MEMEY ENOUGH";
    topInput.classList.add("invalid");
    topInput.classList.remove("valid");
  }
});

botInput.addEventListener("change", (event) => {
  const input = event.target.value;
  const isValid = /^.{1,50}$/.test(input);
 

  if (isValid) {
    botErr.innerText = "";
    botInput.classList.add("valid");
    botInput.classList.remove("invalid");
  } else {
    botErr.innerText = "NOT MEMEY ENOUGH";
    botInput.classList.add("invalid");
    botInput.classList.remove("valid");
  }
});

imgInput.addEventListener("change", (event) => {
  const input = event.target.value;
  const isValid =  /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(input);
 console.log(isValid);
  console.log(input);

  if (isValid) {
    imgErr.innerText = "";
    imgInput.classList.add("valid");
    imgInput.classList.remove("invalid");
  } else {
    imgErr.innerText = "NOT MEMEY ENOUGH";
    imgInput.classList.add("invalid");
    imgInput.classList.remove("valid");
  }
});

function displayPoem(response){
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
    event.preventDefault();
    let instructionInput= document.querySelector("#user-instructions");
    let apiKey = "63o6f4274t7f98603bab2997da6b943f";
    let context="You are a romantic Poem expert and love to write short poems. You mission is to generate a 4 line poem in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning";
    let prompt = `User instructions: Generate a French poem about ${instructionInput.value}`;
      let urlAPI= `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
      let poemElement = document.querySelector("#poem");
      poemElement.classList.remove("hidden");
      poemElement.innerHTML=`<span class="generating">⌛</span> Genereting a French poem about ${instructionInput.value}`;
      axios.get(urlAPI).then(displayPoem);
   
  }

  
  let poemFormElement = document.querySelector("#poem-generator-form");
  poemFormElement.addEventListener("submit", generatePoem);
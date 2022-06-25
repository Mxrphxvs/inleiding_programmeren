// variablen

const character = document.querySelector('#character');

const moveSelectorEen = document.querySelector('#move_selector_1');
const moveSelectorTwee = document.querySelector('#move_selector_2');
const moveSelectorDrie = document.querySelector('#move_selector_3');

const luffy = document.querySelector('#luffy');

const characterSelector = document.querySelector('#character_selector');

const btnFruitEen = document.querySelector('#button_fruit_1');
const btnFruitTwee = document.querySelector('#button_fruit_2');
const btnFruitDrie= document.querySelector('#button_fruit_3');

const blankCharacter = document.querySelector('#blank_character');
const h1Element = document.querySelector('#h1_choose_character');



// Character selector

function ChooseCharacterOne() {
   if (moveSelectorTwee.classList.contains('zichtbaar')) { // Controleren of de class nog op de andere move selectors zit.

      moveSelectorTwee.classList.remove('zichtbaar'); // Class Zichtbaarheid verwijderen.
      moveSelectorTwee.classList.remove('fade_top'); // Class Animatie verwijderen.
   }

   if (moveSelectorDrie.classList.contains('zichtbaar')) {

      moveSelectorDrie.classList.remove('zichtbaar');
      moveSelectorDrie.classList.remove('fade_top');
   }

      h1Element.innerHTML = "Luffy";

      moveSelectorEen.classList.add('zichtbaar');
      moveSelectorEen.classList.add('fade_top');

   if (moveSelectorEen.classList.contains('zichtbaar')) { // Controleren of class zichtbaar op selector één zit, dan pas de image veranderen.
      character.src = "afbeeldingen/character_1.png";
   }

   console.log("Luffy");
}

btnFruitEen.addEventListener('click', ChooseCharacterOne);





function ChooseCharacterTwo() { 

   if (moveSelectorDrie.classList.contains('zichtbaar')) { // Controleren of de class nog op de andere move selectors zit.

      moveSelectorDrie.classList.remove('zichtbaar'); // Class Zichtbaarheid verwijderen.
      moveSelectorDrie.classList.remove('fade_top'); // Class Animatie verwijderen.
   }

   if (moveSelectorEen.classList.contains('zichtbaar')) {

      moveSelectorEen.classList.remove('zichtbaar');
      moveSelectorEen.classList.remove('fade_top');
   }

      h1Element.innerHTML = "Law";

      moveSelectorTwee.classList.add('zichtbaar');
      moveSelectorTwee.classList.add('fade_top');


   if (moveSelectorTwee.classList.contains('zichtbaar')) { // Controleren of class zichtbaar op selector één zit, dan pas de image veranderen.
      character.src = "afbeeldingen/character_2.png";
   }

   console.log("Law");
}

btnFruitTwee.addEventListener('click', ChooseCharacterTwo);





function ChooseCharacterTree() { 

   if (moveSelectorTwee.classList.contains('zichtbaar')) { // Controleren of de class nog op de andere move selectors zit.

      moveSelectorTwee.classList.remove('zichtbaar'); // Class Zichtbaarheid verwijderen.
      moveSelectorTwee.classList.remove('fade_top'); // Class Animatie verwijderen.
   }

   if (moveSelectorEen.classList.contains('zichtbaar')) {

      moveSelectorEen.classList.remove('zichtbaar');
      moveSelectorEen.classList.remove('fade_top');
   }

      h1Element.innerHTML = "Aokiji";

      moveSelectorDrie.classList.add('zichtbaar');
      moveSelectorDrie.classList.add('fade_top');


   if (moveSelectorDrie.classList.contains('zichtbaar')) { // Controleren of class zichtbaar op selector één zit, dan pas de image veranderen.
      character.src = "afbeeldingen/character_3.png";
   }

   console.log("Aokiji");
}

btnFruitDrie.addEventListener('click', ChooseCharacterTree);










const videoContainer = document.querySelector('#video_full');
const moveContainer = document.querySelector('#move_container');

// Variabelen videos per button 
const btnEenCharEen = document.querySelector('#button_move_1');
const btnEenCharTwee = document.querySelector('#button_move_2');
const btnEenCharDrie = document.querySelector('#button_move_3');
const btnEenCharVier = document.querySelector('#button_move_4');
const btnEenCharVijf = document.querySelector('#button_move_5');
const btnEenCharZes = document.querySelector('#button_move_6');
const btnEenCharZeven = document.querySelector('#button_move_7');
const btnEenCharAcht = document.querySelector('#button_move_8');
const btnEenCharNegen = document.querySelector('#button_move_9');




// Button footer 1
// knoppen choose move fixen, ze zijn klikbaar achter de video

function moveEenCharacterEen() {
   btnEenCharEen.disabled = true; // Button uitschakelen na klikken, 😎 Nog even visueel maken met class.

   videoContainer.classList.add('zichtbaar');
   moveContainer.classList.add('tonen');

   btnEenCharEen.style.backgroundColor = '#3f3633';

   moveContainer.src = "/videos/attack_1_1.mp4";
}

btnEenCharEen.addEventListener('click', moveEenCharacterEen);




function moveEenCharacterTwee() {
   btnEenCharTwee.disabled = true;

   videoContainer.classList.add('zichtbaar');
   moveContainer.classList.add('tonen');

   btnEenCharTwee.style.backgroundColor = '#3f3633';

   moveContainer.src = "/videos/attack_1_2.mp4";
}

btnEenCharTwee.addEventListener('click', moveEenCharacterTwee);


function moveEenCharacterDrie() {
   btnEenCharDrie.disabled = true;

   videoContainer.classList.add('zichtbaar');
   moveContainer.classList.add('tonen');

   btnEenCharDrie.style.backgroundColor = '#3f3633';

   moveContainer.src = "/videos/attack_1_3.mp4";
}

btnEenCharDrie.addEventListener('click', moveEenCharacterDrie);





// Button footer 2

function moveEenCharacterVier() {
   btnEenCharVier.disabled = true;

   videoContainer.classList.add('zichtbaar');
   moveContainer.classList.add('tonen');

   btnEenCharVier.style.backgroundColor = '#111010';

   moveContainer.src = "/videos/attack_2_1.mp4";
}

btnEenCharVier.addEventListener('click', moveEenCharacterVier);


function moveEenCharacterVijf() {
   btnEenCharVijf.disabled = true;

   videoContainer.classList.add('zichtbaar');
   moveContainer.classList.add('tonen');
   
   btnEenCharVijf.style.backgroundColor = '#111010';

   moveContainer.src = "/videos/attack_2_2.mp4";
}

btnEenCharVijf.addEventListener('click', moveEenCharacterVijf);


function moveEenCharacterZes() {
   btnEenCharZes.disabled = true;

   videoContainer.classList.add('zichtbaar');
   moveContainer.classList.add('tonen');

   btnEenCharZes.style.backgroundColor = '#111010';

   moveContainer.src = "/videos/attack_2_3.mp4";
}

btnEenCharZes.addEventListener('click', moveEenCharacterZes);





// Button footer 3

function moveEenCharacterZeven() {
   btnEenCharZeven.disabled = true;

   videoContainer.classList.add('zichtbaar');
   moveContainer.classList.add('tonen');

   btnEenCharZeven.style.backgroundColor = '#555162';

   moveContainer.src = "/videos/attack_3_1.mp4";
}

btnEenCharZeven.addEventListener('click', moveEenCharacterZeven);


function moveEenCharacterAcht() {
   btnEenCharAcht.disabled = true;

   videoContainer.classList.add('zichtbaar');
   moveContainer.classList.add('tonen');

   btnEenCharAcht.style.backgroundColor = '#555162';

   moveContainer.src = "/videos/attack_3_2.mp4";
}
btnEenCharAcht.addEventListener('click', moveEenCharacterAcht);


function moveEenCharacterNegen() {
   btnEenCharNegen.disabled = true;

   videoContainer.classList.add('zichtbaar');
   moveContainer.classList.add('tonen');

   btnEenCharNegen.style.backgroundColor = '#555162';

   moveContainer.src = "/videos/attack_3_3.mp4";
}

btnEenCharNegen.addEventListener('click', moveEenCharacterNegen);





// Video verdwijnt zodra deze is afgelopen.

function AfgelopenVideo() {
   videoContainer.classList.remove('zichtbaar');
   moveContainer.classList.remove('tonen');
}

moveContainer.addEventListener('ended', AfgelopenVideo);

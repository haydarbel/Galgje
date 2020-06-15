const words = ["aardappel", "banana", "uitstekend", "wereldkampioenschap",
  "vrijwilligerswerk", "samenlevingscontract", "verantwoordelijkheid", 'bestemingen',
  "gezonheid", "coronacrisis","mondmasker","zomervakantie","pictograam"];

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
  'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

let lettersdiv = document.getElementById('letters');

let pics = document.getElementById('pics');

let vraagh = document.getElementById('vraag');

let levens= document.getElementById("levens");

let maxfout = 6;
// initialize function
let init= function(){
for (let i = 0; i < letters.length; i++) {
  var btn = document.createElement('button');
  btn.innerHTML = letters[i];
  btn.value = letters[i];
  btn.className = "chicbutton"
  btn.id="alp"
  btn.onclick = Zoekletter;
  lettersdiv.appendChild(btn);
  levens.innerHTML=`U hebt ${maxfout} levens.`
  pics.src = `pics/${6}.jpg`
}
}

init();

let chosenWord = words[Math.floor(Math.random() * words.length)];

let wordArray = Array.from(chosenWord);

let vraag = [];



for (let i = 0; i < wordArray.length; i++) {
  vraag.push("_");
}

let x = vraag.join(" ");

vraagh.innerHTML = x;
// controlling the letters
function Zoekletter() {
  this.className+=" passive";
  if (maxfout > 0) {
    var letterValue = this.innerHTML.trim().toLowerCase();
    var schot = true;
    var win=true;
    for (let i = 0; i < wordArray.length; i++) {
      if (letterValue == wordArray[i]) {
        vraag[i] = letterValue;
        x = vraag.join(" ");
        vraagh.innerHTML = x;
        schot = false;
      }
    };
    for(let i=0; i < wordArray.length; i++){
      if(vraag[i]=="_"){
        win=false
      }
    }
    if(win){
      levens.innerHTML="U hebt gewonnen"
      lettersdiv.className="none"
    }
    if (schot === true) {
      maxfout--;
      if(maxfout==1){
        levens.innerHTML=`U hebt ${maxfout} leven.`
      }else{levens.innerHTML=`U hebt ${maxfout} levens.`}
     
    }
    for (let i = 0; i < 7; i++) {
      if (maxfout == i) {
        pics.src = `pics/${i}.jpg`
      }
    };
    if (maxfout == 0) {
      levens.innerHTML="Het Spel is Over. <br> Start een nieuw spel."
      lettersdiv.className="none";
      vraag = [];
      for (let i = 0; i < wordArray.length; i++) {
      vraag.push(wordArray[i]);
      }
      x = vraag.join(" ");
      vraagh.innerHTML = x;
    };
  }

};
// renew function
function opnieuw() {
  pics.src = `pics/${6}.jpg`
  maxfout = 6;
  vraagh.innerHTML = "";
  chosenWord = words[Math.floor(Math.random() * words.length)];
  wordArray = Array.from(chosenWord);
  vraag = [];
  for (let i = 0; i < wordArray.length; i++) {
    vraag.push("_");
  }
  x = vraag.join(" ");
  vraagh.innerHTML = x;
  lettersdiv.classList.remove("none");
  lettersdiv.innerHTML=" "
  init();

}



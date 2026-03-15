const vocabulary = {

noun:[
{hanzi:"老师",pinyin:"lǎoshī",spanish:"Profesor"},
{hanzi:"学生",pinyin:"xuéshēng",spanish:"Estudiante"}
],

verb:[
{hanzi:"学习",pinyin:"xuéxí",spanish:"Estudiar"},
{hanzi:"吃",pinyin:"chī",spanish:"Comer"}
],

adjective:[
{hanzi:"大",pinyin:"dà",spanish:"Grande"},
{hanzi:"小",pinyin:"xiǎo",spanish:"Pequeño"}
],

pronoun:[
{hanzi:"我",pinyin:"wǒ",spanish:"Yo"},
{hanzi:"你",pinyin:"nǐ",spanish:"Tú"}
]

}

let cards=[]
let currentCard=0

function hideAll(){

document.querySelectorAll(".section")
.forEach(s=>s.classList.remove("active"))

}

function showMain(){

hideAll()
document.getElementById("main-section").classList.add("active")

}

function showHSK1(){

hideAll()
document.getElementById("hsk1-section").classList.add("active")

}

function showComingSoon(){

hideAll()
document.getElementById("coming-section").classList.add("active")

}

function showFlashcards(){

hideAll()
document.getElementById("flashcards-section").classList.add("active")
filterCategory("all")

}

function showLetterGame(){
alert("Juego de letras próximamente")
}

function showSentencePuzzle(){
alert("Juego de frases próximamente")
}

function showStoryGame(){
alert("Historia interactiva próximamente")
}

function filterCategory(cat){

if(cat==="all"){

cards=[
...vocabulary.noun,
...vocabulary.verb,
...vocabulary.adjective,
...vocabulary.pronoun
]

}else{

cards=vocabulary[cat]

}

currentCard=0
showCard()

}

function showCard(){

let card=cards[currentCard]

document.getElementById("card-hanzi").textContent=card.hanzi
document.getElementById("card-pinyin").textContent=card.pinyin
document.getElementById("card-translation").textContent=card.spanish

document.querySelector(".flashcard").classList.remove("flipped")

}

function flipCard(){

document.querySelector(".flashcard").classList.toggle("flipped")

}

function nextCard(){

currentCard++

if(currentCard>=cards.length){
currentCard=0
}

showCard()

}

function prevCard(){

currentCard--

if(currentCard<0){
currentCard=cards.length-1
}

showCard()

}

document.addEventListener("DOMContentLoaded",()=>{

filterCategory("all")

})
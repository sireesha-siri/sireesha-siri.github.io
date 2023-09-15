// Landing Page

const sentences = ['💪 I am an Aspiring Techie 🚴🏻‍♀️','🤞🏼 Frontend Developer 💞','💖 Loves python 💘','🌟 AI/ML Enthusiast 😍'];
const sentenceContainer = document.querySelector(".sentence-container");
let sentenceIndex = 0;

function displayNextSentence() {
    sentenceContainer.textContent = sentences[sentenceIndex];
    sentenceContainer.classList.add('portfolio-paragraph','paragraph_styling');
    sentenceIndex = (sentenceIndex + 1) % sentences.length;
}

displayNextSentence();

setInterval(function(){
    displayNextSentence();
}, 2000); 

const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}


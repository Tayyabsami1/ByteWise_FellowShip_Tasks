const characters = document.getElementById('char');
const Words = document.getElementById('word');
const Sentences = document.getElementById('sent');
const Paragraphs = document.getElementById('para');
const spaces = document.getElementById('spac');
const Letters = document.getElementById('lett');
const Digits = document.getElementById('digi');
const specialCharacters = document.getElementById('spec');


const InputField = document.getElementById('inputField');

const CharacterDisplayer = (text) => {
    characters.innerHTML = text.trim().length;
}

const WordsDisplayer = (text) => {
    Words.innerHTML = text.split(' ').filter(w => w.length > 0).length
}

const SentencesDisplayer = (text) => {
    Sentences.innerHTML = text.split(/[.?!]+/).filter(s => s.trim().length > 0).length;
}

const ParagraphDisplayer = (text) => {
    Paragraphs.innerHTML = text.split('  ').filter(p => p.trim().length > 0).length;
}

const SpaceDisplayer = (text) => {
    spaces.innerHTML = text.split(' ').filter(s => s.length > 0).length - 1;
}

const LetterDisplayer = (text) => {
    Letters.innerHTML = text.trim().replace(/[^a-zA-Z]/g, '').length;
}

const DigitDisplayer = (text) => {
    Digits.innerHTML = text.trim().replace(/[^0-9]/g, '').length;
}

const specialCharactersDisplayer = (text) => {
    specialCharacters.innerHTML = text.trim().replace(/[a-zA-Z0-9\s]/g, '').trim().length;
}

let s = "";
InputField.addEventListener('input', (e) => {
    const val = e.target.value;
    CharacterDisplayer(val);
    WordsDisplayer(val);
    SentencesDisplayer(val);
    ParagraphDisplayer(val);
    SpaceDisplayer(val);
    LetterDisplayer(val);
    DigitDisplayer(val);
    specialCharactersDisplayer(val);
})
console.log("Hello")
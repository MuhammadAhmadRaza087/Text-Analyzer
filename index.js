message_alert.style.display= 'none'
//UpperCase Button
btn_uppercase.addEventListener("click", () => {
    if (isUpperCase(input_text.value)) {
        message.innerText = "Your text is already in uppercase!"
        message_alert.style.display = 'block'
    } else {
        input_text.value = input_text.value.toUpperCase()
    }
    
})
//LowerCase Button
btn_lowercase.addEventListener("click", () => {
    if (isLowerCase(input_text.value)) {
        message.innerText = "Your text is already in lowercase!"
        message_alert.style.display = 'block'
    } else {
        input_text.value = input_text.value.toLowerCase()      
    }
}
)
//Extra Spaces Button
btn_extraspaces.addEventListener("click", () => {
    input_text.value = input_text.value.replace(/\s+/g, ' ').trim()
    words_counter()
}
)
//Extra Lines Button
btn_extralines.addEventListener("click", () => {
    input_text.value = input_text.value.replace(/\n+/g, '\n').trim()
    words_counter()
}
)
//Calling Words Counter on Input
input_text.addEventListener("input",() => {
  words_counter()
}
)
//Word Counting on input
function words_counter() {
    characters.innerText = input_text.value.length
    words.innerText = input_text.value.trim().split(" ").length
} 
//Check if Text is already in lowercase
function isLowerCase(str) {
    return str == str.toLowerCase() && str != str.toUpperCase();
}
//Check if Text is already in uppercase
function isUpperCase(str) {
    return str == str.toUpperCase() && str != str.toLowerCase();
}
//Text To Speech
let found = false;
btn_textSpeech.addEventListener("click", () => {
    const synth = window.speechSynthesis;
    const text = input_text.value;
    if (!synth.speaking && text) {
        const utternace = new SpeechSynthesisUtterance(text);
        synth.speak(utternace)
        found = true;
    }
    if (text.length > 10) {
        if (synth.speaking && found) {
            btn_textSpeech.innerText = "Pause";
            synth.resume()
            found = false
        } else {
            btn_textSpeech.innerText = "Resume";
            synth.pause()
            found = true;
        }
    } else {
        found = false;
        btn_textSpeech.innerText = "Text To Speech";
    }
    setInterval(() => {
        if (!synth.speaking && !found) {
            found = true
            btn_textSpeech.innerText = "Text To SPeech";
        }
    });
})
let mic = document.getElementById('mic');

const msg_box = document.querySelector('.msg_box');
const cheat_area = document.querySelector('.cheat_area');


let intro = ["i am your robot", "hi i am a robo", "my name is chitti hah ha ha ",
 "i am your personal assistent", "i am machine"];

 let help =["how may i assistant you", "how i can halp you", "what i can do for you?"];

 let names = ["you are my friend ankit", "your name is ankit", "mr. ankit jangir"];

 let movie = ["titanic", "final destination", "aircraft"];

 let thanks = ["most welcome", "as you wish", "mention not"];

 let work = ["full stack developer", "software engneer"];

 let close = ["okay by by", "as you wish", "see you soon...."];

var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();


function showMsguser(usermsg) {
    let output = '';
    output += `<div class="message left">${usermsg}</div>`;
    cheat_area.innerHTML += output;
    return cheat_area;
}

function showMsgrobo(robotMsg) {
    let output = '';
    output += `<div class="message right">${robotMsg}</div>`;
    cheat_area.innerHTML += output;
    return cheat_area;
}



function robotVoice(msg){
    const speech = new SpeechSynthesisUtterance();
    speech.text = "i don't know your input";
    if(msg.includes('who are you')){
        const finalRes = intro[Math.floor(Math.random() * intro.length)];
        speech.text = finalRes;
    }
    else if (msg.includes('awesome movie')){
        const finalRes = movie[Math.floor(Math.random() * movie.length)];
        speech.text = finalRes;
    }
    else if (msg.includes('what is my name')){
        const finalRes = names[Math.floor(Math.random() * names.length)];
        speech.text = finalRes;
    }

    else if (msg.includes('thank you robo')){
        const finalRes = thanks[Math.floor(Math.random() * thanks.length)];
        speech.text = finalRes;
    }

    else if (msg.includes('gest my work robo')){
        const finalRes = work[Math.floor(Math.random() * work.length)];
        speech.text = finalRes;
    }

    else if (msg.includes('closing robo')){
        const finalRes = close[Math.floor(Math.random() * close.length)];
        speech.text = finalRes;
    }


    window.speechSynthesis.speak(speech);
    cheat_area.appendChild(showMsgrobo(speech.text));
}


recognition.onresult = function(event){
    const resultIndex = event.resultIndex;
    const transcript =  event.results[resultIndex][0].transcript;
    msg_box.appendChild(showMsguser(transcript));
    robotVoice(transcript);
    console.log(transcript);
}


// listen the mic button
mic.addEventListener('click', ()=>{
    recognition.start();
    console.log('click me');
    mic.style.backgroundColor = 'green';
})
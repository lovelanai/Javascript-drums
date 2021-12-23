window.addEventListener('load', main);
window.addEventListener('keydown', checkKeyPress, false);
function main(){
    canvas();

    addEventListeners();

}

function addEventListeners(){
    document.getElementById('nirvana').addEventListener('click', nirvana);

}

function nirvana(){
document.getElementById('chosesong').style.display = 'none';
document.getElementById('chosetype').style.display = 'flex';

let nodrums = document.getElementById('withoutdrums');
nodrums.setAttribute("id", "nirvananodrums");
document.getElementById('nirvananodrums').addEventListener('click', nirvanaNoDrums)


let withDrums = document.getElementById('withdrums');
withDrums.setAttribute("id", "nirvanawithdrums");
document.getElementById('nirvanawithdrums').addEventListener('click', nirvanaWithDrums)
}


function nirvanaNoDrums(){
    nirvananodrums.play();
    console.log('utan trummor')
}

function nirvanaWithDrums(){
    nirvanawithdrums.play();
    console.log('med trummor')
}

//songs
let nirvananodrums = new Audio();
nirvananodrums.src="./assets/nodrumsnirvana.mp3";

let nirvanawithdrums = new Audio();
nirvanawithdrums.src="./assets/nirvana.mp3";



let kicksample = new Audio();
kicksample.src="./assets/kick.mp3";

let snaresample = new Audio();
snaresample.src="./assets/snare.wav";

let hihatsample = new Audio();
hihatsample.src="./assets/hihat.wav";

let crashsample = new Audio();
crashsample.src="./assets/crash.wav";

let hightom = new Audio();
hightom.src="./assets/hightom.wav";

let lowtom = new Audio();
lowtom.src="./assets/lowtom.wav";



function checkKeyPress(key, keyCode){
    if (key.keyCode == "65"){ // A
        kicksample.currentTime = 0;
        kicksample.play();
        kicksample.currentTime = 0;
        document.getElementById('a-button').classList.add('kick-btn');
    }
    if (key.keyCode == "83"){ // S
        snaresample.currentTime = 0;
        snaresample.play();
        kicksample.currentTime = 0;
        document.getElementById('s-button').classList.add('snare-btn');
    }

    if (key.keyCode == "68"){ // D
        hightom.currentTime = 0;
        hightom.play();
        document.getElementById('d-button').classList.add('hightom-btn');
        
    }

    if (key.keyCode == "70"){ // F
        lowtom.currentTime = 0;
        lowtom.play();
        document.getElementById('f-button').classList.add('lowtom-btn');
        
    }

    if (key.keyCode == "74" ){ // J
        hihatsample.currentTime = 0;
        hihatsample.play();
        document.getElementById('j-button').classList.add('hihat-btn');
    }


    if (key.keyCode == "75"){ // K
        hihatsample.currentTime = 0;
        hihatsample.play();
        document.getElementById('k-button').classList.add('hihat-btn');
    }

    if (key.keyCode == "76"){ // L
        crashsample.currentTime = 0;
        crashsample.play();
        document.getElementById('l-button').classList.add('crash-btn');
    }
    
} 



document.addEventListener("keyup", function(key, keyCode){
    if (key.keyCode == "65"){ // A
        kicksample.pause();
        document.getElementById('a-button').classList.remove('kick-btn');
     
    }

    if (key.keyCode == "83"){ // S

        snaresample.pause();
        document.getElementById('s-button').classList.remove('snare-btn');
        
    }

    if (key.keyCode == "68"){ // D


        document.getElementById('d-button').classList.remove('hightom-btn');
        
    }

    if (key.keyCode == "70"){ // F
 

        document.getElementById('f-button').classList.remove('lowtom-btn');
        
    }

    if (key.keyCode == "74"){ // J

        hihatsample.pause();
        document.getElementById('j-button').classList.remove('hihat-btn');
        
    }

    if (key.keyCode == "75"){ // K

        hihatsample.pause();
        document.getElementById('k-button').classList.remove('hihat-btn');
        
    }

    if (key.keyCode == "76"){ // L


        document.getElementById('l-button').classList.remove('crash-btn');
    }


})
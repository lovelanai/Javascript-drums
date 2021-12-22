window.addEventListener('load', main);
window.addEventListener('keydown', checkKeyPress, false);
function main(){
    canvas();

}


let kicksample = new Audio();
kicksample.src="./assets/kick.wav";

let snaresample = new Audio();
snaresample.src="./assets/snare.wav";

let hihatsample = new Audio();
hihatsample.src="./assets/hihat.wav";




function checkKeyPress(key){
    if (key.keyCode == "65"){
        kicksample.play();
        document.getElementById('a-button').classList.add('kick-btn');
    }
    if (key.keyCode == "83"){
        snaresample.play();
    }

    if (key.keyCode == "76"){
        hihatsample.play();
    }
} 



document.addEventListener("keyup", function(key){
    if (key.keyCode == "65"){
        kicksample.pause();
        document.getElementById('a-button').classList.remove('kick-btn');
        kicksample.currentTime = 0;
    }

    if (key.keyCode == "83"){
        snaresample.pause();
        document.getElementById('a-button').classList.remove('kick-btn');
        snaresample.currentTime = 0;
    }

    if (key.keyCode == "76"){
        hihatsample.pause();
        document.getElementById('a-button').classList.remove('kick-btn');
        hihatsample.currentTime = 0;
    }
})
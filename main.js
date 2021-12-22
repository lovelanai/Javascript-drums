window.addEventListener('load', main);


function main() {
    kick();
    crash();
    cymbal();
}


function kick() {
    const c = document.getElementById("kick");
    const ctx = c.getContext("2d");


    /** Kickdrum */

    ctx.beginPath();
    ctx.arc(150, 150, 140, 0, 2 * Math.PI);
    ctx.fillStyle = '#f0f0f0';
    ctx.lineWidth = 4;
    ctx.fill();
    ctx.strokeStyle = 'orange'
    ctx.stroke();

}

function crash(){
    const crash = document.getElementById("crash");
 const ctx = crash.getContext("2d");

    // Crash-stand
    ctx.beginPath();
    ctx.arc(150, 600, 1, 1, 1);
    ctx.lineTo(150, 180);
    ctx.lineWidth = 6;
    ctx.strokeStyle = 'silver';
    ctx.stroke();

    // Crash-stand left-leg
    ctx.beginPath();
    ctx.arc(110, 600, 1, 1, 1);
    ctx.lineTo(150, 450);
    ctx.lineWidth = 6;
    ctx.strokeStyle = 'silver';
    ctx.stroke();

    // Crash-stand right-leg
    ctx.beginPath();
    ctx.arc(150, 450, 1, 1, 1);
    ctx.lineTo(200, 600);
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'silver';
    ctx.stroke();


    // "top" of crash
    ctx.beginPath();
    ctx.arc(150, 195, 18, 0, Math.PI, true);
    ctx.closePath();
    ctx.fillStyle = 'gold';
    ctx.lineWidth = 2;
    ctx.fill();
    ctx.strokeStyle = 'black'
    ctx.stroke();

    // "bottom" of crash
    ctx.beginPath();
    ctx.scale(4, 1);
    ctx.arc(38, 210, 20, 0, Math.PI, true);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = 'gold';
    ctx.lineWidth = 2;
    ctx.stroke();

    
}

function cymbal(){
 /** cymbal */
 const cymbal = document.getElementById("cymbal");
 const ctx = cymbal.getContext("2d");
   
     // Crash-stand
     ctx.beginPath();
     ctx.arc(150, 600, 1, 1, 1);
     ctx.lineTo(150, 180);
     ctx.lineWidth = 6;
     ctx.strokeStyle = 'silver';
     ctx.stroke();
 
     // Crash-stand left-leg
     ctx.beginPath();
     ctx.arc(110, 600, 1, 1, 1);
     ctx.lineTo(150, 450);
     ctx.lineWidth = 6;
     ctx.strokeStyle = 'silver';
     ctx.stroke();
 
     // Crash-stand right-leg
     ctx.beginPath();
     ctx.arc(150, 450, 1, 1, 1);
     ctx.lineTo(200, 600);
     ctx.lineWidth = 5;
     ctx.strokeStyle = 'silver';
     ctx.stroke();
 
 
     // "top" of crash
     ctx.beginPath();
     ctx.arc(150, 195, 18, 0, Math.PI, true);
     ctx.closePath();
     ctx.fillStyle = 'gold';
     ctx.lineWidth = 2;
     ctx.fill();
     ctx.strokeStyle = 'black'
     ctx.stroke();
 
     // "bottom" of crash
     ctx.beginPath();
     ctx.scale(4, 1);
     ctx.arc(38, 210, 20, 0, Math.PI, true);
     ctx.closePath();
     ctx.fill();
     ctx.fillStyle = 'gold';
     ctx.lineWidth = 2;
     ctx.stroke();
}
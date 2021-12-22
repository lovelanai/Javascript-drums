


function canvas() {
    kick();
    crash();
    cymbal();
    snare();
    tom1();
    tom2();
}


function kick() {
    const c = document.getElementById("kick");
    const ctx = c.getContext("2d");


    /** Kickdrum */

    ctx.beginPath();
    ctx.arc(150, 150, 140, 0, 2 * Math.PI);
    ctx.fillStyle = '#013365';
    ctx.lineWidth = 4;
    ctx.fill();
    ctx.strokeStyle = 'crimson'
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(150, 150, 120, 0, 2 * Math.PI);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.554)';
    ctx.lineWidth = 4;
    ctx.fill();
    ctx.strokeStyle = 'crimson'
    ctx.stroke();

}

function crash(){
    const crash = document.getElementById("crash");
 const ctx = crash.getContext("2d");

    // Crash-stand
    ctx.beginPath();
    ctx.arc(150, 600, 1, 1, 1);
    ctx.lineTo(150, 319);
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'black';
    ctx.stroke();

    // Crash-stand left-leg
    ctx.beginPath();
    ctx.arc(110, 600, 1, 1, 1);
    ctx.lineTo(150, 450);
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'black';
    ctx.stroke();

    // Crash-stand right-leg
    ctx.beginPath();
    ctx.arc(150, 450, 1, 1, 1);
    ctx.lineTo(200, 600);
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'black';
    ctx.stroke();

        // Crash tilt
        ctx.beginPath();
        ctx.arc(180, 280, 1, 1, 1);
        ctx.lineTo(150, 320);
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'black';
        ctx.stroke();


    // "top" of crash
    ctx.rotate(30 * Math.PI / 180);
    ctx.beginPath();
    ctx.arc(295, 170, 11, 0, Math.PI, true);
    ctx.closePath();
    ctx.fillStyle = 'gold';
    ctx.lineWidth = 2;
    ctx.fill();
    ctx.strokeStyle = 'black'
    ctx.stroke();

    // "bottom" of crash
    ctx.beginPath();
    ctx.scale(11, 1);
    ctx.arc(27, 180, 10, 0, Math.PI, true);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = 'gold';
    ctx.lineWidth = 2;
    ctx.stroke();

    

    
}

function cymbal(){

 const cymbal = document.getElementById("hihat");
 const ctx = cymbal.getContext("2d");
   
     // hihat-stand
     ctx.beginPath();
     ctx.arc(150, 620, 1, 1, 1);
     ctx.lineTo(150, 260);
     ctx.lineWidth = 4;
     ctx.strokeStyle = 'black';
     ctx.stroke();
 
     // hihat-stand left-leg
     ctx.beginPath();
     ctx.arc(110, 600, 1, 1, 1);
     ctx.lineTo(150, 450);
     ctx.lineWidth = 6;
     ctx.strokeStyle = 'black';
     ctx.stroke();
 
     // hihat-stand right-leg
     ctx.beginPath();
     ctx.arc(150, 450, 1, 1, 1);
     ctx.lineTo(200, 600);
     ctx.lineWidth = 5;
     ctx.strokeStyle = 'black';
     ctx.stroke();
 
 
     // "top" of hihat
     
     ctx.beginPath();
     ctx.arc(150,295, 10, 0, Math.PI, true);
     ctx.closePath();
     ctx.fillStyle = 'gold';
     ctx.lineWidth = 2;
     ctx.fill();
     ctx.strokeStyle = 'black'
     ctx.stroke();
    
          // "bottom" of hihat
          ctx.beginPath();
          ctx.arc(150, 309, 10, 0, Math.PI, false);
          ctx.closePath();
          ctx.fillStyle = 'gold';
          ctx.lineWidth = 2;
          ctx.fill();
          ctx.strokeStyle = 'black'
          ctx.stroke();
 
     // "top-middle" of hihat
     ctx.beginPath();
     ctx.scale(10, 1);
     ctx.arc(15, 300, 8, 0, Math.PI, true);
     ctx.closePath();
     ctx.fill();
     ctx.fillStyle = 'gold';
     ctx.lineWidth = 2;
     ctx.stroke();

          // "bot-middle" of hihat
          ctx.beginPath();

          ctx.arc(15, 304.5, 8, 0, Math.PI, false);
          ctx.closePath();
          ctx.fill();
          ctx.fillStyle = 'black';
          ctx.lineWidth = 2;
          ctx.stroke();
}



function snare(){
var c = document.getElementById("snare");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.rotate(-10 * Math.PI / 180);
ctx.rect(-20, 215, 170, 70,);


ctx.fillStyle = '#013365';
ctx.lineWidth = 4;
ctx.fill();
ctx.strokeStyle = 'crimson'
ctx.stroke();

 // snare-stand
 ctx.beginPath();
 ctx.arc(50, 500, 1, 1, 1);
 ctx.lineTo(70, 287);
 ctx.lineWidth = 4;
 ctx.strokeStyle = 'black';
 ctx.stroke();

 // snare-stand right-leg
 ctx.beginPath();
 ctx.arc(100, 510, 1, 1, 1);
 ctx.lineTo(60, 400);
 ctx.lineWidth = 5;
 ctx.strokeStyle = 'black';
 ctx.stroke();

 // snare-stand left-leg
 ctx.beginPath();
 ctx.arc(-10, 500, 1, 1, 1);
 ctx.lineTo(60, 400);
 ctx.lineWidth = 5;
 ctx.strokeStyle = 'black';
 ctx.stroke();


}

function tom1(){
    var c = document.getElementById("tom1");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.rotate(-2 * Math.PI / 180);
    ctx.rect(20, 215, 170, 70,);
    
    
    ctx.fillStyle = '#013365';
    ctx.lineWidth = 4;
    ctx.fill();
    ctx.strokeStyle = 'crimson'
    ctx.stroke();
    }


    function tom2(){
        var c = document.getElementById("tom2");
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.rotate(+2 * Math.PI / 180);
        ctx.rect(20, 215, 170, 70,);
        
        
        ctx.fillStyle = '#013365';
        ctx.lineWidth = 4;
        ctx.fill();
        ctx.strokeStyle = 'crimson'
        ctx.stroke();
        }
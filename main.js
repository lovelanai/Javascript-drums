window.addEventListener('load', main);


function main(){
    kick();

}


function kick(){
    const c = document.getElementById("kick");
    const ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    ctx.fillStyle = '#f0f0f0';
    ctx.lineWidth = 4; 
    ctx.fill();
    ctx.strokeStyle = 'orange'
    
    ctx.stroke();
}
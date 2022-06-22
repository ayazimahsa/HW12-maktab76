let span = document.getElementById('show_position');
function event_function(event){
    let x = event.clientX;
    let y = event.clientY;
    let Coordinates = "X Coordinates: " + x + ", Y Coordinates: " + y;
    console.log(Coordinates);
    span.innerText=Coordinates;
    console.log(span);
}


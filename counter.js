// MODEL

var c = 0;
var x = 0;

// VIEW

function first_render() {
 c++;
 x++;
 circle.textContent = c; 
 }

function render() {
  
    circle.textContent = c;
           
}


// CONTROLLER

function clicked() {
  
 if (c != 0 && x % 2 != 0) {
 c = c+1;
 render();
  } else {
    stop();
  }
 } 

function clicked_once() {
 c = 0;
 return c;
}
setInterval(clicked, 1000);

function stop() {
  setTimeout(clicked_once, 0);
  }

circle.onclick = first_render

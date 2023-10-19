const lienzo = document.querySelector('#lienzo');

const ctx = lienzo.getContext('2d');

// Linea Izquierda
ctx.fillStyle = 'black'
ctx.fillRect(20, 200, 30, 30);
ctx.fillRect(20, 230, 30, 30);
ctx.fillRect(20, 260, 30, 30);       
ctx.fillRect(20, 230, 30, 30);
ctx.fillRect(20, 200, 30, 30);
ctx.fillRect(20, 170, 30, 30);

// Primera Curva Izq Arriba
ctx.fillRect(50, 140, 30, 30);
ctx.fillRect(50, 110, 30, 30);
ctx.fillRect(80, 80, 30, 30);
ctx.fillRect(110, 50, 30, 30);
ctx.fillRect(140, 50, 30, 30);


//Linea Arriba
ctx.fillRect(170, 20, 30, 30);
ctx.fillRect(200, 20, 30, 30);
ctx.fillRect(230, 20, 30, 30);
ctx.fillRect(260, 20, 30, 30);
ctx.fillRect(290, 20, 30, 30);

// Primera Curva Der Arriba
ctx.fillRect(320, 50, 30, 30);
ctx.fillRect(350, 50, 30, 30);
ctx.fillRect(380, 80, 30, 30);
ctx.fillRect(410, 110, 30, 30);
ctx.fillRect(410, 140, 30, 30);

//Linea Derecha
ctx.fillRect(440, 170, 30, 30);
ctx.fillRect(440, 200, 30, 30);
ctx.fillRect(440, 230, 30, 30);
ctx.fillRect(440, 260, 30, 30);


// Segunda Curva Derecha Abajo
ctx.fillRect(410, 290, 30, 30);
ctx.fillRect(410, 320, 30, 30);
ctx.fillRect(380, 350, 30, 30);
ctx.fillRect(350, 380, 30, 30);
ctx.fillRect(350, 380, 30, 30);
ctx.fillRect(320, 380, 30, 30);


// Linea Abajo
ctx.fillRect(290, 410, 30, 30);
ctx.fillRect(260, 410, 30, 30);
ctx.fillRect(230, 410, 30, 30);
ctx.fillRect(200, 410, 30, 30);
ctx.fillRect(170, 410, 30, 30);


//Segunda Curva Izq Abajo
ctx.fillRect(140, 380, 30, 30);
ctx.fillRect(110, 380, 30, 30);
ctx.fillRect(80, 350, 30, 30);
ctx.fillRect(80, 350, 30, 30);
ctx.fillRect(50, 320, 30, 30);
ctx.fillRect(50, 290, 30, 30);

// Ojo Izq
ctx.fillRect(170, 110, 30, 30);
ctx.fillRect(170, 140, 30, 30);
ctx.fillRect(170, 170, 30, 30);

// Ojo Derecho
ctx.fillRect(290, 110, 30, 30);
ctx.fillRect(290, 140, 30, 30);
ctx.fillRect(290, 170, 30, 30);

// Sonrisa
ctx.fillRect(170, 320, 30, 30);
ctx.fillRect(200, 320, 30, 30);
ctx.fillRect(230, 320, 30, 30);
ctx.fillRect(260, 320, 30, 30);
ctx.fillRect(290, 320, 30, 30);
//Izq
ctx.fillRect(140, 290, 30, 30);
ctx.fillRect(110, 260, 30, 30);
ctx.fillRect(110, 230, 30, 30);
//Derecha
ctx.fillRect(320, 290, 30, 30);
ctx.fillRect(350, 260, 30, 30);
ctx.fillRect(350, 230, 30, 30);
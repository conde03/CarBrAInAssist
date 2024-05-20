const fileInput = document.getElementById('fileInput');
const playlist = document.getElementById('playlist');
const audioPlayer = document.getElementById('audioPlayer');
const listNombres = document.getElementById('listNombres')



//Etiqueta audio
const reproductorAudio = document.getElementById('reproductor__audio');

//Boton Play
const reproductorPlay = document.getElementById('reproductor__boton--play');
//BotonPasarCancion
const botonPasarCancion = document.getElementById('reproductor__boton--siguiente');
//BotonRetrocederCancion
const botonRetrocederCancion = document.getElementById('reproductor__boton--anterior');

//Barra
const barra = document.getElementById('reproductor__barra--progreso');

//Para el tiempo de musica
tiempoTotal = document.getElementById('reproductor__tiempo--total');
tiempoConstante = document.getElementById('reproductor__tiempo--actual');

//nombre cancion
const nombreCancion = document.getElementById('nombreCancion');

//Cambiar boton play
playBottonImg = document.getElementById('iconMusicPlayStop');


var index = 0;


const listadoCanciones = document.getElementById('listado-canciones');
// Array con los nombres de los archivos de audio
var nombresArchivos = [
    'cancion1.mp3',
    'cancion2.mp3',
    'cancion3.mp3',
    'cancion4.mp3',
    'cancion5.mp3',
    // Agrega más nombres de archivos según sea necesario
];



var cancionActual = '';
if(nombresArchivos.length > 0){ 
cancionActual = nombresArchivos[0];
}

document.addEventListener('DOMContentLoaded', function() {

    for (const nombreArchivo of nombresArchivos) {
        const listItem = document.createElement('li');
        listItem.textContent = nombreArchivo.split('/').pop(); // Mostrar solo el nombre del archivo, eliminando la ruta
        listadoCanciones.appendChild(listItem); // Agregar el elemento li a la lista

        // Crear un elemento <br> para crear un espacio entre las canciones
        const espacio = document.createElement('br');
        listadoCanciones.appendChild(espacio); // Agregar el espacio entre las canciones
    }

});


function splitName(str){
    const fileName = reproductorAudio.src.split('/').pop();
    const fileNameWithoutExtension = fileName.split('.').slice(0, -1).join('.');
    return fileNameWithoutExtension;
}



// Boton Play Pause evento
reproductorPlay.addEventListener('click', function(){
    //console.log(reproductorAudio.src);

    if(cancionActual != ''){
        if(reproductorAudio.paused){
            reproductorAudio.play();
            playBottonImg.src='imagenes/svg/play-button.svg'

            //reproductPlay.textContent = 'Pausar';
        }else{
            reproductorAudio.pause();
            //reproductPlay.textContent = 'Reproducir';
            playBottonImg.src='imagenes/svg/pause-round-button.svg'
        }
        nombreCancion.textContent = cancionActual.split('/').pop();
        actualizarTiempo();
        
       
    }

});



function actualizarTiempo(){

    var valorTiempo = Math.round(reproductorAudio.duration);
    var valorMinutos = Math.round(valorTiempo / 60);
    var valorSegundos =valorTiempo % 60;
    tiempoTotal.textContent = `${valorMinutos}:${valorSegundos}`;


}


// Boton para poner el ancho de las canciones la barra
reproductorAudio.addEventListener('timeupdate', function(){
        
    const porcentaje = Math.round((reproductorAudio.currentTime / reproductorAudio.duration) * 100);
    barra.style.width = `${porcentaje}%`;

    var tiempo = Math.round(reproductorAudio.currentTime);
    var minutos = Math.round(tiempo / 60);
    var segundos = tiempo % 60;
    tiempoConstante.textContent = `${minutos}:${segundos}`;

});


//Evento para cuando se pulsa pasar cancion
botonPasarCancion.addEventListener('click', function(){
    cambiarCancion(1);
});



botonRetrocederCancion.addEventListener('click', function(){
    cambiarCancion(0);
});



function cambiarCancion(num){
    //console.log(reproductorAudio.src);
    if(num == 1){
        index = index + 1;
    }else{
        index = index - 1;
    }

    if(index >= nombresArchivos.length){
        index = 0;
    }else if(index < 0){
        index = nombresArchivos.length - 1;
    }

    cancionActual = nombresArchivos[index];

    nombreCancion.textContent = cancionActual.split('/').pop();

    reproductorAudio.src = `audio/${cancionActual}`;
    
    // Esperar a que la nueva canción se cargue completamente
    reproductorAudio.addEventListener('loadedmetadata', function() {
        actualizarTiempo();
        reproductorAudio.play();
    });
}









/*
document.getElementById('fileInput').addEventListener('change', function(event) {

    const archivosSeleccionados = event.target.files;
    
    //Itera los archivos seleccionados
    for (let i = 0; i < archivosSeleccionados.length; i++) {
        var nombreArchivoAniadido = archivosSeleccionados[i].name; // Obtiene el nombre del archivo
        
        
        if (nombresArchivos.includes(nombreArchivoAniadido)) {
            alert('El archivo ya está en la lista de reproducción');
            continue;
        }else{

            //console.log(nombreArchivoAniadido); // Muestra el nombre del archivo en la consola
            const listItem = document.createElement('li'); // Crea un elemento de lista

            nombresArchivos.push(nombreArchivoAniadido); // Agrega el nombre del archivo al array de nombres de archivos

            listItem.textContent = nombreArchivoAniadido; // Asigna el nombre del archivo al contenido del elemento de lista
            listadoCanciones.appendChild(listItem); // Agrega el elemento de lista al contenedor de la lista


            const espacio = document.createElement('br');
            listadoCanciones.appendChild(espacio); // Agregar el espacio entre las canciones

        }
    }
    for(var i=0;i<nombresArchivos.length;i++){
        console.log(nombresArchivos[i]);
    }
});
*/



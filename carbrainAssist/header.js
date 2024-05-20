
document.getElementById("header").innerHTML +=
    `
    <header class="App-header">
    <div class='cabecera'>

        <div class='infocar'>
            
            <span class="time" id="hora">
                <script >
                    // JavaScript para mostrar la hora actual
                    function mostrarHora() {
                        const horaElemento = document.getElementById('hora');
                        const tiempoActual = new Date().toLocaleTimeString();
                        horaElemento.textContent = tiempoActual;
                    }
            
                    // Mostrar la hora actual al cargar la página y cada segundo
                    mostrarHora();
                    setInterval(mostrarHora, 1000);
                </script>
                
            </span>
            <span class="time">21ºC</span>
            <span class="time">Vol</span>
            <a href="profile.html">
                <span class="time">User</span>
            </a>
                
            </span>
        </div>
        
        <div>
            
            <img src="./imagenes/logo.PNG" alt="Logo" id="ImagenLogo">
        </div>

        <div class='controlesDelCoche'>
            <button class='boton'>Mapas</button>
            <button class='boton'>Musica</button>
            <button class='boton-volumen'>Volumen</button>
            
        </div>  
    </div>
</header>`;
// JavaScript para mostrar la hora actual
function mostrarHora() {
    const horaElemento = document.getElementById('hora');
    const tiempoActual = new Date().toLocaleTimeString();
    horaElemento.textContent = tiempoActual;
}

// Mostrar la hora actual al cargar la página y cada segundo
mostrarHora();
setInterval(mostrarHora, 1000);




function toggleOptions() {
    var rotateIcon = document.querySelector('.rotate-icon');
    rotateIcon.classList.toggle('rotate'); // Agregar o quitar la clase 'rotate'
}

function toggleMenu(vara, diferenteEleccion) {
    
    // Cogemos todos los option-elem pero como tienen un data option diferente dependiendo cual sea, se mostrara el que sea igual al que hemos seleccionado y viene como parametro
    var opcionElegida = document.getElementsByClassName('option-elem');
    for(var i = 0; i < opcionElegida.length; i++){
        if(opcionElegida[i].getAttribute("data-option") == diferenteEleccion){
            if(opcionElegida[i].style.display != "block"){
                opcionElegida[i].style.display = "block";    
            }else{
                opcionElegida[i].style.display = "none";
            }   
        }
    }
}

function toggleMenu1(checkbox, variableElementos) {
    
    var optionContainer = checkbox.parentElement.nextElementSibling;
    
    // Cogemos todos los elementos con el id putElementosAire y dentro de ese id cogemos todos los elementos con la clase option-elem
    var opcionElegida = document.getElementById(variableElementos).getElementsByClassName('option-elem');
    console.log(opcionElegida);
    
    for(var i = 0; i < opcionElegida.length; i++){
        if(checkbox.checked){
            opcionElegida[i].style.display = "block";

        }else{
            opcionElegida[i].style.display = "none";

        }
    }
}




document.addEventListener('DOMContentLoaded', function() {


    const carBrainAssistLink = document.getElementById("carBrainAssist");           
    const ajustesMultimediaLink = document.getElementById("ajustesMultimedia");    
    const ajustesHabitabilidadLink = document.getElementById("ajustesHabitabilidad");

    carBrainAssistLink.addEventListener("click", function(event) {
        event.preventDefault();
        const opcionesContainer = document.querySelector(".options-container");
        opcionesContainer.innerHTML = `
        <div class="container " >
            <h1>Opciones CarBrAInAssist </h1>
            <div class="options-container scrolling-container linea" id="opt-cont1">
                
                <div class="option">  
                    <div class="Toogle-switch-Container">
                        <div class="margen">Microfono</div>
                        <div> 
                            <label class="switch">
                                <input type="checkbox" class="input">
                                <div class="rail">
                                    <span class="circle"></span>
                                </div>
                                <span class="indicator"></span>
                            </label>
                        </div>
                    </div>
               </div>
                <div class="option">
                    <div class="Toogle-switch-Container">
                        <div class="margen">Activar/Descativar Inteligencia Artificial</div>
                        <div> 
                            <label class="switch">
                                <input type="checkbox" class="input">
                                <div class="rail">
                                    <span class="circle"></span>
                                </div>
                                <span class="indicator"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="option">
                    <div class="Toogle-switch-Container">
                        <div class="margen">Opciones de Conducción Autónoma</div>
                        <div> 
                            <label class="switch">
                                <input type="checkbox" class="input">
                                <div class="rail">
                                    <span class="circle"></span>
                                </div>
                                <span class="indicator"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="option">
                    <div class="Toogle-switch-Container">
                        <div class="margen">Asistente de Cambio de Carril</div>
                        <div> 
                            <label class="switch">
                                <input type="checkbox" class="input">
                                <div class="rail">
                                    <span class="circle"></span>
                                </div>
                                <span class="indicator"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="option">
                    <div class="Toogle-switch-Container">
                        <div class="margen">Asistente de Mantenimiento de Carril</div>
                        <div> 
                            <label class="switch">
                                <input type="checkbox" class="input">
                                <div class="rail">
                                    <span class="circle"></span>
                                </div>
                                <span class="indicator"></span>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="option"  onclick="toggleMenu(this, 'cambioColor')">
                    <div class="alineamiento">
                        <div> Cambiar Color 
                            <div class="option-elem" data-option="cambioColor"> Cambiar Color exterior del Coche  </div>
                            <div class="option-elem" data-option="cambioColor"> Cambiar Color de Luces  </div>
                            <div class="option-elem" data-option="cambioColor"> Cambiar Color de Interiores  </div>
                            <div class="option-elem" data-option="cambioColor"> Cambiar Color de Llantas  </div>
                        </div>
                        
                        <div class="rotate-icon" > > </div>
                    </div>
                </div>



                <div class="option"  onclick="toggleMenu(this, 'asistentesActiva')">
                    <div class="alineamiento">
                        <div> Activacion de Elementos De seguridad Activa

                            <div class="option-elem"  data-option="asistentesActiva">Asistente de Frenado de Emergencia
                                
                            </div>
                            <div class="option-elem" data-option="asistentesActiva">Asistente de Estacionamiento
                                
                            </div>
                            <div class="option-elem" data-option="asistentesActiva">Asistente de Tráfico
                                
                            </div>
                            <div class="option-elem" data-option="asistentesActiva">Asistente de Fatiga
                                
                            </div>
                            <div class="option-elem" data-option="asistentesActiva">Asistente de Luces Altas
                                
                            </div>
                            <div class="option-elem" data-option="asistentesActiva">Asistente de Señales de Tráfico
                                
                            </div>
                            <div class="option-elem" data-option="asistentesActiva">Asistente de Punto Ciego
                                
                            </div>
                            <div class="option-elem" data-option="asistentesActiva">Asistente de Tráfico Cruzado
                                
                            </div>
                            <div class="option-elem" data-option="asistentesActiva">Asistente de Atascos

                            </div>
                        
                        </div>
                        <div class="rotate-icon" > > </div>

                    </div>
                </div>
                

                <div class="option"  onclick="toggleMenu(this,'trazados')">
                    <div class="alineamiento">
                        <div>Asistente de Conducción en diferentes trazados
                                                                
                            <div class="option-elem" data-option="trazados">Asistente de Conducción en Autopista
                                
                            </div>			
                            <div class="option-elem" data-option="trazados">Asistente de Conducción en Ciudad
                                
                            </div>
                            <div class="option-elem" data-option="trazados">Asistente de Conducción en Carretera
                                
                            </div>
                            <div class="option-elem" data-option="trazados">Asistente de Conducción en Montaña
                                
                            </div>
                            <div class="option-elem" data-option="trazados">Asistente de Conducción en Nieve
                                
                            </div>
                            <div class="option-elem" data-option="trazados">Asistente de Conducción en Lluvia
                                
                            </div>
                            <div class="option-elem" data-option="trazados">Asistente de Conducción en Desierto
                                
                            </div>
                                
                        </div>
                        <div class="rotate-icon" > > </div>
                    </div>
                </div>
                

                <div class="option"  onclick="toggleMenu(this, 'asistentes')">
                    <div class="alineamiento">
                        <div>Asistentes en Conducción
                            <div class="option-elem"  data-option="asistentes"> Asistente de Estacionamiento
                            
                            </div>
                            <div class="option-elem"  data-option="asistentes">Control de Crucero Adaptativo
                                
                            </div>
                            <div class="option-elem"  data-option="asistentes">Sistema de Detección de Punto Ciego
                                
                            </div>
                            <div class="option-elem"  data-option="asistentes">Sistema de Frenado Automático
                                
                            </div>
                            <div class="option-elem"  data-option="asistentes">Sistema de Alerta de Colisión Frontal
                                
                            </div>
                            <div class="option-elem"  data-option="asistentes">Sistema de Alerta de Tráfico Cruzado
                                
                            </div>
                            <div class="option-elem"  data-option="asistentes">Sistema de Alerta de Salida de Carril
                                
                            </div>
                        </div>
                        <div class="rotate-icon" > > </div>

                    </div>
                </div>


                
                
            </div>
        </div>`;
        
        opcionesContainer.style.display = "block"; // Mostrar el contenedor de opciones
    });
    
    

    ajustesHabitabilidadLink.addEventListener("click", function(event) {
        event.preventDefault();
        const opcionesContainer = document.querySelector(".options-container");
        opcionesContainer.innerHTML = `
        <div class="container" id="dffsdf">
            <h1>Opciones del Vehículo</h1>

            <div class="options-container" >

                <div class="option">
                    <div class="Toogle-switch-Container" >
                        <div class="margen">Aire Acondicionado
                            <div>
                                <div class="alineamiento" id="putElementosAire">
                                    <div class="option-elem"> Numero de Asientos con Aire Acondicionado </div>
                                    <div class="option-elem"> Numero de Asientos con Aire Acondicionado parte Delantera </div>
                                    <div class="option-elem"> Numero de Asientos con Aire Acondicionado parte Trasera </div>
                                    <div class="option-elem"> Máxima Temperatura Aire</div>
                                    <div class="option-elem"> Mínima Temperatura Aire</div>
                                </div>
                            </div>
                        </div>
                        <div> 
                            <label class="switch">
                                <input type="checkbox" class="input" id="AireLink" onchange="toggleMenu1(this, 'putElementosAire')">
                                <div class="rail">
                                    <span class="circle"></span>
                                </div>
                                <span class="indicator"></span>
                            </label>
                        </div>
                    </div>
                </div>

            
                <div class="option" >
                    <div class="Toogle-switch-Container"  >
                        <div class="margen">Asientos Calefactados
                            <div >
                                <div class="alineamiento" id="putAsientosTemp">
                                    <div class="option-elem"> Numero de Asientos con Aire Acondicionado </div>
                                    <div class="option-elem"> Numero de Asientos con Aire Acondicionado parte Delantera </div>
                                    <div class="option-elem"> Numero de Asientos con Aire Acondicionado parte Trasera </div>
                                    <div class="option-elem"> Máxima Temperatura Aire</div>
                                    <div class="option-elem"> Mínima Temperatura Aire</div>
                                </div>
                            </div>
                        </div>
                        
                        <div> 
                            <label class="switch">
                                <input type="checkbox" class="input" id="asientosLink" onchange="toggleMenu1(this, 'putAsientosTemp')">
                                <div class="rail">
                                    <span class="circle"></span>
                                </div>
                                <span class="indicator"></span>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="option">
                    <div class="Toogle-switch-Container">
                        <div class="margen">Cámara de retroceso</div>
                        <div> 
                            <label class="switch">
                                <input type="checkbox" class="input">
                                <div class="rail">
                                    <span class="circle"></span>
                                </div>
                                <span class="indicator"></span>
                            </label>
                        </div>
                    </div>
                
                </div>
                <div class="option">
                    <div class="Toogle-switch-Container">
                        <div class="margen">Faros</div>
                        <div> 
                            <label class="switch">
                                <input type="checkbox" class="input">
                                <div class="rail">
                                    <span class="circle"></span>
                                </div>
                                <span class="indicator"></span>
                            </label>
                        </div>    
                    </div>
                </div>
                <div class="option">
                    <div class="Toogle-switch-Container">
                        <div class="margen">Sonido</div>
                        <div> 
                            <label class="switch">
                                <input type="checkbox" class="input">
                                <div class="rail">
                                    <span class="circle"></span>
                                </div>
                                <span class="indicator"></span>
                            </label>
                        </div>
                    </div>    
                </div>
                
      
            </div>
            
        </div>`;
        opcionesContainer.style.display = "block"; // Mostrar el contenedor de opciones
    });


    ajustesMultimediaLink.addEventListener("click", function(event) {
        event.preventDefault();
        const opcionesContainer = document.querySelector(".options-container");
        opcionesContainer.innerHTML = `
        <div class="container" >
            <h1>Opciones del Vehículo</h1>
            
            <div class="options-container">
                <-- Cada una tendrá un on-off, y si existe se le dará unas opciones -->
                
                <div class="option">
                    <div class="Toogle-switch-Container" >
                        <div class="margen">Radio
                            <div>
                                <div class="alineamiento" id="radioElem">
                                    <div class="option-elem"> Elija los paises que quiere oir la radio</div>
                                    <div class="option-elem"> Elija orden de la radio </div>
                                </div>
                            </div>
                        </div>
                        <div> 
                            <label class="switch">
                                <input type="checkbox" class="input" id="AireLink" onchange="toggleMenu1(this, 'radioElem')">
                                <div class="rail">
                                    <span class="circle"></span>
                                </div>
                                <span class="indicator"></span>
                            </label>
                        </div>
                    </div>
                </div>





                <div class="option">Bluetooth</div>


                <div class="option">USB</div>


                <div class="option">DVD</div>
                
                
                <div class="option">MP3</div>

                
            </div>
        </div>`;
        opcionesContainer.style.display = "block"; // Mostrar el contenedor de opciones
    });

});







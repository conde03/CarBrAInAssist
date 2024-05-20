let long;
let lat;
let val=0;
const apiKey = "523626536942a73f3f90e20470395f1a";
let temperatura = document.querySelector('.weather');



    if(val == 0){
        window.addEventListener('load', () => {
    
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition((position) => {
                    //console.log(position)
                    lat = position.coords.latitude;
                    long = position.coords.longitude;
                    
                    const urlBase =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`;
                    
                    fetch(urlBase)
                    .then((response) => {
                        return response.json();
                    })
    
                    .then((data) => {
                        
                        console.log(data);
                        temperatura.textContent = Math.floor(data.main.temp - 273.15) + "°C";
                    })
    
                    val = 1;
                });
            }
            
        });
    }else{
        const urlBase =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`;
                    
                    fetch(urlBase)
                    .then((response) => {
                        return response.json();
                    })
    
                    .then((data) => {
                        
                        console.log(data);
                        temperatura.textContent = Math.floor(data.main.temp - 273.15) + "°C";
                    })
    }


    
    



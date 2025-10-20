const SW_VERSION = 'v1';
//const URL_SUSTI = 'http://localhost:5500/img/gato2.jpg';
const URL_SUSTI = 'http://localhost:5500/img/gato224234234.jpg';
const URL_ERROR = 'http://localhost:5500/img/gatoerror.jpg';

self.addEventListener('fetch', event => {
    //console.log('Fetch hacia la url ', event.request.url);
    if(event.request.url.includes('gato1.jpg')){
        console.log("Tiene gato1.jpg");
        event.respondWith(
        fetch(URL_SUSTI).then(response => {
            if (!response.ok) {
                    console.log(`Error al cargar ${URL_SUSTI}, dió: ${response.status}`);
                    return fetch(URL_ERROR); 
                }
                return response;
            }).catch(error => {
                console.error("Falló: ", error);
                return fetch(URL_ERROR);
            })
        );       
    }
});

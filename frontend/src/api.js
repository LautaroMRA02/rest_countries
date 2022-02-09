export const loadCountries = async(ruta) => {
    try{
        const respuesta =  await fetch(`https://restcountries.com/v3.1/${ruta}?limit=20`)
        //si es correcta 
        if (respuesta.status === 200){
            const datos = await respuesta.json();
            console.log(datos.sort());
            return datos
        } 
        else if (respuesta.status === 401) {
            console.log('pusite algo mal')
        }  
        else if (respuesta.status === 404) {
            console.log('pelicula no encontrada')

        } 
        else{
            console.log('CARVALLO MANO(?')
        }
    } catch(error) {
        console.log(error)
    }
    
};

const loadCountries = async() => {
    try{
        const respuesta =  await fetch(`https://restcountries.com/v2/all?fields=name,capital,region,population`)
        console.log(respuesta);
        //si es correcta 
        if (respuesta.status === 200){
            const datos = await respuesta.json();
            console.log(datos.sort());

            // let card_countries = '';

            // datos.forEach(element => {
            //     console.log(element)
            //     card_countries += `
            //     <section>
            //     <aside>
            //         <img src="" alt="">
            //     </aside>
            //     <div>
            //         <a href="http:/index/${element.translations.spa.common}"> <h4>${element.translations.spa.common}</h4></a>
            //         <p>${element.population}</p>
            //         <p>${element.region}</p>
            //         <p>${element.capital}</p>
            //         <p></p>
            //     </div>
            //     </section>
            //     ` ;
            //     document.getElementById('contenedor').innerHTML=card_countries;
            // });
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

loadCountries()
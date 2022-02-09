import {loadCountries} from '../api.js'
import { rerender } from '../utils.js'
var ruta = 'all'
var valuerRegion = 'all'
const CountriesScreen = {
    render: async() =>{
            var response = await loadCountries(ruta)
            
            function card(data){
                return `
                <div class="countries_list">
                    ${data.map((element) => {
                    
                    return `
                    <a class="list_item" href="/#/countrie/${element.name.common}">
                    <img src="${element.flags.png}">
                    <div>
                        <h2>${element.name.common}</h2>
                        <p>Population: <span>${element.population.toLocaleString('es')}</span></p>
                        <p>Region: <span>${element.region}</span></p>
                        <p>Capital: <span>${element.capital === undefined? 'any': element.capital}</span></p>
                    </div>
                    </a>
                    `}).join('\n')}
                </div>
                `
            }
        return`
        <form class="filter_countries" name="formulario">
            <input id="buscador" type="text" list="list_countries" /> 
                <!-- Lista de opciones --> 
                <datalist id="list_countries">
                    ${response.map((element) =>`<option value="${element.name.common}">${element.name.common}</option>`)}
                </datalist> 
            <div id="menu_region">
                <div class="dato_region">
                    <span value="${valuerRegion}">${valuerRegion}</span>    
                </div>
                <div id="regions" class="regions ">
                    <span class="region" value="all">All</span>
                    <span class="region" value="region/africa">Africa</span>
                    <span class="region" value="region/americas">Americas</span>
                    <span class="region" value="region/asia">Asia</span>
                    <span class="region" value="region/europe">Europe</span>
                    <span class="region" value="region/oceania">Oceania</span>
                </div>
            </div>
        </form>
        ${card(response)}
        `
    },
    after_render: async() => {
      document.querySelectorAll(".region").forEach(item => {
          item.addEventListener('click', e =>{
            document.querySelector(".dato_region").innerText= e.target.innerText 
            const filtro =  e.path[0].attributes.value.nodeValue
            console.log(filtro)
            ruta = filtro;
            valuerRegion = e.target.innerText;
            console.log(ruta);
            rerender(CountriesScreen);
          })
      });
      document.querySelector('#menu_region').addEventListener('click', e => {
        document.querySelector('.regions').classList.toggle('active_regions')
        console.log('diste click')
      })
      document.querySelector("#buscador").addEventListener('change',e => {
          console.log(e.target.value)
          // voy a cambiar el response desde aca como hice con la ruta 
        })
    }
    //   ACORDATE DE BUSCAR EL RERENDER()
} 
export default CountriesScreen;
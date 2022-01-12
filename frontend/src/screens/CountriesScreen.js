const CountriesScreen = {
    render: () =>{
        return`
        <form class="filter_countries" name="formulario">
             <input type="text" list="items" /> 
             <!-- Lista de opciones --> 
             <datalist id="items">
                    <option value="1">Opción 1</option>
                    <option value="2">Opción 2</option> 
                    <option value="3">Opción 3</option> </datalist> 
            <select name="combo"> 
                <option value="" disabled selected>filter by Region</option> 
                <option value="1">Opción 1</option> 
            </select>
        </form>
        
        <h1>prueba</h1>`
    }
} 
export default CountriesScreen;
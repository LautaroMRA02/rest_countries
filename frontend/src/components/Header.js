const Header = {
    render: () => {
        var currentTheme = localStorage.getItem('theme');
        localStorage.setItem('theme', "dark");
        console.log(currentTheme)
        if (currentTheme === 'dark') {
            document.body.classList.toggle('dark-theme');
        return `
        <div>
            <h1>Where in the world? </h1>
        </div>
        <div>
            <h2 id="boton">Mode dark</h2>
        </div>
        `
        } else if (currentTheme === 'light') {
            document.body.classList.remove('dark-theme');
        return `
        <div>
            <h1>Where in the world? <i class="far fa-sun"></i></h1>
        </div>
        <div>
            <h2 id="boton">Mode light <i class="far fa-sun"></i></h2>
        </div>
        `
        }
    },
    after_render: () => {
        const boton = document.querySelector('#boton');
        boton.addEventListener('click', () => {
            console.log('diste click')
            document.body.classList.toggle('dark-theme')
            if (document.body.classList == 'dark-theme') {
                localStorage.setItem('theme', "dark")
                document.querySelector('#boton').innerHTML = "Mode dark"      
            } else {
                localStorage.setItem('theme', "light")
                document.querySelector('#boton').innerHTML = "Mode light"      
            }
        });
    },
}
export default Header;
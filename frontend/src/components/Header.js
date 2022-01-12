const Header = {
    render: () => {
        return `
        <div>
            <p>Where in the world?</p>
        </div>
        <div>
            <button id="boton">Mode</button>
        </div>
        `
    },
    after_render: () => {
        const boton = document.querySelector('#boton');
        boton.addEventListener('click', () => {
            console.log('diste click')
            document.body.classList.toggle('dark-theme')
        });
    },
}

export default Header;
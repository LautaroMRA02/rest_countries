import Header from './components/Header.js';

import { parseRequestUrl } from "./utils.js";
import './style.css';
import  CountriesScreen  from './screens/CountriesScreen.js';

const routes = {
    '/':CountriesScreen,
};
const router = async() => {
    const request = parseRequestUrl();
    console.log(request)
    const parseUrl = (request.resource ? `/${request.resource}` : '/') + (request.id ? `/:id` : ``) + (request.verb ? `/${request.verb}` : ``);
    console.log(parseUrl)
    const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;

    const header = document.getElementById('header_container');
    header.innerHTML = await Header.render();
    if (Header.after_render) await Header.after_render();

    const  main = document.getElementById('main_container');
    main.innerHTML = await screen.render();
    if (screen.after_render) await screen.after_render();
}

// console.log(request)
// console.log(window.location.pathname)
window.addEventListener("load",router)

window.addEventListener('hashchange',router)

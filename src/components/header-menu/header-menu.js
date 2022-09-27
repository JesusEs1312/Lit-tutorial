import { LitElement, html} from "lit";
import '../nav-menu/nav-menu.js';
import '../imagen-element/imagen-element.js'

export class HeaderMenu extends LitElement {

    static properties = {
        itemsMenu: {},
        pathImg: {}
    }

    constructor() {
        super();
        this.itemsMenu = [
            {text: 'Inicio'},
            {text: 'Nosotros'},
            {text: 'Contacto'}
        ];
        this.pathImg = "../../../assets/BBVA.jpg"; 
    }
    
    render() {
        return html `
            <div>
                <nav-menu .listItems=${this.itemsMenu}></nav-menu>
                <imagen-element .pathImg=${this.pathImg}></imagen-element>
            </div>
        `;
    }
}
customElements.define('header-menu', HeaderMenu);
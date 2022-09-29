import { LitElement, html} from "lit";
import '../components/nav-menu/nav-menu.js';
import '../components/imagen-element/imagen-element.js'

export class HeaderComponent extends LitElement {

    constructor() {
        super();
        this.itemsMenu = ['Inicio', 'Nosotros', 'Contacto'];
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
customElements.define('header-component', HeaderComponent);
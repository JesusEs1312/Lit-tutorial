import { LitElement, html, css } from "lit";
import { map } from "lit/directives/map.js";
import { styles } from "../redes-component/redes-component-styles.js"

export class RedesComponent extends LitElement {
    static properties = {
        _listRedes: {}
    }

    static styles = [styles];

    constructor() {
        super();
        this._listRedes = [
            {nombre: 'Facebook'},
            {nombre: 'Twitter'},
            {nombre: 'Instagram'},
            {nombre: 'Linkedin'},
            {nombre: 'Youtube'},
        ];
    }

    render() {
        return html `
            <div>
                <ul>
                    ${map(this._listRedes, (red) => html `<strong><li><a href="#">${red.nombre}</a></li></strong>`)}
                </ul>
            </div>
        `;
    }
}
customElements.define('redes-component', RedesComponent);
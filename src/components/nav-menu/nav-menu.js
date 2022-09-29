import { LitElement, html, css } from "lit";
import { styles } from '../nav-menu/nav-menu-styles.js';

export class NavMenu extends LitElement {

    static properties = {
        listItems: {},
        
    }

    static styles = [styles];

    constructor() {
        super();
        this.listItems = [];
        
    }

    render() {
        return html `
            <ul>
                <div>
                    <img src="../../../assets/logo_bbva_blanco.svg">
                </div>
                <div class="menu">
                    ${this.listItems.map(item => html `
                        <li>
                            <a href="#">${item}</a>
                        </li>
                    `)}
                </div>
            </ul>
        `;
    }

}
customElements.define('nav-menu', NavMenu);
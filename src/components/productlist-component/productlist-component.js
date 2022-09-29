import {LitElement, html, css} from 'lit';
import { styles } from './productlis-component-styles.js';

export class ProductListComponent extends LitElement {

    static styles = [styles];

    static properties = {
        listItems: {state: true}
    };

    constructor() {
        super();
        this.listItems = [];
    }

    render(){
        return html `
            <ul>
                ${this.listItems.map(item => html `
                    <li>
                        <strong>${item.text}</strong>
                    </li>
                `)}
            </ul>
        `;
    }
}
customElements.define('productlist-component', ProductListComponent);
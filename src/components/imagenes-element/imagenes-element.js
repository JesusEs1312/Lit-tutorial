import { LitElement, html, css } from "lit";
import '../card-element/card-element.js';
import { map } from 'lit/directives/map.js';

export class ImagenesElement extends LitElement {

    
    static properties = {
        listItems: {}
    }
    
    static styles = css `
    .container {
        display: grid;
        grid-template-columns: 49% 49%;
        gap: 2%;
    }
    `;
    
    constructor() {
        super();
    }

    render() {
        return html `
            <div class="container">
                ${map(this.listItems, (item) => html `
                    <card-element 
                        .title=${item.title} 
                        .description=${item.description} 
                        .pathImg=${item.pathImg}>
                    </card-element>
                `)}                
            </div>
        `;
    }
}
customElements.define('imagenes-element', ImagenesElement);
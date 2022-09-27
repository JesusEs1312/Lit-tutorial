import { LitElement, html, css } from "lit";
import '../card-element/card-element.js';

export class ImagenesElement extends LitElement {

    static styles = css `
        .container {
            display: grid;
            grid-template-columns: 49% 49%;
            gap: 2%;
        }
    `;

    render() {
        return html `
            <div class="container">
                <card-element 
                    .title=${"Diferencia entre cuenta de ahorros y cuenta de nómina"}
                    .description=${"Descubre la diferencia entre cuenta de ahorros y cuenta de nómina y decide cuál es la mejor alternativa para ti."}
                    .img=${"https://media.glassdoor.com/template/l/1237/bbva-template-1607601188277.jpg"}>
                </card-element>
                <card-element 
                    .title=${"¿Puedo cambiar mi nómina de banco si tengo deuda?"}
                    .description=${"Cuando trabajas es común tener dudas. Si es tu caso es importante informarte para saber qué hacer."}
                    .img=${"https://media.glassdoor.com/template/l/1237/bbva-template-1607601188277.jpg"}>
                </card-element>
            </div>
        `;
    }
}
customElements.define('imagenes-element', ImagenesElement);
import { LitElement, html, css} from "lit";
import '../components/redes-component/redes-component.js'
import { styles } from "../footer-element/footer-element-styles.js";

export class FooterElement extends LitElement {
    
    static styles = [styles];

    constructor() {
        super();
        this.name = "Jesus Estrada";
        this.text = "Page developed by";
    }

    render() {
        return html `
            <div class="container">
                <div>
                    <slot name="logo"></slot>
                    <p>${this.text} ${this.name}</p>
                </div>
                <div>
                    <redes-component></redes-component>
                </div>
            </div>
        `;
    }
}
customElements.define('footer-element', FooterElement);
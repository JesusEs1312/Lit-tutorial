import { LitElement, html } from "lit";
import { styles } from "./card-element-styles";

export class CardElement extends LitElement {
    static properties = {
        pathImg: {},
        title: {},
        description: {}
    }

    static styles = [styles];

    constructor() {
        super();
        this.title           = "";
        this.pathImg         = "";
        this.description     = "";
    }

    render() {
        return html `
            <div class="container">
                <div>
                    <img src=${this.pathImg}>
                </div>
                <div>
                    <h3>${this.title}</h3>
                </div>
                <div>
                    <p>${this.description}</p>
                </div>
            </div>
        `;
    }
}
customElements.define('card-element', CardElement);
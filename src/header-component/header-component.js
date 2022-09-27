import { LitElement, html } from "lit";

export class HeaderElement extends LitElement {
    static properties = {
        title: {},
        subTitle: {}
    }

    constructor() {
        super();
        this.title    = 'Learnig Lit-element';
        this.subTitle = 'Into to Lit tutorial'; 
    }

    render() {
        return html `
            <h1>${this.title}</h1>
            <h3>${this.subTitle}</h3>
            <hr>
        `;
    }
}
customElements.define('header-element', HeaderElement);
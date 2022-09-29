import { LitElement, html, css } from "lit";

export class ImagenElement extends LitElement {
    
    static properties = { pathImg: {} }

    static styles = css `img { width: 100%; }`;

    constructor() { super(); }

    render() { return html `<img src=${this.pathImg}>`; }
}
customElements.define('imagen-element', ImagenElement);
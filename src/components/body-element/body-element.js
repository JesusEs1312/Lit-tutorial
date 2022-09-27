import {LitElement, html} from 'lit';
import '../../my-element/my-element.js';
import '../imagenes-element/imagenes-element.js'
import '../formulario-component/formulario-component.js';

export class BodyElement extends LitElement {

    static properties = {
        listItems: {}
    }

    get input() {
        return this.renderRoot?.querySelector('#newitem') ?? null;
    }

    constructor() {
        super();
        this.listItems = [
            {text: 'Busco una tarjeta'},
            {text: 'Necesito un credito'},
            {text: 'Quiero una cuenta'},
            {text: 'Seguros'},
            {text: 'BBVA'}
        ];
    }

    render(){
        return html `
            <my-element .listItems=${this.listItems}></my-element>
            <imagenes-element></imagenes-element>
            <formulario-component></formulario-component>
        `;
    }
}
customElements.define('body-element', BodyElement);
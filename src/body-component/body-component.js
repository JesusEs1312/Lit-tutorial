import {LitElement, html} from 'lit';
import '../components/productlist-component/productlist-component.js';
import '../components/imagenes-element/imagenes-element.js'
import '../components/formulario-component/formulario-component.js';

export class BodyComponent extends LitElement {

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
            <productlist-component .listItems=${this.listItems}></productlist-component>
            <formulario-component></formulario-component>
        `;
    }
}
customElements.define('body-component', BodyComponent);
import { LitElement, html } from "lit";
import { styles } from "./formulario-component-styles";

export class FormularioComponent extends LitElement {
    
    static styles = [styles];

    constructor() {
        super();
        this.listItem = [];
    }

    addItem() {
        this.listItem = [...this.listItem, 
            {
                title: this.inputTitle.value,
                description: this.inputDescription.value,
                pathImg: this.inputPathImg.value
            }];
        this.inputTitle.value       = '';
        this.inputDescription.value = '';
        this.inputPathImg.value     = '';
        this.requestUpdate();
    }

    get inputTitle() {
        return this.renderRoot?.querySelector('#itemTitle') ?? null;
    }

    get inputDescription() {
        return this.renderRoot?.querySelector('#itemDescription') ?? null;
    }

    get inputPathImg() {
        return this.renderRoot?.querySelector('#itemPathImg') ?? null;
    }

    render() {
        return html `
            <imagenes-element .listItems=${this.listItem}></imagenes-element>
            <div class="formulario">
                <input type="text" placeholder="Titulo" id="itemTitle">
                <input type="text" placeholder="Descripcion" id="itemDescription">
                <input type="text" placeholder="Ruta imagen" id="itemPathImg">
                <button @click=${this.addItem}>Guardar</button>
            </div>
        `;
    }
}
customElements.define('formulario-component', FormularioComponent);
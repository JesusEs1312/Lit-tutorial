import { LitElement, html} from "lit";

export class LifeCycle extends LitElement {

    static properties = {
        text: {}
    }

    constructor() {
        super();
        this.text = "Life Cycle";
    }
    
    //Es el primer metodo que se ejecuta
    connectedCallback() {
        super.connectedCallback();
        console.log("Connected");
    };

    //Para modificar variables que tenemos en un constructor 
    shouldUpdate() {
        console.log("Should");
        return true;
    }

    //Se ejecuta una vez que carga el DOM
    firstUpdated() {
        console.log("first");
    }

    //Indica cuando una propiedad ha sido cabiada
    update(changeProperties) {
        console.log("updated");
    }

    //Se ejecuta al final
    disconnectedCallback() {
        console.log("disconnected");
    }

    render() {
        return html `
            <p>${this.text}</p>
        `;
    }
}
customElements.define('life-cycle', LifeCycle);
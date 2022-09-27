import { LitElement, html, css } from "lit";

export class FormularioComponent extends LitElement {
    static properties = {

    }

    static styles = css `
        .formulario {
            display: grid;
            grid-template-columns: 49% 49%;
            grid-template-rows: repeat(3, auto);
            gap: 2%;
            margin: 50px 0px;
        }

        button {
            width: 50%;
            padding: 15px;
            border: none;
            font-size: 15px;
            cursor: pointer;
            background: #14549C;
            color: #fff;
        }

        input {
            padding: 15px;
            margin-bottom: 15px;
            font-size: 15px;
        }
    `;

    constructor() {
        super();
    }

    render() {
        return html `
            <div class="formulario">
                <input type="text" placeholder="Nombre">
                <input type="text" placeholder="Email">
                <input type="text" placeholder="Asunto">
                <input type="text" placeholder="Mensaje">
                <button>Enviar</button>
            </div>
        `;
    }
}
customElements.define('formulario-component', FormularioComponent);
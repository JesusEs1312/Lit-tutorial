import { LitElement, html, css} from "lit";

export class FooterElement extends LitElement {
    static properties = {
        text: {},
        name: {}
    };

    static styles = css `
        .container {
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: center;
            width: 100%;
            height: 300px;
            background-color: #14549C;
        }

        img {
            width: 130px;
            margin-right: 1050px;
            padding: 15px;
            margin-bottom: 30px;
        }

        p {
            color: #fff;
            font-size: 20px;
            padding: 15px;
        }
    `;

    constructor() {
        super();
        this.name = "Jesus Estrada";
        this.text = "Page developed by";
    }

    render() {
        return html `
            <div class="container">
                <img src="../../../assets/logo_bbva_blanco.svg">
                <p>${this.text} ${this.name}</p>
            </div>
        `;
    }
}
customElements.define('footer-element', FooterElement);
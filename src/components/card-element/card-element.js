import { LitElement, html, css } from "lit";

export class CardElement extends LitElement {
    static properties = {
        img: {},
        title: {},
        description: {}
    }

    static styles = css `
        .container {
            width: 100%
            heigth: 200px;
            background-color: #f3f4f7;
            text-align: start;
        }
        
        p {
            padding: 0px 20px 20px 20px;
        }

        h3 {
            padding: 0px 20px;
        }

        img {
            width: 100%;
        }
    `;

    constructor() {
        super();
        this.title       = "";
        this.img         = "";
        this.description = "";
    }

    render() {
        return html `
            <div class="container">
                <div>
                    <img src=${this.img}>
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
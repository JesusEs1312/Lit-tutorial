import { LitElement, html, css } from "lit";

export class NavMenu extends LitElement {

    static properties = {
        listItems: {},
        
    }

    static styles = css `
        a {
            text-decoration: none;
            padding: 15px 15px;
            color: #ffffff;
            font-size: 20px;
        }

        a:hover {
            border-bottom: solid #fff 2px;
        }

        .menu {
            display: grid;
            grid-template-columns: repeat(3, auto);
        }

        ul {
            list-style: none;
            display: grid;
            grid-template-columns: auto auto;
            background: #14549C;
            align-items: center;
            margin: 0px;
        }

        img {
            width: 130px;
            margin-right: 550px;
            padding: 15px 0px;
        }
    `;

    constructor() {
        super();
        this.listItems = [];
        
    }

    render() {
        return html `
            <ul>
                <div>
                    <img src="../../../assets/logo_bbva_blanco.svg">
                </div>
                <div class="menu">
                    ${this.listItems.map(item => html `
                        <li>
                            <a href="#">${item.text}</a>
                        </li>
                    `)}
                </div>
            </ul>
        `;
    }

}
customElements.define('nav-menu', NavMenu);
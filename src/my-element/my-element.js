import {LitElement, html, css} from 'lit';

export class MyElement extends LitElement {

    static styles = css `
        li {
            cursor: pointer;
            padding: 50px;
            font-size: 18px;
            color: #14549C;
        }

        li:hover {
            color: #000;
        }

        ul {
            display: flex;
            list-style: none;
        }
    `;

    static properties = {
        listItems: {state: true}
    };

    constructor() {
        super();
        this.listItems = [];
    }

    render(){
        return html `
            <ul>
                ${this.listItems.map(item => html `
                    <li>
                        <strong>${item.text}</strong>
                    </li>
                `)}
            </ul>
        `;
    }
}
customElements.define('my-element', MyElement);
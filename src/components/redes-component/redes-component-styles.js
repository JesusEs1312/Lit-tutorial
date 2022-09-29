import { css } from "lit";

export const styles = css `
    ul {
        list-style: none;
        display: grid;
        background: #14549C;
        align-items: center;
        margin: 20px;
        grid-template-columns: repeat(5, auto);
    }

    a {
        text-decoration: none;
        color: #ffffff;
        font-size: 16px;
    }

    a:hover {
        color: #000000;
    }
`;
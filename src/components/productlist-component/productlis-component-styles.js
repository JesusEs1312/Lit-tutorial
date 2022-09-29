import { css } from "lit";

export const styles = css `
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
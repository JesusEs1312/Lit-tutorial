import { css } from "lit";

export const styles = css `
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
        cursor: pointer;
        background: #14549C;
        color: #fff;
    }

    input, button {
        padding: 15px;
        margin-bottom: 15px;
        font-size: 15px;
    }
`;
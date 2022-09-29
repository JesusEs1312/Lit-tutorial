import { css } from "lit";

export const styles = css `
    .container {
        display: grid;
        align-items: space-between;
        justify-content: space-between;
        grid-template-columns: 49% 49%;
        width: 100%;
        height: 300px;
        background-color: #14549C;
    }

    p {
        color: #fff;
        font-size: 20px;
        padding: 15px;
    }
`;
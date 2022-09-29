import { css } from "lit";

export const styles = css `
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
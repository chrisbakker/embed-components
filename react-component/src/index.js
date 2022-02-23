import ReactDOM from "react-dom";
import Example from "./examplereactcomponent.js";

export class ReactComponent extends HTMLElement {
    constructor() {
        super();
        this.render = this.render.bind(this);
        this.connectedCallback = this.connectedCallback.bind(this);

        this.attachShadow({ mode: "open" });
    }

    render() {
        this.shadowRoot.innerHTML = /*html*/ `
        <div><h1>Hello</h1></div>
    `;

        ReactDOM.render(<Example />, this.shadowRoot);
    }

    connectedCallback() {
        this.render();
    }
}

window.customElements.define("react-component", ReactComponent);

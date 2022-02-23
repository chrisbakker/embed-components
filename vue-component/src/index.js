import { createApp } from "vue";
import App from "./App.vue";

export default class VueComponent extends HTMLElement {
    constructor() {
        super();
        this.render = this.render.bind(this);
        this.connectedCallback = this.connectedCallback.bind(this);

        this.attachShadow({ mode: "open" });
    }

    render() {
        this.shadowRoot.innerHTML = /*html*/ `
        <div id="app"></div>
    `;
    }

    connectedCallback() {
        this.render();

        this.app = createApp(App);
        this.app.mount(this.shadowRoot.getElementById("app"));
    }
}

window.customElements.define("vue-component", VueComponent);

import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { withTailwind } from "../../css/tailwind";

@customElement("bottom-navigation")
@withTailwind
export class BottomNavigation extends LitElement {
    render() {
        return html`<slot></slot>`;
    }
}

import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { withTailwind } from "../../css/tailwind";

@customElement("navigation-item")
@withTailwind
export class NavigationItem extends LitElement {
    render() {
        return html` <slot></slot> `;
    }
}

import { html, render } from "lit";
import "./ui/nav/bottom-navigation";
import "./ui/nav/navigation-item";
import { LucideIcon } from "./icons/lucide";
import { CircleQuestionMark, Component, Home, List, ToolCase, UtilityPole } from "lucide";

render(
    html`
        <bottom-navigation>
            <navigation-item>${LucideIcon(Home)}Home</navigation-item>
            <navigation-item>${LucideIcon(Component)}Components</navigation-item>
            <navigation-item>${LucideIcon(ToolCase)}Utilities</navigation-item>
            <navigation-item>${LucideIcon(List)}Tokens</navigation-item>
            <navigation-item>${LucideIcon(CircleQuestionMark)}FAQ</navigation-item>
        </bottom-navigation>
    `,
    document.querySelector("#navigation") as HTMLElement,
);

import { LitElement } from "lit";
export declare class OwnitElement extends LitElement {
    image: string | undefined;
    opacity: number | undefined;
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "ownit-element": OwnitElement;
    }
}

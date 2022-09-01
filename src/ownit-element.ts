import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("ownit-element")
export class OwnitElement extends LitElement {
  @property({ type: String }) image: string | undefined;
  @property({ type: Number }) opacity: number | undefined;

  static styles = css`
    :host {
      all: initial;
      display: inline-flex;
      background-color: #eee;
      border-radius: 5px;
    }
    img {
      opacity: var(--opacity);
    }
    p {
      margin: 1rem;
    }
  `;

  render() {
    if (this.image) {
      return html`<img src=${this.image} />`;
    } else {
      return html`<p>No image</p>`;
    }
  }

  attributeChangedCallback(
    name: string,
    oldValue: string | null,
    newValue: string | null
  ): void {
    super.attributeChangedCallback(name, oldValue, newValue);
    if (name === "opacity") {
      this.style.setProperty("--opacity", `${this.opacity || 1}`);
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ownit-element": OwnitElement;
  }
}

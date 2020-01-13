/**
 * Entry point element
 * @hideconstructor
 * @example
 * <nonprofits-website></nonprofits-website>
 */
class Main extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' }).innerHTML = `
      <style>
        :host {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        h1 {
          font-size: 32px;
        }
      </style>
      <h1>Nonprofits Website</h1>
    `;
  }
}

window.customElements.define('nonprofits-website', Main);

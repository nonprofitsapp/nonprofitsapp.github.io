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
          display: block;
          font-family: sans-serif;
          letter-spacing: .02em;
          // font-size: 1.2em;
        }
      </style>
    `;

    fetch('src/main/template/NonprofitsApp.html').then((data) => data.text()).then((html) => {
      const template = document.createElement('template');
      template.innerHTML = html;
      template.content.querySelector('article').classList.remove('serif');
      this.shadowRoot.prepend(template.content.querySelector('article').cloneNode(true));
      this.shadowRoot.prepend(template.content.querySelector('style').cloneNode(true));
    });
  }
}

window.customElements.define('nonprofits-website', Main);

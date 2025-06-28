// Web Component: Button
// Standard Custom Element, Figma-konforme States und Variablen

const template = document.createElement('template');
template.innerHTML = `
  <style>
    @import url('../../react/button/Button.component.css');
  </style>
  <button class="btn">
    <span class="btn-icon" part="icon" style="display:none;"></span>
    <span class="btn-label" part="label"></span>
  </button>
`;

export class MdsButton extends HTMLElement {
  static get observedAttributes() {
    return [
      'type', 'size', 'interaction-state', 'semantic-state',
      'has-icon', 'has-label', 'has-menu', 'label', 'icon-src'
    ];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot!.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.update();
  }

  attributeChangedCallback() {
    this.update();
  }

  update() {
    const btn = this.shadowRoot!.querySelector('button')!;
    const icon = this.shadowRoot!.querySelector('.btn-icon')!;
    const label = this.shadowRoot!.querySelector('.btn-label')!;
    // Typen und States als Klassen
    btn.className = [
      'btn',
      `btn-${this.getAttribute('type') || 'primary'}`,
      `btn-${this.getAttribute('size') || 'lg'}`,
      `btn-${(this.getAttribute('interaction-state') || 'default').toLowerCase()}`,
      `btn-sem-${(this.getAttribute('semantic-state') || 'default').toLowerCase()}`
    ].join(' ');
    // Icon
    if (this.hasAttribute('has-icon') && this.getAttribute('icon-src')) {
      icon.innerHTML = `<img src="${this.getAttribute('icon-src')}" alt="icon" />`;
      (icon as HTMLElement).style.display = '';
    } else {
      icon.innerHTML = '';
      (icon as HTMLElement).style.display = 'none';
    }
    // Label
    if (this.hasAttribute('has-label')) {
      label.textContent = this.getAttribute('label') || "A button's text";
      (label as HTMLElement).style.display = '';
    } else {
      label.textContent = '';
      (label as HTMLElement).style.display = 'none';
    }
  }
}

customElements.define('mds-button', MdsButton);

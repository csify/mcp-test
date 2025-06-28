// Web Component: FAB (Floating Action Button)
// Standard Custom Element, Figma-konforme States und Variablen

const template = document.createElement('template');
template.innerHTML = `
  <style>
    @import url('../../react/button-fab/ButtonFab.component.css');
  </style>
  <button class="fab-root">
    <span class="fab-icon" part="icon"></span>
    <span class="fab-label" part="label"></span>
  </button>
`;

export class MdsFab extends HTMLElement {
  static get observedAttributes() {
    return [
      'size', 'interaction-state', 'semantic-state',
      'icon-src', 'label'
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
    const icon = this.shadowRoot!.querySelector('.fab-icon')!;
    const label = this.shadowRoot!.querySelector('.fab-label')!;
    btn.className = [
      'fab-root',
      `fab-${this.getAttribute('size') || 'lg'}`,
      `fab-${(this.getAttribute('interaction-state') || 'default').toLowerCase()}`,
      `fab-sem-${(this.getAttribute('semantic-state') || 'default').toLowerCase()}`
    ].join(' ');
    // Icon
    if (this.getAttribute('icon-src')) {
      icon.innerHTML = `<img src="${this.getAttribute('icon-src')}" alt="FAB Icon" />`;
    } else {
      icon.innerHTML = '';
    }
    // Label
    if (this.getAttribute('label')) {
      label.textContent = this.getAttribute('label');
      (label as HTMLElement).style.display = '';
    } else {
      label.textContent = '';
      (label as HTMLElement).style.display = 'none';
    }
  }
}

customElements.define('mds-fab', MdsFab);

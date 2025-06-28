// Web Component: FAB (Floating Action Button)
// Standard Custom Element, Figma-konforme States und Variablen

const template = document.createElement('template');
template.innerHTML = `
  <style>
    .fab-root { display: inline-flex; align-items: center; justify-content: center; border-radius: var(--mds-radius-circle, 50%); box-shadow: var(--mds-shadow-fab); background: var(--mds-color-bg-fab); color: var(--mds-color-icon-fab); border: none; padding: var(--mds-spacing-s, 12px); transition: background 0.2s, box-shadow 0.2s; }
    .fab-md { width: 40px; height: 40px; }
    .fab-lg { width: 56px; height: 56px; }
    .fab-default { background: var(--mds-color-bg-fab); color: var(--mds-color-icon-fab); }
    .fab-hover { background: var(--mds-color-bg-fab-hover); }
    .fab-focus { box-shadow: 0 0 0 4px var(--mds-shadow-focus), var(--mds-shadow-fab); }
    .fab-focus.fab-hover { background: var(--mds-color-bg-fab-hover); box-shadow: 0 0 0 4px var(--mds-shadow-focus), var(--mds-shadow-fab); }
    .fab-pressed { background: var(--mds-color-bg-fab-pressed); }
    .fab-focus.fab-pressed { background: var(--mds-color-bg-fab-pressed); box-shadow: 0 0 0 4px var(--mds-shadow-focus), var(--mds-shadow-fab); }
    .fab-disabled, .fab-sem-disabled { background: var(--mds-color-bg-fab-disabled); color: var(--mds-color-icon-fab-disabled); cursor: not-allowed; opacity: 0.6; }
    .fab-sem-destructive { background: var(--mds-color-bg-fab-destructive); }
    .fab-sem-remotecontrol { background: var(--mds-color-bg-fab-remotecontrol); }
    .fab-icon { width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; }
    .fab-icon img {
      width: 24px !important;
      height: 24px !important;
      max-width: 24px !important;
      max-height: 24px !important;
      object-fit: contain;
      display: block;
    }
    .fab-label { margin-left: var(--mds-spacing-s, 8px); font-size: 16px; font-family: inherit; color: inherit; }
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
      icon.innerHTML = `<img src="${this.getAttribute('icon-src')}" alt="FAB Icon" style="width: 24px; height: 24px; object-fit: contain;" />`;
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
    // FAB: Wenn label leer, Icon mittig und größer
    if (!this.getAttribute('label')) {
      icon.querySelector('img')?.setAttribute('style', 'width: 40px; height: 40px; object-fit: contain;');
    }
  }
}

customElements.define('mds-fab', MdsFab);

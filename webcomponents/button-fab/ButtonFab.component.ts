// Web Component: FAB (Floating Action Button)
// Standard Custom Element, Figma-konforme States und Variablen

const template = document.createElement('template');
template.innerHTML = `
  <style>
    .fab-root { display: inline-flex; align-items: center; justify-content: center; border-radius: var(--mds-radius-circle, 50%); box-shadow: var(--mds-shadow-fab); background: var(--mds-color-bg-fab); color: var(--mds-color-text-default-invers); border: none; padding: var(--mds-spacing-s, 12px); transition: background 0.2s, box-shadow 0.2s; }
    .fab-md { width: 40px; height: 40px; }
    .fab-lg { width: 56px; height: 56px; }
    .fab-default { background: var(--mds-color-bg-fab); color: var(--mds-color-text-default-invers); }
    .fab-hover { background: var(--mds-color-bg-fab-hover); color: var(--mds-color-text-default-invers); }
    .fab-focus { box-shadow: 0 0 0 4px var(--mds-shadow-focus), var(--mds-shadow-fab); }
    .fab-focus.fab-hover { background: var(--mds-color-bg-fab-hover); box-shadow: 0 0 0 4px var(--mds-shadow-focus), var(--mds-shadow-fab); color: var(--mds-color-text-default-invers); }
    .fab-pressed { background: var(--mds-color-bg-fab-pressed); color: var(--mds-color-text-default-invers); }
    .fab-focus.fab-pressed { background: var(--mds-color-bg-fab-pressed); box-shadow: 0 0 0 4px var(--mds-shadow-focus), var(--mds-shadow-fab); color: var(--mds-color-text-default-invers); }
    .fab-disabled, .fab-sem-disabled { background: var(--mds-color-bg-fab-disabled); color: var(--mds-color-icon-fab-disabled); cursor: not-allowed; opacity: 0.6; }
    .fab-sem-destructive { background: var(--mds-color-bg-fab-destructive); color: var(--mds-color-text-default-invers); }
    .fab-sem-remotecontrol { background: var(--mds-color-bg-fab-remotecontrol); color: var(--mds-color-text-default-invers); }
    .fab-icon { width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; }
    .fab-icon img { width: 24px !important; height: 24px !important; max-width: 24px !important; max-height: 24px !important; object-fit: contain; display: block; }
  </style>
  <button class="fab-root">
    <span class="fab-icon" part="icon"></span>
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
    btn.className = [
      'fab-root',
      `fab-${this.getAttribute('size') || 'lg'}`,
      `fab-${(this.getAttribute('interaction-state') || 'default').toLowerCase()}`,
      `fab-sem-${(this.getAttribute('semantic-state') || 'default').toLowerCase()}`
    ].join(' ');
    // Icon
    if (this.getAttribute('icon-src')) {
      let iconColor = '';
      // Farb-Logik für das Icon je nach FAB-Variante
      if (
        btn.classList.contains('fab-default') ||
        btn.classList.contains('fab-hover') ||
        btn.classList.contains('fab-focus') ||
        btn.classList.contains('fab-pressed') ||
        btn.classList.contains('fab-sem-destructive') ||
        btn.classList.contains('fab-sem-remotecontrol')
      ) {
        iconColor = 'filter: invert(1);'; // Weiß
      } else {
        iconColor = 'filter: none;'; // Schwarz
      }
      icon.innerHTML = `<img src="${this.getAttribute('icon-src')}" alt="FAB Icon" style="width: 24px; height: 24px; object-fit: contain; ${iconColor}" />`;
    } else {
      icon.innerHTML = '';
    }
  }
}

customElements.define('mds-fab', MdsFab);

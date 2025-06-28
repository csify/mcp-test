// Web Component: Button
// Standard Custom Element, Figma-konforme States und Variablen

const template = document.createElement('template');
template.innerHTML = `
  <style>
    .btn { box-sizing: border-box; display: flex; flex-direction: row; align-items: center; justify-content: center; padding: var(--mds-spacing-xs, 0) var(--mds-spacing-s, 20px); position: relative; border-radius: var(--mds-radius-s, 2px); gap: var(--mds-spacing-xs, 5px); }
    .btn-icon { overflow: hidden; position: relative; flex-shrink: 0; width: 16px; height: 16px; display: flex; align-items: center; justify-content: center; }
    .btn-label { display: flex; flex-direction: column; font-family: 'Weissenhof Grotesk Variable', sans-serif; font-size: 14px; color: var(--mds-color-text-primary); justify-content: center; line-height: 20px; font-weight: 390; text-align: center; white-space: nowrap; height: 100%; }
    .btn-primary.btn-default { background: var(--mds-color-bg-primary); color: var(--mds-color-text-primary); border: 1px solid var(--mds-color-border-primary, transparent); }
    .btn-primary.btn-hover { background: var(--mds-color-bg-primary-hover); }
    .btn-primary.btn-focus, .btn-primary.btn-focus-visible { box-shadow: 0 0 0 4px var(--mds-shadow-focus); }
    .btn-primary.btn-pressed { background: var(--mds-color-bg-primary-pressed); }
    .btn-primary.btn-disabled, .btn-primary.btn-sem-disabled { background: var(--mds-color-bg-primary-disabled); color: var(--mds-color-text-disabled); cursor: not-allowed; }
    .btn-primary.btn-sem-destructive { background: var(--mds-color-bg-destructive); color: var(--mds-color-text-destructive); }
    .btn-primary.btn-sem-remotecontrol { border: 2px solid var(--mds-color-border-remotecontrol); }
    /* ...weitere States analog wie in Button.component.css... */
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
      icon.innerHTML = `<img src="${this.getAttribute('icon-src')}" alt="icon" style="width: 20px; height: 20px; object-fit: contain;" />`;
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

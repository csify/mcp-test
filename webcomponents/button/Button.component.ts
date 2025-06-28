// Web Component: Button
// Standard Custom Element, Figma-konforme States und Variablen

const template = document.createElement('template');
template.innerHTML = `
  <style>
    .btn { box-sizing: border-box; display: flex; flex-direction: row; align-items: center; justify-content: center; padding: var(--mds-spacing-xs, 0) var(--mds-spacing-s, 20px); position: relative; border-radius: var(--mds-radius-s, 2px); gap: var(--mds-spacing-xs, 5px); font-family: 'Weissenhof Grotesk Variable', sans-serif; font-size: 14px; font-weight: 390; line-height: 20px; text-align: center; white-space: nowrap; height: 100%; }
    .btn-icon { overflow: hidden; position: relative; flex-shrink: 0; width: 16px; height: 16px; display: flex; align-items: center; justify-content: center; }
    .btn-icon img { width: 20px !important; height: 20px !important; max-width: 20px !important; max-height: 20px !important; object-fit: contain; display: block; }
    .btn-label { display: flex; flex-direction: column; justify-content: center; height: 100%; }
    /* Primary */
    .btn-primary.btn-default { background: var(--mds-color-bg-primary); color: var(--mds-color-text-default-invers); border: 1px solid var(--mds-color-border-primary, transparent); }
    .btn-primary.btn-hover { background: var(--mds-color-bg-primary-hover); color: var(--mds-color-text-default-invers); }
    .btn-primary.btn-focus, .btn-primary.btn-focus-visible { box-shadow: 0 0 0 4px var(--mds-shadow-focus); }
    .btn-primary.btn-pressed { background: var(--mds-color-bg-primary-pressed); color: var(--mds-color-text-default-invers); }
    .btn-primary.btn-disabled, .btn-primary.btn-sem-disabled { background: var(--mds-color-bg-primary-disabled); color: var(--mds-color-text-disabled); cursor: not-allowed; }
    .btn-primary.btn-sem-destructive { background: var(--mds-color-bg-destructive); color: var(--mds-color-text-default-invers); }
    .btn-primary.btn-sem-remotecontrol { border: 2px solid var(--mds-color-border-remotecontrol); }
    /* Secondary */
    .btn-secondary.btn-default { background: var(--mds-color-bg-secondary); color: var(--mds-color-text-default); border: 1px solid var(--mds-color-border-secondary); }
    .btn-secondary.btn-hover { background: var(--mds-color-bg-secondary-hover); color: var(--mds-color-text-default); }
    .btn-secondary.btn-focus, .btn-secondary.btn-focus-visible { box-shadow: 0 0 0 4px var(--mds-shadow-focus); }
    .btn-secondary.btn-pressed { background: var(--mds-color-bg-secondary-pressed); color: var(--mds-color-text-default); }
    .btn-secondary.btn-disabled, .btn-secondary.btn-sem-disabled { background: var(--mds-color-bg-secondary-disabled); color: var(--mds-color-text-disabled); border-color: var(--mds-color-border-secondary); cursor: not-allowed; }
    .btn-secondary.btn-sem-destructive { background: var(--mds-color-bg-destructive); color: var(--mds-color-text-default-invers); border: 1px solid var(--mds-color-border-secondary); }
    .btn-secondary.btn-sem-remotecontrol { border: 2px solid var(--mds-color-border-remotecontrol); }
    /* Destructive, RemoteControl, Disabled, etc. analog ergänzen */
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
      let iconColor = '';
      // Farb-Logik für das Icon je nach Button-Variante
      if (btn.classList.contains('btn-primary') || btn.classList.contains('btn-sem-destructive') || btn.classList.contains('btn-sem-remotecontrol')) {
        iconColor = 'filter: invert(1);'; // Weiß
      } else if (btn.classList.contains('btn-secondary')) {
        iconColor = 'filter: none;'; // Schwarz
      }
      icon.innerHTML = `<img src="${this.getAttribute('icon-src')}" alt="icon" style="width: 20px; height: 20px; object-fit: contain; ${iconColor}" />`;
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

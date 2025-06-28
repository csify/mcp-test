// Web Component: FAB (Floating Action Button)
// Standard Custom Element, Figma-konforme States und Variablen

const template = document.createElement('template');
template.innerHTML = `
  <style>
    .fab-root { 
      display: inline-flex; 
      align-items: center; 
      justify-content: center; 
      border-radius: var(--mds-radius-fab, var(--mds-radius-circle, 50%)); 
      box-shadow: var(--mds-shadow-fab, none); 
      background: var(--mds-color-bg-fab); 
      color: var(--mds-color-icon-fab); 
      border: var(--mds-border-width-fab, 0) solid var(--mds-color-border-fab, transparent); 
      padding: var(--mds-spacing-fab-padding, var(--mds-spacing-s, 12px)); 
      transition: background 0.2s, box-shadow 0.2s; 
      font-family: var(--mds-font-family-fab, 'Weissenhof Grotesk Variable', sans-serif); 
      font-size: var(--mds-font-size-fab, 16px); 
      font-weight: var(--mds-font-weight-fab, 390); 
      line-height: var(--mds-line-height-fab, 24px); 
      letter-spacing: var(--mds-letter-spacing-fab, 0);
      outline: var(--mds-outline-width-fab, 0) solid var(--mds-outline-color-fab, transparent);
    }
    .fab-md { width: var(--mds-size-fab-md, 40px); height: var(--mds-size-fab-md, 40px); }
    .fab-lg { width: var(--mds-size-fab-lg, 56px); height: var(--mds-size-fab-lg, 56px); }
    .fab-default { background: var(--mds-color-bg-fab); color: var(--mds-color-icon-fab); }
    .fab-hover { background: var(--mds-color-bg-fab-hover); color: var(--mds-color-icon-fab); }
    .fab-focus { box-shadow: 0 0 0 var(--mds-shadow-focus-width, 4px) var(--mds-shadow-focus), var(--mds-shadow-fab, none); }
    .fab-pressed { background: var(--mds-color-bg-fab-pressed); color: var(--mds-color-icon-fab); }
    .fab-disabled, .fab-sem-disabled { background: var(--mds-color-bg-fab-disabled); color: var(--mds-color-icon-fab-disabled); cursor: not-allowed; opacity: var(--mds-opacity-fab-disabled, 0.6); }
    .fab-sem-destructive { background: var(--mds-color-bg-fab-destructive); color: var(--mds-color-icon-fab); }
    .fab-sem-remotecontrol { background: var(--mds-color-bg-fab-remotecontrol); color: var(--mds-color-icon-fab); }
    .fab-icon { width: var(--mds-icon-size-fab, 24px); height: var(--mds-icon-size-fab, 24px); display: flex; align-items: center; justify-content: center; }
    .fab-icon svg { width: var(--mds-icon-size-fab, 24px); height: var(--mds-icon-size-fab, 24px); fill: currentColor; }
  </style>
  <button class="fab-root">
    <span class="fab-icon">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 0.297C5.373 0.297 0 5.67 0 12.297c0 5.282 3.438 9.747 8.205 11.325.6.111.82-.261.82-.577 0-.285-.011-1.04-.017-2.042-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.606-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.019.005 2.047.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.804 5.625-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .319.216.694.825.576C20.565 22.04 24 17.578 24 12.297c0-6.627-5.373-12-12-12" fill="currentColor"/>
      </svg>
    </span>
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
      // Icon-Farbe = Schriftfarbe des FAB
      const computedColor = getComputedStyle(btn).color;
      icon.innerHTML = `<img src="${this.getAttribute('icon-src')}" alt="FAB Icon" style="width: 24px; height: 24px; object-fit: contain; filter: none; color: ${computedColor};" />`;
    } else {
      icon.innerHTML = '';
    }
  }
}

customElements.define('mds-fab', MdsFab);

export class ButtonFigma extends HTMLElement {
  static get observedAttributes() {
    return [
      'type', 'size', 'interaction-state', 'semantic-state', 'has-icon', 'has-label', 'has-menu', 'label'
    ];
  }
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>${ButtonFigma.css}</style>
      <button class="figma-btn">
        <span class="figma-btn-icon" part="icon"></span>
        <span class="figma-btn-label" part="label"></span>
      </button>
    `;
  }
  attributeChangedCallback() {
    this.update();
  }
  connectedCallback() {
    this.update();
  }
  update() {
    const type = (this.getAttribute('type') || 'Primary').toLowerCase();
    const size = this.getAttribute('size') || 'lg';
    const interaction = (this.getAttribute('interaction-state') || 'Default').toLowerCase();
    const semantic = (this.getAttribute('semantic-state') || 'Default').toLowerCase();
    const hasIcon = this.hasAttribute('has-icon');
    const hasLabel = this.hasAttribute('has-label');
    const label = this.getAttribute('label') || "A button's text";
    const btn = this.shadowRoot!.querySelector('button')!;
    btn.className = [
      'figma-btn',
      `figma-btn-${type}`,
      `figma-btn-${size}`,
      `figma-btn-${interaction}`,
      `figma-btn-${semantic}`
    ].join(' ');
    btn.disabled = semantic === 'disabled';
    (this.shadowRoot!.querySelector('.figma-btn-icon') as HTMLElement).style.display = hasIcon ? 'inline-block' : 'none';
    (this.shadowRoot!.querySelector('.figma-btn-label') as HTMLElement).style.display = hasLabel ? 'inline-block' : 'none';
    (this.shadowRoot!.querySelector('.figma-btn-label') as HTMLElement).textContent = label;
  }
  static css = `
    .figma-btn { display: inline-flex; align-items: center; justify-content: center; border: none; cursor: pointer; transition: background 0.2s, color 0.2s, border 0.2s, opacity 0.2s; font-family: 'Weissenhof Grotesk Variable', sans-serif; font-weight: 390; font-size: 14px; line-height: 20px; border-radius: 2px; padding: 0 20px; gap: 5px; min-height: 40px; }
    .figma-btn-primary { background: var(--mds-base-semantic-theme-color-bg-primary, #321850); color: var(--mds-base-semantic-theme-color-text-emphasis-invers, #fff); }
    .figma-btn-secondary, .figma-btn-inline, .figma-btn-tertiary { background: var(--mds-core-base-component-theme-bg-color, #fff); color: var(--mds-base-semantic-theme-color-text-default, #454545); }
    .figma-btn-destructive { background: var(--mds-base-semantic-theme-color-error, #cc3542); color: var(--mds-base-semantic-theme-color-text-emphasis-invers, #fff); }
    .figma-btn-remotecontrol { outline: 2px solid var(--mds-base-semantic-theme-color-remote-control, #008282); }
    .figma-btn-hover { opacity: 0.7; }
    .figma-btn-selected { outline: 4px solid var(--mds-base-semantic-theme-color-active, #6254f7); }
    .figma-btn-focus { outline: 4px solid var(--mds-base-semantic-theme-color-line-emphasis, #000); }
    .figma-btn-disabled { opacity: 0.4; pointer-events: none; }
    .figma-btn-icon { width: 16px; height: 16px; background: #ccc; border-radius: 2px; display: inline-block; }
  `;
}
customElements.define('mds-button-figma', ButtonFigma);

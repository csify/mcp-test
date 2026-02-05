/**
 * MDS Button - Native Web Component
 * Framework-agnostic, works in React, Angular, Vue, or plain HTML
 */
class MdsButton extends HTMLElement {
  static observedAttributes = ['type', 'size', 'state', 'disabled'];

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  get type() {
    return this.getAttribute('type') || 'primary';
  }

  get size() {
    return this.getAttribute('size') || 'md';
  }

  get state() {
    return this.getAttribute('state') || '';
  }

  get disabled() {
    return this.hasAttribute('disabled');
  }

  render() {
    const stateClass = this.state ? `btn-${this.state}` : '';
    const disabledClass = this.disabled ? 'btn-disabled' : '';

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: none;
          cursor: pointer;
          transition: background 0.2s, color 0.2s, border 0.2s, box-shadow 0.2s, opacity 0.2s;
          font-family: var(--mds-core-base-font-family-default, 'Weissenhof Grotesk Variable', system-ui, sans-serif);
          font-weight: var(--mds-core-base-font-weight-normal, 390);
          line-height: var(--mds-core-base-font-line-height-md, 20px);
          border-radius: var(--mds-core-device-component-theme-atom-border-radius-default-var, 2px);
          gap: 5px;
          box-shadow: 0 1px 2px 0 rgba(0,0,0,0.04);
          position: relative;
          overflow: hidden;
          font-size: var(--mds-core-base-font-size-md, 14px);
        }

        /* Sizes */
        .btn-md {
          min-height: var(--mds-core-device-component-theme-atom-size-md-var, 30px);
          padding: 0 var(--mds-core-device-component-theme-atom-padding-md-var, 20px);
        }
        .btn-lg {
          min-height: var(--mds-core-device-component-theme-atom-size-lg-var, 40px);
          padding: 0 var(--mds-core-device-component-theme-atom-padding-lg-var, 30px);
        }

        /* Types */
        .btn-primary {
          background: var(--mds-core-base-component-theme-button-primary-bg-color-var, #321850);
          color: var(--mds-core-base-component-theme-button-primary-text-color-var, #fff);
        }
        .btn-secondary {
          background: #fff;
          color: var(--mds-base-semantic-theme-color-text-default-var, #222);
          border: 1px solid var(--mds-base-semantic-theme-color-line-default-var, #ccc);
        }
        .btn-tertiary {
          background: var(--mds-core-base-component-theme-button-tertiary-bg-color-var, rgba(0,0,0,0.2));
          color: var(--mds-core-base-component-theme-button-tertiary-text-color-var, #454545);
          border: none;
        }
        .btn-destructive {
          background: var(--mds-core-base-semantic-theme-color-error-var, #cc3542);
          color: var(--mds-base-semantic-theme-color-text-emphasis-invers, #fff);
        }
        .btn-success {
          background: var(--mds-core-base-semantic-theme-color-success-var, #20852a);
          color: var(--mds-base-semantic-theme-color-text-emphasis-invers, #fff);
        }
        .btn-remotecontrol {
          background: var(--mds-core-base-component-theme-button-primary-bg-color-var, #321850);
          color: var(--mds-core-base-component-theme-button-primary-text-color-var, #fff);
          outline: 2px solid var(--mds-base-semantic-theme-color-remote-control, #008282);
        }

        /* States */
        .btn-hover {
          opacity: 0.7;
        }
        .btn-focus {
          outline: 4px solid var(--mds-base-semantic-theme-color-line-emphasis, #000);
        }
        .btn-selected {
          outline: 4px solid var(--mds-base-semantic-theme-color-active, #6254f7);
        }
        .btn-disabled {
          opacity: 0.4;
          pointer-events: none;
          background: var(--mds-core-base-component-theme-bg-color, #fff);
          color: var(--mds-base-semantic-theme-color-text-default, #454545);
          border: 1px solid var(--mds-base-semantic-theme-color-line-default, #ccc);
        }

        .btn-remotecontrol.btn-focus,
        .btn-remotecontrol.btn-selected {
          outline: 4px solid var(--mds-base-semantic-theme-color-active, #6254f7);
          box-shadow: 0 0 0 2px var(--mds-base-semantic-theme-color-remote-control, #008282);
        }

        /* Icon slot */
        ::slotted([slot="icon"]) {
          width: 16px;
          height: 16px;
          display: inline-block;
        }
        
        .icon-wrapper {
          display: inline-flex;
          align-items: center;
        }
      </style>
      <button 
        class="btn btn-${this.type} btn-${this.size} ${stateClass} ${disabledClass}"
        ${this.disabled ? 'disabled' : ''}
      >
        <span class="icon-wrapper"><slot name="icon"></slot></span>
        <slot></slot>
      </button>
    `;
  }
}

// Register the custom element
customElements.define('mds-button', MdsButton);

export { MdsButton };

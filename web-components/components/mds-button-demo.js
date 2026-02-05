/**
 * MDS Button Demo - Native Web Component
 * Generates all button variants with theme switcher
 */
import './mds-button.js';

class MdsButtonDemo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    
    this.semantics = ['primary', 'secondary', 'tertiary', 'destructive', 'success', 'remotecontrol'];
    this.sizes = [
      { value: 'md', label: 'Medium (md)' },
      { value: 'lg', label: 'Large (lg)' }
    ];
    this.states = [
      { value: '', label: 'Default' },
      { value: 'hover', label: 'Hover' },
      { value: 'focus', label: 'Focus' },
      { value: 'selected', label: 'Selected' },
      { value: 'disabled', label: 'Disabled' }
    ];
    this.themes = [
      { value: 'bright-desktop', label: '🌞 Bright Desktop' },
      { value: 'bright-mobile', label: '📱 Bright Mobile' },
      { value: 'dark-desktop', label: '🌙 Dark Desktop' },
      { value: 'dark-mobile', label: '📱 Dark Mobile' }
    ];
    this.currentTheme = 'bright-desktop';
  }

  connectedCallback() {
    this.render();
    this.setupEventListeners();
  }

  setTheme(theme) {
    this.currentTheme = theme;
    const link = document.getElementById('theme-css');
    if (link) {
      link.href = `/mcp-test/styles/css/themes/mds-base-${theme}.css`;
    }
    document.body.classList.toggle('dark', theme.includes('dark'));
    
    // Update select value
    const select = this.shadowRoot.querySelector('#theme-select');
    if (select) select.value = theme;
  }

  setupEventListeners() {
    const select = this.shadowRoot.querySelector('#theme-select');
    if (select) {
      select.addEventListener('change', (e) => this.setTheme(e.target.value));
    }
  }

  generateButtonCell(type, size, state) {
    const isDisabled = state === 'disabled';
    return `
      <mds-button type="${type}" size="${size}" ${state ? `state="${state}"` : ''} ${isDisabled ? 'disabled' : ''}>
        <span slot="icon">★</span>
        Button
      </mds-button>
    `;
  }

  generateIconOnlyCell(type, size, state) {
    const isDisabled = state === 'disabled';
    return `
      <mds-button type="${type}" size="${size}" ${state ? `state="${state}"` : ''} ${isDisabled ? 'disabled' : ''}>
        <span slot="icon">★</span>
      </mds-button>
    `;
  }

  generateTextOnlyCell(type, size, state) {
    const isDisabled = state === 'disabled';
    return `
      <mds-button type="${type}" size="${size}" ${state ? `state="${state}"` : ''} ${isDisabled ? 'disabled' : ''}>
        Button
      </mds-button>
    `;
  }

  generateVariantCard(semantic, size) {
    const statesRows = this.states.map(state => `
      <tr>
        <td class="state-label">${state.label}</td>
        <td>${this.generateButtonCell(semantic, size.value, state.value)}</td>
        <td>${this.generateIconOnlyCell(semantic, size.value, state.value)}</td>
        <td>${this.generateTextOnlyCell(semantic, size.value, state.value)}</td>
      </tr>
    `).join('');

    return `
      <div class="variant-card">
        <h3>${semantic} / ${size.label}</h3>
        <table class="demo-table">
          <thead>
            <tr>
              <th>State</th>
              <th>Icon + Label</th>
              <th>Icon only</th>
              <th>Label only</th>
            </tr>
          </thead>
          <tbody>
            ${statesRows}
          </tbody>
        </table>
      </div>
    `;
  }

  render() {
    const themeOptions = this.themes.map(t => 
      `<option value="${t.value}" ${t.value === this.currentTheme ? 'selected' : ''}>${t.label}</option>`
    ).join('');

    const cards = this.semantics.flatMap(semantic => 
      this.sizes.map(size => this.generateVariantCard(semantic, size))
    ).join('');

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          max-width: 1400px;
          margin: 0 auto;
        }

        .demo-header {
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--mds-base-semantic-theme-color-line-default, #ddd);
        }
        .demo-header h1 { margin: 0 0 0.5rem 0; }
        .demo-header p { margin: 0 0 1rem 0; opacity: 0.7; }

        .theme-switcher {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .theme-switcher select {
          padding: 0.5rem 1rem;
          border-radius: 6px;
          border: 1px solid var(--mds-base-semantic-theme-color-line-default, #ccc);
          background: var(--mds-core-base-component-theme-bg-color, #fff);
          color: inherit;
          font-size: 1rem;
          cursor: pointer;
        }

        .demo-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
          gap: 2rem;
        }

        .variant-card {
          background: var(--mds-core-base-component-theme-bg-color, #fff);
          border: 1px solid var(--mds-base-semantic-theme-color-line-default, #e0e0e0);
          border-radius: 8px;
          padding: 1.5rem;
        }
        .variant-card h3 {
          margin: 0 0 1rem 0;
          font-size: 1rem;
          text-transform: capitalize;
        }

        .demo-table { width: 100%; border-collapse: collapse; }
        .demo-table th, .demo-table td {
          padding: 0.75rem 0.5rem;
          text-align: center;
          vertical-align: middle;
        }
        .demo-table th {
          font-size: 0.85rem;
          font-weight: 500;
          opacity: 0.7;
          border-bottom: 1px solid var(--mds-base-semantic-theme-color-line-default, #eee);
        }
        .state-label {
          text-align: left;
          font-size: 0.85rem;
          opacity: 0.7;
        }

        .badge {
          display: inline-block;
          background: #e0f2fe;
          color: #0369a1;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-size: 0.75rem;
          margin-left: 0.5rem;
        }
      </style>

      <header class="demo-header">
        <h1>MDS Button Demo <span class="badge">Web Components</span></h1>
        <p>Native Custom Elements – Framework-agnostisch, funktioniert überall</p>
        <div class="theme-switcher">
          <label for="theme-select">Theme:</label>
          <select id="theme-select">
            ${themeOptions}
          </select>
        </div>
      </header>

      <main class="demo-grid">
        ${cards}
      </main>
    `;
  }
}

customElements.define('mds-button-demo', MdsButtonDemo);

export { MdsButtonDemo };

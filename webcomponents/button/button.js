const template = document.createElement('template');
template.innerHTML = `
  <style>@import './button.css';</style>
  <button class="btn">
    <span class="btn-icon" part="icon"></span>
    <span class="btn-label" part="label"></span>
  </button>
`;

class Button extends HTMLElement {
  static get observedAttributes() {
    return ['type', 'interactionstate', 'disabled', 'icon', 'label'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.$btn = this.shadowRoot.querySelector('button');
    this.$icon = this.shadowRoot.querySelector('.btn-icon');
    this.$label = this.shadowRoot.querySelector('.btn-label');
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'type') {
      this.$btn.className = `btn btn-${newValue}`;
    }
    if (name === 'interactionstate') {
      this.$btn.classList.toggle('btn-hover', newValue === 'hover');
      this.$btn.classList.toggle('btn-focus', newValue === 'focus');
      this.$btn.classList.toggle('btn-selected', newValue === 'selected');
    }
    if (name === 'disabled') {
      this.$btn.disabled = this.hasAttribute('disabled');
      this.$btn.classList.toggle('btn-disabled', this.hasAttribute('disabled'));
    }
    if (name === 'icon') {
      this.$icon.textContent = newValue || '';
      this.$icon.style.display = newValue ? 'inline-block' : 'none';
    }
    if (name === 'label') {
      this.$label.textContent = newValue || '';
    }
  }

  connectedCallback() {
    this.$btn.addEventListener('click', e => {
      if (!this.hasAttribute('disabled')) this.dispatchEvent(new Event('click'));
    });
    // Initial rendering
    ['type', 'interactionstate', 'disabled', 'icon', 'label'].forEach(attr => {
      if (this.hasAttribute(attr)) {
        this.attributeChangedCallback(attr, null, this.getAttribute(attr));
      }
    });
  }
}
customElements.define('wc-button', Button);

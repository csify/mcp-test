var r=document.createElement("template");r.innerHTML=`
  <style>
    .btn { box-sizing: border-box; display: flex; flex-direction: row; align-items: center; justify-content: center; padding: var(--mds-spacing-xs, 0) var(--mds-spacing-s, 20px); position: relative; border-radius: var(--mds-radius-s, 2px); gap: var(--mds-spacing-xs, 5px); }
    .btn-icon { overflow: hidden; position: relative; flex-shrink: 0; width: 16px; height: 16px; display: flex; align-items: center; justify-content: center; }
    .btn-icon img {
      width: 20px !important;
      height: 20px !important;
      max-width: 20px !important;
      max-height: 20px !important;
      object-fit: contain;
      display: block;
    }
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
`;var a=class extends HTMLElement{static get observedAttributes(){return["type","size","interaction-state","semantic-state","has-icon","has-label","has-menu","label","icon-src"]}constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(r.content.cloneNode(!0))}connectedCallback(){this.update()}attributeChangedCallback(){this.update()}update(){let o=this.shadowRoot.querySelector("button"),t=this.shadowRoot.querySelector(".btn-icon"),e=this.shadowRoot.querySelector(".btn-label");o.className=["btn",`btn-${this.getAttribute("type")||"primary"}`,`btn-${this.getAttribute("size")||"lg"}`,`btn-${(this.getAttribute("interaction-state")||"default").toLowerCase()}`,`btn-sem-${(this.getAttribute("semantic-state")||"default").toLowerCase()}`].join(" "),this.hasAttribute("has-icon")&&this.getAttribute("icon-src")?(t.innerHTML=`<img src="${this.getAttribute("icon-src")}" alt="icon" style="width: 20px; height: 20px; object-fit: contain;" />`,t.style.display=""):(t.innerHTML="",t.style.display="none"),this.hasAttribute("has-label")?(e.textContent=this.getAttribute("label")||"A button's text",e.style.display=""):(e.textContent="",e.style.display="none")}};customElements.define("mds-button",a);var n=document.createElement("template");n.innerHTML=`
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
  </style>
  <button class="fab-root">
    <span class="fab-icon" part="icon"></span>
  </button>
`;var s=class extends HTMLElement{static get observedAttributes(){return["size","interaction-state","semantic-state","icon-src","label"]}constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(n.content.cloneNode(!0))}connectedCallback(){this.update()}attributeChangedCallback(){this.update()}update(){let o=this.shadowRoot.querySelector("button"),t=this.shadowRoot.querySelector(".fab-icon");o.className=["fab-root",`fab-${this.getAttribute("size")||"lg"}`,`fab-${(this.getAttribute("interaction-state")||"default").toLowerCase()}`,`fab-sem-${(this.getAttribute("semantic-state")||"default").toLowerCase()}`].join(" "),this.getAttribute("icon-src")?t.innerHTML=`<img src="${this.getAttribute("icon-src")}" alt="FAB Icon" style="width: 24px; height: 24px; object-fit: contain;" />`:t.innerHTML=""}};customElements.define("mds-fab",s);

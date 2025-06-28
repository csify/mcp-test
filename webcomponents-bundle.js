var a=document.createElement("template");a.innerHTML=`
  <style>
    .btn { box-sizing: border-box; display: flex; flex-direction: row; align-items: center; justify-content: center; padding: var(--mds-spacing-xs, 0) var(--mds-spacing-s, 20px); position: relative; border-radius: var(--mds-radius-s, 2px); gap: var(--mds-spacing-xs, 5px); font-family: 'Weissenhof Grotesk Variable', sans-serif; font-size: 14px; font-weight: 390; line-height: 20px; text-align: center; white-space: nowrap; height: 100%; }
    .btn-icon { overflow: hidden; position: relative; flex-shrink: 0; width: 16px; height: 16px; display: flex; align-items: center; justify-content: center; }
    .btn-icon svg { width: 20px; height: 20px; fill: currentColor; }
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
    /* Destructive, RemoteControl, Disabled, etc. analog erg\xE4nzen */
  </style>
  <button class="btn">
    <span class="btn-icon" part="icon" style="display:none;">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 0.297C5.373 0.297 0 5.67 0 12.297c0 5.282 3.438 9.747 8.205 11.325.6.111.82-.261.82-.577 0-.285-.011-1.04-.017-2.042-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.606-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.019.005 2.047.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.804 5.625-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .319.216.694.825.576C20.565 22.04 24 17.578 24 12.297c0-6.627-5.373-12-12-12" fill="currentColor"/>
      </svg>
    </span>
    <span class="btn-label" part="label"></span>
  </button>
`;var r=class extends HTMLElement{static get observedAttributes(){return["type","size","interaction-state","semantic-state","has-icon","has-label","has-menu","label","icon-src"]}constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(a.content.cloneNode(!0))}connectedCallback(){this.update()}attributeChangedCallback(){this.update()}update(){let o=this.shadowRoot.querySelector("button"),t=this.shadowRoot.querySelector(".btn-icon"),e=this.shadowRoot.querySelector(".btn-label");if(o.className=["btn",`btn-${this.getAttribute("type")||"primary"}`,`btn-${this.getAttribute("size")||"lg"}`,`btn-${(this.getAttribute("interaction-state")||"default").toLowerCase()}`,`btn-sem-${(this.getAttribute("semantic-state")||"default").toLowerCase()}`].join(" "),this.hasAttribute("has-icon")&&this.getAttribute("icon-src")){let c=getComputedStyle(o).color;t.innerHTML=`<img src="${this.getAttribute("icon-src")}" alt="icon" style="width: 20px; height: 20px; object-fit: contain; filter: none; color: ${c};" />`,t.style.display=""}else t.innerHTML="",t.style.display="none";this.hasAttribute("has-label")?(e.textContent=this.getAttribute("label")||"A button's text",e.style.display=""):(e.textContent="",e.style.display="none")}};customElements.define("mds-button",r);var n=document.createElement("template");n.innerHTML=`
  <style>
    .fab-root { display: inline-flex; align-items: center; justify-content: center; border-radius: var(--mds-radius-circle, 50%); box-shadow: var(--mds-shadow-fab); background: var(--mds-color-bg-fab); color: var(--mds-color-icon-fab); border: none; padding: var(--mds-spacing-s, 12px); transition: background 0.2s, box-shadow 0.2s; }
    .fab-md { width: 40px; height: 40px; }
    .fab-lg { width: 56px; height: 56px; }
    .fab-default { background: var(--mds-color-bg-fab); color: var(--mds-color-icon-fab); }
    .fab-hover { background: var(--mds-color-bg-fab-hover); color: var(--mds-color-icon-fab); }
    .fab-focus { box-shadow: 0 0 0 4px var(--mds-color-bg-fab-hover), var(--mds-shadow-fab); }
    .fab-pressed { background: var(--mds-color-bg-fab-pressed); color: var(--mds-color-icon-fab); }
    .fab-disabled, .fab-sem-disabled { background: var(--mds-color-bg-fab-disabled); color: var(--mds-color-icon-fab-disabled); cursor: not-allowed; opacity: 0.6; }
    .fab-sem-destructive { background: var(--mds-color-bg-fab-destructive); color: var(--mds-color-icon-fab); }
    .fab-sem-remotecontrol { background: var(--mds-color-bg-fab-remotecontrol); color: var(--mds-color-icon-fab); }
    .fab-icon { width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; }
    .fab-icon svg { width: 24px; height: 24px; fill: currentColor; }
  </style>
  <button class="fab-root">
    <span class="fab-icon">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 0.297C5.373 0.297 0 5.67 0 12.297c0 5.282 3.438 9.747 8.205 11.325.6.111.82-.261.82-.577 0-.285-.011-1.04-.017-2.042-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.606-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.019.005 2.047.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.804 5.625-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .319.216.694.825.576C20.565 22.04 24 17.578 24 12.297c0-6.627-5.373-12-12-12" fill="currentColor"/>
      </svg>
    </span>
  </button>
`;var s=class extends HTMLElement{static get observedAttributes(){return["size","interaction-state","semantic-state","icon-src","label"]}constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(n.content.cloneNode(!0))}connectedCallback(){this.update()}attributeChangedCallback(){this.update()}update(){let o=this.shadowRoot.querySelector("button"),t=this.shadowRoot.querySelector(".fab-icon");if(o.className=["fab-root",`fab-${this.getAttribute("size")||"lg"}`,`fab-${(this.getAttribute("interaction-state")||"default").toLowerCase()}`,`fab-sem-${(this.getAttribute("semantic-state")||"default").toLowerCase()}`].join(" "),this.getAttribute("icon-src")){let e=getComputedStyle(o).color;t.innerHTML=`<img src="${this.getAttribute("icon-src")}" alt="FAB Icon" style="width: 24px; height: 24px; object-fit: contain; filter: none; color: ${e};" />`}else t.innerHTML=""}};customElements.define("mds-fab",s);

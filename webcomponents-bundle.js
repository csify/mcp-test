var n=document.createElement("template");n.innerHTML=`
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
    /* Destructive, RemoteControl, Disabled, etc. analog erg\xE4nzen */
  </style>
  <button class="btn">
    <span class="btn-icon" part="icon" style="display:none;"></span>
    <span class="btn-label" part="label"></span>
  </button>
`;var s=class extends HTMLElement{static get observedAttributes(){return["type","size","interaction-state","semantic-state","has-icon","has-label","has-menu","label","icon-src"]}constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(n.content.cloneNode(!0))}connectedCallback(){this.update()}attributeChangedCallback(){this.update()}update(){let t=this.shadowRoot.querySelector("button"),o=this.shadowRoot.querySelector(".btn-icon"),e=this.shadowRoot.querySelector(".btn-label");if(t.className=["btn",`btn-${this.getAttribute("type")||"primary"}`,`btn-${this.getAttribute("size")||"lg"}`,`btn-${(this.getAttribute("interaction-state")||"default").toLowerCase()}`,`btn-sem-${(this.getAttribute("semantic-state")||"default").toLowerCase()}`].join(" "),this.hasAttribute("has-icon")&&this.getAttribute("icon-src")){let r="";t.classList.contains("btn-primary")||t.classList.contains("btn-sem-destructive")||t.classList.contains("btn-sem-remotecontrol")?r="filter: invert(1);":t.classList.contains("btn-secondary")&&(r="filter: none;"),o.innerHTML=`<img src="${this.getAttribute("icon-src")}" alt="icon" style="width: 20px; height: 20px; object-fit: contain; ${r}" />`,o.style.display=""}else o.innerHTML="",o.style.display="none";this.hasAttribute("has-label")?(e.textContent=this.getAttribute("label")||"A button's text",e.style.display=""):(e.textContent="",e.style.display="none")}};customElements.define("mds-button",s);var i=document.createElement("template");i.innerHTML=`
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
`;var a=class extends HTMLElement{static get observedAttributes(){return["size","interaction-state","semantic-state","icon-src","label"]}constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(i.content.cloneNode(!0))}connectedCallback(){this.update()}attributeChangedCallback(){this.update()}update(){let t=this.shadowRoot.querySelector("button"),o=this.shadowRoot.querySelector(".fab-icon");if(t.className=["fab-root",`fab-${this.getAttribute("size")||"lg"}`,`fab-${(this.getAttribute("interaction-state")||"default").toLowerCase()}`,`fab-sem-${(this.getAttribute("semantic-state")||"default").toLowerCase()}`].join(" "),this.getAttribute("icon-src")){let e="";t.classList.contains("fab-default")||t.classList.contains("fab-hover")||t.classList.contains("fab-focus")||t.classList.contains("fab-pressed")||t.classList.contains("fab-sem-destructive")||t.classList.contains("fab-sem-remotecontrol")?e="filter: invert(1);":e="filter: none;",o.innerHTML=`<img src="${this.getAttribute("icon-src")}" alt="FAB Icon" style="width: 24px; height: 24px; object-fit: contain; ${e}" />`}else o.innerHTML=""}};customElements.define("mds-fab",a);

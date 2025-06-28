var o=document.createElement("template");o.innerHTML=`
  <style>
    @import url('../../react/button/Button.component.css');
  </style>
  <button class="btn">
    <span class="btn-icon" part="icon" style="display:none;"></span>
    <span class="btn-label" part="label"></span>
  </button>
`;var n=class extends HTMLElement{static get observedAttributes(){return["type","size","interaction-state","semantic-state","has-icon","has-label","has-menu","label","icon-src"]}constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(o.content.cloneNode(!0))}connectedCallback(){this.update()}attributeChangedCallback(){this.update()}update(){let s=this.shadowRoot.querySelector("button"),e=this.shadowRoot.querySelector(".btn-icon"),t=this.shadowRoot.querySelector(".btn-label");s.className=["btn",`btn-${this.getAttribute("type")||"primary"}`,`btn-${this.getAttribute("size")||"lg"}`,`btn-${(this.getAttribute("interaction-state")||"default").toLowerCase()}`,`btn-sem-${(this.getAttribute("semantic-state")||"default").toLowerCase()}`].join(" "),this.hasAttribute("has-icon")&&this.getAttribute("icon-src")?(e.innerHTML=`<img src="${this.getAttribute("icon-src")}" alt="icon" />`,e.style.display=""):(e.innerHTML="",e.style.display="none"),this.hasAttribute("has-label")?(t.textContent=this.getAttribute("label")||"A button's text",t.style.display=""):(t.textContent="",t.style.display="none")}};customElements.define("mds-button",n);var i=document.createElement("template");i.innerHTML=`
  <style>
    @import url('../../react/button-fab/ButtonFab.component.css');
  </style>
  <button class="fab-root">
    <span class="fab-icon" part="icon"></span>
    <span class="fab-label" part="label"></span>
  </button>
`;var a=class extends HTMLElement{static get observedAttributes(){return["size","interaction-state","semantic-state","icon-src","label"]}constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(i.content.cloneNode(!0))}connectedCallback(){this.update()}attributeChangedCallback(){this.update()}update(){let s=this.shadowRoot.querySelector("button"),e=this.shadowRoot.querySelector(".fab-icon"),t=this.shadowRoot.querySelector(".fab-label");s.className=["fab-root",`fab-${this.getAttribute("size")||"lg"}`,`fab-${(this.getAttribute("interaction-state")||"default").toLowerCase()}`,`fab-sem-${(this.getAttribute("semantic-state")||"default").toLowerCase()}`].join(" "),this.getAttribute("icon-src")?e.innerHTML=`<img src="${this.getAttribute("icon-src")}" alt="FAB Icon" />`:e.innerHTML="",this.getAttribute("label")?(t.textContent=this.getAttribute("label"),t.style.display=""):(t.textContent="",t.style.display="none")}};customElements.define("mds-fab",a);

import{r as t,j as e}from"./index-l8DKTuI4.js";import{H as B}from"./Header-BOpTwT99.js";import{F as H}from"./Footer-DUz5rqjX.js";import"./index.esm-Dqt17Ohr.js";import"./firebaseConfig-BqIL-e7F.js";const I=`
@import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Syne:wght@700;800&family=Poppins:wght@400;500;600;700&display=swap');


*, ::before, ::after { box-sizing: border-box; margin: 0; padding: 0; }
* { -webkit-user-select: none; -moz-user-select: none; user-select: none; }
input, textarea { -webkit-user-select: text; -moz-user-select: text; user-select: text; }

html { scroll-behavior: smooth; }
body { font-family: var(--body-font); color: var(--text-color); background-color: var(--body-color);
  line-height: 1.6; -webkit-font-smoothing: antialiased; }

/* ── APP SHELL ── */
.app { display: flex; height: 100vh; overflow: hidden; margin-top:50px; }

/* ── SIDEBAR (nav-inspired) ── */
.sidebar {
  width: 288px; min-width: 288px;
  background-color: var(--container-color);
  box-shadow: 2px 0 12px var(--shadow-color);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex; flex-direction: column; overflow-y: auto;
  border-right: 1px solid var(--border-color);
  transition: var(--transition-base);
}

/* ── Sidebar header – nav__logo style ── */
.sidebar-header {
  padding: 24px 20px 18px;
  border-bottom: 1px solid var(--border-color);
  background: var(--container-color);
  position: sticky; top: 0; z-index: 10;
}
.sidebar-logo {
  font-size: 1.25rem; font-weight: 800;
  color: var(--gradient-start);
}
.sidebar-sub {
  font-size: 0.72rem; color: var(--text-color-light);
  letter-spacing: 0.18em; text-transform: uppercase; margin-top: 3px;
  font-family: 'DM Mono', monospace;
}

/* ── Sidebar sections ── */
.sb-section { padding: 16px 20px; border-bottom: 1px solid var(--border-color); }
.sb-label {
  font-size: 0.68rem; letter-spacing: 0.2em; text-transform: uppercase;
  color: var(--text-color-light); margin-bottom: 12px;
  display: flex; align-items: center; gap: 8px;
}
.sb-label::after { content: ''; flex: 1; height: 1px; background: var(--border-color); }

/* ── Fields – contact__input style ── */
.field { margin-bottom: 10px; }
.field label {
  display: block; font-size: 0.7rem; letter-spacing: 0.13em;
  text-transform: uppercase; color: var(--text-secondary);
  font-family: 'DM Mono', monospace; margin-bottom: 4px;
}
.field input, .field textarea {
  width: 100%;
  padding: 0.55rem 0.9rem;
  font-family: 'DM Mono', monospace; font-size: 0.78rem;
  background: var(--container-glass);
  border: 1px solid var(--border-color);
  color: var(--text-color);
  border-radius: 0.6rem; outline: none;
  transition: border-color var(--transition-base), box-shadow var(--transition-base), background var(--transition-base);
  backdrop-filter: blur(8px);
}
.field input:focus, .field textarea:focus {
  border-color: var(--first-color);
  background: rgba(255,255,255,0.05);
  box-shadow: 0 0 0 3px rgba(124,58,237,0.1);
}
.field input::placeholder, .field textarea::placeholder { color: var(--text-color-light); }
.field textarea { resize: vertical; min-height: 72px; line-height: 1.6; }

/* Color row */
.color-row { display: flex; gap: 8px; align-items: center; }
.color-row input[type=color] {
  width: 34px; height: 32px; padding: 2px; cursor: pointer;
  background: var(--container-glass); border: 1px solid var(--border-color);
  border-radius: 0.6rem;
}
.color-row span { font-size: 0.72rem; color: var(--text-color-light); font-family: 'DM Mono', monospace; }

/* ── Theme pills ── */
.theme-pills { display: flex; gap: 6px; flex-wrap: wrap; margin-top: 6px; }
.pill {
  padding: 3px 10px; border-radius: 50px;
  font-family: 'DM Mono', monospace; font-size: 0.68rem;
  letter-spacing: 0.1em; text-transform: uppercase;
  cursor: pointer; border: 1px solid var(--border-color);
  background: transparent; color: var(--text-secondary);
  transition: all var(--transition-base);
}
.pill:hover { border-color: var(--first-color); color: var(--first-color); }
.pill.active {
  background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
  border-color: transparent; color: #fff;
  box-shadow: 0 2px 8px rgba(124,58,237,0.25);
}

/* Checkbox row */
.check-row {
  display: flex; align-items: center; gap: 8px; cursor: pointer;
  font-family: 'DM Mono', monospace; font-size: 0.7rem;
  letter-spacing: 0.13em; text-transform: uppercase; color: var(--text-secondary);
}
.check-row input[type=checkbox] { width: auto; accent-color: var(--first-color); cursor: pointer; }

/* ── PREVIEW AREA ── */
.preview-area {
  flex: 1; overflow-y: auto;
  background: var(--body-color);
  background-image: radial-gradient(circle at 1px 1px, var(--border-color) 1px, transparent 0);
  background-size: 22px 22px;
  display: flex; flex-direction: column; align-items: center; padding: 36px 28px;
}

/* ── Preview toolbar (l-header style) ── */
.preview-toolbar {
  width: 100%; max-width: 760px;
  display: flex; justify-content: space-between; align-items: center;
  margin-bottom: 20px; padding: 10px 18px;
  background: var(--container-color);
  border: 1px solid var(--border-color);
  border-radius: 1rem;
  box-shadow: 0 2px 12px var(--shadow-color);
  backdrop-filter: blur(10px);
}
.preview-toolbar span {
  font-family: 'DM Mono', monospace;
  font-size: 0.7rem; letter-spacing: 0.18em; text-transform: uppercase;
  color: var(--text-color-light);
}

/* ── Print button (buttonmain style) ── */
.btn-print {
  font-family: var(--body-font); font-size: 0.8rem; font-weight: 600;
  padding: 0.5rem 1.5rem;
  background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
  color: #fff; border: none; border-radius: 0.6rem;
  cursor: pointer; position: relative; z-index: 1; overflow: hidden;
  transition: transform var(--transition-base), box-shadow var(--transition-base);
  box-shadow: 0 4px 12px rgba(124,58,237,0.25);
  will-change: transform;
}
.btn-print::after {
  content: ""; background: white; position: absolute; z-index: -1;
  left: -20%; right: -20%; top: 0; bottom: 0;
  transform: skewX(-45deg) scale(0,1); transition: all 0.5s;
}
.btn-print:hover { color: var(--gradient-end); }
.btn-print:hover::after { transform: skewX(-45deg) scale(1,1); }

/* ── PAPER (card glass style) ── */
.paper {
  width: 100%; max-width: 760px;
  background: #fff;
  border: 1px solid var(--border-color);
  box-shadow: 0 12px 40px var(--shadow-color);
  display: flex; flex-direction: column; min-height: 1040px;
  overflow: hidden;
  color: #000;
  transition: box-shadow var(--transition-slow);
  will-change: transform;
}
.paper:hover { box-shadow: 0 20px 56px var(--shadow-hover); }

/* ── HEADER COMPONENT ── */
.letter-header {
  padding: 36px 52px 28px;
  display: flex; justify-content: space-between; align-items: flex-start;
  border-bottom: 1px solid var(--border-color);
  position: relative;
}
.gradient-bar {
  height: 4px; width: 100%;
  background: linear-gradient(90deg, var(--gradient-start), var(--gradient-end));
}
.company-name {
color: #000;
  font-size: 2rem; font-weight: 800;  line-height: 1.1;
  background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}
.company-tagline {
  color: #000;
  font-family: 'DM Mono', monospace;
  font-size: 0.68rem; letter-spacing: 0.2em; text-transform: uppercase;
   margin-top: 5px;
}
.header-badge {
  color: #000;
  display: inline-flex; align-items: center; gap: 6px;
  margin-top: 10px; padding: 4px 12px;
  border: 1px solid var(--border-color);
  border-radius: 50px; font-size: 0.7rem; font-family: 'DM Mono', monospace;
  backdrop-filter: blur(8px);
}
.header-badge::before {
  content: ''; width: 6px; height: 6px; border-radius: 50%;
  background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
  flex-shrink: 0;
}
.header-contact {
  text-align: right;
  color: #000;
  font-size: 0.72rem; line-height: 2;
}
.header-contact span {
  display: flex; align-items: center; justify-content: flex-end; gap: 6px;color: #000;
}

/* ── LETTER BODY ── */
.letter-body { padding: 40px 52px; flex: 1; }
.letter-date {
  font-family: 'DM Mono', monospace; font-size: 0.72rem;
  color: #000; letter-spacing: 0.1em; margin-bottom: 28px;
  display: flex; align-items: center; gap: 8px;
}
.letter-date::before {
  content: ''; width: 20px; height: 1px;
  background: linear-gradient(90deg, var(--gradient-start), var(--gradient-end));
}

.recipient { margin-bottom: 28px; }
.recipient-name {
  font-family: 'Syne', sans-serif; font-size: 1.1rem; font-weight: 700;
  color: #000; letter-spacing: -0.3px;
}
.recipient-info {
  font-family: 'DM Mono', monospace; font-size: 0.72rem;
  color: #000; line-height: 1.9; margin-top: 4px;
}

/* Section title style for "Re:" line */
.re-line {
  font-size: 0.72rem; font-family: 'DM Mono', monospace;
  letter-spacing: 0.15em; text-transform: uppercase;
  color: var(--first-color); font-weight: 500;
  margin-bottom: 20px; padding: 6px 14px;
  background: rgba(124,58,237,0.07); border-radius: 50px;
  display: inline-block;
}

.salutation { font-size: 0.88rem; margin-bottom: 18px; color: #000; }
.body-text {
  font-size: 0.85rem; line-height: 1.9; color: #000;
  white-space: pre-wrap; margin-bottom: 28px;
}
.closing { font-size: 0.88rem; color: #000; margin-bottom: 48px; }

.sig-name {
 font-size: 1.15rem; font-weight: 800;
  background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  margin-bottom: 2px; 
}
.sig-title {
  font-family: 'DM Mono', monospace; font-size: 0.68rem;
  letter-spacing: 0.18em; text-transform: uppercase; color: #000;
}
.sig-divider {
  width: 32px; height: 3px; margin-bottom: 10px; border-radius: 2px;
  background: linear-gradient(90deg, var(--gradient-start), var(--gradient-end));
}

/* ── FOOTER COMPONENT (footer-modern style) ── */
.letter-footer {
  padding: 18px 52px;
  border-top: 1px solid var(--border-color);
  display: flex; justify-content: space-between; align-items: center;
}
.footer-left {
  font-family: 'DM Mono', monospace; font-size: 0.65rem;
  letter-spacing: 0.12em; text-transform: uppercase; color: #000;
}
.footer-center {
  font-size: 0.65rem;
  color: #000; letter-spacing: 0.1em; text-align: center;
  display: flex; align-items: center; gap: 6px;
}
.footer-center-dot {
  width: 5px; height: 5px; border-radius: 50%;
  background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
  flex-shrink: 0;
}
.footer-icons {
  display: flex; gap: 8px; align-items: center;
}
.footer-icon {
  width: 26px; height: 26px; border-radius: 50%;
  background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
  display: inline-flex; align-items: center; justify-content: center;
  color: #fff; font-size: 0.7rem; box-shadow: 0 2px 8px var(--shadow-color);
  transition: all 0.3s ease;
}

@media print {
  .sidebar, .preview-toolbar { display: none !important; }
  .preview-area { padding: 0; background: white; }
  .paper { box-shadow: none; max-width: 100%; border-radius: 0; border: none; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important; transition-duration: 0.01ms !important;
  }
}

/* ── MOBILE RESPONSIVE ── */
@media screen and (max-width: 767px) {
  .app {
    flex-direction: column;
    height: auto;
    min-height: 100vh;
    overflow: visible;
    margin-top: 50px;
  }

  /* Sidebar becomes a top horizontal strip */
  .sidebar {
    width: 100%;
    min-width: unset;
    max-height: 260px;
    flex-direction: column;
    overflow-y: auto;
    border-right: none;
    border-bottom: 1px solid var(--border-color);
    box-shadow: 0 4px 12px var(--shadow-color);
  }

  .sidebar-header { padding: 14px 16px 10px; }
  .sidebar-logo { font-size: 1rem; }

  .sb-section { padding: 12px 16px; }

  .theme-pills { gap: 4px; }
  .pill { padding: 2px 8px; font-size: 0.62rem; }

  .field input, .field textarea { font-size: 0.75rem; padding: 0.45rem 0.75rem; }

  /* Preview area full width */
  .preview-area {
    padding: 16px 8px 32px;
    width: 100%;
    overflow-y: visible;
  }

  .preview-toolbar {
    padding: 8px 12px;
    margin-bottom: 12px;
    border-radius: 0.75rem;
    flex-wrap: wrap;
    gap: 8px;
  }
  .preview-toolbar span { font-size: 0.62rem; }
  .btn-print { font-size: 0.72rem; padding: 0.4rem 1rem; }

  /* Paper collapses to full width */
  .paper {
    max-width: 100%;
    min-height: auto;
    border-radius: 0.75rem;
  }

  /* Header inside paper */
  .letter-header {
    padding: 20px 20px 16px;
    flex-direction: column;
    gap: 12px;
  }
  .company-name { font-size: 1.4rem; }
  .header-contact { text-align: left; }
  .header-contact span { justify-content: flex-start; }

  /* Body inside paper */
  .letter-body { padding: 20px 20px; }
  .letter-date { font-size: 0.65rem; }
  .recipient-name { font-size: 0.95rem; }
  .recipient-info { font-size: 0.65rem; }
  .salutation, .body-text, .closing { font-size: 0.8rem; }
  .sig-name { font-size: 1rem; }

  /* Footer inside paper */
  .letter-footer {
    padding: 12px 20px;
    flex-direction: column;
    gap: 8px;
    text-align: center;
  }
  .footer-left { font-size: 0.6rem; }
  .footer-center { font-size: 0.6rem; }
  .footer-icons { justify-content: center; }
}

@media screen and (max-width: 480px) {
  .app { margin-top: 50px; }

  .sidebar { max-height: 220px; }

  .letter-header { padding: 14px 14px 12px; }
  .company-name { font-size: 1.2rem; }
  .company-tagline { font-size: 0.6rem; }

  .letter-body { padding: 14px 14px; }
  .body-text { font-size: 0.75rem; }
  .closing { margin-bottom: 28px; }

  .letter-footer { padding: 10px 14px; }
}

@media print {

  body * {
    visibility: hidden;
  }

  #print-area, #print-area * {
    visibility: visible;
  }

  #print-area {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
  }

  .preview-toolbar {
    display: none; /* hide toolbar when printing */
  }

}
`;function V({company:o,tagline:i,email:a,phone:n,website:s}){return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"gradient-bar"}),e.jsxs("div",{className:"letter-header",children:[e.jsxs("div",{children:[e.jsx("div",{className:"company-name",children:o||"Company Name"}),i&&e.jsx("div",{className:"company-tagline",children:i}),e.jsxs("div",{className:"header-badge",children:["Est. ",new Date().getFullYear()]})]}),e.jsxs("div",{className:"header-contact",children:[a&&e.jsxs("span",{children:["✉ ",a]}),n&&e.jsxs("span",{children:["✆ ",n]}),s&&e.jsxs("span",{children:["⊕ ",s]})]})]})]})}function Y({company:o,address:i,confidential:a}){const n=new Date().getFullYear();return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"letter-footer",children:[e.jsx("div",{className:"footer-left",children:i||"123 Business Ave"}),e.jsxs("div",{className:"footer-center",children:[e.jsx("span",{className:"footer-center-dot"}),a?"Strictly Confidential":`© ${n} ${o||"Company"}`,e.jsx("span",{className:"footer-center-dot"})]}),e.jsxs("div",{className:"footer-icons",children:[e.jsx("span",{className:"footer-icon",children:"✉"}),e.jsx("span",{className:"footer-icon",children:"⊕"})]})]}),e.jsx("div",{className:"gradient-bar"})]})}const y={Indigo:{start:"hsl(224,75%,65%)",end:"#4f46e5"},Violet:{start:"#7c3aed",end:"#a855f7"},Rose:{start:"#e11d48",end:"#f43f5e"},Teal:{start:"#0d9488",end:"#06b6d4"},Amber:{start:"#d97706",end:"#f59e0b"},Slate:{start:"#475569",end:"#64748b"}};function q(){const[o,i]=t.useState("Indigo"),[a,n]=t.useState("Harlow & Associates"),[s,j]=t.useState("Strategic Consulting Group"),[d,N]=t.useState("hello@harlow.co"),[c,k]=t.useState("+1 (212) 555-0190"),[p,z]=t.useState("www.harlow.co"),[x,S]=t.useState("280 Park Avenue, New York NY 10017"),[m,M]=t.useState("Ms. Eleanor Voss"),[g,C]=t.useState(`Director of Partnerships
Voss Capital Group
London, EC2V 8RF`),[h,E]=t.useState("Dear Ms. Voss,"),[f,D]=t.useState(`We are pleased to present this proposal in response to your recent inquiry regarding strategic advisory services for the upcoming fiscal year.

Our team has conducted a thorough review of the enclosed materials and believes there is a compelling opportunity for collaboration. We would welcome the chance to discuss this further at your earliest convenience.

Thank you for your time and consideration.`),[b,P]=t.useState("Yours sincerely,"),[u,T]=t.useState("James Harlow"),[v,R]=t.useState("Managing Partner"),[l,A]=t.useState(!1),{start:w,end:F}=y[o],L=new Date().toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"}),O={"--gradient-start":w,"--gradient-end":F,"--first-color":w};return e.jsxs(e.Fragment,{children:[e.jsx(B,{}),e.jsx("style",{children:I}),e.jsxs("div",{className:"app",style:O,children:[e.jsxs("aside",{className:"sidebar",children:[e.jsxs("div",{className:"sidebar-header",children:[e.jsx("div",{className:"sidebar-logo",children:"Letterhead Studio"}),e.jsx("div",{className:"sidebar-sub",children:"Live Preview Builder"})]}),e.jsxs("div",{className:"sb-section",children:[e.jsx("div",{className:"sb-label",children:"Color Theme"}),e.jsx("div",{className:"theme-pills",children:Object.keys(y).map(r=>e.jsx("button",{className:`pill ${o===r?"active":""}`,onClick:()=>i(r),children:r},r))})]}),e.jsxs("div",{className:"sb-section",children:[e.jsx("div",{className:"sb-label",children:"Header · Company"}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Company Name"}),e.jsx("input",{value:a,onChange:r=>n(r.target.value),placeholder:"Your Company"})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Tagline"}),e.jsx("input",{value:s,onChange:r=>j(r.target.value),placeholder:"Division or Tagline"})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Email"}),e.jsx("input",{value:d,onChange:r=>N(r.target.value)})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Phone"}),e.jsx("input",{value:c,onChange:r=>k(r.target.value)})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Website"}),e.jsx("input",{value:p,onChange:r=>z(r.target.value)})]})]}),e.jsxs("div",{className:"sb-section",children:[e.jsx("div",{className:"sb-label",children:"Recipient"}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Name"}),e.jsx("input",{value:m,onChange:r=>M(r.target.value)})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Title / Address"}),e.jsx("textarea",{value:g,onChange:r=>C(r.target.value),rows:3})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Salutation"}),e.jsx("input",{value:h,onChange:r=>E(r.target.value)})]})]}),e.jsxs("div",{className:"sb-section",children:[e.jsx("div",{className:"sb-label",children:"Body"}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Letter Body"}),e.jsx("textarea",{value:f,onChange:r=>D(r.target.value),rows:6})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Closing"}),e.jsx("input",{value:b,onChange:r=>P(r.target.value)})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Signer Name"}),e.jsx("input",{value:u,onChange:r=>T(r.target.value)})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Signer Title"}),e.jsx("input",{value:v,onChange:r=>R(r.target.value)})]})]}),e.jsxs("div",{className:"sb-section",children:[e.jsx("div",{className:"sb-label",children:"Footer"}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Address"}),e.jsx("input",{value:x,onChange:r=>S(r.target.value)})]}),e.jsx("div",{className:"field",children:e.jsxs("label",{className:"check-row",children:[e.jsx("input",{type:"checkbox",checked:l,onChange:r=>A(r.target.checked)}),"Mark Confidential"]})})]})]}),e.jsxs("main",{className:"preview-area",id:"print-area",children:[e.jsxs("div",{className:"preview-toolbar",children:[e.jsx("span",{children:"Letter Preview — A4"}),e.jsx("button",{className:"btn-print",onClick:()=>window.print(),children:"Print / Export"})]}),e.jsxs("div",{className:"paper",children:[e.jsx(V,{company:a,tagline:s,email:d,phone:c,website:p}),e.jsxs("div",{className:"letter-body",children:[e.jsx("div",{className:"letter-date",children:L}),e.jsxs("div",{className:"recipient",children:[e.jsx("div",{className:"recipient-name",children:m}),e.jsx("div",{className:"recipient-info",style:{whiteSpace:"pre-line"},children:g})]}),l&&e.jsx("span",{className:"re-line",children:"⚑ Strictly Confidential"}),e.jsx("div",{className:"salutation",children:h}),e.jsx("div",{className:"body-text",children:f}),e.jsx("div",{className:"closing",children:b}),e.jsxs("div",{children:[e.jsx("div",{className:"sig-divider"}),e.jsx("div",{className:"sig-name",children:u}),e.jsx("div",{className:"sig-title",children:v})]})]}),e.jsx(Y,{company:a,address:x,confidential:l})]})]})]}),e.jsx(H,{})]})}export{q as default};

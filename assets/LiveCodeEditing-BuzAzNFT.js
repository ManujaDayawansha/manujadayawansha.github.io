import{r as t,j as r}from"./index-l8DKTuI4.js";import{H as p}from"./Header-BOpTwT99.js";import{F as x}from"./Footer-DUz5rqjX.js";import"./index.esm-Dqt17Ohr.js";import"./firebaseConfig-BqIL-e7F.js";const S=()=>{const[a,i]=t.useState(`<div class="container-template">
  <h1>Hello World!</h1>
  <p>Start editing to see changes instantly.</p>
  <button class="btn-template">Click Me</button>
</div>`),[s,n]=t.useState(`/* ==================== VARIABLES CSS ==================== */
:root {
  --header-height: 3rem;
  --font-semi: 600;
  --font-bold: 700;

  /* ===== COLORS (LIGHT MODE) ===== */
  --hue-color: 224;
  --first-color: hsl(224, 75%, 65%);
  --first-color-second: hsl(var(--hue-color), 69%, 61%);
  --first-color-alt: hsl(var(--hue-color), 57%, 53%);
  --first-color-lighter: hsl(var(--hue-color), 92%, 85%);

  --success-color: #00e676;
  --warning-color: #ff9100;
  --error-color: #ff1744;

  --title-color: #18181b;
  --text-color: #18181b;
  --text-color-light: #6b7280;

  --body-color: #f8fafc;
  --container-color: #fff;
  --container-glass: rgba(255, 255, 255, 0.7);

  --gradient-start: hsl(224, 75%, 65%);
  --gradient-end: #4f46e5;

  /* ===== FONTS ===== */
  --body-font: 'Poppins', sans-serif;
  --big-font-size: 4.5rem;
  --h2-font-size: 1.5rem;
  --normal-font-size: 0.938rem;
  --small-font-size: 0.813rem;

  /* ===== MARGINS ===== */
  --mb-1: 0.5rem;
  --mb-2: 1rem;
  --mb-3: 1.5rem;
  --mb-4: 2rem;
  --mb-5: 2.5rem;
  --mb-6: 3rem;

  /* ===== Z INDEX ===== */
  --z-back: -10;
  --z-normal: 1;
  --z-tooltip: 10;
  --z-fixed: 100;
  --z-modal: 1000;

  /* ===== SHADOWS ===== */
  --shadow-color: rgba(124, 58, 237, 0.08);
  --shadow-hover: rgba(124, 58, 237, 0.15);
  --border-color: #e5e7eb;
  --text-secondary: #6b7280;
  --transition-base: 0.2s ease;
  --transition-slow: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

@media (prefers-color-scheme: dark) {
  :root {
    /* ===== COLORS (DARK MODE) ===== */
    --hue-color: 180;
    --first-color: hsl(224, 75%, 65%);
    --first-color-second: hsl(var(--hue-color), 69%, 61%);
    --first-color-alt: hsl(var(--hue-color), 57%, 53%);
    --first-color-lighter: hsl(var(--hue-color), 92%, 85%);

    --success-color: #00e676;
    --warning-color: #ff9100;
    --error-color: #ff1744;

    --title-color: #d1d5db;
    --text-color: #d1d5db;
    --text-color-light: #9ca3af;

    --body-color: #09090b;
    --container-color: #18181b;
    --container-glass: rgba(24, 24, 27, 0.6);

    --gradient-start: hsl(224, 75%, 65%);
    --gradient-end: hsl(224, 75%, 45%);

    --shadow-color: rgba(124, 58, 237, 0.08);
    --shadow-hover: rgba(124, 58, 237, 0.15);
    --border-color: #23272f;
    --text-secondary: #9ca3af;
  }
}

body {
  margin: 0;
  padding: 20px;
  font-family: var(--body-font);
  background: var(--body-color);
  color: var(--text-color);
}

.container-template {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px var(--shadow-color);
}

h1 {
  color: var(--first-color);
  font-size: var(--h2-font-size);
  margin-bottom: var(--mb-2);
}

.btn-template {
  background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: var(--font-semi);
  transition: var(--transition-base);
}

.btn-template:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px var(--shadow-hover);
}`),[l,c]=t.useState(`// JavaScript Code
console.log('Editor loaded!');

const btn = document.querySelector('.btn-template');
if (btn) {
  btn.addEventListener('click', () => {
    alert('Button clicked!');
  });
}`),[e,d]=t.useState("html"),[m,b]=t.useState("");t.useEffect(()=>{const o=setTimeout(()=>{b(`
        <!DOCTYPE html>
        <html>
          <head>
            <style>${s}</style>
          </head>
          <body>
            ${a}
            <script>${l}<\/script>
          </body>
        </html>
      `)},250);return()=>clearTimeout(o)},[a,s,l]);const h=[{id:"html",label:"HTML",icon:"📄"},{id:"css",label:"CSS",icon:"🎨"},{id:"js",label:"JS",icon:"⚡"}],f=()=>{switch(e){case"html":return a;case"css":return s;case"js":return l;default:return""}},g=o=>{switch(e){case"html":i(o);break;case"css":n(o);break;case"js":c(o);break}};return r.jsxs("div",{style:{minHeight:"100vh",background:"var(--body-color)",color:"var(--text-color)",fontFamily:"var(--body-font)",padding:"1rem"},children:[r.jsx("style",{children:`
        :root {
          --header-height: 3rem;
          --font-semi: 600;
          --font-bold: 700;
          --hue-color: 224;
          --first-color: hsl(224, 75%, 65%);
          --first-color-second: hsl(var(--hue-color), 69%, 61%);
          --first-color-alt: hsl(var(--hue-color), 57%, 53%);
          --first-color-lighter: hsl(var(--hue-color), 92%, 85%);
          --success-color: #00e676;
          --warning-color: #ff9100;
          --error-color: #ff1744;
          --title-color: #18181b;
          --text-color: #18181b;
          --text-color-light: #6b7280;
          --body-color: #f8fafc;
          --container-color: #fff;
          --container-glass: rgba(255, 255, 255, 0.7);
          --gradient-start: hsl(224, 75%, 65%);
          --gradient-end: #4f46e5;
          --body-font: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          --big-font-size: 4.5rem;
          --h2-font-size: 1.5rem;
          --normal-font-size: 0.938rem;
          --small-font-size: 0.813rem;
          --mb-1: 0.5rem;
          --mb-2: 1rem;
          --mb-3: 1.5rem;
          --mb-4: 2rem;
          --mb-5: 2.5rem;
          --mb-6: 3rem;
          --z-back: -10;
          --z-normal: 1;
          --z-tooltip: 10;
          --z-fixed: 100;
          --z-modal: 1000;
          --shadow-color: rgba(124, 58, 237, 0.08);
          --shadow-hover: rgba(124, 58, 237, 0.15);
          --border-color: #e5e7eb;
          --text-secondary: #6b7280;
          --transition-base: 0.2s ease;
          --transition-slow: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @media (prefers-color-scheme: dark) {
          :root {
            --hue-color: 180;
            --first-color: hsl(224, 75%, 65%);
            --title-color: #d1d5db;
            --text-color: #d1d5db;
            --text-color-light: #9ca3af;
            --body-color: #09090b;
            --container-color: #18181b;
            --container-glass: rgba(24, 24, 27, 0.6);
            --gradient-end: hsl(224, 75%, 45%);
            --border-color: #23272f;
            --text-secondary: #9ca3af;
          }
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
      `}),r.jsx(p,{}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"1rem",minHeight:"calc(100vh - 180px)",marginTop:"5rem"},children:[r.jsxs("div",{style:{background:"var(--container-color)",borderRadius:"12px",overflow:"hidden",boxShadow:"0 2px 8px var(--shadow-color)",display:"flex",flexDirection:"column"},children:[r.jsx("div",{style:{display:"flex",background:"var(--body-color)",borderBottom:"1px solid var(--border-color)"},children:h.map(o=>r.jsxs("button",{onClick:()=>d(o.id),style:{flex:1,padding:"0.875rem 1rem",border:"none",background:e===o.id?"var(--container-color)":"transparent",color:e===o.id?"var(--first-color)":"var(--text-color-light)",cursor:"pointer",fontWeight:e===o.id?"var(--font-semi)":"normal",fontSize:"var(--normal-font-size)",transition:"var(--transition-base)",borderBottom:e===o.id?"2px solid var(--first-color)":"2px solid transparent",fontFamily:"var(--body-font)"},children:[r.jsx("span",{style:{marginRight:"0.5rem"},children:o.icon}),o.label]},o.id))}),r.jsx("textarea",{value:f(),onChange:o=>g(o.target.value),spellCheck:!1,style:{flex:1,padding:"1rem",border:"none",outline:"none",fontFamily:"'Fira Code', 'Courier New', monospace",fontSize:"0.875rem",lineHeight:"1.6",background:"var(--container-color)",color:"var(--text-color)",resize:"none",minHeight:"400px"},placeholder:`Write your ${e.toUpperCase()} code here...`})]}),r.jsxs("div",{style:{background:"var(--container-color)",borderRadius:"12px",overflow:"hidden",boxShadow:"0 2px 8px var(--shadow-color)",display:"flex",flexDirection:"column"},children:[r.jsxs("div",{style:{padding:"0.875rem 1rem",background:"var(--body-color)",borderBottom:"1px solid var(--border-color)",fontWeight:"var(--font-semi)",color:"var(--text-color)",display:"flex",alignItems:"center",gap:"0.5rem"},children:[r.jsx("span",{children:"👁️"}),"Preview"]}),r.jsx("iframe",{srcDoc:m,title:"preview",sandbox:"allow-scripts",style:{flex:1,border:"none",width:"100%",minHeight:"400px",background:"white"}})]})]}),r.jsx(x,{})]})};export{S as default};

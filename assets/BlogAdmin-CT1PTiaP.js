import{r as a,j as e}from"./index-WpE9vLyV.js";import{q as J,o as K,c as D,a as oe,b as ne,m as Q,w as ie,h as de,d as h,g as V,u as le,f as T,e as ce,i as pe}from"./index.esm-Dqt17Ohr.js";import{d as p,a as R}from"./firebaseConfig-BqIL-e7F.js";function ge(){const[f,z]=a.useState([]),[u,X]=a.useState(null),[E,U]=a.useState(!1),[Z,_]=a.useState(!0),[I,L]=a.useState(""),[O,$]=a.useState(!1),[i,v]=a.useState(null),[w,y]=a.useState(""),[B,j]=a.useState(""),[q,S]=a.useState(""),[F,k]=a.useState(""),[M,N]=a.useState(""),C=a.useRef(null),x=a.useRef(null);function ee(t){return(t||"").toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+|-+$/g,"")}const d=t=>{L(t),setTimeout(()=>L(""),3e3)},P=async()=>{$(!0),d("Generating sitemap...");try{const t=J(D(p,"posts"),ie("published","==",!0),K("publishedAt","desc")),o=(await de(t)).docs.map(g=>({id:g.id,...g.data()})),l=h(p,"meta","settings"),c=await V(l),s=c.exists()&&c.data().siteUrl||"https://www.manuja.run.place/",n=`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Homepage -->
  <url>
    <loc>${s}blog</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- Blog Posts -->
${o.map(g=>{const re=`${s}post?id=${g.id}`,se=g.updatedAt?.toDate?.()?.toISOString().split("T")[0]||new Date().toISOString().split("T")[0];return`  <url>
    <loc>${re}</loc>
    <lastmod>${se}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`}).join(`
`)}
</urlset>`,m=new Blob([n],{type:"application/xml"}),Y=URL.createObjectURL(m),b=document.createElement("a");b.href=Y,b.download="posts.xml",document.body.appendChild(b),b.click(),document.body.removeChild(b),URL.revokeObjectURL(Y),d(`Sitemap generated! ${o.length} posts included`)}catch(t){console.error("Error generating sitemap:",t),d("Error generating sitemap")}finally{$(!1)}},G=a.useCallback(()=>{C.current&&C.current();const t=J(D(p,"posts"),K("updatedAt","desc"));C.current=oe(t,r=>{z(r.docs.map(o=>({id:o.id,...o.data()})))})},[]);a.useEffect(()=>{const t=ne(R,async r=>{if(X(r),r){const o=h(p,"meta","settings"),l=await V(o),c=l.exists()&&l.data().admins?.includes(r.uid);U(c),c&&G()}else U(!1),z([]);_(!1)});return()=>t()},[G]);const te=t=>{v(t.id),y(t.title||""),j(t.slug||""),S(t.excerpt||""),k(t.content||""),N((t.tags||[]).join(", "))},H=()=>{v(null),y(""),j(""),S(""),k(""),N(""),x.current&&(x.current.value=""),d("Ready for new post")},W=async(t=!1)=>{if(!u||!E)return;const r=B.trim()||ee(w),o=M.split(",").map(n=>n.trim()).filter(Boolean);let l=null;const c=x.current?.files?.[0];c&&(l=await new Promise(n=>{const m=new FileReader;m.onload=()=>n(m.result),m.readAsDataURL(c)}));const s={title:w,slug:r,excerpt:q,content:F,tags:o,updatedAt:T(),author:u.uid};l&&(s.featuredImage=l),t&&(s.published=!0,s.publishedAt=T());try{if(i)await le(h(p,"posts",i),s),d(t?"Post Published!":"Draft Updated");else{s.createdAt=T(),s.published=t;const n=await ce(D(p,"posts"),s);v(n.id),d("New Post Created")}t&&setTimeout(()=>P(),1e3)}catch(n){console.error(n),d("Error saving post")}},ae=async()=>{if(!i||!window.confirm("Are you sure you want to delete this post?"))return;const t=f.find(r=>r.id===i);await pe(h(p,"posts",i)),H(),d("Post Deleted"),t?.published&&setTimeout(()=>P(),1e3)};if(Z)return e.jsx("div",{className:"loading",children:"Loading Admin..."});if(!u)return e.jsxs("div",{className:"login-screen",children:[e.jsx("h2",{children:"Access Denied"}),e.jsx("p",{children:"Please sign in to view this page."})]});if(!E)return e.jsxs("div",{className:"login-screen",children:[e.jsx("h2",{children:"Not Authorized"}),e.jsxs("p",{children:["You are logged in as ",u.email,", but you are not an admin."]}),e.jsx("button",{onClick:()=>Q(R),children:"Sign Out"})]});const A=f.filter(t=>t.published).length;return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"admin-container",children:[e.jsx("style",{children:`
        :root {
            --bg: #0f172a;
            --sidebar: #1e293b;
            --border: #334155;
            --text: #f1f5f9;
            --muted: #94a3b8;
            --accent: #3b82f6;
            --accent-hover: #2563eb;
            --danger: #ef4444;
            --success: #10b981;
        }
        body { margin: 0; font-family: 'Inter', system-ui, sans-serif; background: var(--bg); color: var(--text); }
        
        .admin-container { display: grid; grid-template-columns: 280px 1fr; height: 100vh; overflow: hidden; }
        
        /* SIDEBAR */
        .sidebar { background: var(--sidebar); border-right: 1px solid var(--border); display: flex; flex-direction: column; }
        .sidebar-header { padding: 20px; border-bottom: 1px solid var(--border); }
        .sidebar-header h1 { font-size: 1.2rem; margin: 0 0 10px 0; }
        .user-info { font-size: 0.8rem; color: var(--muted); margin-bottom: 10px; }
        
        .post-list { flex: 1; overflow-y: auto; padding: 10px;max-height: 320px; }
        .post-item {
            padding: 12px; margin-bottom: 8px; border-radius: 6px; cursor: pointer;
            transition: background 0.2s; border: 1px solid transparent;
        }
        .post-item:hover { background: rgba(255,255,255,0.05); }
        .post-item.active { background: rgba(59, 130, 246, 0.1); border-color: var(--accent); }
        .post-item h4 { margin: 0 0 4px 0; font-size: 0.95rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .status-badge { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.5px; padding: 2px 6px; border-radius: 4px; background: #334155; color: #cbd5e1; }
        .status-badge.published { background: #065f46; color: #6ee7b7; }

        .sitemap-section { padding: 10px; border-top: 1px solid var(--border); background: rgba(0,0,0,0.2); }
        .sitemap-info { font-size: 0.75rem; color: var(--muted); margin-bottom: 8px; text-align: center; }
        .btn-sitemap { width: 100%; padding: 10px; background: var(--success); color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 500; font-size: 0.85rem; transition: 0.2s; }
        .btn-sitemap:hover { background: #059669; }
        .btn-sitemap:disabled { background: var(--border); cursor: not-allowed; opacity: 0.5; }

        /* MAIN EDITOR */
        .editor { display: flex; flex-direction: column; height: 100vh; position: relative; }
        .top-bar {
            padding: 15px 30px; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; background: rgba(15, 23, 42, 0.95);
        }
        .editor-scroll { flex: 1; overflow-y: auto; padding: 30px; max-width: 900px; margin: 0 auto; width: 100%; box-sizing: border-box; }
        
        /* FORM ELEMENTS */
        input, textarea {
            width: 100%; background: transparent; border: 1px solid var(--border); color: var(--text);
            padding: 10px; border-radius: 6px; margin-bottom: 15px; font-family: inherit; box-sizing: border-box;
        }
        input:focus, textarea:focus { outline: none; border-color: var(--accent); }
        label { display: block; font-size: 0.8rem; color: var(--muted); margin-bottom: 5px; text-transform: uppercase; letter-spacing: 1px; }
        
        .input-title { font-size: 1.8rem; font-weight: bold; border: none; padding: 10px 0; border-bottom: 1px solid var(--border); border-radius: 0; margin-bottom: 20px; }
        .input-title:focus { border-bottom-color: var(--accent); }

        /* BUTTONS */
        .btn { padding: 8px 16px; border-radius: 6px; border: none; cursor: pointer; font-weight: 500; font-size: 0.9rem; transition: 0.2s; }
        .btn-primary { background: var(--accent); color: white; }
        .btn-primary:hover { background: var(--accent-hover); }
        .btn-secondary { background: var(--border); color: white; }
        .btn-secondary:hover { background: #475569; }
        .btn-danger { background: rgba(239, 68, 68, 0.1); color: var(--danger); }
        .btn-danger:hover { background: var(--danger); color: white; }
        .btn-new { width: 100%; background: var(--text); color: var(--bg); font-weight: bold; margin-bottom: 10px;}

        .notification { position: absolute; bottom: 20px; right: 20px; background: var(--accent); padding: 10px 20px; border-radius: 30px; font-size: 0.9rem; box-shadow: 0 4px 12px rgba(0,0,0,0.3); animation: fadein 0.3s; z-index: 1000; }
        @keyframes fadein { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

        @media (max-width: 768px) {
          .admin-container { grid-template-columns: 1fr; }
          .sidebar { display: none; }
        }
      `}),e.jsxs("aside",{className:"sidebar",children:[e.jsxs("div",{className:"sidebar-header",style:{display:"flex",flexDirection:"column",gap:"10px"},children:[e.jsx("h1",{children:"CMS Admin"}),e.jsx("div",{className:"user-info",children:u.email}),e.jsxs("button",{className:"btn btn-new","aria-label":"Create new post",style:{width:"100%",fontWeight:"bold",fontSize:"1rem",padding:"12px 0",marginBottom:6,display:"flex",alignItems:"center",justifyContent:"center",gap:8,background:"linear-gradient(90deg, #3b82f6 0%, #2563eb 100%)",color:"#fff",boxShadow:"0 2px 8px rgba(59,130,246,0.08)",border:"none",borderRadius:8,transition:"background 0.2s"},onClick:H,children:[e.jsx("span",{style:{fontSize:"1.3em",fontWeight:"bold",marginRight:4},children:"＋"})," New Post"]}),e.jsx("button",{className:"btn btn-secondary","aria-label":"Sign out",style:{width:"100%",fontSize:"0.95rem",padding:"10px 0",background:"var(--border)",color:"#fff",border:"none",borderRadius:8,marginBottom:0,marginTop:2,transition:"background 0.2s"},onClick:()=>Q(R),children:"Sign Out"})]}),e.jsx("div",{className:"post-list",children:f.map(t=>e.jsxs("div",{className:`post-item ${i===t.id?"active":""}`,onClick:()=>te(t),children:[e.jsx("h4",{children:t.title||"(Untitled)"}),e.jsx("span",{className:`status-badge ${t.published?"published":""}`,children:t.published?"Published":"Draft"})]},t.id))}),e.jsxs("div",{className:"sitemap-section",children:[e.jsxs("div",{className:"sitemap-info",children:[A," published ",A===1?"post":"posts"]}),e.jsx("button",{className:"btn-sitemap",onClick:P,disabled:O||A===0,children:O?"Generating...":"📄 Download Sitemap"})]})]}),e.jsxs("main",{className:"editor",children:[e.jsxs("div",{className:"top-bar",children:[e.jsx("div",{style:{color:"var(--muted)",fontSize:"0.9rem"},children:i?"Editing Existing Post":"Creating New Post"}),e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[i&&e.jsx("button",{className:"btn btn-danger",onClick:ae,children:"Delete"}),e.jsx("button",{className:"btn btn-secondary",onClick:()=>W(!1),children:"Save Draft"}),e.jsx("button",{className:"btn btn-primary",onClick:()=>W(!0),children:"Publish"})]})]}),e.jsxs("div",{className:"editor-scroll",children:[e.jsx("input",{className:"input-title",placeholder:"Post Title...",value:w,onChange:t=>y(t.target.value)}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"},children:[e.jsxs("div",{children:[e.jsx("label",{children:"Slug (URL)"}),e.jsx("input",{placeholder:"auto-generated-from-title",value:B,onChange:t=>j(t.target.value)})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Tags (Comma separated)"}),e.jsx("input",{placeholder:"tech, life, tutorial",value:M,onChange:t=>N(t.target.value)})]})]}),e.jsx("label",{children:"Cover Image"}),e.jsx("input",{type:"file",ref:x,accept:"image/*"}),e.jsx("label",{children:"Excerpt (Short summary)"}),e.jsx("textarea",{rows:"3",placeholder:"A brief description for SEO...",value:q,onChange:t=>S(t.target.value)}),e.jsx("label",{children:"Content (HTML/Markdown)"}),e.jsx("textarea",{rows:"15",style:{fontFamily:"monospace",lineHeight:"1.5"},placeholder:"Write your story here...",value:F,onChange:t=>k(t.target.value)})]}),I&&e.jsx("div",{className:"notification",children:I})]})]})})}export{ge as default};

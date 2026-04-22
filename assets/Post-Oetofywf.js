import{a as M,u as $,r as s,j as e,L as l}from"./index-k_XuO55-.js";import{b as O,g as G,d as J,e as K,c as b,f as Q,q as C,w as I,o as L,h as R}from"./index.esm-CowUbx0g.js";import{d as h,a as V}from"./firebaseConfig-2nMVUM4p.js";import{F as X}from"./Footer-BsM-zemy.js";function te(){const S=M(),[E]=$(),r=E.get("id"),[a,A]=s.useState(null),[f,v]=s.useState([]),[g,y]=s.useState(""),[c,T]=s.useState(null),[B,p]=s.useState(!0),[D,x]=s.useState(null);s.useEffect(()=>{document.title="Loading...| Manuja Dayawansha",document.body.style.background="var(--body-color)";const o=async()=>{if(!r){x("Invalid post ID"),p(!1);return}try{const t=await G(J(h,"posts",r));if(!t.exists()){x("Post not found"),p(!1);return}const m=t.data();A({id:t.id,...m,publishedAt:m.publishedAt?.seconds?new Date(m.publishedAt.seconds*1e3):null}),document.title=`${m.title} | Manuja Dayawansha`,p(!1),i()}catch(t){console.error("Error loading post:",t),x("Failed to load post"),p(!1)}},i=async()=>{if(r)try{const t=C(b(h,"comments"),I("postId","==",r),L("createdAt","desc")),H=(await R(t)).docs.map(_=>({id:_.id,..._.data()}));v(H)}catch(t){console.error("Error loading comments:",t)}},u=O(V,t=>{T(t)}),n=document.getElementById("nav-toggle"),d=document.getElementById("nav-menu"),j=()=>{d&&d.classList.toggle("show")};n&&d&&n.addEventListener("click",j);const k=document.querySelectorAll(".nav__link"),w=()=>{d&&d.classList.remove("show")};k.forEach(t=>t.addEventListener("click",w));const N=document.getElementById("loader"),q=setTimeout(()=>{N&&(N.style.display="none")},500);return o(),()=>{clearTimeout(q),u(),n&&n.removeEventListener("click",j),k.forEach(t=>t.removeEventListener("click",w))}},[r]);const P=async()=>{if(!g.trim()){alert("Please write something!");return}if(!c){alert("Please log in to comment");return}try{await K(b(h,"comments"),{postId:r,text:g,username:c.displayName||"User",userimage:c.photoURL||"",createdAt:Q()}),y("");const o=C(b(h,"comments"),I("postId","==",r),L("createdAt","desc")),u=(await R(o)).docs.map(n=>({id:n.id,...n.data()}));v(u)}catch(o){console.error("Error posting comment:",o),alert("Failed to post comment: "+o.message)}},F=()=>{window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,"_blank")},W=()=>{window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`,"_blank")},U=()=>{window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(window.location.href)}`,"_blank")},z=()=>{navigator.clipboard.writeText(window.location.href).then(()=>alert("Link copied!")).catch(()=>alert("Failed to copy link"))};return B?e.jsx("div",{className:"loader",id:"loader",children:e.jsx("div",{className:"main_load"})}):D?(S(-1),null):a?e.jsxs(e.Fragment,{children:[e.jsx("header",{className:"l-header",children:e.jsxs("nav",{className:"nav bd-grid",children:[e.jsx("div",{children:e.jsx(l,{to:"/#home",className:"nav__logo",children:"Manuja Dayawansha"})}),e.jsx("div",{className:"nav__menu",id:"nav-menu",children:e.jsxs("ul",{className:"nav__list",children:[e.jsx("li",{className:"nav__item",children:e.jsx(l,{to:"/#home",className:"nav__link",children:"Home"})}),e.jsx("li",{className:"nav__item",children:e.jsx(l,{to:"/Blog",className:"nav__link active-link",children:"Blog"})}),e.jsx("li",{className:"nav__item",children:e.jsx(l,{to:"/#contact",className:"nav__link",children:"Contact"})}),e.jsx("li",{className:"nav__item",id:"loginpenal",children:c?e.jsx("img",{src:c.photoURL||localStorage.getItem("UserImage")||"",width:"30px",height:"30px",style:{borderRadius:"50%",objectFit:"cover",display:"block"},alt:"User profile"}):e.jsx(l,{to:"/Login",id:"loginbtn",className:"nav__link",children:"Login"})})]})}),e.jsx("div",{className:"nav__toggle",id:"nav-toggle",children:e.jsx("i",{className:"bx bx-menu"})})]})}),e.jsxs("main",{style:{maxWidth:"900px",margin:"6rem auto 2rem",background:"var(--container-color)",borderRadius:"1.2rem",boxShadow:"0 5px 25px rgba(0, 0, 0, 0.1)",padding:"2.5rem",overflow:"hidden",color:"var(--text-color)"},children:[e.jsx(l,{to:"/Blog",className:"back-link",children:"← Back to Blog"}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"post-header",children:[e.jsx("h1",{id:"title",style:{fontSize:"2rem",color:"var(--second-color)",marginBottom:"0.5rem"},children:a.title}),e.jsx("div",{id:"meta",className:"post-meta",style:{color:"gray",fontSize:"0.9rem"},children:a.publishedAt?a.publishedAt.toLocaleString():"Draft"}),e.jsx("div",{id:"tags",style:{marginTop:"1rem"},children:a.tags&&a.tags.map((o,i)=>e.jsx("span",{style:{display:"inline-block",backgroundColor:"#007bff",color:"white",fontSize:"12px",fontWeight:"600",borderRadius:"20px",padding:"5px 10px",marginRight:"5px",marginBottom:"5px"},children:o},i))})]}),a.featuredImage&&e.jsx("img",{id:"featured",src:a.featuredImage,alt:a.title,className:"post-featured",style:{width:"100%",borderRadius:"10px",margin:"1.5rem 0",boxShadow:"0 3px 12px rgba(0, 0, 0, 0.08)"}}),e.jsx("article",{id:"content",style:{fontSize:"1.05rem",lineHeight:"1.8",color:"var(--second-color)"},dangerouslySetInnerHTML:{__html:a.content}}),e.jsxs("div",{className:"share-section",style:{marginTop:"2rem",display:"flex",justifyContent:"center",gap:"1rem",flexWrap:"wrap"},children:[e.jsxs("button",{id:"share-facebook",onClick:F,style:{background:"var(--container-color)",border:"none",padding:"0.6rem 1rem",borderRadius:"8px",cursor:"pointer",display:"flex",alignItems:"center",gap:"6px",transition:"all 0.2s ease",fontWeight:"500",color:"var(--second-color)"},children:[e.jsx("i",{className:"bx bxl-facebook"})," Facebook"]}),e.jsxs("button",{id:"share-twitter",onClick:W,style:{background:"var(--container-color)",border:"none",padding:"0.6rem 1rem",borderRadius:"8px",cursor:"pointer",display:"flex",alignItems:"center",gap:"6px",transition:"all 0.2s ease",fontWeight:"500",color:"var(--second-color)"},children:[e.jsx("i",{className:"bx bxl-twitter"})," Twitter"]}),e.jsxs("button",{id:"share-whatsapp",onClick:U,style:{background:"var(--container-color)",border:"none",padding:"0.6rem 1rem",borderRadius:"8px",cursor:"pointer",display:"flex",alignItems:"center",gap:"6px",transition:"all 0.2s ease",fontWeight:"500",color:"var(--second-color)"},children:[e.jsx("i",{className:"bx bxl-whatsapp"})," WhatsApp"]}),e.jsxs("button",{id:"share-copy",onClick:z,style:{background:"var(--container-color)",border:"none",padding:"0.6rem 1rem",borderRadius:"8px",cursor:"pointer",display:"flex",alignItems:"center",gap:"6px",transition:"all 0.2s ease",fontWeight:"500",color:"var(--second-color)"},children:[e.jsx("i",{className:"bx bx-link"})," Copy Link"]})]}),e.jsxs("div",{className:"comments-section",style:{marginTop:"3rem"},children:[e.jsx("h2",{style:{marginBottom:"1rem",color:"var(--second-color)"},children:"Comments"}),e.jsx("div",{id:"comments-container",children:f.length===0?e.jsx("p",{style:{textAlign:"center",color:"var(--text-color)",padding:"2rem 0"},children:"No comments yet. Be the first to comment!"}):f.map(o=>e.jsxs("div",{className:"comment",style:{background:"var(--container-color)",padding:"1rem",borderRadius:"10px",marginBottom:"1rem",display:"flex",gap:"1rem",alignItems:"flex-start"},children:[o.userimage&&e.jsx("img",{src:o.userimage,alt:o.username,style:{width:"40px",height:"40px",borderRadius:"50%",objectFit:"cover"},onError:i=>{i.target.style.display="none"}}),e.jsxs("div",{style:{flex:1},children:[e.jsx("strong",{style:{color:"var(--second-color)"},children:o.username||"Anonymous"}),e.jsx("p",{style:{margin:"0.5rem 0 0 0",color:"var(--text-color)",lineHeight:"1.5"},children:o.text})]})]},o.id))}),e.jsxs("div",{className:"comment-box",style:{display:"flex",flexDirection:"column",gap:"1rem",marginTop:"2rem"},children:[e.jsx("textarea",{id:"comment-input",value:g,onChange:o=>y(o.target.value),rows:"3",placeholder:"Write a comment...",style:{background:"var(--container-color)",resize:"none",width:"100%",padding:"0.8rem",borderRadius:"10px",border:"1px solid #ccc",fontFamily:'"Poppins", sans-serif',color:"var(--text-color)"}}),e.jsx("button",{id:"post-comment",onClick:P,style:{alignSelf:"flex-end",backgroundColor:"#007bff",color:"#fff",padding:"0.6rem 1.4rem",border:"none",borderRadius:"8px",fontWeight:"600",cursor:"pointer",transition:"background-color 0.2s ease"},children:"Post Comment"})]})]})]}),e.jsx(X,{}),e.jsx("style",{children:`
        body {
          font-family: "Poppins", sans-serif;
          background: var(--container-color);
          color: #333;
        }

        .back-link {
          text-decoration: none;
          background-color: #269af2;
          color: #ffffff;
          padding: 10px 15px;
          font-size: 16px;
          font-weight: 600;
          border-radius: 12px;
          display: inline-block;
          transition: background-color 0.2s ease;
        }

        .back-link:hover {
          background-color: #1e7bbf;
        }

        .share-section button:hover {
          background: #007bff !important;
          color: white !important;
          transform: scale(1.05);
        }

        .comment-box button:hover {
          background-color: #005dc1 !important;
        }

        article img {
          max-width: 100%;
          border-radius: 0.5rem;
          margin: 1rem 0;
        }

        @media screen and (max-width: 768px) {
          main {
            margin: 5rem 1rem 2rem !important;
            padding: 1.5rem !important;
          }

          .share-section {
            flex-direction: column;
          }

          .share-section button {
            width: 100%;
            justify-content: center;
          }
        }
      `})]}):null}export{te as default};

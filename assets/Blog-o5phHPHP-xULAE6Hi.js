import{R as s,A as q,j as e,C as L}from"./index-CEf5fZ-s.js";import{T as H,u as X,h as G,l as U,a as W,y as J}from"./index.esm-Dqt17Ohr-DAmIDVFL.js";import{d as K,i as O}from"./firebaseConfig-BqIL-e7F-D0kZRQGD.js";import{s as Q}from"./Footer-C4lV-gcO-D8jxKnl_.js";function te(){const[B,A]=s.useState([]),[o,I]=s.useState([]),[v,w]=s.useState(!0),[T,C]=s.useState(!1),[j,c]=s.useState(0),[y,n]=s.useState(!0),S=q(),$=s.useRef(null),g=s.useRef(null);s.useEffect(()=>{document.title="Blog | Manuja Dayawansha",window.scrollTo(0,0);const a=H(K,t=>{const i=document.getElementById("loginbtn"),d=document.getElementById("loginpenal");t&&i&&d&&(i.style.display="none",d.innerHTML=`
          <img src="${t.photoURL}" 
               width="30px" height="30px" 
               style="border-radius:50%;">
        `)}),r=()=>{const t=document.getElementById("nav-menu");t&&t.classList.toggle("show")},l=document.getElementById("nav-toggle");l&&l.addEventListener("click",r);const p=()=>{const t=document.getElementById("nav-menu");t&&t.classList.remove("show")},x=document.querySelectorAll(".nav__link");x.forEach(t=>t.addEventListener("click",p));const P=X(W(O,"posts"),U("published","==",!0),G("publishedAt","desc")),F=J(P,t=>{const i=[],d=[];let k=!1;const Y=new Date;t.forEach(_=>{const u=_.data(),f=u.publishedAt?.seconds?new Date(u.publishedAt.seconds*1e3):null,E=f?Math.abs(Y-f)/(1e3*60*60):9999,z={id:_.id,...u,publishedAt:f,isNew:E<=24};d.push(z),E<=24&&(i.push(z),k=!0)}),A(i),I(d),C(k),w(!1);const b=document.getElementById("loader");b&&(b.classList.add("fade-out"),setTimeout(()=>b.style.display="none",600))},t=>{console.error("Error fetching posts:",t),w(!1);const i=document.getElementById("loader");i&&(i.classList.add("fade-out"),setTimeout(()=>i.style.display="none",600))});return()=>{a(),F(),l&&l.removeEventListener("click",r),x.forEach(t=>t.removeEventListener("click",p))}},[]),s.useEffect(()=>(y&&o.length>0&&(g.current=setInterval(()=>{c(a=>(a+1)%Math.min(o.length,5))},4e3)),()=>{g.current&&clearInterval(g.current)}),[y,o.length]);const M=a=>{c(a),n(!1),setTimeout(()=>n(!0),5e3)},D=()=>{c(a=>(a+1)%Math.min(o.length,5)),n(!1),setTimeout(()=>n(!0),5e3)},R=()=>{c(a=>(a-1+Math.min(o.length,5))%Math.min(o.length,5)),n(!1),setTimeout(()=>n(!0),5e3)},h=a=>{S(`/Post?id=${a}`)},N=(a,r=!1)=>{const l=a.publishedAt?a.publishedAt.toLocaleDateString():"No date";return e.jsxs("div",{className:r?"blog-card-new":"blog-card",id:a.slug,children:[e.jsxs("div",{className:"image-wrapper",onClick:()=>h(a.id),style:{cursor:"pointer"},children:[a.isNew&&e.jsx("h5",{className:"new",children:"New"}),e.jsx("img",{src:a.featuredImage||"default.jpg",alt:a.title,className:"blog-image",loading:"lazy"})]}),a.tags&&Array.isArray(a.tags)&&a.tags.length>0&&e.jsx("div",{className:"tags",style:{margin:"4px",display:"flex",flexWrap:"wrap"},children:a.tags.map((p,x)=>e.jsx("span",{style:{background:"var(--container-color)",color:"var(--title-color)",padding:"2px 8px",borderRadius:"18px",marginRight:"4px",marginBottom:"4px",fontSize:"0.85em"},children:p},x))}),e.jsxs("div",{className:"blog-content",onClick:()=>h(a.id),style:{cursor:"pointer"},children:[e.jsx("h3",{className:"blog-title",children:a.title}),e.jsx("p",{className:"blog-meta",children:l})]})]},a.id)},m=o.slice(0,5);return e.jsxs(e.Fragment,{children:[e.jsx("header",{className:"l-header",children:e.jsxs("nav",{className:"nav bd-grid",children:[e.jsx("div",{children:e.jsx(L,{to:"/#home",className:"nav__logo",children:"Manuja Dayawansha"})}),e.jsx("div",{className:"nav__menu",id:"nav-menu",children:e.jsxs("ul",{className:"nav__list",children:[e.jsx("li",{className:"nav__item",children:e.jsx("a",{href:"/#home",className:"nav__link",children:"Home"})}),e.jsx("li",{className:"nav__item",children:e.jsx("a",{href:"/#Blog",className:"nav__link active-link",children:"Blog"})}),e.jsx("li",{className:"nav__item",children:e.jsx("a",{href:"/#contact",className:"nav__link",children:"Contact"})}),e.jsx("li",{className:"nav__item",id:"loginpenal",children:e.jsx(L,{to:"/Login",id:"loginbtn",className:"nav__link",children:"Login"})})]})}),e.jsx("div",{className:"nav__toggle",id:"nav-toggle",children:e.jsx("i",{className:"bx bx-menu"})})]})}),m.length>0&&e.jsx("section",{id:"Top",style:{paddingTop:"100px",backgroundColor:"var(--body-color)"},children:e.jsxs("div",{className:"slider-container",ref:$,children:[e.jsx("div",{className:"slider-wrapper",style:{transform:`translateX(-${j*100}%)`},children:m.map(a=>e.jsxs("div",{className:"slide",onClick:()=>h(a.id),style:{backgroundImage:`linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${a.featuredImage||"default.jpg"})`},children:[a.isNew&&e.jsx("h5",{className:"new",children:"New"}),e.jsxs("div",{className:"slider-overlay",children:[e.jsx("h2",{children:a.title}),e.jsx("p",{children:a.publishedAt?.toLocaleDateString()||"No date"})]})]},a.id))}),m.length>1&&e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"slider-btn prev",onClick:R,"aria-label":"Previous slide",children:e.jsx("i",{className:"bx bx-chevron-left"})}),e.jsx("button",{className:"slider-btn next",onClick:D,"aria-label":"Next slide",children:e.jsx("i",{className:"bx bx-chevron-right"})}),e.jsx("div",{className:"slider-dots",children:m.map((a,r)=>e.jsx("button",{className:`dot ${j===r?"active":""}`,onClick:()=>M(r),"aria-label":`Go to slide ${r+1}`},r))})]})]})}),T&&e.jsxs("section",{className:"blog-section",id:"latest-blog",children:[e.jsx("h2",{className:"section-title",children:"Latest Blog Posts"}),e.jsx("div",{className:"blog-container",id:"blog-container",children:v?e.jsx("div",{className:"main_load"}):B.map(a=>N(a,!0))})]}),e.jsxs("section",{className:"blog-section",children:[e.jsx("h2",{className:"section-title",children:"Blog Posts"}),e.jsx("div",{className:"blog-container",id:"blogs-container-all",children:v?e.jsx("div",{className:"main_load"}):o.map(a=>N(a,!1))})]}),e.jsx(Q,{}),e.jsx("style",{children:`
        body {
          background-color: var(--body-color);
        }

        #Top {
          background-color: var(--body-color);
          padding-bottom: 40px;
        }

        .slider-container {
          position: relative;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          overflow: hidden;
          border-radius: 1.5rem;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        }

        .slider-wrapper {
          display: flex;
          transition: transform 0.5s ease-in-out;
        }

        .slide {
          min-width: 100%;
          height: 500px;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          position: relative;
          cursor: pointer;
        }

        @media screen and (max-width: 768px) {
          .slide {
            height: 400px;
          }
        }

        @media screen and (max-width: 480px) {
          .slide {
            height: 320px;
          }
        }

        .slider-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.2) 70%, transparent 100%);
          padding: 40px 30px 30px 30px;
          color: white;
        }

        .slider-overlay h2 {
          color: white;
          font-size: 1.8rem;
          font-weight: 700;
          margin: 0 0 12px 0;
          text-shadow: 0 2px 10px rgba(0,0,0,0.5);
          line-height: 1.3;
        }

        .slider-overlay p {
          color: rgba(255,255,255,0.95);
          font-size: 0.95rem;
          margin-left:50%;
          text-shadow: 0 1px 5px rgba(0,0,0,0.5);
        }

        @media screen and (max-width: 768px) {
          .slider-overlay {
            padding: 25px 20px 20px 20px;
          }
          
          .slider-overlay h2 {
            font-size: 1.3rem;
          }
          
          .slider-overlay p {
            font-size: 0.85rem;
          }
        }

        .slider-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.95);
          border: none;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          color: #333;
          transition: all 0.3s ease;
          z-index: 10;
        }

        .slider-btn:hover {
          background: white;
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .slider-btn.prev {
          left: 20px;
        }

        .slider-btn.next {
          right: 20px;
        }

        @media screen and (max-width: 768px) {
          .slider-btn {
            width: 40px;
            height: 40px;
            font-size: 20px;
          }
          
          .slider-btn.prev {
            left: 10px;
          }

          .slider-btn.next {
            right: 10px;
          }
        }

        .slider-dots {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
          z-index: 10;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: 2px solid transparent;
          background: rgba(255, 255, 255, 0.4);
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }

        .dot:hover {
          background: rgba(255, 255, 255, 0.7);
        }

        .dot.active {
          background: white;
          transform: scale(1.3);
          border-color: rgba(255, 255, 255, 0.3);
        }

        .blog-section {
          background-color: var(--body-color);
          padding: 3rem 1rem;
        }

        .blog-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          justify-items: center;
        }

        .blog-card {
          background: var(--container-color);
          border-radius: 1rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          max-width: 345px;
          max-height: 410px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .blog-card-new {
          background: var(--container-color);
          border-radius: 1rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          max-width: 345px;
          max-height: 410px;
          padding: 8px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .blog-card:hover,
        .blog-card-new:hover {
          transform: translateY(-6px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
        }

        .image-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
          border-radius: 12px;
        }

        .blog-image {
          width: 100%;
          height: 200px;
          max-height: 232px;
          display: block;
          padding: 8px;
          border-radius: 18px;
          object-fit: cover;
        }

        .blog-content {
          padding: 0.7rem 1rem;
        }

        .new {
          position: absolute;
          top: 14px;
          left: 15px;
          background: linear-gradient(135deg, #ff6b6b, #ff4757);
          color: white;
          padding: 5px 10px;
          font-size: 11px;
          font-weight: bold;
          border-radius: 6px;
          z-index: 5;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          box-shadow: 0 2px 8px rgba(255, 71, 87, 0.4);
        }

        .blog-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-color);
          margin-bottom: 0.5rem;
        }

        .blog-meta {
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-bottom: 0.75rem;
        }

        .blog-desc {
          font-size: 0.95rem;
          color: var(--text-color);
          margin-bottom: 1rem;
          line-height: 1.5;
        }

        .fade-out {
          opacity: 0;
          transition: opacity 0.6s ease;
        }
      `})]})}export{te as default};

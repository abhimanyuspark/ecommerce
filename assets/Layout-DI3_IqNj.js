import{r as l,j as e,S as i,a as n,N as u,u as x,b as o,L as a,c as h,O as d}from"./index-DTZVXOfx.js";import{F as m,a as p,b as f}from"./index-zcaBqDKW.js";import{A as v}from"./a11y-B5xPQeFM.js";const j=({categories:s})=>{const t=l.useRef();return e.jsxs(i,{loop:!0,spaceBetween:30,slidesPerView:5,slidesPerGroup:5,modules:[v],onSwiper:r=>{t.current=r},className:"relative w-full sm:px-[4%] p-7",children:[e.jsx("button",{onClick:()=>{t.current.slidePrev()},className:"absolute z-10 top-0 left-0 w-8 h-full flex items-center justify-center hover:text-[var(--blue)] bg-white cursor-pointer",children:e.jsx(m,{})}),s==null?void 0:s.map((r,c)=>e.jsx(n,{className:"flex items-center text-sm cursor-pointer hover:text-[var(--blue)]",children:e.jsx(u,{to:`/latest-products/${r.slug}`,className:"active:text-[var(--blue)]",children:r.name})},c)),e.jsx("button",{onClick:()=>{t.current.slideNext()},className:"absolute z-10 top-0 right-0 w-8 h-full flex items-center justify-center hover:text-[var(--blue)] bg-white cursor-pointer",children:e.jsx(p,{})})]})};function b({refs:s}){const{pathname:t}=x();return l.useEffect(()=>{var r;(r=s==null?void 0:s.current)==null||r.scrollTo(0,0)},[t]),null}const g="/ecommerce/assets/Logo-DqCLp_DS.png",w=()=>{const{carts:s}=o(t=>t.products);return e.jsxs("nav",{className:"w-full bg-[var(--blue)] flex items-center justify-between px-6",children:[e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsx("img",{src:g,alt:"Logo",className:"w-12 h-12 rounded-full border-2 border-white"}),e.jsxs("div",{className:"flex flex-col items-center group/show",children:[e.jsx(a,{to:"/",className:"text-lg font-bold text-white",children:"Products"}),e.jsx("div",{style:{transition:"0.2s linear"},className:"group-hover/show:w-full w-0 h-[2px] bg-white"})]})]}),e.jsx("div",{className:"flex items-center gap-4 text-white",children:e.jsxs(a,{to:"/carts",className:"relative rounded-full p-[0.6rem] active:bg-slate-100 active:outline outline-2 outline-slate-100 outline-offset-2 hover:text-[var(--blue)] hover:bg-white",children:[e.jsx(f,{size:22}),s.length>0&&e.jsx("span",{className:"absolute top-0 right-0 w-5 aspect-square rounded-full bg-[var(--blue)] border border-white text-white text-xs flex items-center justify-center",children:s.length})]})})]})},S=()=>{const{category:s}=o(r=>r.category),t=l.useRef();return e.jsxs("div",{className:"grid grid-rows-[70px_60px_1fr] h-[100vh]",children:[e.jsx(b,{refs:t}),e.jsx(w,{}),e.jsx(j,{categories:s}),e.jsx("div",{ref:t,className:"h-[calc(100vh-130px)] overflow-auto scroll-smooth bg-slate-200",children:e.jsx(l.Suspense,{fallback:e.jsx(h,{}),children:e.jsx(d,{})})})]})};export{S as default};
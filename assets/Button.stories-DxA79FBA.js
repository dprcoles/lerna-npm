import{c as L,a as W}from"./index-BhW6zB9z.js";import{r as c}from"./index-BBkUAzwr.js";var a=(r=>(r.Primary="primary",r.Secondary="secondary",r.Danger="danger",r.Outline="outline",r.Ghost="ghost",r.Link="link",r))(a||{}),k=(r=>(r.Default="default",r.Small="small",r.Large="large",r.Icon="icon",r))(k||{});const _=W("dc-c-button",{variants:{variant:{primary:"dc-c-button--primary",secondary:"dc-c-button--secondary",danger:"dc-c-button--danger",outline:"dc-c-button--outline",ghost:"dc-c-button--ghost",link:"dc-c-button--link"},size:{default:"",small:"dc-c-button--small",large:"dc-c-button--large",icon:"dc-c-button--icon"}},defaultVariants:{variant:"primary",size:"default"}}),s=c.forwardRef(({as:r="button",className:C,variant:O,isFullWidth:P,size:F,...w},E)=>{const x=r;return c.createElement(x,{className:L(_({variant:O,size:F,className:C}),P&&"dc-c-button--full"),ref:E,...w})});s.displayName="Button";s.__docgenInfo={description:"",methods:[],displayName:"Button",props:{as:{defaultValue:{value:'"button"',computed:!1},required:!1}}};const j={title:"Components/Button",component:s,argTypes:{variant:{options:Object.values(a),control:{type:"radio"}},size:{options:Object.values(k),control:{type:"radio"}},as:{control:{type:"text"}}}},e={args:{children:"Button",variant:a.Primary}},t={args:{onClick:()=>alert("You clicked me!"),children:"Click to trigger",variant:a.Primary}},n={args:{href:"#",as:"a",children:"Custom element",variant:a.Link}},o={args:{children:"Full width",isFullWidth:!0,variant:a.Primary}};var i,l,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: "Button",
    variant: ButtonVariant.Primary
  }
}`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,m,p;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    onClick: () => alert("You clicked me!"),
    children: "Click to trigger",
    variant: ButtonVariant.Primary
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,v,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    href: "#",
    as: "a",
    children: "Custom element",
    variant: ButtonVariant.Link
  }
}`,...(h=(v=n.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var y,f,b;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: "Full width",
    isFullWidth: true,
    variant: ButtonVariant.Primary
  }
}`,...(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const B=["Overview","OnClick","CustomElement","FullWidth"];export{n as CustomElement,o as FullWidth,t as OnClick,e as Overview,B as __namedExportsOrder,j as default};

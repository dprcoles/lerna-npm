import{c as v,a as y}from"./index-BhW6zB9z.js";import{r as f}from"./index-BBkUAzwr.js";var t=(e=>(e.Primary="primary",e.Secondary="secondary",e.Danger="danger",e.Outline="outline",e))(t||{});const h=y("dc-c-badge",{variants:{variant:{primary:"dc-c-badge--primary",secondary:"dc-c-badge--secondary",danger:"dc-c-badge--danger",outline:"dc-c-badge--outline"}},defaultVariants:{variant:"primary"}}),m=({as:e="div",className:p,variant:l,...u})=>{const g=e;return f.createElement(g,{className:v(h({variant:l}),p),...u})};m.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{as:{required:!1,tsType:{name:"E"},description:"",defaultValue:{value:'"div"',computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const C={title:"Components/Badge",component:m,argTypes:{variant:{options:Object.values(t),control:{type:"radio"}},as:{control:{type:"text"}}}},a={args:{children:"Badge",variant:t.Primary}},r={args:{href:"#",as:"a",children:"Custom element",variant:t.Outline}};var n,s,o;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    children: "Badge",
    variant: BadgeVariant.Primary
  }
}`,...(o=(s=a.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var c,d,i;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    href: "#",
    as: "a",
    children: "Custom element",
    variant: BadgeVariant.Outline
  }
}`,...(i=(d=r.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const E=["Overview","CustomElement"];export{r as CustomElement,a as Overview,E as __namedExportsOrder,C as default};

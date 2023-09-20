"use strict";(self.webpackChunk_itsrakesh_ui=self.webpackChunk_itsrakesh_ui||[]).push([[200],{"./src/stories/Skeleton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Skeleton_stories});var dist=__webpack_require__("../utils/dist/index.mjs"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");function Skeleton(_ref){let{className,...props}=_ref;return(0,jsx_runtime.jsx)("div",{className:(0,dist.cn)("animate-pulse rounded-md bg-primary/10",className),...props})}Skeleton.displayName="Skeleton";try{Skeleton.displayName="Skeleton",Skeleton.__docgenInfo={description:"",displayName:"Skeleton",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Skeleton/Skeleton.tsx#Skeleton"]={docgenInfo:Skeleton.__docgenInfo,name:"Skeleton",path:"src/components/Skeleton/Skeleton.tsx#Skeleton"})}catch(__react_docgen_typescript_loader_error){}const Skeleton_stories={component:Skeleton},Default={render:()=>(0,jsx_runtime.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,jsx_runtime.jsx)(Skeleton,{className:"h-12 w-12 rounded-full"}),(0,jsx_runtime.jsxs)("div",{className:"space-y-2",children:[(0,jsx_runtime.jsx)(Skeleton,{className:"h-4 w-[250px]"}),(0,jsx_runtime.jsx)(Skeleton,{className:"h-4 w-[200px]"})]})]})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: () => <div className="flex items-center space-x-4">\n      <Skeleton className="h-12 w-12 rounded-full" />\n      <div className="space-y-2">\n        <Skeleton className="h-4 w-[250px]" />\n        <Skeleton className="h-4 w-[200px]" />\n      </div>\n    </div>\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../utils/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),tailwind_merge__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/tailwind-merge/dist/lib/tw-merge.mjs");"undefined"!=typeof window&&react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect;function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function cn(...inputs){return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_1__.m)(function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}(inputs))}}}]);
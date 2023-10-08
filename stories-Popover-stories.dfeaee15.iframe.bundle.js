"use strict";(self.webpackChunk_itsrakesh_ui=self.webpackChunk_itsrakesh_ui||[]).push([[284],{"./src/stories/Popover.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Popover_stories});var react=__webpack_require__("../../node_modules/react/index.js"),dist=__webpack_require__("../../node_modules/@radix-ui/react-popover/dist/index.mjs"),utils_dist=__webpack_require__("../utils/dist/index.mjs"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const Popover=dist.fC,PopoverTrigger=dist.xz,PopoverContent=react.forwardRef(((_ref,ref)=>{let{className,align="center",sideOffset=4,...props}=_ref;return(0,jsx_runtime.jsx)(dist.h_,{children:(0,jsx_runtime.jsx)(dist.VY,{ref,align,sideOffset,className:(0,utils_dist.cn)("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",className),...props})})}));PopoverContent.displayName=dist.VY.displayName;try{Popover.displayName="Popover",Popover.__docgenInfo={description:"",displayName:"Popover",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Popover/Popover.tsx#Popover"]={docgenInfo:Popover.__docgenInfo,name:"Popover",path:"src/components/Popover/Popover.tsx#Popover"})}catch(__react_docgen_typescript_loader_error){}try{PopoverTrigger.displayName="PopoverTrigger",PopoverTrigger.__docgenInfo={description:"",displayName:"PopoverTrigger",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Popover/Popover.tsx#PopoverTrigger"]={docgenInfo:PopoverTrigger.__docgenInfo,name:"PopoverTrigger",path:"src/components/Popover/Popover.tsx#PopoverTrigger"})}catch(__react_docgen_typescript_loader_error){}try{PopoverContent.displayName="PopoverContent",PopoverContent.__docgenInfo={description:"",displayName:"PopoverContent",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Popover/Popover.tsx#PopoverContent"]={docgenInfo:PopoverContent.__docgenInfo,name:"PopoverContent",path:"src/components/Popover/Popover.tsx#PopoverContent"})}catch(__react_docgen_typescript_loader_error){}var Button=__webpack_require__("./src/components/Button/Button.tsx"),Label=__webpack_require__("./src/components/Label/Label.tsx"),Input=__webpack_require__("./src/components/Input/Input.tsx");const Popover_stories={component:Popover},Default={render:()=>(0,jsx_runtime.jsxs)(Popover,{children:[(0,jsx_runtime.jsx)(PopoverTrigger,{asChild:!0,children:(0,jsx_runtime.jsx)(Button.z,{variant:"outline",children:"Open popover"})}),(0,jsx_runtime.jsx)(PopoverContent,{className:"w-80",children:(0,jsx_runtime.jsxs)("div",{className:"grid gap-4",children:[(0,jsx_runtime.jsxs)("div",{className:"space-y-2",children:[(0,jsx_runtime.jsx)("h4",{className:"font-medium leading-none",children:"Dimensions"}),(0,jsx_runtime.jsx)("p",{className:"text-sm text-muted-foreground",children:"Set the dimensions for the layer."})]}),(0,jsx_runtime.jsxs)("div",{className:"grid gap-2",children:[(0,jsx_runtime.jsxs)("div",{className:"grid grid-cols-3 items-center gap-4",children:[(0,jsx_runtime.jsx)(Label._,{htmlFor:"width",children:"Width"}),(0,jsx_runtime.jsx)(Input.I,{id:"width",defaultValue:"100%",className:"col-span-2 h-8"})]}),(0,jsx_runtime.jsxs)("div",{className:"grid grid-cols-3 items-center gap-4",children:[(0,jsx_runtime.jsx)(Label._,{htmlFor:"maxWidth",children:"Max. width"}),(0,jsx_runtime.jsx)(Input.I,{id:"maxWidth",defaultValue:"300px",className:"col-span-2 h-8"})]}),(0,jsx_runtime.jsxs)("div",{className:"grid grid-cols-3 items-center gap-4",children:[(0,jsx_runtime.jsx)(Label._,{htmlFor:"height",children:"Height"}),(0,jsx_runtime.jsx)(Input.I,{id:"height",defaultValue:"25px",className:"col-span-2 h-8"})]}),(0,jsx_runtime.jsxs)("div",{className:"grid grid-cols-3 items-center gap-4",children:[(0,jsx_runtime.jsx)(Label._,{htmlFor:"maxHeight",children:"Max. height"}),(0,jsx_runtime.jsx)(Input.I,{id:"maxHeight",defaultValue:"none",className:"col-span-2 h-8"})]})]})]})})]})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: () => <Popover>\n      <PopoverTrigger asChild>\n        <Button variant="outline">Open popover</Button>\n      </PopoverTrigger>\n      <PopoverContent className="w-80">\n        <div className="grid gap-4">\n          <div className="space-y-2">\n            <h4 className="font-medium leading-none">Dimensions</h4>\n            <p className="text-sm text-muted-foreground">\n              Set the dimensions for the layer.\n            </p>\n          </div>\n          <div className="grid gap-2">\n            <div className="grid grid-cols-3 items-center gap-4">\n              <Label htmlFor="width">Width</Label>\n              <Input id="width" defaultValue="100%" className="col-span-2 h-8" />\n            </div>\n            <div className="grid grid-cols-3 items-center gap-4">\n              <Label htmlFor="maxWidth">Max. width</Label>\n              <Input id="maxWidth" defaultValue="300px" className="col-span-2 h-8" />\n            </div>\n            <div className="grid grid-cols-3 items-center gap-4">\n              <Label htmlFor="height">Height</Label>\n              <Input id="height" defaultValue="25px" className="col-span-2 h-8" />\n            </div>\n            <div className="grid grid-cols-3 items-center gap-4">\n              <Label htmlFor="maxHeight">Max. height</Label>\n              <Input id="maxHeight" defaultValue="none" className="col-span-2 h-8" />\n            </div>\n          </div>\n        </div>\n      </PopoverContent>\n    </Popover>\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/components/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>buttonVariants,z:()=>Button});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@radix-ui/react-slot/dist/index.mjs"),class_variance_authority__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/class-variance-authority/dist/index.mjs"),_itsrakesh_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../utils/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const buttonVariants=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__.j)("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:opacity-80",success:"bg-success text-success-foreground shadow hover:opacity-80",warning:"bg-warning text-warning-foreground shadow hover:opacity-80",info:"bg-info text-info-foreground shadow hover:opacity-80",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:opacity-80",outline:"border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:opacity-80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),Button=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref,ref)=>{let{className,variant,size,asChild=!1,...props}=_ref;const Comp=asChild?_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__.g7:"button";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Comp,{className:(0,_itsrakesh_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(buttonVariants({variant,size,className})),ref,...props})}));Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{asChild:{defaultValue:{value:"false"},description:"",name:"asChild",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"link" | "default" | "success" | "warning" | "info" | "destructive" | "outline" | "secondary" | "ghost" | null'}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"default" | "sm" | "lg" | "icon" | null'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Input/Input.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Input});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_itsrakesh_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../utils/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const Input=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref,ref)=>{let{className,type,...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input",{type,className:(0,_itsrakesh_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",className),ref,...props})}));Input.displayName="Input";try{Input.displayName="Input",Input.__docgenInfo={description:"",displayName:"Input",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Input/Input.tsx#Input"]={docgenInfo:Input.__docgenInfo,name:"Input",path:"src/components/Input/Input.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Label/Label.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>Label});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@radix-ui/react-label/dist/index.mjs"),class_variance_authority__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/class-variance-authority/dist/index.mjs"),_itsrakesh_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../utils/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const labelVariants=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),Label=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref,ref)=>{let{className,...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_3__.f,{ref,className:(0,_itsrakesh_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(labelVariants(),className),...props})}));Label.displayName=_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_3__.f.displayName;try{Label.displayName="Label",Label.__docgenInfo={description:"",displayName:"Label",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Label/Label.tsx#Label"]={docgenInfo:Label.__docgenInfo,name:"Label",path:"src/components/Label/Label.tsx#Label"})}catch(__react_docgen_typescript_loader_error){}},"../utils/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),tailwind_merge__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/tailwind-merge/dist/lib/tw-merge.mjs");"undefined"!=typeof window&&react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect;function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function cn(...inputs){return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_1__.m)(function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}(inputs))}}}]);
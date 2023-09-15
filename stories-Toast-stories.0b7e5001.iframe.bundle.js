"use strict";(self.webpackChunk_itsrakesh_ui=self.webpackChunk_itsrakesh_ui||[]).push([[849],{"./src/stories/Toast.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Destructive:()=>Destructive,Info:()=>Info,Simple:()=>Simple,Success:()=>Success,Warning:()=>Warning,WithAction:()=>WithAction,WithTitle:()=>WithTitle,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var ___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Toast/Toast.tsx"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Toast/Toaster.tsx"),___WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Toast/use-toast.tsx"),___WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Button/Button.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={component:___WEBPACK_IMPORTED_MODULE_1__.FN,decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.x,{})]})]},Simple={render:()=>{const{toast}=(0,___WEBPACK_IMPORTED_MODULE_3__.pm)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.z,{variant:"outline",onClick:()=>{toast({description:"Your message has been sent.",duration:5e3})},children:"Show Toast"})}},WithTitle={render:()=>{const{toast}=(0,___WEBPACK_IMPORTED_MODULE_3__.pm)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.z,{variant:"outline",onClick:()=>{toast({title:"Uh oh! Something went wrong.",description:"There was a problem with your request."})},children:"Show Toast"})}},WithAction={render:()=>{const{toast}=(0,___WEBPACK_IMPORTED_MODULE_3__.pm)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.z,{variant:"outline",onClick:()=>{toast({title:"Uh oh! Something went wrong.",description:"There was a problem with your request.",action:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.gD,{altText:"Try again",children:"Try again"})})},children:"Show Toast"})}},Destructive={render:()=>{const{toast}=(0,___WEBPACK_IMPORTED_MODULE_3__.pm)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.z,{variant:"outline",onClick:()=>{toast({variant:"destructive",title:"Uh oh! Something went wrong.",description:"There was a problem with your request.",action:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.gD,{altText:"Try again",children:"Try again"})})},children:"Show Toast"})}},Success={render:()=>{const{toast}=(0,___WEBPACK_IMPORTED_MODULE_3__.pm)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.z,{variant:"outline",onClick:()=>{toast({variant:"success",title:"Your message has been sent.",description:"We'll get back to you as soon as we can.",action:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.gD,{altText:"Try again",children:"Try again"})})},children:"Show Toast"})}},Warning={render:()=>{const{toast}=(0,___WEBPACK_IMPORTED_MODULE_3__.pm)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.z,{variant:"outline",onClick:()=>{toast({variant:"warning",title:"Your message has been sent.",description:"We'll get back to you as soon as we can.",action:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.gD,{altText:"Try again",children:"Try again"})})},children:"Show Toast"})}},Info={render:()=>{const{toast}=(0,___WEBPACK_IMPORTED_MODULE_3__.pm)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.z,{variant:"outline",onClick:()=>{toast({variant:"info",title:"Your message has been sent.",description:"We'll get back to you as soon as we can.",action:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.gD,{altText:"Try again",children:"Try again"})})},children:"Show Toast"})}};Simple.parameters={...Simple.parameters,docs:{...Simple.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const {\n      toast\n    } = useToast();\n    return <Button variant="outline" onClick={() => {\n      toast({\n        description: "Your message has been sent.",\n        duration: 5000\n      });\n    }}>\n        Show Toast\n      </Button>;\n  }\n}',...Simple.parameters?.docs?.source}}},WithTitle.parameters={...WithTitle.parameters,docs:{...WithTitle.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const {\n      toast\n    } = useToast();\n    return <Button variant="outline" onClick={() => {\n      toast({\n        title: "Uh oh! Something went wrong.",\n        description: "There was a problem with your request."\n      });\n    }}>\n        Show Toast\n      </Button>;\n  }\n}',...WithTitle.parameters?.docs?.source}}},WithAction.parameters={...WithAction.parameters,docs:{...WithAction.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const {\n      toast\n    } = useToast();\n    return <Button variant="outline" onClick={() => {\n      toast({\n        title: "Uh oh! Something went wrong.",\n        description: "There was a problem with your request.",\n        action: <ToastAction altText="Try again">Try again</ToastAction>\n      });\n    }}>\n        Show Toast\n      </Button>;\n  }\n}',...WithAction.parameters?.docs?.source}}},Destructive.parameters={...Destructive.parameters,docs:{...Destructive.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const {\n      toast\n    } = useToast();\n    return <Button variant="outline" onClick={() => {\n      toast({\n        variant: "destructive",\n        title: "Uh oh! Something went wrong.",\n        description: "There was a problem with your request.",\n        action: <ToastAction altText="Try again">Try again</ToastAction>\n      });\n    }}>\n        Show Toast\n      </Button>;\n  }\n}',...Destructive.parameters?.docs?.source}}},Success.parameters={...Success.parameters,docs:{...Success.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const {\n      toast\n    } = useToast();\n    return <Button variant="outline" onClick={() => {\n      toast({\n        variant: "success",\n        title: "Your message has been sent.",\n        description: "We\'ll get back to you as soon as we can.",\n        action: <ToastAction altText="Try again">Try again</ToastAction>\n      });\n    }}>\n        Show Toast\n      </Button>;\n  }\n}',...Success.parameters?.docs?.source}}},Warning.parameters={...Warning.parameters,docs:{...Warning.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const {\n      toast\n    } = useToast();\n    return <Button variant="outline" onClick={() => {\n      toast({\n        variant: "warning",\n        title: "Your message has been sent.",\n        description: "We\'ll get back to you as soon as we can.",\n        action: <ToastAction altText="Try again">Try again</ToastAction>\n      });\n    }}>\n        Show Toast\n      </Button>;\n  }\n}',...Warning.parameters?.docs?.source}}},Info.parameters={...Info.parameters,docs:{...Info.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const {\n      toast\n    } = useToast();\n    return <Button variant="outline" onClick={() => {\n      toast({\n        variant: "info",\n        title: "Your message has been sent.",\n        description: "We\'ll get back to you as soon as we can.",\n        action: <ToastAction altText="Try again">Try again</ToastAction>\n      });\n    }}>\n        Show Toast\n      </Button>;\n  }\n}',...Info.parameters?.docs?.source}}};const __namedExportsOrder=["Simple","WithTitle","WithAction","Destructive","Success","Warning","Info"]},"./src/components/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>buttonVariants,z:()=>Button});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@radix-ui/react-slot/dist/index.mjs"),class_variance_authority__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/class-variance-authority/dist/index.mjs"),_itsrakesh_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../utils/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const buttonVariants=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__.j)("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),Button=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref,ref)=>{let{className,variant,size,asChild=!1,...props}=_ref;const Comp=asChild?_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__.g7:"button";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Comp,{className:(0,_itsrakesh_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(buttonVariants({variant,size,className})),ref,...props})}));Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{asChild:{defaultValue:{value:"false"},description:"",name:"asChild",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null'}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"default" | "sm" | "lg" | "icon" | null'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Toast/Toast.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{FN:()=>Toast,Mi:()=>ToastTitle,VW:()=>ToastProvider,_i:()=>ToastViewport,gD:()=>ToastAction,lj:()=>ToastDescription,sA:()=>ToastClose});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@radix-ui/react-icons/dist/react-icons.esm.js"),_radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@radix-ui/react-toast/dist/index.mjs"),class_variance_authority__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/class-variance-authority/dist/index.mjs"),_itsrakesh_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../utils/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const ToastProvider=_radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_2__.zt,ToastViewport=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref,ref)=>{let{className,...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_2__.l_,{ref,className:(0,_itsrakesh_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",className),...props})}));ToastViewport.displayName=_radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_2__.l_.displayName;const toastVariants=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_4__.j)("group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",success:"success group border-success bg-success text-success-foreground",warning:"warning group border-warning bg-warning text-warning-foreground",info:"info group border-info bg-info text-info-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),Toast=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref2,ref)=>{let{className,variant,...props}=_ref2;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_2__.fC,{ref,className:(0,_itsrakesh_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(toastVariants({variant}),className),...props})}));Toast.displayName=_radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_2__.fC.displayName;const ToastAction=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref3,ref)=>{let{className,...props}=_ref3;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_2__.aU,{ref,className:(0,_itsrakesh_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",className),...props})}));ToastAction.displayName=_radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_2__.aU.displayName;const ToastClose=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref4,ref)=>{let{className,...props}=_ref4;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_2__.x8,{ref,className:(0,_itsrakesh_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",className),"toast-close":"",...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_5__.Pxu,{className:"h-4 w-4"})})}));ToastClose.displayName=_radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_2__.x8.displayName;const ToastTitle=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref5,ref)=>{let{className,...props}=_ref5;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_2__.Dx,{ref,className:(0,_itsrakesh_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("text-sm font-semibold [&+div]:text-xs",className),...props})}));ToastTitle.displayName=_radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_2__.Dx.displayName;const ToastDescription=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref6,ref)=>{let{className,...props}=_ref6;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_2__.dk,{ref,className:(0,_itsrakesh_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("text-sm opacity-90",className),...props})}));ToastDescription.displayName=_radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_2__.dk.displayName;try{ToastProvider.displayName="ToastProvider",ToastProvider.__docgenInfo={description:"",displayName:"ToastProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toast/Toast.tsx#ToastProvider"]={docgenInfo:ToastProvider.__docgenInfo,name:"ToastProvider",path:"src/components/Toast/Toast.tsx#ToastProvider"})}catch(__react_docgen_typescript_loader_error){}try{ToastViewport.displayName="ToastViewport",ToastViewport.__docgenInfo={description:"",displayName:"ToastViewport",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toast/Toast.tsx#ToastViewport"]={docgenInfo:ToastViewport.__docgenInfo,name:"ToastViewport",path:"src/components/Toast/Toast.tsx#ToastViewport"})}catch(__react_docgen_typescript_loader_error){}try{Toast.displayName="Toast",Toast.__docgenInfo={description:"",displayName:"Toast",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"default" | "success" | "warning" | "info" | "destructive" | null'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toast/Toast.tsx#Toast"]={docgenInfo:Toast.__docgenInfo,name:"Toast",path:"src/components/Toast/Toast.tsx#Toast"})}catch(__react_docgen_typescript_loader_error){}try{ToastTitle.displayName="ToastTitle",ToastTitle.__docgenInfo={description:"",displayName:"ToastTitle",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toast/Toast.tsx#ToastTitle"]={docgenInfo:ToastTitle.__docgenInfo,name:"ToastTitle",path:"src/components/Toast/Toast.tsx#ToastTitle"})}catch(__react_docgen_typescript_loader_error){}try{ToastDescription.displayName="ToastDescription",ToastDescription.__docgenInfo={description:"",displayName:"ToastDescription",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toast/Toast.tsx#ToastDescription"]={docgenInfo:ToastDescription.__docgenInfo,name:"ToastDescription",path:"src/components/Toast/Toast.tsx#ToastDescription"})}catch(__react_docgen_typescript_loader_error){}try{ToastClose.displayName="ToastClose",ToastClose.__docgenInfo={description:"",displayName:"ToastClose",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toast/Toast.tsx#ToastClose"]={docgenInfo:ToastClose.__docgenInfo,name:"ToastClose",path:"src/components/Toast/Toast.tsx#ToastClose"})}catch(__react_docgen_typescript_loader_error){}try{ToastAction.displayName="ToastAction",ToastAction.__docgenInfo={description:"",displayName:"ToastAction",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toast/Toast.tsx#ToastAction"]={docgenInfo:ToastAction.__docgenInfo,name:"ToastAction",path:"src/components/Toast/Toast.tsx#ToastAction"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Toast/Toaster.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Toaster});var ___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Toast/use-toast.tsx"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Toast/Toast.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");function Toaster(){const{toasts}=(0,___WEBPACK_IMPORTED_MODULE_1__.pm)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(___WEBPACK_IMPORTED_MODULE_2__.VW,{children:[toasts.map((function(_ref){let{id,title,description,action,...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(___WEBPACK_IMPORTED_MODULE_2__.FN,{...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"grid gap-1",children:[title&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.Mi,{children:title}),description&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.lj,{children:description})]}),action,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.sA,{})]},id)})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_2__._i,{})]})}Toaster.displayName="Toaster"},"./src/components/Toast/use-toast.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Am:()=>toast,pm:()=>useToast});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");let count=0;const toastTimeouts=new Map,addToRemoveQueue=toastId=>{if(toastTimeouts.has(toastId))return;const timeout=setTimeout((()=>{toastTimeouts.delete(toastId),dispatch({type:"REMOVE_TOAST",toastId})}),5e5);toastTimeouts.set(toastId,timeout)},reducer=(state,action)=>{switch(action.type){case"ADD_TOAST":return{...state,toasts:[action.toast,...state.toasts].slice(0,2)};case"UPDATE_TOAST":return{...state,toasts:state.toasts.map((t=>t.id===action.toast.id?{...t,...action.toast}:t))};case"DISMISS_TOAST":{const{toastId}=action;return toastId?addToRemoveQueue(toastId):state.toasts.forEach((toast=>{addToRemoveQueue(toast.id)})),{...state,toasts:state.toasts.map((t=>t.id===toastId||void 0===toastId?{...t,open:!1}:t))}}case"REMOVE_TOAST":return void 0===action.toastId?{...state,toasts:[]}:{...state,toasts:state.toasts.filter((t=>t.id!==action.toastId))}}},listeners=[];let memoryState={toasts:[]};function dispatch(action){memoryState=reducer(memoryState,action),listeners.forEach((listener=>{listener(memoryState)}))}function toast(_ref){let{...props}=_ref;const id=function genId(){return count=(count+1)%Number.MAX_VALUE,count.toString()}(),dismiss=()=>dispatch({type:"DISMISS_TOAST",toastId:id});return dispatch({type:"ADD_TOAST",toast:{...props,id,open:!0,onOpenChange:open=>{open||dismiss()}}}),{id,dismiss,update:props=>dispatch({type:"UPDATE_TOAST",toast:{...props,id}})}}function useToast(){const[state,setState]=react__WEBPACK_IMPORTED_MODULE_0__.useState(memoryState);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>(listeners.push(setState),()=>{const index=listeners.indexOf(setState);index>-1&&listeners.splice(index,1)})),[state]),{...state,toast,dismiss:toastId=>dispatch({type:"DISMISS_TOAST",toastId})}}try{toast.displayName="toast",toast.__docgenInfo={description:"",displayName:"toast",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"default" | "success" | "warning" | "info" | "destructive" | null'}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},action:{defaultValue:null,description:"",name:"action",required:!1,type:{name:"ToastActionElement"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toast/use-toast.tsx#toast"]={docgenInfo:toast.__docgenInfo,name:"toast",path:"src/components/Toast/use-toast.tsx#toast"})}catch(__react_docgen_typescript_loader_error){}},"../utils/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),tailwind_merge__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/tailwind-merge/dist/lib/tw-merge.mjs");"undefined"!=typeof window&&react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect;function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function cn(...inputs){return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_1__.m)(function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}(inputs))}}}]);
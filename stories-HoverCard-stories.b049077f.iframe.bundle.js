"use strict";(self.webpackChunk_itsrakesh_ui=self.webpackChunk_itsrakesh_ui||[]).push([[5994],{"../../node_modules/@radix-ui/react-use-escape-keydown/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>$addc16e1bbe58fd0$export$3a72a57244d6e765});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs");function $addc16e1bbe58fd0$export$3a72a57244d6e765(onEscapeKeyDownProp,ownerDocument=(null===globalThis||void 0===globalThis?void 0:globalThis.document)){const onEscapeKeyDown=(0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__.W)(onEscapeKeyDownProp);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const handleKeyDown=event=>{"Escape"===event.key&&onEscapeKeyDown(event)};return ownerDocument.addEventListener("keydown",handleKeyDown),()=>ownerDocument.removeEventListener("keydown",handleKeyDown)}),[onEscapeKeyDown,ownerDocument])}},"./src/stories/HoverCard.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>HoverCard_stories});var react=__webpack_require__("../../node_modules/react/index.js"),esm_extends=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),dist=__webpack_require__("../../node_modules/@radix-ui/primitive/dist/index.mjs"),react_context_dist=__webpack_require__("../../node_modules/@radix-ui/react-context/dist/index.mjs"),react_use_controllable_state_dist=__webpack_require__("../../node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs"),react_compose_refs_dist=__webpack_require__("../../node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),react_popper_dist=__webpack_require__("../../node_modules/@radix-ui/react-popper/dist/index.mjs"),react_primitive_dist=(__webpack_require__("../../node_modules/react-dom/index.js"),__webpack_require__("../../node_modules/@radix-ui/react-primitive/dist/index.mjs"));var react_presence_dist=__webpack_require__("../../node_modules/@radix-ui/react-presence/dist/index.mjs"),react_use_callback_ref_dist=__webpack_require__("../../node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs"),react_use_escape_keydown_dist=__webpack_require__("../../node_modules/@radix-ui/react-use-escape-keydown/dist/index.mjs");let $5cb92bef7577960e$var$originalBodyPointerEvents;const $5cb92bef7577960e$var$DismissableLayerContext=(0,react.createContext)({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),$5cb92bef7577960e$export$177fb62ff3ec1f22=(0,react.forwardRef)(((props,forwardedRef)=>{var _node$ownerDocument;const{disableOutsidePointerEvents=!1,onEscapeKeyDown,onPointerDownOutside,onFocusOutside,onInteractOutside,onDismiss,...layerProps}=props,context=(0,react.useContext)($5cb92bef7577960e$var$DismissableLayerContext),[node1,setNode]=(0,react.useState)(null),ownerDocument=null!==(_node$ownerDocument=null==node1?void 0:node1.ownerDocument)&&void 0!==_node$ownerDocument?_node$ownerDocument:null===globalThis||void 0===globalThis?void 0:globalThis.document,[,force]=(0,react.useState)({}),composedRefs=(0,react_compose_refs_dist.e)(forwardedRef,(node=>setNode(node))),layers=Array.from(context.layers),[highestLayerWithOutsidePointerEventsDisabled]=[...context.layersWithOutsidePointerEventsDisabled].slice(-1),highestLayerWithOutsidePointerEventsDisabledIndex=layers.indexOf(highestLayerWithOutsidePointerEventsDisabled),index=node1?layers.indexOf(node1):-1,isBodyPointerEventsDisabled=context.layersWithOutsidePointerEventsDisabled.size>0,isPointerEventsEnabled=index>=highestLayerWithOutsidePointerEventsDisabledIndex,pointerDownOutside=function $5cb92bef7577960e$var$usePointerDownOutside(onPointerDownOutside,ownerDocument=(null===globalThis||void 0===globalThis?void 0:globalThis.document)){const handlePointerDownOutside=(0,react_use_callback_ref_dist.W)(onPointerDownOutside),isPointerInsideReactTreeRef=(0,react.useRef)(!1),handleClickRef=(0,react.useRef)((()=>{}));return(0,react.useEffect)((()=>{const handlePointerDown=event=>{if(event.target&&!isPointerInsideReactTreeRef.current){const eventDetail={originalEvent:event};function handleAndDispatchPointerDownOutsideEvent(){$5cb92bef7577960e$var$handleAndDispatchCustomEvent("dismissableLayer.pointerDownOutside",handlePointerDownOutside,eventDetail,{discrete:!0})}"touch"===event.pointerType?(ownerDocument.removeEventListener("click",handleClickRef.current),handleClickRef.current=handleAndDispatchPointerDownOutsideEvent,ownerDocument.addEventListener("click",handleClickRef.current,{once:!0})):handleAndDispatchPointerDownOutsideEvent()}else ownerDocument.removeEventListener("click",handleClickRef.current);isPointerInsideReactTreeRef.current=!1},timerId=window.setTimeout((()=>{ownerDocument.addEventListener("pointerdown",handlePointerDown)}),0);return()=>{window.clearTimeout(timerId),ownerDocument.removeEventListener("pointerdown",handlePointerDown),ownerDocument.removeEventListener("click",handleClickRef.current)}}),[ownerDocument,handlePointerDownOutside]),{onPointerDownCapture:()=>isPointerInsideReactTreeRef.current=!0}}((event=>{const target=event.target,isPointerDownOnBranch=[...context.branches].some((branch=>branch.contains(target)));isPointerEventsEnabled&&!isPointerDownOnBranch&&(null==onPointerDownOutside||onPointerDownOutside(event),null==onInteractOutside||onInteractOutside(event),event.defaultPrevented||null==onDismiss||onDismiss())}),ownerDocument),focusOutside=function $5cb92bef7577960e$var$useFocusOutside(onFocusOutside,ownerDocument=(null===globalThis||void 0===globalThis?void 0:globalThis.document)){const handleFocusOutside=(0,react_use_callback_ref_dist.W)(onFocusOutside),isFocusInsideReactTreeRef=(0,react.useRef)(!1);return(0,react.useEffect)((()=>{const handleFocus=event=>{if(event.target&&!isFocusInsideReactTreeRef.current){$5cb92bef7577960e$var$handleAndDispatchCustomEvent("dismissableLayer.focusOutside",handleFocusOutside,{originalEvent:event},{discrete:!1})}};return ownerDocument.addEventListener("focusin",handleFocus),()=>ownerDocument.removeEventListener("focusin",handleFocus)}),[ownerDocument,handleFocusOutside]),{onFocusCapture:()=>isFocusInsideReactTreeRef.current=!0,onBlurCapture:()=>isFocusInsideReactTreeRef.current=!1}}((event=>{const target=event.target;[...context.branches].some((branch=>branch.contains(target)))||(null==onFocusOutside||onFocusOutside(event),null==onInteractOutside||onInteractOutside(event),event.defaultPrevented||null==onDismiss||onDismiss())}),ownerDocument);return(0,react_use_escape_keydown_dist.e)((event=>{index===context.layers.size-1&&(null==onEscapeKeyDown||onEscapeKeyDown(event),!event.defaultPrevented&&onDismiss&&(event.preventDefault(),onDismiss()))}),ownerDocument),(0,react.useEffect)((()=>{if(node1)return disableOutsidePointerEvents&&(0===context.layersWithOutsidePointerEventsDisabled.size&&($5cb92bef7577960e$var$originalBodyPointerEvents=ownerDocument.body.style.pointerEvents,ownerDocument.body.style.pointerEvents="none"),context.layersWithOutsidePointerEventsDisabled.add(node1)),context.layers.add(node1),$5cb92bef7577960e$var$dispatchUpdate(),()=>{disableOutsidePointerEvents&&1===context.layersWithOutsidePointerEventsDisabled.size&&(ownerDocument.body.style.pointerEvents=$5cb92bef7577960e$var$originalBodyPointerEvents)}}),[node1,ownerDocument,disableOutsidePointerEvents,context]),(0,react.useEffect)((()=>()=>{node1&&(context.layers.delete(node1),context.layersWithOutsidePointerEventsDisabled.delete(node1),$5cb92bef7577960e$var$dispatchUpdate())}),[node1,context]),(0,react.useEffect)((()=>{const handleUpdate=()=>force({});return document.addEventListener("dismissableLayer.update",handleUpdate),()=>document.removeEventListener("dismissableLayer.update",handleUpdate)}),[]),(0,react.createElement)(react_primitive_dist.WV.div,(0,esm_extends.Z)({},layerProps,{ref:composedRefs,style:{pointerEvents:isBodyPointerEventsDisabled?isPointerEventsEnabled?"auto":"none":void 0,...props.style},onFocusCapture:(0,dist.M)(props.onFocusCapture,focusOutside.onFocusCapture),onBlurCapture:(0,dist.M)(props.onBlurCapture,focusOutside.onBlurCapture),onPointerDownCapture:(0,dist.M)(props.onPointerDownCapture,pointerDownOutside.onPointerDownCapture)}))}));function $5cb92bef7577960e$var$dispatchUpdate(){const event=new CustomEvent("dismissableLayer.update");document.dispatchEvent(event)}function $5cb92bef7577960e$var$handleAndDispatchCustomEvent(name,handler,detail,{discrete}){const target=detail.originalEvent.target,event=new CustomEvent(name,{bubbles:!1,cancelable:!0,detail});handler&&target.addEventListener(name,handler,{once:!0}),discrete?(0,react_primitive_dist.jH)(target,event):target.dispatchEvent(event)}let $cef8881cdc69808e$var$originalBodyUserSelect;const[$cef8881cdc69808e$var$createHoverCardContext,$cef8881cdc69808e$export$47b6998a836b7260]=(0,react_context_dist.b)("HoverCard",[react_popper_dist.D7]),$cef8881cdc69808e$var$usePopperScope=(0,react_popper_dist.D7)(),[$cef8881cdc69808e$var$HoverCardProvider,$cef8881cdc69808e$var$useHoverCardContext]=$cef8881cdc69808e$var$createHoverCardContext("HoverCard"),$cef8881cdc69808e$export$57a077cc9fbe653e=props=>{const{__scopeHoverCard,children,open:openProp,defaultOpen,onOpenChange,openDelay=700,closeDelay=300}=props,popperScope=$cef8881cdc69808e$var$usePopperScope(__scopeHoverCard),openTimerRef=(0,react.useRef)(0),closeTimerRef=(0,react.useRef)(0),hasSelectionRef=(0,react.useRef)(!1),isPointerDownOnContentRef=(0,react.useRef)(!1),[open=!1,setOpen]=(0,react_use_controllable_state_dist.T)({prop:openProp,defaultProp:defaultOpen,onChange:onOpenChange}),handleOpen=(0,react.useCallback)((()=>{clearTimeout(closeTimerRef.current),openTimerRef.current=window.setTimeout((()=>setOpen(!0)),openDelay)}),[openDelay,setOpen]),handleClose=(0,react.useCallback)((()=>{clearTimeout(openTimerRef.current),hasSelectionRef.current||isPointerDownOnContentRef.current||(closeTimerRef.current=window.setTimeout((()=>setOpen(!1)),closeDelay))}),[closeDelay,setOpen]),handleDismiss=(0,react.useCallback)((()=>setOpen(!1)),[setOpen]);return(0,react.useEffect)((()=>()=>{clearTimeout(openTimerRef.current),clearTimeout(closeTimerRef.current)}),[]),(0,react.createElement)($cef8881cdc69808e$var$HoverCardProvider,{scope:__scopeHoverCard,open,onOpenChange:setOpen,onOpen:handleOpen,onClose:handleClose,onDismiss:handleDismiss,hasSelectionRef,isPointerDownOnContentRef},(0,react.createElement)(react_popper_dist.fC,popperScope,children))},$cef8881cdc69808e$export$ef9f7fd8e4ba882f=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeHoverCard,...triggerProps}=props,context=$cef8881cdc69808e$var$useHoverCardContext("HoverCardTrigger",__scopeHoverCard),popperScope=$cef8881cdc69808e$var$usePopperScope(__scopeHoverCard);return(0,react.createElement)(react_popper_dist.ee,(0,esm_extends.Z)({asChild:!0},popperScope),(0,react.createElement)(react_primitive_dist.WV.a,(0,esm_extends.Z)({"data-state":context.open?"open":"closed"},triggerProps,{ref:forwardedRef,onPointerEnter:(0,dist.M)(props.onPointerEnter,$cef8881cdc69808e$var$excludeTouch(context.onOpen)),onPointerLeave:(0,dist.M)(props.onPointerLeave,$cef8881cdc69808e$var$excludeTouch(context.onClose)),onFocus:(0,dist.M)(props.onFocus,context.onOpen),onBlur:(0,dist.M)(props.onBlur,context.onClose),onTouchStart:(0,dist.M)(props.onTouchStart,(event=>event.preventDefault()))})))})),[$cef8881cdc69808e$var$PortalProvider,$cef8881cdc69808e$var$usePortalContext]=$cef8881cdc69808e$var$createHoverCardContext("HoverCardPortal",{forceMount:void 0}),$cef8881cdc69808e$export$aa4724a5938c586=(0,react.forwardRef)(((props,forwardedRef)=>{const portalContext=$cef8881cdc69808e$var$usePortalContext("HoverCardContent",props.__scopeHoverCard),{forceMount=portalContext.forceMount,...contentProps}=props,context=$cef8881cdc69808e$var$useHoverCardContext("HoverCardContent",props.__scopeHoverCard);return(0,react.createElement)(react_presence_dist.z,{present:forceMount||context.open},(0,react.createElement)($cef8881cdc69808e$var$HoverCardContentImpl,(0,esm_extends.Z)({"data-state":context.open?"open":"closed"},contentProps,{onPointerEnter:(0,dist.M)(props.onPointerEnter,$cef8881cdc69808e$var$excludeTouch(context.onOpen)),onPointerLeave:(0,dist.M)(props.onPointerLeave,$cef8881cdc69808e$var$excludeTouch(context.onClose)),ref:forwardedRef})))})),$cef8881cdc69808e$var$HoverCardContentImpl=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeHoverCard,onEscapeKeyDown,onPointerDownOutside,onFocusOutside,onInteractOutside,...contentProps}=props,context=$cef8881cdc69808e$var$useHoverCardContext("HoverCardContent",__scopeHoverCard),popperScope=$cef8881cdc69808e$var$usePopperScope(__scopeHoverCard),ref=(0,react.useRef)(null),composedRefs=(0,react_compose_refs_dist.e)(forwardedRef,ref),[containSelection,setContainSelection]=(0,react.useState)(!1);return(0,react.useEffect)((()=>{if(containSelection){const body=document.body;return $cef8881cdc69808e$var$originalBodyUserSelect=body.style.userSelect||body.style.webkitUserSelect,body.style.userSelect="none",body.style.webkitUserSelect="none",()=>{body.style.userSelect=$cef8881cdc69808e$var$originalBodyUserSelect,body.style.webkitUserSelect=$cef8881cdc69808e$var$originalBodyUserSelect}}}),[containSelection]),(0,react.useEffect)((()=>{if(ref.current){const handlePointerUp=()=>{setContainSelection(!1),context.isPointerDownOnContentRef.current=!1,setTimeout((()=>{var _document$getSelectio;""!==(null===(_document$getSelectio=document.getSelection())||void 0===_document$getSelectio?void 0:_document$getSelectio.toString())&&(context.hasSelectionRef.current=!0)}))};return document.addEventListener("pointerup",handlePointerUp),()=>{document.removeEventListener("pointerup",handlePointerUp),context.hasSelectionRef.current=!1,context.isPointerDownOnContentRef.current=!1}}}),[context.isPointerDownOnContentRef,context.hasSelectionRef]),(0,react.useEffect)((()=>{if(ref.current){(function $cef8881cdc69808e$var$getTabbableNodes(container){const nodes=[],walker=document.createTreeWalker(container,NodeFilter.SHOW_ELEMENT,{acceptNode:node=>node.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP});for(;walker.nextNode();)nodes.push(walker.currentNode);return nodes})(ref.current).forEach((tabbable=>tabbable.setAttribute("tabindex","-1")))}})),(0,react.createElement)($5cb92bef7577960e$export$177fb62ff3ec1f22,{asChild:!0,disableOutsidePointerEvents:!1,onInteractOutside,onEscapeKeyDown,onPointerDownOutside,onFocusOutside:(0,dist.M)(onFocusOutside,(event=>{event.preventDefault()})),onDismiss:context.onDismiss},(0,react.createElement)(react_popper_dist.VY,(0,esm_extends.Z)({},popperScope,contentProps,{onPointerDown:(0,dist.M)(contentProps.onPointerDown,(event=>{event.currentTarget.contains(event.target)&&setContainSelection(!0),context.hasSelectionRef.current=!1,context.isPointerDownOnContentRef.current=!0})),ref:composedRefs,style:{...contentProps.style,userSelect:containSelection?"text":void 0,WebkitUserSelect:containSelection?"text":void 0,"--radix-hover-card-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-hover-card-content-available-width":"var(--radix-popper-available-width)","--radix-hover-card-content-available-height":"var(--radix-popper-available-height)","--radix-hover-card-trigger-width":"var(--radix-popper-anchor-width)","--radix-hover-card-trigger-height":"var(--radix-popper-anchor-height)"}})))}));function $cef8881cdc69808e$var$excludeTouch(eventHandler){return event=>"touch"===event.pointerType?void 0:eventHandler()}const $cef8881cdc69808e$export$be92b6f5f03c0fe9=$cef8881cdc69808e$export$57a077cc9fbe653e,$cef8881cdc69808e$export$41fb9f06171c75f4=$cef8881cdc69808e$export$ef9f7fd8e4ba882f,$cef8881cdc69808e$export$7c6e2c02157bb7d2=$cef8881cdc69808e$export$aa4724a5938c586;var utils_dist=__webpack_require__("../utils/dist/index.mjs"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const HoverCard=$cef8881cdc69808e$export$be92b6f5f03c0fe9,HoverCardTrigger=$cef8881cdc69808e$export$41fb9f06171c75f4,HoverCardContent=react.forwardRef(((_ref,ref)=>{let{className,align="center",sideOffset=4,...props}=_ref;return(0,jsx_runtime.jsx)($cef8881cdc69808e$export$7c6e2c02157bb7d2,{ref,align,sideOffset,className:(0,utils_dist.cn)("z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",className),...props})}));HoverCardContent.displayName=$cef8881cdc69808e$export$7c6e2c02157bb7d2.displayName;try{HoverCard.displayName="HoverCard",HoverCard.__docgenInfo={description:"",displayName:"HoverCard",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/HoverCard/HoverCard.tsx#HoverCard"]={docgenInfo:HoverCard.__docgenInfo,name:"HoverCard",path:"src/components/HoverCard/HoverCard.tsx#HoverCard"})}catch(__react_docgen_typescript_loader_error){}try{HoverCardTrigger.displayName="HoverCardTrigger",HoverCardTrigger.__docgenInfo={description:"",displayName:"HoverCardTrigger",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/HoverCard/HoverCard.tsx#HoverCardTrigger"]={docgenInfo:HoverCardTrigger.__docgenInfo,name:"HoverCardTrigger",path:"src/components/HoverCard/HoverCard.tsx#HoverCardTrigger"})}catch(__react_docgen_typescript_loader_error){}try{HoverCardContent.displayName="HoverCardContent",HoverCardContent.__docgenInfo={description:"",displayName:"HoverCardContent",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/HoverCard/HoverCard.tsx#HoverCardContent"]={docgenInfo:HoverCardContent.__docgenInfo,name:"HoverCardContent",path:"src/components/HoverCard/HoverCard.tsx#HoverCardContent"})}catch(__react_docgen_typescript_loader_error){}var Button=__webpack_require__("./src/components/Button/Button.tsx"),Avatar=__webpack_require__("./src/components/Avatar/Avatar.tsx"),react_icons_esm=__webpack_require__("../../node_modules/@radix-ui/react-icons/dist/react-icons.esm.js");const HoverCard_stories={component:HoverCard},Default={render:()=>(0,jsx_runtime.jsxs)(HoverCard,{children:[(0,jsx_runtime.jsx)(HoverCardTrigger,{asChild:!0,children:(0,jsx_runtime.jsx)(Button.z,{variant:"link",children:"@nextjs"})}),(0,jsx_runtime.jsx)(HoverCardContent,{className:"w-80",children:(0,jsx_runtime.jsxs)("div",{className:"flex justify-between space-x-4",children:[(0,jsx_runtime.jsxs)(Avatar.qE,{children:[(0,jsx_runtime.jsx)(Avatar.F$,{src:"https://github.com/vercel.png"}),(0,jsx_runtime.jsx)(Avatar.Q5,{children:"VC"})]}),(0,jsx_runtime.jsxs)("div",{className:"space-y-1",children:[(0,jsx_runtime.jsx)("h4",{className:"text-sm font-semibold",children:"@nextjs"}),(0,jsx_runtime.jsx)("p",{className:"text-sm",children:"The React Framework - created and maintained by @vercel."}),(0,jsx_runtime.jsxs)("div",{className:"flex items-center pt-2",children:[(0,jsx_runtime.jsx)(react_icons_esm.Que,{className:"mr-2 h-4 w-4 opacity-70"})," ",(0,jsx_runtime.jsx)("span",{className:"text-xs text-muted-foreground",children:"Joined December 2021"})]})]})]})})]})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: () => <HoverCard>\n      <HoverCardTrigger asChild>\n        <Button variant="link">@nextjs</Button>\n      </HoverCardTrigger>\n      <HoverCardContent className="w-80">\n        <div className="flex justify-between space-x-4">\n          <Avatar>\n            <AvatarImage src="https://github.com/vercel.png" />\n            <AvatarFallback>VC</AvatarFallback>\n          </Avatar>\n          <div className="space-y-1">\n            <h4 className="text-sm font-semibold">@nextjs</h4>\n            <p className="text-sm">\n              The React Framework - created and maintained by @vercel.\n            </p>\n            <div className="flex items-center pt-2">\n              <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}\n              <span className="text-xs text-muted-foreground">\n                Joined December 2021\n              </span>\n            </div>\n          </div>\n        </div>\n      </HoverCardContent>\n    </HoverCard>\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/components/Avatar/Avatar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{qE:()=>Avatar,Q5:()=>AvatarFallback,F$:()=>AvatarImage});var react=__webpack_require__("../../node_modules/react/index.js"),esm_extends=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),dist=__webpack_require__("../../node_modules/@radix-ui/react-context/dist/index.mjs"),react_use_callback_ref_dist=__webpack_require__("../../node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs"),react_use_layout_effect_dist=__webpack_require__("../../node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs"),react_primitive_dist=__webpack_require__("../../node_modules/@radix-ui/react-primitive/dist/index.mjs");const[$cddcb0b647441e34$var$createAvatarContext,$cddcb0b647441e34$export$90370d16b488820f]=(0,dist.b)("Avatar"),[$cddcb0b647441e34$var$AvatarProvider,$cddcb0b647441e34$var$useAvatarContext]=$cddcb0b647441e34$var$createAvatarContext("Avatar"),$cddcb0b647441e34$export$e2255cf6045e8d47=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeAvatar,...avatarProps}=props,[imageLoadingStatus,setImageLoadingStatus]=(0,react.useState)("idle");return(0,react.createElement)($cddcb0b647441e34$var$AvatarProvider,{scope:__scopeAvatar,imageLoadingStatus,onImageLoadingStatusChange:setImageLoadingStatus},(0,react.createElement)(react_primitive_dist.WV.span,(0,esm_extends.Z)({},avatarProps,{ref:forwardedRef})))})),$cddcb0b647441e34$export$2cd8ae1985206fe8=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeAvatar,src,onLoadingStatusChange=()=>{},...imageProps}=props,context=$cddcb0b647441e34$var$useAvatarContext("AvatarImage",__scopeAvatar),imageLoadingStatus=function $cddcb0b647441e34$var$useImageLoadingStatus(src){const[loadingStatus,setLoadingStatus]=(0,react.useState)("idle");return(0,react.useEffect)((()=>{if(!src)return void setLoadingStatus("error");let isMounted=!0;const image=new window.Image,updateStatus=status=>()=>{isMounted&&setLoadingStatus(status)};return setLoadingStatus("loading"),image.onload=updateStatus("loaded"),image.onerror=updateStatus("error"),image.src=src,()=>{isMounted=!1}}),[src]),loadingStatus}(src),handleLoadingStatusChange=(0,react_use_callback_ref_dist.W)((status=>{onLoadingStatusChange(status),context.onImageLoadingStatusChange(status)}));return(0,react_use_layout_effect_dist.b)((()=>{"idle"!==imageLoadingStatus&&handleLoadingStatusChange(imageLoadingStatus)}),[imageLoadingStatus,handleLoadingStatusChange]),"loaded"===imageLoadingStatus?(0,react.createElement)(react_primitive_dist.WV.img,(0,esm_extends.Z)({},imageProps,{ref:forwardedRef,src})):null})),$cddcb0b647441e34$export$69fffb6a9571fbfe=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeAvatar,delayMs,...fallbackProps}=props,context=$cddcb0b647441e34$var$useAvatarContext("AvatarFallback",__scopeAvatar),[canRender,setCanRender]=(0,react.useState)(void 0===delayMs);return(0,react.useEffect)((()=>{if(void 0!==delayMs){const timerId=window.setTimeout((()=>setCanRender(!0)),delayMs);return()=>window.clearTimeout(timerId)}}),[delayMs]),canRender&&"loaded"!==context.imageLoadingStatus?(0,react.createElement)(react_primitive_dist.WV.span,(0,esm_extends.Z)({},fallbackProps,{ref:forwardedRef})):null}));const $cddcb0b647441e34$export$be92b6f5f03c0fe9=$cddcb0b647441e34$export$e2255cf6045e8d47,$cddcb0b647441e34$export$3e431a229df88919=$cddcb0b647441e34$export$2cd8ae1985206fe8,$cddcb0b647441e34$export$fb8d7f40caaeea67=$cddcb0b647441e34$export$69fffb6a9571fbfe;var utils_dist=__webpack_require__("../utils/dist/index.mjs"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const Avatar=react.forwardRef(((_ref,ref)=>{let{className,...props}=_ref;return(0,jsx_runtime.jsx)($cddcb0b647441e34$export$be92b6f5f03c0fe9,{ref,className:(0,utils_dist.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",className),...props})}));Avatar.displayName=$cddcb0b647441e34$export$be92b6f5f03c0fe9.displayName;const AvatarImage=react.forwardRef(((_ref2,ref)=>{let{className,...props}=_ref2;return(0,jsx_runtime.jsx)($cddcb0b647441e34$export$3e431a229df88919,{ref,className:(0,utils_dist.cn)("aspect-square h-full w-full",className),...props})}));AvatarImage.displayName=$cddcb0b647441e34$export$3e431a229df88919.displayName;const AvatarFallback=react.forwardRef(((_ref3,ref)=>{let{className,...props}=_ref3;return(0,jsx_runtime.jsx)($cddcb0b647441e34$export$fb8d7f40caaeea67,{ref,className:(0,utils_dist.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted",className),...props})}));AvatarFallback.displayName=$cddcb0b647441e34$export$fb8d7f40caaeea67.displayName;try{Avatar.displayName="Avatar",Avatar.__docgenInfo={description:"",displayName:"Avatar",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Avatar/Avatar.tsx#Avatar"]={docgenInfo:Avatar.__docgenInfo,name:"Avatar",path:"src/components/Avatar/Avatar.tsx#Avatar"})}catch(__react_docgen_typescript_loader_error){}try{AvatarImage.displayName="AvatarImage",AvatarImage.__docgenInfo={description:"",displayName:"AvatarImage",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Avatar/Avatar.tsx#AvatarImage"]={docgenInfo:AvatarImage.__docgenInfo,name:"AvatarImage",path:"src/components/Avatar/Avatar.tsx#AvatarImage"})}catch(__react_docgen_typescript_loader_error){}try{AvatarFallback.displayName="AvatarFallback",AvatarFallback.__docgenInfo={description:"",displayName:"AvatarFallback",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Avatar/Avatar.tsx#AvatarFallback"]={docgenInfo:AvatarFallback.__docgenInfo,name:"AvatarFallback",path:"src/components/Avatar/Avatar.tsx#AvatarFallback"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>buttonVariants,z:()=>Button});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@radix-ui/react-slot/dist/index.mjs"),class_variance_authority__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/class-variance-authority/dist/index.mjs"),_itsrakesh_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../utils/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const buttonVariants=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__.j)("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:opacity-80",success:"bg-success text-success-foreground shadow hover:opacity-80",warning:"bg-warning text-warning-foreground shadow hover:opacity-80",info:"bg-info text-info-foreground shadow hover:opacity-80",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:opacity-80",outline:"border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:opacity-80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),Button=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref,ref)=>{let{className,variant,size,asChild=!1,...props}=_ref;const Comp=asChild?_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__.g7:"button";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Comp,{className:(0,_itsrakesh_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(buttonVariants({variant,size,className})),ref,...props})}));Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{asChild:{defaultValue:{value:"false"},description:"",name:"asChild",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"link" | "default" | "success" | "warning" | "info" | "destructive" | "outline" | "secondary" | "ghost" | null'}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"default" | "sm" | "lg" | "icon" | null'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"../utils/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),tailwind_merge__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/tailwind-merge/dist/lib/tw-merge.mjs");"undefined"!=typeof window&&react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect;function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function cn(...inputs){return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_1__.m)(function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}(inputs))}}}]);
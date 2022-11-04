document.addEventListener("DOMContentLoaded",(function(){let e,t,n,o,r,i=!1,a=!0,s=!1;const l=["address","article","aside","blockquote","details","dialog","dd","div","dl","dt","fieldset","figcaption","figure","footer","form","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","li","main","nav","ol","p","pre","section","table","ul"].join(", "),c=e=>{let t=e.offsetHeight;return t+=parseInt(window.getComputedStyle(e).getPropertyValue("margin-top")),t+=parseInt(window.getComputedStyle(e).getPropertyValue("margin-bottom")),t};function d(){if(t){const r=t;e.saveItemWithPresave(r,(()=>{o=$("#summernote").summernote("code"),r.clientData=n,r.content.text=o,r.content.preview_plain=function(e,t=90){return e.length<=t?e:e.substring(0,t)+"..."}(function(e){const t=document.implementation.createHTMLDocument("New").body;return t.innerHTML=e,t.textContent||t.innerText||""}(o)),r.content.preview_html=null}))}}function u(){return e.getComponentDataValueForKey("notes")||{}}$("#summernote").summernote({height:500,minHeight:null,maxHeight:null,focus:!0,tabDisable:!0,showDomainOnlyForAutolink:!1,toolbar:[["para",["style"]],["style",["bold","italic","underline","strikethrough","clear"]],["fontsize",["fontsize","fontname"]],["color",["color"]],["para",["ul","ol","paragraph"]],["height",["height"]],["insert",["table","link","hr","picture","video"]],["misc",["codeview","help"]]],fontNames:["Arial","Arial Black","Comic Sans MS","Courier New","Helvetica Neue","Helvetica","Impact","Lucida Grande","Monospace","Roboto","system-ui","Tahoma","Times New Roman","Verdana"],callbacks:{onInit:function(){},onImageUpload:function(){alert("Embedding encrypted images directly inside the editor is not presently supported. You can attach files to be outside the editor instead. For embedding images directly inside this note, use the Image button in the toolbar and insert the URL of an image hosted externally (outside of Standard Notes). For more information, visit https://standardnotes.com/help/36/how-do-i-attach-encrypted-files-to-my-notes.")}}}),$("#summernote").on("summernote.change",(function(){document.querySelectorAll(l).forEach((e=>e.setAttribute("dir","auto"))),i||d()})),$("textarea.note-codable").on("input",(()=>{d()})),e=new ComponentRelay({targetWindow:window,onReady:()=>{const t=e.platform;t&&document.body.classList.add(t)},handleRequestForContentHeight:()=>{const e=document.querySelector(".note-editable"),t=document.querySelector(".note-toolbar");if(!e||!t)return;let n=c(t)+40;for(const t of e.children)n+=c(t);return n}}),e.streamContextItem((l=>{!function(l){if(l.uuid!==r&&(o=null,a=!0,r=l.uuid),t=l,l.isMetadataUpdate)return;n=l.clientData;let c=l.content.text;if($(".note-editable").attr("spellcheck",JSON.stringify(l.content.spellcheck)),c==o)return;const d=$("#summernote");if(d){i=!0;const t=/<[a-z][\s\S]*>/i.test(c);s||(d.summernote("fullscreen.toggle"),s=!0),a&&!t&&(c=((c||"")+"").replace(/\t/g,"    ").replace(/\r\n|\r|\n/g,"<br />"));let n=!1;if(function(e){const t=(new DOMParser).parseFromString(`<body>${e}</body>`,"text/html");return Array.from(t.body.childNodes).some((e=>"SCRIPT"==e.nodeName))}(c)){const t=u()[r];t?n=t.trustUnsafeContent||!1:new Promise((e=>{new Stylekit.SKAlert({title:null,text:"We’ve detected that this note contains a script or code snippet which may be unsafe to execute. Scripts executed in the editor have the ability to impersonate as the editor to Standard Notes. Press Continue to mark this script as safe and proceed, or Cancel to avoid rendering this note.",buttons:[{text:"Cancel",style:"neutral",action:function(){e(!1)}},{text:"Continue",style:"danger",action:function(){e(!0)}}]}).present()})).then((t=>{t&&(function(t,n){const o=u();o[r]={trustUnsafeContent:n},e.setComponentDataValueForKey("notes",o)}(0,t),n=t)}))}else n=!0;if(!n)return d.summernote("code",""),void d.summernote("disable");d.summernote("enable"),d.summernote("code",c),a&&(d.summernote("commit"),a=!1),i=!1}}(l)}))}));
//# sourceMappingURL=dist.js.map
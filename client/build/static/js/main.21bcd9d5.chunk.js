(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{10:function(e,t,n){e.exports={Container:"_2RO6MHMjqGEKdx-kVfZ3in",formScale:"bEuPSsYtNoiQK5hxVfTgN",Close:"_1DsoHoeYn_5lfLoCzOSSEp",FormSt:"_3WWfz-P-TLTNIr_FZsI1X7",InputWrapper:"HuyyO-nMKHWO5JzeXUOyB",Illustration:"_1u_ja6MGRpjWV_nwM7_ghK",ImageWrapper:"_1ByYtjeP_mfl7cj31C1Y7h",Infos:"_3n4QGcPPS2FUAUaSW9_7Hy",Error:"_2nTd2gFT7pN5Dm0V8-LK5P",errorAnimate:"_1G4MIwid5vF9NFgkhc8JDc",InfosMobile:"_3rJd2fFhsBdfHsffAUhEVM"}},102:function(e,t,n){e.exports={range:"_3aul8Rriu0TunbMtF5S5IU",blue:"_1edzOGl8ffcUXR6Urxv2sa",ltpurple:"_17RKN1iSSpZM2BLFZ9BEVF",purple:"lmPqfN_5XjXjb4PbXviW3",pink:"_2uUFGavESPkOiTJaDoFw-v"}},103:function(e,t,n){"use strict";n.r(t);var a=n(5),i=n(0),c=n.n(i),o=n(12),r=n.n(o),s=n(3),l=n(4),u=n(7),d=n(25),j=n(26),h=n.n(j),b=n(56),f=n.n(b),m=n(1),g=function(e){var t=e.children;return Object(m.jsx)("section",{className:f.a.Modal,children:t})},p=n(19),O=function e(t,n){var a=this;Object(p.a)(this,e),this.set=function(){window.localStorage.setItem(a.key,a.value)},this.get=function(){return window.localStorage.getItem(a.key)},this.remove=function(){window.localStorage.removeItem(a.key)},this.key=t,this.value=n},v=n(57),x=n.n(v),y=function(e){var t=e.marginLeft,n=e.marginTop;return Object(m.jsxs)("div",{className:x.a.ldsEllipsis,style:{marginLeft:t,marginTop:n},children:[Object(m.jsx)("div",{}),Object(m.jsx)("div",{}),Object(m.jsx)("div",{}),Object(m.jsx)("div",{})]})},w={lofi:["https://media.giphy.com/media/kbtysky2x8fZLW8osP/giphy.gif","https://media.giphy.com/media/boJT0xmU97bUlb5HjU/giphy-downsized-large.gif","https://media.giphy.com/media/QHE5gWI0QjqF2/source.gif","https://media.giphy.com/media/11kEuHSQAXXiGQ/source.gif","https://media.giphy.com/media/ZVik7pBtu9dNS/source.gif"],metal:["https://media.giphy.com/media/SUCLxF4AVXCTWUyTGC/giphy.gif","https://media.giphy.com/media/gui67fZ3xIneM/giphy.gif","https://media.giphy.com/media/MWHSctvIxbWHS/giphy.gif","https://media.giphy.com/media/idwHsrrEkqQws34iPk/giphy.gif","https://media.giphy.com/media/8p9O3TyoTaNlXDwmSj/giphy.gif"],war:["https://media.giphy.com/media/j9KYEf8WA1pxC/giphy.gif","https://media.giphy.com/media/zy895daz2IBJC/giphy.gif","https://media.giphy.com/media/joxThEgTJuSBO/giphy.gif"],techno:["https://media.giphy.com/media/gpZyDJVTFTRqE/giphy.gif","https://media.giphy.com/media/3oFzlUASnAYgzmujja/giphy.gif","https://media.giphy.com/media/M9xtw95RB2ZMc/giphy.gif","https://media.giphy.com/media/M9xtw95RB2ZMc/giphy.gif","https://media.giphy.com/media/gq6wvR7TClLG0/giphy.gif"]},S=n.p+"static/media/add.c857c736.gif",N=n.p+"static/media/expand.06a9642b.gif",_=n.p+"static/media/heart.0461ea38.gif",C=n.p+"static/media/snow.bef72b12.gif",E=n.p+"static/media/placeholder.c3e53334.jpg",k=n(21),F=n.n(k),I=n(33),T=n(58),L=n.n(T).a.create({baseURL:"https://glacial-everglades-26160.herokuapp.com"}),M=function(){var e=Object(I.a)(F.a.mark((function e(t,n){var a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.get("/get-songs");case 3:a=e.sent,console.log(a),t(n(a.data.data)),e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}(),P=function(e){return{type:"CHANGE_BACKGROUND",payload:e}},A=function(e){return{type:"GET_CURRENT_SONG",payload:e}},G=function(e){return{type:"GET_ALL_SONGS",payload:e}},R=function(e){return{type:"SET_INFO_MENU",payload:e}},D=function(e){return{type:"IS_FAVORITE",payload:e}},V=function(e){return{type:"PLAYER_POSITION",payload:e}},B=function(e){return{type:"PLAY_FROM_FAVS",payload:e}},U=function(e){return{type:"CHANGE_VOLUME",payload:e}},W=function(e){return{type:"IFRAME_LOADING",payload:e}},Y=n(20),z=n.n(Y),J=n(61),X=n.n(J),H=n(18),q=n.p+"static/media/illustration.dbfb604d.jpg",Q=n.p+"static/media/youtube.909dd90f.png",Z=n.p+"static/media/close.f741c2bd.png",K=n(10),$=n.n(K),ee=function(e,t){var n=t||document.getElementsByTagName("iframe")[0],a="https://www.youtube.com/embed/".concat(e,"?enablejsapi=1&origin=http%3A%2F%2Flocalhost%3A3000&widgetid=1");n.src=a},te=[{value:"lofi",label:"Lofi"},{value:"metal",label:"Metal"},{value:"war",label:"War"},{value:"techno",label:"Techno"}],ne=function(e){var t=e.handleClose,n=Object(s.b)(),a=Object(i.useRef)(),c=Object(i.useState)(!1),o=Object(l.a)(c,2),r=o[0],d=o[1],j=Object(i.useState)(""),h=Object(l.a)(j,2),b=h[0],f=h[1],g=Object(u.d)(),p=function(){var e=Object(I.a)(F.a.mark((function e(a){var i;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(a),O(a.url)){e.next=3;break}return e.abrupt("return");case 3:return d((function(e){return!0})),e.prev=4,e.next=7,L.post("/add-song",a);case 7:i=e.sent,console.log(i),v(i.data.data),d((function(e){return!1})),setTimeout((function(){t()}),850),setTimeout((function(){g.show("Playlist Added \ud83d\ude05",{type:"success"})}),1e3),M(n,G),e.next=22;break;case 16:e.prev=16,e.t0=e.catch(4),console.log(e.t0),d((function(e){return!1})),setTimeout((function(){t()}),950),setTimeout((function(){g.show("Something went wrong \ud83d\ude1e",{type:"error"})}),1e3);case 22:case"end":return e.stop()}}),e,null,[[4,16]])})));return function(t){return e.apply(this,arguments)}}(),O=function(e){console.log("From validate",e);return e.match(/^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/)?(console.log("valid url"),!0):(f("Please Provide a valid URL"),setTimeout((function(){f("")}),1500),!1)},v=function(e){console.log("Setting the current song"),n(A(e)),n(P(e.genre)),ee(e.youtubeId)};return Object(m.jsxs)("div",{className:$.a.Container,children:[Object(m.jsx)("img",{onClick:t,className:$.a.Close,src:Z,alt:"close"}),Object(m.jsx)(H.d,{initialValues:{name:"",url:"",genre:"lofi"},onSubmit:function(e,t){var n=t.setSubmitting;setTimeout((function(){p(e),n(!1)}),400)},children:function(e){var t=e.isSubmitting;return Object(m.jsxs)(H.c,{className:$.a.FormSt,children:[Object(m.jsxs)("div",{className:$.a.InfosMobile,children:[Object(m.jsx)("img",{src:Q,alt:"youtube"}),Object(m.jsx)("h2",{children:"Share Your Favorite PlayList From YouTube"})]}),Object(m.jsxs)("div",{className:$.a.InputWrapper,children:[Object(m.jsxs)("label",{htmlFor:"name",children:["Name",Object(m.jsx)("span",{children:"*"})]}),Object(m.jsx)(H.b,{type:"text",name:"name",id:"name",placeholder:"A Name for The Playlist",required:!0}),Object(m.jsx)(H.a,{name:"name",component:"div"})]}),Object(m.jsxs)("div",{className:$.a.InputWrapper,children:[Object(m.jsxs)("label",{htmlFor:"url",children:["PlayList URL",Object(m.jsx)("span",{children:"*"})]}),Object(m.jsx)(H.b,{type:"url",name:"url",id:"url",placeholder:"https://www.youtube.com/watch?v=IjP89xahSIM",required:!0}),b&&Object(m.jsx)("span",{className:$.a.Error,children:b})]}),Object(m.jsxs)("div",{className:$.a.InputWrapper,children:[Object(m.jsxs)("label",{htmlFor:"name",children:["Genre",Object(m.jsx)("span",{children:"*"})]}),Object(m.jsx)(H.b,{as:"select",name:"genre",required:!0,children:te.map((function(e){return Object(m.jsx)("option",{value:e.value,children:e.label},z()())}))})]}),Object(m.jsx)("button",{type:"submit",disabled:t,ref:a,children:r?Object(m.jsx)(X.a,{size:12,color:"white"}):"Submit"})]})}}),Object(m.jsxs)("section",{className:$.a.Illustration,children:[Object(m.jsx)("div",{className:$.a.ImageWrapper,children:Object(m.jsx)("img",{src:q,alt:"art illustration music"})}),Object(m.jsxs)("div",{className:$.a.Infos,children:[Object(m.jsx)("img",{src:Q,alt:"youtube"}),Object(m.jsx)("h2",{children:"Share Your Favorite PlayList From YouTube"})]})]})]})},ae=n(40),ie=n.n(ae),ce=function(e){var t=e.handleCloseAlertConfirm,n=e.handlePlayFromFavs,a=e.isPlayingFromFavs;return Object(m.jsx)("div",{className:ie.a.Container,children:Object(m.jsxs)("div",{className:ie.a.Alert,children:[Object(m.jsx)("h1",{children:a?"You want to stop playing from your Favorites?":"You want to play from your Favorites?"}),Object(m.jsxs)("div",{className:ie.a.Btns,children:[Object(m.jsx)("button",{onClick:n,children:"Yes"}),Object(m.jsx)("button",{onClick:t,children:"No"})]})]})})},oe=n(17),re=n.n(oe),se=n.p+"static/media/filter.4b1e070e.jpg";function le(e){var t=e.items,n=e.handleClose,a=Object(s.b)(),i=Object(u.d)(),c=Object(s.c)((function(e){return e})).filter;return Object(m.jsxs)("div",{className:re.a.Container,children:[Object(m.jsx)("img",{onClick:n,className:re.a.Close,src:Z,alt:"close"}),Object(m.jsx)("div",{className:re.a.Title,children:Object(m.jsx)("h2",{children:"Choose A Filter"})}),Object(m.jsx)("div",{className:re.a.Grid,children:t.map((function(e){return Object(m.jsxs)("div",{className:re.a.Card,onClick:function(){return new O("filter",t=e).set(),a({type:"SET_FILTER",payload:t}),n(),void i.show("".concat(t," was applied successfully \ud83d\ude42"),{type:"success",timeout:2e3});var t},style:{opacity:c===e?"1":".85"},children:[Object(m.jsx)("img",{src:se,alt:"card"}),Object(m.jsx)("div",{className:re.a.FilterName,style:{border:c===e?"3px solid #ed9d60":"3px solid transparent",boxShadow:c===e?"1px 2px 10px rgba(0,0,0,.6)":"none"},children:Object(m.jsx)("h4",{children:e})})]},z()())}))})]})}var ue=n(22),de=n.n(ue),je=n.p+"static/media/coffee.aa5f5c92.png",he=n.p+"static/media/metal.3096119b.png",be=n.p+"static/media/techno.e9f706a7.png",fe=n.p+"static/media/war.0397d17a.png",me=n.p+"static/media/disk.ac7241ad.png",ge={lofi:je,metal:he,techno:be,war:fe},pe={lofi:"Pacifico",metal:"'Fira Sans', sans-serif",techno:"'Share Tech Mono', monospace",war:"'Warnes', cursive"},Oe={lofi:"#c55e41",metal:"#5b2c50",techno:"#4b9ac5",war:"#947f26"},ve=function(e){var t=e.style,n=e.details,i=Object(s.b)(),c=Object(s.c)((function(e){return e})),o=c.infoMenuPosition;c.currentSong;return Object(m.jsxs)("div",{className:de.a.details,style:t&&Object(a.a)({},t),children:["mobile"===o&&Object(m.jsx)("img",{onClick:function(){i(R("hidden"))},className:de.a.Close,src:Z,alt:"close"}),Object(m.jsx)("h1",{children:n&&n.name}),Object(m.jsxs)("div",{className:de.a.IconWrapper,children:[Object(m.jsx)("img",{src:n&&ge[n.genre],alt:n&&n.genre}),Object(m.jsx)("h4",{style:{fontFamily:n&&pe[n.genre],color:n&&Oe[n.genre]},children:n&&n.genre})]}),Object(m.jsx)("div",{className:de.a.Disk,children:Object(m.jsx)("img",{className:de.a.DiskImg,src:n&&n.thumbnail||me,alt:"disk"})})]})},xe=n(44),ye=n.n(xe),we=n.p+"static/media/lofi.ae668cdb.jpg",Se=n.p+"static/media/metal.90841a4e.jpg",Ne=n.p+"static/media/techno.a958f421.jpg",_e=n.p+"static/media/war.c6aee430.jpg",Ce=function(e){var t=e.radioCardStyle,n=e.imageWrapperStyle,i=e.titleStyle,c=e.imageStyle,o=e.imageSrc,r=e.value,l=e.label,u=e.handleOnChange,d=Object(s.c)((function(e){return e.genre}));return Object(m.jsxs)("div",{style:t,onChange:u,id:r,onClick:u,children:[Object(m.jsx)("input",{type:"radio",name:"genre",value:r,checked:d===r,onChange:function(){}}),Object(m.jsxs)("div",{style:n,children:[Object(m.jsx)("div",{id:r,style:Object(a.a)(Object(a.a)({},i),{},{backgroundColor:d===r?"transparent":"rgba(0,0,0, 0.85)",border:d===r?"5px solid lightblue":"none"}),children:Object(m.jsx)("h4",{style:{textShadow:"1px 2px 12px rgba(0,0,0,.9)"},children:l})}),Object(m.jsx)("img",{src:o,alt:r,style:c})]})]})},Ee={maxHeight:"100%",width:"15vw",overflowY:"scroll",overflowX:"hidden"},ke={height:"25vh",width:"25vh",borderRadius:"12px",display:"flex",alignItems:"center",cursor:"pointer"},Fe={width:"100%",height:"100%"},Ie={position:"absolute",height:"100%",width:"100%",top:0,left:0,backgroundColor:"rgba(0,0,0, 0.85)",border:"5px solid lightblue",color:"white",margin:"0",fontSize:"1em",display:"flex",justifyContent:"center",alignItems:"center",fontFamily:"'Fira Sans'"},Te={marginLeft:"1rem",boxShadow:"1px 1px 35px rgba(0,0,0,.3)",position:"relative"},Le=[{value:"lofi",label:"Lofi",icon:we},{value:"metal",label:"Metal",icon:Se},{value:"war",label:"War",icon:_e},{value:"techno",label:"Techno",icon:Ne}],Me=function(e){var t=e.handleChangeBG,n=e.customStyle,i=function(e){"DIV"===e.target.tagName&&t(e.target.id),"INPUT"===e.target.tagName&&t(e.target.value),"IMG"===e.target.tagName&&t(e.target.alt)};return Object(m.jsx)("form",{className:ye.a.wrapper,style:n?Object(a.a)(Object(a.a)({},Ee),n):Ee,children:Le.map((function(e){return Object(m.jsx)(Ce,{radioCardStyle:ke,imageWrapperStyle:Te,titleStyle:Ie,imageStyle:Fe,imageSrc:e.icon,value:e.value,label:e.label,handleOnChange:i},z()())}))})},Pe=n.p+"static/media/static-noise-shot.85477827.wav",Ae=JSON.parse(new O("favorites",null).get())||{lofi:[],metal:[],techno:[],war:[]},Ge=function(e,t,n){if(console.log("checking if current song is in fav list"),console.log("The current song is",e),e){var a=e.id,i=e.genre;if(Ae){var c=Ae[i].filter((function(e){return e.id===a}));console.log(c),c.length?t(n(!0)):t(n(!1))}}},Re=function(e){var t=e.customStyle,n=Object(s.b)(),a=Object(u.d)(),c=Object(s.c)((function(e){return e})),o=c.currentSong,r=c.isPlayingFromFavs,d=c.songs,j=Object(i.useState)(new Audio(Pe)),h=Object(l.a)(j,1)[0],b=function(e){return!!d[e].length||(a.show("there's no playlist of this genre in your favorite \ud83d\ude32",{type:"error"}),!1)};return Object(m.jsx)(Me,{handleChangeBG:function(e){r&&!b(e)||(n(W({loading:!0,direction:"".concat(e," Genre")})),n(P(e)),n(A(d[e][0])),h.play(),ee(d[e][0].youtubeId),document.getElementsByTagName("iframe")[0].addEventListener("load",(function(t){n(W({loading:!1,direction:"".concat(e," Genre")}))})),Ge(o,n,D),new O("genre",e).set())},customStyle:t})},De=n(45),Ve=n.n(De),Be=n.p+"static/media/developer.f12f8412.jpg",Ue=function(){return Object(m.jsx)("a",{href:"https://github.com/Midoukh",target:"_blank",rel:"noreferrer",className:Ve.a.Wrapper,children:Object(m.jsxs)("div",{className:Ve.a.Flexer,children:[Object(m.jsx)("img",{src:Be,alt:"developer"}),Object(m.jsx)("h3",{children:"@ahmedkhelili"})]})})},We={"3D":"Effect3D",Glitch:"EffectGlitch",vhs:"EffectVHS",Gb:"EffectGB"},Ye={marginTop:".9rem",height:"40px",width:"40px",cursor:"pointer",opacity:".5",transition:"1s all cubic-bezier(1, 0, 0, 1)"},ze=function(){var e=Object(u.d)(),t=Object(s.c)((function(e){return e})),n=t.genre,c=t.isPlayingFromFavs,o=t.filter,r=t.currentSong,j=t.infoMenuPosition,b=Object(s.b)(),f=Object(i.useState)(!1),p=Object(l.a)(f,2),v=p[0],x=(p[1],Object(i.useState)(null)),k=Object(l.a)(x,2),F=k[0],I=k[1],T=Object(i.useState)(0),L=Object(l.a)(T,2),P=L[0],A=L[1],R=Object(i.useState)(!1),D=Object(l.a)(R,2),V=D[0],U=D[1],W=Object(i.useState)(!1),Y=Object(l.a)(W,2),z=Y[0],J=Y[1],X=Object(i.useState)(!1),H=Object(l.a)(X,2),q=H[0],Q=H[1],Z=Object(i.useState)(!1),K=Object(l.a)(Z,2),$=K[0],ee=K[1],te=Object(i.useState)(JSON.parse(new O("favorites",null).get())),ae=Object(l.a)(te,1)[0],ie=function(e){e.target.style.opacity=1},oe=function(e){e.target.style.opacity=.5},re=function(){Q((function(e){return!1}))};return Object(i.useEffect)((function(){var e=setTimeout((function(){!function(){var e=w[n].length;A(P+1===e?0:function(e){return e+1})}()}),6e4);return function(){clearTimeout(e)}}),[P,z,o]),console.log(We[o]),Object(m.jsxs)(m.Fragment,{children:[z&&Object(m.jsx)(g,{children:Object(m.jsx)(ne,{handleClose:function(){return J(!1)}})}),q&&Object(m.jsx)(ce,{handleCloseAlertConfirm:re,handlePlayFromFavs:function(){if(c)return M(b,G),b(B(!1)),void re();console.log("Not playing from favs"),b(G(ae)),b(B(!0)),re()},isPlayingFromFavs:c}),$&&Object(m.jsx)(g,{children:Object(m.jsx)(le,{items:["3D","Glitch","vhs","Gb"],handleClose:function(){ee((function(e){return!1}))}})}),"mobile"===j&&Object(m.jsx)(g,{children:Object(m.jsx)(ve,{details:r,style:{display:"block",position:"relative",borderRadius:"10px",padding:"4rem"}})}),"mobile-genres"===j&&Object(m.jsx)(g,{children:Object(m.jsx)(Re,{customStyle:{display:"block",overflowY:"initial"}})}),Object(m.jsxs)("div",{className:h.a.bg,children:[Object(m.jsx)(Ue,{}),Object(m.jsxs)("div",{className:h.a.SideMenu,children:[Object(m.jsx)("img",{"data-tip":"Add A Playlist",src:S,alt:"add",style:Ye,onMouseEnter:ie,onMouseLeave:oe,onClick:function(){console.log("clicking adding image"),J((function(e){return!0}))}}),Object(m.jsx)("img",{"data-tip":"FullScreen",src:N,alt:"full screen",style:Object(a.a)(Object(a.a)({},Ye),{},{top:"3.5rem"}),onMouseEnter:ie,onMouseLeave:oe,onClick:function(){var e=document.documentElement;V?(document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen(),U((function(e){return!1}))):(e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen(),U((function(e){return!0})))}}),Object(m.jsx)("img",{"data-tip":"Play From Favorites",src:_,alt:"heart",style:Object(a.a)(Object(a.a)({},Ye),{},{top:"7rem"}),onMouseEnter:ie,onMouseLeave:oe,onClick:function(){var t=!1,n=JSON.parse(new O("favorites",null).get());if(n)for(var a in n)if(n[a].length){t=!0;break}t?Q((function(e){return!0})):e.show("Your Favorite list is empty \ud83e\udd26",{type:"info"})}}),Object(m.jsx)("img",{"data-tip":"Change BG Filter",src:C,alt:"change background filter",style:Object(a.a)(Object(a.a)({},Ye),{},{top:"10.5rem"}),onMouseEnter:ie,onMouseLeave:oe,onClick:function(){ee((function(e){return!0}))}}),Object(m.jsx)(d.a,{}),Object(m.jsx)(d.a,{}),Object(m.jsx)(d.a,{}),Object(m.jsx)(d.a,{})]}),v?Object(m.jsx)(y,{marginLeft:"50%",marginTop:"20%"}):Object(m.jsxs)("figure",{className:"".concat(h.a.Effect," ").concat(h.a[We[o]]),style:{backgroundImage:"url('".concat(F?E:w[n][P],"')")},children:[Object(m.jsx)("img",{src:w[n][P],alt:"Back ground gif",onError:function(e){try{"error"===e.type&&(e.target.src=E,I("broken-image"))}catch(F){console.log(F)}},onLoad:function(e){return I("")}}),Object(m.jsx)("figcaption",{children:"BackGound"})]})]})]})},Je=n(66),Xe=n.n(Je),He=n(65),qe=n.n(He),Qe=n(41),Ze=n.n(Qe),Ke=n(62),$e=n.n(Ke),et=function(e){var t=e.pause;return Object(m.jsxs)("div",{className:$e.a.pause,onClick:t,children:[Object(m.jsx)("div",{}),Object(m.jsx)("div",{})]})},tt=n(63),nt=n.n(tt),at=n.p+"static/media/play.1b4fe477.svg",it=function(e){var t=e.play;return Object(m.jsx)("div",{className:nt.a.play,onClick:t,children:Object(m.jsx)("img",{src:at,alt:"Play button"})})},ct=n(23),ot=n.n(ct),rt=n.p+"static/media/next.c8c40aa2.svg",st=n.p+"static/media/previous.4bde8873.svg",lt=n.p+"static/media/repeat.b0f8c678.svg",ut=(n(102),function(e){var t=e.handleChangeVolume,n=Object(s.b)(),a=Object(s.c)((function(e){return e.volume})),c=Object(i.useState)(a||50),o=Object(l.a)(c,2),r=o[0],u=o[1];return Object(i.useEffect)((function(){})),Object(m.jsx)("div",{children:Object(m.jsx)("input",{id:"volume-changer",type:"range",min:"0",max:"100",value:a,class:"range blue",onChange:function(e){u((function(t){return e.target.value})),new O("volume",r).set(),n(U(r)),t(e.target.value)}})})}),dt=function(e){var t=e.handleMuteUnmute,n=e.handleChangeVolume,a=Object(s.c)((function(e){return e.volume})),c=Object(i.useState)(a),o=Object(l.a)(c,2),r=o[0],u=(o[1],Object(s.b)()),d=Object(i.useState)(JSON.parse(new O("muted").get())||!1),j=Object(l.a)(d,2),h=j[0],b=j[1],f=Object(i.useRef)();return Object(i.useEffect)((function(){console.log(f.current.checked),!0===h&&(console.log("True is"),f.current.setAttribute("checked",!0),t(!0))}),[]),Object(m.jsxs)("div",{className:"mt-icon-music",style:{fontSize:"9px"},children:[Object(m.jsx)("input",{id:"ujyldvzw.1.1",type:"checkbox",onChange:function(e){b((function(t){return e.target.checked})),t(e.target.checked),u({type:"MUTE",payload:e.target.checked}),new O("muted",e.target.checked).set();var a=document.getElementById("volume-changer");!0===e.target.checked?(u(U(0)),n(0),a.setAttribute("value",0)):!1===e.target.checked&&(u(U(r)),n(r))},ref:f}),Object(m.jsx)("label",{for:"ujyldvzw.1.1"})]})},jt=function(e){var t=e.isPausing,n=e.isLooping,a=e.handleLoopPlaying,i=e.play,c=e.pause,o=e.nextF,r=e.previousF,l=e.handleChangeVolume,u=e.handleMuteUnmute,d=Object(s.c)((function(e){return e})).isIframeLoading;return Object(m.jsxs)("main",{className:ot.a.controls,children:[Object(m.jsx)(dt,{handleMuteUnmute:u,handleChangeVolume:l}),Object(m.jsx)(ut,{handleChangeVolume:l}),d.loading?Object(m.jsx)(Ze.a,{size:30,color:"#4895b9"}):Object(m.jsx)("img",{className:ot.a.Button,src:st,alt:"Previous",onClick:r}),d.loading?Object(m.jsx)(Ze.a,{size:45,color:"#4895b9"}):t?Object(m.jsx)(et,{pause:c}):Object(m.jsx)(it,{play:i}),d.loading?Object(m.jsx)(Ze.a,{size:30,color:"#4895b9"}):Object(m.jsx)("img",{className:ot.a.Button,src:rt,alt:"Next",onClick:o}),Object(m.jsxs)("figure",{className:ot.a.Figure,children:[Object(m.jsx)("img",{className:ot.a.Button,src:lt,alt:"Repeat",onClick:a}),Object(m.jsx)("figcaption",{style:{color:n?"#074e07":"#920505",textShadow:n?"2px 2px 10px #146914cb":"2px 2px 10px #a72020d5"},children:n?"On":"OFF"})]})]})},ht=n(27),bt=n.n(ht),ft=n(24),mt=n.n(ft),gt=n.p+"static/media/minimize.c7db24e8.png",pt=function(e){var t=e.handleAddCurrentSongToFavorites,n=Object(s.c)((function(e){return e})),a=(n.currentSong,n.isFavorite),c=Object(i.useState)(a),o=Object(l.a)(c,2),r=(o[0],o[1],Object(i.useRef)());return Object(i.useEffect)((function(){r.current.checked=a})),Object(m.jsxs)("div",{class:"mt-heart",style:{position:"absolute",left:"35%",top:"25%"},children:[Object(m.jsx)("input",{id:"ujyldvzw.1.1.6",type:"checkbox",onClick:function(e){console.log(e.target.checked),t(e)},ref:r}),Object(m.jsx)("label",{for:"ujyldvzw.1.1.6"})]})},Ot=n(64),vt=n.n(Ot),xt=function(){return Object(m.jsxs)("details",{className:vt.a.Details,onToggle:function(e){e.target.hasAttribute("open")?e.target.style.top="0":e.target.style.top="40%"},"data-testid":"details",children:[Object(m.jsx)("summary",{children:"ShortCuts"}),Object(m.jsxs)("dl",{children:[Object(m.jsx)("dt",{children:"Play/Pause:"}),Object(m.jsx)("dd",{children:"SpaceBar"}),Object(m.jsx)("dt",{children:"Next/Previous"}),Object(m.jsx)("dd",{children:"Right/Left arrows"})]})]})},yt=function(){var e=Object(s.b)(),t=Object(u.d)(),n=Object(i.useState)(!1),c=Object(l.a)(n,2),o=c[0],r=c[1],d=Object(i.useState)(JSON.parse(new O("favorites",null).get())||{lofi:[],metal:[],techno:[],war:[]}),j=Object(l.a)(d,1)[0],h=Object(s.c)((function(e){return e})),b=h.genre,f=h.currentSong,g=h.playerPosition,p={lofi:we,war:_e,techno:Ne,metal:Se},v=function(){console.log("Now removing");var n=f.id,i=f.genre,c=Object(a.a)({},j);for(var o in c)if(console.log(o),o===i){console.log("Found what I want to remove");var r=c[o].filter((function(e){return e.id!==n}));c[o]=r}console.log(c),new O("favorites",JSON.stringify(c)).set(),e(D(!1)),t.show("Song Removed From Your Favorites!",{type:"info"})};return Object(i.useEffect)((function(){Ge(f,e,D)}),[b,f]),Object(m.jsxs)("div",{className:mt.a.Album,style:{transform:"hidden"===g?"translateY(28.2vh)":"translateY(0vh)"},children:[Object(m.jsxs)("div",{className:mt.a.cadre,children:[Object(m.jsx)("div",{className:mt.a.Filter,onMouseEnter:function(){r((function(e){return!0}))},onMouseLeave:function(){r((function(e){return!1}))},style:{opacity:o?"1":"0"},children:f&&Object(m.jsx)(pt,{handleAddCurrentSongToFavorites:function(n){var i=n.target.checked,c=f.genre;if(i){var o=Object(a.a)({},j);o[c].push(f),new O("favorites",JSON.stringify(o)).set(),e(D(!0)),t.show("Song Added to Your Favorites!",{type:"success"})}else i&&n.target.getAttribute("checked")||v()}})}),Object(m.jsx)("img",{className:mt.a.AlbumPic,src:p[b],alt:"Album music"})]}),Object(m.jsx)(xt,{}),Object(m.jsx)("img",{src:gt,alt:"minimize",className:mt.a.Minimize,onClick:function(){console.log("Clicking the minimize"),"normal"===g?(console.log("It is true"),e(V("hidden"))):e(V("normal"))},style:{transform:"hidden"===g?"rotateZ(180deg)":"rotateZ(0)"}})]})},wt=n(16),St=n.n(wt),Nt=function(e){var t=e.time,n=e.currenTime,a=e.handlePlayVideoAt,c=Object(s.c)((function(e){return e})),o=c.isPlayingFromFavs,r=c.isIframeLoading,u=Object(i.useState)(null),d=Object(l.a)(u,2),j=(d[0],d[1],Object(i.useState)("")),h=Object(l.a)(j,2),b=h[0],f=h[1],g=Object(i.useRef)(),p=Object(i.useRef)();return Object(i.useEffect)((function(){f(new Date(1e3*n).toISOString().substr(11,8)),function(){var e=1e3*t,a=1e3*n,i=30;window.innerWidth<=800&&(i=60);var c=a/e*i;g.current.style.width="".concat(c,"vw")}()}),[t,n]),Object(m.jsxs)("section",{className:St.a.Container,children:[Object(m.jsxs)("span",{className:St.a.Info,children:[o?"(\u2139 Now playing from your Fav Playlists)":"",r.loading?!o&&"Playing the ".concat(r.direction," Playlist..."):""]}),Object(m.jsx)("h3",{className:St.a.Num,children:b}),Object(m.jsx)("div",{className:St.a.Progress,children:Object(m.jsx)("div",{className:[St.a.Progress2,St.a.ProgressMoved].join(" "),ref:p,onClick:a,children:Object(m.jsx)("div",{className:St.a.ProgressBar2,ref:g})})}),Object(m.jsx)("h3",{className:St.a.Num,children:t&&new Date(1e3*t).toISOString().substr(11,8)})]})},_t=n.p+"static/media/info.df517275.png",Ct=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e})),n=t.genre,a=t.volume,c=t.songs,o=t.currentSong,r=t.playerPosition,u=t.infoMenuPosition,d=(t.isAddingPlaylist,Object(i.useState)(!1)),j=Object(l.a)(d,2),h=j[0],b=j[1],f=Object(i.useState)(!1),g=Object(l.a)(f,2),p=g[0],O=g[1],v=Object(i.useState)(0),x=Object(l.a)(v,2),y=x[0],w=x[1],S=Object(i.useState)(c[n][y]&&c[n][y].youtubeId),N=Object(l.a)(S,2),_=N[0],C=N[1],E=Object(i.useState)(!1),k=Object(l.a)(E,2),F=(k[0],k[1],Object(i.useState)(null)),I=Object(l.a)(F,2),T=I[0],L=I[1],M=Object(i.useState)(null),P=Object(l.a)(M,2),G=P[0],V=P[1],B=Object(i.useState)(!1),U=Object(l.a)(B,2),Y=U[0],z=U[1],J=function(){var e=document.createElement("script");e.src="https://www.youtube.com/iframe_api",window.onYouTubeIframeAPIReady=X;var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)},X=function(){G||V(new window.YT.Player("youtube-player-".concat(_),{videoId:_,events:{onReady:H}})),O(!1)},H=function(e){e.target.playVideo(),e.target.setVolume(a),b(!0),$(e.target)},q=function(){console.log("PLAYING"),G.playVideo&&(b(!0),G.playVideo())},Q=function(){console.log("PAUSING"),G.pauseVideo&&(b(!1),G.pauseVideo(),L(G.getCurrentTime()))},Z=function(){var t=G.getIframe();e(W({loading:!0,direction:"next"})),t.addEventListener("load",(function(t){console.log("iframe Loaded"),e(W({loading:!1,direction:"next"}))}));var a,i=c[n].length;y+1===i?(w(0),e(A(c[n][0]))):(w((function(e){return e+1})),e(A(c[n][y+1]))),y+1<i?(a=c[n][y+1].youtubeId,C((function(e){return c[n][y+1].youtubeId}))):(a=c[n][0].youtubeId,C((function(e){return c[n][0].youtubeId}))),ee(a,t),Ge(o,e,D)},K=function(){var t=G.getIframe();e(W({loading:!0,direction:"previous"})),t.addEventListener("load",(function(t){console.log("iframe Loaded"),e(W({loading:!1,direction:"previous"}))})),y>0&&(w((function(e){return e-1})),C((function(e){return c[n][y-1].youtubeId})),ee(c[n][y-1].youtubeId,t),e(A(c[n][y-1])),Ge(o,e,D))},$=function(e){e&&setInterval((function(){L((function(t){return e.getCurrentTime()+1})),e.getCurrentTime()>6&&e.getDuration()-e.getCurrentTime()<1&&(console.log("Video ended"),Y?(console.log("Yes we looping"),L((function(e){return 0})),e.seekTo(0),e.playVideo()):console.log("not looping"))}),500)},te=function(e){switch(console.log(e.key),e.key){case" ":G&&(console.log("There is an iframe"),h?Q():q());break;case"ArrowLeft":K();break;case"ArrowRight":Z()}};return Object(i.useEffect)((function(){return O(!0),window.YT?X():J(),e(A(c[n][y])),document.addEventListener("keyup",te),function(){return document.removeEventListener("keyup",te)}}),[te]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(yt,{}),Object(m.jsxs)("main",{onKeyUp:te,className:bt.a.Player,style:{transform:"hidden"===r?"translateY(29vh)":"translateY(0vh)"},children:["normal"===u?Object(m.jsx)(ve,{details:o}):Object(m.jsxs)("div",{className:bt.a.MobileIcons,children:[Object(m.jsx)("img",{className:bt.a.InfoIcon,src:_t,alt:"info",onClick:function(){e(R("mobile"))}}),Object(m.jsx)("img",{src:fe,alt:"genre",onClick:function(){e(R("mobile-genres"))}})]}),G?Object(m.jsx)(Nt,{time:G.playerInfo.duration,currenTime:T,handlePlayVideoAt:function(e){if(G.seekTo){console.log("changing the time");var t=100*e.nativeEvent.offsetX/window.innerWidth,n=30;window.innerWidth<=800&&(n=60);var a=t/n*G.getDuration();G.seekTo(a)}}}):Object(m.jsx)("div",{className:bt.a.WrapperLoader,children:Object(m.jsx)(qe.a,{size:15,color:"#50a1c0"})}),p?Object(m.jsx)(Xe.a,{size:90,loading:!0,color:"#ffffff"}):Object(m.jsx)(jt,{isPausing:h,isLooping:Y,play:q,pause:Q,nextF:Z,previousF:K,handleChangeVolume:function(e){G.setVolume(parseInt(e))},handleMuteUnmute:function(e){null!==G&&void 0!==G&&G.mute&&(e?G.mute():G.unMute())},handleLoopPlaying:function(){z(!Y),$(G)}}),Object(m.jsx)(Re,{}),Object(m.jsx)("div",{id:"youtube-player-".concat(_||null),style:{visibility:"hidden",position:"absolute"}})]})]})},Et=n(67),kt=n.n(Et),Ft=n(36),It=n(39),Tt=n(37),Lt=function(e){Object(It.a)(n,e);var t=Object(Tt.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).logErrorToMyService=function(e,t){console.log(e,t)},a.state={hasError:!1},a}return Object(Ft.a)(n,[{key:"componentDidCatch",value:function(e,t){this.logErrorToMyService(e,t)}},{key:"render",value:function(){return this.state.hasError?Object(m.jsx)("h1",{children:"Something went wrong."}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),n}(c.a.Component),Mt=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e})).songs,n=function(){console.log("This function is functing with me"),window.innerWidth<800?(e(R("hidden")),console.log("Small screen")):(e(R("normal")),console.log("normal screen"))};return Object(i.useEffect)((function(){return M(e,G),n(),window.addEventListener("resize",n),!1}),[]),Object(m.jsx)("main",{className:kt.a.Layout,children:t&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(ze,{}),Object(m.jsx)(Lt,{children:Object(m.jsx)(Ct,{})})]})})},Pt=n(28),At=n.n(Pt),Gt=n.p+"static/media/no-internet.66909dfb.jpg";var Rt,Dt=(Rt=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(Mt,{})})},function(e){Object(It.a)(n,e);var t=Object(Tt.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={isDisconnected:!1},e.handleConnectionChange=function(){if("online"!==(navigator.onLine?"online":"offline"))return e.setState({isDisconnected:!0});var t=setInterval((function(){fetch("//google.com",{mode:"no-cors"}).then((function(){e.setState({isDisconnected:!1},(function(){return clearInterval(t)}))})).catch((function(){return e.setState({isDisconnected:!0})}))}),2e3)},e}return Object(Ft.a)(n,[{key:"componentDidMount",value:function(){this.handleConnectionChange(),window.addEventListener("online",this.handleConnectionChange),window.addEventListener("offline",this.handleConnectionChange)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("online",this.handleConnectionChange),window.removeEventListener("offline",this.handleConnectionChange)}},{key:"render",value:function(){var e=this.state.isDisconnected;return Object(m.jsxs)("div",{className:At.a.Container,children:[e?Object(m.jsxs)("div",{className:At.a.Content,children:[Object(m.jsx)("h1",{className:At.a.ErrorH1,children:"Internet Left The Chat \ud83d\ude27 "}),Object(m.jsx)("img",{className:At.a.ErrorImage,src:Gt,alt:"no intenrnet"})]}):null,Object(m.jsx)(Rt,Object(a.a)({},this.props))]})}}]),n}(i.Component)),Vt=n(38),Bt=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"Add_PLAYLIST":return t.payload;default:return e}},Ut=new O("genre",null).get()||"lofi",Wt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ut,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_BACKGROUND":return t.payload;default:return e}},Yt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CURRENT_SONG":case"Add_PLAYLIST":return t.payload;default:return e}},zt=new O("filter",null).get()||"3D",Jt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:zt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FILTER":return t.payload;default:return e}},Xt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ALL_SONGS":return t.payload;default:return e}},Ht={loading:!1,direction:"next"},qt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ht,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"IFRAME_LOADING":return t.payload;default:return e}},Qt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"normal",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_INFO_MENU":return t.payload;default:return e}},Zt=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"IS_FAVORITE":return t.payload;default:return e}},Kt=JSON.parse(new O("muted",null).get())||!1,$t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Kt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MUTE":return t.payload;default:return e}},en=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"normal",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PLAYER_POSITION":return t.payload;default:return e}},tn=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PLAY_FROM_FAVS":return t.payload;default:return e}},nn=new O("volume",null).get()||50,an=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:nn,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_VOLUME":return t.payload;default:return e}},cn=Object(Vt.a)({genre:Wt,volume:an,isMute:$t,currentSong:Yt,isFavorite:Zt,songs:Xt,isPlayingFromFavs:tn,filter:Jt,playerPosition:en,infoMenuPosition:Qt,isIframeLoading:qt,isAddingPlaylist:Bt}),on=n(68),rn={position:u.b.TOP_CENTER,timeout:4e3,offset:"30px",transition:u.c.SCALE},sn=Object(Vt.b)(cn,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());console.log=function(){},r.a.render(Object(m.jsx)(s.a,{store:sn,children:Object(m.jsx)(u.a,Object(a.a)(Object(a.a)({template:on.a},rn),{},{children:Object(m.jsx)(Dt,{})}))}),document.getElementById("root"))},16:function(e,t,n){e.exports={Container:"v7xrL5GbGlAptjNSWQh7w",Progress2:"fkn6BoJJB5b8opICni86h",ProgressBar2:"_3LwzG-xNRRnGxzww4LY6Xc",ProgressMoved:"_1llfl7yBwTISlltRafiRJN",Info:"lidiQD5tkjRIleS8sSHK2",Num:"_3BBp2wTtgDAqz_x80iBi45"}},17:function(e,t,n){e.exports={Container:"_1TebvKfe241UbL9OkSvm7h",scaleAnime:"_2izfaoQX6nOpuqa18OAc7_",Title:"_27NUR4lCa2yX58-ZE3v4x0",FilterName:"_2KShI3QtENENtz-FatMrFB",Grid:"Ld8vwtd78QJVJfoSnwpHR",Card:"U5KRyhYeYhREHVislxtHy",Close:"_1FSFUH5GhLQnD4xzf_Ksun"}},22:function(e,t,n){e.exports={details:"_3xV2Eejcm3zXVlgwMxLjgX",IconWrapper:"_6_q-etYsO6qm17DN_7W5X",Disk:"_2b9GePLVgWMElo9grOhCP8",DiskImg:"KgDfSJQox-B0UJKTENJje",diskmating:"H2DqmvTUt8ZjhZa8-ZQWv",InfoIcon:"_1fhUGIh_sCrpXoK3RdFCZa",Info:"k2e8W1N_wNFr2QkJKcGyP",Scale:"_1VODwATpay2wq6k1-eyi-s",Close:"_2SQeExl5yIvk5j_aOlPN2C"}},23:function(e,t,n){e.exports={controls:"_1lrt5m0oOWwLqOkTU4arJO",Button:"_3YesAjO8vLvBKdceJvExaw",Figure:"X2nSjNrpULWVjMkfdZMFM"}},24:function(e,t,n){e.exports={Album:"chvByhT5otM-jnUXoAnne",AlbumPic:"ZubuAiXgPccIpOIIfXiHD",cadre:"hBFoynSbIQxN87oMPzPh7",Filter:"_20czNum-XVmVxvoa7GSKxE",Minimize:"_3S9MjgTX92C67bq0xo4wsV"}},26:function(e,t,n){e.exports={bg:"_2BguRCp9F23bjC0gkEXnpT",SideMenu:"_3Djms0BWZMXKweah0aQf1o",Effect:"_1hVwrTYXCMJuvhCx_P9TV5",Effect3D:"_1YJySj4qoHdkjw8yZBBt2x",EffectGlitch:"_1MAkLLl9Y0-jr-vooUDDQo","shake-glitch--1":"_2AMnF0drLK3zWWy6xg_xBP","shake-glitch--2":"_3QMXkrOJPqQ9UtD6my1NQ4",EffectVHS:"_1fDVWx-qxxB3MthUlZ2UsS","shake-vhs":"_1pBdiN8gArY9u8mGeL7yC_",scroll:"_1EsJ4jRE7cMkgSxJfy0nzu",EffectGB:"_2R_ytw9jq105bdTlxE_ns_"}},27:function(e,t,n){e.exports={Player:"_2aMAt5qOHUkLDvJnBrmpp",MobileIcons:"_3noec0DXvjFT-BtYGkXHaS",iconMatingP:"_3H9-Fh1b6OXXy_cz_wn68_",iconMatingN:"_1-3KkokmuuhSdGZYk32Cd5",WrapperLoader:"_15t07qhoHq1dx8TlIL_Rw-"}},28:function(e,t,n){e.exports={Content:"_26MbllR77eHZuk5WsAV-QD",ErrorImage:"_3c7wnxd3rm4uGslvpzwSre",ErrorH1:"-cfkb3C9iyslHC1rjRiNM"}},40:function(e,t,n){e.exports={Container:"_5VoMyw1eLYlNuvGzUaHUu",Alert:"_3DdlwF4KGhkRCNH3Ws_G4F",alertScale:"_1xMMIg7Lr8dU8YiKHsgnOI",Btns:"IwC3tQ4OWhrDSa0EG8VYc"}},44:function(e,t,n){e.exports={wrapper:"_3V_N5dK9wEOzJJPSNvQimx"}},45:function(e,t,n){e.exports={Flexer:"gD0l-oIUsOFXcov34rIfW"}},56:function(e,t,n){e.exports={Modal:"_1bL5i0Y5s_X4Fr_qcGzlh7"}},57:function(e,t,n){e.exports={ldsEllipsis:"huXDDQ0k0zes70gGvDwxF","lds-ellipsis1":"_1gMqOJqRZNTGgDX9-uvT6u","lds-ellipsis2":"_2qDqBI6hqiuxDm64oi2MNc","lds-ellipsis3":"_38FqLxtvSRS4v_lpejESm4"}},62:function(e,t,n){e.exports={pause:"_1iQNC2ZQCBVhZ9JTAQZD-v"}},63:function(e,t,n){e.exports={play:"GJ9d9bAJav9okyhvTKHc9"}},64:function(e,t,n){e.exports={Details:"_3v3J_V2WFlJzK8GMZj_XMP"}},67:function(e,t,n){e.exports={Layout:"OzS9MPLtymSNenGFm1ZEV"}}},[[103,1,2]]]);
//# sourceMappingURL=main.21bcd9d5.chunk.js.map
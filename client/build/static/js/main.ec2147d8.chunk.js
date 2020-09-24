(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{21:function(e,t,a){e.exports=a.p+"static/media/goldWhereWorld.80d956eb.png"},23:function(e,t,a){e.exports=a(39)},28:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){e.exports=a.p+"static/media/PettingillCF-Bold.ffeb15ed.otf"},36:function(e,t,a){e.exports=a.p+"static/media/YanoneKaffeesatz-Bold.13be9a83.otf"},37:function(e,t,a){e.exports=a.p+"static/media/YanoneKaffeesatz-Regular.62b6a705.otf"},38:function(e,t,a){e.exports=a.p+"static/media/YanoneKaffeesatz-Light.f607fb59.otf"},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),i=a.n(c),l=(a(28),a(1)),o=a(6),s=a.n(o),m=a(8),u=a(5),d=a(12),p="localhost"===window.location.hostname?"http://localhost:1337":"https://travel-mern-rss88.herokuapp.com";function h(){return f.apply(this,arguments)}function f(){return(f=Object(m.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(p,"/api/logs"));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){return E.apply(this,arguments)}function E(){return(E=Object(m.a)(s.a.mark((function e(t){var a,n,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.apiKey,delete t.apiKey,e.next=4,fetch("".concat(p,"/api/logs"),{method:"POST",headers:{"content-type":"application/json","X-API-KEY":a},body:JSON.stringify(t)});case 4:return n=e.sent,e.next=7,n.json();case 7:if(r=e.sent,!n.ok){e.next=10;break}return e.abrupt("return",r);case 10:throw(c=new Error(r.message)).response=r,c;case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return(g=Object(m.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(p,"/api/logs/").concat(t),{method:"DELETE"});case 2:return a=e.sent,e.abrupt("return",a.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v=a(22),y=(a(33),function(e){var t=e.location,a=e.onClose,c=Object(n.useState)(!1),i=Object(u.a)(c,2),l=i[0],o=i[1],d=Object(n.useState)(""),p=Object(u.a)(d,2),h=p[0],f=p[1],E=Object(v.a)(),g=E.register,y=E.handleSubmit,w=function(){var e=Object(m.a)(s.a.mark((function e(n){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o(!0),n.latitude=t.latitude,n.longitude=t.longitude,e.next=6,b(n);case 6:r=e.sent,console.log("created: ",r),a(),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0),f(e.t0.message),o(!1);case 16:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("form",{onSubmit:y(w),className:"entryForm"},h?r.a.createElement("h3",{className:"erH3"},"Entry Failed: ",h):null,r.a.createElement("label",{htmlFor:"apiKey"},"API Key: "),r.a.createElement("input",{type:"password",name:"apiKey",required:!0,ref:g}),r.a.createElement("label",{htmlFor:"title"},"Location: "),r.a.createElement("input",{name:"title",required:!0,ref:g}),r.a.createElement("label",{htmlFor:"description"},"About Visit: "),r.a.createElement("textarea",{name:"description",rows:3,required:!0,ref:g}),r.a.createElement("label",{htmlFor:"image"},"Image URL: "),r.a.createElement("input",{name:"image",ref:g}),r.a.createElement("label",{htmlFor:"rating"},"Rating: "),r.a.createElement("input",{name:"rating",type:"number",ref:g}),r.a.createElement("label",{htmlFor:"visit_date"},"Date Visited: "),r.a.createElement("input",{name:"visit_date",type:"date",required:!0,ref:g}),r.a.createElement("button",{className:"submitButton",disabled:l},l?"Pending Details":"Submit Travel Log"))}),w=a(21),x=a.n(w),N=(a(34),function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(null),o=Object(u.a)(i,2),p=o[0],f=o[1],b=Object(n.useState)({}),E=Object(u.a)(b,2),v=E[0],w=E[1],N=Object(n.useState)({width:"100vw",height:"100vh",latitude:46.306826,longitude:-56.750677,zoom:2}),j=Object(u.a)(N,2),k=j[0],O=j[1],z=function(){var e=Object(m.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){z()}),[]);return r.a.createElement("section",{className:"mapSection"},r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"boxes"},r.a.createElement("div",{className:"aboutTitle"},"About"),r.a.createElement("div",{className:"insetShad"},r.a.createElement("p",{className:"headerWords"},'This app serves as a personal travel log. An interactive journal of "Where in the World" I\'ve been able to visit. Click the map markers for more details about my trip!'))),r.a.createElement("img",{src:x.a,className:"witwLogo"}),r.a.createElement("div",{className:"boxes"},r.a.createElement("div",{className:"aboutTitle"},"Try it Out!"),r.a.createElement("div",{className:"insetShad"},r.a.createElement("p",{className:"headerWords"},"If you'd like to add a travel log, double-click the location and submit. If you don't want to leave it on the map, you can always delete your submission.")))),r.a.createElement(d.c,Object.assign({},k,{mapboxApiAccessToken:"pk.eyJ1IjoicnNzaWJhamE4OCIsImEiOiJja2VtYnE5d2swNHI3MnpvejJ5Z2dvbTV2In0.O1sTV6k8TgV_jFVfFPpVbQ",mapStyle:"mapbox://styles/rssibaja88/ckf32i7yw0a4a19rxfmrru6io",onViewportChange:O,onDblClick:function(e){var t=Object(u.a)(e.lngLat,2),a=t[0],n=t[1];f({latitude:n,longitude:a})}}),a.map((function(e){return r.a.createElement("div",{className:"mapGroup",key:e._id},r.a.createElement(d.a,{key:e._id,latitude:e.latitude,longitude:e.longitude},r.a.createElement("div",{onClick:function(){return w(Object(l.a)({},e._id,!0))}},r.a.createElement("svg",{className:"marker",style:{height:"".concat(10*k.zoom,"px"),width:"".concat(10*k.zoom,"px")},height:"20",viewBox:"0 0 64 64",width:"20",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("g",{id:"Place_holder","data-name":"Place holder"},r.a.createElement("path",{d:"m32 2a19.994 19.994 0 0 0 -20 20c0 11.05 20 40 20 40s20-28.95 20-40a19.994 19.994 0 0 0 -20-20zm0 31a11 11 0 1 1 11-11 10.994 10.994 0 0 1 -11 11z",fill:"#DAA520"}),r.a.createElement("path",{d:"m32 1a21.023 21.023 0 0 0 -21 21c0 11.229 19.354 39.375 20.177 40.568a1 1 0 0 0 1.646 0c.823-1.193 20.177-29.339 20.177-40.568a21.023 21.023 0 0 0 -21-21zm0 59.218c-3.748-5.579-19-28.863-19-38.218a19 19 0 0 1 38 0c0 9.353-15.252 32.638-19 38.218z"}),r.a.createElement("path",{d:"m32 10a12 12 0 1 0 12 12 12.013 12.013 0 0 0 -12-12zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1 -10 10z"}))))),v[e._id]?r.a.createElement(d.b,{latitude:e.latitude,longitude:e.longitude,closeButton:!0,closeOnClick:!1,dynamicPosition:!0,sortByDepth:!0,onClose:function(){return w({})},anchor:"top"},r.a.createElement("div",{className:"popCard"},r.a.createElement("div",{className:"floatbox"},r.a.createElement("div",{className:"longlat"},"longitude: ",e.longitude," || latitude: ",e.latitude)),r.a.createElement("div",{className:"infoBox"},r.a.createElement("div",{className:"blockOne"},r.a.createElement("h3",{className:"poptitle"},e.title),r.a.createElement("img",{className:"popPic",src:e.image}),r.a.createElement("p",{className:"popRating"},"Rating: ",e.rating)),r.a.createElement("div",{className:"blockTwo"},r.a.createElement("div",{className:"entryTitle"},"About the Trip"),r.a.createElement("p",{className:"popDescription"},e.description),r.a.createElement("p",{className:"popDate"},"Date visted: ",e.visit_date.substring(0,10)),r.a.createElement("button",{className:"deleteButton",onClick:function(){!function(e){g.apply(this,arguments)}(e._id),z()}},"Delete"))))):null)})),p?r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{key:p._id,latitude:p.latitude,longitude:p.longitude},r.a.createElement("div",{onClick:function(){return w(Object(l.a)({},p._id,!0))}},r.a.createElement("svg",{className:"marker",style:{height:"".concat(8*k.zoom,"px"),width:"".concat(8*k.zoom,"px")},height:"20",viewBox:"0 0 64 64",width:"20",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("g",{id:"Place_holder","data-name":"Place holder"},r.a.createElement("path",{d:"m32 2a19.994 19.994 0 0 0 -20 20c0 11.05 20 40 20 40s20-28.95 20-40a19.994 19.994 0 0 0 -20-20zm0 31a11 11 0 1 1 11-11 10.994 10.994 0 0 1 -11 11z",fill:"#3E4A81"}),r.a.createElement("path",{d:"m32 1a21.023 21.023 0 0 0 -21 21c0 11.229 19.354 39.375 20.177 40.568a1 1 0 0 0 1.646 0c.823-1.193 20.177-29.339 20.177-40.568a21.023 21.023 0 0 0 -21-21zm0 59.218c-3.748-5.579-19-28.863-19-38.218a19 19 0 0 1 38 0c0 9.353-15.252 32.638-19 38.218z"}),r.a.createElement("path",{d:"m32 10a12 12 0 1 0 12 12 12.013 12.013 0 0 0 -12-12zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1 -10 10z"}))))),r.a.createElement(d.b,{latitude:p.latitude,longitude:p.longitude,closeButton:!0,closeOnClick:!1,dynamicPosition:!0,sortByDepth:!0,onClose:function(){return f(null)},anchor:"top"},r.a.createElement("div",{className:"popCard2"},r.a.createElement(y,{onClose:function(){f(null),z()},location:p})))):null))});a(35),a(36),a(37),a(38);i.a.render(r.a.createElement(N,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.ec2147d8.chunk.js.map
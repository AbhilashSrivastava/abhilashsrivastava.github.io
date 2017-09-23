(function(g){var window=this;var gpa=function(a,b,c,d){var e=a||window.document;return g.gG(e,b,function(a){var b=g.Oe(a.target,function(a){return a===e||d(a)},!0);
b&&b!==e&&!b.disabled&&(a.currentTarget=b,c.call(b,a))})},G4=function(a,b,c,d){return gpa(a,b,c,function(a){return g.Cq(a,d)})},H4=function(a,b){if(/^\d+px?$/.test(b))return(0,window.parseInt)(b,10);
var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return+e},hpa=function(a){var b=g.AV(a.g).Ua(),b=new g.Qg(0,0,b.width,b.height);
if(a.B.o&&!a.wj()){if(g.Y(a.g).gc){var c=a.Vd()?69:48;b.top+=c;b.height-=c}a.A&&(b.height-=a.A.A.Vd()?72:50)}return b},I4=function(a){a.U("cardstatechange",g.IV(a)&&g.JV(a)?1:0)},J4=function(a){var b={};
void 0!==a.g?b.trackingParams=a.g:(b.veType=a.A,null!=a.o&&(b.veCounter=a.o));return b},ipa=function(a,b,c,d){c=(0,g.z)(c,d||a.o);
b=G4(b,"change",c,"iv-card-poll-choice-input");a.g.push(b)},jpa=function(a,b,c){c=(0,g.z)(c,a.o);
b=g.oG(b,"mouseleave",c);a.g.push(b);return b},kpa=function(a){if(window.document.createEvent){var b=window.document.createEvent("HTMLEvents");
b.initEvent("click",!0,!0);a.dispatchEvent(b)}else b=window.document.createEventObject(),a.fireEvent("onclick",b)},lpa=function(a,b){var c=!1,d=a.subscribe("ROOT_MENU_REMOVED",function(a){c||(c=!0,this.Kd(d),b.apply(void 0,arguments))},a)},K4=function(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;
var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in mpa?mpa[c]:H4(a,c)},L4=function(a,b){var c=a.currentStyle?a.currentStyle[b]:null;
return c?H4(a,c):0},M4=function(a,b){g.Cf.call(this);
this.ik=a;this.bq=b;this[g.bf]=!1},N4=function(a,b){var c=":"+(g.Bv.getInstance().g++).toString(36);
b.setAttribute("result",c);a.appendChild(b);return c},O4=function(a,b,c){var d=window.document.createElementNS("http://www.w3.org/2000/svg",a);
b&&g.Jb(b,function(a,b){d.setAttribute(b,a)});
for(var e=2;e<arguments.length;e++)d.appendChild(arguments[e]);return d},S4=function(a,b,c,d){M4.call(this,a,b);
a=this.bq;b=this.oa();c?(b.setAttribute("stroke",c.g),b.setAttribute("stroke-opacity",c.o),c=c.zb(),g.y(c)&&-1!=c.indexOf("px")?b.setAttribute("stroke-width",(0,window.parseFloat)(c)/npa(a)):b.setAttribute("stroke-width",c)):b.setAttribute("stroke","none");this.fill=d;c=this.bq;a=this.oa();if(d instanceof P4)a.setAttribute("fill",d.H),a.setAttribute("fill-opacity",d.J);else if(d instanceof Q4){b="lg-"+d.C+"-"+d.F+"-"+d.D+"-"+d.G+"-"+d.g+"-"+d.o;var e=b in c.o?c.o[b]:null;if(!e){var e=R4(c,"linearGradient",
{x1:d.C,y1:d.F,x2:d.D,y2:d.G,gradientUnits:"userSpaceOnUse"}),f="stop-color:"+d.g;g.ua(d.A)&&(f+=";stop-opacity:"+d.A);f=R4(c,"stop",{offset:"0%",style:f});e.appendChild(f);f="stop-color:"+d.o;g.ua(d.B)&&(f+=";stop-opacity:"+d.B);d=R4(c,"stop",{offset:"100%",style:f});e.appendChild(d);e=opa(c,b,e)}a.setAttribute("fill","url(#"+e+")")}else a.setAttribute("fill","none")},ppa=function(a,b){return b},qpa=function(a,b){var c=N4(a,O4("feOffset",{"in":b,
dx:"-7",dy:"-7"})),c=N4(a,O4("feGaussianBlur",{"in":c,stdDeviation:"3"})),c=N4(a,O4("feColorMatrix",{"in":c,type:"matrix",values:"0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.5 0"})),d=N4(a,O4("feColorMatrix",{"in":b,type:"matrix",values:"0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 100 0"})),d=N4(a,O4("feGaussianBlur",{"in":d,stdDeviation:"1"})),c=N4(a,O4("feComposite",{operator:"out","in":c,in2:d}));return N4(a,O4("feComposite",{operator:"over","in":b,in2:c}))},rpa=function(a,b){var c=N4(a,O4("feGaussianBlur",
{"in":b,
stdDeviation:"1.8"})),c=N4(a,O4("feDiffuseLighting",{"in":c,surfaceScale:"4",diffuseConstant:"1"},O4("feDistantLight",{azimuth:"270",elevation:"15","lighting-color":"white"}))),c=N4(a,O4("feComposite",{"in":c,in2:b,operator:"in"}));return N4(a,O4("feComposite",{in2:c,"in":b,operator:"arithmetic",k2:1,k3:.5,k4:0}))},spa=function(a,b,c,d){S4.call(this,a,b,c,d)},tpa=function(a,b){M4.call(this,a,b)},upa=function(){},vpa=function(a){a=a.replace(/^(https?:)?\/\//,"");
a=a.split("/",1);return!a||1>a.length||!a[0]?[]:a[0].toLowerCase().split(".").reverse()},T4=function(a,b,c){var d=(c="xy"==c||"yy"==c)?360:640;
return(d+((c?a.height:a.width)-d)*b)/d},wpa=function(a,b,c){var d=(c="xx"==c||"xy"==c)?640:360;
return(d+((c?a.width:a.height)-d)*b)/d},xpa=function(a){return(new g.Xf(function(b){try{var c={gapiHintOverride:a.gapiHintOverride,
_c:{jsl:{h:a.gapiHintParams}},callback:b},d=g.va(c)?{callback:c}:c||{};d._c&&d._c.jsl&&d._c.jsl.h||g.bc(d,{_c:{jsl:{h:g.BE("GAPI_HINT_PARAMS",void 0)}}});if(d.gapiHintOverride||g.BE("GAPI_HINT_OVERRIDE")){var e=g.sF(window.document.location.href).gapi_jsh;e&&g.bc(d,{_c:{jsl:{h:e}}})}g.km("client",d)}catch(f){g.dF(f)}})).then(function(){})},ypa=function(a){var b={};
a.analyticsChannelData&&(b.analyticsDatas=(0,g.H)(a.analyticsChannelData,function(a){return{tabName:a.tabName,cardName:a.cardName,isChannelScreen:a.isChannelScreen,insightId:a.insightId,externalChannelId:a.externalChannelId,externalContentOwnerId:a.externalContentOwnerId}}));
return{playbackData:{clientPlaybackNonce:a.clientPlaybackNonce},analyticsChannelData:b,externalLinkData:a.externalLinkData}},zpa=function(){U4||(U4=new g.og(400),U4.start());
return U4},Bpa=function(a){var b=[];
Apa(a,function(a,d){switch(a){case 0:b.push("M");Array.prototype.push.apply(b,d);break;case 1:b.push("L");Array.prototype.push.apply(b,d);break;case 2:b.push("C");Array.prototype.push.apply(b,d);break;case 3:var c=d[3];b.push("A",d[0],d[1],0,180<Math.abs(c)?1:0,0<c?1:0,d[4],d[5]);break;case 4:b.push("Z")}});
return b.join(" ")},Cpa=function(a,b,c,d){S4.call(this,a,b,c,d)},V4=function(a,b){M4.call(this,a,b)},P4=function(a,b){this.H=a;
this.J=null==b?1:b},Q4=function(a,b,c,d,e,f,k,l){this.C=a;
this.F=b;this.D=c;this.G=d;this.g=e;this.o=f;this.A=g.t(k)?k:null;this.B=g.t(l)?l:null},W4=function(a,b,c,d,e){g.Cv.call(this,e);
this.width=a;this.height=b;this.A=c||null;this.M=d||null},npa=function(a){var b=a.Hi();
return b?b.width/(a.A?new g.ae(a.A,a.M):a.Hi()).width:0},Dpa=function(a){var b=O4("filter",{filterUnits:"userSpaceOnUse"}),c="SourceGraphic";
(0,g.F)(a,function(a){a:{switch(a){case "bevel":a=rpa;break a;case "dropshadow":a=qpa;break a}a=ppa}c=a(b,c)});
return b},X4=function(a,b,c,d,e,f,k,l,m,n,q){this.x=a;
this.y=b;this.Vk=c;this.A=d;this.t=e;this.H=f;this.C=k;this.D=l;this.B=m;this.o=n;this.g=q},Y4=function(a,b){var c=Epa(b,Fpa(a,new g.Qg(a.x,a.y,a.Vk,a.A),b.g)),d=b.g,e=c.clone();
d&&!d.contains(c)&&(c.width<d.width?e.left=g.Ud(c.left,d.left,d.left+d.width-c.width):(e.left=d.left,e.width=d.width),c.height<d.height?e.top=g.Ud(c.top,d.top,d.top+d.height-c.height):(e.top=d.top,e.height=d.height));return e},Fpa=function(a,b,c){var d=a.C,e=a.D,f=a.g?a.g:"xy",k=wpa(c,a.B,f);
a=T4(c,a.o,f);var f=640*b.width*k/100,l=360*b.height*a/100;return new g.Qg(0==d?640*b.left*k/100:0<d?d:c.width+d-f,0==e?360*b.top*a/100:0<e?e:c.height+e-l,f,l)},Gpa=function(a,b,c,d){this.value=a;
this.target=b;this.showLinkIcon=c;this.g=d},Z4=function(a){return a.value?a.value:null},Hpa=function(a){if(null==a)return 0;
if("never"==a)return-1;a=a.split(":");if(3<a.length)return 0;var b=0,c=1;(0,g.F)(a,function(a){a=(0,window.parseFloat)(a);0>a&&(c=-c);b=60*b+Math.abs(a)});
return c*b},$4=function(a,b){return g.y(a)?(0,window.parseFloat)(a):b},a5=function(a,b){return"true"==a||"false"==a?"true"==a:b},b5=function(a,b,c){for(var d in b)if(b[d]==a)return a;
return c},c5=function(a){return g.y(a)?a:""},e5=function(a){this.g=a||g.qH();
d5||(d5=xpa(this.g))},Ipa=function(a,b,c,d){var e={path:"/youtubei/"+a.g.innertubeApiVersion+"/"+b,
headers:{"X-Goog-Visitor-Id":g.BE("VISITOR_DATA")},method:"POST",body:g.Nc(c)},f=(0,g.z)(a.B,a);d5.then(function(){f();g.u("gapi.client.request")(e).execute(d||g.x)})},f5=function(a,b,c){b.eventTimeMs=Math.round((0,g.jH)());
b.lactMs=g.mH();c&&(b.clientData=ypa(c));g.fH({endpoint:"log_interaction",yz:b},a)},g5=function(a,b,c,d,e){W4.call(this,a,b,c,d,e);
this.o={};this.N=g.pe&&!g.nc(526);this.J=new g.Rm(this)},R4=function(a,b,c){a=a.H.g.createElementNS("http://www.w3.org/2000/svg",b);
c&&Jpa(a,c);return a},Jpa=function(a,b){for(var c in b)a.setAttribute(c,b[c])},h5=function(a,b,c,d){b=R4(a,"path",{d:Bpa(b)});
c=new Cpa(b,a,c,d);a.C.oa().appendChild(c.oa())},opa=function(a,b,c){if(b in a.o)return a.o[b];
var d="_svgdef_"+Kpa++;c.setAttribute("id",d);a.o[b]=d;a.G.appendChild(c);return d},i5=function(){this.za=[];
this.Ia=[];this.he=[]},Lpa=function(a,b,c){0==g.$a(a.za)?a.he.length-=2:(a.za.push(0),a.Ia.push(1));
a.he.push(b,c);a.Bd=a.nf=[b,c]},j5=function(a,b,c,d){var e=a.Bd[0]-b*Math.cos(d*Math.PI/180)+b*Math.cos((d+90)*Math.PI/180),f=a.Bd[1]-c*Math.sin(d*Math.PI/180)+c*Math.sin((d+90)*Math.PI/180);
a.za.push(3);a.Ia.push(1);a.he.push(b,c,d,90,e,f);a.Pk=!1;a.Bd=[e,f]},Apa=function(a,b){for(var c=a.he,d=0,e=0,f=a.za.length;e<f;e++){var k=a.za[e],l=Mpa[k]*a.Ia[e];
b(k,c.slice(d,d+l));d+=l}},Npa=function(a,b,c){c=c.replace(/\/(u|b)\/[0-9]+/g,"");
var d=/^[0-9]+$/;a&&d.test(a)&&(c="/b/"+a+c);b&&d.test(b)&&(c="/u/"+b+c);return c},k5=function(a){var b;
(b=a)&&!(b=1<a.length?"/"==a.charAt(0)&&"/"!=a.charAt(1):"/"==a)&&(b=vpa(a),b="com"==b[0]&&"youtube"==b[1]||"be"==b[0]&&"youtu"==b[1]);return b?-1==a.indexOf("/redirect?"):!1},l5=function(a,b,c){this.id=a;
this.timestamp=b.timestamp||0;this.type=b.card_type;this.teaserText=b.teaser_text;this.teaserDurationMs=b.teaser_duration_ms;this.startMs=b.start_ms;this.autoOpen=b.auto_open||!1;this.jd=b.session_data||{};this.Qb=c;this.sponsored=b.sponsored||!1;a=b.tracking||{};this.o={ZH:a.impression,click:a.click,close:a.close,pP:a.teaser_impression,ks:a.teaser_click};b=b.tracking_params||{};this.C=new g.RG(b.card);this.F=new g.RG(b.teaser);this.D=new g.RG(b.icon)},Opa=function(a){return g.bb(a,function(a){return"dropshadow"==
a})?new g.Pg(0,7,7,0):new g.Pg(0,0,0,0)},Ppa=function(a){a=(0,g.Ce)(a,function(a){return a in m5});
g.zb(a,function(a,c){return m5[a]-m5[c]});
return a},Qpa=function(a,b,c,d,e,f,k,l){this.C=a;
this.F=b;this.D=c;this.G=d;this.g=e;this.o=f;this.A=k;this.B=l},Rpa=function(a,b,c,d,e,f,k,l,m,n,q,r,v){X4.call(this,a,b,c,d,e,l,m,n,q,r,v);
this.F=f;this.G=k},Tpa=function(a,b){if(!a)return null;
var c=$4(a.x,0),d=$4(a.y,0),e=$4(a.w,0),f=$4(a.h,0),k=Hpa(a.t),l=$4(a.scaleSlope,1);return b(c,d,e,f,k,$4(a.d,0),$4(a.px,0),$4(a.py,0),$4(a.scaleSlopeX,l),$4(a.scaleSlopeY,l),b5(a.scaleDimension,Spa,"xy"))},n5=function(a){if(!a)return null;
var b=c5(a.value);if(!b)return null;var c=b5(a.target,Upa,"current");return null==c?null:new Gpa(b,c,a5(a.show_link_icon,!0),null!=a.pause_on_navigation?a.pause_on_navigation:!0)},o5=function(a,b,c,d,e){a=(0,window.parseFloat)(a);
if(null!=a&&!(0,window.isNaN)(a)){if(d)return g.Ud(a,b,c);if(a>=b&&a<=c)return a}return e},p5=function(a,b){if(null==a)return b;
var c=(0,window.parseInt)(a,0);if((0,window.isNaN)(c))return b;c=c.toString(16);return"#"+"000000".substring(0,6-c.length)+c},q5=function(){return g.AG("enable_youtubei_innertube")?g.nH:e5},r5=function(a,b,c){this.A=a;
this.g=b;this.o=null==c?1:c},Vpa=function(a,b){g.Xe.call(this,a);
this.x=b.o[0];this.y=b.o[1];this.z=b.o[2];this.duration=b.duration;this.progress=b.progress;this.fps=b.F;this.state=b.g},s5=function(a){a=g.ya(a);
delete g.wu[a];g.Vb(g.wu)&&g.ru&&g.ru.stop()},Wpa=function(a){return new g.Qg(a.left,a.top,a.right-a.left,a.bottom-a.top)},t5=function(a,b){return b?b:k5(a)?"current":"new"},u5=function(a,b,c,d){(a=Z4(a))?k5(a)?d=g.oF(a,{feature:"iv",
src_vid:c,annotation_id:b}):(a?(b=vpa(a),b="com"==b[0]&&"google"==b[1]&&"plus"==b[2]):b=!1,b&&d?(d=g.za(Npa,d.pageId,d.uc),a=new g.ym(a),g.Cm(a,d(a.A)),d=a.toString()):d=a):d=null;return d},Xpa=function(a){this.merchant=g.D(a.merchant);
this.price=g.D(a.price)},v5=function(a,b,c){l5.call(this,a,b,c);
this.imageUrl=b.image_url;this.displayDomain=b.display_domain;this.showLinkIcon=b.show_link_icon;this.g=b.button_icon_url;this.title=b.title;this.customMessage=b.custom_message;this.url=n5({pause_on_navigation:b.pause_on_navigation,target:b.target||"new",value:b.url});this.A=null;b.signin_url&&(this.A=n5({target:"current",value:b.signin_url}));this.H=b.signin_title||null;this.G=b.signin_message||null},Ypa=function(a,b){var c=a.top-b.y,d=b.x-a.left-a.width,e=b.y-a.top-a.height,f=a.left-b.x,k=Math.max(c,
d,e,f);
if(0>k)return"i";switch(k){case c:return"t";case d:return"r";case e:return"b";case f:return"l"}return"i"},Zpa=function(a,b,c){if(c.length&&(b=g.he("g",void 0,b),b.length)){var d=Ppa(c);
if(d){c="effects:"+(d?d.join("|"):"");var e=c in a.o?a.o[c]:null;e?a=e:(d=Dpa(d),a=0<d.childNodes.length?opa(a,c,d):null)}else a=null;a&&b[0].setAttribute("filter","url(#"+a+")")}},w5=function(a,b){var c=g.Rg(a);
c.expand(Opa(b));return Wpa(c)},$pa=function(a,b,c,d){var e=a.F;
e?a=new Q4(e.C*b/100,e.F*c/100,e.D*b/100,e.G*c/100,e.g,e.o,e.A,e.B):(b=a.o,a=new P4(a.bgColor,d?Math.max(b,.9):b));return a},aqa=function(a,b,c){var d=new i5;
Lpa(d,a.left+b+c,a.top+c);d.zc(a.left+a.width-b-c,a.top+c);j5(d,b,b,-90);d.zc(a.left+a.width-c,a.top+a.height-b-c);j5(d,b,b,0);d.zc(a.left+b+c,a.top+a.height-c);j5(d,b,b,90);d.zc(a.left+c,a.top+b+c);j5(d,b,b,180);d.close();return d},x5=function(){this.g=!1;
this.C=this.o=null},y5=function(a,b,c){a.o?(a.o.setSize(b,c),a.o.clear()):(b=new g5(b,c,void 0,void 0,void 0),a.o=b,a.o.Mm(),a.C=g.K("DIV"),b=a.o.oa(),a.C.appendChild(b));
return a.o},bqa=function(a,b){var c="ivTriggerCondition:"+a;
return b?c+":"+b:c},cqa=function(a,b){this.state=a;
this.ref=b},dqa=function(a,b,c,d){this.type=a;
this.o=b;this.g=c;this.A=d},eqa=function(a){return a.o&&a.o.length?a.o[0]:a.g&&a.g.length?a.g[0]:a.A&&a.A.length?a.A[0]:null},fqa=function(a,b,c,d,e,f,k,l,m,n,q,r,v,w){this.A=a;
this.bgColor=b;this.C=c;this.g=d;this.o=e;this.G=f;this.B=k;this.textAlign=l;this.textSize=m;this.D=n;this.padding=q;this.effects=r;this.cornerRadius=v;this.F=w},gqa=function(a){if(!a)return null;
var b=$4(a.sx,0),c=$4(a.sy,0);return Tpa(a,function(a,e,f,k,l,m,n,q,r,v,w){return new Rpa(a,e,f,k,l,b,c,m,n,q,r,v,w)})},hqa=function(a){return a?Tpa(a,function(a,c,d,e,f,k,l,m,n,q,r){return new X4(a,c,d,e,f,k,l,m,n,q,r)}):null},iqa=function(a){function b(a){return(0,g.Ce)(a.split(/ +/),function(a){return""!=a})}
return null==a?[]:b(a)},jqa=function(a){function b(a){return null!=a&&!(0,window.isNaN)(a)}
return(a=a?new g.Pg((0,window.parseFloat)(a.top),(0,window.parseFloat)(a.right),(0,window.parseFloat)(a.bottom),(0,window.parseFloat)(a.left)):null)&&b(a.top)&&b(a.right)&&b(a.bottom)&&b(a.left)?a:null},z5=function(a,b){if(null==a)return null;
if(g.sa(a)){var c=[];(0,g.F)(a,function(a){(a=b(a))&&c.push(a)});
return c}var d=b(a);return d?[d]:[]},A5=function(a){var b=/.+/;
return g.y(a)&&null!=b&&null!=a&&a.match(b)?a:""},B5=function(a){return g.ra(a)&&a.length?a[0]:a},C5=function(a){var b=g.GH()||"",c=q5();
f5(c,{click:{csn:b,visualElement:J4(a)}},void 0)},D5=function(a,b,c,d){g.Mt.call(this);
if(!g.ra(a)||!g.ra(b))throw Error("Start and end parameters must be arrays");if(a.length!=b.length)throw Error("Start and end points must be the same length");this.A=a;this.G=b;this.duration=c;this.D=d;this.o=[];this.progress=this.F=0;this.C=null},lqa=function(a,b){b<a.startTime&&(a.endTime=b+a.endTime-a.startTime,a.startTime=b);
a.progress=(b-a.startTime)/(a.endTime-a.startTime);1<a.progress&&(a.progress=1);a.F=1E3/(b-a.C);a.C=b;kqa(a,a.progress);1==a.progress?(a.g=0,s5(a),a.td(),a.Dk()):a.qb()&&a.sr()},kqa=function(a,b){g.va(a.D)&&(b=a.D(b));
a.o=Array(a.A.length);for(var c=0;c<a.A.length;c++)a.o[c]=(a.G[c]-a.A[c])*b+a.A[c]},E5=function(a,b){this.start=a<b?a:b;
this.end=a<b?b:a},F5=function(a){return"rtl"==g.jh(a,"direction")},mqa=function(a,b){for(var c in a)if(!b.call(void 0,a[c],c,a))return!1;
return!0},G5=function(a,b){this.Ya=a;
this.context=b;this.Gs=!1;this.N=0},H5=function(a,b,c,d,e,f){b=new g.mT(b,c,{id:d});
b.namespace="annotations_module";e&&(b.g||(b.g=new g.TD)).subscribe("onEnter",e,a);f&&(b.g||(b.g=new g.TD)).subscribe("onExit",f,a);g.MV(a.context.o,[b])},nqa=function(a){return(0,g.E)()-a.N},oqa=function(a,b,c,d,e,f,k,l){var m=(0,g.z)(function(){l&&this.context.o.wd();
g.iW(b,"current"==c?"_top":void 0,d)},a);
"new"==c&&(m(),m=null);var n={};n.interval=nqa(a);I5(a.context.logger,e,m,n,f,k);k5(b)||(a=d.itct)&&C5(new g.RG(a))},J5=function(a,b,c){l5.call(this,a,b,c);
this.J=b.image_url;this.B=b.badge_symbol||"";this.priceText=b.price_text||"";this.title=b.title;this.g=b.meta_info;this.G=!!b.is_paygated;this.H=!!b.user_has_entitlement;this.url=n5({target:b.target||"new",value:b.url})},pqa=function(a,b,c){l5.call(this,a,b,c);
this.G=b.image_url;this.videoDuration=b.video_duration||null;this.customMessage=b.custom_message;this.title=b.title;this.g=b.meta_info;this.B=!!b.is_live_now;this.url=n5({pause_on_navigation:b.pause_on_navigation,target:b.target||"new",value:b.url})},qqa=function(a,b,c){v5.call(this,a,b,c);
this.J=b.ypc_item_type;this.B=b.ypc_item_id;this.L=b.ypc_flow_type},rqa=function(a,b,c){v5.call(this,a,b,c);
this.offers=[];a=b.offers||[];for(b=0;b<a.length;b++)this.offers.push(new Xpa(a[b]))},sqa=function(a,b,c){l5.call(this,a,b,c);
this.B=this.id.replace(/[^a-z0-9-]/gi,"-");this.title=b.title;this.choices=b.choices;this.g=b.hasOwnProperty("old_vote")?b.old_vote:null;this.A=null;b.signin_url&&(this.A=n5({target:"current",value:b.signin_url}));this.G=b.hasOwnProperty("xsrf_token")?b.xsrf_token:null},tqa=function(a,b,c){l5.call(this,a,b,c);
this.B=b.image_url;this.playlistVideoCount=b.playlist_video_count;this.customMessage=b.custom_message;this.title=b.title;this.g=b.meta_info;this.url=n5({pause_on_navigation:b.pause_on_navigation,target:b.target||"new",value:b.url})},uqa=function(a,b,c){v5.call(this,a,b,c);
this.J=b.ypc_flow_type;this.B=b.innertube_request_params},vqa=function(a,b,c){l5.call(this,a,b,c);
this.channelId=b.channel_id;this.customMessage=b.custom_message;this.profileImageUrl=b.image_url;this.title=b.title;this.g=b.meta_info;this.url=n5({pause_on_navigation:b.pause_on_navigation,target:b.target||"new",value:b.url})},K5=function(){x5.call(this);
this.B=0},xqa=function(a,b,c){this.g={};
this.o=!1;this.C="ivTrigger:"+a;this.A=c;wqa(b,function(a,b){var c=bqa(b.state,b.ref);this.A.subscribe(c,(0,g.z)(this.B,this,c,a));this.g[c]=a},this)},yqa=function(a,b,c,d){this.g=a||[];
this.A=b||[];this.B=c;this.o=d;this.value=!1},wqa=function(a,b,c){(0,g.F)(a.g,g.za(b,!1),c);
(0,g.F)(a.A,g.za(b,!0),c)},Aqa=function(a){if(!a)return null;
var b=b5(a.state,zqa);a=A5(a.ref);return b?new cqa(b,a):null},Bqa=function(a,b){this.o=a;
this.g=b},Dqa=function(a){if(!a)return null;
var b=b5(a.type,Cqa,"rect"),c=z5(a.rectRegion,hqa),d=z5(a.anchoredRegion,gqa);a=z5(a.shapelessRegion,hqa);return new dqa(b,c,d,a)},Eqa=function(a){if(!a)return null;
var b=p5(a.fgColor,"#1A1A1A"),c=p5(a.bgColor,"#FFF"),d=p5(a.borderColor,"#000"),e=o5(a.borderWidth,0,5,!1,0),f=o5(a.bgAlpha,0,1,!1,.8),k=p5(a.highlightFontColor,"#F2F2F2"),l=o5(a.highlightWidth,0,5,!1,3),m=c5(a.textAlign),n=o5(a.textSize,3.3,30.1,!0,3.6107),q=c5(a.fontWeight),r=jqa(a.padding),v=iqa(a.effects),w=o5(a.cornerRadius,0,10,!0,0);if(a=B5(a.gradient)){var B=o5(a.x1,0,100,!0,0),G=o5(a.y1,0,100,!0,0),S=o5(a.x2,0,100,!0,100),I=o5(a.y2,0,100,!0,100),Oa=p5(a.color1,"#FFF"),jb=p5(a.color2,"#000");
a=new Qpa(B,G,S,I,Oa,jb,o5(a.opacity1,0,100,!0,100),o5(a.opacity2,0,100,!0,0))}else a=null;return new fqa(b,c,d,e,f,k,l,m,n,q,r,v,w,a)},Fqa=function(a,b,c){this.type=a;
this.trigger=b;this.url=c},Gqa=function(a,b,c){c=(0,g.H)(c,function(a){return J4(a)});
f5(a,{visibilityUpdate:{csn:b,visualElements:c}})},L5=function(a,b){return g.q4&&a.dataset?b in a.dataset?a.dataset[b]:null:a.getAttribute("data-"+String(b).replace(/([A-Z])/g,"-$1").toLowerCase())},M5=function(a,b,c,d,e){D5.call(this,b,c,d,e);
this.element=a},Kqa=function(a){var b=g.jh(a,"fontSize"),c;
c=(c=b.match(Hqa))&&c[0]||null;if(b&&"px"==c)return(0,window.parseInt)(b,10);if(g.wc){if(String(c)in Iqa)return H4(a,b);if(a.parentNode&&1==a.parentNode.nodeType&&String(c)in Jqa)return a=a.parentNode,c=g.jh(a,"fontSize"),H4(a,b==c?"1em":b)}c=g.K("SPAN",{style:"visibility:hidden;position:absolute;line-height:0;padding:0;margin:0;border:0;height:1em;"});a.appendChild(c);b=c.offsetHeight;g.Ae(c);return b},N5=function(a,b,c){G5.call(this,a,b);
this.annotation=c;this.isActive=!1},O5=function(a,b,c){this.g=a;
this.A=b;this.C=c;this.B=new g.lp(null)},Mqa=function(a,b){var c=["ul",
"",{role:"radiogroup"}];(0,g.F)(b.choices,function(a){c.push(["li",b.B+"-"+a.index.toString(),["label","",["input","iv-card-poll-choice-input",{type:"checkbox",role:"radio",name:b.B+a.index.toString(),value:a.index.toString(),"data-poll-choice-index":a.index.toString()}],["span","iv-card-poll-choice-text",["span","iv-card-poll-choice-percent"],P5(this,"span",void 0,a.desc)]],["div","iv-card-poll-result",["div","iv-card-poll-result-bar"]]])},a);
var d={};b.A&&(d["aria-label"]=g.U("YTP_DRAWER_POLL_TITLE_ARIA_LABEL",{POLL_TITLE:b.title}));var e=["iv-card","iv-card-poll"],d=[["div","iv-card-content",P5(a,"h2",d,b.title),["form","",["fieldset","",c]]]];b.A&&(e.push("iv-card-unavailable"),d.push(["div",["iv-card-sign-in"],["h2","",g.U("YTP_DRAWER_POLL_SIGNIN_TITLE")],["a",["iv-card-sign-in-button","iv-button"],{href:Z4(b.A)},["span",["iv-button-content"],g.U("YTP_SIGN_IN")]]]));e=new g.X(["div",e].concat(d));d=e.element;Lqa(b,d);ipa(a.g.g,d,g.za(a.F,
b),a);(0,g.F)(g.ie("iv-card-poll-choice-input",d),function(a){this.g.g.T(a,"focus",g.za(this.o,!0));this.g.g.T(a,"blur",g.za(this.o,!1))},a);
b.A&&a.A(g.J("iv-card-sign-in-button",d),b.A,b.id,b.jd,b.Qb,b.o.click,5);return e},T5=function(a,b,c,d){var e=Q5(a,b.url,b.id),f=b.displayDomain?["div",
"iv-card-image-text",b.displayDomain]:"",k=Nqa(a,b),l=["iv-card"];b.A&&l.push("iv-card-unavailable");e=["div",l,["a","iv-click-target",{href:e},R5(b.imageUrl,f),["div","iv-card-content",P5(a,"h2",void 0,b.title),k]]];b.A&&(e=e.concat([["div",["iv-card-sign-in"],P5(a,"h2",void 0,b.H||""),["p","",b.G],["a",["iv-card-sign-in-button","iv-button"],{href:Z4(b.A)},P5(a,"span","iv-button-content",g.U("YTP_SIGN_IN"))]]]));e=new g.X(e);S5(a,e,b,c,d);return e},Oqa=function(a,b,c){var d=Q5(a,b.url,b.id),e=["yt-badge",
"standalone-ypc-badge-renderer-icon",b.H?"standalone-ypc-badge-renderer-icon-purchased":"standalone-ypc-badge-renderer-icon-available"],f={},e=b.G&&b.B?["span",e,f,b.B]:"";c=["div",["iv-card",c],["a","iv-click-target",{href:d},R5(b.J,e?["div","iv-card-image-text",e,b.priceText]:""),["div","iv-card-content",["h2","iv-card-primary-link",b.title],U5(a,b)]]];c=new g.X(c);S5(a,c,b);return c},V5=function(a,b){return b.customMessage?P5(a,"div","iv-card-message",b.customMessage):""},R5=function(a,b){var c=
["div",
"iv-card-image",{style:"background-image: url("+a+");"}];b&&c.push(b);return c},U5=function(a,b){if(!b.g||0==b.g.length)return"";
var c=["ul","iv-card-meta-info"];(0,g.F)(b.g,function(a){c.push(P5(this,"li","",a))},a);
return c},P5=function(a,b,c,d){c?g.y(c)?c={"class":c}:g.ra(c)&&(c={"class":c.join(" ")}):c={};
c.dir=g.mp(a.B,d);return[b,c,d]},Nqa=function(a,b){if(!b.customMessage)return"";
var c=["iv-card-action","iv-card-primary-link"],d={};b.g&&(c.push("iv-card-action-icon"),d.style="background-image: url("+b.g+");");d.dir=g.mp(a.B,b.customMessage);c=["div",c,d,["span","",b.customMessage]];b.showLinkIcon&&(c.push("\u00a0"),c.push(["span","iv-card-link-icon"]));return c},Lqa=function(a,b){var c=0;
(0,g.F)(a.choices,function(a){c+=a.count});
for(var c=c||1,d=0;d<a.choices.length;d++){var e=a.choices[d],f=g.J(a.B+"-"+e.index.toString(),b),e=e.count/c;null==a.g&&(e=0);g.T(f.getElementsByTagName("label")[0],"iv-card-poll-choice-checked",a.g==d);f.getElementsByTagName("input")[0].checked=a.g==d;g.Je(g.J("iv-card-poll-choice-percent",f),g.U("YTP_DRAWER_POLL_PERCENT",{PERCENT:Math.floor(100*e).toFixed(0)}));g.fh(g.J("iv-card-poll-result-bar",f),"transform","scaleX("+e.toFixed(2)+")")}g.T(b,"iv-card-poll-voted",null!=a.g);g.T(b,"iv-card-poll-expanded",
null!=a.g&&1<a.choices.length)},Pqa=function(a,b,c,d){d?(c&&a.g.videoData.Ca||a.g.o.wd(),a.g.o.isFullscreen()&&g.CV(a.g.o),I5(a.g.logger,b.Qb,d,void 0,b.o.click,5)):b.url&&a.C(b.url,b.id,b.jd,b.Qb,b.o.click||[],5)},Q5=function(a,b,c){return b?u5(b,c,a.g.videoData.videoId,a.g.C):null},S5=function(a,b,c,d,e){c.A&&Qqa(a,g.ie("iv-card-sign-in-button",b.element),c,c.A,e);
c.url&&Qqa(a,g.ie("iv-click-target",b.element),c,c.url,d)},Qqa=function(a,b,c,d,e){(0,g.F)(b,function(a){if(e){var b=(0,g.z)(function(a){a.stopPropagation();
a.preventDefault();e();return!1},this);
this.g.g.T(a,"click",b)}else d&&this.A(a,d,c.id,c.jd,c.Qb,c.o.click,5)},a)},Rqa=function(a){var b=0;
-1!=a.indexOf("h")&&(a=a.split("h"),b=3600*a[0],a=a[1]);-1!=a.indexOf("m")&&(a=a.split("m"),b=60*a[0]+b,a=a[1]);-1!=a.indexOf("s")?(a=a.split("s"),b=1*a[0]+b):b=1*a+b;return b},Tqa=function(a,b){Sqa(a,function(c){return new xqa(a.id,c,b)})},Uqa=function(a,b){return b?new g.Qg(a.x+b.left,a.y+b.top,b.width,b.height):null},W5=function(){K5.call(this)},X5=function(){x5.call(this)},Y5=function(){x5.call(this)},Vqa=function(a,b,c,d,e,f,k,l,m,n,q,r,v,w,B){this.id=a;
this.author=b;this.type=c;this.style=d;this.B=e;this.o=f;this.A=k||[];this.F=l||[];this.g=m;this.D=n;this.C=q;this.htmlBlob=v;this.data=w;this.Qb=B},Z5=function(a){return(a=Wqa(a,function(a){return"openUrl"==a.type&&null!=a.url}))?a.url:null},a6=function(a){return $5(a,function(a){return"click"==a.trigger})},$5=function(a,b){return(0,g.Tk)(a.A,b,void 0)},Xqa=function(a,b,c){(0,g.F)(a.A,b,c)},Wqa=function(a,b){return g.bb(a.A,b,void 0)},Yqa=function(a,b,c){(0,g.F)(a.F,b,c)},Sqa=function(a,b){(0,g.H)(a.F,
b,void 0)},b6=function(a){return(a=Zqa(a))?eqa(a):null},Zqa=function(a){a.o?(a=a.o,a=a.g.length?a.g[0]:null):a=null;
return a},$qa=function(a,b){var c=b6(a);
return c&&b?T4(b,c.o,c.g?c.g:"xy"):1},ara=function(a){if(!a)return null;
var b=z5(a.condition,Aqa),c=z5(a.notCondition,Aqa),d=a5(a.show_delay,!1);a=a5(a.hide_delay,!1);return b||c?new yqa(b,c,d,a):null},bra=function(a,b){this.g=a;
this.o=b||null},Epa=function(a,b){var c;
c=a.o?Y4(a.o,new bra(a.g)):a.g;var d=b.clone(),e=c.left;c=c.top;e instanceof g.Yd?(d.left+=e.x,d.top+=e.y):(d.left+=e,g.ua(c)&&(d.top+=c));return d},era=function(a){if(!a)return null;
var b=b5(a.type,cra),c=b5(a.trigger,dra),d=n5(B5(a.url));B5(a.subscribeData);return b?new Fqa(b,c,d):null},c6=function(a){var b=g.GH()||"";
Gqa(q5(),b,a)},fra=function(a,b,c,d){b={csn:b,
parentVisualElement:J4(c),visualElements:(0,g.H)(d,function(a){return J4(a)})};
f5(a,{attachChild:b},void 0)},gra=function(a,b){return(b&8&&F5(a)?b^4:b)&-9},hra=function(a){return 3*a*a-2*a*a*a},ira=function(a){return Math.pow(a,3)},d6=function(a,b,c,d,e){if(2!=b.length||2!=c.length)throw Error("Start and end points must be 2D");
M5.apply(this,arguments)},e6=function(a,b,c){N5.call(this,a,b,c);
this.F=this.B=this.G=!1;this.D=5E3;this.A=null;this.Qj=g.K("DIV","iv-promo-contents");this.g=this.o=this.ld=null;this.C=new g.ou(function(){this.ld.setAttribute("aria-hidden",!0);g.N(this.o,!1);g.N(this.g,!0)},700,this)},jra=function(a){var b=a.annotation.data,c;
if("cta"==a.annotation.style)c=6;else if("video"==a.annotation.style||"playlist"==a.annotation.style)c=7;a.D=b.collapse_delay_ms||a.D;var d=["iv-promo","iv-promo-inactive"];a.oa().setAttribute("aria-hidden",!0);a.oa().setAttribute("aria-label",g.U("YTP_INVIDEO_PROMOTION_ARIA_LABEL"));a.oa().tabIndex=0;var e=Z5(a.annotation),f;if(b.image_url){f=g.K("DIV",["iv-promo-img","iv-click-target"]);var k=g.K("IMG",{src:b.image_url,"aria-hidden":"true"});f.appendChild(k);b.video_duration&&!b.is_live?(k=g.K("SPAN",
"iv-promo-video-duration",b.video_duration),f.appendChild(k)):b.playlist_length&&(k=g.K("SPAN","iv-promo-playlist-length",b.playlist_length.toString()),f.appendChild(k));e&&a.tj(f,e,a.annotation.id,b.session_data,a.annotation.Qb,void 0,c)}e?a.ld=g.K("A",{href:Z4(e),"class":"iv-promo-txt"}):a.ld=g.K("DIV","iv-promo-txt");var l,m,n,q;switch(a.annotation.style){case "cta":case "website":l=g.K("P",null,g.K("STRONG",null,b.text_line_1));m=g.K("P",null,g.K("SPAN","iv-promo-link",b.text_line_2));b.text_line_3&&
(d.push("iv-promo-website-card-cta"),n=g.K("P",null,g.K("SPAN","iv-promo-action-text",b.text_line_3)));g.R(a.ld,"iv-click-target");e&&a.tj(a.ld,e,a.annotation.id,b.session_data,a.annotation.Qb,void 0,c);break;case "playlist":case "video":l=g.K("P",null,g.K("SPAN",null,b.text_line_1));m=g.K("P",null,g.K("STRONG",null,b.text_line_2));b.is_live&&(l=m,m=g.K("SPAN",["yt-badge","iv-promo-badge-live"],g.U("YTP_LIVE_NOW")));g.R(a.ld,"iv-click-target");e&&a.tj(a.ld,e,a.annotation.id,b.session_data,a.annotation.Qb,
void 0,c);d.push("iv-promo-video");break;case "vote":l=g.K("P",null,g.K("STRONG",null,b.text_line_1)),m=g.K("P",null,g.K("SPAN",null,b.text_line_2)),q=g.K("DIV","iv-promo-button-container"),c=g.K("BUTTON",["iv-button","iv-promo-button"],g.K("SPAN","iv-button-content",b.button_text)),a.context.g.T(c,"click",function(a){a.stopPropagation();I5(this.context.logger,this.annotation.Qb,null,{contest_vote:"1"},(b.tracking||{}).vote);a=this.annotation.data;this.ld=g.J("iv-promo-txt",this.Qj);var c=g.J("iv-promo-button-container",
this.Qj),d=g.K("DIV",["iv-promo-txt","iv-click-target"]),e=g.K("P",null,g.K("STRONG",null,a.text_line_3)),f=g.K("P",null,a.text_line_4);g.we(d,e,f);g.Ae(c);g.Be(d,this.ld);g.Eq(this.oa(),"iv-promo-with-button");(c=Z5(this.annotation))&&this.tj(d,c,this.annotation.id,a.session_data,this.annotation.Qb)},a),q.appendChild(c),d.push("iv-promo-with-button")}l&&a.ld.appendChild(l);
m&&a.ld.appendChild(m);n&&a.ld.appendChild(n);a.Qj.appendChild(a.ld);q&&a.Qj.appendChild(q);l=g.K("DIV","iv-promo-actions");a.g=g.K("BUTTON",["iv-promo-expand","ytp-button"]);a.g.title=g.U("YTP_EXPAND");a.context.g.T(a.g,"click",g.za(a.iq,5E3),a);l.appendChild(a.g);g.N(a.g,!1);a.context.g.T(a.oa(),"mouseover",a.sG,a);a.context.g.T(a.oa(),"mouseout",a.rG,a);a.context.g.T(a.oa(),"touchend",g.za(a.iq,5E3),a);a.o=g.K("BUTTON",["iv-promo-close","ytp-button"]);a.o.title=g.U("YTP_CLOSE");a.context.g.T(a.o,
"click","cta"==a.annotation.style&&b.text_line_3?a.hG:a.VR,a);l.appendChild(a.o);g.Dq(a.oa(),d);f&&g.ve(a.oa(),f);g.ve(a.oa(),a.Qj);g.ve(a.oa(),l)},kra=function(a){a.B||a.F||a.A||(g.R(a.oa(),"iv-promo-collapsed"),a.B=!0,a.C.start())},lra=function(a){a.C.stop();
a.B&&(g.Fq(a.oa(),["iv-promo-collapsed","iv-promo-collapsed-no-delay"]),a.B=!1,a.ld&&a.ld.removeAttribute("aria-hidden"),g.N(a.g,!1),g.N(a.o,!0))},mra=function(a,b){a.A||(a.A=g.qg(function(){f6(this);
kra(this)},b,a))},f6=function(a){a.A&&(g.rg(a.A),a.A=null)},g6=function(a,b,c){N5.call(this,a,b,c);
this.H=b;this.o=null;this.F=!1;this.A=null;this.B=!1;this.G=0;this.g=this.D=this.C=null},h6=function(a,b,c){G5.call(this,b,c);
this.W=a;this.L=null;this.an=this.ga=this.B=this.ia=!1;this.ma=null;this.mp=new g.ou(g.x,c.C.useTabletControls?4E3:3E3);this.Na=new g.ou(g.x);this.C=new O5(c,(0,g.z)(this.tj,this),(0,g.z)(this.fn,this));a=["div","iv-drawer",["div","iv-drawer-header",{"aria-role":"heading"},["span","iv-drawer-header-text"],["button",["iv-drawer-close-button","ytp-button"],{"aria-label":g.U("YTP_DRAWER_CLOSE_BUTTON_ARIA_LABEL"),tabindex:"0"}]],["div","iv-drawer-content"]];this.H=new g.X(a);this.D=this.H.element;this.ea=
new g.aW(this.H,330);this.pa=g.J("iv-drawer-header-text",this.D);this.A=g.J("iv-drawer-content",this.D);a=["iv-drawer-teaser"];a.push("iv-exp-cards-teaser-prominent");a=["div",a,["div","iv-drawer-teaser-box"],["div","iv-drawer-teaser-text"],["button","iv-drawer-open-button",{"aria-label":g.U("YTP_CARDS_BUTTON_ARIA_LABEL"),"aria-haspopup":"true"},["span"]]];new g.X(a);this.o=[];this.da=this.J=this.F=this.M=this.g=null;this.ca=[];H5(this,0,1E3*c.videoData.lengthSeconds,"",this.TE,this.wF);this.G=this.ba=
this.S=null},sra=function(a,b){var c=b&&b.data&&b.data.card_type;
if(c&&nra[c]){c=new nra[c](b.id,b.data,b.Qb);a.ia||(g.Dq(a.oa(),["html5-stop-propagation","iv-drawer-manager"]),g.RV(a.W,a.D,6),ora(a),a.J=g.J("ytp-cards-button"),a.da=g.J("iv-drawer-close-button",a.D),a.ia=!0);pra(a,c.id);var d=qra(a,c);if(d){var e={bc:c,sp:d.element,lx:!1},f=rra(a,e);g.tb(a.o,f,0,e);d.Ha(a.A,f);a.Ol();c.autoOpen?H5(a,c.startMs,0x8000000000000,c.id,g.za(a.dP,e)):(d=1E3*a.context.o.getCurrentTime(),5E3>d&&d>c.startMs&&a.dA(e),H5(a,c.startMs,c.startMs+1,c.id,g.za(a.dA,e)),i6(a))}}},
tra=function(a,b){b.data.autoOpenMs&&H5(a,b.data.autoOpenMs,0x8000000000000,"",a.TR);
b.data.autoCloseMs&&H5(a,b.data.autoCloseMs,0x8000000000000,"",a.Xl);var c=b.data.headerText;g.Je(a.pa,c);a.J&&a.J.setAttribute("title",c);b.data.eventId&&(a.L=b.data.eventId);a.S=new g.RG(b.data.trackingParams);a.G=new g.RG(b.data.closeTrackingParams);a.ba=new g.RG(b.data.iconTrackingParams)},pra=function(a,b){var c=ura(a,b);
c&&(c==a.g&&(a.g=null),a.W.dB(c.bc.id),g.Ae(c.sp),g.nb(a.o,c),a.Ol(),i6(a))},l6=function(a,b,c,d){if(!a.B){a.ea.show();
a.M=new g.ou(function(){g.R(this.context.o.getRootNode(),"ytp-iv-drawer-open")},0,a);
a.M.start();a.B=!0;a.N=(0,g.E)();j6(a.context.logger,a.L,7,void 0,d&&d.bc?d.bc.Qb:void 0);a.S&&a.G&&c6([a.S,a.G]);var e={TRIGGER_TYPE:b};(0,g.F)(a.o,function(a){a.lx||(a.lx=!0,k6(this.context.logger,a.bc.Qb,a.bc.o.ZH,e));c6([a.bc.C])},a);
I4(a.W);c&&(a.F=new g.ou(function(){this.aa=this.J;this.da.focus()},330,a),a.F.start())}},ora=function(a){a.context.g.T(g.J("iv-drawer-close-button",a.D),"click",a.pF,a);
a.context.g.T(a.A,"touchend",function(){this.mp.start()},a);
a.context.g.T(a.A,"scroll",a.BF,a);a.ma=g.gG(a.A,"mousewheel",(0,g.z)(a.UR,a));a.context.A.subscribe("onHideControls",function(){this.an=!0},a);
a.context.A.subscribe("onShowControls",function(){this.an=!1},a);
a.context.A.subscribe("onVideoAreaChange",function(){this.an=g.Cq(this.W.getRootNode(),"ytp-autohide")},a);
a.ca.push(g.WG("iv-teaser-shown",a.tI,a));a.ca.push(g.WG("iv-teaser-clicked",a.sI,a))},qra=function(a,b){switch(b.type){case "simple":return T5(a.C,b);
case "collaborator":var c=a.C,d=["div",["iv-card","iv-card-channel"],["a",["iv-click-target","g-hovercard"],{href:Q5(c,b.url,b.id),"data-ytid":b.channelId},R5(b.profileImageUrl),["div","iv-card-content",V5(c,b),["h2","iv-card-primary-link",b.title],U5(c,b)]]],d=new g.X(d);S5(c,d,b);return d;case "donation":return c=a.C,d=(0,g.z)(c.D,c,b),T5(c,b,d,d);case "episode":return Oqa(a.C,b,"iv-card-episode");case "movie":return Oqa(a.C,b,"iv-card-movie");case "playlist":return c=a.C,d=["div",["iv-card","iv-card-playlist"],
["a","iv-click-target",{href:Q5(c,b.url,b.id)},R5(b.B,["div","iv-card-image-overlay",["span","iv-card-playlist-video-count",b.playlistVideoCount.toString()]]),["div","iv-card-content",V5(c,b),P5(c,"h2","iv-card-primary-link",b.title),U5(c,b)]]],d=new g.X(d),S5(c,d,b),d;case "poll":return Mqa(a.C,b);case "productListing":var c=a.C,d=Q5(c,b.url,b.id),e=!g.gb(b.offers),f=["iv-card"],k="",l=Nqa(c,b);e&&(f.push("iv-card-product-listing"),k="iv-card-primary-link",l=b.offers[0],e=["div",null],l.price&&e.push(["div",
"iv-card-offer-price",l.price]),l.merchant&&e.push(["div","iv-card-offer-merchant",l.merchant]),l=e);e=b.sponsored?["div","iv-card-sponsored",g.U("YTP_SPONSORED"),["div","iv-ad-info-container",["div","iv-ad-info","{{adInfo}}"],["div","iv-ad-info-icon-container",["div","iv-ad-info-icon"],["div","iv-ad-info-callout"]]]]:"";d=["div",f,{tabindex:"0"},["a",["iv-card-image","iv-click-target"],{style:"background-image: url("+b.imageUrl+");",href:d,"aria-hidden":"true",tabindex:"-1"}],["div","iv-card-content",
e,["a","iv-click-target",{href:d},P5(c,"h2",k,b.title),l]]];d=new g.X(d);f=g.te("span");g.Je(f,g.U("YTP_SPONSORED_PRODUCT_INFO"));d.Ic(f,"adInfo");S5(c,d,b);return d;case "tip":return c=a.C,d=(0,g.z)(c.G,c,b),T5(c,b,d,d);case "video":return c=a.C,d=Q5(c,b.url,b.id),f=b.videoDuration?["span","iv-card-video-duration",b.videoDuration]:"",k=b.B?["span",["yt-badge","yt-badge-live"],g.U("YTP_LIVE_NOW")]:"",d=["div",["iv-card","iv-card-video"],["a","iv-click-target",{href:d},R5(b.G,f),["div","iv-card-content",
V5(c,b),P5(c,"h2","iv-card-primary-link",b.title),U5(c,b),k]]],d=new g.X(d),S5(c,d,b),d}return null},rra=function(a,b){if(0==a.o.length)return 0;
var c=g.cb(a.o,function(a){return b.bc.startMs>a.bc.startMs||b.bc.startMs==a.bc.startMs&&b.bc.timestamp>=a.bc.timestamp?!0:!1});
return-1==c?0:c+1},vra=function(a){return a.g?"productListing"==a.g.bc.type:(0,g.rs)(a.o,function(a){return"productListing"==a.bc.type})},i6=function(a){g.T(a.W.getRootNode(),"ytp-cards-shopping-active",vra(a))},wra=function(a,b){if(a.H.o){var c=new D5([0,
a.A.scrollTop],[0,b.sp.offsetTop],600,hra);g.Tm(a.context.B,c,"animate",function(a){this.A.scrollTop=a.y},void 0,a);
g.Tm(a.context.B,c,"finish",function(a){this.A.scrollTop=a.y},void 0,a);
c.play()}else a.H.Ib(!0),a.A.scrollTop=b.sp.offsetTop,a.H.Ib(!1)},m6=function(a){return a.g&&a.g.bc?a.g.bc:a.o[0]&&a.o[0].bc?a.o[0].bc:null},ura=function(a,b){return g.bb(a.o,function(a){return a.bc.id==b},a)},xra=function(a){this.W=a;
this.g={}},k6=function(a,b,c,d){if(b){var e=n6(a,b);
a.g[b]=e["p-time"];e["iv-event"]=e.link||e["l-class"]||e["link-id"]?2:7;b=o6(a,"cta_annotation_shown",e,c);p6(a,e,yra(b,d))}},I5=function(a,b,c,d,e,f){if(b){var k=n6(a,b);
k["iv-event"]=3;k["i-time"]=a.g[b]||"";g.bc(k,d||{});b=o6(a,"cta_annotation_clicked",k,e);p6(a,k,b,c,f)}},q6=function(a,b){if(b){var c=n6(a,b);
c["iv-event"]=4;c["i-time"]=a.g[b]||"";var d=o6(a,"cta_annotation_closed",c);p6(a,c,d)}},yra=function(a,b){return b?(0,g.H)(a,g.za(function(a,b){return g.dn(b,a)},b||{})):a},o6=function(a,b,c,d){d=g.qb(d||[]);
if(30==c["a-type"]){a:{c=c["a-id"];a=a.W.getVideoData();if(a.vu){if((b=a.vu[b])&&g.r4.test(b)){a=g.Ga("[ANNOTATION_ID]");0<=b.indexOf("[ANNOTATION_ID]")?b=b.replace("[ANNOTATION_ID]",c):0<=b.indexOf(a)&&(b=b.replace(a,c));break a}}else if(a.jj){b=g.uF(a.jj,{label:b,value:"a_id="+c});break a}b=""}b&&d.push(b)}return d},p6=function(a,b,c,d,e){var f=1,k,l=-1;
if(d){var m=!1;k=function(){f--;f||m||((0,window.clearTimeout)(l),m=!0,d())};
l=(0,window.setTimeout)(function(){m=!0;d()},1E3)}(0,g.F)(c||[],function(a){f++;
g.OG(a,k)});
e&&(f++,0!=e&&a.W.fi(e,k));zra(a,b,k)},n6=function(a,b){var c={};
if(b){var d=new g.Fm(b);(0,g.F)(d.wb(),function(a){c[a]=(0,window.escape)(d.get(a,""))})}c["p-time"]=a.W.getCurrentTime().toFixed(2);
c.ps=g.Y(a.W).o;return c},j6=function(a,b,c,d,e){e=n6(a,e);
e["iv-event"]=c;b&&(e.ei=b);e["a-id"]||(e["a-id"]="card:drawer");e["a-type"]=51;p6(a,e,d)},r6=function(a,b,c,d){c&&(c=n6(a,c),c["iv-event"]=b,p6(a,c,d))},zra=function(a,b,c){g.GV(a.W,"iv",b,c)},Ara=function(a){a=Z4(a);
a=a.replace(/https?:\/\//g,"");return k5(a)?(a=g.sF(a))&&a.v?a.v:null:null},Bra=function(a){a=Z4(a);
if(!a)return null;a=a.replace(/https?:\/\//g,"");var b;(b=!k5(a))||(b=g.xg(g.wg(a)[5]||null)||"",b=b.split("/"),b="/"+(1<b.length?b[1]:""),b="/watch"!=b);if(b)return null;b=g.sF(a);if(!b||!b.v)return null;if(b.t)return Rqa(b.t);a=a.split("#",2);return!a||2>a.length?null:(a=g.mF(a[1]))&&a.t?Rqa(a.t):-1},Cra=function(a,b,c,d,e,f,k){this.g=a;
this.B=b;this.C=c;this.videoData=d;this.logger=e;this.o=f;this.A=k},s6=function(a,b,c){this.o=a;
this.annotation=b;this.view=c;this.g=null;this.B=this.isVisible=!1;Tqa(b,a)},Dra=function(a){a.o.unsubscribe("resize",a.C,a);
a.o.unsubscribe("onVideoAreaChange",a.A,a)},t6=function(a){a.g&&(a.g.stop(),a.g=null)},Era=function(a,b,c,d,e){this.g=a;
this.ba=b;this.D=c;this.Na=d;this.ea=e;this.N=!1;this.F=new g.qG(this);this.S=this.C=this.G=this.M=this.o=null;this.ca=!1;this.da=this.J=this.L=null;this.rr=new g.uk(this.SR,100,this);this.H=new g.ou(this.yw,500,this);this.aa=this.A=this.B=null},Fra=function(a,b){var c=(0,g.z)(function(a,c,f){c=f?u6(this,c,(0,g.z)(f,this)):u6(this,c);
this.F.T(b,a,c)},a);
c("mouseover","d",a.CB);c("mouseout","c",a.bh);c("click","a");c("touchend","a")},Gra=function(a){if(a.g.C){var b;
$5(a.g,function(a){return"close"==a.type})?b=a.o:(a.B=g.K("DIV","annotation-close-button"),g.N(a.B,!1),g.SF(a.B,"annotation_id",a.g.id),a.o.appendChild(a.B),b=a.B);
var c=function(a){a.stopPropagation()};
a.F.T(b,"click",u6(a,"b",c));a.F.T(b,"touchend",u6(a,"b",c))}},u6=function(a,b,c){return(0,g.z)(function(a){if(this.ea)c&&c(a);
else if(a.event.target instanceof window.Element){var d=a.event.target;g.N(d,!1);try{var f=window.document.elementFromPoint(a.event.clientX,a.event.clientY);if(g.Qe(f,"annotation")){var k=window.document.createEvent("MouseEvent");k.initMouseEvent(a.event.type,a.event.bubbles,a.event.cancelable,a.event.view,a.event.detail,a.event.screenX,a.event.screenY,a.event.clientX,a.event.clientY,a.event.ctrlKey,a.event.altKey,a.event.shiftKey,a.event.metaKey,a.event.button,a.event.relatedTarget);f.dispatchEvent(k)}}finally{g.N(d,
!0)}}d=g.yh(a.target);a=new g.Yd(a.clientX,a.clientY);"c"==b&&d.contains(a)||this.Na.U(b,this.g)},a)},w6=function(a){if(a.o||a.A){var b=b6(a.g);
if(b){var c=v6(a);if(a.o){var b=Y4(b,c),d=g.e_(g.AV(a.D));g.wh(a.o,b.width,b.height);g.lh(a.o,b.left,b.top);a.M=new g.Qg(d.left+b.left,d.top+b.top,b.width,b.height);var e;e=(e=b6(a.g))&&d?wpa(d,e.B,e.g?e.g:"xy"):1;var f=$qa(a.g,d),d=a.g.g;d.padding?d=d.padding:(d="speech"==a.g.style?1.6:.8,d=new g.Pg(d,d,d,d));d=new g.Pg(360*d.top*f/100,640*d.right*e/100,360*d.bottom*f/100,640*d.left*e/100);a.C&&(d.right+=1.5*c.g.height/100);a.o.style.padding=d.top+"px "+d.right+"px "+d.bottom+"px "+d.left+"px";"label"==
a.g.style&&a.G&&(a.G.style.padding=a.o.style.padding);var d=c.g,k=!1,l=0,m=0,n;n=g.e_(g.AV(a.D));var q=hpa(a.D.app.A.C);g.Sg(n,q)?n=null:(q.top+=20,q.height-=40,"player_relative"!=a.g.D&&(q.left-=n.left,q.top-=n.top),n=q);n&&(l=n.top-(b.top+b.height),m=b.top-(n.top+n.height),k=0<l||0<m);if(k&&n){d=n;e=l;var f=m,r;a.C&&(m=Hra(a,23,b,e,f),a.B&&(r=43-m.width,0<r&&(b.left+m.left-r>d.left&&(m.left-=r),m.width+=r)),r=m,g.wh(a.C,m.width,m.height),g.lh(a.C,m.left,m.top));a.B&&(r?b=new g.Yd(r.left+r.width-
23-18,a.ca?r.top+2:r.top+r.height-18-2):(r=Hra(a,18,b,e,f),b=new g.Yd(r.left,r.top),g.wh(a.B,r.width,r.height)),g.lh(a.B,b));a.S=new g.Qg(a.M.left+r.left,a.M.top+r.top,r.width,r.height);a.L=a.F.T(g.AV(a.D),"mousemove",a.kM)}else a.C&&(r=e/f*d.height*4.2/100,r=new g.ae(r,r),"highlight"==a.g.type||"label"==a.g.style?(e=1.5*d.height/100,r=new g.Qg(b.width-r.width-e,b.height-r.height-e,r.width,r.height)):r=new g.Qg(b.width-r.width-3*d.height/100,(b.height-r.height)/2,r.width,r.height),g.wh(a.C,r.width,
r.height),g.lh(a.C,r.left,r.top)),a.B&&(r=9<=d.left+d.width-(b.left+b.width),e=9<=b.top-d.top,g.lh(a.B,r&&e?new g.Yd(b.width-9,-9):r?new g.Yd(b.width-9,45<b.height?9:b.height-9):e?new g.Yd(45<b.width?b.width-9-18:-9,-9):b.width/d.width>b.height/d.height?new g.Yd(45<b.width?b.width-9-18:-9,b.height-9):new g.Yd(-9,45<b.height?9:b.height-9)))}a.A&&a.A.A(a.g,c);if(a.o){c=a.o;b=a.g.g;c.style.color="highlightText"==a.g.style?b.G:b.A;r=g.e_(g.AV(a.D));c.style.fontSize=360*b.textSize*$qa(a.g,r)/100+"px";
r=a.g.style;c.style.textAlign=b.textAlign?b.textAlign:"title"==r||"highlightText"==r?"center":"left";b.D&&(c.style.fontWeight=b.D);a=a.o;c=a.style.overflow;r=(b=g.J("annotation-link-icon",a))?g.Ah(b):!1;e=(d=g.J("annotation-close-button",a))?g.Ah(d):!1;r&&g.N(b,!1);e&&g.N(d,!1);m=f="";if(l=g.J("inner-text",a))f=l.style.overflow,m=l.style.position,l.style.overflow="visible",l.style.position="static";a.style.overflow="scroll";if(a.scrollHeight>a.offsetHeight||a.scrollWidth>a.offsetWidth){n=k=Kqa(a);
for(var q=5,v=Math.floor(k/2);v;)a.scrollHeight<=a.offsetHeight&&a.scrollWidth<=a.offsetWidth?(q=n,n=Math.min(n+v,k)):n=Math.max(n-v,q),v=Math.floor(v/2),a.style.fontSize=n+"px";n!=q&&(a.scrollHeight>a.offsetHeight||a.scrollWidth>a.offsetWidth)&&(a.style.fontSize=q+"px")}a.style.overflow=c;l&&(l.style.overflow=f,l.style.position=m);e&&g.N(d,!0);r&&g.N(b,!0)}}}},Hra=function(a,b,c,d,e){var f=0<e;
b=new g.Qg(0,c.height-b,Math.max(c.width,b),b);0<d&&(b.top=c.height,20<d&&(b.height+=d-20),g.R(a.o,"annotation-extend-down"));f&&(b.top=-b.height,20<e&&(c=e-20,b.top-=c,b.height+=c),g.R(a.o,"annotation-extend-up"),a.ca=!0);return b},x6=function(a){return"label"!=a.g.style||a.A.g},v6=function(a){var b;
b=g.e_(g.AV(a.D));if("player_relative"==a.g.D){var c=g.AV(a.D).Ua();b=new g.Qg(-b.left,-b.top,c.width,c.height)}else b=new g.Qg(0,0,b.width,b.height);return new bra(b,a.aa?b6(a.aa):null)},Kra=function(a){if(!a)return null;
var b=A5(a.id),c=A5(a.author),d=b5(a.type,Ira),e=b5(a.style,y6),f=c5(B5(a.TEXT)),k=c5(a.data),k=0!=k.length?g.Jc(k):{},l;var m=B5(a.segment);m?(A5(m.timeRelative),l=A5(m.spaceRelative),l=(m=z5(m.movingRegion,Dqa))?new Bqa(l,m):null):l=null;var m=z5(a.action,era),n=z5(a.trigger,ara),q=Eqa(B5(a.appearance));q||(q=Eqa({}));var r=b5(a.coordinate_system,Jra,"video_relative"),v=a5(a.closeable,!0),w=c5(a.html_blob);a=c5(a.log_data);return b&&d?new Vqa(b,c,d,e,f,l,m,n,q,r,v,0,w,k,a):null},z6=function(a){return"creator-endscreen-editor"===
a},Lra=function(a,b){function c(a){return a.baseUrl}
function d(a){if(a){if(a.simpleText)return a.simpleText;if(a.runs)return(0,g.H)(a.runs,function(a){return a.text}).join("")}}
function e(a){var b=[];a.videoId&&b.push("v="+a.videoId);a.playlistId&&b.push("list="+a.playlistId);a.startTimeSeconds&&b.push("t="+a.startTimeSeconds);return"/watch?"+b.join("&")}
var f={};f.startMs=(0,window.parseInt)(a.startMs,10);f.impressionUrls=(0,g.H)(a.impressionUrls||[],c);f.skip=a.skipEndscreen;f.visualElement=new g.RG(a.trackingParams);f.elements=(0,g.H)(a.elements||[],function(a,f){var k=a.endscreenElementRenderer,l={},q=k.style,r=k.endpoint;l.id="element-"+f;l.type=q;l.title=d(k.title);l.metadata=d(k.metadata);l.callToAction=d(k.callToAction);l.Fp=k.image;l.Fl=k.animatedImage;l.left=(0,window.parseFloat)(k.left);l.width=(0,window.parseFloat)(k.width);l.top=(0,window.parseFloat)(k.top);
l.aspectRatio=(0,window.parseFloat)(k.aspectRatio);l.startMs=(0,window.parseInt)(k.startMs,10);l.endMs=(0,window.parseInt)(k.endMs,10);r&&(l.jd={itct:r.clickTrackingParams},l.clickUrls=(0,g.H)(r.loggingUrls||[],c));k.title.accessibility&&(l.Jj=k.title.accessibility.accessibilityData.label);l.impressionUrls=(0,g.H)(k.impressionUrls||[],c);l.zw=(0,g.H)(k.hovercardShowUrls||[],c);l.visualElement=new g.RG(k.trackingParams);if("VIDEO"==q)r&&(l.targetUrl=e(r.watchEndpoint)),l.sk=!1,l.Rk=b,l.videoDuration=
d(k.videoDuration);else if("PLAYLIST"==q)l.targetUrl=e(r.watchEndpoint),l.sk=!1,l.Rk=b,l.playlistLength=d(k.playlistLength);else if("CHANNEL"==q)if(q=r.browseEndpoint.browseId,l.channelId=q,l.targetUrl="/channel/"+q,l.sk=!1,l.Rk="new",l.isSubscribe=k.isSubscribe,l.isSubscribe){a:{if(k=k.hovercardButton)if(k=k.subscribeButtonRenderer){var v;k.subscribed?(v=d(k.subscriberCountWithUnsubscribeText),q=d(k.subscriberCountText)):(v=d(k.subscriberCountText),q=d(k.subscriberCountWithSubscribeText));r=d(k.unsubscribedButtonText);
r.match(/[0-9]/)||v&&"0"!==v&&(r+=" "+v);v=d(k.subscribedButtonText);v.match(/[0-9]/)||q&&(v+=" "+q);k={subscribed:k.subscribed,feature:"endscreen",subscribeText:r,unsubscribeText:v,enabled:k.enabled};break a}k=void 0}l.subscribeButton=k}else l.subscribersText=d(k.subscribersText);else"WEBSITE"==q&&(l.targetUrl=r.urlEndpoint.url,l.sk=!0,l.Rk="new",l.Aw=k.icon.thumbnails[0].url);return l});
return f},Mra=function(a){var b={};
b.startMs=a.startMs;b.impressionUrls=a.impressionUrls;b.skip=a.skip||!1;b.visualElement=new g.RG(a.trackingParams);b.elements=(0,g.H)(a.elements||[],function(a){var b={};b.id=a.id;b.type=a.type;b.title=a.title;b.metadata=a.metadata;b.callToAction=a.callToAction;b.imageUrl=a.imageUrl;b.Fp=a.displayImages;b.Fl=a.animatedDisplayImages;b.Aw=a.iconUrl;b.left=a.left;b.width=a.width;b.top=a.top;b.aspectRatio=a.aspectRatio;b.startMs=a.startMs;b.endMs=a.endMs;b.videoDuration=a.videoDuration;b.playlistLength=
a.playlistLength;b.channelId=a.channelId;b.subscribeButton=a.subscribeButton;b.subscribersText=a.subscribersText;b.isSubscribe=a.isSubscribe;b.targetUrl=a.targetUrl;b.sk="WEBSITE"==b.type;b.jd=a.sessionData||[];b.Rk=a.targetTab;b.Jj=a.accessibilityStr;b.dI=a.isPlaceholder;b.impressionUrls=a.impressionUrls;b.zw=a.hoverUrls;b.H_=a.dismissUrls;b.clickUrls=a.clickUrls;b.visualElement=new g.RG(b.jd.itct);return b});
return b},Nra=function(){var a=g.BE("ROOT_VE_TYPE",void 0);
return a?new g.RG(void 0,a,void 0):null},Ora=function(a,b,c,d,e,f,k){a=a.clone();
var l=gra(b,c);c=g.xh(b);k=k?k.clone():c.clone();a=g.SD(a,k,l,d,e,f);if(a.status&496)return a.status;g.lh(b,g.Vg(a.rect));k=g.Ug(a.rect);g.be(c,k)||(d=k,f=g.le(g.fe(g.de(b)).g),!g.wc||g.nc("10")||f&&g.nc("8")?(b=b.style,g.ch?b.MozBoxSizing="border-box":g.pe?b.WebkitBoxSizing="border-box":b.boxSizing="border-box",b.width=Math.max(d.width,0)+"px",b.height=Math.max(d.height,0)+"px"):(e=b.style,f?(g.wc?(f=L4(b,"paddingLeft"),c=L4(b,"paddingRight"),k=L4(b,"paddingTop"),l=L4(b,"paddingBottom"),f=new g.Pg(k,
c,l,f)):(f=g.ih(b,"paddingLeft"),c=g.ih(b,"paddingRight"),k=g.ih(b,"paddingTop"),l=g.ih(b,"paddingBottom"),f=new g.Pg((0,window.parseFloat)(k),(0,window.parseFloat)(c),(0,window.parseFloat)(l),(0,window.parseFloat)(f))),g.wc&&!g.oc(9)?(c=K4(b,"borderLeft"),k=K4(b,"borderRight"),l=K4(b,"borderTop"),b=K4(b,"borderBottom"),b=new g.Pg(l,k,b,c)):(c=g.ih(b,"borderLeftWidth"),k=g.ih(b,"borderRightWidth"),l=g.ih(b,"borderTopWidth"),b=g.ih(b,"borderBottomWidth"),b=new g.Pg((0,window.parseFloat)(l),(0,window.parseFloat)(k),
(0,window.parseFloat)(b),(0,window.parseFloat)(c))),e.pixelWidth=d.width-b.left-f.left-f.right-b.right,e.pixelHeight=d.height-b.top-f.top-f.bottom-b.bottom):(e.pixelWidth=d.width,e.pixelHeight=d.height)));return a.status},Rra=function(a,b,c){if(!(a.nodeName in Pra))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);
else if(a.nodeName in Qra)b.push(Qra[a.nodeName]);else for(a=a.firstChild;a;)Rra(a,b,c),a=a.nextSibling},Sra=function(a,b,c,d){if(null!=a)for(a=a.firstChild;a;){if(b(a)&&(c.push(a),d)||Sra(a,b,c,d))return!0;
a=a.nextSibling}return!1},A6=function(a){g.XV.call(this,a);
this.G=0;this.A={};this.H={};this.Za=new xra(a);this.D=new g.BM(this);g.M(this,this.D);this.D.V(this.g,"onVideoAreaChange",(0,g.z)(this.U,this,"onVideoAreaChange"));this.D.V(this.g,"onHideControls",(0,g.z)(this.U,this,"onHideControls"));this.D.V(this.g,"onShowControls",(0,g.z)(this.U,this,"onShowControls"));this.D.V(this.g,"resize",(0,g.z)(this.U,this,"resize"));this.D.V(this.g,"presentingplayerstatechange",(0,g.z)(this.U,this,"presentingplayerstatechange"));this.subscribe("onHideControls",this.HL,
this);this.subscribe("onShowControls",this.rN,this);this.subscribe("presentingplayerstatechange",this.MM,this);this.subscribe("resize",this.Ar,this);this.subscribe("d",this.qR,this);this.subscribe("c",this.bh,this);this.subscribe("a",this.qK,this);this.subscribe("b",this.UK,this);g.Y(this.g).F.subscribe("vast_info_card_add",this.pz,this);this.g.addEventListener("crn_annotations_module",this.qB,this);this.g.addEventListener("crx_annotations_module",this.rB,this);this.L=g.K("DIV",["video-legacy-annotations",
"html5-stop-propagation"]);this.M=g.K("DIV","video-custom-annotations");this.B=new g.X(["div",["ytp-player-content","ytp-iv-player-content"]]);g.M(this,this.B);g.RV(this.g,this.B.element,5);this.B.na();this.C=new g.X(["div",["ytp-iv-video-content"]]);g.M(this,this.C);a=g.K("DIV","video-annotations",this.L,this.M);this.C.element.appendChild(a);this.F=this.o=null;this.J=[];a=g.Y(this.g);var b=this.g.getVideoData();(1!=(a.Ig||b.Ig)||b.KA)&&null===a.F.get(b.videoId)||this.load()},Tra=function(a,b){for(var c=
{},d=0;d<b.attributes.length;d++){var e=b.attributes[d];
c[e.name]=e.nodeValue}for(d=0;d<b.childNodes.length;d++)if(e=b.childNodes[d],e.tagName){var f;if(c[e.tagName])f=c[e.tagName];else if("html_blob"==e.tagName||"data"==e.tagName){0<e.childNodes.length&&(f=e.childNodes[0].nodeValue,c[e.tagName]="string"==typeof f?f.trim():f);continue}else f=[],c[e.tagName]=f;e&&"TEXT"==e.tagName?1==e.childNodes.length&&3==e.childNodes[0].nodeType?f.push(e.childNodes[0].nodeValue):f.push(""):e&&f.push(Tra(a,e))}return c},Ura=function(a,b,c){return!(a.loaded&&a.G==b&&a.g.getVideoData().videoId==
c)},Wra=function(a,b){var c=Vra(a,b);
if(!c&&"marker"!=b.type)return null;Yqa(b,function(a){a=(0,g.z)(this.NN,this,b.id,a);this.subscribe("ivTrigger:"+b.id,a)},a);
return new s6(a.ca,b,c)},Xra=function(a,b){var c=A6.o(),d=null;
switch(b.type){case "branding":if(g.Y(a.g).Cg)break;a.B.element.appendChild(c);d=new g6(c,B6(a),b);break;case "promotion":g.RV(a.g,c,5),d=new e6(c,B6(a),b)}d&&d.On();return d},$ra=function(a){var b=a.g.getVideoData();
if(b.vh){var c=g.Y(a.g),d=c.F.get(b.videoId);if(d){var e={format:"XML",Hc:{},method:"POST",withCredentials:!0};"gaming"==c.o&&(e.Hc.gaming="1");e.td=(0,g.z)(function(a,b,c){Ura(this,a,b)||(a=g.gF(c)&&c.responseXML?c.responseXML:null)&&C6(this,a)},a,a.G,b.videoId);
g.rH()&&(e.td=Yra(a,e.td));e.Ob={ic_only:"1"};Zra(e,d);g.xF(b.vh,e)}}},Zra=function(a,b){a.method="POST";
a.Ob=a.Ob||{};b.xh&&(a.Ob.ic_xml=b.xh);b.Bj&&(a.Ob.ic_track=b.Bj)},asa=function(a){var b=new g.X(["div"]);
g.N(b.element,!1);var c=new h6(a.g,b.element,B6(a));b.Ha(a.B.element);c.On();return c},B6=function(a){a.F||(a.F=new Cra(new g.qG(a),new g.Rm(a),g.Y(a.g),a.g.getVideoData(),a.Za,a.g,a.ca));
return a.F},C6=function(a,b){var c=!1;
bsa(b);for(var d=b.getElementsByTagName("annotation"),e=0;e<d.length;e++){var f=Tra(a,d[e]),k=null;try{k=Kra(f)}catch(l){}k&&(A6.A(k)?(f=Xra(a,k))&&(a.H[k.id]=f):A6.B(k)?(a.o||(a.o=asa(a)),"card"==k.type?sra(a.o,k):tra(a.o,k),c=!0):(f=Wra(a,k))&&(a.A[k.id]=f))}c&&(I4(a.g),a.Ar());g.Jb(a.A,function(a){if(a.view){var b=a.annotation;(a=a.view)&&b.o&&b.o.o&&(b=this.A[b.o.o])&&(a.aa=b.annotation)}},a)},bsa=function(a){if((a=a.getElementsByTagName("annotations"))&&!(1>a.length)){var b=a[0].getAttribute("itct");
if(b&&(a=g.GH())){var c=Nra();c&&(b=[new g.RG(b)],fra(q5(),a,c,b))}}},dsa=function(a,b,c,d){d?csa(a,b,c):D6(a,b,c)},D6=function(a,b,c){if(b=a.A[b])t6(b),c&&c.o?(a=(0,g.z)(a.ww,a,b),b.g=new g.ou(a,2E3),b.g.start()):a.ww(b)},csa=function(a,b,c){if(b=a.A[b])t6(b),c&&c.B?(a=(0,g.z)(a.nA,a,b),b.g=new g.ou(a,2E3),b.g.start()):a.nA(b)},esa=function(a,b){if("new"==b.target)return!1;
var c=Z4(b);if(!c)return!1;c=c.replace(/https?:\/\//g,"");if(!k5(c))return!1;c=g.sF(c);if(c.list||c.p)return!1;c=Ara(b);if(!c)return!1;var d=a.g.getVideoData();return d.videoId==c?!0:g.Y(a.g).B&&d.Hl?!0:!1},Vra=function(a,b){if(fsa(b)){var c=b.C||$5(b,function(a){return"click"==a||"rollOut"==a||"rollOut"==a});
return new Era(b,(0,g.z)(a.L.appendChild,a.L),a.g,a.ca,c)}return null},fsa=function(a){if("highlight"==a.type||"widget"==a.type)return!0;
if("text"==a.type)for(var b in y6)if(a.style==y6[b])return!0;return!1},E6=function(a,b,c,d){a.U(bqa(b,d),c,d)},Yra=function(a,b){return(0,g.z)(function(){if(!this.la()){var a=Array.prototype.slice.call(arguments,0);
a.unshift(b);b=g.za.apply(window,a);this.J.push(g.sH(b,1,void 0))}},a)},F6=function(a){g.XV.call(this,a);
this.A=null;this.G=!1;this.C=null;this.o={};this.F={};this.D=this.B=null;this.L=!1;this.M=null;this.N=g.Y(this.g).experiments.g("enable_creator_endscreen_moving_thumbs_on_hover");this.H=[];this.aa=g.Y(this.g).experiments.g("enable_creator_endscreen_html5_renderers");a=g.Y(a).g;this.S="embedded"==a||"profilepage"==a;this.J=new g.lp(null);this.g.addEventListener("crn_creatorendscreen",this.sB,this);this.g.addEventListener("crx_creatorendscreen",this.tB,this);this.g.addEventListener("resize",this.gt,
this);this.ba=g.gG(window,"focus",(0,g.z)(this.jO,this));this.load()},G6=function(a,b){g.PV(a.g,"creatorendscreen");
a.B&&(a.B.dispose(),a.B=null,a.D.dispose(),a.D=null);for(var c in a.o){var d=a.o[c];d.dispose()}a.o={};a.F={};0<a.H.length&&(a.H.forEach(function(a){a.dispose()}),a.H.length=0);
if((a.A=b)&&b.elements){gsa(a);c=[];d=new g.mT(b.startMs,0x7ffffffffffff,{id:"ytp-ce-in-endscreen",namespace:"creatorendscreen"});c.push(d);g.Y(a.g).isMobile||(a.B=new g.X(["div","ytp-ce-shadow"]),g.RV(a.g,a.B.element,5),a.D=new g.aW(a.B,200));for(var e=0;e<b.elements.length;++e){var f=b.elements[e],d=hsa(a,f);a.o[f.id]=d;a.F[f.id]=f;g.RV(a.g,d.element,5);var k=new g.mT(f.startMs,f.endMs,{id:"ytp-ce-element-"+f.id,namespace:"creatorendscreen"});c.push(k);isa(a,d,f)}g.MV(a.g,c);a.gt()}},gsa=function(a){var b=
Nra();
if(b){var c=g.GH()||"";a=[a.A.visualElement];fra(q5(),c,b,a)}},hsa=function(a,b){var c=null;
switch(b.type){case "VIDEO":c=["div",["ytp-ce-element","ytp-ce-video"],{tabindex:0,"aria-label":b.Jj,"aria-hidden":!0},["div","ytp-ce-element-shadow"],["div","ytp-ce-covering-image",H6(I6(a,b,!1)),["div","ytp-ce-covering-animated-image",H6(I6(a,b,!0))]],["div","ytp-ce-covering-shadow-top"],["a","ytp-ce-covering-overlay",{href:b.targetUrl,tabindex:"-1"},["div",["ytp-ce-video-title","yt-ui-ellipsis","yt-ui-ellipsis-2"],{dir:g.mp(a.J,b.title||"")},b.title],["div","ytp-ce-video-duration",b.videoDuration]]];
c=new g.X(c);break;case "PLAYLIST":c=["div",["ytp-ce-element","ytp-ce-playlist"],{tabindex:0,"aria-label":b.Jj,"aria-hidden":!0},["div","ytp-ce-element-shadow"],["div","ytp-ce-covering-image",H6(I6(a,b,!1)),["div","ytp-ce-covering-animated-image",H6(I6(a,b,!0))]],["div","ytp-ce-covering-shadow-top"],["a","ytp-ce-covering-overlay",{href:b.targetUrl,tabindex:"-1"},["div",["ytp-ce-playlist-title","yt-ui-ellipsis","yt-ui-ellipsis-2"],{dir:g.mp(a.J,b.title||"")},b.title],["div","ytp-ce-playlist-count",
["div","ytp-ce-playlist-icon"],["div","ytp-ce-playlist-count-text",b.playlistLength]]]];c=new g.X(c);break;case "CHANNEL":var c=["div",["ytp-ce-element","ytp-ce-channel",b.isSubscribe?"ytp-ce-channel-this":"ytp-ce-channel-that"],{tabindex:0,"aria-label":b.Jj,"aria-hidden":!0},["div","ytp-ce-element-shadow"],["div","ytp-ce-expanding-overlay",["div","ytp-ce-expanding-overlay-hider"],["div","ytp-ce-expanding-overlay-background"],["div","ytp-ce-expanding-overlay-content",["div","ytp-ce-expanding-overlay-body",
["div","ytp-ce-expanding-overlay-body-padding",["a",["ytp-ce-channel-title","ytp-ce-link"],b.title,{href:b.targetUrl,target:"_blank",tabindex:"-1",dir:g.mp(a.J,b.title||"")}],b.subscribeButton?["div","ytp-ce-subscribe-container",["div","ytp-ce-channel-subscribe"]]:"",b.subscribersText?["div","ytp-ce-channel-subscribers-text",b.subscribersText]:"",b.metadata?["div",["ytp-ce-channel-metadata","yt-ui-ellipsis","yt-ui-ellipsis-3"],b.metadata]:""]]]],["div","ytp-ce-expanding-image",H6(I6(a,b,!1))]],c=
new g.X(c),d=g.he("div","ytp-ce-channel-subscribe",c.element)[0];if(b.subscribeButton){g.R(d,"ytp-ce-subscribe-button");var e,f;g.Y(a.g).isMobile?(e=null,f=b.jd.itct):(e=b.subscribeButton.feature,f=null);e=new g.dW(b.subscribeButton.subscribeText,b.subscribeButton.unsubscribeText,b.subscribeButton.enabled,b.channelId,!!b.subscribeButton.subscribed,e,f,a.g);d.appendChild(e.element);a.H.push(e)}break;case "WEBSITE":c=["div",["ytp-ce-element","ytp-ce-website"],{tabindex:0,"aria-label":b.Jj,"aria-hidden":!0},
["div","ytp-ce-element-shadow"],["div","ytp-ce-expanding-overlay",["div","ytp-ce-expanding-overlay-hider"],["div","ytp-ce-expanding-overlay-background"],["div","ytp-ce-expanding-overlay-content",["div","ytp-ce-expanding-overlay-body",["div","ytp-ce-expanding-overlay-body-padding",["div","ytp-ce-website-title",{dir:g.mp(a.J,b.title||"")},b.title],["div","ytp-ce-website-metadata",b.metadata],["a",["ytp-ce-website-goto","ytp-ce-link"],b.callToAction,{href:b.targetUrl,target:"_blank",tabindex:"-1"}]]]]],
["div","ytp-ce-expanding-image",H6(I6(a,b,!1))],["div","ytp-ce-expanding-icon",H6(b.Aw)]],c=new g.X(c)}b.dI&&g.R(c.element,"ytp-ce-placeholder");return c},jsa=function(a,b,c){a.N&&(a=g.J("ytp-ce-covering-animated-image",b.element))&&(a.style.display=c?"block":"none")},H6=function(a){return a?{style:"background-image: url("+a+")"}:{}},I6=function(a,b,c){var d;
b.Fp&&(d=b.Fp.thumbnails);!z6(g.Y(a.g).o)&&a.M&&b.Fl&&b.Fl.thumbnails&&(!a.N||c)&&(d=b.Fl.thumbnails);return d?d[d.length-1].url:null},isa=function(a,b,c){b.T("mouseenter",(0,g.z)(a.Zs,a,b,c));
b.T("mouseleave",(0,g.z)(a.yr,a,b,c));g.Y(a.g).isMobile||b.T("click",(0,g.z)(function(a){g.R(a.element,"ytp-ce-element-hover")},a,b));
b.T("click",(0,g.z)(a.Ly,a,c));b.T("keypress",(0,g.z)(a.Ly,a,c));b.T("focus",(0,g.z)(function(a,b){g.R(a.element,"ytp-ce-force-expand");this.Zs(a,b)},a,b,c));
b.T("blur",(0,g.z)(function(a,b){this.yr(a,b)},a,b,c));
b.T("touchstart",(0,g.z)(a.Zs,a,b,c));var d=g.J("ytp-ce-expanding-overlay-hider",b.element);d&&b.V(d,"touchstart",function(a){a=a||window.event;a.cancelBubble=!0;a.stopPropagation&&a.stopPropagation();g.Eq(b.element,"ytp-ce-element-hover");g.Eq(b.element,"ytp-ce-force-expand")});
var e=(0,g.z)(function(a,b,c){c=g.De(c);(0,g.F)(c,function(c){e(c);g.Ne(c)&&(a.V(c,"focus",(0,g.z)(function(a,b){g.R(a.element,"ytp-ce-force-expand");J6(this,b.id,!0)},this,a,b)),a.V(c,"click",(0,g.z)(function(a,b){g.R(a.element,"ytp-ce-force-expand");
J6(this,b.id,!0);this.L=!0},this,a,b)),a.V(c,"blur",(0,g.z)(function(a,b){this.L?(this.L=!1,a.element.focus()):(g.Eq(a.element,"ytp-ce-force-expand"),J6(this,b.id,!1))},this,a,b)))},this)},a,b,c);
e(b.element)},J6=function(a,b,c){a.B&&(c?a.D.show():g.cW(a.D));
for(var d in a.o)d!=b&&g.T(a.o[d].element,"ytp-ce-element-shadow-show",c)},K6=function(a,b,c){function d(){k||(f++,f==e.length&&(l.stop(),c&&c()))}
if(!b||z6(g.Y(a.g).o))c&&c();else{var e=ksa(a,b),f=0,k=!1,l=new g.ou(function(){k=!0;c&&c()},1E3,a);
l.start();for(a=0;a<e.length;a++)g.OG(e[a],d)}},L6=function(a,b,c){K6(a,b.clickUrls,c);
b.sk&&C5(b.visualElement)},ksa=function(a,b){for(var c=a.g.getVideoData().clientPlaybackNonce,d=a.g.getCurrentTime().toFixed(2),c={CPN:c,
AD_CPN:c,MT:d},d=[],e=0;e<b.length;e++)d.push(lsa(b[e],c));return d},lsa=function(a,b){return a.replace(/%5B[a-zA-Z_:]+%5D|\[[a-zA-Z_:]+\]/g,function(a){var c=(0,window.unescape)(a),c=c.substring(1,c.length-1);
return b[c]?(0,window.escape)(b[c]):a})},msa=function(a,b){var c=new window.Image;
c.onload=(0,g.z)(function(){this.M=0<c.width&&0<c.height;b()},a);
c.onerror=(0,g.z)(function(){this.M=!1;b()},a);
c.src="data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"},M6=function(a){return(a=g.ge(a))?g.Ah(a)&&!g.Cq(a,"hid"):!1},nsa=function(){g.T(window.document.body,"hide-players",!1);
(0,g.F)(g.ie("preserve-players"),function(a){g.Eq(a,"preserve-players")})},N6=function(a,b){a=g.ge(a);
b=g.ge(b);return!!g.Oe(a,function(a){return a===b},!0,void 0)},O6=function(a){var b=a.__yt_uid_key;
b||(b=(0,g.s4)(),a.__yt_uid_key=b);return b},osa=function(a,b){var c=g.he(a,null,b);
return c.length?c[0]:null},P6=function(a,b){a&&(a.dataset?delete a.dataset[g.QF(b)]:a.removeAttribute("data-"+b))},Q6=function(a,b,c,d,e,f,k){var l,m;
if(l=c.offsetParent){var n="HTML"==l.tagName||"BODY"==l.tagName;n&&"static"==g.jh(l,"position")||(m=g.ph(l),n||(n=(n=F5(l))&&g.ch?-l.scrollLeft:!n||g.BP&&g.nc("8")||"visible"==g.jh(l,"overflowX")?l.scrollLeft:l.scrollWidth-l.clientWidth-l.scrollLeft,m=g.$d(m,new g.Yd(n,l.scrollTop))))}l=m||new g.Yd;m=g.yh(a);(n=g.qh(a))&&g.Tg(m,Wpa(n));var n=g.fe(a),q=g.fe(c);if(n.g!=q.g){var r=n.g.body,q=g.sh(r,g.Se(q)),q=g.$d(q,g.ph(r));!g.wc||g.oc(9)||g.le(n.g)||(q=g.$d(q,g.oe(n.g)));m.left+=q.x;m.top+=q.y}a=gra(a,
b);b=m.left;a&4?b+=m.width:a&2&&(b+=m.width/2);b=new g.Yd(b,m.top+(a&1?m.height:0));b=g.$d(b,l);e&&(b.x+=(a&4?-1:1)*e.x,b.y+=(a&1?-1:1)*e.y);var v;k&&(v=g.qh(c))&&(v.top-=l.y,v.right-=l.x,v.bottom-=l.y,v.left-=l.x);return Ora(b,c,d,f,v,k,void 0)},R6=function(a,b,c,d,e,f,k){this.date=g.ua(a)?new Date(a,b||0,c||1,d||0,e||0,f||0,k||0):new Date(a&&a.getTime?a.getTime():(0,g.E)())},S6=function(a){if(g.I3&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");
else{var b=[];Rra(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");g.I3||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a},T6=function(a,b){var c=[];
return Sra(a,b,c,!0)?c[0]:void 0},U6=function(a,b,c){var d;
switch(a){case "mouseover":case "mouseout":d=3;break;case "mouseenter":case "mouseleave":d=9}return g.Oe(c,function(a){return g.Cq(a,b)},!0,d)},W6=function(a){var b="mouseover"==a.type&&"mouseenter"in V6||"mouseout"==a.type&&"mouseleave"in V6,c=a.type in V6||b;
if("HTML"!=a.target.tagName&&c){if(b){var b="mouseover"==a.type?"mouseenter":"mouseleave",c=V6[b],d;for(d in c.o){var e=U6(b,d,a.target);e&&!g.Oe(a.relatedTarget,function(a){return a==e},!0)&&c.U(d,e,b,a)}}if(b=V6[a.type])for(d in b.o)(e=U6(a.type,d,a.target))&&b.U(d,e,a.type,a)}},X6=function(a){this.C=a;
this.F={};this.H=[];this.G=[]},Z=function(a,b){return"yt-uix"+(a.C?"-"+a.C:"")+(b?"-"+b:"")},Y6=function(a,b,c){a.H.push(g.WG(b,c,a))},Z6=function(a,b,c){a.G.push(g.KP(b,c,a))},$6=function(){X6.call(this,"button");
this.g=null;this.A=[];this.o={}},psa=function(a,b,c,d,e){var f=M6(c),k=9==d.keyCode;
k||32==d.keyCode||13==d.keyCode?(d=a7(a,c))?(b=g.Fe(d),"a"==b.tagName.toLowerCase()?g.fW(b.href):kpa(b)):k&&b7(a,b):f?27==d.keyCode?(a7(a,c),b7(a,b)):e(b,c,d):(a=g.Cq(b,Z(a,"reverse"))?38:40,d.keyCode==a&&(kpa(b),d.preventDefault()))},a7=function(a,b){var c=Z(a,"menu-item-highlight"),d=g.J(c,b);
d&&g.Eq(d,c);return d},qsa=function(a,b,c){g.R(c,Z(a,"menu-item-highlight"));
var d=c.getAttribute("id");d||(d=Z(a,"item-id-"+g.ya(c)),c.setAttribute("id",d));b.setAttribute("aria-activedescendant",d)},rsa=function(a,b,c,d){var e=b.length;
a=(0,g.eb)(b,a);if(-1==a)if(38==d.keyCode)a=e-c;else{if(37==d.keyCode||38==d.keyCode||40==d.keyCode)a=0}else 39==d.keyCode?(a%c==c-1&&(a-=c),a+=1):37==d.keyCode?(0==a%c&&(a+=c),--a):38==d.keyCode?(a<c&&(a+=e),a-=c):40==d.keyCode&&(a>=e-c&&(a-=e),a+=c);return a},c7=function(a,b){var c=b.iframeMask;
c||(c=window.document.createElement("iframe"),c.src='javascript:""',c.className=Z(a,"menu-mask"),g.$V(c),b.iframeMask=c);return c},d7=function(a,b,c,d){var e=g.Qe(b,Z(a,"group")),f=!!a.va(b,"button-menu-ignore-group"),e=e&&!f?e:b,f=9,k=8,l=g.yh(b);
if(g.Cq(b,Z(a,"reverse"))){f=8;k=9;l=l.top+"px";try{c.style.maxHeight=l}catch(q){}}g.Cq(b,"flip")&&(g.Cq(b,Z(a,"reverse"))?(f=12,k=13):(f=13,k=12));var m;a.va(b,"button-has-sibling-menu")?m=g.oh(e):a.va(b,"button-menu-root-container")&&(m=ssa(a,b));g.wc&&!g.nc("8")&&(m=null);var n;m&&(n=g.yh(m),n=new g.Pg(-n.top,n.left,n.top,-n.left));m=new g.Yd(0,1);g.Cq(b,Z(a,"center-menu"))&&(m.x-=Math.round((g.xh(c).width-g.xh(b).width)/2));d&&(m.y+=g.oe(window.document).y);if(a=c7(a,b))b=g.xh(c),a.style.width=
b.width+"px",a.style.height=b.height+"px",Q6(e,f,a,k,m,n,197),d&&g.fh(a,"position","fixed");Q6(e,f,c,k,m,n,197)},ssa=function(a,b){if(a.va(b,"button-menu-root-container")){var c=a.va(b,"button-menu-root-container");
return g.Qe(b,c)}return window.document.body},b7=function(a,b){if(b){var c=e7(a,b);
if(c){a.g=null;b.setAttribute("aria-pressed","false");b.setAttribute("aria-expanded","false");b.removeAttribute("aria-activedescendant");g.$V(c);a.ri(b,"button-menu-action",!1);var d=c7(a,b),e=O6(c).toString();delete a.o[e];g.kF(function(){d&&d.parentNode&&(g.$V(d),d.parentNode.removeChild(d));c.originalParentNode&&(c.parentNode.removeChild(c),c.originalParentNode.appendChild(c),c.originalParentNode=null,c.activeButtonNode=null)},1)}var e=g.Qe(b,Z(a,"group")),f=[Z(a,"active")];
e&&f.push(Z(a,"group-active"));g.Fq(b,f);g.ZG("yt-uix-button-menu-hide",b);g.hG(a.A);a.A.length=0}},tsa=function(a,b,c){var d=Z(a,"menu-item-selected");
(0,g.F)(g.ie(d,b),function(a){g.Eq(a,d)});
g.R(c.parentNode,d)},e7=function(a,b){if(!b.widgetMenu){var c=a.va(b,"button-menu-id"),c=c&&g.ge(c),d=Z(a,"menu");
c?g.Dq(c,[d,Z(a,"menu-external")]):c=g.J(d,b);b.widgetMenu=c}return b.widgetMenu},usa=function(a,b){if(a.va(b,"button-toggle")){var c=g.Qe(b,Z(a,"group")),d=Z(a,"toggled"),e=g.Cq(b,d);
if(c&&a.va(c,"button-toggle-group")){var f=a.va(c,"button-toggle-group");(0,g.F)(g.ie(Z(a),c),function(a){a!=b||"optional"==f&&e?(g.Eq(a,d),a.removeAttribute("aria-pressed")):(g.R(b,d),a.setAttribute("aria-pressed","true"))})}else e?b.removeAttribute("aria-pressed"):b.setAttribute("aria-pressed","true"),g.Hq(b,d)}},f7=function(a){a.g&&b7(a,a.g)},g7=function(a){X6.call(this,a);
this.A=null},vsa=function(a,b,c){var d=c||b,e=Z(a,"card");
c=a.xc(d);var f=g.ge(Z(a,"card")+O6(d));if(f)return a=g.J(Z(a,"card-body"),f),g.He(a,c)||(g.Ae(c),a.appendChild(c)),f;f=window.document.createElement("div");f.id=Z(a,"card")+O6(d);f.className=e;(d=a.va(d,"card-class"))&&g.Dq(f,d.split(/\s+/));d=window.document.createElement("div");d.className=Z(a,"card-border");b=a.va(b,"orientation")||"horizontal";e=window.document.createElement("div");e.className="yt-uix-card-border-arrow yt-uix-card-border-arrow-"+b;var k=window.document.createElement("div");k.className=
Z(a,"card-body");a=window.document.createElement("div");a.className="yt-uix-card-body-arrow yt-uix-card-body-arrow-"+b;g.Ae(c);k.appendChild(c);d.appendChild(a);d.appendChild(k);f.appendChild(e);f.appendChild(d);window.document.body.appendChild(f);return f},wsa=function(a,b,c){var d=a.va(b,"orientation")||"horizontal",e=g.J(Z(a,"anchor"),b)||b,f=a.va(b,"position"),k=!!a.va(b,"force-position"),l=a.va(b,"position-fixed"),d="horizontal"==d,m="bottomright"==f||"bottomleft"==f,n="topright"==f||"bottomright"==
f,q,r;
n&&m?(r=13,q=8):n&&!m?(r=12,q=9):!n&&m?(r=9,q=12):(r=8,q=13);var v=F5(window.document.body),f=F5(b);v!=f&&(r^=4);var w;d?(f=b.offsetHeight/2-12,w=new g.Yd(-12,b.offsetHeight+6)):(f=b.offsetWidth/2-6,w=new g.Yd(b.offsetWidth+6,-12));var B=g.xh(c),f=Math.min(f,(d?B.height:B.width)-24-6);6>f&&(f=6,d?w.y+=12-b.offsetHeight/2:w.x+=12-b.offsetWidth/2);B=null;k||(B=10);b=Z(a,"card-flip");a=Z(a,"card-reverse");g.T(c,b,n);g.T(c,a,m);B=Q6(e,r,c,q,w,null,B);!k&&B&&(B&48&&(n=!n,r^=4,q^=4),B&192&&(m=!m,r^=1,q^=
1),g.T(c,b,n),g.T(c,a,m),Q6(e,r,c,q,w));l&&(e=(0,window.parseInt)(c.style.top,10),k=g.oe(window.document).y,g.fh(c,"position","fixed"),g.fh(c,"top",e-k+"px"));v&&(c.style.right="",e=g.yh(c),e.left=e.left||(0,window.parseInt)(c.style.left,10),k=g.me(window),c.style.left="",c.style.right=k.width-e.left-e.width+"px");e=g.J("yt-uix-card-body-arrow",c);k=g.J("yt-uix-card-border-arrow",c);d=d?m?"top":"bottom":!v&&n||v&&!n?"left":"right";e.setAttribute("style","");k.setAttribute("style","");e.style[d]=f+
"px";k.style[d]=f+"px";m=g.J("yt-uix-card-arrow",c);n=g.J("yt-uix-card-arrow-background",c);m&&n&&(c="right"==d?g.xh(c).width-f-13:f+11,f=c/Math.sqrt(2),m.style.left=c+"px",m.style.marginLeft="1px",n.style.marginLeft=-f+"px",n.style.marginTop=f+"px")},h7=function(a){a.A&&a.dg(a.A)},xsa=function(a){var b=a.cardMask;
b||(b=window.document.createElement("iframe"),b.src='javascript:""',g.Dq(b,["yt-uix-card-iframe-mask"]),a.cardMask=b);b.style.position=a.style.position;b.style.top=a.style.top;b.style.left=a.offsetLeft+"px";b.style.height=a.clientHeight+"px";b.style.width=a.clientWidth+"px";window.document.body.appendChild(b)},i7=function(){X6.call(this,"kbd-nav")},ysa=function(a,b,c){b&&c&&(g.R(c,Z(a)),a=b.id,a||(a="kbd-nav-"+Math.floor(1E6*Math.random()+1),b.id=a),b=a,g.q4&&c.dataset?c.dataset.kbdNavMoveOut=b:c.setAttribute("data-"+
"kbdNavMoveOut".replace(/([A-Z])/g,"-$1").toLowerCase(),b))},zsa=function(a,b){if(b){var c=g.Pe(b,"LI");
c&&(g.R(c,Z(a,"highlight")),j7=g.gG(b,"blur",(0,g.z)(function(a){g.Eq(a,Z(this,"highlight"));g.hG(j7)},a,c)))}},Asa=function(a){if("UL"!=a.tagName.toUpperCase())return[];
a=(0,g.Ce)(g.De(a),function(a){return"LI"==a.tagName.toUpperCase()});
return(0,g.Ce)((0,g.H)(a,function(a){return M6(a)?T6(a,function(a){return g.wa(a)&&1==a.nodeType?g.Ne(a):!1}):!1}),function(a){return!!a})},k7=function(){X6.call(this,"menu");
this.o=this.g=null;this.A={};this.D={};this.B=null},l7=function(a){var b=k7.getInstance();
if(g.Cq(a,Z(b)))return a;var c=b.Sd(a);return c?c:g.Qe(a,Z(b,"content"))==b.g?b.o:null},Bsa=function(a,b,c){var d=m7(a,b);
d&&g.wh(d,g.xh(c));if(c==a.g){var e=9,f=8;g.Cq(b,Z(a,"reversed"))&&(e^=1,f^=1);g.Cq(b,Z(a,"flipped"))&&(e^=4,f^=4);a=new g.Yd(0,1);d&&Q6(b,e,d,f,a,null,197);Q6(b,e,c,f,a,null,197)}},Dsa=function(a,b,c){n7(a,b)&&!c?o7(a,b):(Csa(a,b),!a.g||N6(b,a.g)?a.wC(b):lpa(a.B,(0,g.z)(a.wC,a,b)))},Csa=function(a,b){if(b){var c=g.Qe(b,Z(a,"content"));
c&&(0,g.F)(g.ie(Z(a),c),function(a){!N6(a,b)&&n7(this,a)&&p7(this,a)},a)}},o7=function(a,b){if(b){var c=[];
c.push(b);var d=q7(a,b);d&&(d=g.ie(Z(a),d),d=g.qb(d),c=c.concat(d),(0,g.F)(c,function(a){n7(this,a)&&p7(this,a)},a))}},p7=function(a,b){if(b){var c=q7(a,b);
g.Fq(r7(a,b),[Z(a,"trigger-selected"),"yt-uix-button-toggled"]);g.R(c,Z(a,"content-hidden"));var d=q7(a,b);d&&g.ke(d,{"aria-expanded":"false"});(d=m7(a,b))&&d.parentNode&&g.Ae(d);c&&c==a.g&&(a.o.appendChild(c),a.g=null,a.o=null,a.B&&a.B.U("ROOT_MENU_REMOVED"));g.ZG("yt-uix-menu-hide",b);c=g.ya(b).toString();g.hG(a.A[c]);delete a.A[c]}},Esa=function(a,b){var c=q7(a,b);
if(c){(0,g.F)(c.children,function(a){"LI"==a.tagName&&g.ke(a,{role:"menuitem"})});
g.ke(c,{"aria-expanded":"true"});var d=c.id;d||(d="aria-menu-id-"+g.ya(c),c.id=d);(c=r7(a,b))&&g.ke(c,{"aria-controls":d})}},Fsa=function(a,b,c){var d=q7(a,b);
d&&g.Cq(b,Z(a,"checked"))&&(a=g.Pe(c,"LI"))&&(a=g.J("yt-ui-menu-item-checked-hid",a))&&((0,g.F)(g.ie("yt-ui-menu-item-checked",d),function(a){g.Gq(a,"yt-ui-menu-item-checked","yt-ui-menu-item-checked-hid")}),g.Gq(a,"yt-ui-menu-item-checked-hid","yt-ui-menu-item-checked"))},n7=function(a,b){var c=q7(a,b);
return c?!g.Cq(c,Z(a,"content-hidden")):!1},Gsa=function(a){(0,g.F)(g.he("UL",null,a),function(a){a.tabIndex=0;
var b=i7.getInstance();g.Dq(a,[Z(b),Z(b,"list")])})},q7=function(a,b){var c=g.RF(b,"menu-content-id");
return c&&(c=g.ge(c))?(g.Dq(c,[Z(a,"content"),Z(a,"content-external")]),c):b==a.o?a.g:g.J(Z(a,"content"),b)},m7=function(a,b){var c=g.ya(b).toString(),d=a.D[c];
if(!d){d=g.te("IFRAME");d.src='javascript:""';var e=[Z(a,"mask")];(0,g.F)(g.Bq(b),function(a){e.push(a+"-mask")});
g.Dq(d,e);a.D[c]=d}return d||null},r7=function(a,b){return g.J(Z(a,"trigger"),b)},Hsa=function(a,b){return N6(b,a.g)||N6(b,a.o)},s7=function(){g7.call(this,"clickcard");
this.g={};this.o={}},t7=function(){g7.call(this,"hovercard")},u7=function(a,b,c,d,e,f){this.g=a;
this.F=null;this.A=g.J("yt-dialog-fg",this.g)||this.g;if(a=g.J("yt-dialog-title",this.A)){var k="yt-dialog-title-"+g.ya(this.A);a.setAttribute("id",k);this.A.setAttribute("aria-labelledby",k)}this.A.setAttribute("tabindex","-1");this.J=g.J("yt-dialog-focus-trap",this.g);this.L=!1;this.B=new g.TD;this.G=[];this.G.push(G4(this.g,"click",(0,g.z)(this.QK,this),"yt-dialog-dismiss"));this.G.push(g.gG(this.J,"focus",(0,g.z)(this.PF,this),!0));Isa(this);this.M=b;this.S=c;this.N=d;this.H=e;this.aa=f;this.D=
this.C=null},Jsa=function(a,b){a.la()||a.B.subscribe("post-all",b)},Isa=function(a){a=g.J("yt-dialog-fg-content",a.g);
var b=[];g.Jb(Ksa,function(a){b.push("yt-dialog-show-"+a)});
g.Fq(a,b);g.R(a,"yt-dialog-show-content")},Lsa=function(){return(0,g.Tk)(g.ie("yt-dialog"),function(a){return M6(a)})},Msa=function(a){var b=g.he("iframe",null,a.g);
(0,g.F)(b,function(a){var b=g.RF(a,"onload");b&&(b=g.u(b))&&g.gG(a,"load",b);if(b=g.RF(a,"src"))a.src=b},a);
return g.qb(b)},Nsa=function(a){(0,g.F)(window.document.getElementsByTagName("iframe"),function(b){-1==(0,g.eb)(a,b)&&g.R(b,"iframe-hid")})},Osa=function(){(0,g.F)(g.ie("iframe-hid"),function(a){g.Eq(a,"iframe-hid")})},Psa=function(a){g.kF((0,g.z)(function(){this.A&&this.A.focus()},a),0)},v7=function(){X6.call(this,"overlay");
this.B=this.o=this.A=this.g=null},Rsa=function(a){a.B||(a.B=g.WG("yt-uix-overlay-hide",Qsa));
a.g&&Jsa(a.g,function(){var a=v7.getInstance();a.A=null;a.g.dispose();a.g=null})},Ssa=function(a){if(a.g){var b=a.A;
a.g.dismiss("overlayhide");b&&a.ri(b,"overlay-hidden");a.A=null;a.o&&(g.hG(a.o),a.o=null);a.g=null}},Tsa=function(a,b){var c;
if(a)if(c=g.J("yt-dialog",a)){var d=g.ge("body-container");d&&(d.appendChild(c),a.overlayContentNode=c,c.overlayParentNode=a)}else c=a.overlayContentNode;else b&&(c=g.Qe(b,"yt-dialog"));return c},Usa=function(){var a=v7.getInstance();
if(a.A)a=g.J("yt-dialog-fg-content",a.A.overlayContentNode);else a:{if(a=g.ie("yt-dialog-fg-content"))for(var b=0;b<a.length;b++){var c=g.Qe(a[b],"yt-dialog");if(M6(c)){a=a[b];break a}}a=null}return a},Qsa=function(){Ssa(v7.getInstance())},w7=function(){X6.call(this,"tooltip");
this.g=0;this.o={}},Vsa=function(a,b,c){a.setData(b,"tooltip-text",c);
a=a.va(b,"content-id");(a=g.ge(a))&&g.Je(a,c)},Wsa=function(a,b){return a.va(b,"tooltip-text")||b.title},Zsa=function(a,b){if(b){var c=Wsa(a,b);
if(c){var d=g.ge(x7(a,b));if(!d){d=window.document.createElement("div");d.id=x7(a,b);d.className=Z(a,"tip");var e=window.document.createElement("div");e.className=Z(a,"tip-body");var f=window.document.createElement("div");f.className=Z(a,"tip-arrow");var k=window.document.createElement("div");k.setAttribute("aria-hidden","true");k.className=Z(a,"tip-content");var l=Xsa(a,b),m=x7(a,b,"content");k.id=m;a.setData(b,"content-id",m);e.appendChild(k);l&&d.appendChild(l);d.appendChild(e);d.appendChild(f);
var n=S6(b),m=x7(a,b,"arialabel"),f=window.document.createElement("div");g.R(f,Z(a,"arialabel"));f.id=m;n=b.hasAttribute("aria-label")?b.getAttribute("aria-label"):"rtl"==window.document.body.getAttribute("dir")?c+" "+n:n+" "+c;g.Je(f,n);b.setAttribute("aria-labelledby",m);m=g.XF()||window.document.body;m.appendChild(f);m.appendChild(d);Vsa(a,b,c);(c=(0,window.parseInt)(a.va(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",g.R(k,Z(a,"normal-wrap")));k=g.Cq(b,Z(a,"reverse"));Ysa(a,
b,d,e,l,k)||Ysa(a,b,d,e,l,!k);var q=Z(a,"tip-visible");g.kF(function(){g.R(d,q)},0)}}}},Ysa=function(a,b,c,d,e,f){g.T(c,Z(a,"tip-reverse"),f);
var k=0;f&&(k=1);var l=g.xh(b);f=new g.Yd((l.width-10)/2,f?l.height:0);var m=g.ph(b);Ora(new g.Yd(m.x+f.x,m.y+f.y),c,k);var m=g.me(window),n=g.th(c);c=g.xh(d);var q=Math.floor(c.width/2),k=!!(m.height<n.y+l.height),l=!!(n.y<l.height);f=!!(n.x<q);m=!!(m.width<n.x+q);n=(c.width+3)/-2- -5;a=a.va(b,"force-tooltip-direction");if("left"==a||f)n=-5;else if("right"==a||m)n=20-c.width-3;a=Math.floor(n)+"px";d.style.left=a;e&&(e.style.left=a,e.style.height=c.height+"px",e.style.width=c.width+"px");return!(k||
l)},x7=function(a,b,c){a=Z(a)+O6(b);
c&&(a+="-"+c);return a},Xsa=function(a,b){var c=null;
g.B3&&g.Cq(b,Z(a,"masked"))&&((c=g.ge("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),g.ZV(c)):(c=window.document.createElement("iframe"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",c.className=Z(a,"tip-mask")));return c},$sa=function(a){var b=g.ge("yt-uix-tooltip-shared-mask"),c=b&&g.Oe(b,function(b){return b==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),g.$V(b),window.document.body.appendChild(b))},y7=function(a){g.DP.call(this,1,arguments);
this.g=a},z7=function(a,b,c,d,e){g.DP.call(this,2,arguments);
this.source=e||null},ata=function(a,b,c){g.DP.call(this,1,arguments);
this.g=a;this.o=b},A7=function(a,b,c,d,e,f,k){g.DP.call(this,1,arguments);
this.g=d||null;this.source=k||null},bta=function(a){a=g.Qe(a,"yt-uix-button-subscription-container");
return g.J("yt-dialog",g.J("unsubscribe-confirmation-overlay-container",a))},cta=function(a,b){g.hG(B7);
B7.length=0;C7[b]||(C7[b]=bta(a));v7.getInstance().show(C7[b]);var c=Usa();return new g.Xf(function(a){B7.push(G4(c,"click",function(){a()},"overlay-confirmation-unsubscribe-button"))})},dta=function(){var a=g.BE("PLAYER_CONFIG");
return a&&a.args&&void 0!==a.args.authuser?!0:!(!g.BE("SESSION_INDEX")&&!g.BE("LOGGED_IN"))},D7=function(){X6.call(this,"subscription-button")},eta=function(a,b){if(!a.va(b,"ypc-enabled"))return null;
var c=a.va(b,"ypc-item-type"),d=a.va(b,"ypc-item-id");return{itemType:c,itemId:d,subscriptionElement:b}},fta=function(a,b){var c=a.va(b,E7.CE),d=!!a.va(b,"is-subscribed"),c="-"+c,e=F7.OC+c;
g.T(b,F7.NC+c,!d);g.T(b,e,d);a.va(b,E7.aD)&&!a.va(b,E7.ZC)&&(c=Z(w7.getInstance()),g.T(b,c,!d),b.title=d?"":a.va(b,E7.bD));d?g.kF(function(){g.R(b,F7.Ct)},1E3):g.Eq(b,F7.Ct)},gta=function(a,b){return(0,g.Ce)(g.ie(Z(a)),function(a){return b==this.va(a,"channel-external-id")},a)},hta=function(a,b){var c=(0,g.z)(function(a){a.discoverable_subscriptions&&g.AE("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",a.discoverable_subscriptions);
this.zt(b)},a);
g.s2(c,"subscribe","sub_button")},ita=function(a,b){if(!a.va(b,"show-unsub-confirm-dialog"))return!1;
var c=a.va(b,"show-unsub-confirm-time-frame");return"always"==c||"ten_minutes"==c&&(c=(0,window.parseInt)(a.va(b,"subscribed-timestamp"),10),(new R6).getTime()<1E3*(c+600))?!0:!1},mpa={thin:2,
medium:4,thick:6},Mpa=[2,2,6,6,0];g.A(M4,g.Cf);g.h=M4.prototype;g.h.bq=null;g.h.ik=null;g.h.oa=function(){return this.ik};
g.h.addEventListener=function(a,b,c,d){g.mf(this.ik,a,b,c,d)};
g.h.removeEventListener=function(a,b,c,d){g.wf(this.ik,a,b,c,d)};
g.h.P=function(){M4.O.P.call(this);var a=this.ik;if(a)if(g.cf(a))a.qe&&g.jf(a.qe);else if(a=g.qf(a)){var b=0,c;for(c in a.g)for(var d=a.g[c].concat(),e=0;e<d.length;++e)g.xf(d[e])&&++b}};
g.A(S4,M4);S4.prototype.fill=null;var U4;g.A(spa,S4);g.A(tpa,M4);var d5=null,Kpa=0;g.A(Cpa,spa);g.A(V4,tpa);V4.prototype.clear=function(){g.xe(this.oa())};
V4.prototype.setSize=function(a,b){Jpa(this.oa(),{width:a,height:b})};
g.A(P4,upa);g.A(Q4,upa);g.A(W4,g.Cv);W4.prototype.C=null;W4.prototype.Hi=function(){return this.ye?g.xh(this.oa()):g.ua(this.width)&&g.ua(this.height)?new g.ae(this.width,this.height):null};
W4.prototype.resume=function(){};
var m5={bevel:1,dropshadow:2},Spa={x_:"xx",y_:"xy",C_:"yx",D_:"yy"},Upa={CU:"current",yX:"new"};e5.prototype.B=function(){var a=g.u("gapi.config.update");a("googleapis.config/auth/useFirstPartyAuth",!0);var b=this.g.apiaryHost;g.C(g.D(b))||a("googleapis.config/root",(-1==b.indexOf("://")?"//":"")+b);b=this.g.gp;g.C(g.D(b))||a("googleapis.config/root-1p",(-1==b.indexOf("://")?"//":"")+b);b=g.BE("SESSION_INDEX");a("googleapis.config/sessionIndex",b);g.u("gapi.client.setApiKey")(this.g.innertubeApiKey)};
e5.prototype.o=function(){return{context:g.pH(this.g)}};
e5.prototype.A=function(a,b,c){var d,e=!1;0<c.timeout&&(d=g.kF(function(){e||(e=!0,c.gd&&c.gd())},c.timeout));
Ipa(this,a,b,function(a){if(!e)if(e=!0,d&&g.iF(d),a)c.Jb&&c.Jb(a);else if(c.onError)c.onError()})};
g.A(g5,W4);g.h=g5.prototype;g.h.Mm=function(){var a=R4(this,"svg",{width:this.width,height:this.height,overflow:"hidden"}),b=R4(this,"g");this.G=R4(this,"defs");this.C=new V4(b,this);a.appendChild(this.G);a.appendChild(b);this.g=a;this.A&&(this.oa().setAttribute("preserveAspectRatio","none"),this.N?this.Yn():this.oa().setAttribute("viewBox","0 0 "+(this.A?this.A+" "+this.M:"")))};
g.h.Yn=function(){if(this.ye){var a=this.Hi();if(0==a.width)this.oa().style.visibility="hidden";else{this.oa().style.visibility="";var b=a.width/this.A,a=a.height/this.M;this.C.oa().setAttribute("transform","scale("+b+" "+a+") translate(0 0)")}}};
g.h.setSize=function(a,b){g.wh(this.oa(),a,b)};
g.h.Hi=function(){if(!g.ch)return this.ye?g.xh(this.oa()):g5.O.Hi.call(this);var a=this.width,b=this.height,c=g.y(a)&&-1!=a.indexOf("%"),d=g.y(b)&&-1!=b.indexOf("%");if(!this.ye&&(c||d))return null;var e,f;c&&(e=this.oa().parentNode,f=g.xh(e),a=(0,window.parseFloat)(a)*f.width/100);d&&(e=e||this.oa().parentNode,f=f||g.xh(e),b=(0,window.parseFloat)(b)*f.height/100);return new g.ae(a,b)};
g.h.clear=function(){this.C.clear();g.xe(this.G);this.o={}};
g.h.Ai=function(){var a=this.Hi();g5.O.Ai.call(this);a||this.dispatchEvent("resize");if(this.N){var a=this.width,b=this.height;"string"==typeof a&&-1!=a.indexOf("%")&&"string"==typeof b&&-1!=b.indexOf("%")&&this.J.T(zpa(),"tick",this.Yn);this.Yn()}};
g.h.Wj=function(){g5.O.Wj.call(this);this.N&&this.J.Ea(zpa(),"tick",this.Yn)};
g.h.P=function(){delete this.o;delete this.G;delete this.C;this.J.dispose();delete this.J;g5.O.P.call(this)};
g.h=i5.prototype;g.h.nf=null;g.h.Bd=null;g.h.Pk=!0;g.h.clear=function(){this.za.length=0;this.Ia.length=0;this.he.length=0;delete this.nf;delete this.Bd;delete this.Pk;return this};
g.h.zc=function(a){var b=g.$a(this.za);if(null==b)throw Error("Path cannot start with lineTo");1!=b&&(this.za.push(1),this.Ia.push(0));for(b=0;b<arguments.length;b+=2){var c=arguments[b],d=arguments[b+1];this.he.push(c,d)}this.Ia[this.Ia.length-1]+=b/2;this.Bd=[c,d]};
g.h.close=function(){var a=g.$a(this.za);if(null==a)throw Error("Path cannot start with close");4!=a&&(this.za.push(4),this.Ia.push(1),this.Bd=this.nf);return this};
g.h.clone=function(){var a=new this.constructor;a.za=this.za.concat();a.Ia=this.Ia.concat();a.he=this.he.concat();a.nf=this.nf&&this.nf.concat();a.Bd=this.Bd&&this.Bd.concat();a.Pk=this.Pk;return a};
g.h.transform=function(a){if(!this.Pk)throw Error("Non-simple path");a.transform(this.he,0,this.he,0,this.he.length/2);this.nf&&a.transform(this.nf,0,this.nf,0,1);this.Bd&&this.nf!=this.Bd&&a.transform(this.Bd,0,this.Bd,0,1);return this};
g.h.isEmpty=function(){return 0==this.za.length};
g.A(Rpa,X4);r5.prototype.zb=function(){return this.A};
g.A(Vpa,g.Xe);var Hqa=/[^\d]+$/;g.A(v5,l5);x5.prototype.oa=function(){return this.C};
x5.prototype.A=function(){};
var zqa={CLOSED:"closed",TX:"playerControlShow",qE:"rollOver",uE:"shown"},Cqa={JC:"anchored",qY:"rect",NY:"shapeless"};g.A(D5,g.Mt);g.h=D5.prototype;
g.h.play=function(a){if(a||0==this.g)this.progress=0,this.o=this.A;else if(this.qb())return!1;s5(this);this.startTime=a=(0,g.E)();-1==this.g&&(this.startTime-=this.duration*this.progress);this.endTime=this.startTime+this.duration;this.C=this.startTime;if(!this.progress)this.on();this.pe("play");-1==this.g&&this.pe("resume");this.g=1;var b=g.ya(this);b in g.wu||(g.wu[b]=this);g.vu();lqa(this,a);return!0};
g.h.stop=function(a){s5(this);this.g=0;a&&(this.progress=1);kqa(this,this.progress);this.pe("stop");this.Dk()};
g.h.pause=function(){this.qb()&&(s5(this),this.g=-1,this.pe("pause"))};
g.h.P=function(){0==this.g||this.stop(!1);this.pe("destroy");D5.O.P.call(this)};
g.h.destroy=function(){this.dispose()};
g.h.pK=function(a){lqa(this,a)};
g.h.sr=function(){this.pe("animate")};
g.h.pe=function(a){this.dispatchEvent(new Vpa(a,this))};
E5.prototype.clone=function(){return new E5(this.start,this.end)};
E5.prototype.getLength=function(){return this.end-this.start};
var Jqa={em:1,ex:1},Iqa={cm:1,"in":1,mm:1,pc:1,pt:1};g.h=G5.prototype;g.h.On=function(){this.context.A.subscribe("resize",this.Ol,this)};
g.h.oa=function(){return this.Ya};
g.h.tj=function(a,b,c,d,e,f,k){this.context.g.T(a,"click",g.za(this.fn,b,c,d,e,f||[],k||0),this);this.context.g.T(a,"touchstart",g.za(function(){this.Gs=!1}),this);
this.context.g.T(a,"touchmove",g.za(function(){this.Gs=!0}),this)};
g.h.fn=function(a,b,c,d,e,f,k){if(this.Gs)return!1;k&&(k.stopPropagation(),k.preventDefault());(b=u5(a,b,this.context.videoData.videoId))&&oqa(this,b,t5(b,a.target),c,d,e,f,a.g);return!1};
g.h.show=function(){this.N=(0,g.E)()};
g.h.xo=function(){};
g.h.destroy=function(){g.Ae(this.oa())};
g.h.Ol=function(){};
g.A(J5,l5);g.A(pqa,l5);g.A(qqa,v5);g.A(rqa,v5);g.A(sqa,l5);g.A(tqa,l5);g.A(uqa,v5);g.A(vqa,l5);g.A(K5,x5);
K5.prototype.A=function(a,b){var c=b6(a);if(c){var d=Y4(c,b);if(!(0>=d.width||0>=d.height)){var e;if(e=(c=(c=Zqa(a))&&c.g?c.g:null)&&c.length?c[0]:null){var f=g.Vg(Epa(b,Fpa(e,new g.Qg(e.F,e.G,e.Vk,e.A),b.g))),k=d.clone(),c=new g.Qg(f.x,f.y,1,1),l=Math.max(k.left+k.width,c.left+c.width),m=Math.max(k.top+k.height,c.top+c.height);k.left=Math.min(k.left,c.left);k.top=Math.min(k.top,c.top);k.width=l-k.left;k.height=m-k.top;var c=a.g,k=w5(k,c.effects),l=y5(this,k.width,k.height),m=$pa(c,k.width,k.height,
this.g),d=new g.Qg(d.left-k.left,d.top-k.top,d.width,d.height),n=new g.Yd(f.x-k.left,f.y-k.top);this.B=17*T4(b.g,e.o,e.g?e.g:"xy");e=c.cornerRadius;var f=a.g,q=this.g&&a6(a),r=q?f.g+1:f.g,q=(f=r?new r5(r,q?f.A:f.C):null)?f.zb()/2:0,r=Ypa(d,n),v=this.D(d,e,n,r),w=n.x,n=n.y,B=d.width,G=d.height,S=d.left,d=d.top,I=new i5;Lpa(I,S+e+q,d+q);"t"==r&&(I.zc(v.start,d+q),I.zc(w,n),I.zc(v.end,d+q));I.zc(S+B-e-q,d+q);j5(I,e,e,-90);"r"==r&&(I.zc(S+B-q,v.start),I.zc(w,n),I.zc(S+B-q,v.end));I.zc(S+B-q,d+G-e-q);
j5(I,e,e,0);"b"==r&&(I.zc(v.end,d+G-q),I.zc(w,n),I.zc(v.start,d+G-q));I.zc(S+e+q,d+G-q);j5(I,e,e,90);"l"==r&&(I.zc(S+q,v.end),I.zc(w,n),I.zc(S+q,v.start));I.zc(S+q,d+e+q);j5(I,e,e,180);I.close();h5(l,I,f,m);if(m=this.oa())g.R(m,"annotation-shape"),g.R(m,"annotation-speech-shape"),g.lh(m,k.left,k.top),g.wh(m,k.width,k.height),Zpa(l,m,c.effects)}}}};
K5.prototype.D=function(a,b,c,d){function e(a,c,d,e){a=Math.min(Math.max(e-2*b,0),a);c=g.Ud(c-a/2,d+b,d+e-a-b);return new E5(c,c+a)}
return"t"==d||"b"==d?e(this.B,c.x,a.left,a.width):"l"==d||"r"==d?e(this.B,c.y,a.top,a.height):new E5(0,0)};
xqa.prototype.B=function(a,b,c,d){this.g[a]=b?!c:c;a=mqa(this.g,function(a){return a});
this.o!=a&&(this.o=a,this.A.U(this.C,a,d))};
var dra={Ho:"click",CLOSE:"close",QV:"hidden",CY:"rollOut",qE:"rollOver",uE:"shown"},cra={CLOSE:"close",FX:"openUrl",DE:"subscribe"};g.A(M5,D5);M5.prototype.B=g.x;M5.prototype.sr=function(){this.B();M5.O.sr.call(this)};
M5.prototype.Dk=function(){this.B();M5.O.Dk.call(this)};
M5.prototype.on=function(){this.B();M5.O.on.call(this)};
g.A(N5,G5);N5.prototype.On=function(){N5.O.On.call(this);var a=this.annotation.data;"start_ms"in a&&"end_ms"in a&&H5(this,this.annotation.data.start_ms,this.annotation.data.end_ms,this.annotation.id,this.show,this.xo)};
var nra={collaborator:vqa,donation:uqa,episode:J5,movie:J5,playlist:tqa,poll:sqa,productListing:rqa,simple:v5,tip:qqa,video:pqa};O5.prototype.o=function(a,b){var c=g.Pe(b.target,"label");c&&g.T(c,"iv-card-poll-choice-focused",a)};
O5.prototype.F=function(a,b){var c=g.Qe(b.target,"iv-card-poll");if(c)if(a.A)g.J("iv-card-sign-in-button",c).click();else{var d=(0,window.parseInt)(L5(b.target,"pollChoiceIndex"),10);if(null==a.g)a.choices[d].count++,a.g=d;else if(a.g!=d){var e=a.choices[a.g];e.count=Math.max(e.count-1,0);a.choices[d].count++;a.g=d}else e=a.choices[a.g],e.count=Math.max(e.count-1,0),a.g=null;Lqa(a,c);g.zF(this.g.videoData.vh,{Hc:{action_poll_vote:1},Ob:{poll_id:a.id,index:d,session_token:a.G}});c={};c["link-id"]=
d;I5(this.g.logger,a.Qb,void 0,c,a.o.click,5);C5(a.C)}};
O5.prototype.D=function(a){var b=g.u("yt.www.ypc.bootstrap.api.loadOffersForInnertubeRequestParams");b&&(b=g.za(b,a.J,a.B));Pqa(this,a,!0,b)};
O5.prototype.G=function(a){var b=g.u("yt.www.ypc.bootstrap.api.loadOffers");b&&(b=g.za(b,a.J,a.B,a.L));Pqa(this,a,!1,b)};
g.A(W5,K5);W5.prototype.D=function(a,b,c,d){function e(a,c,d,e){a=Math.min(Math.max(e-2*b,0),a);c=c<=d+e/2?Math.max(d+e/4-a/2,d+b):Math.min(d+3*e/4-a/2,d+e-a-b);return new E5(c,c+a)}
return"t"==d||"b"==d?e(this.B,c.x,a.left,a.width):"l"==d||"r"==d?e(this.B,c.y,a.top,a.height):new E5(0,0)};
g.A(X5,x5);X5.prototype.A=function(a,b){var c=b6(a);if(c){var d=Y4(c,b);if(!(0>=d.width||0>=d.height)){var c=a.g,e=w5(d,c.effects),f=y5(this,e.width,e.height),k=$pa(c,d.width,d.height,this.g),d=new g.Qg(0,0,d.width,d.height),l=c.cornerRadius,m=a.g,n=this.g&&a6(a),q=n?m.g+1:m.g,n=(m=q?new r5(q,n?m.A:m.C):null)?m.zb()/2+1:0,d=aqa(d,l,n);h5(f,d,m,k);if(k=this.oa())g.R(k,"annotation-shape"),g.R(k,"annotation-popup-shape"),g.lh(k,e.left,e.top),g.wh(k,e.width,e.height),Zpa(f,k,c.effects)}}};
g.A(Y5,x5);Y5.prototype.A=function(a,b){var c=b6(a);if(c){var d=Y4(c,b);if(!(0>=d.width||0>=d.height)){var e=a.g,c=w5(d,e.effects),f=y5(this,c.width,c.height),k=new g.Qg(0,0,d.width,d.height),l=e.cornerRadius,d=new r5(!e.B&&this.g?1:e.B,e.bgColor),m=new P4("#000",0),n=d?d.zb()/2+1:0,k=aqa(k,l,n);h5(f,k,d,m);f=this.oa();g.R(f,"annotation-shape");e=e.o;g.zh(f,this.g?Math.max(e,.9):e);g.lh(f,c.left,c.top);g.wh(f,c.width,c.height)}}};
var Jra={i_:"video_relative",UX:"player_relative"},Ira={MC:"branding",bU:"card",lV:"drawer",SV:"highlight",OW:"marker",jY:"promotion",TEXT:"text",t_:"widget"},y6={JC:"anchored",MC:"branding",CHANNEL:"channel",BU:"cta",TV:"highlightText",tW:"label",PLAYLIST:"playlist",eY:"popup",cZ:"speech",DE:"subscribe",xZ:"title",VIDEO:"video",n_:"vote",q_:"website"};Vqa.prototype.showLinkIcon=function(){return $5(this,function(a){return null!=a.url&&a.url.showLinkIcon})};
g.A(d6,M5);d6.prototype.B=function(){this.element.style.left=Math.round(this.o[0])+"px";this.element.style.top=Math.round(this.o[1])+"px"};
var Qra={IMG:" ",BR:"\n"},Pra={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1};g.A(e6,N5);g.h=e6.prototype;g.h.show=function(){this.isActive||(e6.O.show.call(this),this.G||(jra(this),this.G=!0),g.N(this.oa(),!0),this.annotation&&this.annotation.Qb&&k6(this.context.logger,this.annotation.Qb),g.Eq(this.oa(),"iv-promo-inactive"),this.oa().removeAttribute("aria-hidden"),this.isActive=!0,f6(this),lra(this),mra(this,this.D))};
g.h.xo=function(){this.isActive&&(g.R(this.oa(),"iv-promo-inactive"),this.isActive=!1,this.oa().setAttribute("aria-hidden",!0))};
g.h.fn=function(a,b,c,d,e,f,k){return this.B?!1:e6.O.fn.call(this,a,b,c,d,e,f,k)};
g.h.iq=function(a,b){b.stopPropagation();lra(this);mra(this,a);this.ld.focus()};
g.h.sG=function(a){this.F=!0;this.iq(500,a)};
g.h.rG=function(){this.F=!1;kra(this)};
g.h.VR=function(a){a.stopPropagation();this.xo();q6(this.context.logger,this.annotation.Qb)};
g.h.hG=function(a){a.stopPropagation();f6(this);this.B=!0;g.R(this.oa(),"iv-promo-collapsed-no-delay");this.C.start();q6(this.context.logger,this.annotation.Qb)};
g.h.destroy=function(){this.C.dispose();e6.O.destroy.call(this)};
g.A(g6,N5);g.h=g6.prototype;g.h.lP=function(a,b,c,d){this.A.stop();if(!this.B){var e=g.xh(a);this.g||(g.vh(a,e.width),g.vh(b,e.width));g.lh(c,e.width,e.height-Math.max(Math.min(e.height,d)/2+Math.round(10),20));this.B=!0;g.N(a,!0);this.C=new g.ou(function(){g.R(this.oa(),"iv-branding-active")},0,this);
this.C.start()}};
g.h.fH=function(a,b){g.Eq(this.oa(),"iv-branding-active");this.D=new g.ou((0,g.z)(function(){g.N(a,!1);this.g||g.vh(b,0)},this),250);
this.D.start();this.B=!1};
g.h.show=function(){if(!this.isActive){g6.O.show.call(this);if(!this.F){g.R(this.oa(),"iv-branding");var a=this.annotation.data;this.G=a.image_width;this.o=g.K("IMG",{src:a.image_url,"class":"branding-img iv-click-target",width:a.image_width,height:a.image_height});g.N(this.o,!1);var b=g.K("DIV","branding-img-container",this.o);this.oa().appendChild(b);var c=g.K("DIV","iv-branding-context-name");g.Je(c,a.channel_name);var d=g.K("DIV","iv-branding-context-subscribe");if(b=a.standalone_subscribe_button_data)this.g=
new g.dW(b.subscribeText,b.unsubscribeText,!!b.enabled,a.channel_id,!!b.subscribed,b.feature,a.session_data.itct,this.H.o),this.g.Ha(d);b=g.K("DIV","iv-branding-context-subscribe-caret");c=g.K("DIV","branding-context-container-inner",b,c,d);g.N(c,!1);d=g.K("DIV","branding-context-container-outer",c);g.fh(d,"right",this.G+"px");this.oa().appendChild(d);var e=Z5(this.annotation);e&&this.tj(this.o,e,this.annotation.id,a.session_data,this.annotation.Qb);this.A=new g.ou(g.za(this.fH,c,d),500,this);this.context.g.T(this.oa(),
"mouseover",(0,g.z)(this.lP,this,c,d,b,a.image_height));this.context.g.T(this.oa(),"mouseout",(0,g.z)(this.A.start,this.A,void 0));this.F=!0}k6(this.context.logger,this.annotation.Qb);g.N(this.oa(),!0);this.isActive=!0;if(this.o){var a=this.o,f,b=g.yh(a).width,c=g.ua(void 0)?void 0:b;f=f||0;g.lh(a,c);f=new d6(a,[c,a.offsetTop],[c-b-f,a.offsetTop],200,ira);this.context.B.T(f,"begin",g.za(g.N,a,!0));f.play()}}};
g.h.xo=function(){this.isActive&&(g.N(this.oa(),!1),this.isActive=!1)};
g.h.destroy=function(){this.g&&(this.g.dispose(),this.g=null);g6.O.destroy.call(this)};
g.A(h6,G5);g.h=h6.prototype;g.h.isAvailable=function(){var a;if(a=!!this.o.length)(a=this.W.getRootNode())?(a=g.xh(a),a=177<a.width&&177<a.height):a=!1;return a};
g.h.TE=function(){this.ga&&l6(this,"YOUTUBE_DRAWER_AUTO_OPEN")};
g.h.wF=function(){(this.ga=this.B)&&this.Xl()};
g.h.TR=function(){l6(this,"YOUTUBE_DRAWER_AUTO_OPEN")};
g.h.Xl=function(){this.B&&(g.cW(this.ea),g.Eq(this.context.o.getRootNode(),"ytp-iv-drawer-open"),this.B=!1,I4(this.W),this.F&&this.F.stop(),this.F=new g.ou(function(){this.aa&&(this.aa.focus(),this.aa=null)},330,this),this.F.start())};
g.h.Ol=function(){var a=this.isAvailable();g.N(this.oa(),a);g.T(this.context.o.getRootNode(),"ytp-iv-drawer-enabled",a);I4(this.W)};
g.h.destroy=function(){var a=g.sV(this.W).o;a&&a.Xs(!1,void 0);this.W.getRootNode().removeChild(this.D);(0,g.r2)(this.ca);g.hG(this.ma);this.M&&this.M.dispose();this.F&&this.F.dispose();h6.O.destroy.call(this)};
g.h.UR=function(a){this.mp.start();a.preventDefault();a=a||window.event;var b=0;"MozMousePixelScroll"==a.type?b=0==(a.axis==a.HORIZONTAL_AXIS)?a.detail:0:window.opera?b=a.detail:b=0==a.wheelDelta%120?"WebkitTransform"in window.document.documentElement.style?window.chrome&&0==window.navigator.platform.indexOf("Mac")?a.wheelDeltaY/-30:a.wheelDeltaY/-1.2:a.wheelDelta/-1.6:a.wheelDeltaY/-3;if(a=b)this.A.scrollTop+=a};
g.h.dA=function(a){if(!g.Cq(this.W.getRootNode(),"ytp-cards-teaser-shown")){this.g!=a&&(this.g=a,i6(this));if(g.Ah(this.oa())){var b;2==this.context.o.Xa()?b=1==((0,window.isNaN)(void 0)?this.context.o.YA():void 0):(b=(0,window.isNaN)(void 0)?this.context.o.Zk():void 0,b=1==b||0==b&&0===this.context.o.getCurrentTime());if(b&&a.bc.teaserDurationMs){b={teaserText:a.bc.teaserText,durationMs:a.bc.teaserDurationMs};var c=g.sV(this.W).o;c&&c.Xs(!0,b)}}this.Na.isActive()||((!this.B||!this.mp.isActive()&&
this.an)&&wra(this,a),this.Na.start(910+a.bc.teaserDurationMs))}};
g.h.dP=function(a){this.B||(this.g=a,i6(this),wra(this,a),l6(this,"YOUTUBE_DRAWER_AUTO_OPEN",!1,a))};
g.h.pF=function(){this.B&&(j6(this.context.logger,this.L,4,m6(this).o.close),this.G&&C5(this.G),this.Xl())};
g.h.BF=function(){g.T(this.D,"iv-drawer-scrolled",0<this.A.scrollTop)};
g.h.tI=function(){var a=m6(this);r6(this.context.logger,8,a.Qb,a.o.pP);a&&c6([a.F,a.D])};
g.h.sI=function(a){var b=m6(this);this.g?a?(a=this.context.logger,r6(a,9,b.Qb,b.o.ks),a.W.fi(4,void 0),C5(b.F)):(a=this.context.logger,r6(a,12,b.Qb,b.o.ks),a.W.fi(4,void 0),C5(b.D)):(a=this.context.logger,j6(a,this.L,12,b.o.ks),a.W.fi(4,void 0),this.ba&&C5(this.ba))};
s6.prototype.show=function(){this.isVisible=!0;this.view&&(this.view.show(),this.o.subscribe("resize",this.C,this),this.o.subscribe("onVideoAreaChange",this.A,this))};
s6.prototype.destroy=function(){if(this.view){Dra(this);var a=this.view;g.rG(a.F);a.rr.dispose();a.H.dispose();a.o&&g.Ae(a.o);a.A&&a.A.oa()&&g.Ae(a.A.oa())}t6(this)};
s6.prototype.A=function(){w6(this.view)};
s6.prototype.C=function(){w6(this.view)};
g.h=Era.prototype;g.h.CB=function(){this.N||(this.B&&g.N(this.B,!0),this.C&&g.N(this.C,!0),this.A&&(this.A.g=!0,g.zh(this.o,x6(this)?1:0),this.A.A(this.g,v6(this))),this.H.isActive()&&this.H.stop(),this.N=!0,this.J=jpa(this.F,g.AV(this.D),function(a){this.rr.stop();this.bh(a)}))};
g.h.bh=function(){this.N&&(this.S?this.H.start():this.yw(),this.A&&(this.A.g=!1,g.zh(this.o,x6(this)?1:0),this.A.A(this.g,v6(this))),this.N=!1,this.J&&(this.F.Ea(this.J),this.J=null))};
g.h.yw=function(){this.B&&g.N(this.B,!1);this.C&&g.N(this.C,!1)};
g.h.kM=function(a){this.da=a;this.rr.Mi()};
g.h.SR=function(){var a=this.da,b=new g.Yd(a.clientX,a.clientY),c=g.ph(this.D.getRootNode()),d=Uqa(c,this.M),c=(this.C&&g.Ah(this.C)||this.B&&g.Ah(this.B))&&Uqa(c,this.S);d&&d.contains(b)||c&&c.contains(b)?this.CB():this.bh(a)};
g.h.show=function(){var a=this.g.g,a=(a&&0==a.o||"title"==this.g.style||"highlightText"==this.g.style?!1:!0)&&!this.A,b=!this.o,c="widget"==this.g.type;if(a){var d=v6(this),e=null;"highlight"==this.g.type||"label"==this.g.style?e=new Y5:"popup"==this.g.style?e=new X5:"anchored"==this.g.style?e=new K5:"speech"==this.g.style&&(e=new W5);e&&(e.A(this.g,d),this.A=e,d=e.oa())&&(g.N(d,!1),g.R(d,"annotation-type-"+this.g.type.toLowerCase()),this.ba(d))}if(b){d=["annotation"];"highlightText"!=this.g.style||
d.push("annotation-no-mouse");d.push("annotation-type-"+this.g.type.toLowerCase());this.o=g.K("DIV",d);g.N(this.o,!1);this.g.B&&(this.G=g.K("DIV","inner-text"),"label"==this.g.style&&(g.R(this.G,"label-text"),this.G.style.backgroundColor=this.g.g.bgColor),g.Je(this.G,this.g.B),this.o.appendChild(this.G));g.SF(this.o,"annotation_id",this.g.id);this.ba(this.o);Fra(this,this.o);if(a6(this.g)&&this.g.showLinkIcon()){if(e=Z5(this.g))d=this.o,e=new g.ym(Z4(e)),d.title=e.o+e.A;this.C=g.K("SPAN","annotation-link-icon");
g.N(this.C,!1);this.o.appendChild(this.C)}Gra(this);a6(this.g)||(this.o.style.cursor="default")}c&&("subscribe"==this.g.style?g.J("yt-uix-subscription-button",this.o)||(c=this.o,d=this.g.htmlBlob,d.match(/\sstyle\s*=/),c.innerHTML=d):this.g.htmlBlob&&(c=this.o,d=this.g.htmlBlob,d.match(/\sstyle\s*=/),c.innerHTML=d));if(a||b){a:{a=this.g.o.g;if(a.length&&(a=eqa(a[0]))){a=a.H;break a}a=0}this.o&&(this.o.style.zIndex=a);this.A&&this.A.oa()&&(this.A.oa().style.zIndex=a)}g.N(this.o,!0);g.zh(this.o,x6(this)?
1:0);w6(this);this.A&&this.A.oa()&&g.N(this.A.oa(),!0)};
var jta=["ytp-ce-top-left-quad","ytp-ce-top-right-quad","ytp-ce-bottom-left-quad","ytp-ce-bottom-right-quad"];g.A(A6,g.XV);A6.C="AnnotationsModule";A6.A=function(a){switch(a.type){case "branding":case "promotion":return!0}return!1};
A6.B=function(a){return"card"==a.type||"drawer"==a.type};
A6.o=function(){var a=g.K("DIV",["annotation","annotation-type-custom"]);g.N(a,!1);return a};
A6.g=function(a){switch(a){case "annotation-editor":case "live-dashboard":return!0}return!1};
g.h=A6.prototype;g.h.oR=function(a,b){if(!A6.g(g.Y(this.g).o))return null;switch(a){case "loadCustomAnnotationsXml":var c=g.bs(b);c&&C6(this,c);return!0;case "removeCustomAnnotationById":return b&&this.o&&(pra(this.o,b),I4(this.g)),!0}return null};
g.h.pR=function(){return A6.g(g.Y(this.g).o)?["loadCustomAnnotationsXml","removeCustomAnnotationById"]:[]};
g.h.Ar=function(){if(this.C){var a=g.e_(g.AV(this.g),!0);g.wh(this.C.element,a.width,a.height);g.lh(this.C.element,a.left,a.top)}if(this.o){var b=hpa(this.g.app.A.C),a=this.o,b=b.width;g.T(a.D,"iv-drawer-small",426>=b);g.T(a.D,"iv-drawer-big",1280<=b)}};
g.h.MM=function(a){g.V(a.state,2)&&(this.ll()&&this.pB()&&2!=this.g.Xa()&&this.Ys(!1),this.Xs(!1))};
g.h.load=function(){A6.O.load.call(this);this.B.show();this.G++;var a=this.g.getVideoData(),b=a.videoId,c=(0,g.z)(this.yL,this,b,this.G);g.rH()&&(c=Yra(this,c));c={format:"XML",td:c,Hc:{}};a.isPharma&&(c.Hc.pharma="1");c.method="POST";c.withCredentials=!0;var d=g.Y(this.g);"gaming"==d.o&&(c.Hc.gaming="1");(b=d.F.get(b))&&Zra(c,b);a.vh&&(b=b&&b.xh,a.Gl&&!b||g.xF(a.vh,c));g.RV(this.g,this.C.element,5);this.Ar()};
g.h.unload=function(){zra(this.Za,{"iv-event":1});g.PV(this.g,"annotations_module");g.Jb(this.A,function(a){a.destroy()});
g.Jb(this.H,function(a){a.destroy()});
this.F=null;this.o&&(this.o.destroy(),this.o=null,I4(this.g));this.A={};this.H={};this.B.na();A6.O.unload.call(this);this.C.detach()};
g.h.yL=function(a,b,c){if(!Ura(this,b,a)&&(a=g.gF(c)&&c.responseXML?c.responseXML:null)){C6(this,a);g.R(this.g.getRootNode(),"iv-module-loaded");a=[];for(var d in this.A){b=this.A[d].annotation;if(b.o)if(c=b.o,c.g.length)if(c=c.g[0].o||c.g[0].g||c.g[0].A,!c||2>c.length)c=null;else{var e=c.length-1;c=0>=c[0].t&&0>=c[e].t?null:{start:c[0].t,end:c[e].t}}else c=null;else c=null;if(e=c)if(c=1E3*e.start,e=1E3*e.end,0==c&&(c++,e++),!(e<c)){var f={id:d,namespace:"annotations_module"};"marker"==b.type&&(f.style=
"ytp-chapter-marker",f.tooltip=b.B,f.visible=!0);b=new g.mT(c,e,f);a.push(b)}}g.MV(this.g,a)}};
g.h.pz=function(a){a==this.g.getVideoData().videoId&&(this.loaded?$ra(this):this.load())};
g.h.qB=function(a){a=a.getId();var b=this.A[a];b&&!b.B&&(b=b.annotation,csa(this,a),k6(this.Za,b.Qb))};
g.h.rB=function(a){D6(this,a.getId())};
g.h.ww=function(a){if(a){a.isVisible=!1;if(a.view){Dra(a);var b=a.view;b.o&&g.N(b.o,!1);b.A&&b.A.oa()&&g.N(b.A.oa(),!1);b.L&&(b.F.Ea(b.L),b.L=null)}E6(this,"shown",!1,a.annotation.id);this.km(a.annotation,"hidden")}};
g.h.nA=function(a){a&&(a.show(),E6(this,"shown",!0,a.annotation.id),this.km(a.annotation,"shown"))};
g.h.NN=function(a,b,c){var d=this.A[a];if(d&&b.value!=c){b.value=c;var e=!1;Yqa(d.annotation,function(a){e|=a.value});
dsa(this,a,b,e)}};
g.h.qK=function(a){if(a&&a.id){var b=Z5(a);if(b){var c=Z4(b);if(c){var d=(0,g.z)(this.km,this,a,"click");if("new"==t5(c,b.target)||esa(this,b))d(),d=null;I5(this.Za,a.Qb,d)}}}};
g.h.km=function(a,b){Xqa(a,function(c){if(c.trigger==b&&"openUrl"==c.type&&c.url){var d=this.g.getVideoData(),e;if(!(e=!esa(this,c.url))){e=Ara(c.url);var f=Bra(c.url);if(e){if(d.videoId==e)this.g.Rc(f||0);else{var k=B6(this).o;g.m3(k.app,e,void 0,void 0,void 0,void 0);f&&B6(this).o.Ed()&&B6(this).o.Rc(f)}e=!0}else e=!1;e=!e}e&&(d=u5(c.url,a.id,d.videoId,g.Y(this.g)))&&(this.g.wd(),e=t5(d,c.url.target),c=d,d="current"==e?"_top":void 0,e=g.sF(c),f=null,"ei"in e&&(f={ei:e.ei},c=g.Lg(c,"ei")),g.iW(c,
d,f))}},this)};
g.h.HL=function(){E6(this,"playerControlShow",!1)};
g.h.rN=function(){E6(this,"playerControlShow",!0)};
g.h.qR=function(a){E6(this,"rollOver",!0,a.id)};
g.h.bh=function(a){E6(this,"rollOver",!1,a.id)};
g.h.UK=function(a){a&&a.id&&(this.A[a.id].B=!0,D6(this,a.id),q6(this.Za,a.Qb),this.km(a,"close"),E6(this,"closed",!0,a.id))};
g.h.ll=function(){return!!this.o&&this.o.isAvailable()};
g.h.pB=function(){this.ll();return!!this.o&&this.o.B};
g.h.Ys=function(a,b,c){this.ll();this.o&&(b=!!b,a?g.t(c)?l6(this.o,c,b):l6(this.o,"YOUTUBE_DRAWER_AUTO_OPEN",b):this.o.Xl())};
g.h.Xs=function(a,b){this.g.U(a?"cardsteasershow":"cardsteaserhide",b)};
g.h.P=function(){g.Y(this.g).F.unsubscribe("vast_info_card_add",this.pz,this);this.g.removeEventListener("crn_annotations_module",this.qB,this);this.g.removeEventListener("crx_annotations_module",this.rB,this);g.Eq(this.g.getRootNode(),"ytp-iv-drawer-open");for(var a=this.J,b=0,c=a.length;b<c;b++)g.tH(a[b]);this.J.length=0;A6.O.P.call(this)};
g.A(F6,g.XV);g.h=F6.prototype;g.h.load=function(){F6.O.load.call(this);var a=z6(g.Y(this.g).o)?function(){}:(0,g.z)(this.LF,this);
msa(this,a)};
g.h.unload=function(){G6(this,null);this.C&&(this.C.abort(),this.C=null);F6.O.unload.call(this)};
g.h.rR=function(a,b){if(!z6(g.Y(this.g).o))return null;var c;switch(a){case "loadCustomEndscreenRenderer":return c=Lra(b,"new"),G6(this,c),!0;case "loadCustomEndscreenJson":return(c=Mra(b))&&G6(this,c),!0;case "unloadCustomEndscreenJson":return G6(this,null),!0}return null};
g.h.LF=function(){var a=this.g.getVideoData(),b=a.videoId;this.C&&this.C.abort();b={method:"POST",td:(0,g.z)(this.uL,this,b),Hc:{v:b},withCredentials:!0};this.aa&&(b.Hc.r=1);"gaming"==g.Y(this.g).o&&(b.Hc.gaming="1");this.S&&(b.Hc.ptype="embedded");var c=this.g.getVideoData().yv;c&&(b.Ob={ad_tracking:c});if(a=g.pR(a))this.C=g.xF(a,b)};
g.h.uL=function(a,b){var c=this.C=null;if(200==b.status){var d=b.responseText;")]}"==d.substring(0,3)&&(d=d.substring(3),c=JSON.parse(d),c=this.aa?Lra(c,this.S?"new":"current"):Mra(c))}G6(this,c)};
g.h.gt=function(){if(this.A&&this.A.elements){var a=this.g.iB(),b=a.width,c=a.height;if(0!=b&&0!=c){var d=b/c,e;e=this.g.so().width;for(var f=null,k=-1,l=0;l<g.z4.length;l++){var m=Math.abs(e-g.z4[l]);if(-1==k||f>=m)k=l,f=m}e=g.A4[k];this.B&&g.fh(this.B.element,"outline-width",Math.max(this.g.so().width,this.g.so().height)+"px");for(f=0;f<this.A.elements.length;++f){var l=this.A.elements[f].id,k=this.o[l],m=this.F[l],n=m.width*d/m.aspectRatio,l=Math.round(n*c),q=a.left+Math.round(m.left*b),r=a.top+
Math.round(m.top*c);g.wh(k.element,Math.round(m.width*b),l);g.lh(k.element,q,r);g.Fq(k.element,jta);q=m.left+m.width/2;m=m.top+n/2;g.R(k.element,.5>=q&&.5>=m?"ytp-ce-top-left-quad":.5<q&&.5>=m?"ytp-ce-top-right-quad":.5>=q&&.5<m?"ytp-ce-bottom-left-quad":"ytp-ce-bottom-right-quad");g.Fq(k.element,g.A4);g.R(k.element,e);(k=g.he("div","ytp-ce-expanding-overlay-body",k.element)[0])&&g.fh(k,"height",l+"px")}}}};
g.h.sB=function(a){if(this.A)if("ytp-ce-in-endscreen"==a.getId())this.G=!1,this.A.skip&&1==this.g.Zk()?(a=this.g,(a=g.yV(a.app,a.playerType||1))&&g.wU(a,!0),this.g.Rc(window.Infinity),this.G=!0):(K6(this,this.A.impressionUrls),c6([this.A.visualElement]));else if(!this.G){a=a.getId().substring(15);var b=this.o[a],c=this.F[a];g.R(b.element,"ytp-ce-element-show");b.element.removeAttribute("aria-hidden");b=this.g.getRootNode();g.R(b,"ytp-ce-shown");K6(this,c.impressionUrls);c6([c.visualElement]);g.Y(this.g).Cb&&
this.g.xa("endscreenelementshown",a)}};
g.h.tB=function(a){if("ytp-ce-in-endscreen"!=a.getId()&&!this.G){a=a.getId().substring(15);var b=this.o[a];g.Eq(b.element,"ytp-ce-element-show");b.element.setAttribute("aria-hidden",!0);b=this.g.getRootNode();g.Eq(b,"ytp-ce-shown");g.Y(this.g).Cb&&this.g.xa("endscreenelementhidden",a)}};
g.h.jO=function(a){a.target===window&&(new g.ou(function(){for(var a in this.o)g.Fq(this.o[a].element,["ytp-ce-force-expand","ytp-ce-element-hover","ytp-ce-element-shadow-show"])},0,this)).start()};
g.h.Ly=function(a,b){if(a.targetUrl&&(!b||"keypress"!=b.type||13==b.keyCode)){for(var c=b.target;c&&!g.Cq(c,"ytp-ce-element");){g.Cq(c,"subscribe-label")&&L6(this,a);if(g.Cq(c,"ytp-ce-channel-subscribe"))return;c=g.Ge(c)}if(!c||g.Cq(c,"ytp-ce-element-hover")){b.preventDefault();b.stopPropagation();if(c=this.o[a.id])this.yr(c,a),c.element.blur();b.ctrlKey||b.metaKey||"new"==a.Rk?(L6(this,a),this.Tz(),this.g.wd(),g.iW(a.targetUrl,void 0,a.jd)):(c=(0,g.z)(this.Tz,this,g.za(g.hW,a.targetUrl,a.jd)),L6(this,
a,c))}}};
g.h.Zs=function(a,b){g.Cq(a.element,"ytp-ce-element-hover")||("VIDEO"==b.type||"PLAYLIST"==b.type?g.R(a.element,"ytp-ce-element-hover"):g.Y(this.g).isMobile?(new g.ou(function(){g.R(a.element,"ytp-ce-element-hover")},200)).start():g.R(a.element,"ytp-ce-element-hover"),K6(this,b.zw),J6(this,b.id,!0),jsa(this,a,!0))};
g.h.yr=function(a,b){g.Eq(a.element,"ytp-ce-element-hover");g.Eq(a.element,"ytp-ce-force-expand");J6(this,b.id,!1);jsa(this,a,!1)};
g.h.Tz=function(a){this.g.fi(17,a)};
g.h.P=function(){this.g.removeEventListener("crn_creatorendscreen",this.sB,this);this.g.removeEventListener("crx_creatorendscreen",this.tB,this);this.g.removeEventListener("resize",this.gt,this);g.hG(this.ba);this.unload();F6.O.P.call(this)};
g.A(R6,g.to);g.h=R6.prototype;g.h.getHours=function(){return this.date.getHours()};
g.h.getMinutes=function(){return this.date.getMinutes()};
g.h.getSeconds=function(){return this.date.getSeconds()};
g.h.getUTCHours=function(){return this.date.getUTCHours()};
g.h.getUTCMinutes=function(){return this.date.getUTCMinutes()};
g.h.Km=function(a,b){var c=g.to.prototype.Km.call(this,a);return a?c+" "+g.Pa(this.getHours(),2)+":"+g.Pa(this.getMinutes(),2)+":"+g.Pa(this.getSeconds(),2)+(b?g.uo(this):""):c+"T"+g.Pa(this.getHours(),2)+g.Pa(this.getMinutes(),2)+g.Pa(this.getSeconds(),2)+(b?g.uo(this):"")};
g.h.toString=function(){return this.Km()};
g.h.clone=function(){var a=new R6(this.date);a.rm=this.rm;a.tm=this.tm;return a};var V6={},kta="ontouchstart"in window.document;g.gG(window.document,"blur",W6,!0);g.gG(window.document,"change",W6,!0);g.gG(window.document,"click",W6);g.gG(window.document,"focus",W6,!0);g.gG(window.document,"mouseover",W6);g.gG(window.document,"mouseout",W6);g.gG(window.document,"mousedown",W6);g.gG(window.document,"keydown",W6);g.gG(window.document,"keyup",W6);g.gG(window.document,"keypress",W6);g.gG(window.document,"cut",W6);g.gG(window.document,"paste",W6);
kta&&(g.gG(window.document,"touchstart",W6),g.gG(window.document,"touchend",W6),g.gG(window.document,"touchcancel",W6));g.h=X6.prototype;g.h.Sd=function(a){return g.Qe(a,Z(this))};
g.h.unregister=function(){(0,g.r2)(this.H);this.H.length=0;g.MP(this.G);this.G.length=0};
g.h.init=g.x;g.h.dispose=g.x;g.h.addBehavior=function(a,b,c){c=Z(this,c);var d=(0,g.z)(b,this);a in V6||(V6[a]=new g.TD);V6[a].subscribe(c,d);this.F[b]=d};
g.h.removeBehavior=function(a,b,c){if(a in V6){var d=V6[a];d.unsubscribe(Z(this,c),this.F[b]);0>=d.Dc()&&(d.dispose(),delete V6[a])}delete this.F[b]};
g.h.ri=function(a,b,c){var d=this.va(a,b);if(d&&(d=g.u(d))){var e=g.sb(arguments,2);g.tb(e,0,0,a);d.apply(null,e)}};
g.h.va=function(a,b){return g.RF(a,b)};
g.h.setData=function(a,b,c){g.SF(a,b,c)};g.A($6,X6);g.pa($6);g.h=$6.prototype;g.h.register=function(){this.addBehavior("click",this.sC);this.addBehavior("keydown",this.fx);this.addBehavior("keypress",this.gx);Y6(this,"page-scroll",this.wG)};
g.h.unregister=function(){this.removeBehavior("click",this.sC);this.removeBehavior("keydown",this.fx);this.removeBehavior("keypress",this.gx);f7(this);this.o={};$6.O.unregister.call(this)};
g.h.sC=function(a){a&&!a.disabled&&(usa(this,a),this.click(a))};
g.h.fx=function(a,b,c){if(!(c.altKey||c.ctrlKey||c.shiftKey)&&(b=e7(this,a))){var d=function(a){var b="";a.tagName&&(b=a.tagName.toLowerCase());return"ul"==b||"table"==b},e;
d(b)?e=b:e=T6(b,d);if(e){e=e.tagName.toLowerCase();var f;"ul"==e?f=this.EI:"table"==e&&(f=this.DI);f&&psa(this,a,b,c,(0,g.z)(f,this))}}};
g.h.wG=function(){var a=this.o;if(0!=g.Mb(a))for(var b in a){var c=a[b],d=g.Qe(c.activeButtonNode||c.parentNode,Z(this));if(void 0==d||void 0==c)break;d7(this,d,c,!0)}};
g.h.gx=function(a,b,c){c.altKey||c.ctrlKey||c.shiftKey||(a=e7(this,a),M6(a)&&c.preventDefault())};
g.h.DI=function(a,b,c){var d=a7(this,b);if(d){var e=osa("table",b);b=g.he("td",null,e);d=rsa(d,b,g.he("td",null,osa("tr",e)).length,c);-1!=d&&(qsa(this,a,b[d]),c.preventDefault())}};
g.h.EI=function(a,b,c){if(40==c.keyCode||38==c.keyCode){var d=a7(this,b);d&&(b=(0,g.Ce)(g.he("li",null,b),M6),qsa(this,a,b[rsa(d,b,1,c)]),c.preventDefault())}};
g.h.uC=function(a){if(a){var b=e7(this,a);if(b){a.setAttribute("aria-pressed","true");a.setAttribute("aria-expanded","true");b.originalParentNode=b.parentNode;b.activeButtonNode=a;b.parentNode.removeChild(b);var c;this.va(a,"button-has-sibling-menu")?c=a.parentNode:c=ssa(this,a);c.appendChild(b);b.style.minWidth=a.offsetWidth-2+"px";var d=c7(this,a);d&&c.appendChild(d);(c=!!this.va(a,"button-menu-fixed"))&&(this.o[O6(a).toString()]=b);d7(this,a,b,c);g.$G("yt-uix-button-menu-before-show",a,b);g.ZV(b);
d&&g.ZV(d);this.ri(a,"button-menu-action",!0);g.R(a,Z(this,"active"));b=(0,g.z)(this.tC,this,a,!1);d=(0,g.z)(this.tC,this,a,!0);c=(0,g.z)(this.DP,this,a,void 0);this.g&&e7(this,this.g)==e7(this,a)||f7(this);g.ZG("yt-uix-button-menu-show",a);g.hG(this.A);this.A=[g.gG(window.document,"click",d),g.gG(window.document,"contextmenu",b),g.gG(window,"resize",c)];this.g=a}}};
g.h.DP=function(a,b){var c=e7(this,a);if(c){b&&(b instanceof g.Ld?c.innerHTML=g.Md(b):g.Je(c,b));var d=!!this.va(a,"button-menu-fixed");d7(this,a,c,d)}};
g.h.cd=function(a){return g.J(Z(this,"content"),a)};
g.h.tC=function(a,b,c){c=g.iG(c);var d=g.Qe(c,Z(this));if(d){var d=e7(this,d),e=e7(this,a);if(d==e)return}var d=g.Qe(c,Z(this,"menu")),e=d==e7(this,a),f=g.Cq(c,Z(this,"menu-item")),k=g.Cq(c,Z(this,"menu-close"));if(!d||e&&(f||k))b7(this,a),d&&b&&this.va(a,"button-menu-indicate-selected")&&((a=g.J(Z(this,"content"),a))&&g.Je(a,S6(c)),tsa(this,d,c))};
g.h.isToggled=function(a){return g.Cq(a,Z(this,"toggled"))};
g.h.click=function(a){if(e7(this,a)){var b=e7(this,a);if(b){var c=g.Qe(b.activeButtonNode||b.parentNode,Z(this));c&&c!=a?(b7(this,c),g.kF((0,g.z)(this.uC,this,a),1)):M6(b)?b7(this,a):this.uC(a)}a.focus()}this.ri(a,"button-action")};g.A(g7,X6);g.h=g7.prototype;g.h.Sd=function(a){var b=X6.prototype.Sd.call(this,a);return b?b:a};
g.h.register=function(){Y6(this,"yt-uix-kbd-nav-move-out-done",this.dg)};
g.h.dispose=function(){g7.O.dispose.call(this);h7(this)};
g.h.va=function(a,b){var c=g7.O.va.call(this,a,b);return c?c:(c=g7.O.va.call(this,a,"card-config"))&&(c=g.u(c))&&c[b]?c[b]:null};
g.h.show=function(a){var b=this.Sd(a);if(b){g.R(b,Z(this,"active"));var c=vsa(this,a,b);if(c){c.cardTargetNode=a;c.cardRootNode=b;wsa(this,a,c);var d=Z(this,"card-visible"),e=this.va(a,"card-delegate-show")&&this.va(b,"card-action");this.ri(b,"card-action",a);this.A=a;g.$V(c);g.kF((0,g.z)(function(){e||(g.ZV(c),g.ZG("yt-uix-card-show",b,a,c));xsa(c);g.R(c,d);g.ZG("yt-uix-kbd-nav-move-in-to",c)},this),10)}}};
g.h.dg=function(a){if(a=this.Sd(a)){var b=g.ge(Z(this,"card")+O6(a));b&&(g.Eq(a,Z(this,"active")),g.Eq(b,Z(this,"card-visible")),g.$V(b),this.A=null,b.cardTargetNode=null,b.cardRootNode=null,b.cardMask&&(g.Ae(b.cardMask),b.cardMask=null))}};
g.h.CP=function(a,b){var c=this.Sd(a);if(c){if(b){var d=this.xc(c);if(!d)return;b instanceof g.Ld?d.innerHTML=g.Md(b):g.Je(d,b)}g.Cq(c,Z(this,"active"))&&(c=vsa(this,a,c),wsa(this,a,c),g.ZV(c),xsa(c))}};
g.h.isActive=function(a){return(a=this.Sd(a))?g.Cq(a,Z(this,"active")):!1};
g.h.xc=function(a){var b=a.cardContentNode;if(!b){var c=Z(this,"content"),d=Z(this,"card-content");(b=(b=this.va(a,"card-id"))?g.ge(b):g.J(c,a))||(b=window.document.createElement("div"));var e=b;g.Eq(e,c);g.R(e,d);a.cardContentNode=b}return b};var j7;g.A(i7,X6);g.pa(i7);g.h=i7.prototype;g.h.register=function(){this.addBehavior("keydown",this.kw);Y6(this,"yt-uix-kbd-nav-move-in",this.jy);Y6(this,"yt-uix-kbd-nav-move-in-to",this.VJ);Y6(this,"yt-uix-kbd-move-next",this.ky);Y6(this,"yt-uix-kbd-nav-move-to",this.wm)};
g.h.unregister=function(){this.removeBehavior("keydown",this.kw);g.hG(j7)};
g.h.kw=function(a,b,c){var d=c.keyCode;if(a=g.Qe(a,Z(this)))switch(d){case 13:case 32:this.jy(a);break;case 27:c.preventDefault();c.stopImmediatePropagation();a:{for(c=L5(a,"kbdNavMoveOut");!c;){c=g.Qe(a.parentElement,Z(this));if(!c)break a;c=L5(c,"kbdNavMoveOut")}c=g.ge(c);this.wm(c);g.ZG("yt-uix-kbd-nav-move-out-done",c)}break;case 40:case 38:if((b=c.target)&&g.Cq(a,Z(this,"list")))switch(d){case 40:this.ky(b,a);break;case 38:d=window.document.activeElement==a,a=Asa(a),b=a.indexOf(b),0>b&&!d||(b=
d?a.length-1:(a.length+b-1)%a.length,a[b].focus(),zsa(this,a[b]))}c.preventDefault()}};
g.h.jy=function(a){var b=L5(a,"kbdNavMoveIn"),b=g.ge(b);ysa(this,a,b);this.wm(b)};
g.h.VJ=function(a){ysa(this,g.Re(),a);this.wm(a)};
g.h.wm=function(a){if(a)if(g.Ne(a))a.focus();else{var b=T6(a,function(a){return g.wa(a)&&1==a.nodeType?g.Ne(a):!1});
b?b.focus():(a.setAttribute("tabindex","-1"),a.focus())}};
g.h.ky=function(a,b){var c=window.document.activeElement==b,d=Asa(b),e=d.indexOf(a);0>e&&!c||(c=c?0:(e+1)%d.length,d[c].focus(),zsa(this,d[c]))};g.A(k7,X6);g.pa(k7);g.h=k7.prototype;g.h.register=function(){this.addBehavior("click",this.vC);this.addBehavior("mouseenter",this.pG);Y6(this,"page-scroll",this.EG);Y6(this,"yt-uix-kbd-nav-move-out-done",function(a){a=this.Sd(a);o7(this,a)});
this.B=new g.TD};
g.h.unregister=function(){this.removeBehavior("click",this.vC);this.o=this.g=null;g.hG(g.Fb(g.Ob(this.A)));this.A={};g.Jb(this.D,function(a){g.Ae(a)},this);
this.D={};g.Ve(this.B);this.B=null;k7.O.unregister.call(this)};
g.h.vC=function(a,b,c){a&&(b=r7(this,a),!b.disabled&&N6(c.target,b)&&Dsa(this,a))};
g.h.pG=function(a,b,c){a&&g.Cq(a,Z(this,"hover"))&&N6(c.target,r7(this,a))&&Dsa(this,a,!0)};
g.h.EG=function(){this.g&&this.o&&Bsa(this,this.o,this.g)};
g.h.wC=function(a){if(a){var b=q7(this,a);if(b){g.$G("yt-uix-menu-before-show",a,b);this.g?N6(a,this.g)||o7(this,this.o):(this.o=a,this.g=b,g.Cq(a,Z(this,"sibling-content"))||(g.Ae(b),window.document.body.appendChild(b)),b.style.minWidth=r7(this,a).offsetWidth-2+"px");var c=m7(this,a);c&&g.ye(c,b);g.Eq(b,Z(this,"content-hidden"));Bsa(this,a,b);g.Dq(r7(this,a),[Z(this,"trigger-selected"),"yt-uix-button-toggled"]);g.ZG("yt-uix-menu-show",a);Gsa(b);Esa(this,a);g.ZG("yt-uix-kbd-nav-move-in-to",b);var d=
(0,g.z)(this.GS,this,a),e=(0,g.z)(this.BI,this,a),c=g.ya(a).toString();this.A[c]=[g.gG(b,"click",e),g.gG(window.document,"click",d)];g.Cq(a,Z(this,"indicate-selected"))&&(d=(0,g.z)(this.CI,this,a),this.A[c].push(g.gG(b,"click",d)));g.Cq(a,Z(this,"hover"))&&(a=(0,g.z)(this.FS,this,a),this.A[c].push(g.gG(window.document,"mousemove",a)))}}};
g.h.FS=function(a,b){var c=g.iG(b);c&&(N6(c,r7(this,a))||Hsa(this,c)||p7(this,a))};
g.h.GS=function(a,b){var c=g.iG(b);if(c){if(Hsa(this,c)){var d=g.Qe(c,Z(this,"content")),e=g.Pe(c,"LI");e&&d&&g.He(d,e)&&g.$G("yt-uix-menu-item-clicked",c);c=g.Qe(c,Z(this,"close-on-select"));if(!c)return;d=l7(c)}o7(this,d||a)}};
g.h.BI=function(a,b){var c=g.iG(b);c&&Fsa(this,a,c)};
g.h.CI=function(a,b){var c=g.iG(b);if(c){var d=r7(this,a);if(d&&(c=g.Pe(c,"LI")))if(c=S6(c).trim(),d.hasChildNodes()){var e=$6.getInstance();(d=g.J(Z(e,"content"),d))&&g.Je(d,c)}else g.Je(d,c)}};g.A(s7,g7);g.pa(s7);g.h=s7.prototype;g.h.register=function(){s7.O.register.call(this);this.addBehavior("click",this.Vu,"target");this.addBehavior("click",this.Uu,"close")};
g.h.unregister=function(){s7.O.unregister.call(this);this.removeBehavior("click",this.Vu,"target");this.removeBehavior("click",this.Uu,"close");for(var a in this.g)g.hG(this.g[a]);this.g={};for(a in this.o)g.hG(this.o[a]);this.o={}};
g.h.Vu=function(a,b,c){c.preventDefault();b=g.Pe(c.target,"button");b&&b.disabled||(a=(b=this.va(a,"card-target"))?g.y(b)?window.document.getElementById(b):b:a,b=this.Sd(a),this.va(b,"disabled")||(g.Cq(b,Z(this,"active"))?(this.dg(a),g.Eq(b,Z(this,"active"))):(this.show(a),g.R(b,Z(this,"active")))))};
g.h.show=function(a){s7.O.show.call(this,a);var b=this.Sd(a),c=g.ya(a).toString();if(!g.RF(b,"click-outside-persists")){if(this.g[c])return;var b=g.gG(window.document,"click",(0,g.z)(this.Wu,this,a)),d=g.gG(window,"blur",(0,g.z)(this.Wu,this,a));this.g[c]=[b,d]}a=g.gG(window,"resize",(0,g.z)(this.CP,this,a,void 0));this.o[c]=a};
g.h.dg=function(a){s7.O.dg.call(this,a);a=g.ya(a).toString();var b=this.g[a];b&&(g.hG(b),this.g[a]=null);if(b=this.o[a])g.hG(b),delete this.o[a]};
g.h.Wu=function(a,b){var c="yt-uix"+(this.C?"-"+this.C:"")+"-card",d=null;b.target&&(d=g.Qe(b.target,c)||g.Qe(l7(b.target),c));(d=d||g.Qe(window.document.activeElement,c)||g.Qe(l7(window.document.activeElement),c))||this.dg(a)};
g.h.Uu=function(a){(a=g.Qe(a,Z(this,"card")))&&(a=a.cardTargetNode)&&this.dg(a)};g.A(t7,g7);g.pa(t7);g.h=t7.prototype;g.h.register=function(){this.addBehavior("mouseenter",this.fy,"target");this.addBehavior("mouseleave",this.hy,"target");this.addBehavior("mouseenter",this.gy,"card");this.addBehavior("mouseleave",this.iy,"card")};
g.h.unregister=function(){this.removeBehavior("mouseenter",this.fy,"target");this.removeBehavior("mouseleave",this.hy,"target");this.removeBehavior("mouseenter",this.gy,"card");this.removeBehavior("mouseleave",this.iy,"card")};
g.h.fy=function(a){if(G7!=a){G7&&(this.dg(G7),G7=null);var b=(0,g.z)(this.show,this,a),c=(0,window.parseInt)(this.va(a,"delay-show"),10),b=g.kF(b,-1<c?c:200);this.setData(a,"card-timer",b.toString());G7=a;a.alt&&(this.setData(a,"card-alt",a.alt),a.alt="");a.title&&(this.setData(a,"card-title",a.title),a.title="")}};
g.h.hy=function(a){var b=(0,window.parseInt)(this.va(a,"card-timer"),10);g.iF(b);this.Sd(a).isCardHidable=!0;b=(0,window.parseInt)(this.va(a,"delay-hide"),10);b=-1<b?b:200;g.kF((0,g.z)(this.gH,this,a),b);if(b=this.va(a,"card-alt"))a.alt=b;if(b=this.va(a,"card-title"))a.title=b};
g.h.gH=function(a){this.Sd(a).isCardHidable&&(this.dg(a),G7=null)};
g.h.gy=function(a){a&&(a.cardRootNode.isCardHidable=!1)};
g.h.iy=function(a){a&&this.dg(a.cardTargetNode)};
var G7=null;var Ksa={LOADING:"loading",YC:"content",u_:"working"};g.h=u7.prototype;
g.h.show=function(){if(!this.la()){this.F=window.document.activeElement;if(!this.N){this.o||(this.o=g.ge("yt-dialog-bg"),this.o||(this.o=g.te("div"),this.o.id="yt-dialog-bg",this.o.className="yt-dialog-bg",window.document.body.appendChild(this.o)));var a;var b=window,c=b.document;a=0;if(c){a=c.body;var d=c.documentElement;if(d&&a)if(b=g.me(b).height,g.le(c)&&d.scrollHeight)a=d.scrollHeight!=b?d.scrollHeight:d.offsetHeight;else{var c=d.scrollHeight,e=d.offsetHeight;d.clientHeight!=e&&(c=a.scrollHeight,
e=a.offsetHeight);a=c>b?c>e?c:e:c<e?c:e}else a=0}this.o.style.height=a+"px";g.ZV(this.o)}this.xw();a=Msa(this);Nsa(a);this.C=g.gG(window.document,"keydown",(0,g.z)(this.jI,this));a=this.g;d=g.WG("player-added",this.xw,this);g.SF(a,"player-ready-pubsub-key",d);this.S&&(this.D=g.gG(window.document,"click",(0,g.z)(this.rO,this)));g.ZV(this.g);this.A.setAttribute("tabindex","0");Psa(this);this.H||g.R(window.document.body,"yt-dialog-active");f7($6.getInstance());h7(s7.getInstance());h7(t7.getInstance());
g.ZG("yt-ui-dialog-show-complete",this)}};
g.h.xw=function(){if(!this.aa){var a=this.g;g.T(window.document.body,"hide-players",!0);a&&g.T(a,"preserve-players",!0)}};
g.h.QK=function(a){a=a.currentTarget;a.disabled||(a=g.RF(a,"action")||"",this.dismiss(a))};
g.h.dismiss=function(a){if(!this.la()){this.B.U("pre-all");this.B.U("pre-"+a);g.$V(this.g);h7(s7.getInstance());h7(t7.getInstance());this.A.setAttribute("tabindex","-1");Lsa()||(g.$V(this.o),this.H||g.Eq(window.document.body,"yt-dialog-active"),nsa(),Osa());this.C&&(g.hG(this.C),this.C=null);this.D&&(g.hG(this.D),this.D=null);var b=this.g;if(b){var c=g.RF(b,"player-ready-pubsub-key");c&&((0,g.r2)(c),P6(b,"player-ready-pubsub-key"))}this.B.U("post-all");g.ZG("yt-ui-dialog-hide-complete",this);"cancel"==
a&&g.ZG("yt-ui-dialog-cancelled",this);this.B&&this.B.U("post-"+a);this.F&&this.F.focus()}};
g.h.setTitle=function(a){g.Je(g.J("yt-dialog-title",this.g),a)};
g.h.jI=function(a){g.kF((0,g.z)(function(){this.M||27!=a.keyCode||this.dismiss("cancel")},this),0);
9==a.keyCode&&a.shiftKey&&g.Cq(window.document.activeElement,"yt-dialog-fg")&&a.preventDefault()};
g.h.rO=function(a){"yt-dialog-base"==a.target.className&&this.dismiss("cancel")};
g.h.la=function(){return this.L};
g.h.dispose=function(){M6(this.g)&&this.dismiss("dispose");g.hG(this.G);this.G.length=0;g.kF((0,g.z)(function(){this.F=null},this),0);
this.J=this.A=null;this.B.dispose();this.B=null;this.L=!0};
g.h.PF=function(a){a.stopPropagation();Psa(this)};
g.oa("yt.ui.Dialog",u7,void 0);g.A(v7,X6);g.pa(v7);g.h=v7.prototype;g.h.register=function(){this.addBehavior("click",this.Yr,"target");this.addBehavior("click",this.rC,"close");Rsa(this)};
g.h.unregister=function(){v7.O.unregister.call(this);this.removeBehavior("click",this.Yr,"target");this.removeBehavior("click",this.rC,"close");this.B&&((0,g.r2)(this.B),this.B=null);this.o&&(g.hG(this.o),this.o=null)};
g.h.Yr=function(a){if(!this.g||!M6(this.g.g)){var b=this.Sd(a);a=Tsa(b,a);b||(b=a?a.overlayParentNode:null);if(b&&a){var c=!!this.va(b,"disable-shortcuts")||!1,d=!!this.va(b,"disable-outside-click-dismiss")||!1;this.g=new u7(a,c);this.A=b;var e=g.J("yt-dialog-fg",a);if(e){var f=this.va(b,"overlay-class")||"",k=this.va(b,"overlay-style")||"default",l=this.va(b,"overlay-shape")||"default",f=f?f.split(" "):[];f.push(Z(this,k));f.push(Z(this,l));g.Dq(e,f)}this.g.show();g.ZG("yt-uix-kbd-nav-move-to",e||
a);Rsa(this);c||d||(c=(0,g.z)(function(a){g.Cq(a.target,"yt-dialog-base")&&Ssa(this)},this),this.o=g.gG(g.J("yt-dialog-base",a),"click",c));
this.ri(b,"overlay-shown");g.ZG("yt-uix-overlay-shown",b)}}};
g.h.xc=function(a){return g.J("yt-dialog-content",a.overlayContentNode||a)};
g.h.rC=function(a){a&&a.disabled||g.ZG("yt-uix-overlay-hide")};
g.h.show=function(a){this.Yr(a)};g.A(w7,X6);g.pa(w7);g.h=w7.prototype;g.h.register=function(){this.addBehavior("mouseover",this.mn);this.addBehavior("mouseout",this.Qh);this.addBehavior("focus",this.Hv);this.addBehavior("blur",this.Cu);this.addBehavior("click",this.Qh);this.addBehavior("touchstart",this.zA);this.addBehavior("touchend",this.Vn);this.addBehavior("touchcancel",this.Vn)};
g.h.unregister=function(){this.removeBehavior("mouseover",this.mn);this.removeBehavior("mouseout",this.Qh);this.removeBehavior("focus",this.Hv);this.removeBehavior("blur",this.Cu);this.removeBehavior("click",this.Qh);this.removeBehavior("touchstart",this.zA);this.removeBehavior("touchend",this.Vn);this.removeBehavior("touchcancel",this.Vn);this.dispose();w7.O.unregister.call(this)};
g.h.dispose=function(){for(var a in this.o)this.Qh(this.o[a]);this.o={}};
g.h.mn=function(a){if(!(this.g&&1E3>(0,g.E)()-this.g)){var b=(0,window.parseInt)(this.va(a,"tooltip-hide-timer"),10);b&&(P6(a,"tooltip-hide-timer"),g.iF(b));var b=(0,g.z)(function(){Zsa(this,a);P6(a,"tooltip-show-timer")},this),c=(0,window.parseInt)(this.va(a,"tooltip-show-delay"),10)||0,b=g.kF(b,c);
this.setData(a,"tooltip-show-timer",b.toString());a.title&&(this.setData(a,"tooltip-text",Wsa(this,a)),a.title="");b=g.ya(a).toString();this.o[b]=a}};
g.h.Qh=function(a){var b=(0,window.parseInt)(this.va(a,"tooltip-show-timer"),10);b&&(g.iF(b),P6(a,"tooltip-show-timer"));b=(0,g.z)(function(){if(a){var b=g.ge(x7(this,a));b&&($sa(b),g.Ae(b),P6(a,"content-id"));b=g.ge(x7(this,a,"arialabel"));g.Ae(b)}P6(a,"tooltip-hide-timer")},this);
b=g.kF(b,50);this.setData(a,"tooltip-hide-timer",b.toString());if(b=this.va(a,"tooltip-text"))a.title=b;b=g.ya(a).toString();delete this.o[b]};
g.h.Hv=function(a){this.g=0;this.mn(a)};
g.h.Cu=function(a){this.g=0;this.Qh(a)};
g.h.zA=function(a,b,c){c.changedTouches&&(this.g=0,(a=U6(b,Z(this),c.changedTouches[0].target))&&this.mn(a))};
g.h.Vn=function(a,b,c){c.changedTouches&&(this.g=(0,g.E)(),(a=U6(b,Z(this),c.changedTouches[0].target))&&this.Qh(a))};var H7=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};g.oa("yt.uix.widgets_",H7,void 0);g.A(y7,g.DP);g.A(z7,g.DP);g.A(ata,g.DP);g.A(A7,g.DP);
var lta=new g.EP("subscription-subscribe",z7),mta=new g.EP("subscription-subscribe-loading",y7),nta=new g.EP("subscription-subscribe-loaded",y7),ota=new g.EP("subscription-subscribe-success",ata),pta=new g.EP("subscription-unsubscribe",A7),qta=new g.EP("subscription-unsubscirbe-loading",y7),rta=new g.EP("subscription-unsubscribe-loaded",y7),sta=new g.EP("subscription-unsubscribe-success",y7),tta=new g.EP("subscription-enable-ypc",y7),uta=new g.EP("subscription-disable-ypc",y7);var C7={},B7=[];g.A(D7,X6);g.pa(D7);D7.prototype.register=function(){this.addBehavior("click",this.zt);Z6(this,mta,this.Qy);Z6(this,nta,this.xC);Z6(this,ota,this.AN);Z6(this,qta,this.Qy);Z6(this,rta,this.xC);Z6(this,sta,this.ON);Z6(this,tta,this.qL);Z6(this,uta,this.nL)};
D7.prototype.unregister=function(){this.removeBehavior("click",this.zt);D7.O.unregister.call(this)};
var F7={Ct:"hover-enabled",NC:"yt-uix-button-subscribe",OC:"yt-uix-button-subscribed",UT:"ypc-enabled",WC:"yt-uix-button-subscription-container",XC:"yt-subscription-button-disabled-mask-container"},E7={mU:"channel-external-id",ZC:"subscriber-count-show-when-subscribed",aD:"subscriber-count-tooltip",bD:"subscriber-count-title",VV:"href",eW:"insecure",Nt:"is-subscribed",QX:"parent-url",MY:"clicktracking",vE:"show-unsub-confirm-dialog",PY:"show-unsub-confirm-time-frame",CE:"style-type",du:"subscribed-timestamp",
eu:"subscription-id",qZ:"target",PE:"ypc-enabled"};g.h=D7.prototype;
g.h.zt=function(a){var b=this.va(a,"href"),c=this.va(a,"insecure"),d=dta(),c=c&&!0;if(b)a=this.va(a,"target")||"_self",window.open(b,a);else if(!c)if(d){var b=this.va(a,"channel-external-id"),d=this.va(a,"clicktracking"),c=eta(this,a),e=this.va(a,"parent-url");if(this.va(a,"is-subscribed")){var f=this.va(a,"subscription-id"),k=new A7(b,f,c,a,d,e);ita(this,a)?cta(a,b).then(function(){g.GP(pta,k)}):g.GP(pta,k)}else g.GP(lta,new z7(b,c,d,e))}else hta(this,a)};
g.h.Qy=function(a){this.mi(a.g,this.eA,!0)};
g.h.xC=function(a){this.mi(a.g,this.eA,!1)};
g.h.AN=function(a){this.mi(a.g,this.iA,!0,a.o)};
g.h.ON=function(a){this.mi(a.g,this.iA,!1)};
g.h.qL=function(a){this.mi(a.g,this.FF)};
g.h.nL=function(a){this.mi(a.g,this.zF)};
g.h.iA=function(a,b,c){b?(this.setData(a,E7.Nt,"true"),c&&this.setData(a,E7.eu,c),this.va(a,E7.vE)&&(b=new R6,this.setData(a,E7.du,(b.getTime()/1E3).toString()))):(P6(a,E7.Nt),P6(a,E7.du),P6(a,E7.eu));fta(this,a)};
g.h.eA=function(a,b){var c=g.Qe(a,F7.WC);g.T(c,F7.XC,b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
g.h.FF=function(a){var b=!!this.va(a,"ypc-item-type"),c=!!this.va(a,"ypc-item-id");!this.va(a,"ypc-enabled")&&b&&c&&(g.R(a,"ypc-enabled"),this.setData(a,E7.PE,"true"))};
g.h.zF=function(a){this.va(a,"ypc-enabled")&&(g.Eq(a,"ypc-enabled"),P6(a,"ypc-enabled"))};
g.h.cF=function(a,b,c){var d=g.sb(arguments,2);(0,g.F)(a,function(a){b.apply(this,g.pb(a,d))},this)};
g.h.mi=function(a,b,c){var d=gta(this,a);this.cF.apply(this,g.pb([d],g.sb(arguments,1)))};window._exportCheck==g.Ca&&(g.oa("ytmod.player.annotations_module",A6,void 0),g.oa("ytmod.player.creatorendscreen",F6,void 0));var I7=D7.getInstance(),J7=Z(I7);J7 in H7||(I7.register(),Y6(I7,"yt-uix-init-"+J7,I7.init),Y6(I7,"yt-uix-dispose-"+J7,I7.dispose),H7[J7]=I7);})(_yt_player);

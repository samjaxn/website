(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(n,t,e){n.exports=e(19)},17:function(n,t,e){},18:function(n,t,e){n.exports=e.p+"static/media/ghostLogo.e124389b.svg"},19:function(n,t,e){"use strict";e.r(t);var o,a,i,r,c,u,s,h,l,d,w,f,v,m,g,x,y,p,M,E,b,k,A,T=e(0),F=e.n(T),I=e(3),L=e.n(I),W=(e(16),e(17),e(4)),B=e(5),C=e(8),D=e(6),H=e(1),q=e(7),J=(T.Component,e(18),Math.pow(10,4)),O=5,R=220,S=.9,X=.2,Y=!1,j=!1;c={vx:0,vy:0,x:0,y:0};var z=function(){var n=F.a.useRef(null),t=function(){Y=!1,cancelAnimationFrame(r),I()};window.addEventListener("resize",t),window.addEventListener("orientationchange",t);function e(){if(l=!l){d||(x=.001*+new Date,v=.5*b+Math.cos(2.1*x)*Math.cos(.9*x)*b*.45,m=.5*k+Math.sin(3.2*x)*Math.tan(Math.sin(.8*x))*k*.45);for(var n=0;n<i;n++)A=s[n],g=(w=v-A.x)*w+(f=m-A.y)*f,y=-J/g,g<J&&(x=Math.atan2(f,w),A.vx+=y*Math.cos(x),A.vy+=y*Math.sin(x)),A.x+=(A.vx*=S)+(A.ox-A.x)*X,A.y+=(A.vy*=S)+(A.oy-A.y)*X}else{M=(p=h.createImageData(b,k)).data;for(var t=0;t<i;t++)A=s[t],M[E=4*(~~A.x+~~A.y*b)]=M[E+1]=M[E+2]=R,M[E+3]=255;h.putImageData(p,0,0),T()}r=requestAnimationFrame(e)}var T=function(){h.font="15px Arial",h.textBaseline="middle",h.textAlign="center",h.fillStyle="white",h.fillText("G H O S T   A T E L I E R",b/2,k/2)},I=function(t){Y?L():((u=n.current).width=window.innerWidth,u.height=window.innerHeight,h=u.getContext("2d"),function(){b=u.width,k=u.height,d=!0,l=!0,s=[],o=Math.floor(b/O),a=Math.floor(k/O),i=0;for(var n=0;n<a;n++)for(var t=0;t<o;t++)(A=Object.create(c)).x=A.ox=O*t,A.y=A.oy=O*n,s[i]=A,i++}(),r=requestAnimationFrame(e),Y=!0)},L=function(){j&&window.open("https://www.instagram.com/ghostatelier/","_blank")};return F.a.createElement(F.a.Fragment,null,F.a.createElement("canvas",{ref:n,width:window.innerWidth,height:window.innerHeight,onClick:function(n){I(n)},onMouseMove:function(n){!function(n){var t=n.clientX,e=n.clientY,o=b/2-87.5,a=k/2-8.5;v=t,m=e,t>=o&&t<=o+175&&e>=a&&e<=a+17?(document.body.style.cursor="pointer",j=!0):(document.body.style.cursor="",j=!1)}(n)},onTouchMove:function(n){!function(n){var t=n.touches[0];v=t.pageX,m=t.pageY}(n)},onTouchEnd:function(n){v=void 0,m=void 0}}))};var G=function(){return F.a.createElement(z,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));L.a.render(F.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.e865e123.chunk.js.map
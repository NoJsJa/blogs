!function(i){var a={};function n(t){if(a[t])return a[t].exports;var e=a[t]={i:t,l:!1,exports:{}};return i[t].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=i,n.c=a,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(i,a,function(t){return e[t]}.bind(null,a));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="js/",n(n.s=0)}([function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(t,e,i){return e&&r(t.prototype,e),i&&r(t,i),t},n=s(i(1)),o=s(i(2));function r(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function s(t){return t&&t.__esModule?t:{default:t}}var l=new(s(i(3)).default.GyroNorm),a=(a(c,[{key:"addShader",value:function(t,e){e=this.gl.createShader(e);if(this.gl.shaderSource(e,t),this.gl.compileShader(e),!this.gl.getShaderParameter(e,this.gl.COMPILE_STATUS))throw new Error("Shader compile error: "+this.gl.getShaderInfoLog(e));this.gl.attachShader(this.program,e)}},{key:"resizeHandler",value:function(){this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight,this.width=this.container.offsetWidth,this.height=this.container.offsetHeight,this.canvas.width=this.width*this.ratio,this.canvas.height=this.height*this.ratio,this.canvas.style.width=this.width+"px",this.canvas.style.height=this.height+"px";var t=void 0,e=void 0,e=this.height/this.width<this.imageAspect?(t=1,this.height/this.width/this.imageAspect):(t=this.width/this.height*this.imageAspect,1);this.uResolution.set(this.width,this.height,t,e),this.uRatio.set(1/this.ratio),this.uThreshold.set(this.hth,this.vth),this.gl.viewport(0,0,this.width*this.ratio,this.height*this.ratio)}},{key:"resize",value:function(){this.resizeHandler(),window.addEventListener("resize",this.resizeHandler.bind(this))}},{key:"createScene",value:function(){this.program=this.gl.createProgram(),this.addShader(o.default,this.gl.VERTEX_SHADER),this.addShader(n.default,this.gl.FRAGMENT_SHADER),this.gl.linkProgram(this.program),this.gl.useProgram(this.program),this.uResolution=new h("resolution","4f",this.program,this.gl),this.uMouse=new h("mouse","2f",this.program,this.gl),this.uTime=new h("time","1f",this.program,this.gl),this.uRatio=new h("pixelRatio","1f",this.program,this.gl),this.uThreshold=new h("threshold","2f",this.program,this.gl),this.billboard=new u(this.gl),this.positionLocation=this.gl.getAttribLocation(this.program,"a_position"),this.gl.enableVertexAttribArray(this.positionLocation),this.gl.vertexAttribPointer(this.positionLocation,2,this.gl.FLOAT,!1,0,0)}},{key:"addTexture",value:function(){this.gl,function(t,e){for(var i,a,n=[],o=t.length,r=function(){0==--o&&e(n)},s=0;s<o;++s){var l=(i=t[s],a=r,l=void 0,(l=new Image).src=i,l.onload=a,l);n.push(l)}}(this.imageURLs,this.start.bind(this))}},{key:"start",value:function(t){var e=this.gl;this.imageAspect=t[0].naturalHeight/t[0].naturalWidth,console.log(this.imageAspect,"=aspect",this);for(var i=0;i<t.length;i++){var a=e.createTexture();e.bindTexture(e.TEXTURE_2D,a),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t[i]),this.textures.push(a)}var n=this.gl.getUniformLocation(this.program,"image0"),o=this.gl.getUniformLocation(this.program,"image1");this.gl.uniform1i(n,0),this.gl.uniform1i(o,1),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.textures[0]),this.gl.activeTexture(this.gl.TEXTURE1),this.gl.bindTexture(this.gl.TEXTURE_2D,this.textures[1]),this.resize(),this.render()}},{key:"gyro",value:function(){var i=this;this.maxTilt=15,l.init({gravityNormalized:!0}).then(function(){l.start(function(t){var e=t.do.gamma,t=t.do.beta;i.mouseTargetY=m(t,-i.maxTilt,i.maxTilt)/i.maxTilt,i.mouseTargetX=-m(e,-i.maxTilt,i.maxTilt)/i.maxTilt})}).catch(function(t){console.log("not supported")})}},{key:"mouseMove",value:function(){var a=this;document.addEventListener("mousemove",function(t){var e=a.windowWidth/2,i=a.windowHeight/2;a.mouseTargetX=(e-t.clientX)/e,a.mouseTargetY=(i-t.clientY)/i})}},{key:"render",value:function(){var t=((new Date).getTime()-this.startTime)/1e3;this.uTime.set(t),this.mouseX+=.05*(this.mouseTargetX-this.mouseX),this.mouseY+=.05*(this.mouseTargetY-this.mouseY),this.uMouse.set(this.mouseX,this.mouseY),this.billboard.render(this.gl),requestAnimationFrame(this.render.bind(this))}}]),c);function c(){!function(t){if(!(t instanceof c))throw new TypeError("Cannot call a class as a function")}(this),this.container=document.getElementById("gl"),this.canvas=document.createElement("canvas"),this.container.appendChild(this.canvas),this.gl=this.canvas.getContext("webgl"),this.ratio=window.devicePixelRatio,this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight,this.mouseX=0,this.mouseY=0,this.mouseTargetX=0,this.mouseTargetY=0,this.imageOriginal=this.container.getAttribute("data-imageOriginal"),this.imageDepth=this.container.getAttribute("data-imageDepth"),this.vth=this.container.getAttribute("data-verticalThreshold"),this.hth=this.container.getAttribute("data-horizontalThreshold"),this.imageURLs=[this.imageOriginal,this.imageDepth],this.textures=[],this.startTime=(new Date).getTime(),this.createScene(),this.addTexture(),this.mouseMove(),this.gyro()}function h(t,e,i,a){this.name=t,this.suffix=e,this.gl=a,this.program=i,this.location=a.getUniformLocation(i,t)}function u(t){var e=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,e),t.bufferData(t.ARRAY_BUFFER,u.verts,t.STATIC_DRAW)}function m(t,e,i){return t==t&&(void 0!==i&&(t=t<=i?t:i),void 0!==e&&(t=e<=t?t:e)),t}e.default=a,h.prototype.set=function(){for(var t="uniform"+this.suffix,e=arguments.length,i=Array(e),a=0;a<e;a++)i[a]=arguments[a];var n=[this.location].concat(i);this.gl[t].apply(this.gl,n)},u.verts=new Float32Array([-1,-1,1,-1,-1,1,1,1]),u.prototype.render=function(t){t.drawArrays(t.TRIANGLE_STRIP,0,4)},new a},function(t,e){t.exports="#ifdef GL_ES\n  precision mediump float;\n#define GLSLIFY 1\n#endif\n\nuniform vec4 resolution;\nuniform vec2 mouse;\nuniform vec2 threshold;\nuniform float time;\nuniform float pixelRatio;\nuniform sampler2D image0;\nuniform sampler2D image1;\n\n\nvec2 mirrored(vec2 v) {\n  vec2 m = mod(v,2.);\n  return mix(m,2.0 - m, step(1.0 ,m));\n}\n\nvoid main() {\n  // uvs and textures\n  vec2 uv = pixelRatio*gl_FragCoord.xy / resolution.xy ;\n  vec2 vUv = (uv - vec2(0.5))*resolution.zw + vec2(0.5);\n  vUv.y = 1. - vUv.y;\n  vec4 tex1 = texture2D(image1,mirrored(vUv));\n  // tex1.r = 1. - tex1.r;\n  // tex1.r = tex1.r*tex1.r;\n  vec2 fake3d = vec2(vUv.x + (tex1.r - 0.5)*mouse.x/threshold.x, vUv.y + (tex1.r - 0.5)*mouse.y/threshold.y);\n  vec4 tex0 = texture2D(image0,mirrored(fake3d));\n  \n\n\n  gl_FragColor = vec4(uv,0.,1.);\n  gl_FragColor = tex0;\n}"},function(t,e){t.exports="#define GLSLIFY 1\nattribute vec2 a_position;\n\nvoid main() {\n  gl_Position = vec4( a_position, 0, 1 );\n}"},function(t,e,i){"use strict";var a,r,o,s,l,c,n,h,u,m,d,g,v,p,f,y,A,x,b,E,T,R,w,_,M,I,L,O,z,G,D,F,C,N,S,U,X,Y,k,P,j,B,Q,Z,H,W,V,q,J,K,$,tt,et,it;function at(t){return Math.round(t*Math.pow(10,A))/Math.pow(10,A)}function nt(t){x&&x(t="string"==typeof t?{message:t,code:0}:t)}function ot(t){}function rt(t){return 0==(t=+t)||isNaN(t)?t:0<t?1:-1}function st(n){return new Promise(function(i,a){!function t(e){setTimeout(function(){n&&n.data?i():20<=e?a():t(++e)},50)}(0)})}function lt(){O=L?(E.screen.orientation.angle||0)*_:(E.orientation||0)*_}function ct(t){for(var e in I.orientation.data=t,I.orientation.callbacks)I.orientation.callbacks[e].call(this)}function ht(t){for(var e in I.motion.data=t,I.motion.callbacks)I.motion.callbacks[e].call(this)}void 0!==(E=window).FULLTILT&&null!==E.FULLTILT||(T=Math.PI,M=180/T,I={orientation:{active:!1,callbacks:[],data:void 0},motion:{active:!1,callbacks:[],data:void 0}},L=!(!E.screen||!E.screen.orientation||void 0===E.screen.orientation.angle||null===E.screen.orientation.angle),O=(L?E.screen.orientation.angle:E.orientation||0)*(_=T/180),D=(w=2*(G=T))/3,F=-(z=R=T/2),(C={version:"0.5.3",getDeviceOrientation:function(a){return new Promise(function(t,e){var i=new C.DeviceOrientation(a);i.start(),new st(I.orientation).then(function(){i._alphaAvailable=I.orientation.data.alpha&&null!==I.orientation.data.alpha,i._betaAvailable=I.orientation.data.beta&&null!==I.orientation.data.beta,i._gammaAvailable=I.orientation.data.gamma&&null!==I.orientation.data.gamma,t(i)}).catch(function(){i.stop(),e("DeviceOrientation is not supported")})})},getDeviceMotion:function(a){return new Promise(function(t,e){var i=new C.DeviceMotion(a);i.start(),new st(I.motion).then(function(){i._accelerationXAvailable=I.motion.data.acceleration&&I.motion.data.acceleration.x,i._accelerationYAvailable=I.motion.data.acceleration&&I.motion.data.acceleration.y,i._accelerationZAvailable=I.motion.data.acceleration&&I.motion.data.acceleration.z,i._accelerationIncludingGravityXAvailable=I.motion.data.accelerationIncludingGravity&&I.motion.data.accelerationIncludingGravity.x,i._accelerationIncludingGravityYAvailable=I.motion.data.accelerationIncludingGravity&&I.motion.data.accelerationIncludingGravity.y,i._accelerationIncludingGravityZAvailable=I.motion.data.accelerationIncludingGravity&&I.motion.data.accelerationIncludingGravity.z,i._rotationRateAlphaAvailable=I.motion.data.rotationRate&&I.motion.data.rotationRate.alpha,i._rotationRateBetaAvailable=I.motion.data.rotationRate&&I.motion.data.rotationRate.beta,i._rotationRateGammaAvailable=I.motion.data.rotationRate&&I.motion.data.rotationRate.gamma,t(i)}).catch(function(){i.stop(),e("DeviceMotion is not supported")})})},Quaternion:function(t,e,i,a){var n,o,r,s,l,c,h,u;this.set=function(t,e,i,a){this.x=t||0,this.y=e||0,this.z=i||0,this.w=a||1},this.copy=function(t){this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w},this.setFromEuler=function(t){return r=((t=t||{}).alpha||0)*_,s=(t.beta||0)*_,l=(t.gamma||0)*_,u=r/2,c=s/2,h=l/2,r=Math.cos(c),s=Math.cos(h),l=Math.cos(u),c=Math.sin(c),h=Math.sin(h),u=Math.sin(u),this.set(c*s*l-r*h*u,r*h*l+c*s*u,r*s*u+c*h*l,r*s*l-c*h*u),this.normalize(),this},this.setFromRotationMatrix=function(t){return o=t.elements,this.set(.5*Math.sqrt(1+o[0]-o[4]-o[8])*rt(o[7]-o[5]),.5*Math.sqrt(1-o[0]+o[4]-o[8])*rt(o[2]-o[6]),.5*Math.sqrt(1-o[0]-o[4]+o[8])*rt(o[3]-o[1]),.5*Math.sqrt(1+o[0]+o[4]+o[8])),this},this.multiply=function(t){return n=C.Quaternion.prototype.multiplyQuaternions(this,t),this.copy(n),this},this.rotateX=function(t){return n=C.Quaternion.prototype.rotateByAxisAngle(this,[1,0,0],t),this.copy(n),this},this.rotateY=function(t){return n=C.Quaternion.prototype.rotateByAxisAngle(this,[0,1,0],t),this.copy(n),this},this.rotateZ=function(t){return n=C.Quaternion.prototype.rotateByAxisAngle(this,[0,0,1],t),this.copy(n),this},this.normalize=function(){return C.Quaternion.prototype.normalize(this)},this.set(t,e,i,a)}}).Quaternion.prototype={constructor:C.Quaternion,multiplyQuaternions:(it=new C.Quaternion,function(t,e){var i=t.x,a=t.y,n=t.z,o=t.w,r=e.x,s=e.y,t=e.z,e=e.w;return it.set(i*e+o*r+a*t-n*s,a*e+o*s+n*r-i*t,n*e+o*t+i*s-a*r,o*e-i*r-a*s-n*t),it}),normalize:function(t){var e=Math.sqrt(t.x*t.x+t.y*t.y+t.z*t.z+t.w*t.w);return 0===e?(t.x=0,t.y=0,t.z=0,t.w=1):(t.x*=e=1/e,t.y*=e,t.z*=e,t.w*=e),t},rotateByAxisAngle:function(){new C.Quaternion;var a,n,o,r=new C.Quaternion;return function(t,e,i){return a=(i||0)/2,n=Math.sin(a),r.set((e[0]||0)*n,(e[1]||0)*n,(e[2]||0)*n,Math.cos(a)),o=C.Quaternion.prototype.multiplyQuaternions(t,r),C.Quaternion.prototype.normalize(o)}}()},C.RotationMatrix=function(t,e,i,a,n,o,r,s,l){var c,h,u,m,d,g,v,p,f,y,A;this.elements=new Float32Array(9),this.identity=function(){return this.set(1,0,0,0,1,0,0,0,1),this},this.set=function(t,e,i,a,n,o,r,s,l){this.elements[0]=t||1,this.elements[1]=e||0,this.elements[2]=i||0,this.elements[3]=a||0,this.elements[4]=n||1,this.elements[5]=o||0,this.elements[6]=r||0,this.elements[7]=s||0,this.elements[8]=l||1},this.copy=function(t){this.elements[0]=t.elements[0],this.elements[1]=t.elements[1],this.elements[2]=t.elements[2],this.elements[3]=t.elements[3],this.elements[4]=t.elements[4],this.elements[5]=t.elements[5],this.elements[6]=t.elements[6],this.elements[7]=t.elements[7],this.elements[8]=t.elements[8]},this.setFromEuler=function(t){return A=((t=t||{}).alpha||0)*_,f=(t.beta||0)*_,y=(t.gamma||0)*_,g=Math.cos(f),v=Math.cos(y),p=Math.cos(A),f=Math.sin(f),y=Math.sin(y),A=Math.sin(A),this.set(p*v-A*f*y,-g*A,v*A*f+p*y,v*A+p*f*y,p*g,A*y-p*v*f,-g*y,f,g*v),this.normalize(),this},this.setFromQuaternion=function(t){return h=t.w*t.w,u=t.x*t.x,m=t.y*t.y,d=t.z*t.z,this.set(h+u-m-d,2*(t.x*t.y-t.w*t.z),2*(t.x*t.z+t.w*t.y),2*(t.x*t.y+t.w*t.z),h-u+m-d,2*(t.y*t.z-t.w*t.x),2*(t.x*t.z-t.w*t.y),2*(t.y*t.z+t.w*t.x),h-u-m+d),this},this.multiply=function(t){return c=C.RotationMatrix.prototype.multiplyMatrices(this,t),this.copy(c),this},this.rotateX=function(t){return c=C.RotationMatrix.prototype.rotateByAxisAngle(this,[1,0,0],t),this.copy(c),this},this.rotateY=function(t){return c=C.RotationMatrix.prototype.rotateByAxisAngle(this,[0,1,0],t),this.copy(c),this},this.rotateZ=function(t){return c=C.RotationMatrix.prototype.rotateByAxisAngle(this,[0,0,1],t),this.copy(c),this},this.normalize=function(){return C.RotationMatrix.prototype.normalize(this)},this.set(t,e,i,a,n,o,r,s,l)},C.RotationMatrix.prototype={constructor:C.RotationMatrix,multiplyMatrices:(et=new C.RotationMatrix,function(t,e){return $=t.elements,tt=e.elements,et.set($[0]*tt[0]+$[1]*tt[3]+$[2]*tt[6],$[0]*tt[1]+$[1]*tt[4]+$[2]*tt[7],$[0]*tt[2]+$[1]*tt[5]+$[2]*tt[8],$[3]*tt[0]+$[4]*tt[3]+$[5]*tt[6],$[3]*tt[1]+$[4]*tt[4]+$[5]*tt[7],$[3]*tt[2]+$[4]*tt[5]+$[5]*tt[8],$[6]*tt[0]+$[7]*tt[3]+$[8]*tt[6],$[6]*tt[1]+$[7]*tt[4]+$[8]*tt[7],$[6]*tt[2]+$[7]*tt[5]+$[8]*tt[8]),et}),normalize:function(t){var e=t.elements,i=e[0]*e[4]*e[8]-e[0]*e[5]*e[7]-e[1]*e[3]*e[8]+e[1]*e[5]*e[6]+e[2]*e[3]*e[7]-e[2]*e[4]*e[6];return e[0]/=i,e[1]/=i,e[2]/=i,e[3]/=i,e[4]/=i,e[5]/=i,e[6]/=i,e[7]/=i,e[8]/=i,t.elements=e,t},rotateByAxisAngle:(q=new C.RotationMatrix,J=new C.RotationMatrix,K=!1,function(t,e,i){return J.identity(),K=!1,W=Math.sin(i),V=Math.cos(i),1===e[0]&&0===e[1]&&0===e[2]?(K=!0,J.elements[4]=V,J.elements[5]=-W,J.elements[7]=W,J.elements[8]=V):1===e[1]&&0===e[0]&&0===e[2]?(K=!0,J.elements[0]=V,J.elements[2]=W,J.elements[6]=-W,J.elements[8]=V):1===e[2]&&0===e[0]&&0===e[1]&&(K=!0,J.elements[0]=V,J.elements[1]=-W,J.elements[3]=W,J.elements[4]=V),q=K?(q=C.RotationMatrix.prototype.multiplyMatrices(t,J),C.RotationMatrix.prototype.normalize(q)):t})},C.Euler=function(t,e,i){var c,h,u,a,n,o;this.set=function(t,e,i){this.alpha=t||0,this.beta=e||0,this.gamma=i||0},this.copy=function(t){this.alpha=t.alpha,this.beta=t.beta,this.gamma=t.gamma},this.setFromRotationMatrix=function(t){o=0<(o=t.elements)[8]?(a=Math.atan2(-o[1],o[4]),n=Math.asin(o[7]),Math.atan2(-o[6],o[8])):o[8]<0?(a=Math.atan2(o[1],-o[4]),n=-Math.asin(o[7]),n+=0<=n?-T:T,Math.atan2(o[6],-o[8])):0<o[6]?(a=Math.atan2(-o[1],o[4]),n=Math.asin(o[7]),-R):o[6]<0?(a=Math.atan2(o[1],-o[4]),n=-Math.asin(o[7]),n+=0<=n?-T:T,-R):(a=Math.atan2(o[3],o[0]),n=0<o[7]?R:-R,0),a<0&&(a+=w),a*=M,n*=M,o*=M,this.set(a,n,o)},this.setFromQuaternion=function(t){var e,i,a=t.w*t.w,n=t.x*t.x,o=t.y*t.y,r=t.z*t.z,s=a+n+o+r,l=t.w*t.x+t.y*t.z;u=.499999*s<l?(c=2*Math.atan2(t.y,t.w),h=R,0):l<(1e-6-.5)*s?(c=-2*Math.atan2(t.y,t.w),h=-R,0):(e=a-n+o-r,i=2*(t.w*t.z-t.x*t.y),t=2*(t.w*t.y-t.x*t.z),0<(r=a-n-o+r)?(c=Math.atan2(i,e),h=Math.asin(2*l/s),Math.atan2(t,r)):(c=Math.atan2(-i,-e),h=-Math.asin(2*l/s),h+=h<0?T:-T,Math.atan2(-t,-r))),c<0&&(c+=w),c*=M,h*=M,u*=M,this.set(c,h,u)},this.rotateX=function(t){return C.Euler.prototype.rotateByAxisAngle(this,[1,0,0],t),this},this.rotateY=function(t){return C.Euler.prototype.rotateByAxisAngle(this,[0,1,0],t),this},this.rotateZ=function(t){return C.Euler.prototype.rotateByAxisAngle(this,[0,0,1],t),this},this.set(t,e,i)},C.Euler.prototype={constructor:C.Euler,rotateByAxisAngle:(H=new C.RotationMatrix,function(t,e,i){return H.setFromEuler(t),H=C.RotationMatrix.prototype.rotateByAxisAngle(H,e,i),t.setFromRotationMatrix(H),t})},C.DeviceOrientation=function(t){this.options=t||{};var e,i,a=0,n=0;this.alphaOffsetScreen=0,this.alphaOffsetDevice=void 0,"game"===this.options.type?(e=function(t){return null!==t.alpha&&(this.alphaOffsetDevice=new C.Euler(t.alpha,0,0),this.alphaOffsetDevice.rotateZ(-O),10<=++n)?void E.removeEventListener("deviceorientation",e,!1):void(200<=++a&&E.removeEventListener("deviceorientation",e,!1))}.bind(this),E.addEventListener("deviceorientation",e,!1)):"world"===this.options.type&&(i=function(t){return!0!==t.absolute&&void 0!==t.webkitCompassAccuracy&&null!==t.webkitCompassAccuracy&&0<=+t.webkitCompassAccuracy&&+t.webkitCompassAccuracy<50&&(this.alphaOffsetDevice=new C.Euler(t.webkitCompassHeading,0,0),this.alphaOffsetDevice.rotateZ(O),this.alphaOffsetScreen=O,10<=++n)?void E.removeEventListener("deviceorientation",i,!1):void(200<=++a&&E.removeEventListener("deviceorientation",i,!1))}.bind(this),E.addEventListener("deviceorientation",i,!1))},C.DeviceOrientation.prototype={constructor:C.DeviceOrientation,start:function(t){t&&"[object Function]"==Object.prototype.toString.call(t)&&I.orientation.callbacks.push(t),L?E.screen.orientation.addEventListener("change",lt,!1):E.addEventListener("orientationchange",lt,!1),I.orientation.active||(E.addEventListener("deviceorientation",ct,!1),I.orientation.active=!0)},stop:function(){I.orientation.active&&(E.removeEventListener("deviceorientation",ct,!1),I.orientation.active=!1)},listen:function(t){this.start(t)},getFixedFrameQuaternion:(B=new C.Euler,Q=new C.RotationMatrix,Z=new C.Quaternion,function(){var t=I.orientation.data||{alpha:0,beta:0,gamma:0},e=t.alpha;return this.alphaOffsetDevice&&(Q.setFromEuler(this.alphaOffsetDevice),Q.rotateZ(-this.alphaOffsetScreen),B.setFromRotationMatrix(Q),B.alpha<0&&(B.alpha+=360),B.alpha%=360,e-=B.alpha),B.set(e,t.beta,t.gamma),Z.setFromEuler(B),Z}),getScreenAdjustedQuaternion:function(){return(j=this.getFixedFrameQuaternion()).rotateZ(-O),j},getFixedFrameMatrix:(k=new C.Euler,P=new C.RotationMatrix,function(){var t=I.orientation.data||{alpha:0,beta:0,gamma:0},e=t.alpha;return this.alphaOffsetDevice&&(P.setFromEuler(this.alphaOffsetDevice),P.rotateZ(-this.alphaOffsetScreen),k.setFromRotationMatrix(P),k.alpha<0&&(k.alpha+=360),k.alpha%=360,e-=k.alpha),k.set(e,t.beta,t.gamma),P.setFromEuler(k),P}),getScreenAdjustedMatrix:function(){return(Y=this.getFixedFrameMatrix()).rotateZ(-O),Y},getFixedFrameEuler:(X=new C.Euler,function(){return U=this.getFixedFrameMatrix(),X.setFromRotationMatrix(U),X}),getScreenAdjustedEuler:(S=new C.Euler,function(){return N=this.getScreenAdjustedMatrix(),S.setFromRotationMatrix(N),S}),isAbsolute:function(){return!(!I.orientation.data||!0!==I.orientation.data.absolute)},getLastRawEventData:function(){return I.orientation.data||{}},_alphaAvailable:!1,_betaAvailable:!1,_gammaAvailable:!1,isAvailable:function(t){switch(t){case this.ALPHA:return this._alphaAvailable;case this.BETA:return this._betaAvailable;case this.GAMMA:return this._gammaAvailable}},ALPHA:"alpha",BETA:"beta",GAMMA:"gamma"},C.DeviceMotion=function(t){this.options=t||{}},C.DeviceMotion.prototype={constructor:C.DeviceMotion,start:function(t){t&&"[object Function]"==Object.prototype.toString.call(t)&&I.motion.callbacks.push(t),L?E.screen.orientation.addEventListener("change",lt,!1):E.addEventListener("orientationchange",lt,!1),I.motion.active||(E.addEventListener("devicemotion",ht,!1),I.motion.active=!0)},stop:function(){I.motion.active&&(E.removeEventListener("devicemotion",ht,!1),I.motion.active=!1)},listen:function(t){this.start(t)},getScreenAdjustedAcceleration:function(){var t=I.motion.data&&I.motion.data.acceleration?I.motion.data.acceleration:{x:0,y:0,z:0},e={};switch(O){case z:e.x=-t.y,e.y=t.x;break;case G:e.x=-t.x,e.y=-t.y;break;case D:case F:e.x=t.y,e.y=-t.x;break;default:e.x=t.x,e.y=t.y}return e.z=t.z,e},getScreenAdjustedAccelerationIncludingGravity:function(){var t=I.motion.data&&I.motion.data.accelerationIncludingGravity?I.motion.data.accelerationIncludingGravity:{x:0,y:0,z:0},e={};switch(O){case z:e.x=-t.y,e.y=t.x;break;case G:e.x=-t.x,e.y=-t.y;break;case D:case F:e.x=t.y,e.y=-t.x;break;default:e.x=t.x,e.y=t.y}return e.z=t.z,e},getScreenAdjustedRotationRate:function(){var t=I.motion.data&&I.motion.data.rotationRate?I.motion.data.rotationRate:{alpha:0,beta:0,gamma:0},e={};switch(O){case z:e.beta=-t.gamma,e.gamma=t.beta;break;case G:e.beta=-t.beta,e.gamma=-t.gamma;break;case D:case F:e.beta=t.gamma,e.gamma=-t.beta;break;default:e.beta=t.beta,e.gamma=t.gamma}return e.alpha=t.alpha,e},getLastRawEventData:function(){return I.motion.data||{}},_accelerationXAvailable:!1,_accelerationYAvailable:!1,_accelerationZAvailable:!1,_accelerationIncludingGravityXAvailable:!1,_accelerationIncludingGravityYAvailable:!1,_accelerationIncludingGravityZAvailable:!1,_rotationRateAlphaAvailable:!1,_rotationRateBetaAvailable:!1,_rotationRateGammaAvailable:!1,isAvailable:function(t){switch(t){case this.ACCELERATION_X:return this._accelerationXAvailable;case this.ACCELERATION_Y:return this._accelerationYAvailable;case this.ACCELERATION_Z:return this._accelerationZAvailable;case this.ACCELERATION_INCLUDING_GRAVITY_X:return this._accelerationIncludingGravityXAvailable;case this.ACCELERATION_INCLUDING_GRAVITY_Y:return this._accelerationIncludingGravityYAvailable;case this.ACCELERATION_INCLUDING_GRAVITY_Z:return this._accelerationIncludingGravityZAvailable;case this.ROTATION_RATE_ALPHA:return this._rotationRateAlphaAvailable;case this.ROTATION_RATE_BETA:return this._rotationRateBetaAvailable;case this.ROTATION_RATE_GAMMA:return this._rotationRateGammaAvailable}},ACCELERATION_X:"accelerationX",ACCELERATION_Y:"accelerationY",ACCELERATION_Z:"accelerationZ",ACCELERATION_INCLUDING_GRAVITY_X:"accelerationIncludingGravityX",ACCELERATION_INCLUDING_GRAVITY_Y:"accelerationIncludingGravityY",ACCELERATION_INCLUDING_GRAVITY_Z:"accelerationIncludingGravityZ",ROTATION_RATE_ALPHA:"rotationRateAlpha",ROTATION_RATE_BETA:"rotationRateBeta",ROTATION_RATE_GAMMA:"rotationRateGamma"},E.FULLTILT=C),a={GyroNorm:(o="deviceorientation",s="acceleration",l="accelerationinludinggravity",u=h=0,d=m=!(c="rotationrate"),p=50,f=!(v=g=n=null),y=r="game",x=null,b=!(A=2),ot.GAME=r,ot.WORLD="world",ot.DEVICE_ORIENTATION=o,ot.ACCELERATION=s,ot.ACCELERATION_INCLUDING_GRAVITY=l,ot.ROTATION_RATE=c,ot.prototype.init=function(t){t&&t.frequency&&(p=t.frequency),t&&t.gravityNormalized&&(f=t.gravityNormalized),t&&t.orientationBase&&(y=t.orientationBase),t&&"number"==typeof t.decimalCount&&0<=t.decimalCount&&(A=parseInt(t.decimalCount)),t&&t.logger&&(x=t.logger),t&&t.screenAdjusted&&(b=t.screenAdjusted);var e=new FULLTILT.getDeviceOrientation({type:y}).then(function(t){g=t}),t=(new FULLTILT.getDeviceMotion).then(function(t){u=0<(v=t).getScreenAdjustedAccelerationIncludingGravity().z?-1:1});return Promise.all([e,t]).then(function(){d=!0})},ot.prototype.end=function(){try{d=!1,this.stop(),v.stop(),g.stop()}catch(t){nt(t)}},ot.prototype.start=function(o){return d?(n=setInterval(function(){var t,e,i,a,n;o((t=b?g.getScreenAdjustedEuler():g.getFixedFrameEuler(),e=v.getScreenAdjustedAcceleration(),i=v.getScreenAdjustedAccelerationIncludingGravity(),a=v.getScreenAdjustedRotationRate(),n=0,a={do:{alpha:at(n=y===r?(n=t.alpha-h)<0?360-Math.abs(n):n:t.alpha),beta:at(t.beta),gamma:at(t.gamma),absolute:g.isAbsolute()},dm:{x:at(e.x),y:at(e.y),z:at(e.z),gx:at(i.x),gy:at(i.y),gz:at(i.z),alpha:at(a.alpha),beta:at(a.beta),gamma:at(a.gamma)}},f&&(a.dm.gx*=u,a.dm.gy*=u,a.dm.gz*=u),a))},p),void(m=!0)):void nt({message:'GyroNorm is not initialized yet. First call the "init()" function.',code:1})},ot.prototype.stop=function(){n&&(clearInterval(n),m=!1)},ot.prototype.normalizeGravity=function(t){f=!!t},ot.prototype.setHeadDirection=function(){return!b&&"world"!==y&&(h=g.getFixedFrameEuler().alpha,!0)},ot.prototype.startLogging=function(t){t&&(x=t)},ot.prototype.stopLogging=function(){x=null},ot.prototype.isAvailable=function(t){var e=g.getScreenAdjustedEuler(),i=v.getScreenAdjustedAcceleration(),a=v.getScreenAdjustedAccelerationIncludingGravity(),n=v.getScreenAdjustedRotationRate();switch(t){case o:return e.alpha&&null!==e.alpha&&e.beta&&null!==e.beta&&e.gamma&&null!==e.gamma;case s:return i&&i.x&&i.y&&i.z;case l:return a&&a.x&&a.y&&a.z;case c:return n&&n.alpha&&n.beta&&n.gamma;default:return{deviceOrientationAvailable:e.alpha&&null!==e.alpha&&e.beta&&null!==e.beta&&e.gamma&&null!==e.gamma,accelerationAvailable:i&&i.x&&i.y&&i.z,accelerationIncludingGravityAvailable:a&&a.x&&a.y&&a.z,rotationRateAvailable:n&&n.alpha&&n.beta&&n.gamma}}},ot.prototype.isRunning=function(){return m},ot)},void 0===(e=function(){return a}.call(e,i,e,t))||(t.exports=e)}]);
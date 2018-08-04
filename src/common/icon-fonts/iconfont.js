(function(window){var svgSprite='<svg><symbol id="icon-xiangxia" viewBox="0 0 1033 1024"><path d="M1022.976 308.224 594.944 736.256c-43.008 43.008-113.664 43.008-156.672 0L9.216 307.2c-12.288-11.264-12.288-30.72 0-43.008 11.264-12.288 30.72-12.288 43.008 0l430.08 429.056c9.216 9.216 21.504 14.336 34.816 14.336 13.312 0 25.6-5.12 34.816-14.336l428.032-428.032c11.264-12.288 30.72-12.288 43.008 0 6.144 6.144 9.216 13.312 9.216 21.504S1029.12 302.08 1022.976 308.224z"  ></path></symbol><symbol id="icon-xiangyou" viewBox="0 0 1024 1024"><path d="M675.027968 513.102265C674.403822 512.47812 292.824911 893.100774 292.824911 893.100774 279.035374 906.890328 279.035374 929.247603 292.824911 943.037158 306.614466 956.826695 328.971741 956.826695 342.761295 943.037158L724.964334 560.834101C751.909906 533.888547 751.929097 490.130662 724.964334 463.165899L342.761295 80.962842C328.971741 67.173305 306.614466 67.173305 292.824911 80.962842 279.035374 94.752397 279.035374 117.109672 292.824911 130.899226L675.027968 513.102265Z"  ></path></symbol><symbol id="icon-play" viewBox="0 0 1024 1024"><path d="M512 40.96a471.04 471.04 0 1 0 471.04 471.04A471.04 471.04 0 0 0 512 40.96z m0 901.12a430.08 430.08 0 1 1 430.08-430.08 430.08 430.08 0 0 1-430.08 430.08z"  ></path><path d="M555.8272 564.6336L450.56 634.88V389.12l184.32 122.88-42.5984 28.4672 32.1536 22.9376L696.32 512 409.6 307.2v409.6l179.6096-128.4096-33.3824-23.7568z"  ></path></symbol><symbol id="icon-xin" viewBox="0 0 1170 1024"><path d="M1066.676944 101.025891A351.539301 351.539301 0 0 0 584.680751 90.428552a351.539301 351.539301 0 0 0-481.996194 10.597339 344.230792 344.230792 0 0 0 0 490.035554l403.795143 400.140888a109.627641 109.627641 0 0 0 156.402101 0l403.795143-399.775463a344.230792 344.230792 0 0 0 0-490.400979z m-52.255842 438.510563L610.625959 939.677342a36.542547 36.542547 0 0 1-51.890417 0L154.574973 539.536454a271.876549 271.876549 0 0 1 0-386.985572A277.357931 277.357931 0 0 1 534.982887 146.338649L584.680751 189.093429 634.013189 146.338649a277.357931 277.357931 0 0 1 380.407913 8.03936 271.876549 271.876549 0 0 1 0 385.158445z" fill="#343231" ></path><path d="M338.018559 182.881196A155.305824 155.305824 0 0 0 182.712735 338.18702a18.271273 18.271273 0 0 0 36.542546 0A118.763277 118.763277 0 0 1 338.018559 219.423743a18.271273 18.271273 0 0 0 0-36.542547z" fill="#343231" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/ath-msr7-black.eb57ad5c.jpg"},24:function(e,t,a){e.exports=a.p+"static/media/ath-msr7-brown.cbde25c1.jpg"},27:function(e,t,a){e.exports=a.p+"static/media/iconmonstr-arrow-65.e2459d81.svg"},31:function(e,t,a){e.exports=a(78)},36:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),i=a.n(c),l=a(4),o=a(5),u=a(7),s=a(6),m=a(8),d=(a(36),function(e){return e.children}),p=a(20),E=function(e){return!!e.if&&e.children},h=a(19),v=a.n(h),b=a(24),g=a.n(b),f=a(25),w=a.n(f),N=a(26),k=a.n(N),q=function(e){var t=e.spinnerType?e.spinnerType:"ball-clip-rotate-multiple",a=e.spinnerColour?e.spinnerColour:"purple";return r.a.createElement(w.a,{src:e.imgSource,loading:function(){return r.a.createElement(k.a,{className:"ImgLoadSpinner",name:t,color:a})},error:function(){return r.a.createElement("div",{className:"ImgLoadError"},"Error")},className:"headphoneImage"})},O=a(3),j=function(){return r.a.createElement(O.d,null,r.a.createElement(O.b,null,r.a.createElement(O.a,null,"DESCRIPTION"),r.a.createElement(O.a,null,"DETAILS")),r.a.createElement(O.c,null,r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")),r.a.createElement(O.c,null,r.a.createElement("p",null,"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.")))},C=a(27),x=a.n(C),y=function(e){var t={background:"url(".concat(x.a,")"),backgroundPosition:"right 10px center",backgroundRepeat:"no-repeat"};return r.a.createElement("div",null,r.a.createElement("div",{className:e.clName},r.a.createElement("label",{className:"label",htmlFor:"colour"},"Colors"),r.a.createElement("select",{className:"styled-select",style:t,id:"sel-input-1",onChange:e.changed},e.selectOptions.map(function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},S=function(e){return r.a.createElement("button",{className:"cartButton",onClick:e.click},e.children)},B=a(28),T=a(29),I=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={image_src:v.a,cart:{txt:"Add to Cart",loading:!1,viewcart:!1}},a.inputChangedHandler=function(e){"Black"===e.target.value?a.setState({image_src:v.a}):a.setState({image_src:g.a})},a.cartClickHandler=function(){if(!a.state.cart.loading){var e=Object(p.a)({},a.state.cart);e={txt:"Loading....",loadding:!0,viewcart:!1},a.setState({cart:e}),setTimeout(function(){var e=Object(p.a)({},a.state.cart);e={txt:"View Cart",loadding:!0,viewcart:!0},a.setState({cart:e}),T.animateScroll.scrollToBottom()},2e3)}},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Container"},r.a.createElement("div",{className:"top-container"},r.a.createElement("p",{className:"backNav"},r.a.createElement(B.a,{icon:"arrow-left"})," All products"),r.a.createElement("h1",null,"Audio-Technica ATH-MSR7"),r.a.createElement("p",null,"2017 Best Headphone of the Year Award Winner")),r.a.createElement("div",{className:"img-container"},r.a.createElement(y,{clName:"sel-item-mobile",selectOptions:["Black","Brown"],changed:this.inputChangedHandler}),r.a.createElement(q,{imgSource:this.state.image_src})),r.a.createElement("div",{className:"tab-container"},r.a.createElement(j,null)),r.a.createElement("div",{className:"dol-container"},r.a.createElement("p",{className:"curVal"},"$59.99"),r.a.createElement("p",null,r.a.createElement("strike",null,"$89.99"))),r.a.createElement("div",{className:"sel-container"},r.a.createElement(y,{clName:"sel-item-desk",selectOptions:["Black","Brown"],changed:this.inputChangedHandler})),r.a.createElement("div",{className:"cart-container"},r.a.createElement(S,{click:this.cartClickHandler},this.state.cart.txt),r.a.createElement(E,{if:this.state.cart.viewcart},r.a.createElement("p",{className:"chOutText"},"Item added to cart!"))))}}]),t}(n.Component),A=a(11),H=a(30);A.b.add(H.a);var L=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(d,null,r.a.createElement(I,null))}}]),t}(n.Component),_=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(L,null)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,2,1]]]);
//# sourceMappingURL=main.1e2aa8f4.chunk.js.map
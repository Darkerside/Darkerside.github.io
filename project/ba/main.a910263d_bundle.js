(function(s){function n(n){var r=n[0];var t=n[1];var e=n[2];var i,o,a=0,p=[];for(;a<r.length;a++){o=r[a];if(Object.prototype.hasOwnProperty.call(f,o)&&f[o]){p.push(f[o][0])}f[o]=0}for(i in t){if(Object.prototype.hasOwnProperty.call(t,i)){s[i]=t[i]}}if(x)x(n);while(p.length){p.shift()()}d.push.apply(d,e||[]);return l()}function l(){var n;for(var r=0;r<d.length;r++){var t=d[r];var e=true;for(var i=1;i<t.length;i++){var o=t[i];if(f[o]!==0)e=false}if(e){d.splice(r--,1);n=a(a.s=t[0])}}return n}var t={};var f={2:0};var d=[];function a(n){if(t[n]){return t[n].exports}var r=t[n]={i:n,l:false,exports:{}};s[n].call(r.exports,r,r.exports,a);r.l=true;return r.exports}a.m=s;a.c=t;a.d=function(n,r,t){if(!a.o(n,r)){Object.defineProperty(n,r,{enumerable:true,get:t})}};a.r=function(n){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(n,"__esModule",{value:true})};a.t=function(r,n){if(n&1)r=a(r);if(n&8)return r;if(n&4&&typeof r==="object"&&r&&r.__esModule)return r;var t=Object.create(null);a.r(t);Object.defineProperty(t,"default",{enumerable:true,value:r});if(n&2&&typeof r!="string")for(var e in r)a.d(t,e,function(n){return r[n]}.bind(null,e));return t};a.n=function(r){var n=r&&r.__esModule?function n(){return r["default"]}:function n(){return r};a.d(n,"a",n);return n};a.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)};a.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[];var e=r.push.bind(r);r.push=n;r=r.slice();for(var i=0;i<r.length;i++)n(r[i]);var x=e;d.push([40,4,3,1,0]);return l()})({22:function(n,r,t){var e=t(23);var i=t(24);i=i.__esModule?i.default:i;if(typeof i==="string"){i=[[n.i,i,""]]}var o={};o.insert="head";o.singleton=false;var a=e(i,o);n.exports=i.locals||{}},24:function(n,r,t){var e=t(3);var i=t(25);var o=t(26);var a=t(27);var p=t(28);var s=t(29);var l=t(30);var f=t(31);var d=t(32);var x=t(33);var c=t(34);r=e(false);r.push([n.i,"@import url(https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap);"]);r.push([n.i,"@import url(https://fonts.googleapis.com/css2?family=Pacifico&display=swap);"]);r.push([n.i,"@import url(https://fonts.googleapis.com/css2?family=Courgette&display=swap);"]);r.i(i);r.i(o);r.i(a);r.i(p);r.i(s);r.i(l);r.i(f);r.i(d);r.i(x);r.i(c);r.push([n.i,"",""]);n.exports=r},25:function(n,r,t){var e=t(3);r=e(false);r.push([n.i,'* {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody, html {\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\nbody {\r\n    font-family: "Roboto", sans-serif;\r\n    font-size: 12px;\r\n    background-color: #fdfefd;\r\n}\r\n\r\nmain {\r\n    width: 100%;\r\n    margin: 0 auto;\r\n}\r\n\r\nimg {\r\n    display: block;\r\n}\r\n\r\nrestaurant-list {\r\n    height: max-content;\r\n}\r\n\r\n.content {\r\n    padding: 32px;\r\n    margin: auto;\r\n}\r\n\r\n#extra-content {\r\n\tposition: relative;\r\n\tz-index: 2;\r\n}\r\n\r\n.skip-link {\r\n   position: absolute;\r\n   top: -40px;\r\n   left: 0;\r\n   background-color: #cc5209;\r\n   color: white;\r\n   padding: 8px;\r\n   z-index: 100;\r\n}\r\n \r\n.skip-link:focus {\r\n   top: 0;\r\n}\r\n\r\n.loader {\r\n    border: 16px solid #fff;\r\n    border-radius: 50%;\r\n    border-top: 16px solid #6f1a07;\r\n    border-bottom: 16px solid #6f1a07;\r\n    width: 100px;\r\n    height: 100px;\r\n    -webkit-animation: spin 1.7s linear infinite;\r\n    animation: spin 1.7s linear infinite;\r\n    margin: 30px auto;\r\n}\r\n\r\n@-webkit-keyframes spin {\r\n    0% { -webkit-transform: rotate(0deg); }\r\n    100% { -webkit-transform: rotate(360deg); }\r\n}\r\n\r\n@keyframes spin {\r\n    0% { transform: rotate(0deg); }\r\n    100% { transform: rotate(360deg); }\r\n}',""]);n.exports=r},26:function(n,r,t){var e=t(3);r=e(false);r.push([n.i,'/* HEADER CSS\r\n/*\r\n/**/\r\n.header {\r\n    position: relative;\r\n    z-index: 4;\r\n    min-height: 50px;\r\n    transition: min-height 0.3s;\r\n    display: flex;\r\n    flex-flow: column;\r\n    background-color: rgba(36, 36, 36, 0.75);\r\n    position: absolute;\r\n    height: 410px;\r\n}\r\n\r\n.header-wrapper {\r\n    width: 120px;\r\n    text-align: center;\r\n    padding: 2em 0;\r\n    margin: 0 auto;\r\n}\r\n\r\n.header-img {\r\n    display: inline-block;\r\n    width: 70px;\r\n    height: 70px;\r\n}\r\n\r\n#menu {\r\n    background-color: transparent;\r\n    border: none;\r\n    font-size: 28px;\r\n    text-decoration: none;\r\n    color: black;\r\n    display: none;\r\n}\r\n\r\n/* NAVIGATION CSS\r\n/*\r\n/**/\r\n.nav {\r\n    display: block;\r\n    padding: 0.5em 0 1em;\r\n    margin: 1em auto 0;\r\n}\r\n\r\n.nav-list {\r\n    display: flex;\r\n    flex-flow: column;\r\n    width: 120px;\r\n}\r\n\r\n.nav-item {\r\n    box-sizing: border-box;\r\n    display: inline-block;\r\n    min-width: 66px;\r\n    text-align: left;\r\n    line-height: 24px;\r\n    min-height: 46px;\r\n}\r\n\r\n.nav a {\r\n    font-family: "Courgette", "Roboto", sans-serif;\r\n    display: inline-block;\r\n    padding: 0.7em 0.5em;\r\n    text-decoration: none;\r\n    color: #fff;\r\n    transition: 0.3s;\r\n    font-size: 19px;\r\n    width: -webkit-fill-available;\r\n}\r\n\r\n.nav a:hover {\r\n    font-weight: bold;\r\n    color: #cc5209;\r\n\r\n}\r\n\r\n.nav a:before {\r\n    content:"• ";\r\n}\r\n\r\n.nav-link {\r\n    font-size: 18px;\r\n    margin: auto auto 20px;\r\n    width: max-content;\r\n    fill: #cecece;\r\n}\r\n\r\n.nav-link a {\r\n    margin: 0 5px;\r\n}',""]);n.exports=r},27:function(n,r,t){var e=t(3);r=e(false);r.push([n.i,'/* JUMBOTRON CSS\r\n/*\r\n/**/\r\n.hero {\r\n    position: relative;\r\n    z-index: 2;\r\n    align-items: center;\r\n    min-height: 250px;\r\n    width: 100%;\r\n    text-align: center;\r\n    display: block;\r\n    height: 410px;\r\n}\r\n\r\n.hero-wrapper {\r\n    position: absolute;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 410px;\r\n    display: flex;\r\n    flex-flow: column;\r\n    justify-content: center;\r\n}\r\n\r\n.hero img {\r\n    object-fit: cover;\r\n    object-position: 50% 50%;\r\n    height: 410px;\r\n    width: 100%;\r\n}\r\n\r\n.hero-title {\r\n    font-family: "Pacifico", "Roboto", sans-serif;\r\n    color: #cc5209;\r\n    font-weight: 500;\r\n    font-size: 5em;\r\n}\r\n\r\n.hero-tagline {\r\n    color: #fdfefd;\r\n    margin-top: 16px;\r\n    font-size: 18px;\r\n    font-weight: 300;\r\n    font-family: "Montserrat", "Roboto", sans-serif;\r\n}',""]);n.exports=r},28:function(n,r,t){var e=t(3);r=e(false);r.push([n.i,'/* INTRO CSS\r\n/*\r\n/**/\r\n.intro-container {\r\n  min-height: 260px;\r\n  background-color: #242424;\r\n  display: flex;\r\n  align-items: center;\r\n  text-align: center;\r\n}\r\n\r\n.intro-wrapper {\r\n  max-width: 800px;\r\n  margin: 0 auto;\r\n  padding: 1em 1em;\r\n}\r\n\r\n.intro-title {\r\n  font-family: "Pacifico", "Roboto", sans-serif;\r\n  color: #fff;\r\n  margin: 0 auto;\r\n  width: max-content;\r\n  font-size: 32px;\r\n  padding: 0 0 0.5em;\r\n}\r\n\r\n.intro-title span {\r\n  color: #cc5209;\r\n}\r\n\r\n.intro-text {\r\n  font-family: "Montserrat", "Roboto", sans-serif;\r\n  color: #cecece;\r\n  font-size: 13px;\r\n}',""]);n.exports=r},29:function(n,r,t){var e=t(3);r=e(false);r.push([n.i,'/* RESTAURANTLIST CSS\r\n/*\r\n/**/\r\n.list {\r\n    width: 100%;\r\n    margin: 3em auto;\r\n    text-align: center;\r\n}\r\n\r\n.main-title {\r\n    font-family: "Pacifico", "Roboto", sans-serif;\r\n    font-size: 32px;\r\n    font-weight: bold;\r\n    color: #24292d;\r\n    text-align: center;\r\n}\r\n\r\n.main-title span, .sponsor-title span, .review-title span, .errno404 span, .place-title span {\r\n    color: #cc5209;\r\n}\r\n\r\n.posts {\r\n    margin: 32px auto auto;\r\n    text-align: left;\r\n    display: grid;\r\n    grid-row-gap: 30px;\r\n}\r\n\r\n.post-item {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-flow: column;\r\n    overflow: hidden;\r\n    transition: box-shadow .25s, -webkit-box-shadow .25s;\r\n    border-radius: 5px;\r\n    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);\r\n    -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */\r\n    -moz-animation: fadein 2s; /* Firefox < 16 */\r\n    -ms-animation: fadein 2s; /* Internet Explorer */\r\n    -o-animation: fadein 2s; /* Opera < 12.1 */\r\n    animation: fadein 2s;\r\n}\r\n\r\n.post-item-stars {\r\n    display: inline-block;\r\n    width: max-content;\r\n    text-align: center;\r\n    z-index: 3;\r\n    width: 70px;\r\n    height: 71px;\r\n    padding: 14px 0.4em;\r\n    color: white;\r\n    position: absolute;\r\n    margin: -15px  0 0 10px;\r\n    font-family: Roboto, sans-serif;\r\n    font-size: 1.4em;\r\n    font-weight: bold;\r\n    border-radius: 5px 5px 0 0;\r\n}\r\n\r\n.post-item-stars span {\r\n    vertical-align: bottom;\r\n    color: yellow;\r\n}\r\n\r\n.post-item-content {\r\n    padding: 16px;\r\n}\r\n\r\n.post-item-thumbnail {\r\n    width: 100%;\r\n}\r\n\r\n.post-title {\r\n    font-family: "Roboto", sans-serif;\r\n    color: #fff;\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    max-width: 100%;\r\n    padding: 24px;\r\n    font-size: 24px;\r\n    font-weight: 400;\r\n}\r\n\r\n.post-place {\r\n    display: block;\r\n    font-size: 19px;\r\n}\r\n\r\n.post-item-description {\r\n    margin-top: 16px;\r\n    font-size: 12px;\r\n    line-height: 1.5em;\r\n    overflow: hidden;\r\n    text-align: justify;\r\n    text-overflow: ellipsis;\r\n    display: -webkit-box;\r\n    -webkit-line-clamp: 5;\r\n    -webkit-box-orient: vertical;\r\n}\r\n\r\n.post-image {\r\n    min-height: 130px;\r\n    color: #a3a3a3;\r\n    background-color: #242424;\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n\r\n.post-image img {\r\n    text-align: right;\r\n    display: block;\r\n    border-radius: 2px 2px 0 0;\r\n    position: relative;\r\n    left: 0;\r\n    right: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    border-style: none;\r\n}\r\n\r\n.post-action {\r\n    margin: auto 0 0;\r\n    padding: 10px 20px;\r\n    text-align: right;\r\n    background-color: #cc5209;\r\n    display: flex;\r\n    flex-flow: row;\r\n    justify-content: space-between;\r\n}\r\n\r\n/* BUTTON CSS\r\n/*\r\n/**/\r\n.btn-action {\r\n    border: none;\r\n    background-color: rgba(0, 0, 0, 0);\r\n    padding: 2px 5px;\r\n    color: #fff;\r\n    cursor: pointer;\r\n}\r\n\r\n.btn-action span{\r\n    font-size: 46px; \r\n}\r\n\r\n.btn-fav span:hover, .btn-view span:hover {\r\n    color: #00aced;\r\n}\r\n\r\n.btn-fav.faved {\r\n    color: #00aced;\r\n}\r\n\r\n.errno404 {\r\n    box-sizing : border-box;\r\n    font-family: "roboto", sans-serif;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n    color: #24292d;\r\n    text-align: center;\r\n    margin: 70px auto;\r\n}',""]);n.exports=r},30:function(n,r,t){var e=t(3);r=e(false);r.push([n.i,'/* RESTAURANT INFO CSS\r\n/*\r\n/**/\r\narticle {\r\n    margin: 32px 0 0;\r\n}\r\n\r\n.restaurant {\r\n    min-height: 90px;\r\n}\r\n\r\n.restaurant-info {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-gap: 20px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.restaurant-image img {\r\n    width: 100%;\r\n}\r\n\r\n.restaurant-text {\r\n    display: flex;\r\n    flex-flow: column;\r\n    text-align: left;\r\n    justify-content: center;\r\n    color: #38383a;\r\n}\r\n\r\n.r-text-title {\r\n    font-size: 24px;\r\n    margin-bottom: 20px;\r\n    font-family: "Roboto", sans-serif;\r\n    border-bottom: 1px solid #38383a;\r\n    padding-bottom: 4px;\r\n}\r\n\r\n.r-text-title span {\r\n    display: block;\r\n    font-size: 13px;\r\n    font-weight: 400;\r\n    margin: 5px 0;\r\n}\r\n\r\n.restaurant-text p {\r\n    font-size: 13px;\r\n    text-align: justify;\r\n    font-family: "Roboto", sans-serif;\r\n    font-style: italic;\r\n}\r\n\r\n.restaurant-menu {\r\n    margin-top: 10px;\r\n    padding-top: 10px;\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-row-gap: 20px;\r\n    border-top: 1px solid #242424;\r\n    font-family: "Roboto", sans-serif;\r\n}\r\n\r\n.category-menu {\r\n    font-size: 12px;\r\n    margin: 20px 0;\r\n    font-family: "Roboto", sans-serif;\r\n    background-color: #38383a;\r\n    padding: 4px 10px;\r\n    width: max-content;\r\n    text-transform: uppercase;\r\n    color: #fff;\r\n}\r\n\r\n.category-menu span {\r\n    display: inline-block;\r\n    margin-left: 20px;\r\n}\r\n\r\n.r-text-rating {\r\n    margin-bottom:30px;\r\n    font-size: 14px;\r\n    font-family: "Roboto", sans-serif;\r\n    background-color: #38383a;\r\n    padding: 3px 10px;\r\n    width: max-content;\r\n    text-transform: uppercase;\r\n    color: #fff;\r\n}\r\n\r\n.restaurant-menu h4 {\r\n    text-align: center;\r\n    font-size: 16px;\r\n    margin: 10px 0 20px;\r\n}\r\n\r\n.menus-list {\r\n    text-align: left;\r\n    font-size: 13px;\r\n    list-style-type: none;\r\n    margin: 0 20px;\r\n    font-weight: 500;\r\n}\r\n\r\n.menus-list li {\r\n    margin: 10px 0; \r\n}\r\n\r\n.menus-list li:before {\r\n    content: "• ";\r\n}\r\n\r\n\r\n.r-text-action {\r\n    display: flex;\r\n    flex-flow: row;\r\n}\r\n\r\n.btn-fav, .btn-rev {\r\n    align-self: center;\r\n    padding: 0 5px;\r\n    width: max-content;\r\n    height: 46px;\r\n    background-color: #cc5209 !important;\r\n}\r\n\r\n.btn-rev {\r\n    margin: 0 0 0 10px;\r\n}\r\n\r\n.btn-fav span, .btn-rev span{\r\n    vertical-align: middle;\r\n}\r\n\r\n.btn-fav.active {\r\n    color: #e42222;\r\n    background-color: #ffaf7e !important;\r\n}\r\n\r\n.btn-rev.active {\r\n    color: #03a9f4;\r\n    background-color: #ffaf7e !important;\r\n}\r\n\r\n/* RATING CSS\r\n/*\r\n/**/\r\n.stars {\r\n  --star-size: 16px;\r\n  --star-color: #fff;\r\n  --star-background: #fc0;\r\n  --percent: calc(var(--rating) / 5 * 100%);\r\n  \r\n  display: inline-block;\r\n  font-size: var(--star-size);\r\n  font-family: "Times", sans-serif;\r\n  line-height: 1;\r\n  margin-left: 20px;\r\n}\r\n\r\n.stars:before {\r\n    content: \'★★★★★\';\r\n    letter-spacing: 3px;\r\n    background: linear-gradient(90deg, var(--star-background) var(--percent), var(--star-color) var(--percent));\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n}\r\n\r\n.material-button {\r\n    position: relative;\r\n    display: inline-block;\r\n    box-sizing: border-box;\r\n    border: none;\r\n    border-radius: 4px;\r\n    padding: 0 16px;\r\n    min-width: 64px;\r\n    height: 46px;\r\n    vertical-align: middle;\r\n    text-align: center;\r\n    text-overflow: ellipsis;\r\n    text-transform: uppercase;\r\n    color: rgb(var(--pure-material-onprimary-rgb, 255, 255, 255));\r\n    background-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));\r\n    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\r\n    font-family: var(--pure-material-font, "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system);\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    line-height: 36px;\r\n    overflow: hidden;\r\n    outline: none;\r\n    cursor: pointer;\r\n    transition: box-shadow 0.2s;\r\n}',""]);n.exports=r},31:function(n,r,t){var e=t(3);r=e(false);r.push([n.i,'.sponsor {\r\n  background-color: #ebe5d7;\r\n  display: flex;\r\n  flex-flow: column;\r\n  text-align: center;\r\n  align-items: center;\r\n  min-height: 100px;\r\n  padding: 1em 0 0;\r\n}\r\n\r\n.sponsor-title {\r\n  font-family: "Pacifico", "Roboto", sans-serif;\r\n  font-size: 24px;\r\n  filter: opacity(40%);\r\n}\r\n\r\n.sponsor-wrapper {\r\n  display: grid;\r\n  width: 100%;\r\n  margin: 20px auto;\r\n  align-items: center;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  grid-gap: 10px;\r\n}\r\n\r\n.sponsor img {\r\n  filter: grayscale(100%) opacity(50%);\r\n  margin: 0 auto;\r\n  max-width: 60px;\r\n}\r\n\r\n.sponsor img:hover {\r\n  filter: grayscale(0%) opacity(100%);\r\n  cursor: pointer;\r\n}\r\n\r\n.review {\r\n  margin: 20px 0 0;\r\n  background-color: #ebe5d7;\r\n  color: #242424;\r\n  text-align: center;\r\n  padding: 30px 0;\r\n}\r\n\r\n.review-title {\r\n  font-family: "Pacifico", "Roboto", sans-serif;\r\n  font-size: 24px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.review-container {\r\n  display: none;\r\n  flex-flow: column;\r\n  justify-content: center;\r\n  min-height: 150px;\r\n  width: 80%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.prev, .next {\r\n  cursor: pointer;\r\n  position: absolute;\r\n  top: 50%;\r\n  width: auto;\r\n  padding: 16px;\r\n  font-weight: bold;\r\n  font-size: 18px;\r\n  transition: 0.6s ease;\r\n  border-radius: 0 3px 3px 0;\r\n  user-select: none;\r\n}\r\n\r\n.next {\r\n  right: 0;\r\n  border-radius: 3px 0 0 3px;\r\n}\r\n\r\n.prev:hover, .next:hover {\r\n  background-color: rgba(0,0,0,0.8);\r\n  color: #fff;\r\n}\r\n\r\n.users-review {\r\n  display: flex;\r\n  flex-flow: column;\r\n  font-family: "Montserrat", "Roboto", sans-serif;\r\n  height: 100%;\r\n  justify-content: center;\r\n}\r\n\r\n.text-date {\r\n  text-align: left;\r\n  font-weight: bold;\r\n  font-size: 12px;\r\n}\r\n\r\n.text-review {\r\n  text-align: justify;\r\n  margin: 10px 0;\r\n  font-size: 13px;\r\n}\r\n\r\n.text-name {\r\n  text-align: right;\r\n  margin: 25px 0 0;\r\n  font-weight: bold;\r\n  font-size: 13px;\r\n}\r\n\r\n.fade {\r\n  -webkit-animation-name: fade;\r\n  -webkit-animation-duration: 1.5s;\r\n  animation-name: fade;\r\n  animation-duration: 1.5s;\r\n}\r\n\r\n@-webkit-keyframes fade {\r\n  from {opacity: .4}\r\n  to {opacity: 1}\r\n}\r\n\r\n@keyframes fade {\r\n  from {opacity: .4}\r\n  to {opacity: 1}\r\n}\r\n\r\n.write-your-review {\r\n  text-align: left;\r\n  margin: 0 auto;\r\n  width: 80%;\r\n  display: flex;\r\n  flex-flow: column;\r\n  font-family: "Roboto", sans-serif;\r\n}\r\n\r\n.write-your-review label {\r\n  font-weight: bold;\r\n}\r\n\r\n.write-your-review input, .write-your-review textarea {\r\n  margin: 10px 0 20px;\r\n  padding: 4px;\r\n}\r\n\r\n.write-your-review button {\r\n  width: max-content;  \r\n  align-self: flex-end;\r\n}',""]);n.exports=r},32:function(n,r,t){var e=t(3);r=e(false);r.push([n.i,"snack-bar {\r\n    visibility: hidden;\r\n}\r\n\r\n.snackbar {\r\n  visibility: hidden;\r\n  min-width: 150px;\r\n  background-color: #6f1a07;\r\n  color: #fff;\r\n  text-align: right;\r\n  border-radius: 2px;\r\n  padding-left: 16px;\r\n  position: fixed;\r\n  z-index: 999;\r\n  right: 10px;\r\n  bottom: 30px;\r\n}\r\n\r\n.snackbar.show {\r\n  visibility: visible;\r\n  -webkit-animation: fadein 0.5s;\r\n  animation: fadein 0.5s;\r\n}\r\n\r\n.btn-toast {\r\n    background-color: #6f1a07 !important;\r\n    box-shadow: none !important;\r\n    font-size: 20px !important;\r\n    border-radius: 2px !important;\r\n}\r\n\r\n.btn-toast span {\r\n    vertical-align: text-bottom;\r\n}\r\n\r\n@-webkit-keyframes fadein {\r\n  from {bottom: 0; opacity: 0;}\r\n  to {bottom: 30px; opacity: 1;}\r\n}\r\n\r\n@keyframes fadein {\r\n  from {bottom: 0; opacity: 0;}\r\n  to {bottom: 30px; opacity: 1;}\r\n}",""]);n.exports=r},33:function(n,r,t){var e=t(3);r=e(false);r.push([n.i,'footer {\r\n    position: relative;\r\n    z-index: 2;\r\n    padding: 20px 0 1px 0;\r\n    background-color: #242424;\r\n}\r\n\r\n.copyright {\r\n    display: block;\r\n    text-align: center;\r\n    color: #a0a0a0;\r\n    margin: 0 0 10px;\r\n    background-color: #242424;\r\n}\r\n\r\n.copyright span {\r\n    color: #e42222;\r\n    font-size: inherit;\r\n}\r\n\r\n.footer-wrapper {\r\n\twidth: 90%;\r\n\tmargin: 0 auto;\r\n\tdisplay: grid;\r\n\tgrid-template-columns: 1fr;\r\n\tmargin-bottom: 1em;\r\n}\r\n\r\n.footer-place, .footer-link {\r\n\tdisplay: flex;\r\n\tflex-flow: column;\r\n\talign-items: center;\r\n\ttext-align: center;\r\n}\r\n\r\n.footer-link img {\r\n\tfilter: brightness(0.9);\r\n\tdisplay: block;\r\n\tmargin: 0 auto;\r\n}\r\n\r\n.facebook svg:hover {\r\n\tfill: #314f8b;\r\n}\r\n\r\n.twitter svg:hover {\r\n\tfill: #00aced;\r\n}\r\n\r\n.instagram svg:hover {\r\n\tfill: #f10009;\r\n}\r\n\r\n.footer-text-head {\r\n\tfont-family: "Pacifico", "Roboto", sans-serif;\r\n\tfont-size: 24px;\r\n\tcolor: #cc5209;\r\n}\r\n\r\n.social-link {\r\n\tmargin: 0.5em 0;\r\n\tfont-size: 32px;\r\n}\r\n\r\n.social-link a {\r\n\tmargin: 0 10px; \r\n\tfill: #a0a0a0;\r\n}\r\n\r\n.place-title {\r\n\tfont-family: "Pacifico", "Roboto", sans-serif;\r\n\tcolor: #cecece;\r\n\tfont-size: 24px;\r\n\tpadding: 0 1.5em 5px;\r\n\tmargin-bottom: 5px;\r\n\tborder-bottom: 1px solid #cecece;\r\n}\r\n\r\n.footer-place table {\r\n\tmin-width: max-content;\r\n\tmargin: 0 auto;\r\n\tfont-size: 14px;\r\n\tfont-family: "Roboto", sans-serif;\r\n\tcolor: #cecece;\r\n\tborder-spacing: 0 1em;\r\n}\r\n\r\n.footer-place tbody {\r\n\tvertical-align: middle;\r\n}\r\n\r\n.footer-place .icon {\r\n\twidth: 30px;\r\n}\r\n\r\n.icon span {\r\n\tfont-size: 20px;\r\n}\r\n\r\n.footer-place .text {\r\n    width: 160px;\r\n}',""]);n.exports=r},34:function(n,r,t){var e=t(3);r=e(false);r.push([n.i,"@media screen and (max-width: 374px) {\r\n    .hero-title {\r\n\t\tfont-size: 3.5em;\r\n\t}\r\n\r\n\t.hero-tagline {\r\n\t\tfont-size: 15px;\r\n\t}\r\n\r\n\t.intro-title, .main-title {\r\n\t\tfont-size: 27px;\r\n\t}\r\n\r\n    .icon .mdi {\r\n        font-size: 17px;\r\n    }\r\n    \r\n    .footer-place table {\r\n        font-size: 12px;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 500px) {\r\n\t.header-menu {\r\n        display: none;\r\n    }\r\n\r\n    .r-text-title {\r\n        font-size: 28px;\r\n    }\r\n\r\n    .r-text-rating {\r\n        font-size: 13px;\r\n    }\r\n\r\n    .stars {\r\n        --star-size: 18px;\r\n    }\r\n\r\n    .review-container {\r\n    \twidth: 400px;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 540px) {\r\n\t.intro-text {\r\n\t\tfont-size: 15px;\r\n\t}\r\n\r\n\t.sponsor-title {\r\n    \tfont-size: 32px;\r\n    }\r\n\r\n\t.sponsor img {\r\n\t\tmax-width: 100px;\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: 599px) {\r\n    #menu {\r\n        position: absolute;\r\n        right: 0;\r\n        top: 0;\r\n        display: block;\r\n        text-align: center;\r\n        margin: 17px 20px 0 0;\r\n        font-size: 46px;\r\n        text-decoration: none;\r\n        color: #cecece;\r\n        width: 46px;\r\n        height: 66px;\r\n    }\r\n\r\n    .header .nav-link {\r\n        display: none;\r\n    }\r\n\r\n    .header {\r\n        position: inherit;\r\n        height: max-content;\r\n        background-color: #242424;\r\n    }\r\n\r\n    .header-wrapper {\r\n        width: 100%;\r\n        text-align: center;\r\n        padding: 1em 0;\r\n        margin: 0 auto;\r\n        display: inline-block;\r\n    }\r\n\r\n    .nav {\r\n        display: block;\r\n        width: 300px;\r\n        margin: 0 auto 0;\r\n        z-index: 10;\r\n        background-color: #242424;\r\n        position: fixed;\r\n        -webkit-transform: translate(-300px, 97px);\r\n        transform: translate(-300px, 97px);\r\n        transition: transform 0.3s ease;\r\n        padding: 0 1em;\r\n    }\r\n\r\n    .nav ul {\r\n        list-style-type: none;\r\n    }\r\n\r\n    .open {\r\n        -webkit-transform: translate(0, 97px);\r\n        transform: translate(0, 97px);\r\n    }\r\n\r\n    .nav-list {\r\n        width: 100%;\r\n        margin: 0 0 10px;\r\n    }\r\n\r\n    .nav-item {\r\n        display: list-item;\r\n        width: 100%;\r\n        text-align: left;\r\n        line-height: 24px;\r\n        border-bottom: 1px solid #E0E0E0; \r\n        box-sizing: border-box;\r\n        min-height: 0;\r\n    }\r\n\r\n    .nav-item a {\r\n        width: 100%;\r\n        padding: 0.7em;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 600px) {\r\n\t.write-your-review {\r\n\t\twidth: 500px;\r\n\t}\r\n}\r\n\r\n@media screen and (min-width: 650px) {\r\n    .errno404 {\r\n        font-size: 32px;\r\n    }\r\n\r\n    .post-item-content {\r\n        padding: 16px 32px 16px 32px;\r\n    }\r\n\r\n    .post-item-title {\r\n        font-size: 18px;\r\n    }\r\n\r\n    .post-item-description {\r\n        font-size: 14px;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 700px) {\r\n\t.intro-text {\r\n\t\tfont-size: 15px;\r\n\t}\r\n\r\n    .posts {\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr;\r\n        grid-column-gap: 40px;\r\n        grid-row-gap: 35px;\r\n    }\r\n\r\n    .errno404 {\r\n        font-size: 40px;\r\n    }\r\n\r\n    .r-text-title {\r\n        font-size: 32px;\r\n    }\r\n\r\n    .r-text-title span {\r\n        font-size: 15px;\r\n    }\r\n\r\n    .category-menu {\r\n        font-size: 14px;\r\n    }\r\n\r\n    .r-text-rating {\r\n        font-size: 16px;\r\n    }\r\n\r\n    .stars {\r\n        --star-size: 22px;\r\n    }\r\n\r\n    .restaurant-menu h4 {\r\n        font-size: 18px;\r\n    }\r\n\r\n    .menus-list {\r\n        font-size: 15px;\r\n    }\r\n\r\n    .sponsor img {\r\n      max-height: 60px;\r\n    }\r\n\r\n\t.sponsor-wrapper {\r\n\t\tgrid-template-columns: repeat(4, 1fr);\r\n\t\tgrid-row-gap: 10px;\r\n\t\tgrid-column-gap: 10px;\r\n\t\twidth: 80%;\r\n\t}\r\n\r\n    .footer-wrapper {\r\n        width: 90%;\r\n        grid-template-columns: 1fr 1fr;\r\n        grid-column-gap: 50px;\r\n        grid-row-gap: 35px;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 800px) {\r\n\t.nav-list {\r\n        max-width: 800px;\r\n        margin: 0 auto;\r\n    }\r\n\r\n    .intro-wrapper {\r\n\t\tpadding: 1em 0;\r\n\t}\r\n\r\n    .restaurant-info {\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr;\r\n        grid-gap: 20px;\r\n    }\r\n\r\n    .r-text-title {\r\n        font-size: 28px;\r\n    }\r\n\r\n    .r-text-rating {\r\n        font-size: 14px;\r\n    }\r\n\r\n    .stars {\r\n        --star-size: 20px;\r\n    }\r\n\r\n    .restaurant-menu {\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr;\r\n    }\r\n\r\n    .menu-food {\r\n        border-right: 1px solid #242424;\r\n    }\r\n\r\n    .menu-drink {\r\n        border-left: 1px solid #242424;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 900px) {\r\n    .posts {\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr 1fr;\r\n    }\r\n\r\n    .r-text-title {\r\n        font-size: 32px;\r\n    }\r\n\r\n    .r-text-rating {\r\n        font-size: 16px;\r\n    }\r\n\r\n    .stars {\r\n        --star-size: 22px;\r\n    }\r\n\r\n    .sponsor {\r\n    \tbackground-color: #ebe5d7;\r\n    \tdisplay: flex;\r\n\t    flex-flow: column;\r\n    \ttext-align: center;\r\n    \talign-items: center;\r\n    \tmin-height: 150px;\r\n    \tpadding: 1em 0 0;\r\n    }\r\n\r\n    .sponsor-wrapper {\r\n    \tgrid-row-gap: 50px;\r\n    \tgrid-column-gap: 35px;\r\n    \tmargin: 20px auto;\r\n    }\r\n\r\n    .sponsor img {\r\n    \tmax-height: 100px;\r\n    }\r\n}\r\n\r\n\r\n@media screen and (min-width: 1200px) {\r\n    #maincontent {\r\n        max-width: 1200px;\r\n    }\r\n\r\n    .errno404 {\r\n        font-size: 44px;\r\n        margin: 80px auto;\r\n    }\r\n}",""]);n.exports=r}});
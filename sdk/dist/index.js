function t(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var e=/*#__PURE__*/t(require("isomorphic-unfetch"));function r(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,o(t,e)}function o(t,e){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},o(t,e)}var n,i=/*#__PURE__*/function(){function t(t){this.apiKey=void 0,this.baseUrl=void 0,this.apiKey=t.apiKey,this.baseUrl=t.baseUrl||"https://jsonplaceholder.typicode.com"}return t.prototype.request=function(t,r){try{var o=""+this.baseUrl+t,n=Object.assign({},r,{headers:{"Content-Type":"application/json","api-key":this.apiKey}});return Promise.resolve(e.default(o,n)).then(function(t){var e;function r(r){if(e)return r;throw new Error(t.statusText)}var o=function(){if(t.ok)return Promise.resolve(t.json()).then(function(t){return e=1,t})}();return o&&o.then?o.then(r):r(o)})}catch(t){return Promise.reject(t)}},t}(),s="posts",c=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}r(e,t);var o=e.prototype;return o.getPostById=function(t){try{return Promise.resolve(this.request("/posts/"+t))}catch(t){return Promise.reject(t)}},o.getPosts=function(){try{return Promise.resolve(this.request("/"+s))}catch(t){return Promise.reject(t)}},o.createPost=function(t){try{return Promise.resolve(this.request("/"+s,{method:"POST",body:JSON.stringify(t)}))}catch(t){return Promise.reject(t)}},e}(i),u=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}return r(e,t),e}(i);n=u,[c].forEach(function(t){Object.getOwnPropertyNames(t.prototype).forEach(function(e){Object.defineProperty(n.prototype,e,Object.getOwnPropertyDescriptor(t.prototype,e))})}),module.exports=u;

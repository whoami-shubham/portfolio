if(!self.define){let e,s={};const o=(o,a)=>(o=new URL(o+".js",a).href,s[o]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=s,document.head.appendChild(e)}else e=o,importScripts(o),s()})).then((()=>{let e=s[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(a,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let n={};const r=e=>o(e,t),c={module:{uri:t},exports:n,require:r};s[t]=Promise.all(a.map((e=>c[e]||r(e)))).then((e=>(i(...e),n)))}}define(["./workbox-6316bd60"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/portfolio/_next/static/a_wcbWFyc0kkrEtuWNI_N/_buildManifest.js",revision:"abd42eb192b673b6c5354b8872325a82"},{url:"/portfolio/_next/static/a_wcbWFyc0kkrEtuWNI_N/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/portfolio/_next/static/chunks/303-19e2c428aeda731ed1b5.js",revision:"19e2c428aeda731ed1b5"},{url:"/portfolio/_next/static/chunks/framework-895f067827ebe11ffe45.js",revision:"895f067827ebe11ffe45"},{url:"/portfolio/_next/static/chunks/main-3e23bcee2484ada3544e.js",revision:"3e23bcee2484ada3544e"},{url:"/portfolio/_next/static/chunks/pages/_app-78977ac9c14dd749d27b.js",revision:"78977ac9c14dd749d27b"},{url:"/portfolio/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"737a04e9a0da63c9d162"},{url:"/portfolio/_next/static/chunks/pages/index-d1871c7bc7791d5cedf7.js",revision:"d1871c7bc7791d5cedf7"},{url:"/portfolio/_next/static/chunks/pages/resume-02a58b2cc6e201522e48.js",revision:"02a58b2cc6e201522e48"},{url:"/portfolio/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js",revision:"a54b4f32bdc1ef890ddd"},{url:"/portfolio/_next/static/chunks/webpack-047d53ce594008bddb2b.js",revision:"047d53ce594008bddb2b"},{url:"/portfolio/_next/static/css/1c614bd645e00eeaa55a.css",revision:"1c614bd645e00eeaa55a"},{url:"/portfolio/_next/static/css/7877e9a07f24422c46eb.css",revision:"7877e9a07f24422c46eb"},{url:"/portfolio/_next/static/css/a35b15e0d108e49542d5.css",revision:"a35b15e0d108e49542d5"},{url:"/portfolio/android-chrome-192x192.png",revision:"854bd25c5ad9d43e9ac9f6274932d6ab"},{url:"/portfolio/android-chrome-512x512.png",revision:"4aad6d2530fd5ec5802209430d31e213"},{url:"/portfolio/assets/Inter-Bold.ttf",revision:"91e5aee8f44952c0c14475c910c89bb8"},{url:"/portfolio/assets/algo.jpg",revision:"ce42d184a34db1519bb5b41e6c8d67d2"},{url:"/portfolio/assets/banner.jpg",revision:"f31674804f82b64a996402e08afeca76"},{url:"/portfolio/assets/banner2.jpg",revision:"d4d36b7f0b7895c4ed1795077579a77a"},{url:"/portfolio/assets/codechef.png",revision:"2363f9ba89fc0df668e1aa2123cec4da"},{url:"/portfolio/assets/data.png",revision:"e787683ebd072910bb6aef3c792781eb"},{url:"/portfolio/assets/gmail.ico",revision:"2db0d88cea7a3cef82deba04d4c9f354"},{url:"/portfolio/assets/google-font.woff2",revision:"923a543cc619ea568f91b723d9fb1ef0"},{url:"/portfolio/assets/hackerearth.jpg",revision:"99b694ff06072c024cecc6b06dde1171"},{url:"/portfolio/assets/hackerearth.png",revision:"73f760909d47cc216757bc2f2ef3eae9"},{url:"/portfolio/assets/hackerrank.png",revision:"d11ab72a5f6fc1a7ebe32030fa09db4e"},{url:"/portfolio/assets/interviewbit.png",revision:"24c58f3627f4a0eb83ed0a109058902f"},{url:"/portfolio/assets/leetcode.png",revision:"72917c2234a9c41baf796c0b1fcbc200"},{url:"/portfolio/assets/logo.svg",revision:"5d5d9eefa31e5e13a6610d9fa7a283bb"},{url:"/portfolio/assets/pdcp.jpg",revision:"0a8c803b0a487f9e771cc4f27c6e52a4"},{url:"/portfolio/assets/profile.jpg",revision:"23326d6b09f853ebea8e87a67a01aeb0"},{url:"/portfolio/assets/profile2.jpg",revision:"953507ed0751e14e4236b51d69c7152e"},{url:"/portfolio/assets/quora.png",revision:"88ad5d331c7790a41179064c9a9f625e"},{url:"/portfolio/assets/shubham_jha_resume.pdf",revision:"72dec4b05ef1e608228ec56e42373efd"},{url:"/portfolio/assets/uit.jpg",revision:"68fe098a083fd6f286f8423a72ca189a"},{url:"/portfolio/favicon-16x16.png",revision:"03d899a7be80f0893e5439780084ef98"},{url:"/portfolio/favicon-32x32.png",revision:"fde425b9586ae35dc9dee2f3b843a854"},{url:"/portfolio/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/portfolio/index.html",revision:"513327becd743beeeab17892e4be6dd8"},{url:"/portfolio/manifest.json",revision:"77ab9373084ae8f5fc16b80d8c095c2d"},{url:"/portfolio/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/portfolio",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:o,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));

import{_ as p,c as r,j as i,a as o,G as e,af as a,B as t,o as h}from"./chunks/framework.JWorlyEv.js";const k="/vike-tsed.png",F=JSON.parse('{"title":"Vike","description":"Use Vike with Ts.ED. A SSR plugin to render page using Vite and your favorite front-end framework (React.js, Vue.js, etc...).","frontmatter":{"head":[["meta",{"name":"description","content":"Use Vike with Ts.ED. A SSR plugin to render page using Vite and your favorite front-end framework (React.js, Vue.js, etc...)."}],["meta",{"name":"keywords","content":"ts.ed express typescript vite ssr plugin node.js javascript decorators react vue svelte solid"}],["link",{"rel":"canonical","href":"https://tsed.dev/tutorials/vike.html"}]],"projects":[{"title":"Vike react example","href":"https://github.com/tsedio/tsed-vite-react-movies-demo.git","src":"/vike.svg"},{"title":"Vite react example","href":"https://github.com/tsedio/tsed-vite-plugin-ssr-example","src":"https://vite-plugin-ssr.com/assets/static/vite-plugin-ssr.5177312a.svg"}]},"headers":[],"relativePath":"tutorials/vike.md","filePath":"tutorials/vike.md","lastUpdated":1741161572000}'),d={name:"tutorials/vike.md"};function c(g,s,u,E,y,m){const n=t("Banner"),l=t("Projects");return h(),r("div",null,[s[0]||(s[0]=i("h1",{id:"vike",tabindex:"-1"},[o("Vike "),i("a",{class:"header-anchor",href:"#vike","aria-label":'Permalink to "Vike"'},"​")],-1)),e(n,{src:"/vike.svg",href:"https://vite-plugin-ssr.com/",height:"200"}),s[1]||(s[1]=a('<blockquote><p>Like Next.js/Nuxt but as a do-one-thing-do-it-well Vite plugin.</p></blockquote><p>Use <strong>any UI framework</strong> (React, Vue, Svelte, Solid, ...) and <strong>any tool</strong> you want (any frontend library, web technology, deploy environment, Vite plugin, ...).</p><p>With <code>vike</code>, you integrate tools manually and keep <code>architectural control</code>.</p><div class="tip custom-block"><p class="custom-block-title">Note</p><p>Vike replaces the <code>vite-plugin-ssr</code> package. Ts.ED provides <code>@tsed/vite-ssr-plugin</code> and <code>@tsed/vike</code> packages. All new features will only be included in the <code>@tsed/vike</code> package.</p><p>To migrate <code>@tsed/vite-ssr-plugin</code>, simply replace <code>@tsed/vite-ssr-plugin</code> by <code>@tsed/vike</code> in your code and install <code>vike</code> dependency instead of <code>vite-plugin-ssr</code>.</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>You can also read this article over Ts.ED + Vite-plugin-ssr on Medium: <a href="https://romainlenzotti.medium.com/use-vite-and-ts-ed-to-build-your-website-84fb4c0d8079" target="_blank" rel="noreferrer">https://romainlenzotti.medium.com/use-vite-and-ts-ed-to-build-your-website-84fb4c0d8079</a></p></div><h2 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-label="Permalink to &quot;Features&quot;">​</a></h2><ul><li>Use <code>@Vite</code> decorator to generate a page using <code>vite</code></li><li>Render a page using any UI framework (React, Vue, Svelte, Solid, ...)</li></ul><h2 id="quick-start" tabindex="-1">Quick start <a class="header-anchor" href="#quick-start" aria-label="Permalink to &quot;Quick start&quot;">​</a></h2>',8)),e(l,{type:"projects"}),s[2]||(s[2]=a(`<h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vike</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @tsed/vike</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vite@4</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --save</span></span></code></pre></div><p>Then edit your <code>Server.ts</code>:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {join} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;node:path&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {Configuration, Inject} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@tsed/di&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {PlatformApplication} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@tsed/common&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@tsed/platform-express&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// /!\\ keep this import</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@tsed/vike&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// add this</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@tsed/ajv&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@tsed/swagger&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {config} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./config&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> rest </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./controllers/rest&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pages </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./controllers/pages&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Configuration</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  vite: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    root: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;../path/to/app/project&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span></code></pre></div><p>We recommend you to start your project with the <a href="https://github.com/tsedio/tsed-vike-example" target="_blank" rel="noreferrer">starter project</a>.</p><p>The starter project is a monorepo (Nx) with 2 projects:</p><ul><li><code>packages/server</code>: the backend project <ul><li><code>packages/server/controllers/pages</code>: the controllers pages directory</li><li><code>packages/server/controllers/rest</code>: the controllers REST directory</li></ul></li><li><code>packages/app</code>: the frontend project <ul><li><code>packages/app/pages</code>: the pages directory</li><li><code>packages/app/renderer</code>: the app shell directory (header, footer, layout, etc...)</li></ul></li></ul><figure><img src="`+k+`" style="max-height:300px;background:white;" alt="Vike Ts.ED result"></figure><ul><li><code>packages/server/controllers/pages</code>: the controllers pages directory</li><li><code>packages/server/controllers/rest</code>: the controllers REST directory</li><li><code>packages/app/pages</code>: the pages directory</li><li><code>packages/app/renderer</code>: the app shell directory (header, footer, layout, etc...)</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>## Author</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;GithubContributors :users=&quot;[&#39;Romakita&#39;]&quot;/&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## Maintainers &lt;Badge text=&quot;Help wanted&quot; /&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;GithubContributors :users=&quot;[&#39;Romakita&#39;]&quot;/&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;div class=&quot;flex items-center justify-center p-5&quot;&gt;</span></span>
<span class="line"><span>&lt;Button href=&quot;/contributing.html&quot; class=&quot;rounded-medium&quot;&gt;</span></span>
<span class="line"><span> Become maintainer</span></span>
<span class="line"><span>&lt;/Button&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div>`,10))])}const f=p(d,[["render",c]]);export{F as __pageData,f as default};

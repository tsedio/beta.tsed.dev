import{_ as i}from"./chunks/theme.B8acxcRc.js";import{c as a,j as e,G as t,af as n,o as r}from"./chunks/framework.JWorlyEv.js";const l={class:"flex space-x-3"},c=JSON.parse('{"title":"","description":"","frontmatter":{"meta":[{"name":"keywords","description":"api typescript node.js documentation ResponseFilterMethods interface"}],"head":[["link",{"rel":"canonical","href":"https://tsed.dev/api/platform/platform-response-filter/types/interfaces/interface-response-filter-methods.html"}]]},"headers":[],"relativePath":"api/platform/platform-response-filter/types/interfaces/interface-response-filter-methods.md","filePath":"api/platform/platform-response-filter/types/interfaces/interface-response-filter-methods.md","lastUpdated":null}'),p={name:"api/platform/platform-response-filter/types/interfaces/interface-response-filter-methods.md"},f=Object.assign(p,{setup(h){return(o,s)=>(r(),a("div",null,[e("div",l,[t(i,{type:"interface",class:"mt-3"}),s[0]||(s[0]=e("div",null,[e("h1",null,"ResponseFilterMethods"),e("div",{class:"module-name"},"@tsed/platform-response-filter")],-1))]),s[1]||(s[1]=n(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { ResponseFilterMethods } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@tsed/platform-response-filter&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><blockquote><p>See <a href="https://github.com/tsedio/tsed/blob/v8.6.0-beta.1/packages/platform/platform-response-filter/src/types/interfaces/ResponseFilterMethods.ts#L0-L0" target="_blank" rel="noreferrer">/packages/platform/platform-response-filter/src/types/interfaces/ResponseFilterMethods.ts</a>.</p></blockquote><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ResponseFilterMethods</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> unknown</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    transform</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">data</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">ctx</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> BaseContext</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="description" tabindex="-1">Description <a class="header-anchor" href="#description" aria-label="Permalink to &quot;Description&quot;">​</a></h2><p>A list of response filters must be called before returning a response to the consumer. See more on <a href="/docs/response-filter.html">Response filters</a>.</p><h2 id="transform" tabindex="-1">transform <a class="header-anchor" href="#transform" aria-label="Permalink to &quot;transform&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">transform</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, ctx: BaseContext): any;</span></span></code></pre></div>`,9))]))}});export{c as __pageData,f as default};

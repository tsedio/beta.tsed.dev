import{_ as i}from"./chunks/theme.B8acxcRc.js";import{c as e,j as a,G as t,af as n,o as p}from"./chunks/framework.JWorlyEv.js";const l={class:"flex space-x-3"},k=JSON.parse('{"title":"","description":"","frontmatter":{"meta":[{"name":"keywords","description":"api typescript node.js documentation JsonMapperGlobalOptions interface"}],"head":[["link",{"rel":"canonical","href":"https://tsed.dev/api/specs/json-mapper/types/domain/interface-json-mapper-global-options.html"}]]},"headers":[],"relativePath":"api/specs/json-mapper/types/domain/interface-json-mapper-global-options.md","filePath":"api/specs/json-mapper/types/domain/interface-json-mapper-global-options.md","lastUpdated":null}'),o={name:"api/specs/json-mapper/types/domain/interface-json-mapper-global-options.md"},u=Object.assign(o,{setup(r){return(h,s)=>(p(),e("div",null,[a("div",l,[t(i,{type:"interface",class:"mt-3"}),s[0]||(s[0]=a("div",null,[a("h1",null,"JsonMapperGlobalOptions"),a("div",{class:"module-name"},"@tsed/json-mapper")],-1))]),s[1]||(s[1]=n(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { JsonMapperGlobalOptions } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@tsed/json-mapper&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><blockquote><p>See <a href="https://github.com/tsedio/tsed/blob/v8.6.0-beta.1/packages/specs/json-mapper/src/types/domain/JsonMapperGlobalOptions.ts#L0-L0" target="_blank" rel="noreferrer">/packages/specs/json-mapper/src/types/domain/JsonMapperGlobalOptions.ts</a>.</p></blockquote><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> JsonMapperGlobalOptions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    additionalProperties</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    disableUnsecureConstructor</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    strictGroups</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="additionalproperties" tabindex="-1">additionalProperties <a class="header-anchor" href="#additionalproperties" aria-label="Permalink to &quot;additionalProperties&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">additionalProperties</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> boolean;</span></span></code></pre></div><p>JsonMapper additional property policy. (see <a href="/docs/json-mapper.html">JsonMapper</a>)</p><h2 id="disableunsecureconstructor" tabindex="-1">disableUnsecureConstructor <a class="header-anchor" href="#disableunsecureconstructor" aria-label="Permalink to &quot;disableUnsecureConstructor&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">disableUnsecureConstructor</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> boolean;</span></span></code></pre></div><p>Disable the unsecure constructor injection when the deserialize function is used (by default: false)</p><h2 id="strictgroups" tabindex="-1">strictGroups <a class="header-anchor" href="#strictgroups" aria-label="Permalink to &quot;strictGroups&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">strictGroups</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> boolean;</span></span></code></pre></div><p>Enable strict Groups configuration when the <code>options.groups</code> is undefined. (by default: false)</p>`,14))]))}});export{k as __pageData,u as default};

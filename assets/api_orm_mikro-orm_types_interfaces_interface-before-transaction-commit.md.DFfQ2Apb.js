import{_ as a}from"./chunks/theme.B8acxcRc.js";import{c as t,j as i,G as e,af as n,o as r}from"./chunks/framework.JWorlyEv.js";const o={class:"flex space-x-3"},d=JSON.parse('{"title":"","description":"","frontmatter":{"meta":[{"name":"keywords","description":"api typescript node.js documentation BeforeTransactionCommit interface"}],"head":[["link",{"rel":"canonical","href":"https://tsed.dev/api/orm/mikro-orm/types/interfaces/interface-before-transaction-commit.html"}]]},"headers":[],"relativePath":"api/orm/mikro-orm/types/interfaces/interface-before-transaction-commit.md","filePath":"api/orm/mikro-orm/types/interfaces/interface-before-transaction-commit.md","lastUpdated":null}'),l={name:"api/orm/mikro-orm/types/interfaces/interface-before-transaction-commit.md"},m=Object.assign(l,{setup(h){return(p,s)=>(r(),t("div",null,[i("div",o,[e(a,{type:"interface",class:"mt-3"}),s[0]||(s[0]=i("div",null,[i("h1",null,"BeforeTransactionCommit"),i("div",{class:"module-name"},"@tsed/mikro-orm")],-1))]),s[1]||(s[1]=n(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { BeforeTransactionCommit } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@tsed/mikro-orm&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><blockquote><p>See <a href="https://github.com/tsedio/tsed/blob/v8.6.0-beta.1/packages/orm/mikro-orm/src/types/interfaces/BeforeTransactionCommit.ts#L0-L0" target="_blank" rel="noreferrer">/packages/orm/mikro-orm/src/types/interfaces/BeforeTransactionCommit.ts</a>.</p></blockquote><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> BeforeTransactionCommit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    $beforeTransactionCommit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">em</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> EntityManager</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">unknown</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> unknown</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="beforetransactioncommit" tabindex="-1">$beforeTransactionCommit <a class="header-anchor" href="#beforetransactioncommit" aria-label="Permalink to &quot;$beforeTransactionCommit&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$beforeTransactionCommit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(em: EntityManager): </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Promise</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">unknown</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> unknown;</span></span></code></pre></div>`,7))]))}});export{d as __pageData,m as default};

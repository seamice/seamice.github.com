import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e}from"./app-d09f4be3.js";const t={},o=e(`<h2 id="basic-authorization" tabindex="-1"><a class="header-anchor" href="#basic-authorization" aria-hidden="true">#</a> Basic Authorization</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> base64 <span class="token keyword">import</span> b64encode

<span class="token comment"># Authorization token is using base 64 to encode</span>
<span class="token keyword">def</span> <span class="token function">basic_auth</span><span class="token punctuation">(</span>username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">:</span>
    token <span class="token operator">=</span> b64encode<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>username<span class="token punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token punctuation">{</span>password<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&quot;ascii&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token string-interpolation"><span class="token string">f&#39;Basic </span><span class="token interpolation"><span class="token punctuation">{</span>token<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bearer-authorization-bearer" tabindex="-1"><a class="header-anchor" href="#bearer-authorization-bearer" aria-hidden="true">#</a> Bearer authorization bearer</h2><p>Bearer Authorization is an HTTP authentication scheme commonly used with <span style="color:orange;">OAuth 2.0</span>. In this approach, the client includes an access token in the &quot;Authorization&quot; header using the &quot;Bearer&quot; scheme, granting permission to access protected resources. <span style="color:orange;">The server validates the token for authorization</span>. It&#39;s a widely used method for securing API access, especially in scenarios involving third-party applications.</p><p>A Bearer token is a type of token used for authentication and authorization and is used in web applications and APIs to hold user credentials and indicate authorization for requests and access.</p><p>Generating Bearer tokens based on protocols and specifications such as OAuth and JWT (JSON Web Token). The authenticated user obtains the Bearer token issued by the server and sends it to the server in the header of the request. The server verifies the received bearer token and controls user access based on the token. The Bearer token is also usually sent over an encrypted connection via HTTPS. This prevents unauthorized access by malicious third parties even if the token is stolen.</p>`,6),i=[o];function r(c,p){return s(),a("div",null,i)}const d=n(t,[["render",r],["__file","http.html.vue"]]);export{d as default};

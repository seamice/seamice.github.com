import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as c,c as n,b as e,d as r,e as i,f as t}from"./app-a2a95d8b.js";const s="/data/unisa/AdvancedAnalytic1/PracticalArchGArch/ARCH.png",l={},h=t('<p>We have know what is the AR, ARMA model. There are relationships between <code>ARCH</code> and <code>AR</code>, <code>GARCH</code> and <code>ARMA</code>. If we know the relationshps among them, it will be very helpful for understanding what we do in this practice.</p><p>The <code>ARCH</code> model is appropriate when the <span style="color:orange;font-weight:bold;">error variance</span> in a time series <span style="color:orange;font-weight:bold;">follows an autoregressive (AR) model</span>; if an <span style="color:orange;font-weight:bold;">autoregressive moving average (ARMA) model is assumed for the error variance</span>, the model is a <span style="color:orange;font-weight:bold;">generalized autoregressive conditional heteroskedasticity (<code>GARCH</code>) model</span>.</p><h2 id="arch-mdoel" tabindex="-1"><a class="header-anchor" href="#arch-mdoel" aria-hidden="true">#</a> ARCH mdoel</h2><p><img src="'+s+`" alt="ARCH model snapshot" loading="lazy"><br> The description for each column is like below.</p><p><code>D</code> column is the original data.<br><code>E</code> column is the difference between original data and it&#39;s mean.<br><code>F</code> column is the square of column <code>E</code>.<br><code>G</code> column is the forcast of AR(4) model of <code>F</code>.<br><code>H</code> column is the square root of <code>G</code>.<br><code>I</code> column is the lower bound based <code>H</code> and bounds coefficient that defined by <code>N27</code>.<br><code>J</code> column is the upper bound based <code>H</code> and bounds coefficient that defined by <code>N27</code>.<br><code>K</code> column represents whether original data locats between the bounds defined by <code>I</code> and <code>J</code>.</p><p><code>N27</code> is the coefficient of bounds.<br><code>N28</code> is the coverage rate calculated based on <code>K</code> column.</p><p>Based on the desciption of each column above, we could get the fomula for each below.</p><div class="language-excel line-numbers-mode" data-ext="excel"><pre class="language-excel"><code>E2 = D2-N$12
F2 = E2^2
G6 = $N$7 + $N$3*F5 + $N$4*F4 + $N$5*F3 + $N$6*F2
H6 = SQRT(G6)
I6 = $N$12-$N$27*H6
J6 = $N$12+$N$27*H6
K6 = IF(AND(D6&gt;I6,D6&lt;J6),1,0)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="garch-mdoel" tabindex="-1"><a class="header-anchor" href="#garch-mdoel" aria-hidden="true">#</a> GARCH mdoel</h2><h2 id="download-dataset" tabindex="-1"><a class="header-anchor" href="#download-dataset" aria-hidden="true">#</a> <a href="/data/unisa/AdvancedAnalytic1/PracticalArchGArch/Arch_Garch_examples.xlsx">Download Dataset</a></h2><h2 id="references" tabindex="-1"><a class="header-anchor" href="#references" aria-hidden="true">#</a> References</h2>`,11),m={href:"https://en.wikipedia.org/wiki/Autoregressive_conditional_heteroskedasticity#:~:text=The%20ARCH%20model%20is%20appropriate,conditional%20heteroskedasticity%20(GARCH)%20model.",target:"_blank",rel:"noopener noreferrer"};function u(p,f){const o=d("ExternalLinkIcon");return c(),n("div",null,[h,e("p",null,[e("a",m,[r("01. Autoregressive conditional heteroskedasticity"),i(o)])])])}const A=a(l,[["render",u],["__file","Arch_GArchPractical.html.vue"]]);export{A as default};

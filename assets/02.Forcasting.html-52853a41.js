import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c as n,f as e,b as a,d as s}from"./app-e2191e71.js";const r="/data/unisa/AdvancedAnalytic1/image.png",m={},i=e('<h2 id="_1-principles-of-statistical-forecasting" tabindex="-1"><a class="header-anchor" href="#_1-principles-of-statistical-forecasting" aria-hidden="true">#</a> 1 Principles of statistical forecasting</h2><ul><li>The main item refers not only to forecasting but any type of statistical modelling.</li><li>It is that one builds the model one part (usually the majority) of the data, and then tests the results on the remainder.</li><li>These sets are termed the Training and Testing sets.</li><li>In standard statistical modelling, often the sets are sampled from the data at random.</li><li>In time series forecasting, this is not possible, as the model building set has to have consecutive data, as does the testing set.</li><li>This is further complicated with data that includes seasonality, as at least the training set has to contain multiples of the fundamental period.</li><li>For instance, for hourly solar radiation, the training set would comprise a number of years. We also have to cater for leap years in some way. The easiest way is to delete Feb 29.</li></ul><h2 id="_2-example-lake-huron" tabindex="-1"><a class="header-anchor" href="#_2-example-lake-huron" aria-hidden="true">#</a> 2 Example - Lake Huron</h2>',3),c=a("ul",null,[a("li",null,"In keeping with the idea of training and testing sets, I took the first 75 years as the training set, reserving 22 years for testing."),a("li",null,"I fitted a line through those 75 data points."),a("li",null,[s("I then took the residuals of that fit, and developed an "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"A"),a("mi",null,"R"),a("mo",{stretchy:"false"},"("),a("mn",null,"2"),a("mo",{stretchy:"false"},")")]),a("annotation",{encoding:"application/x-tex"},"AR(2)")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord mathnormal"},"A"),a("span",{class:"mord mathnormal",style:{"margin-right":"0.00773em"}},"R"),a("span",{class:"mopen"},"("),a("span",{class:"mord"},"2"),a("span",{class:"mclose"},")")])])]),s(" model for them.")]),a("li",null,[s("Let "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"L"),a("mo",{stretchy:"false"},"("),a("mi",null,"t"),a("mo",{stretchy:"false"},")")]),a("annotation",{encoding:"application/x-tex"},"L(t)")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord mathnormal"},"L"),a("span",{class:"mopen"},"("),a("span",{class:"mord mathnormal"},"t"),a("span",{class:"mclose"},")")])])]),s(" be the level of the lake, and "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"f"),a("mo",{stretchy:"false"},"("),a("mi",null,"t"),a("mo",{stretchy:"false"},")")]),a("annotation",{encoding:"application/x-tex"},"f(t)")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),a("span",{class:"mopen"},"("),a("span",{class:"mord mathnormal"},"t"),a("span",{class:"mclose"},")")])])]),s(" be the linear fit.")]),a("li",null,[s("Then "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"r"),a("mo",{stretchy:"false"},"("),a("mi",null,"t"),a("mo",{stretchy:"false"},")"),a("mo",null,"="),a("mi",null,"L"),a("mo",{stretchy:"false"},"("),a("mi",null,"t"),a("mo",{stretchy:"false"},")"),a("mo",null,"−"),a("mi",null,"f"),a("mo",{stretchy:"false"},"("),a("mi",null,"t"),a("mo",{stretchy:"false"},")")]),a("annotation",{encoding:"application/x-tex"},"r(t) = L(t) − f(t)")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r"),a("span",{class:"mopen"},"("),a("span",{class:"mord mathnormal"},"t"),a("span",{class:"mclose"},")"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),a("span",{class:"mrel"},"="),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord mathnormal"},"L"),a("span",{class:"mopen"},"("),a("span",{class:"mord mathnormal"},"t"),a("span",{class:"mclose"},")"),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),a("span",{class:"mbin"},"−"),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),a("span",{class:"mopen"},"("),a("span",{class:"mord mathnormal"},"t"),a("span",{class:"mclose"},")")])])]),s(" will be the residuals."),a("br"),s(" The models are")])],-1),o=a("div",{style:{"text-align":"center"}},[a("p",null,[a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"f"),a("mo",{stretchy:"false"},"("),a("mi",null,"t"),a("mo",{stretchy:"false"},")"),a("mo",null,"="),a("mn",null,"10.64"),a("mo",null,"−"),a("mn",null,"0.041"),a("mi",null,"t")]),a("annotation",{encoding:"application/x-tex"},"f(t) = 10.64 − 0.041t")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),a("span",{class:"mopen"},"("),a("span",{class:"mord mathnormal"},"t"),a("span",{class:"mclose"},")"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),a("span",{class:"mrel"},"="),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),a("span",{class:"mord"},"10.64"),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),a("span",{class:"mbin"},"−"),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6444em"}}),a("span",{class:"mord"},"0.041"),a("span",{class:"mord mathnormal"},"t")])])]),a("br"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"r"),a("mo",{stretchy:"false"},"("),a("mi",null,"t"),a("mo",{stretchy:"false"},")"),a("mo",null,"="),a("mn",null,"0.962"),a("mi",null,"r"),a("mo",{stretchy:"false"},"("),a("mi",null,"t"),a("mo",null,"−"),a("mn",null,"1"),a("mo",{stretchy:"false"},")"),a("mo",null,"−"),a("mn",null,"0.318"),a("mi",null,"r"),a("mo",{stretchy:"false"},"("),a("mi",null,"t"),a("mo",null,"−"),a("mn",null,"2"),a("mo",{stretchy:"false"},")")]),a("annotation",{encoding:"application/x-tex"},"r(t) = 0.962r(t − 1) − 0.318r(t − 2)")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r"),a("span",{class:"mopen"},"("),a("span",{class:"mord mathnormal"},"t"),a("span",{class:"mclose"},")"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),a("span",{class:"mrel"},"="),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord"},"0.962"),a("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r"),a("span",{class:"mopen"},"("),a("span",{class:"mord mathnormal"},"t"),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),a("span",{class:"mbin"},"−"),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord"},"1"),a("span",{class:"mclose"},")"),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),a("span",{class:"mbin"},"−"),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord"},"0.318"),a("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r"),a("span",{class:"mopen"},"("),a("span",{class:"mord mathnormal"},"t"),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),a("span",{class:"mbin"},"−"),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord"},"2"),a("span",{class:"mclose"},")")])])]),a("br"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"L"),a("mo",{stretchy:"false"},"("),a("mi",null,"t"),a("mo",{stretchy:"false"},")"),a("mo",null,"="),a("mn",null,"10.64"),a("mo",null,"−"),a("mn",null,"0.41"),a("mi",null,"t"),a("mo",null,"+"),a("mn",null,"0.962"),a("mi",null,"r"),a("mo",{stretchy:"false"},"("),a("mi",null,"t"),a("mo",null,"−"),a("mn",null,"1"),a("mo",{stretchy:"false"},")"),a("mo",null,"−"),a("mn",null,"0.318"),a("mi",null,"r"),a("mo",{stretchy:"false"},"("),a("mi",null,"t"),a("mo",null,"−"),a("mn",null,"2"),a("mo",{stretchy:"false"},")")]),a("annotation",{encoding:"application/x-tex"},"L(t) = 10.64 − 0.41t + 0.962r(t − 1) − 0.318r(t − 2)")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord mathnormal"},"L"),a("span",{class:"mopen"},"("),a("span",{class:"mord mathnormal"},"t"),a("span",{class:"mclose"},")"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),a("span",{class:"mrel"},"="),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),a("span",{class:"mord"},"10.64"),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),a("span",{class:"mbin"},"−"),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),a("span",{class:"mord"},"0.41"),a("span",{class:"mord mathnormal"},"t"),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),a("span",{class:"mbin"},"+"),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord"},"0.962"),a("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r"),a("span",{class:"mopen"},"("),a("span",{class:"mord mathnormal"},"t"),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),a("span",{class:"mbin"},"−"),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord"},"1"),a("span",{class:"mclose"},")"),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),a("span",{class:"mbin"},"−"),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord"},"0.318"),a("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r"),a("span",{class:"mopen"},"("),a("span",{class:"mord mathnormal"},"t"),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),a("span",{class:"mbin"},"−"),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord"},"2"),a("span",{class:"mclose"},")")])])])])],-1),h=e('<p>The solar forecasting models are given by<br><img src="'+r+'" alt="Alt text" loading="lazy"></p><h2 id="_3-error-analysis" tabindex="-1"><a class="header-anchor" href="#_3-error-analysis" aria-hidden="true">#</a> 3 Error analysis</h2><h2 id="_4-error-measures-for-lake-huron-and-solar" tabindex="-1"><a class="header-anchor" href="#_4-error-measures-for-lake-huron-and-solar" aria-hidden="true">#</a> 4 Error Measures for Lake Huron and Solar</h2><h2 id="_4-1-lake-huron-9" tabindex="-1"><a class="header-anchor" href="#_4-1-lake-huron-9" aria-hidden="true">#</a> 4.1 Lake Huron . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 9</h2><h2 id="_4-2-solar-9" tabindex="-1"><a class="header-anchor" href="#_4-2-solar-9" aria-hidden="true">#</a> 4.2 Solar . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 9</h2><h2 id="_5-multi-step-forecasting-9" tabindex="-1"><a class="header-anchor" href="#_5-multi-step-forecasting-9" aria-hidden="true">#</a> 5 Multi-Step Forecasting 9</h2><h2 id="_6-example-using-an-ar-3-process-11" tabindex="-1"><a class="header-anchor" href="#_6-example-using-an-ar-3-process-11" aria-hidden="true">#</a> 6 Example using an AR(3) process 11</h2><h2 id="_7-other-processes-12" tabindex="-1"><a class="header-anchor" href="#_7-other-processes-12" aria-hidden="true">#</a> 7 Other processes 12</h2><h2 id="_8-general-arma-p-q-13" tabindex="-1"><a class="header-anchor" href="#_8-general-arma-p-q-13" aria-hidden="true">#</a> 8 General ARMA(p,q) 13</h2><h2 id="_8-1-examples-14" tabindex="-1"><a class="header-anchor" href="#_8-1-examples-14" aria-hidden="true">#</a> 8.1 Examples . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 14</h2><h2 id="_9-alternative-method-for-multi-step-forecasting-15" tabindex="-1"><a class="header-anchor" href="#_9-alternative-method-for-multi-step-forecasting-15" aria-hidden="true">#</a> 9 Alternative method for multi-step forecasting 15</h2><h2 id="_10-forecasting-a-garch-1-1-process-15" tabindex="-1"><a class="header-anchor" href="#_10-forecasting-a-garch-1-1-process-15" aria-hidden="true">#</a> 10 Forecasting a GARCH(1,1) process 15</h2>',12),p=[i,c,o,h];function d(g,u){return t(),n("div",null,p)}const x=l(m,[["render",d],["__file","02.Forcasting.html.vue"]]);export{x as default};

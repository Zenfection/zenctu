"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5203],{60977:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-935ef3aa",path:"/devbook/vue/vuejs/guide/Essentials/2.html",title:"Bài 2: Giới thiệu",lang:"vi",frontmatter:{},excerpt:"",headers:[{level:2,title:"1.VueJS là gì ?",slug:"_1-vuejs-la-gi",children:[]},{level:2,title:"2.Bắt đầu",slug:"_2-bat-đau",children:[]}],filePathRelative:"devbook/vue/vuejs/guide/Essentials/2.md",git:{updatedTime:1629908316e3,contributors:[{name:"Zenfection",email:"44715845+Zenfection1412@users.noreply.github.com",commits:1}]}}},71162:(n,s,a)=>{a.r(s),a.d(s,{default:()=>g});var t=a(66252);const e=(0,t.uE)('<h1 id="bai-2-gioi-thieu" tabindex="-1"><a class="header-anchor" href="#bai-2-gioi-thieu" aria-hidden="true">#</a> Bài 2: Giới thiệu</h1><h2 id="_1-vuejs-la-gi" tabindex="-1"><a class="header-anchor" href="#_1-vuejs-la-gi" aria-hidden="true">#</a> 1.VueJS là gì ?</h2><p><code>Vue</code> là một <strong>progressive framework</strong> để xây dựng giao diện người dùng. Không như các <code>monolithic frameworks</code> khác, <code>Vue</code> thiết kế từ thấp tới cao.</p><p>Thư viện <code>core</code> chỉ tập trung vào <code>view layer</code> nên có thể dễ dàng tích hợp thêm nhiều thư viện vào cùng một dự án.</p><p>Mặt khác, <code>Vue</code> cũng hoàn hảo trong việc xây dụng các <code>Single-Page Application</code>...</p>',5),c=(0,t.Uk)("Tham khảo các khóa học "),p=(0,t._)("code",null,"Vue",-1),o=(0,t.Uk)(" miễn phí "),l={href:"https://www.vuemastery.com/courses/intro-to-vue-3/intro-to-vue3/",target:"_blank",rel:"noopener noreferrer"},u=(0,t.Uk)("tại đây"),i=(0,t._)("h2",{id:"_2-bat-đau",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#_2-bat-đau","aria-hidden":"true"},"#"),(0,t.Uk)(" 2.Bắt đầu")],-1),r=(0,t.Uk)("Trước hết bạn phải "),k=(0,t.Uk)("cài đặt"),d=(0,t.Uk)(" vào dự án của mình."),b=(0,t.uE)('<div class="custom-container warning"><p class="custom-container-title">⚠️ LƯU Ý</p><p>Để có thể sử dụng <code>Vue</code> bạn cần phải chắc rằng mình năm các kiến thức cơ bản về <code>HTML</code>, <code>CSS</code>, <code>Javascript</code></p><p>Sẽ thật sự không tốt nếu bạn nhảy vọt tới <code>FrameWork</code> khi chưa nắm căn bản (<em>Không bắt buộc bạn quá giỏi</em>)</p></div><p>Đầu tiên hãy thực hành với bài <code>Hello World</code> trước nhé.</p>',2),h=(0,t._)("div",{class:"language-html ext-html line-numbers-mode"},[(0,t._)("pre",{class:"language-html"},[(0,t._)("code",null,[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("body")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("div")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"id"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("hello-vue"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n        {{ message }}\n    "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("div")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("body")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n")])]),(0,t._)("div",{class:"line-numbers"},[(0,t._)("span",{class:"line-number"},"1"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"2"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"3"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"4"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"5"),(0,t._)("br")])],-1),_=(0,t._)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,t._)("pre",{class:"language-javascript"},[(0,t._)("code",null,[(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(" HelloVueApp "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token function"},"data"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token keyword"},"return"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n      message"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'Hello Vue!!'"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n\nVue"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"createApp"),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("HelloVueApp"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"mount"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'#hello-vue'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n")])]),(0,t._)("div",{class:"line-numbers"},[(0,t._)("span",{class:"line-number"},"1"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"2"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"3"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"4"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"5"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"6"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"7"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"8"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"9"),(0,t._)("br")])],-1),m=(0,t.uE)('<blockquote><p>OUTPUT : <code>Hello Vue!!</code></p></blockquote><p>Cốt lõi của <code>VueJS</code> là một hệ thống cho phép chúng ta hiển thị dữ liệu theo dạng <code>DOM</code> :</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>counter<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  Counter: {{ counter }}\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> Counter <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      counter<span class="token operator">:</span> <span class="token number">0</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>counter<span class="token operator">++</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nVue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span>Counter<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#counter&#39;</span><span class="token punctuation">)</span>\n</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>',4),g={render:function(n,s){const a=(0,t.up)("OutboundLink"),g=(0,t.up)("RouterLink"),v=(0,t.up)("CodeGroupItem"),U=(0,t.up)("CodeGroup"),f=(0,t.up)("FirstExample");return(0,t.wg)(),(0,t.iD)(t.HY,null,[e,(0,t._)("blockquote",null,[(0,t._)("p",null,[c,p,o,(0,t._)("a",l,[u,(0,t.Wm)(a)])])]),i,(0,t._)("p",null,[r,(0,t.Wm)(g,{to:"/language/Vue/vuejs/guide/Essentials/1.html"},{default:(0,t.w5)((()=>[k])),_:1}),d]),b,(0,t.Wm)(U,null,{default:(0,t.w5)((()=>[(0,t.Wm)(v,{title:"HTML",active:""},{default:(0,t.w5)((()=>[h])),_:1}),(0,t.Wm)(v,{title:"Javascript"},{default:(0,t.w5)((()=>[_])),_:1})])),_:1}),m,(0,t.Wm)(f)],64)}}}}]);
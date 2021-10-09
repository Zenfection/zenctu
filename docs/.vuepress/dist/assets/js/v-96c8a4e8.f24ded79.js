"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7335],{23684:(e,n,a)=>{a.r(n),a.d(n,{data:()=>t});const t={key:"v-96c8a4e8",path:"/devbook/vue/vuejs/guide/Essentials/1.html",title:"Bài 1: Cài đặt",lang:"vi",frontmatter:{},excerpt:"",headers:[{level:2,title:"1.Cách import vueJS",slug:"_1-cach-import-vuejs",children:[{level:3,title:"CDN",slug:"cdn",children:[]},{level:3,title:"Thủ công",slug:"thu-cong",children:[]},{level:3,title:"NPM",slug:"npm",children:[]},{level:3,title:"CLI",slug:"cli",children:[]}]},{level:2,title:"2.Vue Devtools",slug:"_2-vue-devtools",children:[]},{level:2,title:"3.Vite",slug:"_3-vite",children:[]}],filePathRelative:"devbook/vue/vuejs/guide/Essentials/1.md",git:{updatedTime:1629908316e3,contributors:[{name:"Zenfection",email:"44715845+Zenfection1412@users.noreply.github.com",commits:1}]}}},86555:(e,n,a)=>{a.r(n),a.d(n,{default:()=>P});var t=a(66252);const s=(0,t.uE)('<h1 id="bai-1-cai-đat" tabindex="-1"><a class="header-anchor" href="#bai-1-cai-đat" aria-hidden="true">#</a> Bài 1: Cài đặt</h1><p><code>VueJS</code> được thiết kế theo mô hình tăng dần giúp bạn có thể tích hợp vào dự án theo nhiều cách tùy vào yêu cầu</p><p>Phiên bản trong bài viết : <code>vue@next</code> : 3.2.4</p><h2 id="_1-cach-import-vuejs" tabindex="-1"><a class="header-anchor" href="#_1-cach-import-vuejs" aria-hidden="true">#</a> 1.Cách import vueJS</h2><h3 id="cdn" tabindex="-1"><a class="header-anchor" href="#cdn" aria-hidden="true">#</a> CDN</h3><p>Sử dụng <code>CDN package</code> như sau :</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/vue@next<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="thu-cong" tabindex="-1"><a class="header-anchor" href="#thu-cong" aria-hidden="true">#</a> Thủ công</h3><p>Tải các file <code>VueJS</code> và thêm vào cách thủ công bằng 1 trong 2 nguồn sau :</p>',9),l={href:"https://unpkg.com/browse/vue@next/dist/",target:"_blank",rel:"noopener noreferrer"},o=(0,t.Uk)("unkpg"),c={href:"https://cdn.jsdelivr.net/npm/vue@next/dist/",target:"_blank",rel:"noopener noreferrer"},r=(0,t.Uk)("jsDelivr"),i=(0,t._)("h3",{id:"npm",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#npm","aria-hidden":"true"},"#"),(0,t.Uk)(" NPM")],-1),p=(0,t.Uk)("Hãy đảm bảo bạn đã cài "),u={href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"},h=(0,t.Uk)("NodeJS"),d=(0,t.Uk)(" mới nhất"),g=(0,t.uE)('<p>Kiểm tra bằng cách gõ lệnh <code>node -v</code> và <code>npm -v</code></p><blockquote><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/08/22-12-15-18-CleanShot 2021-08-22 at 12.14.59.png"></blockquote><p>Gõ lênh để cài đặt <code>VueJS</code> :</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># phiên bản mởi nhất</span>\n$ <span class="token function">npm</span> <span class="token function">install</span> vue@next\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="cli" tabindex="-1"><a class="header-anchor" href="#cli" aria-hidden="true">#</a> CLI</h3><p><code>Vue</code> cung cấp một công cụ <code>CLI</code> (<em>Command Line Interface</em>) của riêng mình hỗ trợ xây dựng các giao diện hiện đại trong vài phút</p><p>Cài đặt như sau :</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">npm</span> i -g @vue/cli\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>Kiểm tra đã cài thành công bằng lệnh <code>vue --version</code></p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/08/22-13-17-19-CleanShot 2021-08-22 at 13.17.10.png"></blockquote><div class="custom-container tip"><p class="custom-container-title">💡 MẸO</p><ol><li><p>Gõ <code>vue --help</code> để biết cách sử dụng</p></li><li><p>Gõ <code>vue ui</code> để tạo dự án VueJS dễ hơn</p></li></ol></div><h2 id="_2-vue-devtools" tabindex="-1"><a class="header-anchor" href="#_2-vue-devtools" aria-hidden="true">#</a> 2.Vue Devtools</h2><blockquote><p>Hiện nay chỉ mới là <code>Beta</code>, <code>VueX</code> và <code>Rounter</code> đang được phát triển...</p></blockquote>',12),m=(0,t.Uk)("Xem "),v={href:"https://vueschool.io/lessons/using-vue-dev-tools-with-vuejs-3?friend=vuejs",target:"_blank",rel:"noopener noreferrer"},b=(0,t.Uk)("khóa học"),k=(0,t.Uk)(" sau để biết cách sử dụng Vuetool"),f=(0,t.Uk)("Khi sử dụng "),_=(0,t._)("code",null,"Vue",-1),x=(0,t.Uk)(", khuyên bạn hãy cài "),U={href:"https://github.com/vuejs/devtools#vue-devtools",target:"_blank",rel:"noopener noreferrer"},j=(0,t.Uk)("Vue Devtools"),C=(0,t.Uk)(" để thuận tiện cho việc Debug và theo dõi trực quan hơn"),V={href:"https://chrome.google.com/webstore/detail/vuejs-devtools/ljjemllljcmogpfapbkkighbhhppjdbg",target:"_blank",rel:"noopener noreferrer"},y=(0,t.Uk)("Dành cho trình duyệt Chromme"),D={href:"https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/",target:"_blank",rel:"noopener noreferrer"},S=(0,t.Uk)("Dành cho trình duyệt Firefox"),q={href:"https://github.com/vuejs/devtools/blob/legacy/packages/shell-electron/README.md",target:"_blank",rel:"noopener noreferrer"},w=(0,t.Uk)("Trực tiếp trên máy thông qua Electron App"),E=(0,t._)("h2",{id:"_3-vite",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#_3-vite","aria-hidden":"true"},"#"),(0,t.Uk)(" 3.Vite")],-1),W={href:"https://github.com/vitejs/vite",target:"_blank",rel:"noopener noreferrer"},J=(0,t.Uk)("Vite"),I=(0,t.Uk)(" là một tool xây dựng "),N=(0,t._)("code",null,"web development",-1),$=(0,t.Uk)(" cho phép cung cấp mã nhanh như chớp nhờ phương pháp nhập "),L=(0,t._)("code",null,"ES Module",-1),M=(0,t.Uk)(" gốc."),T=(0,t.uE)('<p>Dự án <code>Vue</code> sẽ nhanh hơn nếu thiết lập chạy cùng với <code>Vite</code>, làm như sau :</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">npm</span> init vite <span class="token operator">&lt;</span>tên project<span class="token operator">&gt;</span> -- --template vue\n$ <span class="token builtin class-name">cd</span> <span class="token operator">&lt;</span>tên project<span class="token operator">&gt;</span>\n$ <span class="token function">npm</span> <span class="token function">install</span>\n$ <span class="token function">npm</span> run dev\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>',2),P={render:function(e,n){const a=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[s,(0,t._)("ol",null,[(0,t._)("li",null,[(0,t._)("p",null,[(0,t._)("a",l,[o,(0,t.Wm)(a)])])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t._)("a",c,[r,(0,t.Wm)(a)])])])]),i,(0,t._)("p",null,[p,(0,t._)("a",u,[h,(0,t.Wm)(a)]),d]),g,(0,t._)("p",null,[m,(0,t._)("a",v,[b,(0,t.Wm)(a)]),k]),(0,t._)("p",null,[f,_,x,(0,t._)("a",U,[j,(0,t.Wm)(a)]),C]),(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("p",null,[(0,t._)("a",V,[y,(0,t.Wm)(a)])])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t._)("a",D,[S,(0,t.Wm)(a)])])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t._)("a",q,[w,(0,t.Wm)(a)])])])]),E,(0,t._)("p",null,[(0,t._)("a",W,[J,(0,t.Wm)(a)]),I,N,$,L,M]),T],64)}}}}]);
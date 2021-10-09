"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8431],{16066:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-b98a7a54",path:"/cosonganh/CT175-Ly_thuyet_do_thi/Thuchanh/2.html",title:"Bài thực hành 2",lang:"vi",frontmatter:{},excerpt:"",headers:[{level:2,title:"Duyệt đồ thị theo chiều sâu",slug:"duyet-đo-thi-theo-chieu-sau",children:[{level:3,title:"Phương pháp ngăn xếp",slug:"phuong-phap-ngan-xep",children:[]},{level:3,title:"Sử dụng đệ quy",slug:"su-dung-đe-quy",children:[]}]},{level:2,title:"Duyệt đồ thị theo chiều rộng",slug:"duyet-đo-thi-theo-chieu-rong",children:[]},{level:2,title:"Tính Liên thông của đồ thị",slug:"tinh-lien-thong-cua-đo-thi",children:[{level:3,title:"Kiểm tra đồ thị liên thông",slug:"kiem-tra-đo-thi-lien-thong",children:[]},{level:3,title:"Kiểm tra đồ thị liên thông mạnh",slug:"kiem-tra-đo-thi-lien-thong-manh",children:[]},{level:3,title:"Đếm số liên thông mạnh trong đồ thị",slug:"đem-so-lien-thong-manh-trong-đo-thi",children:[]}]}],filePathRelative:"cosonganh/CT175-Ly_thuyet_do_thi/Thuchanh/2.md",git:{updatedTime:1633678804e3,contributors:[{name:"Zenfection",email:"44715845+Zenfection1412@users.noreply.github.com",commits:1}]}}},22028:(n,s,a)=>{a.r(s),a.d(s,{default:()=>m});var p=a(66252);const t=(0,p.uE)('<h1 id="bai-thuc-hanh-2" tabindex="-1"><a class="header-anchor" href="#bai-thuc-hanh-2" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/10/08-14-42-09-icons8-2_cute.png" width="45"> Bài thực hành 2</h1><p>Trong bài này bạn cần nắm bắt các mục như sau :</p><blockquote><ul><li><p>Duyệt đồ thị theo chiều <code>sâu</code> và <code>rộng</code></p></li><li><p>Kiểm tra tính liên thông và liên thông mạnh của đồ thị</p></li><li><p>Kiểm tra đồ thị có chu trình không</p></li></ul></blockquote><div class="custom-container tip"><p class="custom-container-title">💡 THƯ VIỆN</p><p>Sử dụng các thư viện sau:</p><div class="language-c ext-c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span>    <span class="token comment">// thư viện cơ bản của C</span></span>\n<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdbool.h&gt;</span>  <span class="token comment">// hỗ trợ true/false cho C</span></span>\n<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;list.h&quot;</span>     <span class="token comment">// thư viện cá nhân hỗ trợ danh sách</span></span>\n<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;stack.h&quot;</span>    <span class="token comment">// thư viện cá nhân hỗ trợ ngăn xếp</span></span>\n</code></pre></div></div>',4),o=(0,p.Uk)("⇣ Download thư viện "),e={href:"https://github.com/Zenfection/zenctu/blob/main/docs/cosonganh/CT175-Ly_thuyet_do_thi/Thuchanh/source/list.h",target:"_blank",rel:"noopener noreferrer"},c=(0,p.Uk)("list.h"),u=(0,p.Uk)(" và "),l={href:"https://github.com/Zenfection/zenctu/blob/main/docs/cosonganh/CT175-Ly_thuyet_do_thi/Thuchanh/source/stack.h",target:"_blank",rel:"noopener noreferrer"},i=(0,p.Uk)("stack.h"),r=(0,p.uE)('<div class="custom-container warning"><p class="custom-container-title">⚠️ LƯU Ý</p><p>Tất cả các đỉnh trong đồ thị bắt đầu từ <code>1</code> thay vì <code>0</code>, nên hãy để ý rõ không thì sai !!!</p></div><h2 id="duyet-đo-thi-theo-chieu-sau" tabindex="-1"><a class="header-anchor" href="#duyet-đo-thi-theo-chieu-sau" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/10/08-14-49-35-icons8-depth.png" width="40"> Duyệt đồ thị theo chiều sâu</h2><h3 id="phuong-phap-ngan-xep" tabindex="-1"><a class="header-anchor" href="#phuong-phap-ngan-xep" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/10/08-14-50-21-icons8-pancake.png" width="30"> Phương pháp ngăn xếp</h3><blockquote><p>Trả về danh sách duyệt đồ thị theo chiều sâu dùng <code>ngăn xếp</code></p></blockquote><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">subDFS</span><span class="token punctuation">(</span>Graph G<span class="token punctuation">,</span> Stack stack<span class="token punctuation">,</span> List <span class="token operator">*</span>L<span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">emptyStack</span><span class="token punctuation">(</span>stack<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">int</span> u <span class="token operator">=</span> <span class="token function">pullStack</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>stack<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">memberList</span><span class="token punctuation">(</span>u<span class="token punctuation">,</span> <span class="token operator">*</span>L<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span>\n        <span class="token function">insertList</span><span class="token punctuation">(</span>u<span class="token punctuation">,</span> L<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        List temp <span class="token operator">=</span> <span class="token function">neighbors</span><span class="token punctuation">(</span>G<span class="token punctuation">,</span>u<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> temp<span class="token punctuation">.</span>Size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">int</span> v <span class="token operator">=</span> temp<span class="token punctuation">.</span>Data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">memberList</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> <span class="token operator">*</span>L<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n                <span class="token function">pushStack</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>stack<span class="token punctuation">,</span> v<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\nList <span class="token function">DFS</span><span class="token punctuation">(</span>Graph G<span class="token punctuation">,</span> <span class="token keyword">int</span> x<span class="token punctuation">)</span><span class="token punctuation">{</span>\n    List L<span class="token punctuation">;</span>\n    <span class="token function">makeNullList</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>L<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    List array <span class="token operator">=</span> <span class="token function">arrayGraph</span><span class="token punctuation">(</span>G<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">while</span> <span class="token punctuation">(</span>L<span class="token punctuation">.</span>Size <span class="token operator">!=</span> G<span class="token punctuation">.</span>n<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        Stack stack<span class="token punctuation">;</span>\n        <span class="token function">makeNullStack</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>stack<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">pushStack</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>stack<span class="token punctuation">,</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token function">subDFS</span><span class="token punctuation">(</span>G<span class="token punctuation">,</span>stack<span class="token punctuation">,</span><span class="token operator">&amp;</span>L<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> array<span class="token punctuation">.</span>Size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">memberList</span><span class="token punctuation">(</span>array<span class="token punctuation">.</span>Data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span>L<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n                x <span class="token operator">=</span> array<span class="token punctuation">.</span>Data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n                <span class="token keyword">break</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> L<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">⚠️ CHÚ Ý</p><p>Hàm trả về đầy đủ các đỉnh kể cả khi đồ thị <code>không liên thông</code>, nên nếu bạn có nhu cầu khác hãy sử từ dòng <code>27</code> tới <code>32</code></p></div><h3 id="su-dung-đe-quy" tabindex="-1"><a class="header-anchor" href="#su-dung-đe-quy" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/10/08-14-51-03-icons8-reset.png" width="30"> Sử dụng đệ quy</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">DFS_Re</span><span class="token punctuation">(</span>Graph G<span class="token punctuation">,</span> <span class="token keyword">int</span> v<span class="token punctuation">,</span> bool visited<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    visited<span class="token punctuation">[</span>v<span class="token punctuation">]</span> <span class="token operator">=</span> true<span class="token punctuation">;</span>\n\n    List temp <span class="token operator">=</span> <span class="token function">neighbors</span><span class="token punctuation">(</span>G<span class="token punctuation">,</span> v<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> temp<span class="token punctuation">.</span>Size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">int</span> u <span class="token operator">=</span> temp<span class="token punctuation">.</span>Data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>visited<span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token function">DFS_Re</span><span class="token punctuation">(</span>G<span class="token punctuation">,</span> u<span class="token punctuation">,</span> visited<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">⚠️ LƯU Ý</p><p>Sửa hàm này theo nhu cầu của bạn</p></div><h2 id="duyet-đo-thi-theo-chieu-rong" tabindex="-1"><a class="header-anchor" href="#duyet-đo-thi-theo-chieu-rong" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/10/08-14-49-40-icons8-surface.png" width="35"> Duyệt đồ thị theo chiều rộng</h2><blockquote><p>Sử dụng danh sách (tương đương hàng đợi)</p></blockquote><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">subBFS</span><span class="token punctuation">(</span>Graph G<span class="token punctuation">,</span> List queue<span class="token punctuation">,</span> List <span class="token operator">*</span>L<span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">emptyList</span><span class="token punctuation">(</span>queue<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">int</span> u <span class="token operator">=</span> <span class="token function">elementAt</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>queue<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">memberList</span><span class="token punctuation">(</span>u<span class="token punctuation">,</span> <span class="token operator">*</span>L<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span>\n        <span class="token function">insertList</span><span class="token punctuation">(</span>u<span class="token punctuation">,</span> L<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        List temp <span class="token operator">=</span> <span class="token function">neighbors</span><span class="token punctuation">(</span>G<span class="token punctuation">,</span>u<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> temp<span class="token punctuation">.</span>Size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">int</span> v <span class="token operator">=</span> temp<span class="token punctuation">.</span>Data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">memberList</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> <span class="token operator">*</span>L<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">memberList</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> queue<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n                <span class="token function">insertList</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> <span class="token operator">&amp;</span>queue<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\nList <span class="token function">BFS</span><span class="token punctuation">(</span>Graph G<span class="token punctuation">,</span> <span class="token keyword">int</span> x<span class="token punctuation">)</span><span class="token punctuation">{</span>    \n    List L<span class="token punctuation">;</span>\n    <span class="token function">makeNullList</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>L<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    List array <span class="token operator">=</span> <span class="token function">arrayGraph</span><span class="token punctuation">(</span>G<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">while</span> <span class="token punctuation">(</span>L<span class="token punctuation">.</span>Size <span class="token operator">!=</span> G<span class="token punctuation">.</span>n<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        List queue<span class="token punctuation">;</span>\n        <span class="token function">makeNullList</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>queue<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">insertList</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span><span class="token operator">&amp;</span>queue<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token function">subBFS</span><span class="token punctuation">(</span>G<span class="token punctuation">,</span>queue<span class="token punctuation">,</span><span class="token operator">&amp;</span>L<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> array<span class="token punctuation">.</span>Size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">memberList</span><span class="token punctuation">(</span>array<span class="token punctuation">.</span>Data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> L<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n                x <span class="token operator">=</span> array<span class="token punctuation">.</span>Data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n                <span class="token keyword">break</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> L<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">⚠️ CHÚ Ý</p><p>Hàm trả về đầy đủ các đỉnh kể cả khi đồ thị <code>không liên thông</code>, nên nếu bạn có nhu cầu khác hãy sử từ dòng <code>26</code> tới <code>31</code></p></div><h2 id="tinh-lien-thong-cua-đo-thi" tabindex="-1"><a class="header-anchor" href="#tinh-lien-thong-cua-đo-thi" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/10/08-15-42-29-icons8-connect.png" width="35">Tính Liên thông của đồ thị</h2><h3 id="kiem-tra-đo-thi-lien-thong" tabindex="-1"><a class="header-anchor" href="#kiem-tra-đo-thi-lien-thong" aria-hidden="true">#</a> Kiểm tra đồ thị liên thông</h3><blockquote><p>Là đồ thị khi một đỉnh bất kỳ có thể đi tới tất cả các đỉnh còn lại trong đồ thị</p></blockquote><div class="custom-container tip"><p class="custom-container-title">💡 TƯ TƯỞNG</p><p>Sử dụng hàm <code>subBFS()</code> hoặc <code>subDFS()</code> để trả về danh sách cách đỉnh duyệt khi duyệt qua 1 lần</p><p>==&gt; Nếu số phần tử trong danh sách = với số đỉnh trong đồ thị thì <code>liên thông</code></p></div><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">connectedGraph</span><span class="token punctuation">(</span>Graph G<span class="token punctuation">)</span><span class="token punctuation">{</span>\n    List L<span class="token punctuation">;</span> <span class="token function">makeNullList</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>L<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n    List queue<span class="token punctuation">;</span> <span class="token function">makeNullList</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>queue<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">insertList</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span><span class="token operator">&amp;</span>queue<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">subBFS</span><span class="token punctuation">(</span>G<span class="token punctuation">,</span>queue<span class="token punctuation">,</span><span class="token operator">&amp;</span>L<span class="token punctuation">)</span><span class="token punctuation">;</span> \n    \n    <span class="token comment">//List stack; makeNullStack(&amp;stack);</span>\n    <span class="token comment">//pushStack(&amp;stack, x);</span>\n    <span class="token comment">//subDFS(G,stack,&amp;L);</span>\n    <span class="token keyword">return</span> L<span class="token punctuation">.</span>Size <span class="token operator">==</span> G<span class="token punctuation">.</span>n<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="kiem-tra-đo-thi-lien-thong-manh" tabindex="-1"><a class="header-anchor" href="#kiem-tra-đo-thi-lien-thong-manh" aria-hidden="true">#</a> Kiểm tra đồ thị liên thông mạnh</h3>',19),k=(0,p.Uk)("Sử dụng lại hàm "),b=(0,p.Uk)("duyệt theo chiều sâu bằng đệ quy"),h=(0,p.uE)('<div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>bool <span class="token function">checkConnectedStrong</span><span class="token punctuation">(</span>Graph G<span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> G<span class="token punctuation">.</span>n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        bool visited<span class="token punctuation">[</span>G<span class="token punctuation">.</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// bắt đầu từ đỉnh 1 thay vì 0</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> G<span class="token punctuation">.</span>n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// khởi tạo ban đầu là false</span>\n            visited<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> false<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token function">DFS_Re</span><span class="token punctuation">(</span>G<span class="token punctuation">,</span> i<span class="token punctuation">,</span> visited<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// duyệt đệ quy DFS đồ thị</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> G<span class="token punctuation">.</span>n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>visited<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// nếu có 1 đỉnh chưa duyệt được thì false</span>\n                <span class="token keyword">return</span> false<span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> true<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="đem-so-lien-thong-manh-trong-đo-thi" tabindex="-1"><a class="header-anchor" href="#đem-so-lien-thong-manh-trong-đo-thi" aria-hidden="true">#</a> Đếm số liên thông mạnh trong đồ thị</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">countStrongConnected</span><span class="token punctuation">(</span>Graph G<span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">checkConnectedStrong</span><span class="token punctuation">(</span>G<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> G<span class="token punctuation">.</span>n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        bool visited<span class="token punctuation">[</span>G<span class="token punctuation">.</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> G<span class="token punctuation">.</span>n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// khởi tạo ban đầu là false</span>\n            visited<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> false<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token function">DFS_Re</span><span class="token punctuation">(</span>G<span class="token punctuation">,</span> i<span class="token punctuation">,</span> visited<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// duyệt một lần</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> G<span class="token punctuation">.</span>n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>visited<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n                count<span class="token operator">++</span><span class="token punctuation">;</span>\n                <span class="token keyword">break</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> count<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>',3),m={render:function(n,s){const a=(0,p.up)("OutboundLink"),m=(0,p.up)("RouterLink");return(0,p.wg)(),(0,p.iD)(p.HY,null,[t,(0,p._)("blockquote",null,[(0,p._)("p",null,[o,(0,p._)("a",e,[c,(0,p.Wm)(a)]),u,(0,p._)("a",l,[i,(0,p.Wm)(a)])])]),r,(0,p._)("blockquote",null,[(0,p._)("p",null,[k,(0,p.Wm)(m,{to:"/cosonganh/CT175-Ly_thuyet_do_thi/Thuchanh/2.html#su-dung-%C4%91e-quy"},{default:(0,p.w5)((()=>[b])),_:1})])]),h],64)}}}}]);
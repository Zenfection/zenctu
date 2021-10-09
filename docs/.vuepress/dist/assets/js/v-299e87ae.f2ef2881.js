"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[648],{62011:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-299e87ae",path:"/devbook/java/Advanced/12.html",title:"Bài 12: Threads",lang:"vi",frontmatter:{},excerpt:"",headers:[{level:2,title:"1.Giới thiệu",slug:"_1-gioi-thieu",children:[]},{level:2,title:"2.Sử dụng",slug:"_2-su-dung",children:[]}],filePathRelative:"devbook/java/Advanced/12.md",git:{updatedTime:1629908316e3,contributors:[{name:"Zenfection",email:"44715845+Zenfection1412@users.noreply.github.com",commits:1}]}}},61928:(n,s,a)=>{a.r(s),a.d(s,{default:()=>t});const p=(0,a(66252).uE)('<h1 id="bai-12-threads" tabindex="-1"><a class="header-anchor" href="#bai-12-threads" aria-hidden="true">#</a> Bài 12: Threads</h1><h2 id="_1-gioi-thieu" tabindex="-1"><a class="header-anchor" href="#_1-gioi-thieu" aria-hidden="true">#</a> 1.Giới thiệu</h2><div class="custom-container tip"><p class="custom-container-title">💡 <b>THREADS</b> LÀ GÌ ?</p><p><code>Threads</code> (<em>Luồng</em>) cho phép hoạt động hiệu quả hơn bằng cách chạy nhiều thứ cùng lúc</p><p>==&gt; Sử dụng để thực thi các <strong>tác vụ phức tạp</strong> trong nền mà không làm gián đoạn chương trình chính</p></div><p>Có 2 cách để tạo <code>Thread</code> :</p><ul><li><p>Sử dụng bằng cách kế thừa lớp <code>Thread</code> và đè phương thức <code>run()</code> như sau:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span><span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Code đang chạy luồng run&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li><li><p>Cách khác ➨ Bổ sung từ interface <code>Runnable</code> như sau :</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token keyword">implements</span> <span class="token class-name">Runnable</span><span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Code đang chạy luồng run&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li></ul><h2 id="_2-su-dung" tabindex="-1"><a class="header-anchor" href="#_2-su-dung" aria-hidden="true">#</a> 2.Sử dụng</h2><ul><li>Nếu bạn sử dụng cách kế thừa lớp <code>Thread</code>, ta có thể chạy luồng bằng cách sử dụng phương thức <code>start()</code> :</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span> <span class="token punctuation">{</span>\n  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token class-name">Main</span> thread <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    thread<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Code này nằm bên ngoài luồng&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Code này đang chạy trong luồng&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token comment">/* Code này đang chạy trong luồng\n   Code này nằm bên ngoài luồng    */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ul><li><p>Nếu sử dụng bổ sung interface <code>Runnable</code>, thì ta phải tạo đối tượng <code>Thread</code> và gọi phương thức <code>start()</code> như sau :</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token keyword">implements</span> <span class="token class-name">Runnable</span> <span class="token punctuation">{</span>\n  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token class-name">Main</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token class-name">Thread</span> thread <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    thread<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Code này nằm bên ngoài luồng&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Code này đang chạy trong luồng&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token comment">/* Code này đang chạy trong luồng\n   Code này nằm bên ngoài luồng    */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></li></ul><div class="custom-container tip"><p class="custom-container-title"><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/07/30-15-17-12-icons8-comparing.png" width="30"> Sự khác nhau giữa 2 cái trên</p><p>Điểm chính khác nhau là khi bạn dùng <strong>kế thừa</strong> lớp <code>Thread</code>, bạn không thể kế thừa lớp nào khác, còn bổ sung interface <code>Runnable</code> thì có thể.</p></div><div class="custom-container warning"><p class="custom-container-title"><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/08-17-36-14-Professor%20Male.png" width="30"> Vấn đề đặt ra</p><p>Như bạn đã biết thì <code>Thread</code> sẽ chạy song song với chương trình, vậy thì làm sao nó có thể biết thứ tự chạy của từng <code>Thread</code>, vấn đề đó gọi là</p><blockquote><p>🔥 Ví dụ khi chương trình <code>threads</code> và <code>main</code> cùng đọc và ghi biến <code>x</code> thì sẽ xảy ra lỗi không mong muốn vì thứ tự thực hiện.</p></blockquote></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span><span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> amount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token class-name">Main</span> thread <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        thread<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>amount<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        amount<span class="token operator">++</span><span class="token punctuation">;</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>amount<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        amount<span class="token operator">++</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// 0 2</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><blockquote><p>==&gt; Như các bạn đã thấy, thì lỗi và khi cố chạy nó sẽ không cho ta kết quả mong muốn !!!</p></blockquote><div class="custom-container tip"><p class="custom-container-title">💡 GIẢI QUYẾT</p><p>Cách tốt nhất là bạn hạn chế sử dụng <code>attribute</code> chung cho hàm <code>thread</code> và <code>main</code>. Nếu bắt buộc phải sử dụng, hãy sử dụng phương thức <code>isAlive()</code> như sau :</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span><span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> amount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token class-name">Main</span> thread <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        thread<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">while</span><span class="token punctuation">(</span>thread<span class="token punctuation">.</span><span class="token function">isAlive</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Đợi xử lý xong đã&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Amount = &quot;</span> <span class="token operator">+</span> amount<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        amount<span class="token operator">++</span><span class="token punctuation">;</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Amount = &quot;</span> <span class="token operator">+</span> amount<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        amount<span class="token operator">++</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// Đợi xử lý xong đã</span>\n<span class="token comment">// Amount = 1;</span>\n<span class="token comment">// Amount = 2;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div></div>',14),t={render:function(n,s){return p}}}}]);
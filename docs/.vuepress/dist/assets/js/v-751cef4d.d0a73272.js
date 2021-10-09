"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6341],{6764:(n,a,s)=>{s.r(a),s.d(a,{data:()=>t});const t={key:"v-751cef4d",path:"/devbook/java/Advanced/6.html",title:"Bài 6: HashMap",lang:"vi",frontmatter:{},excerpt:"",headers:[{level:2,title:"1.Giới thiệu",slug:"_1-gioi-thieu",children:[]},{level:2,title:"2.Sử dụng",slug:"_2-su-dung",children:[]}],filePathRelative:"devbook/java/Advanced/6.md",git:{updatedTime:1629908316e3,contributors:[{name:"Zenfection",email:"44715845+Zenfection1412@users.noreply.github.com",commits:1}]}}},24464:(n,a,s)=>{s.r(a),s.d(a,{default:()=>v});var t=s(66252);const e=(0,t._)("h1",{id:"bai-6-hashmap",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#bai-6-hashmap","aria-hidden":"true"},"#"),(0,t.Uk)(" Bài 6: HashMap")],-1),c=(0,t._)("h2",{id:"_1-gioi-thieu",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#_1-gioi-thieu","aria-hidden":"true"},"#"),(0,t.Uk)(" 1.Giới thiệu")],-1),p=(0,t.Uk)("Trong bài "),o=(0,t.Uk)("ArrayList"),l=(0,t.Uk)(", nó lưu trữ phần tử theo thứ tự chỉ mục bắt đầu từ "),u=(0,t._)("strong",null,"0",-1),i=(0,t.Uk)(", nếu bạn muốn truy cập phần tử ngầu nhiên thì sử dụng chỉ mục ("),r=(0,t._)("em",null,"số nguyên",-1),d=(0,t.Uk)(") của nó ==> "),k=(0,t._)("code",null,"Array[1]",-1),m=(0,t.Uk)(", "),h=(0,t._)("code",null,"Array[3]",-1),g=(0,t.Uk)("...."),b=(0,t.uE)('<div class="custom-container tip"><p class="custom-container-title">💡 <b>HASHMAP</b> LÀ GÌ ?</p><p>Là bản đồ băm lưu các phần tử dưới dạng <code>key/value</code>.</p><ul><li><p>Một <code>Object</code> sẽ làm từ khoá tìm kiếm cho <code>Object</code> khác.</p></li><li><p>Có thể lưu trữ bằng nhiều kiểu dữ liệu làm <code>key</code> như : <code>String</code>, <code>Integer</code>...</p></li></ul></div><p>Sử dụng <code>HashMap</code> trong gói <code>java.util.HashMap</code> như sau :</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">HashMap</span><span class="token punctuation">;</span>\n\n<span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> animals <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">VÍ DỤ</p><p><code>Integer</code> là <code>key</code> còn <code>String</code> là <code>value</code></p><p><strong>Debug ra như sau :</strong></p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/10-10-01-35-Ảnh chụp Màn hình 2021-02-10 lúc 10.01.28.png"></div><h2 id="_2-su-dung" tabindex="-1"><a class="header-anchor" href="#_2-su-dung" aria-hidden="true">#</a> 2.Sử dụng</h2><p>Cho trước một đoạn code sau :</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">HashMap</span><span class="token punctuation">;</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span><span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> animals <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><blockquote><p>🔥 Ta tạo một đối tượng <code>animals</code>, có <code>key</code> và <code>value</code> là kiểu <code>String</code>.</p></blockquote><br><table><thead><tr><th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/07/30-12-29-55-icons8-settings.png">Phương thức</th><th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/07/30-12-30-07-icons8-handle_with_care.png">Mô tả</th><th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/07/30-13-54-19-icons8-drawing_process.png">Ví dụ</th></tr></thead><tbody><tr><td>put(&quot;x&quot;,&quot;y&quot;)</td><td>Thêm một phần tử với chuỗi <strong>x</strong> là <code>key</code>, chuỗi <strong>y</strong> là value</td><td><code>animals.put(&quot;cat&quot;,&quot;mèo&quot;)</code><br>⇨ key : &quot;cat&quot;<br>value : &quot;mèo&quot;</td></tr><tr><td>get(&quot;x&quot;)</td><td>Lấy <code>value</code> dựa theo <code>key</code></td><td><code>animals.get(&quot;cat&quot;)</code> <br>⇨ mèo</td></tr><tr><td>remove(&quot;x&quot;)</td><td>Xoá phần tử bằng <code>value</code></td><td><code>animals.remove(&quot;cat&quot;)</code> <br>⇨ mèo đã bị xoá</td></tr><tr><td>clear()</td><td>Xoá tất cả phần tử</td><td><code>animals.clear()</code><br>⇨ tất cả phần tử không còn nữa</td></tr><tr><td>size()</td><td>Trả về số phần tử hiện có</td><td><code>animals.size()</code><br>⇨ 1</td></tr><tr><td>keySet()<br>values()&lt;&gt;</td><td>Lấy <code>key</code> của <code>HashMap</code><br>Lấy <code>value</code> của <code>HashMap</code></td><td><code>animals.keySet()</code><br>⇨ cat<br><code>animals.values()</code><br>⇨ mèo</td></tr></tbody></table><details class="custom-container details"><summary><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/07/30-13-35-17-icons8-search_more.png" width="25"> Duyệt qua một <code>HashMap</code></summary><p>Bạn có thể dùng vòng lặp để duyệt qua <code>HashMap</code> theo 2 cách sau :</p><ul><li><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/07/30-13-56-46-icons8-key.png" width="23"> <b>Duyệt bằng key</b></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">String</span> index <span class="token operator">:</span> animals<span class="token punctuation">.</span><span class="token function">keySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/07/30-13-56-47-icons8-approximately_equal.png" width="23"> <b>Duyệt bằng value</b></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">String</span> index <span class="token operator">:</span> animals<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li></ul></details>',11),v={render:function(n,a){const s=(0,t.up)("RouterLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[e,c,(0,t._)("p",null,[p,(0,t.Wm)(s,{to:"/language/Java/Advanced/4.html"},{default:(0,t.w5)((()=>[o])),_:1}),l,u,i,r,d,k,m,h,g]),b],64)}}}}]);
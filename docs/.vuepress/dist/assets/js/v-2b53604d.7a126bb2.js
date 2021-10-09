"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9085],{4496:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-2b53604d",path:"/devbook/java/Advanced/13.html",title:"Bài 13: Lambda",lang:"vi",frontmatter:{},excerpt:"",headers:[{level:2,title:"1.Giới thiệu",slug:"_1-gioi-thieu",children:[]},{level:2,title:"2.Sử dụng",slug:"_2-su-dung",children:[]}],filePathRelative:"devbook/java/Advanced/13.md",git:{updatedTime:1629908316e3,contributors:[{name:"Zenfection",email:"44715845+Zenfection1412@users.noreply.github.com",commits:1}]}}},47570:(n,s,a)=>{a.r(s),a.d(s,{default:()=>m});var p=a(66252);const t=(0,p._)("h1",{id:"bai-13-lambda",tabindex:"-1"},[(0,p._)("a",{class:"header-anchor",href:"#bai-13-lambda","aria-hidden":"true"},"#"),(0,p.Uk)(" Bài 13: Lambda")],-1),e=(0,p._)("h2",{id:"_1-gioi-thieu",tabindex:"-1"},[(0,p._)("a",{class:"header-anchor",href:"#_1-gioi-thieu","aria-hidden":"true"},"#"),(0,p.Uk)(" 1.Giới thiệu")],-1),c={class:"custom-container tip"},o=(0,p._)("p",{class:"custom-container-title"},[(0,p.Uk)("💡 "),(0,p._)("b",null,"LAMDA"),(0,p.Uk)(" LÀ GÌ ?")],-1),l=(0,p._)("p",null,[(0,p.Uk)("Biểu thức "),(0,p._)("code",null,"Lambda"),(0,p.Uk)(" được thêm vào từ "),(0,p._)("code",null,"Java 8"),(0,p.Uk)(" trở về sau.")],-1),u=(0,p._)("li",null,[(0,p.Uk)("Bản chất là "),(0,p._)("code",null,"method"),(0,p.Uk)(" nhưng không có tên và không thuộc "),(0,p._)("code",null,"class"),(0,p.Uk)(" nào")],-1),i=(0,p._)("li",null,"Không khai báo kiểu trả về",-1),r=(0,p.Uk)("Không có "),k=(0,p.Uk)("Phạm vi truy cập"),d=(0,p.uE)('<p><strong>CÚ PHÁP:</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>đối số -<span class="token operator">&gt;</span> biểu thức\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>💡Có thể sử dụng nhiều đối số, cách nhau bởi dấu <code>,</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">(</span>đối số <span class="token number">1</span>, đối số <span class="token number">2</span><span class="token punctuation">)</span> -<span class="token operator">&gt;</span> biểu thức\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></blockquote><div class="custom-container warning"><p class="custom-container-title">⚠️ HẠN CHẾ</p><p>Biểu thức <code>Lambda</code> có hạn chế, chúng phải <code>return</code> giá trị ngay vì chúng không thể chứa <strong>biến</strong>,<strong>toán tử</strong> hay các <strong>câu lệnh</strong> như <code>if</code>, <code>for</code>...</p></div><p>Để thực hiện có vấn đề phức tạp ta nên để biểu thức trong dấu <code>{}</code> như sau:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">(</span>đối số <span class="token number">1</span>,đối số <span class="token number">2</span><span class="token punctuation">)</span> -<span class="token operator">&gt;</span> <span class="token punctuation">{</span>code block<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="_2-su-dung" tabindex="-1"><a class="header-anchor" href="#_2-su-dung" aria-hidden="true">#</a> 2.Sử dụng</h2><p>Biểu thức <code>Lambda</code> thường dùng để truyền dạng tham số của một hàm như sau :</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span><span class="token punctuation">;</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>\n  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> numbers <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    numbers<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    numbers<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    numbers<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    numbers<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    numbers<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>\n        <span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>\n            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token comment">//Output : 5 9 8 1</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">⚠️ LƯU Ý</p><ul><li>Biểu thức <code>Lambda</code> có thể lưu biến nếu kiểu biến là một <code>interface</code> chỉ có một <code>method</code>, phải có cùng số <strong>tham số</strong> và kiểu <strong>trả về</strong></li></ul></div><blockquote><p>💡 <code>Java</code> có nhiều <code>interface</code> sẵn, chẳng hạn như <code>Consumer</code> trong gói <code>java.util</code></p></blockquote><p><strong>Ví dụ</strong> : Sử dụng <strong>interface</strong> <code>Consumer</code> để lưu trữ biểu thức <code>Lambda</code> trong một biến</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>function<span class="token punctuation">.</span></span><span class="token class-name">Consumer</span><span class="token punctuation">;</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> numbers <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        numbers<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        numbers<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        numbers<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        numbers<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> \n        <span class="token class-name">Consumer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> method <span class="token operator">=</span> <span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>\n            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">;</span>\n        numbers<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>method<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token comment">//Output : 5 9 8 1</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>Để sử dụng biểu thức <code>Lambda</code> trong một <code>method</code> thì <code>method</code> phải có <strong>đối số</strong> và <strong>interface</strong> cùng với <code>method</code> của nó như sau :</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">interface</span> <span class="token class-name">StringFunction</span> <span class="token punctuation">{</span>\n    <span class="token class-name">String</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token class-name">StringFunction</span> exclaim <span class="token operator">=</span> <span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> s <span class="token operator">+</span> <span class="token string">&quot;!&quot;</span><span class="token punctuation">;</span>\n        <span class="token class-name">StringFunction</span> ask <span class="token operator">=</span> <span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> s <span class="token operator">+</span> <span class="token string">&quot;?&quot;</span><span class="token punctuation">;</span>\n        <span class="token function">printFormatted</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">,</span> exclaim<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">printFormatted</span><span class="token punctuation">(</span><span class="token string">&quot;Hello&quot;</span><span class="token punctuation">,</span> ask<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">printFormatted</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">,</span> <span class="token class-name">StringFunction</span> format<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">String</span> result <span class="token operator">=</span> format<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token comment">/*Hello World!\n  Hello?       */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div>',15),m={render:function(n,s){const a=(0,p.up)("RouterLink");return(0,p.wg)(),(0,p.iD)(p.HY,null,[t,e,(0,p._)("div",c,[o,l,(0,p._)("ul",null,[u,i,(0,p._)("li",null,[r,(0,p.Wm)(a,{to:"/language/Java/OOP/2.html"},{default:(0,p.w5)((()=>[k])),_:1})])])]),d],64)}}}}]);
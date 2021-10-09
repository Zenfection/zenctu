"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2189],{27397:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-2d0838ec",path:"/devbook/java/Advanced/14.html",title:"Bài 14: File Handling",lang:"vi",frontmatter:{},excerpt:"",headers:[{level:2,title:"1.Giới thiệu",slug:"_1-gioi-thieu",children:[]},{level:2,title:"2.Tạo và ghi file",slug:"_2-tao-va-ghi-file",children:[{level:3,title:"Tạo một file",slug:"tao-mot-file",children:[]},{level:3,title:"Ghi một file",slug:"ghi-mot-file",children:[]}]},{level:2,title:"3.Đọc file",slug:"_3-đoc-file",children:[{level:3,title:"Đọc nội dung file",slug:"đoc-noi-dung-file",children:[]},{level:3,title:"Hiển thị thông tin file",slug:"hien-thi-thong-tin-file",children:[]}]},{level:2,title:"4.Xoá file",slug:"_4-xoa-file",children:[]}],filePathRelative:"devbook/java/Advanced/14.md",git:{updatedTime:1629908316e3,contributors:[{name:"Zenfection",email:"44715845+Zenfection1412@users.noreply.github.com",commits:1}]}}},42306:(n,s,a)=>{a.r(s),a.d(s,{default:()=>h});var t=a(66252);const p=(0,t.uE)('<h1 id="bai-14-file-handling" tabindex="-1"><a class="header-anchor" href="#bai-14-file-handling" aria-hidden="true">#</a> Bài 14: File Handling</h1><h2 id="_1-gioi-thieu" tabindex="-1"><a class="header-anchor" href="#_1-gioi-thieu" aria-hidden="true">#</a> 1.Giới thiệu</h2><p>Lớp <code>File</code> nằm trong gói <code>java.io</code> cho phép ta xử lý về file rất linh hoạt :</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">File</span><span class="token punctuation">;</span>\n<span class="token class-name">File</span> myFile <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;kietdeptrai.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Các phương thức phổ biến của <code>File</code> :</p><table><thead><tr><th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/07/30-12-29-55-icons8-settings.png">Phương thức</th><th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/07/30-15-28-41-icons8-text_width.png">Kiểu dữ liệu</th><th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/07/30-12-30-07-icons8-handle_with_care.png">Mô tả</th></tr></thead><tbody><tr><td>canRead()<br>canWrite()<br>exists()</td><td>Boolean</td><td>Kiểm tra file có <strong>đọc</strong> được không<br>Kiểm tra file có <strong>ghi</strong> được không<br>KIểm tra file có <strong>tồn tại</strong> không</td></tr><tr><td>createNewFile()<br>delete()</td><td>Boolean</td><td>Tạo một file trống<br>Xoá một file</td></tr><tr><td>write(x)</td><td></td><td>Ghi mộ file</td></tr><tr><td>close()</td><td></td><td>Đóng một file</td></tr><tr><td>getName()</td><td>String</td><td>Trả về tên của file</td></tr><tr><td>getAbsolutePath()</td><td>String</td><td>Trả về đường dẫn tuyệt đối của file</td></tr><tr><td>length()</td><td>Long</td><td>Trả về kích thước tệp (<em>tính bằng byte</em>)</td></tr><tr><td>list()</td><td>String[]</td><td>Trả về mảng các tệp trong thư mục</td></tr><tr><td>mkdir()</td><td>Boolean</td><td>Tạo thư mục</td></tr></tbody></table><h2 id="_2-tao-va-ghi-file" tabindex="-1"><a class="header-anchor" href="#_2-tao-va-ghi-file" aria-hidden="true">#</a> 2.Tạo và ghi file</h2><h3 id="tao-mot-file" tabindex="-1"><a class="header-anchor" href="#tao-mot-file" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/07/30-13-27-22-icons8-add.png" width="25"> Tạo một file</h3><p>Sử dụng <code>createNewFile()</code> để tạo một file.</p><blockquote><ul><li>Trả về <code>true</code> nếu tạo thành công</li><li>Trả về <code>false</code> nếu file tồn tại</li></ul></blockquote><div class="custom-container tip"><p class="custom-container-title">💡 MẸO</p><p>Bạn nên sử dụng chung với <code>try..catch</code> như sau :</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">File</span><span class="token punctuation">;</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span><span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">try</span> <span class="token punctuation">{</span>\n            <span class="token class-name">File</span> myFile <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;kietdeptrai.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">if</span><span class="token punctuation">(</span>myFile<span class="token punctuation">.</span><span class="token function">createNewFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;File đã tạo : &quot;</span> <span class="token operator">+</span> myFile<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n            <span class="token keyword">else</span><span class="token punctuation">{</span>\n                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;File đã tồn tại&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Lỗi tạo file&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// Output : File đã tạo : kietdeptrai.txt</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div></div><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/20-21-32-59-Ảnh chụp Màn hình 2021-02-20 lúc 21.32.55.png"><p>🔥 Sau khi tạo thành công các bạn có ngay file <code>kietdeptrai.txt</code></p><div class="custom-container warning"><p class="custom-container-title">⚠️ LƯU Ý</p><p>Mặc định nó sẽ tạo file đúng với thư mục ta đang code, nếu ta muốn tạo ở nơi khác, hãy dùng :</p><ul><li><p>Ký tự <code>\\\\</code> cho <code>Windows</code> ➨ <em>\\Users\\name\\filename.txt</em></p></li><li><p>Ký tự <code>/</code> cho <code>Linux</code> và <code>MacOS</code> ➨ <em>/Users/name/filename.txt</em></p></li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">File</span> myObj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;C:\\\\Users\\\\MyName\\\\filename.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Dành cho Windows</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></div><h3 id="ghi-mot-file" tabindex="-1"><a class="header-anchor" href="#ghi-mot-file" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/07/30-15-33-42-icons8-typewriter_with_paper.png"> Ghi một file</h3><p>Sử dụng <code>write()</code> để ghi file</p><p>Sử dụng lớp <code>FileWrite</code> cùng với phương thức <code>write()</code> ta có thể ghi được trong file</p><div class="custom-container warning"><p class="custom-container-title">⚠️ LƯU Ý</p><p>Sau khi ghi xong ta phải đóng file lại bằng phương thức <code>close()</code></p></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">FileWriter</span><span class="token punctuation">;</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span><span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">FileWriter</span> myWriter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileWriter</span><span class="token punctuation">(</span><span class="token string">&quot;kietdeptrai.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            myWriter<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;Tôi là Kiệt đẹp trai đó nha !!!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            myWriter<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Đã ghi file thành công&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Xảy ra lỗi khi ghi file&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token comment">//Output : Đã ghi file thành công</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><ul><li><p>Và sau đó mở file <code>kietdeptrai.txt</code> :</p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/20-21-56-45-Ảnh chụp Màn hình 2021-02-20 lúc 21.56.41.png"></li></ul><h2 id="_3-đoc-file" tabindex="-1"><a class="header-anchor" href="#_3-đoc-file" aria-hidden="true">#</a> 3.Đọc file</h2><h3 id="đoc-noi-dung-file" tabindex="-1"><a class="header-anchor" href="#đoc-noi-dung-file" aria-hidden="true">#</a> Đọc nội dung file</h3><p>Sử dụng lớp <code>Scanner</code> để đọc nội dung trong file</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">File</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span><span class="token punctuation">;</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span><span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">try</span> <span class="token punctuation">{</span>\n            <span class="token class-name">File</span> myFile <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;kietdeptrai.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token class-name">Scanner</span> myReader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span>myFile<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">while</span> <span class="token punctuation">(</span>myReader<span class="token punctuation">.</span><span class="token function">hasNextLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token class-name">String</span> data <span class="token operator">=</span> myReader<span class="token punctuation">.</span><span class="token function">nextLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Lỗi xảy ra khi đọc file&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token comment">//Output : Tôi là Kiệt đẹp trai đó nha !!!</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>',24),e={class:"custom-container warning"},c=(0,t.uE)('<p class="custom-container-title">⚠️ LƯU Ý</p><p>Hàm sau đây :</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">while</span> <span class="token punctuation">(</span>myReader<span class="token punctuation">.</span><span class="token function">hasNextLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n     <span class="token class-name">String</span> data <span class="token operator">=</span> myReader<span class="token punctuation">.</span><span class="token function">nextLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n     <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>',3),o=(0,t.Uk)("Bởi vì lớp "),l=(0,t._)("code",null,"Scanner",-1),i=(0,t.Uk)(" kế thừa từ "),u=(0,t._)("code",null,"Iterator",-1),r=(0,t.Uk)(" nên vậy, cọi lại "),k={href:"https://github.com/Zenfection/Java/blob/master/Java%20Advaced/8.Iterator.md",target:"_blank",rel:"noopener noreferrer"},d=(0,t.Uk)("Iterator"),m=(0,t._)("p",null,[(0,t.Uk)("Nó có nghĩa là "),(0,t._)("code",null,"myReader"),(0,t.Uk)(" đọc tới cuối dòng, Chuỗi data sẽ lưu từng dòng trong file rồi in ra đến hết.")],-1),b=(0,t.uE)('<h3 id="hien-thi-thong-tin-file" tabindex="-1"><a class="header-anchor" href="#hien-thi-thong-tin-file" aria-hidden="true">#</a> Hiển thị thông tin file</h3><p>Sử dụng những phương thức đề cập ở trên như sau :</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">File</span><span class="token punctuation">;</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span><span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">File</span> myFile <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;kietdeptrai.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>myFile<span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Tên file: &quot;</span> <span class="token operator">+</span> myFile<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Đường dẫn file : &quot;</span> <span class="token operator">+</span> myFile<span class="token punctuation">.</span><span class="token function">getAbsolutePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Có thể ghi : &quot;</span> <span class="token operator">+</span> myFile<span class="token punctuation">.</span><span class="token function">canWrite</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Có thể đọc : &quot;</span> <span class="token operator">+</span> myFile<span class="token punctuation">.</span><span class="token function">canRead</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Kích thước file : &quot;</span> <span class="token operator">+</span> myFile<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">else</span><span class="token punctuation">{</span>\n            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;File không tồn tại&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token comment">/*Tên file: kietdeptrai.txt\n  Đường dẫn file : /Users/zenfection/Desktop/Code/Java/kietdeptrai.txt\n  Có thể ghi : true\n  Có thể đọc : true\n  Kích thước file : 40              */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">⚠️ LƯU Ý</p><p>Có nhiều <code>class</code> sẵn trong <code>Java API</code> để thao tác trên file như : <code>FileReader</code>, <code>BufferedReader</code>, <code>Files</code>, <code>Scanner</code>, <code>FileInputStream</code>, <code>FileWriter</code>, <code>BufferedWritter</code>, <code>FileOutputStream</code>...</p></div><p>==&gt; Bạn hãy tự tìm hiểu và học nó, bởi vì nó không khó !!!</p><h2 id="_4-xoa-file" tabindex="-1"><a class="header-anchor" href="#_4-xoa-file" aria-hidden="true">#</a> 4.Xoá file</h2><p>Sử dụng phương thức <code>delete()</code> để xoá file</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">File</span><span class="token punctuation">;</span> \n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DeleteFile</span> <span class="token punctuation">{</span>\n  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span> \n    <span class="token class-name">File</span> myObj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;filename.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> \n    <span class="token keyword">if</span> <span class="token punctuation">(</span>myObj<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> \n      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Xoá thành công file &quot;</span> <span class="token operator">+</span> myObj<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Xoá file thất bại.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> \n  <span class="token punctuation">}</span> \n<span class="token punctuation">}</span>\n<span class="token comment">//Output : Xoá thành công file filename.txt</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">Có thể dùng cách sau :</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">File</span><span class="token punctuation">;</span> \n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DeleteFolder</span> <span class="token punctuation">{</span>\n  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span> \n    <span class="token class-name">File</span> myObj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;C:\\\\Users\\\\MyName\\\\Test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> \n    <span class="token keyword">if</span> <span class="token punctuation">(</span>myObj<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> \n      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Đã xoá thư mục &quot;</span> <span class="token operator">+</span> myObj<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Xoá thư mục thất bại&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> \n  <span class="token punctuation">}</span> \n<span class="token punctuation">}</span>\n<span class="token comment">//Output : Đã xoá thư mục Test</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></div><div class="custom-container danger"><p class="custom-container-title">⚠️ LƯU Ý</p><p>Nhưng phải thư mục trống mới xoá được nhé !!!</p></div>',10),h={render:function(n,s){const a=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[p,(0,t._)("div",e,[c,(0,t._)("p",null,[o,l,i,u,r,(0,t._)("a",k,[d,(0,t.Wm)(a)])]),m]),b],64)}}}}]);
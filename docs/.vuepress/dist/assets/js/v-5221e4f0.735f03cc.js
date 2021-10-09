"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[105],{80776:(t,n,e)=>{e.r(n),e.d(n,{data:()=>c});const c={key:"v-5221e4f0",path:"/devbook/java/Basic/5.html",title:"Bài 5: Kiểu dữ liệu",lang:"vi",frontmatter:{},excerpt:"",headers:[{level:2,title:"1.Kiểu nguyên thuỷ",slug:"_1-kieu-nguyen-thuy",children:[]},{level:2,title:"2.Kiểu dữ liệu không nguyên thuỷ",slug:"_2-kieu-du-lieu-khong-nguyen-thuy",children:[]}],filePathRelative:"devbook/java/Basic/5.md",git:{updatedTime:1629908316e3,contributors:[{name:"Zenfection",email:"44715845+Zenfection1412@users.noreply.github.com",commits:1}]}}},17441:(t,n,e)=>{e.r(n),e.d(n,{default:()=>d});const c=(0,e(66252).uE)('<h1 id="bai-5-kieu-du-lieu" tabindex="-1"><a class="header-anchor" href="#bai-5-kieu-du-lieu" aria-hidden="true">#</a> Bài 5: Kiểu dữ liệu</h1><p>Như bạn đã biết thì các biến sẽ được định kiểu dữ liệu như <code>int</code>, <code>float</code>, <code>char</code> ..., có 2 nhóm <strong>kiễu dữ liệu</strong> sau :</p><table><thead><tr><th>☠️ Kiểu dữ liệu Nguyên Thủy<br>(<code>Primary data types</code>)</th><th>🧚 Kiểu dữ liệu không nguyên thủy<br>(<code>Non-Primitive data types</code>)</th></tr></thead><tbody><tr><td><code>byte</code>, <code>short</code>, <code>int</code>, <code>long</code>, <code>float</code></td><td><code>String</code>, <code>Arrays</code>, <code>Classes</code></td></tr></tbody></table><h2 id="_1-kieu-nguyen-thuy" tabindex="-1"><a class="header-anchor" href="#_1-kieu-nguyen-thuy" aria-hidden="true">#</a> 1.Kiểu nguyên thuỷ</h2><p>Là kiểu dữ liệu được định sẵn kích thước, và không có phương thức <strong>bổ sung</strong></p><table><thead><tr><th>Kiểu dữ liệu</th><th>Kích thước</th><th>Mô tả</th></tr></thead><tbody><tr><td>byte</td><td><strong>1</strong> <em>bytes</em></td><td>chứa từ <code>[-128,127]</code></td></tr><tr><td>short</td><td><strong>2</strong> <em>bytes</em></td><td>chứa từ <code>[-32,768,32,767]</code></td></tr><tr><td>int</td><td><strong>4</strong> <em>bytes</em></td><td>chứa từ <code>[-2 tỷ, 2 tỷ]</code></td></tr><tr><td>long</td><td><strong>8</strong> <em>bytes</em></td><td>chứa từ <code>[-9 tỷ tỷ, 9 tỷ tỷ]</code></td></tr><tr><td>float</td><td><strong>4</strong> <em>bytes</em></td><td>chứa số thực, tối đa <strong>7</strong> chữ số thập phân</td></tr><tr><td>double</td><td><strong>8</strong> <em>bytes</em></td><td>chứa số thực, tối đa <strong>15</strong> chữ số thập phân</td></tr><tr><td>boolean</td><td><strong>1</strong> bit</td><td>Chứa giá trị <code>true</code> hoặc <code>false</code></td></tr><tr><td>char</td><td><strong>2</strong> <em>bytes</em></td><td>Chứa 1 ký tự <code>ASCII</code></td></tr></tbody></table><div class="custom-container tip"><p class="custom-container-title">💡 GHI NHỚ</p><ul><li><p><code>1 Byte</code> = <code>8bit</code> và <code>1MB = 1024B</code> nhé các bạn</p></li><li><p><code>B</code> là viết tắt của <code>Byte</code>, còn <code>b</code> là viết tắt của <code>bit</code>, vậy nên <code>4GB</code> với <code>4Gb</code> khác nhau hoàn toàn nhé.</p></li><li><p>Bên trên có khá nhiều kiểu, nhưng bạn chỉ cần nhớ <code>int</code>, <code>boolean</code>, <code>char</code>, <code>double</code> ==&gt; vì những thứ này hay dùng nhất</p></li></ul></div><div class="custom-container warning"><p class="custom-container-title">⚠️ FLOAT VS DOUBLE</p><p>Tuỳ vào mục đích sử dụng của bạn, nếu bạn muốn độ chính xác cao tuyệt đối hãy sử dụng <code>double</code> , nếu bạn không cần độ chính xác quá tỉ mỉ như <em>điểm số sinh viên</em> thì sử dụng <code>float</code>.</p></div><div class="custom-container tip"><p class="custom-container-title">💡 BIỂU THỊ LŨY THỪA</p><p>Bạn có thể sử dụng <code>e</code> để biểu thị cho luỹ thừa của 10</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">float</span> f1 <span class="token operator">=</span> <span class="token number">35e3f</span><span class="token punctuation">;</span>\n<span class="token keyword">double</span> d1 <span class="token operator">=</span> <span class="token number">12E4d</span><span class="token punctuation">;</span>\n<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>f1<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>d1<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">/*35000.0\n  120000.0 */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></div><h2 id="_2-kieu-du-lieu-khong-nguyen-thuy" tabindex="-1"><a class="header-anchor" href="#_2-kieu-du-lieu-khong-nguyen-thuy" aria-hidden="true">#</a> 2.Kiểu dữ liệu không nguyên thuỷ</h2><p>Được gọi là kiểu <code>tham chiếu</code> vì chúng <code>tham chiếu</code> đến các <code>Objects</code> (<em>đối tượng</em>).</p><div class="custom-container tip"><p class="custom-container-title">😄 FACT về String</p><p>Thật ra <code>String</code> là một kiểu dữ liệu không nguyên thuỷ, bởi vì nó như một <code>Object</code> (<em>đối tượng</em>), và nó có thể chứa nhiều kiểu dữ liệu.</p></div><p><strong>Sử khác nhau giữa nguyên thuỷ và không nguyên thuỷ</strong>:</p><table><thead><tr><th></th><th>Nguyên thuỷ</th><th>Không Nguyên thuỷ</th></tr></thead><tbody><tr><td>Khởi tạo</td><td>được xác định trước trong <code>Java</code></td><td>được tạo bởi lập trình viên</td></tr><tr><td>Giá trị</td><td>luôn luôn có giá trị</td><td>có thể không có giá trị gọi là <code>null</code></td></tr><tr><td>Cú pháp</td><td>bắt đầu bằng chữ <strong>thường</strong> : <code>int</code>, <code>float</code>...</td><td>bắt đầu bằng chữ <strong>hoa</strong> : <code>String</code>,<code>Array</code>...</td></tr><tr><td>Kích thước</td><td>Phụ thuộc vào <strong>kiểu dữ liệu</strong></td><td>Có cùng kích thước với nhau</td></tr></tbody></table><blockquote><p>⚠️ Đó là lý do bạn khai báo <code>String</code> phải viết hoa chữ cái đầu đấy.</p></blockquote>',15),d={render:function(t,n){return c}}}}]);
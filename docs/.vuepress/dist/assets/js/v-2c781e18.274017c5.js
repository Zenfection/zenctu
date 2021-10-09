"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9420],{1544:(e,n,c)=>{c.r(n),c.d(n,{data:()=>t});const t={key:"v-2c781e18",path:"/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/6.html",title:"Bài 6: Đường đi và Chu trình",lang:"vi",frontmatter:{},excerpt:"",headers:[{level:2,title:"1.Định nghĩa",slug:"_1-đinh-nghia",children:[{level:3,title:"Đường đi",slug:"đuong-đi",children:[]},{level:3,title:"Chu trình",slug:"chu-trinh",children:[]},{level:3,title:"Ví dụ",slug:"vi-du",children:[]},{level:3,title:"Liên thông",slug:"lien-thong",children:[]}]},{level:2,title:"2. Định lý",slug:"_2-đinh-ly",children:[{level:3,title:"Đường đi giữa 2 đỉnh bậc lẻ",slug:"đuong-đi-giua-2-đinh-bac-le",children:[]},{level:3,title:"Số cạnh của đồ thị",slug:"so-canh-cua-đo-thi",children:[]}]},{level:2,title:"3.Tính chất",slug:"_3-tinh-chat",children:[]}],filePathRelative:"cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/6.md",git:{updatedTime:1630339993e3,contributors:[{name:"Zenfection",email:"44715845+Zenfection1412@users.noreply.github.com",commits:3}]}}},87891:(e,n,c)=>{c.r(n),c.d(n,{default:()=>b});var t=c(66252);const o=(0,t._)("h1",{id:"bai-6-đuong-đi-va-chu-trinh",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#bai-6-đuong-đi-va-chu-trinh","aria-hidden":"true"},"#"),(0,t.Uk)(" Bài 6: Đường đi và Chu trình")],-1),h=(0,t._)("p",null,[(0,t._)("img",{src:"https://raw.githubusercontent.com/Zenfection/Image/master/2021/08/12-16-19-36-icons8-movie_beginning.png",width:"30"}),(0,t.Uk)(" Tham khảo Video sau đây :")],-1),i=(0,t._)("div",{class:"videoZen"},[(0,t._)("iframe",{width:"640",height:"480",src:"https://www.youtube.com/embed/EOmKGQOtjEI?list=PLZDIOVvUyYVxdqTsJ9yvg9TSv4TnQoglO",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})],-1),d=(0,t.uE)('<h2 id="_1-đinh-nghia" tabindex="-1"><a class="header-anchor" href="#_1-đinh-nghia" aria-hidden="true">#</a> 1.Định nghĩa</h2><h3 id="đuong-đi" tabindex="-1"><a class="header-anchor" href="#đuong-đi" aria-hidden="true">#</a> Đường đi</h3><ul><li><p>Đường đi từ <code>u</code> với <code>v</code> trong một <code>đồ thị vô hướng</code> là một dãy cạnh <code>e₁</code>, <code>e₂</code>..<code>eₙ</code> của đồ thị sao cho <code>f(e₁)</code> = {<code>x₀</code>,<code>x₁</code>}, <code>f(e₂)</code> = {<code>xₙ₋₁</code>,<code>xₙ</code>} với <code>x₀</code> = <code>u</code> và <code>xₙ</code>=<code>v</code></p></li><li><p>Khi đồ thị là đơn, ta ký hiệu đường đi này bằng dãy <code>x₀</code>,<code>x₁</code>..<code>xₙ</code></p></li></ul><h3 id="chu-trinh" tabindex="-1"><a class="header-anchor" href="#chu-trinh" aria-hidden="true">#</a> Chu trình</h3><ul><li><p><strong>Đường đi</strong> được gọi là <strong>chu trình</strong> (<code>cycle/circuit</code>) nếu nó bắt đầu và kết thúc tại một đỉnh (<em>nghĩa là <code>u</code>=<code>v</code></em>)</p></li><li><p><strong>Đường đi</strong> hay <strong>chu trình</strong> gọi là đơn nếu nó không đi qua cugn2 một cạnh quá một lần</p></li></ul><h3 id="vi-du" tabindex="-1"><a class="header-anchor" href="#vi-du" aria-hidden="true">#</a> Ví dụ</h3><blockquote><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/08/30-21-06-03-output-onlinepngtools (1).png" width="150"></blockquote><ul><li><p>{<code>a</code>,<code>b</code>,<code>c</code>,<code>e</code>,<code>d</code>} là đường đi có độ dài là <code>4</code></p><blockquote><p><code>a-b</code>, <code>b-c</code>, <code>c-e</code>, <code>e-d</code> tồn tại cạnh</p></blockquote></li><li><p>{<code>a</code>,<code>b</code>,<code>e</code>,<code>d</code>} không là <strong>đường đi</strong>.</p><blockquote><p><code>b-c</code> không tồn tại cạnh</p></blockquote></li><li><p>{<code>a</code>,<code>b</code>,<code>c</code>,<code>e</code>,<code>a</code>} là một <strong>chu trình</strong></p><blockquote><p><code>a-b</code>, <code>b-c</code>, <code>c-e</code>, <code>e-a</code> là cạnh</p><p>đỉnh <code>a</code> đầu cuối giống nhau</p></blockquote></li><li><p>{<code>c</code>,<code>e</code>,<code>d</code>,<code>e</code>,<code>c</code>} không phải là một <strong>đường đi</strong> đơn</p><blockquote><p>nó là chu trình nhưng không phải đường đi đơn vì :</p><p>=&gt; <code>e-d</code> và <code>d-e</code> là một cạnh và xuất hiện 2 lần</p></blockquote></li></ul><div class="custom-container tip"><p class="custom-container-title">📇 Kiến thức Thêm</p><p>Nếu <code>2</code> đồ thị có các chu trình cùng độ dài <code>k</code> với nhau, với <code>k &gt; 2</code></p><p>=&gt; 2 đồ thị này gọi là <strong>đẳng cấu với nhau</strong></p></div><h3 id="lien-thong" tabindex="-1"><a class="header-anchor" href="#lien-thong" aria-hidden="true">#</a> Liên thông</h3><p>Đường đi giữa mọi cặp đình phân biệt của đồ thị gọi là <strong>liên thông</strong> (<code>connected</code>) ngược lại thì gọi là <strong>không liên thông</strong> (<code>disconnected</code>)</p><blockquote><p>Ví dụ :</p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/08/30-21-25-05-output-onlinepngtools (2).png" width="500px"></blockquote><div class="custom-container tip"><p class="custom-container-title">📇 Kiến thức Thêm</p><p>Đồ thị <strong>không liên thông</strong> sẽ bao gồm nhiều đồ thị con <strong>liên thông</strong></p><p>Các đồ thị con này gọi là <strong>thành phần liên thông</strong> (<code>connected component</code>)</p></div><h2 id="_2-đinh-ly" tabindex="-1"><a class="header-anchor" href="#_2-đinh-ly" aria-hidden="true">#</a> 2. Định lý</h2><h3 id="đuong-đi-giua-2-đinh-bac-le" tabindex="-1"><a class="header-anchor" href="#đuong-đi-giua-2-đinh-bac-le" aria-hidden="true">#</a> Đường đi giữa 2 đỉnh bậc lẻ</h3><p>Nếu đồ thị <code>G</code> (<em>không quan tâm</em> <strong>liên thông</strong> <em>hay không</em>) có đúng <code>2</code> đỉnh bậc lẻ, chắc chắn sẽ có đường nói 2 đỉnh này</p>',16),l={class:"custom-container details"},a=(0,t._)("summary",null,[(0,t.Uk)("📝 "),(0,t._)("b",null,"Chứng minh")],-1),r=(0,t._)("li",null,[(0,t._)("p",null,[(0,t._)("strong",null,"TH1"),(0,t.Uk)(" : "),(0,t._)("code",null,"G"),(0,t.Uk)(" liên thông : rõ ràng có đường nối "),(0,t._)("code",null,"2"),(0,t.Uk)(" đỉnh bậc lẻ này")])],-1),g=(0,t._)("p",null,[(0,t._)("strong",null,"TH2"),(0,t.Uk)(" : "),(0,t._)("code",null,"G"),(0,t.Uk)(" không liên thông: các thành phần liên thông của "),(0,t._)("code",null,"G"),(0,t.Uk)(" là một đồ thị.`")],-1),u=(0,t.Uk)("=> Do đó, theo "),s=(0,t.Uk)("định lý về số đỉnh bậc lẻ"),p=(0,t.Uk)(" => 2 đỉnh này phải thuộc về cùng một thành phần liên thông => có đường nối"),m=(0,t.uE)('<h3 id="so-canh-cua-đo-thi" tabindex="-1"><a class="header-anchor" href="#so-canh-cua-đo-thi" aria-hidden="true">#</a> Số cạnh của đồ thị</h3><p>Số cạnh tối đa của một đồ thị không liên thông <code>G</code> gồm <code>n</code> đỉnh là</p><div class="custom-container tip"><p class="custom-container-title">💡 GHI NHỚ</p><br><img src="https://render.githubusercontent.com/render/math?math=\\frac{(n-k)(n-k+1)}{2}" width="150"></div><h2 id="_3-tinh-chat" tabindex="-1"><a class="header-anchor" href="#_3-tinh-chat" aria-hidden="true">#</a> 3.Tính chất</h2><p>Đồ thị có hướng được gọi là :</p><table><thead><tr><th>Liên thông mạnh</th><th>Liên thông yếu</th><th>Liên thông một phần</th></tr></thead><tbody><tr><td>đường đi từ <code>a</code> tới <code>b</code> và từ <code>b</code> tới <code>a</code> với mọi cặp đỉnh <code>a</code> và <code>b</code> của đồ thị</td><td>có đường đi giữa <code>2</code> đỉnh bất kỳ của đồ thị vô hướng nền</td><td>mọi cặp đỉnh <code>a</code> và <code>b</code> bất kỳ, có ít nhất một đỉnh đến được đỉnh còn lại</td></tr></tbody></table>',6),b={render:function(e,n){const c=(0,t.up)("RouterLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[o,h,i,d,(0,t._)("details",l,[a,(0,t._)("ul",null,[r,(0,t._)("li",null,[g,(0,t._)("p",null,[u,(0,t.Wm)(c,{to:"/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/3.html#b-dinh-ly-ve-so-dinh-bac-le"},{default:(0,t.w5)((()=>[s])),_:1}),p])])])]),m],64)}}}}]);
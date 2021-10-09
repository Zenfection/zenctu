"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5426],{71782:(t,n,e)=>{e.r(n),e.d(n,{data:()=>c});const c={key:"v-0f91610e",path:"/cosonganh/CT112-Mang_may_tinh/Tailieu/Chapter2/6.html",title:"Bài 6: Mô hình tham khảo OSI",lang:"vi",frontmatter:{},excerpt:"",headers:[],filePathRelative:"cosonganh/CT112-Mang_may_tinh/Tailieu/Chapter2/6.md",git:{updatedTime:1630083235e3,contributors:[{name:"Zenfection",email:"44715845+Zenfection1412@users.noreply.github.com",commits:2}]}}},75730:(t,n,e)=>{e.r(n),e.d(n,{default:()=>d});var c=e(66252);const i=(0,c._)("h1",{id:"bai-6-mo-hinh-tham-khao-osi",tabindex:"-1"},[(0,c._)("a",{class:"header-anchor",href:"#bai-6-mo-hinh-tham-khao-osi","aria-hidden":"true"},"#"),(0,c.Uk)(" Bài 6: Mô hình tham khảo OSI")],-1),o=(0,c._)("p",null,[(0,c.Uk)("Tham khảo "),(0,c._)("code",null,"Video"),(0,c.Uk)(" sau đây :")],-1),a=(0,c._)("div",{class:"videoZen"},[(0,c._)("iframe",{width:"768",height:"480",src:"https://www.youtube.com/embed/QLVoI5tVnhU",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})],-1),r=(0,c.uE)('<p>Vào năm <code>1983</code>, <code>ISO</code> đã phát triển một mô hình cho phép hai máy tính có thể gởi và nhận dữ liệu cho nhau dựa trên các phân tầng lớp với mỗi tầng đảm nhiệm vụ nhất định ==&gt; Đó gọi là mô hình <code>OSI</code></p><p>Gồm có <code>7</code> tầng :</p><details class="custom-container details"><summary>👩🏾‍💻 <b>Tầng 7: ứng dụng</b> (<code>Application Layer</code>)</summary><p>Cung cấp ứng dụng truy xuất tới dịch vụ mạng.</p><p><strong>Ví dụ</strong>: Trình duyệt, Mail Server, FTP Server...</p></details><details class="custom-container details"><summary>👩🏾‍💻 <b>Tầng 6: trình bày</b> (<code>Presentation Layer</code>)</summary><p>Đảm bảo các máy tính có kiểu định dạng dữ liệu khác nhau vẫn có thể trao đổi thông tin cho nhau</p></details><details class="custom-container details"><summary>👩🏾‍💻 <b>Tầng 5: giao dịch</b> (<code>Session Layer</code>)</summary><p>Cho phép các ứng dụng thiết lập, sử dụng và xóa kênh giao tiếp giữa chúng</p></details><details class="custom-container details"><summary>👩🏾‍💻 <b>Tầng 4: vận chuyển</b> (<code>Transport Layer</code>)</summary><p>Đảm bảo truyền tải dữ liệu giữa các quá trình (<em>dữ liệu gửi đi đảm bảo không có lỗi</em>)</p></details><details class="custom-container details"><summary>👩🏾‍💻 <b>Tầng 3: mạng</b> (<code>Network Layer</code>)</summary><p>Đảm bảo các gói tin dữ liệu có thể truyền từ máy tính này đến máy tính kia cho dù không có đường truyền vật lý trực tiếp giữa chúng</p></details><details class="custom-container details"><summary>👩🏾‍💻 <b>Tầng 2: liên kết dữ liệu</b> (<code>Data-Link Layer</code>)</summary><p>Dảm bảo truyền tải các khung dữ liệu (Frame) giữa hai máy tính có đường truyền vật lý nối trực tiếp với nhau.</p></details><details class="custom-container details"><summary>👩🏾‍💻 <b>Tầng 1: vật lý</b> (<code>Data-Link Layer</code>)</summary><p>Điều khiển việc truyền tải thật sự các bit trên đường truyền vật lý.</p><blockquote><p>Nó định nghĩa các tín hiệu điện, trạng thái đường truyền, phương pháp mã hóa dữ liệu, các loại đầu nối được sử dụng.</p></blockquote></details><div class="custom-container tip"><p class="custom-container-title">💡 GHI NHỚ</p><p>Mỗi tầng sẽ có đơn vị truyền dữ liệu riêng :</p><ul><li><p><strong>Tầng vật lý</strong>: <code>bit</code></p></li><li><p><strong>Tầng liên kết dữ liệu</strong>: Khung (<code>Frame</code>)</p></li><li><p><strong>Tầng Mạng</strong>: Gói tin (<code>Packet</code>)</p></li><li><p><strong>Tầng vận chuyển</strong>: Đoạn (<code>Segment</code>)</p></li></ul></div><div class="custom-container tip"><p class="custom-container-title"><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/08/02-22-22-32-icons8-object.png" width="25"> MÔ HÌNH</p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/08/08-16-25-19-233894522_526540485293011_3540421432671892266_n-removebg-preview.png"></div><div class="custom-container warning"><p class="custom-container-title">⚠️ LƯU Ý</p><p>Để thực hiện các chức năng ở <code>tầng 3</code> và <code>tầng 4</code> trong mô hình <code>OSI</code>, mỗi hệ thống mạng sẽ có các <code>protocol</code> riêng:</p><ul><li><p><code>UNIX</code>: Tầng 3 dùng giao thức <code>IP</code>, tầng 4 giao thức <code>TCP/UDP</code></p></li><li><p><code>Netware</code>: Tầng 3 dùng giao thức <code>IPX</code>, tầng 4 giao thức <code>SPX</code></p></li><li><p><code>Microsoft</code> định nghĩa giao thức <code>NETBEUI</code> để thực hiện chức năng của cả tầng 3 và tầng 4</p></li></ul><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/08/08-16-28-56-233564126_353404759786046_2065350492755766888_n-removebg-preview.png" width="315"></div>',12),d={render:function(t,n){return(0,c.wg)(),(0,c.iD)(c.HY,null,[i,o,a,r],64)}}}}]);
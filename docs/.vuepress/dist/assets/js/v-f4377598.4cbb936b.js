"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9728],{9757:(n,e,s)=>{s.r(e),s.d(e,{data:()=>t});const t={key:"v-f4377598",path:"/nhapmon/CT179-Quan_tri_he_thong/Thuchanh/4.html",title:"Buổi 4 - Cấu hình mạng và cài đặt SSH,FTP,Web Server",lang:"vi",frontmatter:{},excerpt:"",headers:[{level:2,title:"1. Cài đặt CentOS",slug:"_1-cai-đat-centos",children:[{level:3,title:"Câu 1.1",slug:"cau-1-1",children:[]}]},{level:2,title:"2.Cấu hình mạng",slug:"_2-cau-hinh-mang",children:[{level:3,title:"Câu 2.1",slug:"cau-2-1",children:[]},{level:3,title:"Câu 2.2",slug:"cau-2-2",children:[]},{level:3,title:"Câu 2.3",slug:"cau-2-3",children:[]},{level:3,title:"Câu 2.4",slug:"cau-2-4",children:[]}]},{level:2,title:"3.Thông tin kết nối mạng",slug:"_3-thong-tin-ket-noi-mang",children:[{level:3,title:"Câu 3.1",slug:"cau-3-1",children:[]},{level:3,title:"Câu 3.2",slug:"cau-3-2",children:[]}]},{level:2,title:"4.Điều khiển từ xa với SSH",slug:"_4-đieu-khien-tu-xa-voi-ssh",children:[{level:3,title:"Câu 4.1",slug:"cau-4-1",children:[]},{level:3,title:"Câu 4.2",slug:"cau-4-2",children:[]}]},{level:2,title:"5. Cài đặt và cấu hình dịch vụ FTP",slug:"_5-cai-đat-va-cau-hinh-dich-vu-ftp",children:[{level:3,title:"Câu 5.1",slug:"cau-5-1",children:[]},{level:3,title:"Câu 5.2",slug:"cau-5-2",children:[]},{level:3,title:"Câu 5.3",slug:"cau-5-3",children:[]},{level:3,title:"Câu 5.4",slug:"cau-5-4",children:[]},{level:3,title:"Câu 5.5",slug:"cau-5-5",children:[]},{level:3,title:"Câu 5.6",slug:"cau-5-6",children:[]},{level:3,title:"Câu 5.7",slug:"cau-5-7",children:[]}]},{level:2,title:"6. Cài đặt Apache web server",slug:"_6-cai-đat-apache-web-server",children:[{level:3,title:"Câu 6.1",slug:"cau-6-1",children:[]},{level:3,title:"Câu 6.2",slug:"cau-6-2",children:[]},{level:3,title:"Câu 6.3",slug:"cau-6-3",children:[]}]}],filePathRelative:"nhapmon/CT179-Quan_tri_he_thong/Thuchanh/4.md",git:{updatedTime:163056631e4,contributors:[{name:"Zenfection",email:"44715845+Zenfection1412@users.noreply.github.com",commits:2}]}}},49614:(n,e,s)=>{s.r(e),s.d(e,{default:()=>R});var t=s(66252);const a=(0,t.uE)('<h1 id="buoi-4-cau-hinh-mang-va-cai-đat-ssh-ftp-web-server" tabindex="-1"><a class="header-anchor" href="#buoi-4-cau-hinh-mang-va-cai-đat-ssh-ftp-web-server" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/26-12-06-18-NETWORK.png"> Buổi 4 - Cấu hình mạng và cài đặt <code>SSH</code>,<code>FTP</code>,<code>Web Server</code></h1><h2 id="_1-cai-đat-centos" tabindex="-1"><a class="header-anchor" href="#_1-cai-đat-centos" aria-hidden="true">#</a> 1. Cài đặt CentOS</h2><h3 id="cau-1-1" tabindex="-1"><a class="header-anchor" href="#cau-1-1" aria-hidden="true">#</a> Câu 1.1</h3><blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png" width="30"> Thực hiện cài đặt <code>CentOS 6</code> (<em>hoặc <code>CentOS 7</code>, <code>8</code></em>) vào máy tính cá nhân (<em>hoặc máy ảo</em>) của bạn và thực hiện lệnh <code>ifconfig -a</code> để xem cấu hình mạng hiện tại của máy (<em>Chụp màn hình minh hoạ</em><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png" alt="icons8screenshotpng">)</p></blockquote>',4),c=(0,t.Uk)("Link file ISO "),o={href:"https://www.centos.org/download/",target:"_blank",rel:"noopener noreferrer"},i=(0,t.Uk)("CentOS 8"),r=(0,t.uE)('<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-22-26-45-Screenshot from 2021-05-03 17-24-28.png" alt="Screenshot from 2021-05-03 17-24-28.png"></p><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-22-27-08-Screenshot from 2021-05-03 17-24-37.png" alt="Screenshot from 2021-05-03 17-24-37.png"></p><h2 id="_2-cau-hinh-mang" tabindex="-1"><a class="header-anchor" href="#_2-cau-hinh-mang" aria-hidden="true">#</a> 2.Cấu hình mạng</h2><div class="custom-container tip"><p class="custom-container-title">💡 FACT</p><p>Một máy tính được kết nối tới mạng cần phải được thiết lập các thông số cho phù hợp. Các thông số này được lưu lại trong file cấu hình trong <code>Linux</code>.</p></div><p>Thực hiện các công việc sau (<em>Chụp màn hình minh hoạ</em><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png" alt="icons8screenshotpng">)</p><h3 id="cau-2-1" tabindex="-1"><a class="header-anchor" href="#cau-2-1" aria-hidden="true">#</a> Câu 2.1</h3><blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png" width="30"> Đổi cấu hình <code>card mạng</code> của máy ảo sang <code>Bridged Adapter</code></p><ul><li><p>Khắc phục lỗi <code>card mạng</code> chỉ hiển thị <code>&quot;not selected&quot;</code> + <code>&quot;no bridged network adapter is current selected&quot;</code>.</p><p>Click chuột phải vào <code>card mạng</code> của máy <code>Window 10</code> ⇨ chọn <code>&quot;Open NetWork and Internet Settings&quot;</code> ⇨<code>&quot;Change adapter options&quot;</code> ⇨ Click chuột phải vào <code>card mạng</code> ⇨ <code>Properties</code> ⇨ Click chọn <code>Vitural NDIS6 Bridged Networking</code> ⇨ Chọn <code>&quot;OK&quot;</code></p><img src="https://lh5.googleusercontent.com/fG-BULssU2BjjHpdtCNQ2CJMxp2LKr556uvdybQ7FK-XwSSLjfjuRakjMgRXNCsc3_L2fbgsxC7ZSsN3fQXu0m2GG1nWxKSSAxU89mUyLqHIbPdQzv5PdoJ0jdYN_Af9jSJ7T8i8" title="" alt="" width="332"></li></ul></blockquote><p>==&gt; Sử dụng máy thật nên không làm câu này.</p><h3 id="cau-2-2" tabindex="-1"><a class="header-anchor" href="#cau-2-2" aria-hidden="true">#</a> Câu 2.2</h3><blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png" width="30"> Cầu hình kết nối <code>Ethernet</code> (<em>IP,net mask...</em>)</p><p><code>nano /etc/sysconfig/network-scripts/ifcfg-XXX</code></p><p>(<em>XXX là tên giao tiếp mạng, ví dụ: <code>eth0</code></em>)</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">DEVICE</span><span class="token operator">=</span><span class="token operator">&lt;</span>tên card mạng<span class="token operator">&gt;</span>\n<span class="token assign-left variable">IPADDR</span><span class="token operator">=</span><span class="token operator">&lt;</span>địa chỉ IP<span class="token operator">&gt;</span>\n<span class="token assign-left variable">NETMASK</span><span class="token operator">=</span><span class="token operator">&lt;</span>mặt nạ mạng<span class="token operator">&gt;</span>\n<span class="token assign-left variable">GATEWAY</span><span class="token operator">=</span><span class="token operator">&lt;</span>địa chỉ của GATEWAY<span class="token operator">&gt;</span>\n<span class="token assign-left variable">DNS1</span><span class="token operator">=</span><span class="token operator">&lt;</span>địa chỉ DNS server <span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>\n<span class="token assign-left variable">DNS2</span><span class="token operator">=</span><span class="token operator">&lt;</span>địa chỉ DNS server <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>\n<span class="token assign-left variable">ONBOOT</span><span class="token operator">=</span>yes\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></blockquote><p><code>Ethernet</code> đang sử dụng có device là <code>eno1</code> gõ lệnh :</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">nano</span> /etc/sysconfig/network-scripts/ifcfg-eno1\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-22-30-54-Screenshot from 2021-05-03 17-36-52.png" width="600"><div class="custom-container tip"><p class="custom-container-title">💡 KIẾN THỨC</p><ul><li><p>Tìm <code>IP</code> đang sử dụng ==&gt; Sử dụng lệnh <code>curl ifconfig.me</code></p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-22-32-57-Screenshot from 2021-05-03 17-40-18.png" title="" alt="Screenshot from 2021-05-03 17-40-18.png" width="297"></li><li><p>Tìm <code>Default Gateway</code> đang sử dụng ==&gt; Gõ lệnh <code>route -n</code></p><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-22-43-12-Screenshot from 2021-05-03 17-40-39.png" alt="Screenshot from 2021-05-03 17-40-39.png"></p></li></ul></div><h3 id="cau-2-3" tabindex="-1"><a class="header-anchor" href="#cau-2-3" aria-hidden="true">#</a> Câu 2.3</h3><blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png" width="30"> Để khởi động lại dịch vụ mạng, thực hiện lệnh:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">service</span> network restart\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-22-27-43-Screenshot from 2021-05-03 17-42-36.png" alt="Screenshot from 2021-05-03 17-42-36.png"></p><h3 id="cau-2-4" tabindex="-1"><a class="header-anchor" href="#cau-2-4" aria-hidden="true">#</a> Câu 2.4</h3><blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png" width="30"> Để kiểm tra kết nối mạng, sử dụng lệnh:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ping</span> <span class="token operator">&lt;</span>IP của máy vật lý<span class="token operator">&gt;</span>\n<span class="token function">ping</span> google.com\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></blockquote><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-03-34-Screenshot from 2021-05-03 17-44-33.png" width="525"><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-03-37-Screenshot from 2021-05-03 17-48-46.png" alt="Screenshot from 2021-05-03 17-48-46.png"></p><h2 id="_3-thong-tin-ket-noi-mang" tabindex="-1"><a class="header-anchor" href="#_3-thong-tin-ket-noi-mang" aria-hidden="true">#</a> 3.Thông tin kết nối mạng</h2><div class="custom-container tip"><p class="custom-container-title">💡 KIẾN THỨC</p><p>Thực hiện lệnh <code>ifconfig -a</code> (<em>Chụp màn hình minh hoạ</em><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png" alt="icons8screenshotpng">), quan sát và tìm hiểu ý nghĩa các thông tin có trong kết quả trả về. Trả lời các câu hỏi</p></div><h3 id="cau-3-1" tabindex="-1"><a class="header-anchor" href="#cau-3-1" aria-hidden="true">#</a> Câu 3.1</h3><blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png" width="30"> Địa chỉ <code>MAC</code>, địa chỉ <code>IP</code>, địa chỉ mạng, địa chỉ <code>boardcast</code> của kết nối <code>eth0</code></p></blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-04-09-Screenshot from 2021-05-03 18-37-12.png" alt="Screenshot from 2021-05-03 18-37-12.png"></p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-04-37-Screenshot from 2021-05-03 18-37-32.png" title="" alt="Screenshot from 2021-05-03 18-37-32.png" width="632"><h3 id="cau-3-2" tabindex="-1"><a class="header-anchor" href="#cau-3-2" aria-hidden="true">#</a> Câu 3.2</h3><blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png" width="30"> Nối kết <code>eth0</code> đã gửi và nhận bao nhiêu gói tin ?</p></blockquote><p>Do máy cá nhân sử dụng <code>card wifi</code> nên device là <code>wlp1s0</code></p><ul><li><p><code>TX</code> (Transmit) : đã gửi đi <code>11.4MB</code> dữ liệu <code>packets</code></p></li><li><p><code>RX</code> (Receiver) : đã nhận <code>367.5MB</code> dữ liệu <code>packets</code></p></li></ul><h2 id="_4-đieu-khien-tu-xa-voi-ssh" tabindex="-1"><a class="header-anchor" href="#_4-đieu-khien-tu-xa-voi-ssh" aria-hidden="true">#</a> 4.Điều khiển từ xa với SSH</h2><div class="custom-container tip"><p class="custom-container-title">💡 KIẾN THỨC</p><p><code>SSH</code> (<em>Secure Shell</em>) là một giao thức mạng có <strong>mã hoá</strong> được dùng để thực hiện các giao dịch <strong>an toàn</strong> giữa <code>client</code> và <code>server</code> trên nền tảng <strong>không an toàn</strong>. Trong thực tế, người quản trị hệ thống thường điều khiển các <code>server Linux</code> từ xa thông qua kết nối <code>SSH</code>.</p><p>Có thể chọn một thiếp lập <code>SSH</code> trong hai lựa chọn sau:</p><ul><li><p><code>Vitrual Machine</code> (<em>Máy ảo</em>) : là máy bị điều khiển. Máy này cần được cài <code>SSH Server</code> như <code>OpenSSH</code>, và chạy dịch vụ tương ứng ở cổng nào đó (<em>Thông thường là cổng <code>22</code></em>) để <strong>lắng nghe</strong> các <strong>yêu cầu kết nối</strong>.</p></li><li><p><code>Physical Machine</code> (<em>Máy thật</em>) : Là máy ra lệnh điều khiển. Đối với <code>Linux</code> hệ thống có sẵn một lệnh <code>ssh</code> để thực hiện kết nối. Đối với <code>Windows</code>, ta cần cài thêm <code>SSH Client</code> như <code>PuTTY</code> hay <code>Mobaxterm</code>.</p></li></ul></div><h3 id="cau-4-1" tabindex="-1"><a class="header-anchor" href="#cau-4-1" aria-hidden="true">#</a> Câu 4.1</h3><blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png" width="30"> Cài đặt <code>SSH Server</code></p><p>Thiết lập mạng và ghi lại các địa chỉ <code>IP</code>. Đảm bảo rằng bạn có thể truy cập Internet từ máy ảo :</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ yum <span class="token function">install</span> openssh-server <span class="token comment"># cài đặt openssh</span>\n$ <span class="token function">service</span> sshd start         <span class="token comment"># chạy ssh server </span>\n$ <span class="token function">service</span> sshd status        <span class="token comment"># kiểm tra ssh server chạy chưa</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></blockquote><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-10-08-Screenshot from 2021-05-03 18-44-45.png" width="442"><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-11-40-Screenshot from 2021-05-03 18-45-06.png" alt="Screenshot from 2021-05-03 18-45-06.png"></p><h3 id="cau-4-2" tabindex="-1"><a class="header-anchor" href="#cau-4-2" aria-hidden="true">#</a> Câu 4.2</h3>',38),l=(0,t._)("p",null,[(0,t._)("img",{src:"https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png",width:"30"}),(0,t.Uk)(" Cài đặt "),(0,t._)("code",null,"SSH Server"),(0,t.Uk)(" trên "),(0,t._)("strong",null,"máy vật lý")],-1),p=(0,t.Uk)("Nếu sử dụng "),h=(0,t._)("img",{src:"https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/26-12-36-59-icons8-windows8.png",alt:"icons8-windows8.png"},null,-1),u=(0,t.Uk)(),d=(0,t._)("code",null,"Window 10",-1),g=(0,t.Uk)(" : Cài đặt "),m={href:"https://putty.org/",target:"_blank",rel:"noopener noreferrer"},b=(0,t._)("strong",null,"PuTTY",-1),k=(0,t.Uk)(", nhập các thông số và thực hiện "),v=(0,t._)("strong",null,"kết nối",-1),f=(0,t.uE)('<li><p>Nếu sử dụng <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/26-12-37-07-icons8-linux.png" alt="icons8-linux.png"> <code>Linux</code> :</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">ssh</span> <span class="token operator">&lt;</span>username<span class="token operator">&gt;</span>@<span class="token operator">&lt;</span>serveraddress<span class="token operator">&gt;</span> <span class="token comment"># kết nối ssh server</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>==&gt; Sử dụng lệnh <code>ifconfig -a</code> để kiểm tra và quản sát.</p></li>',1),w=(0,t.uE)('<p>Tài khoản đang sử dụng là <code>b19909935</code> và địa chỉ <code>server</code></p><div class="custom-container tip"><p class="custom-container-title">💡 FACT</p><p>Lấy địa chỉ <code>server</code> ở lệnh <code>ifconfig -a</code></p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-17-35-Screen Shot 2021-05-03 at 23.16.23.png" width="600"><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-17-51-Screenshot from 2021-05-03 18-47-49.png" width="600"></div><h2 id="_5-cai-đat-va-cau-hinh-dich-vu-ftp" tabindex="-1"><a class="header-anchor" href="#_5-cai-đat-va-cau-hinh-dich-vu-ftp" aria-hidden="true">#</a> 5. Cài đặt và cấu hình dịch vụ FTP</h2><h3 id="cau-5-1" tabindex="-1"><a class="header-anchor" href="#cau-5-1" aria-hidden="true">#</a> Câu 5.1</h3><blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png" width="30"> Cài đặt dịch vụ <code>FTP</code> trên máy <code>CentOS</code> bằng lệnh</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ yum <span class="token function">install</span> vsftpd\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-28-30-Screenshot from 2021-05-03 19-14-23.png" alt="Screenshot from 2021-05-03 19-14-23.png"></p><h3 id="cau-5-2" tabindex="-1"><a class="header-anchor" href="#cau-5-2" aria-hidden="true">#</a> Câu 5.2</h3><blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png" width="30"> Thực hiện lệnh sau cho phép người dùng kết nối vào dịch vụ <code>FTP</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ setsebool -P ftp_home_dir on\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></blockquote><div class="custom-container warning"><p class="custom-container-title">⚠️ LƯU Ý</p><p>Nếu xảy ra lỗi <code>Boolean ftp_home_dir is not defined</code></p><p>==&gt; Hãy sử dụng lệnh sau đây :</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ setsebool -P tftp_home_dir on\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></div><h3 id="cau-5-3" tabindex="-1"><a class="header-anchor" href="#cau-5-3" aria-hidden="true">#</a> Câu 5.3</h3><blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png" width="30"> Cấu hình dịch vụ <code>FTP</code> như sau :</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">nano</span> /etc/vsftpd/vsftpd.conf \n$ <span class="token assign-left variable">anonymous_enable</span><span class="token operator">=</span>NO\n$ <span class="token assign-left variable">local_enable</span><span class="token operator">=</span>YES <span class="token comment"># đã được bật sẵn trong file cấu hình</span>\n$ <span class="token assign-left variable">chroot_local_user</span><span class="token operator">=</span>YES\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-29-46-Screenshot from 2021-05-03 19-18-50.png" alt="Screenshot from 2021-05-03 19-18-50.png"></p><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-29-49-Screenshot from 2021-05-03 19-19-25.png" alt="Screenshot from 2021-05-03 19-19-25.png"></p><h3 id="cau-5-4" tabindex="-1"><a class="header-anchor" href="#cau-5-4" aria-hidden="true">#</a> Câu 5.4</h3><blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png" width="30"> Khởi động lại dịch vụ <code>FTP</code> bằng lệnh sau :</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">service</span> vsftpd start\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></blockquote><p>Sau khi chạy <code>vsftpd</code> sử dụng lệnh <code>service vsftpd status</code> để kiểm tra</p><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-32-42-Screenshot from 2021-05-03 19-30-50.png" alt="Screenshot from 2021-05-03 19-30-50.png"></p><h3 id="cau-5-5" tabindex="-1"><a class="header-anchor" href="#cau-5-5" aria-hidden="true">#</a> Câu 5.5</h3><blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png" width="30"> Tắt tường lửa bằng lệnh như sau :</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">service</span> iptables stop\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></blockquote><p>Cài <code>iptables</code> bằng lệnh <code>yum install iptables-services</code></p><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-32-08-Screenshot from 2021-05-03 19-32-04.png" alt="Screenshot from 2021-05-03 19-32-04.png"></p><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-33-43-Screenshot from 2021-05-03 19-32-18.png" alt="Screenshot from 2021-05-03 19-32-18.png"></p><div class="custom-container tip"><p class="custom-container-title">💡 FACT</p><p>Sử dụng lệnh <code>service iptables status</code> để kiểm tra:</p><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-35-43-Screenshot from 2021-05-03 20-35-25.png" alt="Screenshot from 2021-05-03 20-35-25.png"></p></div><h3 id="cau-5-6" tabindex="-1"><a class="header-anchor" href="#cau-5-6" aria-hidden="true">#</a> Câu 5.6</h3><blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png" width="30"> Trên máy vật lý thực hiện tạo file <code>index.html</code> với nội dung sau :</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token name">doctype</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>utf-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Tổng công ty bánh kẹo Lương Sơn Bạc<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>H1</span><span class="token punctuation">&gt;</span></span>Welcome!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>H1</span><span class="token punctuation">&gt;</span></span> \n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>marquee</span><span class="token punctuation">&gt;</span></span>Designed by B1234567<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>marquee</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></blockquote><p>Sử dụng lênh <code>gedit</code> để tạo file (<em>thực thi ở tài khoản root</em>)</p><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-34-46-Screenshot from 2021-05-03 20-34-32.png" alt="Screenshot from 2021-05-03 20-34-32.png"></p><h3 id="cau-5-7" tabindex="-1"><a class="header-anchor" href="#cau-5-7" aria-hidden="true">#</a> Câu 5.7</h3>',28),S=(0,t._)("img",{src:"https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png",width:"30"},null,-1),C=(0,t.Uk)(" Tải và thực thi một phần mềm "),y=(0,t._)("code",null,"FTP client",-1),q=(0,t.Uk)(" ("),I=(0,t._)("em",null,"Ví dụ:",-1),_=(0,t.Uk)(),x=(0,t._)("img",{src:"https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/26-12-49-19-icons8-filezilla.png",title:"",alt:"icons8-filezilla.png",width:"30"},null,-1),Z=(0,t.Uk)(),T={href:"https://filezilla-project.org/",target:"_blank",rel:"noopener noreferrer"},P=(0,t.Uk)("FileZilla"),U=(0,t.Uk)(" hoặc "),N=(0,t._)("img",{src:"https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/26-12-49-39-WinSCP_Logo.png",title:"",alt:"WinSCP_Logo.png",width:"30"},null,-1),H=(0,t.Uk)(),$={href:"https://winscp.net/eng/download.php",target:"_blank",rel:"noopener noreferrer"},A=(0,t.Uk)("WinSCP"),O=(0,t.Uk)(" ) để kết nối đến dịch vụ "),L=(0,t._)("code",null,"FTP",-1),W=(0,t.Uk)(" trên máy "),F=(0,t._)("code",null,"CentOS",-1),E=(0,t.Uk)(". Sau đó "),M=(0,t._)("strong",null,"upload file",-1),D=(0,t.Uk)(),B=(0,t._)("code",null,"index.html",-1),K=(0,t.Uk)(" lên máy "),X=(0,t._)("code",null,"CentOS",-1),j=(0,t.uE)('<p>Cài <code>FileZilla</code> bằng lệnh <code>yum install filezilla</code></p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-40-11-Screenshot from 2021-05-03 20-36-44.png" width="700"><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-40-47-Screenshot from 2021-05-03 20-38-49.png" width="600"><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-41-45-Screenshot from 2021-05-03 20-39-01.png" width="700"><h2 id="_6-cai-đat-apache-web-server" tabindex="-1"><a class="header-anchor" href="#_6-cai-đat-apache-web-server" aria-hidden="true">#</a> 6. Cài đặt Apache web server</h2><div class="custom-container tip"><p class="custom-container-title">💡 KIẾN THỨC</p><p>Một máy chủ <code>web</code> (<em>web server</em>) là một chương trình chờ đợi các yêu cầu truy cập tài nguyên từ một <code>web client</code> (<em>trình duyệt web</em>). Thông thường. nó sẽ lắng nghe ở cổng <code>80</code>, nhưng cũng có thể cổng <strong>khác</strong> (đó là lý do tại sao một số <code>URL</code> bao gồm số hiệu cổng). Để có thể sinh ra được các trang web với nội dung động, bạn cần có các chương trình hoặc các dịch vụ khác cài đặt vào máy chủ <code>web</code>. <code>Apache</code> là một trong những công nghệ máy chủ <code>web</code> phổ biến nhất, các tập tin cấu hình của <code>Apache</code> nằm trong thư mục <code>/etc/httpd/conf</code>.</p></div><h3 id="cau-6-1" tabindex="-1"><a class="header-anchor" href="#cau-6-1" aria-hidden="true">#</a> Câu 6.1</h3><blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png" width="30"> Cài đặt <code>Apache web server</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ yum <span class="token function">install</span> httpd     <span class="token comment"># cài đặt Apache</span>\n$ <span class="token function">service</span> httpd start   <span class="token comment"># chạy Apache</span>\n$ <span class="token function">service</span> iptables stop <span class="token comment"># tắt tường lửa</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Trên <strong>máy vật lý</strong>, mở trình duyệt web và truy cập vào địa chỉ <code>http://&lt;Địa chỉ IP CentOS&gt;</code> để kiểm chứng trang web vừa tạo.</p></blockquote><p>Sau khi cài đặt và chạy <code>httpd</code>, sử dụng lệnh <code>service httpd status</code> để kiểm tra :</p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-43-12-Screenshot from 2021-05-03 20-41-55.png" width="600"><div class="custom-container warning"><p class="custom-container-title">⚠️ LƯU Ý</p><p>Hãy bảo đảm rằng bạn đã <code>tắt tường lửa</code> bằng lệnh sau :</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">service</span> iptables stop   <span class="token comment">#để tắt tường lửa</span>\n$ <span class="token function">service</span> iptables status <span class="token comment">#kiểm tra trạng thài </span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div><p>Truy cập vào <code>Firefox</code> với đường link <code>http://192.168.2.176</code></p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-49-28-Screenshot from 2021-05-03 20-43-13.png" width="700"><h3 id="cau-6-2" tabindex="-1"><a class="header-anchor" href="#cau-6-2" aria-hidden="true">#</a> Câu 6.2</h3><blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png" width="30"> Nếu bạn muốn tạo một trang <code>web</code> của riêng mình, đầu tiên bạn cần phải đặt chúng vào thư mục <code>/var/www/html</code>, đây là nơi chứa các tài nguyên máy do máy chủ <code>web</code> quản lý và cho phép <code>web client</code> truy cập vào. Tạo thư mục <code>/var/www/html/myweb</code>, sao chép file <code>index.html</code> ở câu <code>5.7</code> vào thư mục <code>/var/www/html/myweb</code></p></blockquote><p>Sử dụng lệnh sau để tạo thư mục <code>myweb</code> ở <code>/var/www/html/</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">mkdir</span> /var/www/html/myweb\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Sử dủng lênh <code>cp</code> để copy file <code>index.html</code> qua <code>/var/www/html/myweb/</code></p><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-50-45-Screenshot from 2021-05-03 20-49-56.png" alt="Screenshot from 2021-05-03 20-49-56.png"></p><h3 id="cau-6-3" tabindex="-1"><a class="header-anchor" href="#cau-6-3" aria-hidden="true">#</a> Câu 6.3</h3><blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png" width="30"> <strong>Trên máy vật lý</strong>, mở trình duyệt <code>web</code> và truy cập vào địa chỉ <code>http://&lt;Địa chỉ IP máy CentOS&gt;/myweb</code> để kiểm chứng trang web vừa tạo.</p></blockquote><p>Dùng <code>Firefox</code> truy cập vào đường link <code>http://192.168.2.176/myweb</code>, file <code>index.html</code> sẽ load</p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-55-04-Screenshot from 2021-05-03 20-50-42.png" width="700">',23),R={render:function(n,e){const s=(0,t.up)("OutboundLink"),R=(0,t.up)("comment");return(0,t.wg)(),(0,t.iD)(t.HY,null,[a,(0,t._)("p",null,[c,(0,t._)("a",o,[i,(0,t.Wm)(s)])]),r,(0,t._)("blockquote",null,[l,(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("p",null,[p,h,u,d,g,(0,t._)("a",m,[b,(0,t.Wm)(s)]),k,v])]),f])]),w,(0,t._)("blockquote",null,[(0,t._)("p",null,[S,C,y,q,I,_,x,Z,(0,t._)("a",T,[P,(0,t.Wm)(s)]),U,N,H,(0,t._)("a",$,[A,(0,t.Wm)(s)]),O,L,W,F,E,M,D,B,K,X])]),j,(0,t.Wm)(R)],64)}}}}]);
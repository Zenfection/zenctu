"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4475],{99232:(t,n,h)=>{h.r(n),h.d(n,{data:()=>i});const i={key:"v-594519dc",path:"/cosonganh/CT112-Mang_may_tinh/Tailieu/Chapter3/2.html",title:"Bài 2: Vấn đề số hoá thông tin",lang:"vi",frontmatter:{},excerpt:"",headers:[{level:2,title:"1. Số hoá văn bản",slug:"_1-so-hoa-van-ban",children:[]},{level:2,title:"2.Số hoá hình ảnh tĩnh",slug:"_2-so-hoa-hinh-anh-tinh",children:[]},{level:2,title:"3.Số hoá âm thanh và phim ảnh",slug:"_3-so-hoa-am-thanh-va-phim-anh",children:[]}],filePathRelative:"cosonganh/CT112-Mang_may_tinh/Tailieu/Chapter3/2.md",git:{updatedTime:1628482149e3,contributors:[{name:"Zenfection",email:"44715845+Zenfection1412@users.noreply.github.com",commits:2}]}}},49066:(t,n,h)=>{h.r(n),h.d(n,{default:()=>a});const i=(0,h(66252).uE)('<h1 id="bai-2-van-đe-so-hoa-thong-tin" tabindex="-1"><a class="header-anchor" href="#bai-2-van-đe-so-hoa-thong-tin" aria-hidden="true">#</a> Bài 2: Vấn đề số hoá thông tin</h1><p>Thông tin tồn tại dưới nhiều hình thức khác nhau. Để xử lý, mà đặc biệt để truyền tải thông tin ta cần phải mã hóa chúng.</p><table><thead><tr><th>Thông tin</th><th>Hệ thống</th><th>Bộ mã hoá</th><th>Bộ giải mã</th><th>Truyền tải</th></tr></thead><tbody><tr><td>Lời nói</td><td>điện thoại</td><td>micro</td><td>loa</td><td>tín hiệu tuần tự hay tín hiệu số</td></tr><tr><td>Ảnh tĩnh</td><td>fax</td><td>scanner</td><td>bộ thông dịch tập tin</td><td>tín hiệu tuần tự hoặc tín hiệu số</td></tr><tr><td>Dữ liệu tin học</td><td>mạng truyền tin</td><td>bộ điều khiển truyền thông</td><td>bộ điều khiển truyền thông</td><td>tín hiệu tuần tự hoặc tín hiệu số</td></tr><tr><td>Truyền hình</td><td>truyền quảng bá</td><td>camera</td><td>bộ thu TV + antene</td><td>Tín hiệu tuấn tự hoặc tín hiểu số</td></tr></tbody></table><p>Trong thời đại chúng ta, thông tin thường được thể hiện dưới dạng các trang tài liệu hỗn hợp, như các trang web, mà ở đó đồng thời có thể thể hiện văn bản, hình ảnh tĩnh, hình ảnh động, phim ảnh,.... Thông tin thực tế được thể hiện dưới dạng đa phương tiện. Mỗi một loại thông tin sở hữu hệ thống mã hóa riêng, nhưng kết quả thì giống nhau: một chuỗi các số 0 và 1. Việc truyền tải thông tin bao gồm việc truyền tải các bit này. Mô hình mã hóa như sau:</p><img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/08/08-16-38-14-output-onlinepngtools.png" alt="output-onlinepngtools.png" width="395"><h2 id="_1-so-hoa-van-ban" tabindex="-1"><a class="header-anchor" href="#_1-so-hoa-van-ban" aria-hidden="true">#</a> 1. Số hoá văn bản</h2><p>Hệ thống mã hóa đầu tiên liên quan đến văn bản là hệ thống mã Morse, được sử dụng rộng rãi trước khi có máy tính. Đây là một bộ mã nhị phân sử dụng 2 ký tự chấm (.) và gạch (-) để số hóa văn bản (có thể xem tương đương với các bit 0 và 1).</p><p>Tuy nhiên nó có nhiều điểm bất lợi sau:</p><ul><li><p>Nghèo nàn: ít các ký tự được mã hóa;</p></li><li><p>Nó sử dụng sự phối hợp của các dấu gạch và dấu chấm với độ dài khác nhau, điều này không được tiện lợi đặc biệt cho các ký tự ctần suất xuất hiện giống nhau.</p></li></ul><p>Chính vì thế nó không được dùng để số hóa thông tin. Nếu chúng ta qui định rằng số bit dùng để mã hóa cho một ký tự phải bằng nhau thì với p bit ta có thể mã hóa cho 2p ký tự. Hệ thống mã hóa như thế đã được dùng trong quá khứ.</p><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/08/08-16-40-19-123451sad.png" alt="123451sad.png"></p><h2 id="_2-so-hoa-hinh-anh-tinh" tabindex="-1"><a class="header-anchor" href="#_2-so-hoa-hinh-anh-tinh" aria-hidden="true">#</a> 2.Số hoá hình ảnh tĩnh</h2><p>Ảnh số thật sự là một ảnh được vẽ nên từ các đường thẳng và mỗi đường thẳng được xây dựng bằng các điểm. Một ảnh theo chuẩn VGA với độ phân giải 640x480 có nghĩa là một ma trận gồm 480 đường ngang và mỗi đường gồm 640 điểm ảnh (pixel).</p><img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/08/08-16-41-21-download__1_-removebg-preview.png" alt="download__1_-removebg-preview.png" width="448"><h2 id="_3-so-hoa-am-thanh-va-phim-anh" tabindex="-1"><a class="header-anchor" href="#_3-so-hoa-am-thanh-va-phim-anh" aria-hidden="true">#</a> 3.Số hoá âm thanh và phim ảnh</h2><p>Dữ liệu kiểu âm thanh và phim ảnh thuộc kiểu tín hiệu tuần tự. Các tín hiệu tuần tự được số hóa theo cách thức sau đây:</p><ul><li><p>B1-Lấy mẫu : Tín hiệu được lấy mẫu: với tần số f, ta đo biên độ của tín hiệu, như thế ta được một loạt các số đo.</p><img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/08/08-16-44-28-123asdas12.png" alt="123asdas12.png" width="330"></li><li><p>B2-Lượng hoá : Ta xác định một thang đo với các giá trị là lũy thừa của 2 ( 2ᵖ ) và thực hiện việc lấy tương ứng các số đo vào giá trị thanh đo.</p><img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/08/08-16-45-12-asd21.png" alt="asd21.png" width="341"></li><li><p>B3-Mã hoá : Mỗi một giá trị sau đó được mã hóa thành các giá trị nhị phân và đặt vào trong các tập tin. 011001100110111110101110110010......</p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/08/08-16-45-58-dsadqwe.png" title="" alt="dsadqwe.png" width="287"></li></ul><p>Dung lượng tập tin nhận được phụ thuộc hoàn toàn vào tần số lấy mẫu f và số lượng bit dùng để mã hóa giá trị thang đo p ( chiều dài mã cho mỗi giá trị).</p>',18),a={render:function(t,n){return i}}}}]);
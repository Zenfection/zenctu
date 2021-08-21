import type { SidebarConfig } from '@vuepress/theme-default'

export const vi: SidebarConfig = {

  //!-----Begin: Guide
  '/guide/': [
    '/guide/intro.md',
    '/guide/desc.md',
    '/guide/tutorial.md',
    '/guide/contribution.md',
    '/guide/source.md',
  ],
  //!-----End: Guide

//!-----Begin: Nhập Môn-----

  //*CT101-Lập trình căn bản A
  '/nhapmon/CT101-Lap_trinh_can_ban_a/':[
    {
      text: 'CT101-Lập Trình Căn Bản A',
      link: '/nhapmon/CT101-Lap_trinh_can_ban_a/'
    }
  ],
  //*CT172-Toán rời rạc
  '/nhapmon/CT172-Toan_roi_rac/':[
    {
      text: 'CT172-Toán Rời Rạc',
      link: '/nhapmon/CT172-Toan_roi_rac/'
    }
  ],
  //*CT173-Kiến trúc máy tính
  '/nhapmon/CT173-Kien_truc_may_tinh/':[
    {
      text: 'CT173-Kiến Trúc Máy Tính',
      link: '/nhapmon/CT173-Kien_truc_may_tinh/'
    }
  ],
  //*CT179-Quản trị hệ thống
  '/nhapmon/CT179-Quan_tri_he_thong/':[
    {
      text: 'CT179-Quản Trị Hệ Thống',
      link: '/nhapmon/CT179-Quan_tri_he_thong/'
    }
  ],
  //*CT188 Nhập môn lập trình web
  '/nhapmon/CT188-Nhap_mon_lap_trinh_web/':[
    {
      text: 'CT188-Nhập Môn Lập Trình Web',
      link: '/nhapmon/CT188-Nhap_mon_lap_trinh_web/'
    }
  ],
  //*CT190 Nhập môn trí tuệ nhân tạo
  '/nhapmon/CT190-Nhap_mon_tri_tue_nhan_tao/':[
    {
      text: 'CT190-Nhập Môn AI',
      link: '/nhapmon/CT190-Nhap_mon_tri_tue_nhan_tao/'
    }
  ],
  //*CT200-Nền tảng công nghệ thông tin
  '/nhapmon/CT200-Nen_tang_cong_nghe_thong_tin/': [
    {
      text: 'CT200-Nền Tảng CNTT',
      link: '/nhapmon/CT200-Nen_tang_cong_nghe_thong_tin/'
    }
  ],

//!-----End: Nhập Môn-----

//!-----Begin: Cơ Sở Ngành
  //* CT112-Mạng máy tính
  '/cosonganh/CT112-Mang_may_tinh/':[
    {
      text: 'CT112-Mạng Máy Tính',
      link: '/cosonganh/CT112-Mang_may_tinh/'
    }
  ],
  '/cosonganh/CT112-Mang_may_tinh/Tailieu/': [
    {
      text: 'Chương 1.Tổng Quan MMT',
      link: '/cosonganh/CT112-Mang_may_tinh/Tailieu/Chapter1/',
      children: [
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/Chapter1/1.md',
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/Chapter1/2.md',
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/Chapter1/3.md',
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/Chapter1/4.md',
      ],
    },
    {
      text: 'Chương 2.Thành Phần MTT',
      link: '/cosonganh/CT112-Mang_may_tinh/Tailieu/Chapter2/',
      children: [
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/Chapter2/1.md',
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/Chapter2/2.md',
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/Chapter2/3.md',
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/Chapter2/4.md',
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/Chapter2/5.md',
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/Chapter2/6.md',
      ],
    },
    {
      text: 'Chương 3.Tầng Vật Lý',
      link: '/cosonganh/CT112-Mang_may_tinh/Tailieu/Chapter3/',
      children: [
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/Chapter3/1.md',
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/Chapter3/2.md',
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/Chapter3/3.md',
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/Chapter3/4.md',
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/Chapter3/5.md',
      ],
    },
    {
      text: 'Chương 4.Tầng Liên Kết Dữ Liệu',
      link: '/cosonganh/CT112-Mang_may_tinh/Tailieu/Chapter4/',
      children: [
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/Chapter4/1.md',
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/Chapter4/2.md',
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/Chapter4/3.md',
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/Chapter4/4.md',
      ],
    },
    {
      text: 'Chương 5.Mạng Nội Bộ & Lớp Con Điều Khiển',
      link: '/cosonganh/CT112-Mang_may_tinh/Tailieu/Chapter5/',
      children: [
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/Chapter5/1.md',
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/Chapter5/2.md',
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/Chapter5/3.md',
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/Chapter5/4.md',
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/Chapter5/5.md',
      ],
    },
    {
      text: 'Chương 6.Tầng Mạng',
      link: '/cosonganh/CT112-Mang_may_tinh/Tailieu/Chapter6/',
      children: [
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/Chapter6/1.md',
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/Chapter6/2.md',
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/Chapter6/3.md',
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/Chapter6/4.md',
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/Chapter6/5.md',
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/Chapter6/6.md',
      ],
    },
    {
      text: 'Chương 7.Tầng Vận Chuyển',
      link: '/cosonganh/CT112-Mang_may_tinh/Tailieu/Chapter7/',
      children: [
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/Chapter7/1.md',
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/Chapter7/2.md',
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/Chapter7/3.md',
      ],
    },
    {
      text: 'Chương 8.Các Ứng Dụng Mạng',
      link: '/cosonganh/CT112-Mang_may_tinh/Tailieu/Chapter8/',
      children: [
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/Chapter8/1.md',
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/Chapter8/2.md',
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/Chapter8/3.md',
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/Chapter8/4.md',
      ],
    },
  ],

  //* CT174-Phân tích thiết kế thuật toán
  '/cosonganh/CT174-Phan_tich_va_thiet_ke_thuat_toan/':[
    {
      text: 'CT174-Phân Tích Thiết Kế Thuật Toán',
      link: '/cosonganh/CT174-Phan_tich_va_thiet_ke_thuat_toan/'
    }
  ],
  //* CT175-Lý thuyết đồ thị
  '/cosonganh/CT175-Ly_thuyet_do_thi/':[
    {
      text: 'CT175-Lý Thuyết Đồ Thị',
      link: '/cosonganh/CT175-Ly_thuyet_do_thi/'
    }
  ],
  '/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/':[
    {
      text: 'Chương 1.Nền tảng Graph Theory',
      children:[
        '/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/1.md',
        '/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/2.md',
        '/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/3.md',
        '/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/4.md',
        '/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/5.md',
        '/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/6.md',
      ]
    }
  ],
  //* CT176-Lập trình hướng đối tượng
  '/cosonganh/CT176-Lap_trinh_huong_doi_tuong/':[
    {
      text: 'CT176-Lập Trình Hướng Đối Tượng',
      link: '/cosonganh/CT176-Lap_trinh_huong_doi_tuong/'
    }
  ],
  //* CT177-Cấu trúc dữ liệu
  '/cosonganh/CT177-Cau_truc_du_lieu/':[
    {
      text: 'CT177-Cấu Trúc Dữ Liệu',
      link: '/cosonganh/CT177-Cau_truc_du_lieu/'
    }
  ],
  //* CT178-Nguyên lý hệ điều hành
  '/cosonganh/CT178-Nguyen_ly_he_dieu_hanh/':[
    {
      text: 'CT178-Nguyên Lý Hệ Điều Hành',
      link: '/cosonganh/CT178-Nguyen_ly_he_dieu_hanh/'
    }
  ],
  //* CT180-Cơ sở dữ liệu
  '/cosonganh/CT180-Co_so_du_lieu/':[
    {
      text: 'CT180 Cơ Sở Dữ Liệu',
      link: '/cosonganh/CT180-Co_so_du_lieu/'
    }
  ],
  //* CT182-Ngôn ngữ mô hình hóa
  '/cosonganh/CT182-Ngon_ngu_mo_hinh_hoa/':[
    {
      text: 'CT182-Ngôn Ngữ Mô Hình Hóa',
      link: '/cosonganh/CT182-Ngon_ngu_mo_hinh_hoa/'
    }
  ],
  //* CT296-Phân tích thiết kế hệ thống
  '/cosonganh/CT296-Phan_tich_thiet_ke_he_thong/':[
    {
      text: 'CT296-Phân Tích Thiết Kế Hệ Thống',
      link: '/cosonganh/CT296-Phan_tich_thiet_ke_he_thong/'
    }
  ],
//! End: Cơ Sở Ngành

//! Begin: Chuyên Ngành
  //* CT222-An toàn hệ thống
  '/chuyennganh/CT222-An_toan_he_thong/':[
    {
      text: 'CT2220-An Toàn Hệ Thống',
      link: '/chuyennganh/CT222-An_toan_he_thong/'
    }
  ],
  //* CT233-Quản lý dự án phần mềm
  '/chuyennganh/CT223-Quan_ly_du_an_phan_mem/':[
    {
      text: 'CT223-Quản Lý Dự Án Phần Mềm',
      link: '/chuyennganh/CT223-Quan_ly_du_an_phan_mem/'
    }
  ],
  //* CT283-Giao diện người máy
  '/chuyennganh/CT273-Giao_dien_nguoi_may/':[
    {
      text: 'CT273-Giao Diện Người Máy',
      link: '/chuyennganh/CT273-Giao_dien_nguoi_may/'
    }
  ],
  //* CT275-Công Nghệ Web
  '/chuyennganh/CT275-Cong_nghe_web/':[
    {
      text: 'CT275-Công Nghệ Web',
      link: '/chuyennganh/CT275-Cong_nghe_web/'
    }
  ],
  //* CT293-Mạng và truyền thông dữ liệu
  '/chuyennganh/CT293-Mang_va_truyen_thong_du_lieu/':[
    {
      text: 'CT293-Mạng Và Truyền Thông Dữ Liệu',
      link: '/chuyennganh/CT293-Mang_va_truyen_thong_du_lieu/'
    }
  ],
  //* CT294-Máy học ứng dụng
  '/chuyennganh/CT294-May_hoc_ung_dung/':[
    {
      text: 'CT294-Máy Học Ứng Dụng',
      link: '/chuyennganh/CT294-May_hoc_ung_dung/'
    }
  ],
  //* CT467-Quản trị dữ liệu
  '/chuyennganh/CT467-Quan_tri_du_lieu/':[
    {
      text: 'CT467-Quản Trị Dữ Liệu',
      link: '/chuyennganh/CT467-Quan_tri_du_lieu/'
    }
  ],
//! End: Chuyên Ngành
//-------------------------------
//! Begin: Đồ Án Ngành
  //* CT271-Niên luận cơ sở CNTT
  '/doannganh/CT271-Nien_luan_co_so_CNTT/':[
    {
      text: 'CT271-Niên Luận Cơ Sở CNTT',
      link: '/doannganh/CT271-Nien_luan_co_so_CNTT/'
    }
  ],
  //* CT300-Phát triển phần mềm
  '/doannganh/CT300-Phat_trien_phan_mem/':[
    {
      text: 'CT300-Phát Triển Phần Mềm',
      link: '/doannganh/CT300-Phat_trien_phan_mem/'
    }
  ], 
  //* CT446-Niên luận CNTT
  '/doannganh/CT446-Nien_luan_CNTT/':[
    {
      text: 'CT446-Niên Luận CNTT',
      link: '/doannganh/CT446-Nien_luan_CNTT/'
    }
  ],
  //* CT449-Phát triển ứng dụng web
  '/doannganh/CT449-Phat_trien_ung_dung_web/':[
    {
      text: 'CT449-Phát Triển Ứng Dụng Web',
      link: '/doannganh/CT449-Phat_trien_ung_dung_web/'
    }
  ],
  //* CT484-Phát triển ứng dụng trên thiết bị di động 
  '/doannganh/CT484-Phat_trien_ung_dung_tren_thiet_bi_di_dong/':[
    {
      text: 'CT484-Phát Triển Ứng Dụng Trên Thiết Bị Di Động',
      link: '/doannganh/CT484-Phat_trien_ung_dung_tren_thiet_bi_di_dong/'
    }
  ],
  //* CT550-Luận văn tốt nghiệp
  '/doannganh/CT550-Luan_van_tot_nghiep/':[
    {
      text: 'CT550-Luận Văn Tốt Nghiệp',
      link: '/doannganh/CT550-Luan_van_tot_nghiep/'
    }
  ],
//! End: Đồ Án Ngành

//! Begin: Toán Học
  //* TN001-Tích phân A1
  '/toanhoc/TN001-Vi_tich_phan_a1/':[
    {
      text: 'TN001-Vi Tích Phân A1',
      link: '/toanhoc/TN001-Vi_tich_phan_a1/'
    }
  ],
  //* TN001-Tích phân A2
  '/toanhoc/TN002-Vi_tich_phan_a2/':[
    {
      text: 'TN002-Vi Tích Phân A2',
      link: '/toanhoc/TN002-Vi_tich_phan_a2/'
    }
  ],
  //* TN010-Xác suất thống kê
  '/toanhoc/TN010-Xac_suat_thong_ke/':[
    {
      text: 'TN010-Xác suất thống kê',
      link: '/toanhoc/TN010-Xac_suat_thong_ke/'
    }
  ],
  //* TN012-Đại số tuyến tính
  '/toanhoc/TN012-Dai_so_tuyen_tinh_va_hinh_hoc/':[
    {
      text: 'TN012-Đại số tuyến tính và hình học',
      link: '/toanhoc/TN012-Dai_so_tuyen_tinh_va_hinh_hoc/'
    }
  ],
//! End: Toán Học

//!Ngôn ngữ lập trình

  //Begin: C
  '/language/C/':[
    {
      text: 'Chương 1.Giới Thiệu Ngôn Ngữ C',
      children:[
        '/language/C/Chapter1/1.md',
        '/language/C/Chapter1/2.md',
        '/language/C/Chapter1/3.md',
        '/language/C/Chapter1/4.md',
        '/language/C/Chapter1/5.md',
        '/language/C/Chapter1/6.md'
      ]
    },
    {
      text: 'Chương 2.Các Câu Lệnh Căn Bản',
      children:[
        '/language/C/Chapter2/1.md',
        '/language/C/Chapter2/2.md',
        '/language/C/Chapter2/3.md',
        '/language/C/Chapter2/4.md'
      ]
    },
    {
      text: 'Chương 3.Các Tính Chất Căn Bản',
      children:[
        '/language/C/Chapter3/1.md',
        '/language/C/Chapter3/2.md',
        '/language/C/Chapter3/3.md',
        '/language/C/Chapter3/4.md',
        '/language/C/Chapter3/5.md'
      ]
    },
    {
      text: 'Tham Khảo Thư Viện & Hàm',
      children:[
        '/language/C/ham.md',
        {
          text:'Thư viện C',

          children:[
            {text:'<assert.h>', link:'/language/C/Thuvien/assert.md'},
            {text:'<errno.h>', link:'/language/C/Thuvien/errno.md'},
            {text:'<float.h>', link:'/language/C/Thuvien/float.md'},
            {text:'<limits.h>', link:'/language/C/Thuvien/limits.md'},
            {text:'<locale.h>', link:'/language/C/Thuvien/locale.md'},
            {text:'<math.h>', link:'/language/C/Thuvien/math.md'},
            {text:'<setjmp.h>', link:'/language/C/Thuvien/setjmp.md'},
            {text:'<signal.h>', link:'/language/C/Thuvien/signal.md'},
            {text:'<stdarg.h>', link:'/language/C/Thuvien/stdarg.md'},
            {text:'<stddef.h>', link:'/language/C/Thuvien/stddef.md'},
            {text:'<stdlib.h>', link:'/language/C/Thuvien/stdlib.md'},
            {text:'<string.h>', link:'/language/C/Thuvien/string.md'},
            {text:'<time.h>', link:'/language/C/Thuvien/time.md'},
          ]
        }
      ]
    },
  ],
  //End: C

  //Begin: Java
  '/language/Java/':[
    {
      text:'Chương 1. Java Căn Bản',
      children:[
        '/language/Java/Basic/1.md',
        '/language/Java/Basic/2.md',
        '/language/Java/Basic/3.md',
        '/language/Java/Basic/4.md',
        '/language/Java/Basic/5.md',
        '/language/Java/Basic/6.md',
        '/language/Java/Basic/7.md',
        '/language/Java/Basic/8.md',
        '/language/Java/Basic/9.md',
        '/language/Java/Basic/10.md',
        '/language/Java/Basic/11.md',
        '/language/Java/Basic/12.md'
      ]
    },
    {
      text:'Chương 2. Java Nâng Cao',
      children:[
        '/language/Java/Advanced/1.md',
        '/language/Java/Advanced/2.md',
        '/language/Java/Advanced/3.md',
        '/language/Java/Advanced/4.md',
        '/language/Java/Advanced/5.md',
        '/language/Java/Advanced/6.md',
        '/language/Java/Advanced/7.md',
        '/language/Java/Advanced/8.md',
        '/language/Java/Advanced/9.md',
        '/language/Java/Advanced/10.md',
        '/language/Java/Advanced/11.md',
        '/language/Java/Advanced/12.md',
        '/language/Java/Advanced/13.md',
        '/language/Java/Advanced/14.md'
      ]
    },
    {
      text:'Chương 3. Java OOP',
      children:[
        '/language/Java/OOP/1.md',
        '/language/Java/OOP/2.md',
        '/language/Java/OOP/3.md',
        '/language/Java/OOP/4.md',
        '/language/Java/OOP/5.md'
      ]
    },
  ],
  //End: Java

  //Word
  '/language/Word/':[
    {
      text: 'Microsoft Từ căn bản tới nâng cao',
      children: [
        '/language/Word/1/1.md',
        '/language/Word/1/2.md',
        '/language/Word/1/3.md',
        '/language/Word/1/4.md',
      ]
    }
  ],
}

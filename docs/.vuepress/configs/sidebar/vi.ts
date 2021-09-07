import type { SidebarConfig } from '@vuepress/theme-default'
import { isJsxAttribute } from 'typescript'

export const vi: SidebarConfig = {
  //! -----Begin: Guide
  '/guide/': [
    '/guide/intro.md',
    '/guide/desc.md',
    '/guide/tutorial.md',
    '/guide/contribution.md',
    '/guide/source.md',
  ],
  //! -----End: Guide

  //! -----Begin: Nhập Môn-----

  //* CT101-Lập trình căn bản A
  '/nhapmon/CT101-Lap_trinh_can_ban_a/': [
    {
      text: 'CT101-Lập Trình Căn Bản A',
      link: '/nhapmon/CT101-Lap_trinh_can_ban_a/',
    },
  ],
  //* CT172-Toán rời rạc
  '/nhapmon/CT172-Toan_roi_rac/': [
    {
      text: 'CT172-Toán Rời Rạc',
      link: '/nhapmon/CT172-Toan_roi_rac/',
    },
  ],
  //* CT173-Kiến trúc máy tính
  // '/nhapmon/CT173-Kien_truc_may_tinh/':[
  //   {
  //     text: 'CT173-Kiến Trúc Máy Tính',
  //     link: '/nhapmon/CT173-Kien_truc_may_tinh/'
  //   }
  // ],
  //* CT179-Quản trị hệ thống
  '/nhapmon/CT179-Quan_tri_he_thong/': [
    {
      text: 'CT179-Quản Trị Hệ Thống',
      link: '/nhapmon/CT179-Quan_tri_he_thong/',
    },
  ],
  '/nhapmon/CT179-Quan_tri_he_thong/Thuchanh/': [
    '/nhapmon/CT179-Quan_tri_he_thong/Thuchanh/1.md',
    '/nhapmon/CT179-Quan_tri_he_thong/Thuchanh/2.md',
    '/nhapmon/CT179-Quan_tri_he_thong/Thuchanh/3.md',
    '/nhapmon/CT179-Quan_tri_he_thong/Thuchanh/4.md',
    '/nhapmon/CT179-Quan_tri_he_thong/Thuchanh/5.md',
  ],
  //* CT188 Nhập môn lập trình web
  '/nhapmon/CT188-Nhap_mon_lap_trinh_web/': [
    {
      text: 'CT188-Nhập Môn Lập Trình Web',
      link: '/nhapmon/CT188-Nhap_mon_lap_trinh_web/',
    },
  ],
  //* CT200-Nền tảng công nghệ thông tin
  '/nhapmon/CT200-Nen_tang_cong_nghe_thong_tin/': [
    {
      text: 'CT200-Nền Tảng CNTT',
      link: '/nhapmon/CT200-Nen_tang_cong_nghe_thong_tin/',
    },
  ],

  //! -----End: Nhập Môn-----

  //! -----Begin: Cơ Sở Ngành
  //* CT112-Mạng máy tính
  '/cosonganh/CT112-Mang_may_tinh/': [
    {
      text: 'CT112-Mạng Máy Tính',
      link: '/cosonganh/CT112-Mang_may_tinh/',
    },
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
  '/cosonganh/CT112-Mang_may_tinh/Thuchanh/': [
    '/cosonganh/CT112-Mang_may_tinh/Thuchanh/1.md',
    '/cosonganh/CT112-Mang_may_tinh/Thuchanh/2.md',
    '/cosonganh/CT112-Mang_may_tinh/Thuchanh/3.md',
    '/cosonganh/CT112-Mang_may_tinh/Thuchanh/4.md',
    '/cosonganh/CT112-Mang_may_tinh/Thuchanh/5.md',
  ],

  //* CT174-Phân tích thiết kế thuật toán
  '/cosonganh/CT174-Phan_tich_va_thiet_ke_thuat_toan/': [
    {
      text: 'CT174-Phân Tích Thiết Kế Thuật Toán',
      link: '/cosonganh/CT174-Phan_tich_va_thiet_ke_thuat_toan/',
    },
  ],
  //* CT175-Lý thuyết đồ thị
  '/cosonganh/CT175-Ly_thuyet_do_thi/': [
    {
      text: 'CT175-Lý Thuyết Đồ Thị',
      link: '/cosonganh/CT175-Ly_thuyet_do_thi/',
    },
  ],
  '/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/': [
    {
      text: 'Chương 1.Nền tảng Graph Theory',
      children: [
        '/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/1.md',
        '/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/2.md',
        '/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/3.md',
        '/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/4.md',
        '/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/5.md',
        '/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/6.md',
        '/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/7.md',
      ],
    },
    {
      text: 'Chương 2.Đồ thị dạng cây',
      children: ['/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/8.md'],
    },
    {
      text: 'Chương 3.Bài toán đường đi',
      children: [],
    },
    {
      text: 'Chương 4.Đồ thị phẳng và số màu',
      children: [],
    },
  ],
  //* CT176-Lập trình hướng đối tượng
  '/cosonganh/CT176-Lap_trinh_huong_doi_tuong/': [
    {
      text: 'CT176-Lập Trình Hướng Đối Tượng',
      link: '/cosonganh/CT176-Lap_trinh_huong_doi_tuong/',
    },
  ],
  //* CT177-Cấu trúc dữ liệu
  '/cosonganh/CT177-Cau_truc_du_lieu/': [
    {
      text: 'CT177-Cấu Trúc Dữ Liệu',
      link: '/cosonganh/CT177-Cau_truc_du_lieu/',
    },
  ],
  '/cosonganh/CT177-Cau_truc_du_lieu/Thuchanh/': [
    {
      text: 'Chương 1. Các kiểu dữ liệu cơ bản',
      children: [
        '/cosonganh/CT177-Cau_truc_du_lieu/Thuchanh/1.md',
        '/cosonganh/CT177-Cau_truc_du_lieu/Thuchanh/2.md',
        '/cosonganh/CT177-Cau_truc_du_lieu/Thuchanh/3.md',
        '/cosonganh/CT177-Cau_truc_du_lieu/Thuchanh/4.md',
      ]
    },
    {
      text: 'Chương 2. Cấu trúc cây',
      children: [
        '/cosonganh/CT177-Cau_truc_du_lieu/Thuchanh/5.md',
        '/cosonganh/CT177-Cau_truc_du_lieu/Thuchanh/6.md',
      ],
    },
    {
      text: 'Chương 3. Cấu trúc tập hợp',
      children: [
        '/cosonganh/CT177-Cau_truc_du_lieu/Thuchanh/7.md',
      ],
    }
  ],
  //* CT180-Cơ sở dữ liệu
  '/cosonganh/CT180-Co_so_du_lieu/': [
    {
      text: 'CT180 Cơ Sở Dữ Liệu',
      link: '/cosonganh/CT180-Co_so_du_lieu/',
    },
  ],
  //* CT182-Ngôn ngữ mô hình hóa
  '/cosonganh/CT182-Ngon_ngu_mo_hinh_hoa/': [
    {
      text: 'CT182-Ngôn Ngữ Mô Hình Hóa',
      link: '/cosonganh/CT182-Ngon_ngu_mo_hinh_hoa/',
    },
  ],
  //* CT296-Phân tích thiết kế hệ thống
  '/cosonganh/CT296-Phan_tich_thiet_ke_he_thong/': [
    {
      text: 'CT296-Phân Tích Thiết Kế Hệ Thống',
      link: '/cosonganh/CT296-Phan_tich_thiet_ke_he_thong/',
    },
  ],
  //! End: Cơ Sở Ngành

  //! Begin: Chuyên Ngành
  //* CT222-An toàn hệ thống
  '/chuyennganh/CT222-An_toan_he_thong/': [
    {
      text: 'CT2220-An Toàn Hệ Thống',
      link: '/chuyennganh/CT222-An_toan_he_thong/',
    },
  ],
  //* CT233-Quản lý dự án phần mềm
  '/chuyennganh/CT223-Quan_ly_du_an_phan_mem/': [
    {
      text: 'CT223-Quản Lý Dự Án Phần Mềm',
      link: '/chuyennganh/CT223-Quan_ly_du_an_phan_mem/',
    },
  ],
  //* CT283-Giao diện người máy
  // '/chuyennganh/CT273-Giao_dien_nguoi_may/':[
  //   {
  //     text: 'CT273-Giao Diện Người Máy',
  //     link: '/chuyennganh/CT273-Giao_dien_nguoi_may/'
  //   }
  // ],
  //* CT275-Công Nghệ Web
  '/chuyennganh/CT275-Cong_nghe_web/': [
    {
      text: 'CT275-Công Nghệ Web',
      link: '/chuyennganh/CT275-Cong_nghe_web/',
    },
  ],
  //* CT293-Mạng và truyền thông dữ liệu
  // '/chuyennganh/CT293-Mang_va_truyen_thong_du_lieu/':[
  //   {
  //     text: 'CT293-Mạng Và Truyền Thông Dữ Liệu',
  //     link: '/chuyennganh/CT293-Mang_va_truyen_thong_du_lieu/'
  //   }
  // ],
  //* CT294-Máy học ứng dụng
  '/chuyennganh/CT294-May_hoc_ung_dung/': [
    {
      text: 'CT294-Máy Học Ứng Dụng',
      link: '/chuyennganh/CT294-May_hoc_ung_dung/',
    },
  ],
  //* CT467-Quản trị dữ liệu
  '/chuyennganh/CT467-Quan_tri_du_lieu/': [
    {
      text: 'CT467-Quản Trị Dữ Liệu',
      link: '/chuyennganh/CT467-Quan_tri_du_lieu/',
    },
  ],
  //! ---End: Chuyên Ngành

  //! ---Begin: Đồ Án Ngành
  //* CT300-Phát triển phần mềm
  '/doannganh/CT300-Phat_trien_phan_mem/': [
    {
      text: 'CT300-Phát Triển Phần Mềm',
      link: '/doannganh/CT300-Phat_trien_phan_mem/',
    },
  ],
  //* CT449-Phát triển ứng dụng web
  '/doannganh/CT449-Phat_trien_ung_dung_web/': [
    {
      text: 'CT449-Phát Triển Ứng Dụng Web',
      link: '/doannganh/CT449-Phat_trien_ung_dung_web/',
    },
  ],
  //* CT484-Phát triển ứng dụng trên thiết bị di động
  '/doannganh/CT484-Phat_trien_ung_dung_tren_thiet_bi_di_dong/': [
    {
      text: 'CT484-Phát Triển Ứng Dụng Trên Thiết Bị Di Động',
      link: '/doannganh/CT484-Phat_trien_ung_dung_tren_thiet_bi_di_dong/',
    },
  ],
  //! ---End: Đồ Án Ngành

  //! ---Begin: Toán Học
  //* TN001-Tích phân A1
  '/toanhoc/TN001-Vi_tich_phan_a1/': [
    {
      text: 'TN001-Vi Tích Phân A1',
      link: '/toanhoc/TN001-Vi_tich_phan_a1/',
    },
  ],
  //* TN001-Tích phân A2
  '/toanhoc/TN002-Vi_tich_phan_a2/': [
    {
      text: 'TN002-Vi Tích Phân A2',
      link: '/toanhoc/TN002-Vi_tich_phan_a2/',
    },
  ],
  '/toanhoc/TN002-Vi_tich_phan_a2/Tailieu': [
    '/toanhoc/TN002-Vi_tich_phan_a2/Tailieu/1.md',
    '/toanhoc/TN002-Vi_tich_phan_a2/Tailieu/2.md',
    '/toanhoc/TN002-Vi_tich_phan_a2/Tailieu/3.md',
    '/toanhoc/TN002-Vi_tich_phan_a2/Tailieu/4.md',
    '/toanhoc/TN002-Vi_tich_phan_a2/Tailieu/5.md',
  ],
  //* TN010-Xác suất thống kê
  '/toanhoc/TN010-Xac_suat_thong_ke/': [
    {
      text: 'TN010-Xác suất thống kê',
      link: '/toanhoc/TN010-Xac_suat_thong_ke/',
    },
  ],
  '/toanhoc/TN010-Xac_suat_thong_ke/Tailieu': [
    '/toanhoc/TN010-Xac_suat_thong_ke/Tailieu/1.md',
    '/toanhoc/TN010-Xac_suat_thong_ke/Tailieu/2.md',
    '/toanhoc/TN010-Xac_suat_thong_ke/Tailieu/3.md',
    '/toanhoc/TN010-Xac_suat_thong_ke/Tailieu/4.md',
    '/toanhoc/TN010-Xac_suat_thong_ke/Tailieu/5.md',
    '/toanhoc/TN010-Xac_suat_thong_ke/Tailieu/6.md',
    '/toanhoc/TN010-Xac_suat_thong_ke/Tailieu/7.md',
    '/toanhoc/TN010-Xac_suat_thong_ke/Tailieu/8.md',
  ],
  //* TN012-Đại số tuyến tính
  '/toanhoc/TN012-Dai_so_tuyen_tinh_va_hinh_hoc/': [
    {
      text: 'TN012-Đại số tuyến tính và hình học',
      link: '/toanhoc/TN012-Dai_so_tuyen_tinh_va_hinh_hoc/',
    },
  ],
  '/toanhoc/TN012-Dai_so_tuyen_tinh_va_hinh_hoc/Tailieu': [
    '/toanhoc/TN012-Dai_so_tuyen_tinh_va_hinh_hoc/Tailieu/1.md',
    '/toanhoc/TN012-Dai_so_tuyen_tinh_va_hinh_hoc/Tailieu/2.md',
    '/toanhoc/TN012-Dai_so_tuyen_tinh_va_hinh_hoc/Tailieu/3.md',
    '/toanhoc/TN012-Dai_so_tuyen_tinh_va_hinh_hoc/Tailieu/4.md',
  ],
  //! End: Toán Học

  // Begin: C

  // Begin: Java
  '/language/Java/': [
    {
      text: 'Chương 1. Java Căn Bản',
      children: [
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
        '/language/Java/Basic/12.md',
      ],
    },
    {
      text: 'Chương 2. Java Nâng Cao',
      children: [
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
        '/language/Java/Advanced/14.md',
      ],
    },
    {
      text: 'Chương 3. Java OOP',
      children: [
        '/language/Java/OOP/1.md',
        '/language/Java/OOP/2.md',
        '/language/Java/OOP/3.md',
        '/language/Java/OOP/4.md',
        '/language/Java/OOP/5.md',
      ],
    },
  ],
  // End: Java
  // Vue

  // '/language/Vue/vuejs/': [
  //   {
  //     text: 'Chương 1.Cần Thiết',
  //     children: [
  //       '/language/Vue/vuejs/guide/Essentials/1.md',
  //       '/language/Vue/vuejs/guide/Essentials/2.md',
  //       '/language/Vue/vuejs/guide/Essentials/3.md',
  //       '/language/Vue/vuejs/guide/Essentials/4.md',
  //       '/language/Vue/vuejs/guide/Essentials/5.md',
  //       '/language/Vue/vuejs/guide/Essentials/6.md',
  //       '/language/Vue/vuejs/guide/Essentials/7.md',
  //       '/language/Vue/vuejs/guide/Essentials/8.md',
  //       '/language/Vue/vuejs/guide/Essentials/9.md',
  //       '/language/Vue/vuejs/guide/Essentials/10.md',
  //       '/language/Vue/vuejs/guide/Essentials/11.md',
  //       '/language/Vue/vuejs/guide/Essentials/12.md',
  //     ],
  //   }
  // ],
  //* Web
  '/course/web/': [
    {
      text: 'Web Deverloper',
      link: '/course/web/',
    },
  ],
  //* Office
  '/course/office/': [
    {
      text: 'Office',
      link: '/course/office/',
    },
  ],
  // Word
  '/course/office/word/1/': [
    '/course/office/word/1/1.md',
    '/course/office/word/1/2.md',
    '/course/office/word/1/3.md',
    '/course/office/word/1/4.md',
  ],
  // Excel
  '/course/office/excel/1/': [
    '/course/office/excel/1/1.md',
    '/course/office/excel/1/2.md',
    '/course/office/excel/1/3.md',
    '/course/office/excel/1/4.md',
    '/course/office/excel/1/5.md',
    '/course/office/excel/1/6.md',
    '/course/office/excel/1/7.md',
    '/course/office/excel/1/8.md',
    '/course/office/excel/1/9.md',
    '/course/office/excel/1/10.md',
    '/course/office/excel/1/11.md',
  ],
  //* Server
  '/course/server/': [
    {
      text: 'Server',
      link: '/course/server/',
    },
  ],
  //* Moible
  '/course/mobile/': [
    {
      text: 'Mobile',
      link: '/course/mobile/',
    },
  ],
  //* System
  '/course/system/': [
    {
      text: 'System Language',
      link: '/course/system/',
    },
  ],
  '/course/system/c/1/': [
    {
      text: 'Lập trình C++ qua 108 bài học',
      children: [
        '/course/system/c/1/1.md',
        '/course/system/c/1/2.md',
        '/course/system/c/1/3.md',
        '/course/system/c/1/4.md',
        '/course/system/c/1/5.md',
        '/course/system/c/1/6.md',
        '/course/system/c/1/7.md',
        '/course/system/c/1/8.md',
        '/course/system/c/1/9.md',
        '/course/system/c/1/10.md',
        '/course/system/c/1/11.md',
      ],
    },
  ],
  '/course/system/c/2/': [
    {
      text: 'Cấu trúc dữ liệu và giải thuật',
      children: [
        '/course/system/c/2/1.md',
        '/course/system/c/2/2.md',
        '/course/system/c/2/3.md',
        '/course/system/c/2/4.md',
        '/course/system/c/2/5.md',
      ],
    },
  ],
  '/course/system/c/3/': [
    {
      text: 'Lập trình C++ hướng đối tượng',
      children: [
        '/course/system/c/3/1.md',
        '/course/system/c/3/2.md',
        '/course/system/c/3/3.md',
        '/course/system/c/3/4.md',
        '/course/system/c/3/5.md',
        '/course/system/c/3/6.md',
        '/course/system/c/3/7.md',
        '/course/system/c/3/8.md',
        '/course/system/c/3/9.md',
        '/course/system/c/3/10.md',
        '/course/system/c/3/11.md',
      ],
    },
  ],
  //* tip
  '/tips/': [
    {
      text: 'Tips & Track',
      link: '/tips/',
    }
  ],
  '/tips/browser/': [
    '/tips/browser/extension.md',
  ],
  '/tips/system/': [
    'tips/system/mathpix.md',
  ],
  //* devbook
  '/devbook/': [
    {
      text: 'DevBook for Zen',
      link: '/devbook/',
    }
  ],
  '/devbook/html/refer/': [
    {
      text: 'DevBook HTML',
      children: [
        '/devbook/html/refer/tag.md',
        '/devbook/html/refer/globalAttributes.md',
        '/devbook/html/refer/eventAttributes.md',
        '/devbook/html/refer/attribute.md',
      ]
    }
  ]
}

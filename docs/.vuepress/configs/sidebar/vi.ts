import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarVi: SidebarConfig = {
  //! -----Begin: Guide
  '/guide/': [
    '/guide/intro.md',
    '/guide/desc.md',
    '/guide/tutorial.md',
    '/guide/contribution.md',
    '/guide/source.md',
  ],

  //! -----Begin: Nhập Môn-----

  //* CT101-Lập trình căn bản A
  '/nhapmon/CT101-Lap_trinh_can_ban_a/': [
    {
      text: 'CT101',
      link: '/nhapmon/CT101-Lap_trinh_can_ban_a/',
    },
  ],

  //* CT172-Toán rời rạc
  '/nhapmon/CT172-Toan_roi_rac/': [
    {
      text: 'CT172',
      link: '/nhapmon/CT172-Toan_roi_rac/',
    },
  ],

  //* CT179-Quản trị hệ thống
  '/nhapmon/CT179-Quan_tri_he_thong/': [
    {
      text: 'CT179',
      link: '/nhapmon/CT179-Quan_tri_he_thong/',
    },
    {
      text: 'Thực hành',
      collapsible: true,
      children: [
        '/nhapmon/CT179-Quan_tri_he_thong/Thuchanh/1.md',
        '/nhapmon/CT179-Quan_tri_he_thong/Thuchanh/2.md',
        '/nhapmon/CT179-Quan_tri_he_thong/Thuchanh/3.md',
        '/nhapmon/CT179-Quan_tri_he_thong/Thuchanh/4.md',
        '/nhapmon/CT179-Quan_tri_he_thong/Thuchanh/5.md',
        '/nhapmon/CT179-Quan_tri_he_thong/Thuchanh/6.md',
      ]
    }
  ],

  //* CT188 Nhập môn lập trình web
  '/nhapmon/CT188-Nhap_mon_lap_trinh_web/': [
    {
      text: 'CT188',
      link: '/nhapmon/CT188-Nhap_mon_lap_trinh_web/',
    },
  ],

  //* CT200-Nền tảng công nghệ thông tin
  '/nhapmon/CT200-Nen_tang_cong_nghe_thong_tin/': [
    {
      text: 'CT200',
      link: '/nhapmon/CT200-Nen_tang_cong_nghe_thong_tin/',
    },
  ],

  //! -----Begin: Cơ Sở Ngành
  //* CT112-Mạng máy tính
  '/cosonganh/CT112-Mang_may_tinh/': [
    {
      text: 'CT112',
      link: '/cosonganh/CT112-Mang_may_tinh/'
    },
    {
      text: 'Lý thuyết',
      collapsible: true,
      children: [
        '/cosonganh/CT112-Mang_may_tinh/LyThuyet/1.md',
        '/cosonganh/CT112-Mang_may_tinh/LyThuyet/2.md',
        '/cosonganh/CT112-Mang_may_tinh/LyThuyet/3.md',
        '/cosonganh/CT112-Mang_may_tinh/LyThuyet/4.md',
        '/cosonganh/CT112-Mang_may_tinh/LyThuyet/5.md',
        '/cosonganh/CT112-Mang_may_tinh/LyThuyet/6.md',
        '/cosonganh/CT112-Mang_may_tinh/LyThuyet/7.md',
        '/cosonganh/CT112-Mang_may_tinh/LyThuyet/8.md',
      ]
    },
    {
      text: 'Thực hành',
      collapsible: true,
      children: [
        '/cosonganh/CT112-Mang_may_tinh/Thuchanh/1.md',
        '/cosonganh/CT112-Mang_may_tinh/Thuchanh/2.md',
        '/cosonganh/CT112-Mang_may_tinh/Thuchanh/3.md',
        '/cosonganh/CT112-Mang_may_tinh/Thuchanh/4.md',
        '/cosonganh/CT112-Mang_may_tinh/Thuchanh/5.md',
        '/cosonganh/CT112-Mang_may_tinh/Thuchanh/6.md',
        '/cosonganh/CT112-Mang_may_tinh/Thuchanh/7.md',
      ]
    }
  ],

  //* CT174-Phân tích thiết kế thuật toán
  '/cosonganh/CT174-Phan_tich_va_thiet_ke_thuat_toan/': [
    {
      text: 'CT174',
      link: '/cosonganh/CT174-Phan_tich_va_thiet_ke_thuat_toan/',
    },
  ],

  //* CT175-Lý thuyết đồ thị
  '/cosonganh/CT175-Ly_thuyet_do_thi/': [
    { text: 'CT175', link: '/cosonganh/CT175-Ly_thuyet_do_thi/' },
  ],
  '/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/1/': [
    {
      text: 'Chương 1.Nền tảng Graph Theory',
      children: [
        '/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/1/1.md',
        '/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/1/2.md',
        '/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/1/3.md',
        '/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/1/4.md',
        '/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/1/5.md',
        '/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/1/6.md',
        '/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/1/7.md',
      ],
    },
      { text: 'Chương 2.Đồ thị dạng cây'              , link : '/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/2/1.md' },
      { text: 'Chương 3.Bài toán đường đi'            , link : '/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/3/1.md' },
      { text: 'Chương 4.Đồ thị phẳng và tô màu đồ thị', link : '/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/4/1.md'},
  ],
  '/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/2/': [
    { text: 'Chương 1.Nền tảng Graph Theory', link: '/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/1/1.md'},
    {
      text: 'Chương 2.Đồ thị dạng cây',
      children: [
        '/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/2/1.md',
        '/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/2/2.md',
      ],
    },
      { text: 'Chương 3.Bài toán đường đi'            , link : '/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/3/1.md'},
      { text: 'Chương 4.Đồ thị phẳng và tô màu đồ thị', link : '/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/4/1.md'},
  ],
  '/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/3/': [
    { text: 'Chương 1.Nền tảng Graph Theory', link : '/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/2/1.md'},
    { text: 'Chương 2.Đồ thị dạng cây'      , link : '/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/2/1.md' },
    {
      text: 'Chương 3.Bài toán đường đi',
      children: [
        '/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/3/1.md',
        '/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/3/2.md',
        '/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/3/3.md',
        '/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/3/4.md',
        '/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/3/5.md',
      ],
    },
    { text: 'Chương 4.Đồ thị phẳng và tô màu đồ thị', link: '/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/4/1.md'},
  ],
  '/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/4/': [
    { text: 'Chương 1.Nền tảng Graph Theory', link : '/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/2/1.md'},
    { text: 'Chương 2.Đồ thị dạng cây'      , link : '/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/2/1.md' },
    { text: 'Chương 3.Bài toán đường đi'    , link : '/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/3/1.md'},
    {
      text: 'Chương 4.Đồ thị phẳng và tô màu đồ thị',
      children: [ '/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/4/1.md' ]
    }
  ],
  '/cosonganh/CT175-Ly_thuyet_do_thi/Thuchanh/': [
    '/cosonganh/CT175-Ly_thuyet_do_thi/Thuchanh/0.md',
    '/cosonganh/CT175-Ly_thuyet_do_thi/Thuchanh/1.md',
    '/cosonganh/CT175-Ly_thuyet_do_thi/Thuchanh/2.md',
    '/cosonganh/CT175-Ly_thuyet_do_thi/Thuchanh/3.md',
    '/cosonganh/CT175-Ly_thuyet_do_thi/Thuchanh/4.md',
    '/cosonganh/CT175-Ly_thuyet_do_thi/Thuchanh/5.md',
    '/cosonganh/CT175-Ly_thuyet_do_thi/Thuchanh/6.md',
  ],

  //* CT176-Lập trình hướng đối tượng
  '/cosonganh/CT176-Lap_trinh_huong_doi_tuong/': [
    {
      text: 'CT176',
      link: '/cosonganh/CT176-Lap_trinh_huong_doi_tuong/',
    },
  ],
  //* CT177-Cấu trúc dữ liệu
  '/cosonganh/CT177-Cau_truc_du_lieu/': [
    {
      text: 'CT177',
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
      ],
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
      children: ['/cosonganh/CT177-Cau_truc_du_lieu/Thuchanh/7.md'],
    },
  ],

  //* CT180-Cơ sở dữ liệu
  '/cosonganh/CT180-Co_so_du_lieu/': [
    {
      text: 'CT180',
      link: '/cosonganh/CT180-Co_so_du_lieu/',
    },
  ],

  //* CT182-Ngôn ngữ mô hình hóa
  '/cosonganh/CT182-Ngon_ngu_mo_hinh_hoa/': [
    {
      text: 'CT182',
      link: '/cosonganh/CT182-Ngon_ngu_mo_hinh_hoa/',
    },
  ],
  //* CT296-Phân tích thiết kế hệ thống
  '/cosonganh/CT296-Phan_tich_thiet_ke_he_thong/': [
    {
      text: 'CT296',
      link: '/cosonganh/CT296-Phan_tich_thiet_ke_he_thong/',
    },
  ],


  //! Begin: Chuyên Ngành
  //* CT222-An toàn hệ thống
  '/chuyennganh/CT222-An_toan_he_thong/': [
    {
      text: 'CT2220',
      link: '/chuyennganh/CT222-An_toan_he_thong/',
    },
  ],

  //* CT233-Quản lý dự án phần mềm
  '/chuyennganh/CT223-Quan_ly_du_an_phan_mem/': [
    {
      text: 'CT223',
      children: [
        '/chuyennganh/CT223-Quan_ly_du_an_phan_mem/',
      ]
    },
    {
      text: 'Lý thuyết',
      collapsible: true,
      children: [
        '/chuyennganh/CT223-Quan_ly_du_an_phan_mem/LyThuyet/1.md',
        '/chuyennganh/CT223-Quan_ly_du_an_phan_mem/LyThuyet/2.md',
        '/chuyennganh/CT223-Quan_ly_du_an_phan_mem/LyThuyet/3.md',
        '/chuyennganh/CT223-Quan_ly_du_an_phan_mem/LyThuyet/4.md',
        '/chuyennganh/CT223-Quan_ly_du_an_phan_mem/LyThuyet/5.md',
        '/chuyennganh/CT223-Quan_ly_du_an_phan_mem/LyThuyet/6.md',
        '/chuyennganh/CT223-Quan_ly_du_an_phan_mem/LyThuyet/7.md',
      ]
    }
  ],
  //* CT293-Mạng và truyền thông dữ liệu
  '/chuyennganh/CT293-Mang_va_truyen_thong_du_lieu/': [
    {
      text: 'CT293',
      link: '/chuyennganh/CT293-Mang_va_truyen_thong_du_lieu/',
    }
  ],
  '/chuyennganh/CT293-Mang_va_truyen_thong_du_lieu/Thuchanh/': [
    '/chuyennganh/CT293-Mang_va_truyen_thong_du_lieu/Thuchanh/1.md',
    '/chuyennganh/CT293-Mang_va_truyen_thong_du_lieu/Thuchanh/2.md',
    '/chuyennganh/CT293-Mang_va_truyen_thong_du_lieu/Thuchanh/3.md',
    '/chuyennganh/CT293-Mang_va_truyen_thong_du_lieu/Thuchanh/4.md',
    '/chuyennganh/CT293-Mang_va_truyen_thong_du_lieu/Thuchanh/5.md',
  ],
  '/chuyennganh/CT293-Mang_va_truyen_thong_du_lieu/Ontap/': [
    '/chuyennganh/CT293-Mang_va_truyen_thong_du_lieu/Ontap/1.md',
    '/chuyennganh/CT293-Mang_va_truyen_thong_du_lieu/Ontap/2.md',
    '/chuyennganh/CT293-Mang_va_truyen_thong_du_lieu/Ontap/3.md',
    '/chuyennganh/CT293-Mang_va_truyen_thong_du_lieu/Ontap/4.md',
    '/chuyennganh/CT293-Mang_va_truyen_thong_du_lieu/Ontap/5.md',
    '/chuyennganh/CT293-Mang_va_truyen_thong_du_lieu/Ontap/6.md',
    '/chuyennganh/CT293-Mang_va_truyen_thong_du_lieu/Ontap/7.md',
    '/chuyennganh/CT293-Mang_va_truyen_thong_du_lieu/Ontap/8.md',
  ],
  //* CT275-Công Nghệ Web
  '/chuyennganh/CT275-Cong_nghe_web/': [
    {
      text: 'CT275',
      link: '/chuyennganh/CT275-Cong_nghe_web/',
    },
  ],

  //* CT294-Máy học ứng dụng
  '/chuyennganh/CT294-May_hoc_ung_dung/': [
    {
      text: 'CT294',
      link: '/chuyennganh/CT294-May_hoc_ung_dung/',
    },
  ],

  //* CT467-Quản trị dữ liệu
  '/chuyennganh/CT467-Quan_tri_du_lieu/': [
    {
      text: 'CT467',
      link: '/chuyennganh/CT467-Quan_tri_du_lieu/',
    },
  ],

  //! ---Begin: Đồ Án Ngành
  //* CT300-Phát triển phần mềm
  '/doannganh/CT300-Phat_trien_phan_mem/': [
    { text: 'CT300', link: '/doannganh/CT300-Phat_trien_phan_mem/' },
  ],

  //* CT449-Phát triển ứng dụng web
  '/doannganh/CT449-Phat_trien_ung_dung_web/': [
    { text: 'CT449', link: '/doannganh/CT449-Phat_trien_ung_dung_web/' },
  ],

  //* CT484-Phát triển ứng dụng trên thiết bị di động
  '/doannganh/CT484-Phat_trien_ung_dung_tren_thiet_bi_di_dong/': [
    {
      text: 'CT484',
      link: '/doannganh/CT484-Phat_trien_ung_dung_tren_thiet_bi_di_dong/'
    },
  ],

  //! ---Begin: Toán Học
  //* TN001-Tích phân A1
  '/toanhoc/TN001-Vi_tich_phan_a1/': [
    { text: 'TN001', link: '/toanhoc/TN001-Vi_tich_phan_a1/' },
  ],

  //* TN001-Tích phân A2
  '/toanhoc/TN002-Vi_tich_phan_a2/': [
    { text: 'TN002', link: '/toanhoc/TN002-Vi_tich_phan_a2/' },
  ],

  //* TN010-Xác suất thống kê
  '/toanhoc/TN010-Xac_suat_thong_ke/': [
    {
      text: 'TN010',
      link: '/toanhoc/TN010-Xac_suat_thong_ke/'
    },
    {
      text: 'Video Bài Học',
      children: [
        '/toanhoc/TN010-Xac_suat_thong_ke/Video/1.md',
        '/toanhoc/TN010-Xac_suat_thong_ke/Video/2.md',
        '/toanhoc/TN010-Xac_suat_thong_ke/Video/3.md',
        '/toanhoc/TN010-Xac_suat_thong_ke/Video/4.md',
        '/toanhoc/TN010-Xac_suat_thong_ke/Video/5.md',
        '/toanhoc/TN010-Xac_suat_thong_ke/Video/6.md',
        '/toanhoc/TN010-Xac_suat_thong_ke/Video/7.md',
        '/toanhoc/TN010-Xac_suat_thong_ke/Video/8.md',
        '/toanhoc/TN010-Xac_suat_thong_ke/Video/9.md',
      ]
    },
  ],

  //* TN012-Đại số tuyến tính
  '/toanhoc/TN012-Dai_so_tuyen_tinh_va_hinh_hoc/': [
    {
      text: 'TN012',
      link: '/toanhoc/TN012-Dai_so_tuyen_tinh_va_hinh_hoc/'
    },
    {
      text: 'Video Bài Học',
      children: [
        '/toanhoc/TN012-Dai_so_tuyen_tinh_va_hinh_hoc/Video/1.md',
        '/toanhoc/TN012-Dai_so_tuyen_tinh_va_hinh_hoc/Video/2.md',
        '/toanhoc/TN012-Dai_so_tuyen_tinh_va_hinh_hoc/Video/3.md',
        '/toanhoc/TN012-Dai_so_tuyen_tinh_va_hinh_hoc/Video/4.md',
      ]
    }
  ],

  //* Web
  '/course/web/': [
    { text: 'Web Deverloper', link: '/course/web/'},
  ],
  //* Office
  '/course/office/': [
    { text: 'Office', link: '/course/office/' },
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
    { text: 'Server', link: '/course/server/' },
  ],
  //* Moible
  '/course/mobile/': [
    { text: 'Mobile', link: '/course/mobile/' },
  ],
  //* System
  '/course/system/': [
    { text: 'System Language', link: '/course/system/', },
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
    },
  ],
  '/tips/browser/': ['/tips/browser/extension.md'],
  '/tips/system/': ['tips/system/mathpix.md'],
}

import type { SidebarConfig } from '@vuepress/theme-default'

export const vi: SidebarConfig = {
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
    '/nhapmon/CT179-Quan_tri_he_thong/Thuchanh/6.md',
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

  //! -----Begin: Cơ Sở Ngành
  //* CT112-Mạng máy tính
  '/cosonganh/CT112-Mang_may_tinh/': [
    { text: 'CT112-Mạng Máy Tính', link: '/cosonganh/CT112-Mang_may_tinh/' },
  ],

  '/cosonganh/CT112-Mang_may_tinh/Tailieu/1/': [
    {
      text: 'Chương 1.Tổng Quan MMT',
      children: [
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/1/1.md',
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/1/2.md',
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/1/3.md',
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/1/4.md',
      ],
    },
    { text: 'Chương 2.Thành Phần MTT', link: '/cosonganh/CT112-Mang_may_tinh/Tailieu/2/1.md' },
    { text: 'Chương 3.Tầng Vật Lý', link: '/cosonganh/CT112-Mang_may_tinh/Tailieu/3/1.md' },
    { text: 'Chương 4.Tầng Liên Kết Dữ Liệu', link: '/cosonganh/CT112-Mang_may_tinh/Tailieu/4/1.md' },
    { text: 'Chương 5.Mạng Nội Bộ & Lớp Con Điều Khiển', link: '/cosonganh/CT112-Mang_may_tinh/Tailieu/5/1.md' },
    { text: 'Chương 6.Tầng Mạng', link: '/cosonganh/CT112-Mang_may_tinh/Tailieu/6/1.md' },
    { text: 'Chương 7.Tầng Vận Chuyển', link: '/cosonganh/CT112-Mang_may_tinh/Tailieu/7/1.md' },
    { text: 'Chương 8.Các Ứng Dụng Mạng', link: '/cosonganh/CT112-Mang_may_tinh/Tailieu/8/1.md' },
  ],

  '/cosonganh/CT112-Mang_may_tinh/Tailieu/2/': [
    { text: 'Chương 1.Tổng quan MTT', link: '/cosonganh/CT112-Mang_may_tinh/Tailieu/1/1.md'},
    {
      text: 'Chương 2.Thành Phần MTT',
      children: [
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/2/1.md',
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/2/2.md',
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/2/3.md',
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/2/4.md',
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/2/5.md',
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/2/6.md',
      ],
    },
    { text: 'Chương 3.Tầng Vật Lý', link: '/cosonganh/CT112-Mang_may_tinh/Tailieu/3/1.md' },
    { text: 'Chương 4.Tầng Liên Kết Dữ Liệu', link: '/cosonganh/CT112-Mang_may_tinh/Tailieu/4/1.md' },
    { text: 'Chương 5.Mạng Nội Bộ & Lớp Con Điều Khiển', link: '/cosonganh/CT112-Mang_may_tinh/Tailieu/5/1.md' },
    { text: 'Chương 6.Tầng Mạng', link: '/cosonganh/CT112-Mang_may_tinh/Tailieu/6/1.md' },
    { text: 'Chương 7.Tầng Vận Chuyển', link: '/cosonganh/CT112-Mang_may_tinh/Tailieu/7/1.md' },
    { text: 'Chương 8.Các Ứng Dụng Mạng', link: '/cosonganh/CT112-Mang_may_tinh/Tailieu/8/1.md' },
  ],
  '/cosonganh/CT112-Mang_may_tinh/Tailieu/3/': [
    { text: 'Chương 1.Tổng quan MTT', link: '/cosonganh/CT112-Mang_may_tinh/Tailieu/1/1.md'},
    { text: 'Chương 2.Thành Phần MTT', link: '/cosonganh/CT112-Mang_may_tinh/Tailieu/2/1.md' },
    {
      text: 'Chương 3.Tầng Vật Lý',
      children: [
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/3/1.md',
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/3/2.md',
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/3/3.md',
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/3/4.md',
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/3/5.md',
      ],
    },
    { text: 'Chương 4.Tầng Liên Kết Dữ Liệu', link: '/cosonganh/CT112-Mang_may_tinh/Tailieu/4/1.md' },
    { text: 'Chương 5.Mạng Nội Bộ & Lớp Con Điều Khiển', link: '/cosonganh/CT112-Mang_may_tinh/Tailieu/5/1.md' },
    { text: 'Chương 6.Tầng Mạng', link: '/cosonganh/CT112-Mang_may_tinh/Tailieu/6/1.md' },
    { text: 'Chương 7.Tầng Vận Chuyển', link: '/cosonganh/CT112-Mang_may_tinh/Tailieu/7/1.md' },
    { text: 'Chương 8.Các Ứng Dụng Mạng', link: '/cosonganh/CT112-Mang_may_tinh/Tailieu/8/1.md' },
  ],
  '/cosonganh/CT112-Mang_may_tinh/Tailieu/4/': [
    { text: 'Chương 1.Tổng quan MTT', link: '/cosonganh/CT112-Mang_may_tinh/Tailieu/1/1.md'},
    { text: 'Chương 2.Thành Phần MTT', link: '/cosonganh/CT112-Mang_may_tinh/Tailieu/2/1.md' },
    { text: 'Chương 3.Tầng Vật Lý', link: '/cosonganh/CT112-Mang_may_tinh/Tailieu/3/1.md' },
    {
      text: 'Chương 4.Tầng Liên Kết Dữ Liệu',
      children: [
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/4/1.md',
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/4/2.md',
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/4/3.md',
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/4/4.md',
      ],
    },
    { text: 'Chương 5.Mạng Nội Bộ & Lớp Con Điều Khiển', link: '/cosonganh/CT112-Mang_may_tinh/Tailieu/5/1.md' },
    { text: 'Chương 6.Tầng Mạng', link: '/cosonganh/CT112-Mang_may_tinh/Tailieu/6/1.md' },
    { text: 'Chương 7.Tầng Vận Chuyển', link: '/cosonganh/CT112-Mang_may_tinh/Tailieu/7/1.md' },
    { text: 'Chương 8.Các Ứng Dụng Mạng', link: '/cosonganh/CT112-Mang_may_tinh/Tailieu/8/1.md' },
  ],
  '/cosonganh/CT112-Mang_may_tinh/Tailieu/5/': [
    { text: 'Chương 1.Tổng quan MTT', link: '/cosonganh/CT112-Mang_may_tinh/Tailieu/1/1.md'},
    { text: 'Chương 2.Thành Phần MTT', link: '/cosonganh/CT112-Mang_may_tinh/Tailieu/2/1.md' },
    { text: 'Chương 3.Tầng Vật Lý', link: '/cosonganh/CT112-Mang_may_tinh/Tailieu/3/1.md' },
    { text: 'Chương 4.Tầng Liên Kết Dữ Liệu', link: '/cosonganh/CT112-Mang_may_tinh/Tailieu/4/1.md' },
    {
      text: 'Chương 5.Mạng Nội Bộ & Lớp Con Điều Khiển',
      children: [
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/5/1.md',
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/5/2.md',
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/5/3.md',
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/5/4.md',
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/5/5.md',
      ],
    },
    { text: 'Chương 6.Tầng Mạng', link: '/cosonganh/CT112-Mang_may_tinh/Tailieu/6/1.md' },
    { text: 'Chương 7.Tầng Vận Chuyển', link: '/cosonganh/CT112-Mang_may_tinh/Tailieu/7/1.md' },
    { text: 'Chương 8.Các Ứng Dụng Mạng', link: '/cosonganh/CT112-Mang_may_tinh/Tailieu/8/1.md' },
  ],
  '/cosonganh/CT112-Mang_may_tinh/Tailieu/6/': [
    { text: 'Chương 1.Tổng quan MTT', link: '/cosonganh/CT112-Mang_may_tinh/Tailieu/1/1.md'},
    { text: 'Chương 2.Thành Phần MTT', link: '/cosonganh/CT112-Mang_may_tinh/Tailieu/2/1.md' },
    { text: 'Chương 3.Tầng Vật Lý', link: '/cosonganh/CT112-Mang_may_tinh/Tailieu/3/1.md' },
    { text: 'Chương 4.Tầng Liên Kết Dữ Liệu', link: '/cosonganh/CT112-Mang_may_tinh/Tailieu/4/1.md' },
    { text: 'Chương 5.Mạng Nội Bộ & Lớp Con Điều Khiển', link: '/cosonganh/CT112-Mang_may_tinh/Tailieu/5/1.md' },
    {
      text: 'Chương 6.Tầng Mạng',
      children: [
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/6/1.md',
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/6/2.md',
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/6/3.md',
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/6/4.md',
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/6/5.md',
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/6/6.md',
      ],
    },
    { text: 'Chương 7.Tầng Vận Chuyển', link: '/cosonganh/CT112-Mang_may_tinh/Tailieu/7/1.md' },
    { text: 'Chương 8.Các Ứng Dụng Mạng', link: '/cosonganh/CT112-Mang_may_tinh/Tailieu/8/1.md' },
  ],
  '/cosonganh/CT112-Mang_may_tinh/Tailieu/7/': [
    { text: 'Chương 1.Tổng quan MTT', link: '/cosonganh/CT112-Mang_may_tinh/Tailieu/1/1.md'},
    { text: 'Chương 2.Thành Phần MTT', link: '/cosonganh/CT112-Mang_may_tinh/Tailieu/2/1.md' },
    { text: 'Chương 3.Tầng Vật Lý', link: '/cosonganh/CT112-Mang_may_tinh/Tailieu/3/1.md' },
    { text: 'Chương 4.Tầng Liên Kết Dữ Liệu', link: '/cosonganh/CT112-Mang_may_tinh/Tailieu/4/1.md' },
    { text: 'Chương 5.Mạng Nội Bộ & Lớp Con Điều Khiển', link: '/cosonganh/CT112-Mang_may_tinh/Tailieu/5/1.md' },
    { text: 'Chương 6.Tầng Mạng', link: '/cosonganh/CT112-Mang_may_tinh/Tailieu/6/1.md' },
    {
      text: 'Chương 7.Tầng Vận Chuyển',
      children: [
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/7/1.md',
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/7/2.md',
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/7/3.md',
      ],
    },
    { text: 'Chương 8.Các Ứng Dụng Mạng', link: '/cosonganh/CT112-Mang_may_tinh/Tailieu/8/1.md' },
  ],
  '/cosonganh/CT112-Mang_may_tinh/Tailieu/8/': [
    { text: 'Chương 1.Tổng quan MTT', link: '/cosonganh/CT112-Mang_may_tinh/Tailieu/1/1.md'},
    { text: 'Chương 2.Thành Phần MTT', link: '/cosonganh/CT112-Mang_may_tinh/Tailieu/2/1.md' },
    { text: 'Chương 3.Tầng Vật Lý', link: '/cosonganh/CT112-Mang_may_tinh/Tailieu/3/1.md' },
    { text: 'Chương 4.Tầng Liên Kết Dữ Liệu', link: '/cosonganh/CT112-Mang_may_tinh/Tailieu/4/1.md' },
    { text: 'Chương 5.Mạng Nội Bộ & Lớp Con Điều Khiển', link: '/cosonganh/CT112-Mang_may_tinh/Tailieu/5/1.md' },
    { text: 'Chương 6.Tầng Mạng', link: '/cosonganh/CT112-Mang_may_tinh/Tailieu/6/1.md' },
    { text: 'Chương 7.Tầng Vận Chuyển', link: '/cosonganh/CT112-Mang_may_tinh/Tailieu/7/1.md' },
    {
      text: 'Chương 8.Các Ứng Dụng Mạng',
      children: [
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/8/1.md',
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/8/2.md',
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/8/3.md',
        '/cosonganh/CT112-Mang_may_tinh/Tailieu/8/4.md',
      ],
    },
  ],
  '/cosonganh/CT112-Mang_may_tinh/Thuchanh/': [
    '/cosonganh/CT112-Mang_may_tinh/Thuchanh/1.md',
    '/cosonganh/CT112-Mang_may_tinh/Thuchanh/2.md',
    '/cosonganh/CT112-Mang_may_tinh/Thuchanh/3.md',
    '/cosonganh/CT112-Mang_may_tinh/Thuchanh/4.md',
    '/cosonganh/CT112-Mang_may_tinh/Thuchanh/5.md',
    '/cosonganh/CT112-Mang_may_tinh/Thuchanh/6.md',
    '/cosonganh/CT112-Mang_may_tinh/Thuchanh/7.md',
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
    { text: 'CT175-Lý Thuyết Đồ Thị', link: '/cosonganh/CT175-Ly_thuyet_do_thi/' },
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
    { text: 'Chương 2.Đồ thị dạng cây', link: '/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/2/1.md' },
    { text: 'Chương 3.Bài toán đường đi', link: '/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/3/1.md' },
    { text: 'Chương 4.Đồ thị phẳng và tô màu đồ thị', link: '/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/4/1.md'},
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
    { text: 'Chương 3.Bài toán đường đi', link: '/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/3/1.md'},
    { text: 'Chương 4.Đồ thị phẳng và tô màu đồ thị', link: '/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/4/1.md'},
  ],
  '/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/3/': [
    { text: 'Chương 1.Nền tảng Graph Theory', link: '/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/2/1.md'},
    { text: 'Chương 2.Đồ thị dạng cây', link: '/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/2/1.md' },
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
    { text: 'Chương 1.Nền tảng Graph Theory', link: '/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/2/1.md'},
    { text: 'Chương 2.Đồ thị dạng cây', link: '/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/2/1.md' },
    { text: 'Chương 3.Bài toán đường đi', link: '/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/3/1.md'},
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
  //* CT293-Mạng và truyền thông dữ liệu
  '/chuyennganh/CT293-Mang_va_truyen_thong_du_lieu/': [
    {
      text: 'CT293-Mạng Và Truyền Thông Dữ Liệu',
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
  //* CT275-Công Nghệ Web
  '/chuyennganh/CT275-Cong_nghe_web/': [
    {
      text: 'CT275-Công Nghệ Web',
      link: '/chuyennganh/CT275-Cong_nghe_web/',
    },
  ],

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

  //! ---Begin: Đồ Án Ngành
  //* CT300-Phát triển phần mềm
  '/doannganh/CT300-Phat_trien_phan_mem/': [
    { text: 'CT300-Phát Triển Phần Mềm', link: '/doannganh/CT300-Phat_trien_phan_mem/' },
  ],

  //* CT449-Phát triển ứng dụng web
  '/doannganh/CT449-Phat_trien_ung_dung_web/': [
    { text: 'CT449-Phát Triển Ứng Dụng Web', link: '/doannganh/CT449-Phat_trien_ung_dung_web/' },
  ],

  //* CT484-Phát triển ứng dụng trên thiết bị di động
  '/doannganh/CT484-Phat_trien_ung_dung_tren_thiet_bi_di_dong/': [
    { text: 'CT484-Phát Triển Ứng Dụng Trên Thiết Bị Di Động', link: '/doannganh/CT484-Phat_trien_ung_dung_tren_thiet_bi_di_dong/' },
  ],

  //! ---Begin: Toán Học
  //* TN001-Tích phân A1
  '/toanhoc/TN001-Vi_tich_phan_a1/': [
    { text: 'TN001-Vi Tích Phân A1', link: '/toanhoc/TN001-Vi_tich_phan_a1/' },
  ],

  //* TN001-Tích phân A2
  '/toanhoc/TN002-Vi_tich_phan_a2/': [
    { text: 'TN002-Vi Tích Phân A2', link: '/toanhoc/TN002-Vi_tich_phan_a2/' },
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
    { text: 'TN010-Xác suất thống kê', link: '/toanhoc/TN010-Xac_suat_thong_ke/' },
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
    { text: 'TN012-Đại số tuyến tính và hình học', link: '/toanhoc/TN012-Dai_so_tuyen_tinh_va_hinh_hoc/' },
  ],
  '/toanhoc/TN012-Dai_so_tuyen_tinh_va_hinh_hoc/Tailieu': [
    '/toanhoc/TN012-Dai_so_tuyen_tinh_va_hinh_hoc/Tailieu/1.md',
    '/toanhoc/TN012-Dai_so_tuyen_tinh_va_hinh_hoc/Tailieu/2.md',
    '/toanhoc/TN012-Dai_so_tuyen_tinh_va_hinh_hoc/Tailieu/3.md',
    '/toanhoc/TN012-Dai_so_tuyen_tinh_va_hinh_hoc/Tailieu/4.md',
  ],

  // Begin: C

  // Begin: Linux

  '/devbook/linux/': [
    '/devbook/linux/1.md',
    '/devbook/linux/2.md',
    '/devbook/linux/3.md',
    '/devbook/linux/4.md',
    '/devbook/linux/5.md',
    '/devbook/linux/6.md',
    '/devbook/linux/7.md',
    '/devbook/linux/8.md',
    '/devbook/linux/9.md',
  ],

  '/devbook/java/Basic/': [
    {
      text: 'Chương 1. Java Căn Bản',
      children: [
        '/devbook/java/Basic/1.md',
        '/devbook/java/Basic/2.md',
        '/devbook/java/Basic/3.md',
        '/devbook/java/Basic/4.md',
        '/devbook/java/Basic/5.md',
        '/devbook/java/Basic/6.md',
        '/devbook/java/Basic/7.md',
        '/devbook/java/Basic/8.md',
        '/devbook/java/Basic/9.md',
        '/devbook/java/Basic/10.md',
        '/devbook/java/Basic/11.md',
        '/devbook/java/Basic/12.md',
      ],
    },
    { text: 'Chương 2. Java Nâng Cao', link: '/devbook/java/Advanced/1.md' },
    { text: 'Chương 3. Java OOP', link: '/devbook/java/OOP/3.md' }
  ],

  '/devbook/java/Advanced/': [
    { text: 'Chương 1. Java Căn Bản', link: '/devbook/java/Basic/1.md' },
    {
      text: 'Chương 2. Java Nâng Cao',
      children: [
        '/devbook/java/Advanced/1.md',
        '/devbook/java/Advanced/2.md',
        '/devbook/java/Advanced/3.md',
        '/devbook/java/Advanced/4.md',
        '/devbook/java/Advanced/5.md',
        '/devbook/java/Advanced/6.md',
        '/devbook/java/Advanced/7.md',
        '/devbook/java/Advanced/8.md',
        '/devbook/java/Advanced/9.md',
        '/devbook/java/Advanced/10.md',
        '/devbook/java/Advanced/11.md',
        '/devbook/java/Advanced/12.md',
        '/devbook/java/Advanced/13.md',
        '/devbook/java/Advanced/14.md',
      ],
    },
    { text: 'Chương 3. Java OOP', link: '/devbook/java/OOP/1.md' }
  ],

  '/devbook/java/OOP/': [
    { text: 'Chương 1. Java Căn Bản', link: '/devbook/java/Basic/1.md' },
    { text: 'Chương 2. Java Nâng Cao', link: '/devbook/java/Advanced/1.md' },
    {
      text: 'Chương 3. Java OOP',
      children: [
        '/devbook/java/OOP/1.md',
        '/devbook/java/OOP/2.md',
        '/devbook/java/OOP/3.md',
        '/devbook/java/OOP/4.md',
        '/devbook/java/OOP/5.md',
      ],
    },
  ],

  //*Jquery
  '/devbook/jquery/': [
    '/devbook/jquery/1.md',
    '/devbook/jquery/2.md',
    '/devbook/jquery/3.md',
    '/devbook/jquery/4.md',
    '/devbook/jquery/5.md',
    '/devbook/jquery/6.md',
    '/devbook/jquery/7.md',
    '/devbook/jquery/8.md',
    '/devbook/jquery/9.md',
    '/devbook/jquery/10.md',
    '/devbook/jquery/11.md',
    '/devbook/jquery/12.md',
    '/devbook/jquery/13.md',
    '/devbook/jquery/14.md',
    '/devbook/jquery/15.md',
    '/devbook/jquery/16.md',
    '/devbook/jquery/17.md',
    '/devbook/jquery/18.md',
  ],
  //* BootStrap5
  '/devbook/bootstrap5/': [
    '/devbook/bootstrap5/1.md',
    '/devbook/bootstrap5/2.md',
    '/devbook/bootstrap5/3.md',
    '/devbook/bootstrap5/4.md',
    '/devbook/bootstrap5/5.md',
    '/devbook/bootstrap5/6.md',
    '/devbook/bootstrap5/7.md',
    '/devbook/bootstrap5/8.md',
    '/devbook/bootstrap5/9.md',
    '/devbook/bootstrap5/10.md',
    '/devbook/bootstrap5/11.md',
    '/devbook/bootstrap5/12.md',
    '/devbook/bootstrap5/13.md',
    '/devbook/bootstrap5/14.md',
    '/devbook/bootstrap5/15.md',
    '/devbook/bootstrap5/16.md',
    '/devbook/bootstrap5/17.md',
    '/devbook/bootstrap5/18.md',
    '/devbook/bootstrap5/19.md',
    '/devbook/bootstrap5/20.md',
    '/devbook/bootstrap5/21.md',
    '/devbook/bootstrap5/22.md',
    '/devbook/bootstrap5/23.md',
    '/devbook/bootstrap5/24.md',
    '/devbook/bootstrap5/25.md',
    '/devbook/bootstrap5/26.md',
    '/devbook/bootstrap5/27.md',
    '/devbook/bootstrap5/28.md',
    '/devbook/bootstrap5/29.md',
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
  //* devbook
  '/devbook/': [
    {
      text: 'DevBook for Zen',
      link: '/devbook/',
    },
  ],
  '/devbook/html/refer/': [
    {
      text: 'DevBook HTML',
      children: [
        '/devbook/html/refer/tag.md',
        '/devbook/html/refer/globalAttributes.md',
        '/devbook/html/refer/eventAttributes.md',
        '/devbook/html/refer/attribute.md',
      ],
    },
  ],
}

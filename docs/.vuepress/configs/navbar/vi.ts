import type { NavbarConfig } from '@vuepress/theme-default'

//! Các môn chưa hỗ trợ
// '/nhapmon/CT190-Nhap_mon_tri_tue_nhan_tao/',
// '/nhapmon/CT173-Kien_truc_may_tinh/',
// '/cosonganh/CT178-Nguyen_ly_he_dieu_hanh/',
// '/chuyennganh/CT273-Giao_dien_nguoi_may/',
// '/doannganh/CT271-Nien_luan_co_so_CNTT/',
// '/doannganh/CT446-Nien_luan_CNTT/',

export const vi: NavbarConfig = [
  { text: 'Trang Chủ', link: '/guide/intro.md'},

  {
    text: 'Đại Cương',
    children: [
      {
        text: 'Toán Học',
        children: [
          { text: 'Vi tích phân A1'              , link: '/toanhoc/TN001-Vi_tich_phan_a1/'},
          { text: 'Vi tích phân A2'              , link: '/toanhoc/TN002-Vi_tich_phan_a2/'},
          { text: 'Xác suất thống kê'            , link: '/toanhoc/TN010-Xac_suat_thong_ke/'},
          { text: 'Đại số tuyến tính và hình học', link: '/toanhoc/TN012-Dai_so_tuyen_tinh_va_hinh_hoc/'},
        ],
      },
      {
        text: 'Tin Học',
        children: [
          { text: 'Nền Tảng CNTT' , link: '/nhapmon/CT200-Nen_tang_cong_nghe_thong_tin/' },
        ],
      },
    ],
  },

  {
    text: 'Nền Tảng',
    children: [
      {
        text: 'Nhập Môn',
        children: [
          { text: 'Lập Trình Căn Bản A'   , link : '/nhapmon/CT101-Lap_trinh_can_ban_a/'},
          { text: 'Toán Rời Rạc'          , link : '/nhapmon/CT172-Toan_roi_rac/'},
          { text: 'Quản Trị Hệ Thống'     , link : '/nhapmon/CT179-Quan_tri_he_thong/'},
          { text: 'Nhập Môn Lập Trình Web', link : '/nhapmon/CT188-Nhap_mon_lap_trinh_web/'},
        ],
      },
      {
        text: 'Cơ Sở',
        children: [
          { text: 'Mạng Máy Tính'                , link : '/cosonganh/CT112-Mang_may_tinh/'},
          { text: 'Phân Tích Thiết Kế Thuật Toán', link : '/cosonganh/CT174-Phan_tich_va_thiet_ke_thuat_toan/'},
          { text: 'Lý Thuyết Đồ Thị'             , link : '/cosonganh/CT175-Ly_thuyet_do_thi/'},
          { text: 'Lập Trình Hướng Đối Tượng'    , link : '/cosonganh/CT176-Lap_trinh_huong_doi_tuong/'},
          { text: 'Cấu Trúc Dữ Liệu'             , link : '/cosonganh/CT177-Cau_truc_du_lieu/'},
          { text: 'Cơ Sở Dữ Liệu'                , link : '/cosonganh/CT180-Co_so_du_lieu/'},
          { text: 'Ngôn Ngữ Mô Hình Hoá'         , link : '/cosonganh/CT182-Ngon_ngu_mo_hinh_hoa/'},
          { text: 'Phân Tích Thiết Kế Hệ Thống'  , link : '/cosonganh/CT296-Phan_tich_thiet_ke_he_thong/'},
        ],
      },
    ],
  },

  {
    text: 'Nâng cao',
    children: [
      {
        text: 'Chuyên Ngành',
        children: [
          { text: 'An Toàn Hệ Thống'            , link : '/chuyennganh/CT222-An_toan_he_thong/'},
          { text: 'Mạng Và Truyền Thông Dữ Liệu', link : '/chuyennganh/CT293-Mang_va_truyen_thong_du_lieu/'},
          { text: 'Quản Lý Dữ Án Phần Mềm'      , link : '/chuyennganh/CT223-Quan_ly_du_an_phan_mem/'},
          { text: 'Công Nghệ Web'               , link : '/chuyennganh/CT275-Cong_nghe_web/'},
          { text: 'Máy Học Ứng Dụng'            , link : '/chuyennganh/CT294-May_hoc_ung_dung/'},
          { text: 'Quản Trị Dữ Liệu'            , link : '/chuyennganh/CT467-Quan_tri_du_lieu/'},
        ],
      },
      {
        text: 'Đồ Án Ngành',
        children: [
            { text: 'Phát Triển Phần Mềm'                      , link : '/doannganh/CT300-Phat_trien_phan_mem/'},
            { text: 'Phát Triển Ứng Dụng Web'                  , link : '/doannganh/CT449-Phat_trien_ung_dung_web/'},
            { text: 'Phát Triển Ứng Dụng Trên Thiết Bị Di Động', link : '/doannganh/CT484-Phat_trien_ung_dung_tren_thiet_bi_di_dong/'},
            { text: 'Luận Văn Tốt Nghiệp'                      , link : '/doannganh/CT550-Luan_van_tot_nghiep/'},
        ],
      },
    ],
  },

  {
    text: 'Tài Nguyên',
    children: [
      {
        text: 'Khóa Học',
        children: [
          { text: 'Website', link : '/course/web/' },
          { text: 'Server' , link : '/course/server/' },
          { text: 'System' , link : '/course/system/' },
          { text: 'Mobile' , link : '/course/mobile/' },
          { text: 'Office' , link : '/course/office/' },
        ],
      },
      {
        text: 'Khác',
        children: [
          { text: 'Tips', link: '/tips/' },
        ],
      },
    ],
  },
]

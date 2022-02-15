import type { NavbarConfig } from '@vuepress/theme-default'

//! Các môn chưa hỗ trợ
// '/nhapmon/CT190-Nhap_mon_tri_tue_nhan_tao/',
// '/nhapmon/CT173-Kien_truc_may_tinh/',
// '/cosonganh/CT178-Nguyen_ly_he_dieu_hanh/',
// '/chuyennganh/CT273-Giao_dien_nguoi_may/',
// '/doannganh/CT271-Nien_luan_co_so_CNTT/',
// '/doannganh/CT446-Nien_luan_CNTT/',

export const vi: NavbarConfig = [
  {
    text: 'Trang Chủ',
    link: '/guide/intro.md',
  },
  {
    text: 'Đại Cương',
    children: [
      {
        text: 'Toán Học',
        children: [
          '/toanhoc/TN001-Vi_tich_phan_a1/',
          '/toanhoc/TN002-Vi_tich_phan_a2/',
          '/toanhoc/TN010-Xac_suat_thong_ke/',
          '/toanhoc/TN012-Dai_so_tuyen_tinh_va_hinh_hoc/',
        ],
      },
      {
        text: 'Tin Học',
        children: ['/nhapmon/CT200-Nen_tang_cong_nghe_thong_tin/'],
      },
    ],
  },
  {
    text: 'Nền Tảng',
    children: [
      {
        text: 'Nhập Môn',
        children: [
          '/nhapmon/CT101-Lap_trinh_can_ban_a/',
          '/nhapmon/CT172-Toan_roi_rac/',
          '/nhapmon/CT179-Quan_tri_he_thong/',
          '/nhapmon/CT188-Nhap_mon_lap_trinh_web/',
        ],
      },
      {
        text: 'Cơ Sở',
        children: [
          '/cosonganh/CT112-Mang_may_tinh/',
          '/cosonganh/CT174-Phan_tich_va_thiet_ke_thuat_toan/',
          '/cosonganh/CT175-Ly_thuyet_do_thi/',
          '/cosonganh/CT176-Lap_trinh_huong_doi_tuong/',
          '/cosonganh/CT177-Cau_truc_du_lieu/',
          '/cosonganh/CT180-Co_so_du_lieu/',
          '/cosonganh/CT182-Ngon_ngu_mo_hinh_hoa/',
          '/cosonganh/CT296-Phan_tich_thiet_ke_he_thong/',
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
          '/chuyennganh/CT222-An_toan_he_thong/',
          '/chuyennganh/CT293-Mang_va_truyen_thong_du_lieu/',
          '/chuyennganh/CT223-Quan_ly_du_an_phan_mem/',
          '/chuyennganh/CT275-Cong_nghe_web/',
          '/chuyennganh/CT294-May_hoc_ung_dung/',
          '/chuyennganh/CT467-Quan_tri_du_lieu/',
        ],
      },
      {
        text: 'Đồ Án Ngành',
        children: [
          '/doannganh/CT300-Phat_trien_phan_mem/',
          '/doannganh/CT449-Phat_trien_ung_dung_web/',
          '/doannganh/CT484-Phat_trien_ung_dung_tren_thiet_bi_di_dong/',
          '/doannganh/CT550-Luan_van_tot_nghiep/',
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
          { text: 'Website', link: '/course/web/' },
          { text: 'Server', link: '/course/server/' },
          { text: 'System', link: '/course/system/' },
          { text: 'Mobile', link: '/course/mobile/' },
          { text: 'Office', link: '/course/office/' },
        ],
      },
      {
        text: 'Khác',
        children: [
          { text: 'Tips', link: '/tips/' },
          { text: 'DevBook', link: '/devbook/' },
        ],
      },
    ],
  },
]

// .vuepress/config.ts
import process from "node:process";
import { viteBundler } from "@vuepress/bundler-vite";
import { webpackBundler } from "@vuepress/bundler-webpack";
import { defineUserConfig } from "@vuepress/cli";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import "@vuepress/plugin-shiki";
import { defaultTheme } from "@vuepress/theme-default";
import { getDirname, path } from "@vuepress/utils";

// .vuepress/configs/head.ts
var head = [
  [
    "link",
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: `/images/icons/favicon-16x16.png`
    }
  ],
  [
    "link",
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: `/images/icons/favicon-32x32.png`
    }
  ],
  ["link", { rel: "manifest", href: "/manifest.webmanifest" }],
  ["meta", { name: "application-name", content: "VuePress" }],
  ["meta", { name: "apple-mobile-web-app-title", content: "VuePress" }],
  ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
  [
    "link",
    { rel: "apple-touch-icon", href: `/images/icons/apple-touch-icon.png` }
  ],
  [
    "link",
    {
      rel: "mask-icon",
      href: "/images/icons/safari-pinned-tab.svg",
      color: "#3eaf7c"
    }
  ],
  ["meta", { name: "msapplication-TileColor", content: "#3eaf7c" }],
  ["meta", { name: "theme-color", content: "#3eaf7c" }]
];

// .vuepress/configs/navbar/vi.ts
var navbarVi = [
  { text: "Trang Ch\u1EE7", link: "/guide/intro.md" },
  {
    text: "\u0110\u1EA1i C\u01B0\u01A1ng",
    children: [
      {
        text: "To\xE1n H\u1ECDc",
        children: [
          { text: "Vi t\xEDch ph\xE2n A1", link: "/toanhoc/TN001-Vi_tich_phan_a1/" },
          { text: "Vi t\xEDch ph\xE2n A2", link: "/toanhoc/TN002-Vi_tich_phan_a2/" },
          { text: "X\xE1c su\u1EA5t th\u1ED1ng k\xEA", link: "/toanhoc/TN010-Xac_suat_thong_ke/" },
          { text: "\u0110\u1EA1i s\u1ED1 tuy\u1EBFn t\xEDnh v\xE0 h\xECnh h\u1ECDc", link: "/toanhoc/TN012-Dai_so_tuyen_tinh_va_hinh_hoc/" }
        ]
      },
      {
        text: "Tin H\u1ECDc",
        children: [
          { text: "N\u1EC1n T\u1EA3ng CNTT", link: "/nhapmon/CT200-Nen_tang_cong_nghe_thong_tin/" }
        ]
      }
    ]
  },
  {
    text: "N\u1EC1n T\u1EA3ng",
    children: [
      {
        text: "Nh\u1EADp M\xF4n",
        children: [
          { text: "L\u1EADp Tr\xECnh C\u0103n B\u1EA3n A", link: "/nhapmon/CT101-Lap_trinh_can_ban_a/" },
          { text: "To\xE1n R\u1EDDi R\u1EA1c", link: "/nhapmon/CT172-Toan_roi_rac/" },
          { text: "Qu\u1EA3n Tr\u1ECB H\u1EC7 Th\u1ED1ng", link: "/nhapmon/CT179-Quan_tri_he_thong/" },
          { text: "Nh\u1EADp M\xF4n L\u1EADp Tr\xECnh Web", link: "/nhapmon/CT188-Nhap_mon_lap_trinh_web/" }
        ]
      },
      {
        text: "C\u01A1 S\u1EDF",
        children: [
          { text: "M\u1EA1ng M\xE1y T\xEDnh", link: "/cosonganh/CT112-Mang_may_tinh/" },
          { text: "Ph\xE2n T\xEDch Thi\u1EBFt K\u1EBF Thu\u1EADt To\xE1n", link: "/cosonganh/CT174-Phan_tich_va_thiet_ke_thuat_toan/" },
          { text: "L\xFD Thuy\u1EBFt \u0110\u1ED3 Th\u1ECB", link: "/cosonganh/CT175-Ly_thuyet_do_thi/" },
          { text: "L\u1EADp Tr\xECnh H\u01B0\u1EDBng \u0110\u1ED1i T\u01B0\u1EE3ng", link: "/cosonganh/CT176-Lap_trinh_huong_doi_tuong/" },
          { text: "C\u1EA5u Tr\xFAc D\u1EEF Li\u1EC7u", link: "/cosonganh/CT177-Cau_truc_du_lieu/" },
          { text: "C\u01A1 S\u1EDF D\u1EEF Li\u1EC7u", link: "/cosonganh/CT180-Co_so_du_lieu/" },
          { text: "Ng\xF4n Ng\u1EEF M\xF4 H\xECnh Ho\xE1", link: "/cosonganh/CT182-Ngon_ngu_mo_hinh_hoa/" },
          { text: "Ph\xE2n T\xEDch Thi\u1EBFt K\u1EBF H\u1EC7 Th\u1ED1ng", link: "/cosonganh/CT296-Phan_tich_thiet_ke_he_thong/" }
        ]
      }
    ]
  },
  {
    text: "N\xE2ng cao",
    children: [
      {
        text: "Chuy\xEAn Ng\xE0nh",
        children: [
          { text: "An To\xE0n H\u1EC7 Th\u1ED1ng", link: "/chuyennganh/CT222-An_toan_he_thong/" },
          { text: "M\u1EA1ng V\xE0 Truy\u1EC1n Th\xF4ng D\u1EEF Li\u1EC7u", link: "/chuyennganh/CT293-Mang_va_truyen_thong_du_lieu/" },
          { text: "Qu\u1EA3n L\xFD D\u1EEF \xC1n Ph\u1EA7n M\u1EC1m", link: "/chuyennganh/CT223-Quan_ly_du_an_phan_mem/" },
          { text: "C\xF4ng Ngh\u1EC7 Web", link: "/chuyennganh/CT275-Cong_nghe_web/" },
          { text: "M\xE1y H\u1ECDc \u1EE8ng D\u1EE5ng", link: "/chuyennganh/CT294-May_hoc_ung_dung/" },
          { text: "Qu\u1EA3n Tr\u1ECB D\u1EEF Li\u1EC7u", link: "/chuyennganh/CT467-Quan_tri_du_lieu/" }
        ]
      },
      {
        text: "\u0110\u1ED3 \xC1n Ng\xE0nh",
        children: [
          { text: "Ph\xE1t Tri\u1EC3n Ph\u1EA7n M\u1EC1m", link: "/doannganh/CT300-Phat_trien_phan_mem/" },
          { text: "Ph\xE1t Tri\u1EC3n \u1EE8ng D\u1EE5ng Web", link: "/doannganh/CT449-Phat_trien_ung_dung_web/" },
          { text: "Ph\xE1t Tri\u1EC3n \u1EE8ng D\u1EE5ng Tr\xEAn Thi\u1EBFt B\u1ECB Di \u0110\u1ED9ng", link: "/doannganh/CT484-Phat_trien_ung_dung_tren_thiet_bi_di_dong/" },
          { text: "Lu\u1EADn V\u0103n T\u1ED1t Nghi\u1EC7p", link: "/doannganh/CT550-Luan_van_tot_nghiep/" }
        ]
      }
    ]
  },
  {
    text: "T\xE0i Nguy\xEAn",
    children: [
      {
        text: "Kh\xF3a H\u1ECDc",
        children: [
          { text: "Website", link: "/course/web/" },
          { text: "Server", link: "/course/server/" },
          { text: "System", link: "/course/system/" },
          { text: "Mobile", link: "/course/mobile/" },
          { text: "Office", link: "/course/office/" }
        ]
      },
      {
        text: "Kh\xE1c",
        children: [
          { text: "Tips", link: "/tips/" }
        ]
      }
    ]
  }
];

// .vuepress/configs/sidebar/vi.ts
var sidebarVi = {
  "/guide/": [
    "/guide/intro.md",
    "/guide/desc.md",
    "/guide/tutorial.md",
    "/guide/contribution.md",
    "/guide/source.md"
  ],
  "/nhapmon/CT101-Lap_trinh_can_ban_a/": [
    {
      text: "CT101",
      link: "/nhapmon/CT101-Lap_trinh_can_ban_a/"
    }
  ],
  "/nhapmon/CT172-Toan_roi_rac/": [
    {
      text: "CT172",
      link: "/nhapmon/CT172-Toan_roi_rac/"
    }
  ],
  "/nhapmon/CT179-Quan_tri_he_thong/": [
    {
      text: "CT179",
      link: "/nhapmon/CT179-Quan_tri_he_thong/"
    }
  ],
  "/nhapmon/CT179-Quan_tri_he_thong/Thuchanh/": [
    "/nhapmon/CT179-Quan_tri_he_thong/Thuchanh/1.md",
    "/nhapmon/CT179-Quan_tri_he_thong/Thuchanh/2.md",
    "/nhapmon/CT179-Quan_tri_he_thong/Thuchanh/3.md",
    "/nhapmon/CT179-Quan_tri_he_thong/Thuchanh/4.md",
    "/nhapmon/CT179-Quan_tri_he_thong/Thuchanh/5.md",
    "/nhapmon/CT179-Quan_tri_he_thong/Thuchanh/6.md"
  ],
  "/nhapmon/CT188-Nhap_mon_lap_trinh_web/": [
    {
      text: "CT188",
      link: "/nhapmon/CT188-Nhap_mon_lap_trinh_web/"
    }
  ],
  "/nhapmon/CT200-Nen_tang_cong_nghe_thong_tin/": [
    {
      text: "CT200",
      link: "/nhapmon/CT200-Nen_tang_cong_nghe_thong_tin/"
    }
  ],
  "/cosonganh/CT112-Mang_may_tinh/": [
    {
      text: "CT112",
      link: "/cosonganh/CT112-Mang_may_tinh/"
    }
  ],
  "/cosonganh/CT112-Mang_may_tinh/Tailieu/": [
    "/cosonganh/CT112-Mang_may_tinh/Tailieu/1.md",
    "/cosonganh/CT112-Mang_may_tinh/Tailieu/2.md",
    "/cosonganh/CT112-Mang_may_tinh/Tailieu/3.md",
    "/cosonganh/CT112-Mang_may_tinh/Tailieu/4.md",
    "/cosonganh/CT112-Mang_may_tinh/Tailieu/5.md",
    "/cosonganh/CT112-Mang_may_tinh/Tailieu/6.md",
    "/cosonganh/CT112-Mang_may_tinh/Tailieu/7.md",
    "/cosonganh/CT112-Mang_may_tinh/Tailieu/8.md"
  ],
  "/cosonganh/CT112-Mang_may_tinh/Thuchanh/": [
    "/cosonganh/CT112-Mang_may_tinh/Thuchanh/1.md",
    "/cosonganh/CT112-Mang_may_tinh/Thuchanh/2.md",
    "/cosonganh/CT112-Mang_may_tinh/Thuchanh/3.md",
    "/cosonganh/CT112-Mang_may_tinh/Thuchanh/4.md",
    "/cosonganh/CT112-Mang_may_tinh/Thuchanh/5.md",
    "/cosonganh/CT112-Mang_may_tinh/Thuchanh/6.md",
    "/cosonganh/CT112-Mang_may_tinh/Thuchanh/7.md"
  ],
  "/cosonganh/CT174-Phan_tich_va_thiet_ke_thuat_toan/": [
    {
      text: "CT174",
      link: "/cosonganh/CT174-Phan_tich_va_thiet_ke_thuat_toan/"
    }
  ],
  "/cosonganh/CT175-Ly_thuyet_do_thi/": [
    { text: "CT175", link: "/cosonganh/CT175-Ly_thuyet_do_thi/" }
  ],
  "/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/1/": [
    {
      text: "Ch\u01B0\u01A1ng 1.N\u1EC1n t\u1EA3ng Graph Theory",
      children: [
        "/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/1/1.md",
        "/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/1/2.md",
        "/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/1/3.md",
        "/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/1/4.md",
        "/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/1/5.md",
        "/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/1/6.md",
        "/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/1/7.md"
      ]
    },
    { text: "Ch\u01B0\u01A1ng 2.\u0110\u1ED3 th\u1ECB d\u1EA1ng c\xE2y", link: "/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/2/1.md" },
    { text: "Ch\u01B0\u01A1ng 3.B\xE0i to\xE1n \u0111\u01B0\u1EDDng \u0111i", link: "/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/3/1.md" },
    { text: "Ch\u01B0\u01A1ng 4.\u0110\u1ED3 th\u1ECB ph\u1EB3ng v\xE0 t\xF4 m\xE0u \u0111\u1ED3 th\u1ECB", link: "/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/4/1.md" }
  ],
  "/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/2/": [
    { text: "Ch\u01B0\u01A1ng 1.N\u1EC1n t\u1EA3ng Graph Theory", link: "/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/1/1.md" },
    {
      text: "Ch\u01B0\u01A1ng 2.\u0110\u1ED3 th\u1ECB d\u1EA1ng c\xE2y",
      children: [
        "/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/2/1.md",
        "/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/2/2.md"
      ]
    },
    { text: "Ch\u01B0\u01A1ng 3.B\xE0i to\xE1n \u0111\u01B0\u1EDDng \u0111i", link: "/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/3/1.md" },
    { text: "Ch\u01B0\u01A1ng 4.\u0110\u1ED3 th\u1ECB ph\u1EB3ng v\xE0 t\xF4 m\xE0u \u0111\u1ED3 th\u1ECB", link: "/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/4/1.md" }
  ],
  "/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/3/": [
    { text: "Ch\u01B0\u01A1ng 1.N\u1EC1n t\u1EA3ng Graph Theory", link: "/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/2/1.md" },
    { text: "Ch\u01B0\u01A1ng 2.\u0110\u1ED3 th\u1ECB d\u1EA1ng c\xE2y", link: "/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/2/1.md" },
    {
      text: "Ch\u01B0\u01A1ng 3.B\xE0i to\xE1n \u0111\u01B0\u1EDDng \u0111i",
      children: [
        "/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/3/1.md",
        "/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/3/2.md",
        "/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/3/3.md",
        "/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/3/4.md",
        "/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/3/5.md"
      ]
    },
    { text: "Ch\u01B0\u01A1ng 4.\u0110\u1ED3 th\u1ECB ph\u1EB3ng v\xE0 t\xF4 m\xE0u \u0111\u1ED3 th\u1ECB", link: "/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/4/1.md" }
  ],
  "/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/4/": [
    { text: "Ch\u01B0\u01A1ng 1.N\u1EC1n t\u1EA3ng Graph Theory", link: "/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/2/1.md" },
    { text: "Ch\u01B0\u01A1ng 2.\u0110\u1ED3 th\u1ECB d\u1EA1ng c\xE2y", link: "/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/2/1.md" },
    { text: "Ch\u01B0\u01A1ng 3.B\xE0i to\xE1n \u0111\u01B0\u1EDDng \u0111i", link: "/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/3/1.md" },
    {
      text: "Ch\u01B0\u01A1ng 4.\u0110\u1ED3 th\u1ECB ph\u1EB3ng v\xE0 t\xF4 m\xE0u \u0111\u1ED3 th\u1ECB",
      children: ["/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/4/1.md"]
    }
  ],
  "/cosonganh/CT175-Ly_thuyet_do_thi/Thuchanh/": [
    "/cosonganh/CT175-Ly_thuyet_do_thi/Thuchanh/0.md",
    "/cosonganh/CT175-Ly_thuyet_do_thi/Thuchanh/1.md",
    "/cosonganh/CT175-Ly_thuyet_do_thi/Thuchanh/2.md",
    "/cosonganh/CT175-Ly_thuyet_do_thi/Thuchanh/3.md",
    "/cosonganh/CT175-Ly_thuyet_do_thi/Thuchanh/4.md",
    "/cosonganh/CT175-Ly_thuyet_do_thi/Thuchanh/5.md",
    "/cosonganh/CT175-Ly_thuyet_do_thi/Thuchanh/6.md"
  ],
  "/cosonganh/CT176-Lap_trinh_huong_doi_tuong/": [
    {
      text: "CT176",
      link: "/cosonganh/CT176-Lap_trinh_huong_doi_tuong/"
    }
  ],
  "/cosonganh/CT177-Cau_truc_du_lieu/": [
    {
      text: "CT177",
      link: "/cosonganh/CT177-Cau_truc_du_lieu/"
    }
  ],
  "/cosonganh/CT177-Cau_truc_du_lieu/Thuchanh/": [
    {
      text: "Ch\u01B0\u01A1ng 1. C\xE1c ki\u1EC3u d\u1EEF li\u1EC7u c\u01A1 b\u1EA3n",
      children: [
        "/cosonganh/CT177-Cau_truc_du_lieu/Thuchanh/1.md",
        "/cosonganh/CT177-Cau_truc_du_lieu/Thuchanh/2.md",
        "/cosonganh/CT177-Cau_truc_du_lieu/Thuchanh/3.md",
        "/cosonganh/CT177-Cau_truc_du_lieu/Thuchanh/4.md"
      ]
    },
    {
      text: "Ch\u01B0\u01A1ng 2. C\u1EA5u tr\xFAc c\xE2y",
      children: [
        "/cosonganh/CT177-Cau_truc_du_lieu/Thuchanh/5.md",
        "/cosonganh/CT177-Cau_truc_du_lieu/Thuchanh/6.md"
      ]
    },
    {
      text: "Ch\u01B0\u01A1ng 3. C\u1EA5u tr\xFAc t\u1EADp h\u1EE3p",
      children: ["/cosonganh/CT177-Cau_truc_du_lieu/Thuchanh/7.md"]
    }
  ],
  "/cosonganh/CT180-Co_so_du_lieu/": [
    {
      text: "CT180",
      link: "/cosonganh/CT180-Co_so_du_lieu/"
    }
  ],
  "/cosonganh/CT182-Ngon_ngu_mo_hinh_hoa/": [
    {
      text: "CT182",
      link: "/cosonganh/CT182-Ngon_ngu_mo_hinh_hoa/"
    }
  ],
  "/cosonganh/CT296-Phan_tich_thiet_ke_he_thong/": [
    {
      text: "CT296",
      link: "/cosonganh/CT296-Phan_tich_thiet_ke_he_thong/"
    }
  ],
  "/chuyennganh/CT222-An_toan_he_thong/": [
    {
      text: "CT2220",
      link: "/chuyennganh/CT222-An_toan_he_thong/"
    }
  ],
  "/chuyennganh/CT223-Quan_ly_du_an_phan_mem/": [
    {
      text: "CT223",
      link: "/chuyennganh/CT223-Quan_ly_du_an_phan_mem/"
    }
  ],
  "/chuyennganh/CT293-Mang_va_truyen_thong_du_lieu/": [
    {
      text: "CT293",
      link: "/chuyennganh/CT293-Mang_va_truyen_thong_du_lieu/"
    }
  ],
  "/chuyennganh/CT293-Mang_va_truyen_thong_du_lieu/Thuchanh/": [
    "/chuyennganh/CT293-Mang_va_truyen_thong_du_lieu/Thuchanh/1.md",
    "/chuyennganh/CT293-Mang_va_truyen_thong_du_lieu/Thuchanh/2.md",
    "/chuyennganh/CT293-Mang_va_truyen_thong_du_lieu/Thuchanh/3.md",
    "/chuyennganh/CT293-Mang_va_truyen_thong_du_lieu/Thuchanh/4.md",
    "/chuyennganh/CT293-Mang_va_truyen_thong_du_lieu/Thuchanh/5.md"
  ],
  "/chuyennganh/CT293-Mang_va_truyen_thong_du_lieu/Ontap/": [
    "/chuyennganh/CT293-Mang_va_truyen_thong_du_lieu/Ontap/1.md",
    "/chuyennganh/CT293-Mang_va_truyen_thong_du_lieu/Ontap/2.md",
    "/chuyennganh/CT293-Mang_va_truyen_thong_du_lieu/Ontap/3.md",
    "/chuyennganh/CT293-Mang_va_truyen_thong_du_lieu/Ontap/4.md",
    "/chuyennganh/CT293-Mang_va_truyen_thong_du_lieu/Ontap/5.md",
    "/chuyennganh/CT293-Mang_va_truyen_thong_du_lieu/Ontap/6.md",
    "/chuyennganh/CT293-Mang_va_truyen_thong_du_lieu/Ontap/7.md",
    "/chuyennganh/CT293-Mang_va_truyen_thong_du_lieu/Ontap/8.md"
  ],
  "/chuyennganh/CT275-Cong_nghe_web/": [
    {
      text: "CT275",
      link: "/chuyennganh/CT275-Cong_nghe_web/"
    }
  ],
  "/chuyennganh/CT294-May_hoc_ung_dung/": [
    {
      text: "CT294",
      link: "/chuyennganh/CT294-May_hoc_ung_dung/"
    }
  ],
  "/chuyennganh/CT467-Quan_tri_du_lieu/": [
    {
      text: "CT467",
      link: "/chuyennganh/CT467-Quan_tri_du_lieu/"
    }
  ],
  "/doannganh/CT300-Phat_trien_phan_mem/": [
    { text: "CT300", link: "/doannganh/CT300-Phat_trien_phan_mem/" }
  ],
  "/doannganh/CT449-Phat_trien_ung_dung_web/": [
    { text: "CT449", link: "/doannganh/CT449-Phat_trien_ung_dung_web/" }
  ],
  "/doannganh/CT484-Phat_trien_ung_dung_tren_thiet_bi_di_dong/": [
    {
      text: "CT484",
      link: "/doannganh/CT484-Phat_trien_ung_dung_tren_thiet_bi_di_dong/"
    }
  ],
  "/toanhoc/TN001-Vi_tich_phan_a1/": [
    { text: "TN001", link: "/toanhoc/TN001-Vi_tich_phan_a1/" }
  ],
  "/toanhoc/TN002-Vi_tich_phan_a2/": [
    { text: "TN002", link: "/toanhoc/TN002-Vi_tich_phan_a2/" }
  ],
  "/toanhoc/TN002-Vi_tich_phan_a2/Tailieu": [
    "/toanhoc/TN002-Vi_tich_phan_a2/Tailieu/1.md",
    "/toanhoc/TN002-Vi_tich_phan_a2/Tailieu/2.md",
    "/toanhoc/TN002-Vi_tich_phan_a2/Tailieu/3.md",
    "/toanhoc/TN002-Vi_tich_phan_a2/Tailieu/4.md",
    "/toanhoc/TN002-Vi_tich_phan_a2/Tailieu/5.md"
  ],
  "/toanhoc/TN010-Xac_suat_thong_ke/": [
    { text: "TN010", link: "/toanhoc/TN010-Xac_suat_thong_ke/" }
  ],
  "/toanhoc/TN010-Xac_suat_thong_ke/Tailieu": [
    "/toanhoc/TN010-Xac_suat_thong_ke/Tailieu/1.md",
    "/toanhoc/TN010-Xac_suat_thong_ke/Tailieu/2.md",
    "/toanhoc/TN010-Xac_suat_thong_ke/Tailieu/3.md",
    "/toanhoc/TN010-Xac_suat_thong_ke/Tailieu/4.md",
    "/toanhoc/TN010-Xac_suat_thong_ke/Tailieu/5.md",
    "/toanhoc/TN010-Xac_suat_thong_ke/Tailieu/6.md",
    "/toanhoc/TN010-Xac_suat_thong_ke/Tailieu/7.md",
    "/toanhoc/TN010-Xac_suat_thong_ke/Tailieu/8.md"
  ],
  "/toanhoc/TN012-Dai_so_tuyen_tinh_va_hinh_hoc/": [
    { text: "TN012", link: "/toanhoc/TN012-Dai_so_tuyen_tinh_va_hinh_hoc/" }
  ],
  "/toanhoc/TN012-Dai_so_tuyen_tinh_va_hinh_hoc/Tailieu": [
    "/toanhoc/TN012-Dai_so_tuyen_tinh_va_hinh_hoc/Tailieu/1.md",
    "/toanhoc/TN012-Dai_so_tuyen_tinh_va_hinh_hoc/Tailieu/2.md",
    "/toanhoc/TN012-Dai_so_tuyen_tinh_va_hinh_hoc/Tailieu/3.md",
    "/toanhoc/TN012-Dai_so_tuyen_tinh_va_hinh_hoc/Tailieu/4.md"
  ],
  "/course/web/": [
    { text: "Web Deverloper", link: "/course/web/" }
  ],
  "/course/office/": [
    { text: "Office", link: "/course/office/" }
  ],
  "/course/office/word/1/": [
    "/course/office/word/1/1.md",
    "/course/office/word/1/2.md",
    "/course/office/word/1/3.md",
    "/course/office/word/1/4.md"
  ],
  "/course/office/excel/1/": [
    "/course/office/excel/1/1.md",
    "/course/office/excel/1/2.md",
    "/course/office/excel/1/3.md",
    "/course/office/excel/1/4.md",
    "/course/office/excel/1/5.md",
    "/course/office/excel/1/6.md",
    "/course/office/excel/1/7.md",
    "/course/office/excel/1/8.md",
    "/course/office/excel/1/9.md",
    "/course/office/excel/1/10.md",
    "/course/office/excel/1/11.md"
  ],
  "/course/server/": [
    { text: "Server", link: "/course/server/" }
  ],
  "/course/mobile/": [
    { text: "Mobile", link: "/course/mobile/" }
  ],
  "/course/system/": [
    { text: "System Language", link: "/course/system/" }
  ],
  "/course/system/c/1/": [
    {
      text: "L\u1EADp tr\xECnh C++ qua 108 b\xE0i h\u1ECDc",
      children: [
        "/course/system/c/1/1.md",
        "/course/system/c/1/2.md",
        "/course/system/c/1/3.md",
        "/course/system/c/1/4.md",
        "/course/system/c/1/5.md",
        "/course/system/c/1/6.md",
        "/course/system/c/1/7.md",
        "/course/system/c/1/8.md",
        "/course/system/c/1/9.md",
        "/course/system/c/1/10.md",
        "/course/system/c/1/11.md"
      ]
    }
  ],
  "/course/system/c/2/": [
    {
      text: "C\u1EA5u tr\xFAc d\u1EEF li\u1EC7u v\xE0 gi\u1EA3i thu\u1EADt",
      children: [
        "/course/system/c/2/1.md",
        "/course/system/c/2/2.md",
        "/course/system/c/2/3.md",
        "/course/system/c/2/4.md",
        "/course/system/c/2/5.md"
      ]
    }
  ],
  "/course/system/c/3/": [
    {
      text: "L\u1EADp tr\xECnh C++ h\u01B0\u1EDBng \u0111\u1ED1i t\u01B0\u1EE3ng",
      children: [
        "/course/system/c/3/1.md",
        "/course/system/c/3/2.md",
        "/course/system/c/3/3.md",
        "/course/system/c/3/4.md",
        "/course/system/c/3/5.md",
        "/course/system/c/3/6.md",
        "/course/system/c/3/7.md",
        "/course/system/c/3/8.md",
        "/course/system/c/3/9.md",
        "/course/system/c/3/10.md",
        "/course/system/c/3/11.md"
      ]
    }
  ],
  "/tips/": [
    {
      text: "Tips & Track",
      link: "/tips/"
    }
  ],
  "/tips/browser/": ["/tips/browser/extension.md"],
  "/tips/system/": ["tips/system/mathpix.md"]
};

// .vuepress/config.ts
var __vite_injected_original_import_meta_url = "file:///D:/Github/vuepress-next-2.0.0-beta.51/docs/.vuepress/config.ts";
var __dirname = getDirname(__vite_injected_original_import_meta_url);
var isProd = process.env.NODE_ENV === "production";
var config_default = defineUserConfig({
  base: "/",
  head,
  locales: {
    "/": {
      lang: "vi",
      title: "Zen Course Guide",
      description: "M\xF4i tr\u01B0\u1EDDng h\u1ECDc t\u1EADp l\xFD t\u01B0\u1EDFng cho sinh vi\xEAn C\xF4ng Ngh\u1EC7 Th\xF4ng Tin"
    }
  },
  bundler: process.env.DOCS_BUNDLER === "webpack" ? webpackBundler() : viteBundler(),
  theme: defaultTheme({
    logo: "/images/hero.png",
    repo: "zenfection/zenctu",
    docsDir: "docs",
    editLink: false,
    locales: {
      "/": {
        navbar: navbarVi,
        sidebar: sidebarVi,
        lastUpdatedText: "C\u1EADp nh\u1EADt l\xFAc ",
        contributorsText: "T\xE1c gi\u1EA3"
      }
    },
    themePlugins: {
      git: isProd,
      prismjs: !isProd
    }
  }),
  markdown: {
    importCode: {
      handleImportPath: (str) => str.replace(/^@vuepress/, path.resolve(__dirname, "../../ecosystem"))
    }
  },
  plugins: [
    docsearchPlugin({
      appId: "3CJDV2AFXL",
      apiKey: "4f7f93d347463109c3b6fd21d3ac2424",
      indexName: "ctuvn",
      placeholder: "T\xECm Ki\u1EBFm...",
      locales: {
        "/zh/": {
          placeholder: "\u641C\u7D22\u6587\u6863",
          translations: {
            button: {
              buttonText: "\u641C\u7D22\u6587\u6863",
              buttonAriaLabel: "\u641C\u7D22\u6587\u6863"
            },
            modal: {
              searchBox: {
                resetButtonTitle: "\u6E05\u9664\u67E5\u8BE2\u6761\u4EF6",
                resetButtonAriaLabel: "\u6E05\u9664\u67E5\u8BE2\u6761\u4EF6",
                cancelButtonText: "\u53D6\u6D88",
                cancelButtonAriaLabel: "\u53D6\u6D88"
              },
              startScreen: {
                recentSearchesTitle: "\u641C\u7D22\u5386\u53F2",
                noRecentSearchesText: "\u6CA1\u6709\u641C\u7D22\u5386\u53F2",
                saveRecentSearchButtonTitle: "\u4FDD\u5B58\u81F3\u641C\u7D22\u5386\u53F2",
                removeRecentSearchButtonTitle: "\u4ECE\u641C\u7D22\u5386\u53F2\u4E2D\u79FB\u9664",
                favoriteSearchesTitle: "\u6536\u85CF",
                removeFavoriteSearchButtonTitle: "\u4ECE\u6536\u85CF\u4E2D\u79FB\u9664"
              },
              errorScreen: {
                titleText: "\u65E0\u6CD5\u83B7\u53D6\u7ED3\u679C",
                helpText: "\u4F60\u53EF\u80FD\u9700\u8981\u68C0\u67E5\u4F60\u7684\u7F51\u7EDC\u8FDE\u63A5"
              },
              footer: {
                selectText: "\u9009\u62E9",
                navigateText: "\u5207\u6362",
                closeText: "\u5173\u95ED",
                searchByText: "\u641C\u7D22\u63D0\u4F9B\u8005"
              },
              noResultsScreen: {
                noResultsText: "\u65E0\u6CD5\u627E\u5230\u76F8\u5173\u7ED3\u679C",
                suggestedQueryText: "\u4F60\u53EF\u4EE5\u5C1D\u8BD5\u67E5\u8BE2",
                reportMissingResultsText: "\u4F60\u8BA4\u4E3A\u8BE5\u67E5\u8BE2\u5E94\u8BE5\u6709\u7ED3\u679C\uFF1F",
                reportMissingResultsLinkText: "\u70B9\u51FB\u53CD\u9988"
              }
            }
          }
        }
      }
    }),
    googleAnalyticsPlugin({
      id: "G-1GE3D8ZGM4"
    }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components")
    })
  ]
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLnZ1ZXByZXNzL2NvbmZpZy50cyIsICIudnVlcHJlc3MvY29uZmlncy9oZWFkLnRzIiwgIi52dWVwcmVzcy9jb25maWdzL25hdmJhci92aS50cyIsICIudnVlcHJlc3MvY29uZmlncy9zaWRlYmFyL3ZpLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDovR2l0aHViL3Z1ZXByZXNzLW5leHQtMi4wLjAtYmV0YS41MS9kb2NzLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcR2l0aHViXFxcXHZ1ZXByZXNzLW5leHQtMi4wLjAtYmV0YS41MVxcXFxkb2NzXFxcXC52dWVwcmVzc1xcXFxjb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0dpdGh1Yi92dWVwcmVzcy1uZXh0LTIuMC4wLWJldGEuNTEvZG9jcy8udnVlcHJlc3MvY29uZmlnLnRzXCI7aW1wb3J0IHByb2Nlc3MgZnJvbSAnbm9kZTpwcm9jZXNzJ1xuaW1wb3J0IHsgdml0ZUJ1bmRsZXIgfSBmcm9tICdAdnVlcHJlc3MvYnVuZGxlci12aXRlJ1xuaW1wb3J0IHsgd2VicGFja0J1bmRsZXIgfSBmcm9tICdAdnVlcHJlc3MvYnVuZGxlci13ZWJwYWNrJ1xuaW1wb3J0IHsgZGVmaW5lVXNlckNvbmZpZyB9IGZyb20gJ0B2dWVwcmVzcy9jbGknXG5pbXBvcnQgeyBkb2NzZWFyY2hQbHVnaW4gfSBmcm9tICdAdnVlcHJlc3MvcGx1Z2luLWRvY3NlYXJjaCdcbmltcG9ydCB7IGdvb2dsZUFuYWx5dGljc1BsdWdpbiB9IGZyb20gJ0B2dWVwcmVzcy9wbHVnaW4tZ29vZ2xlLWFuYWx5dGljcydcbmltcG9ydCB7IHJlZ2lzdGVyQ29tcG9uZW50c1BsdWdpbiB9IGZyb20gJ0B2dWVwcmVzcy9wbHVnaW4tcmVnaXN0ZXItY29tcG9uZW50cydcbmltcG9ydCB7IHNoaWtpUGx1Z2luIH0gZnJvbSAnQHZ1ZXByZXNzL3BsdWdpbi1zaGlraSdcbmltcG9ydCB7IGRlZmF1bHRUaGVtZSB9IGZyb20gJ0B2dWVwcmVzcy90aGVtZS1kZWZhdWx0J1xuaW1wb3J0IHsgZ2V0RGlybmFtZSwgcGF0aCB9IGZyb20gJ0B2dWVwcmVzcy91dGlscydcbmltcG9ydCB7XG4gIGhlYWQsXG4gIG5hdmJhclZpLFxuICBzaWRlYmFyVmksXG59IGZyb20gJy4vY29uZmlncy9pbmRleC5qcydcblxuY29uc3QgX19kaXJuYW1lID0gZ2V0RGlybmFtZShpbXBvcnQubWV0YS51cmwpXG5jb25zdCBpc1Byb2QgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZVVzZXJDb25maWcoe1xuICAvLyBzZXQgc2l0ZSBiYXNlIHRvIGRlZmF1bHQgdmFsdWVcbiAgYmFzZTogJy8nLFxuXG4gIC8vIGV4dHJhIHRhZ3MgaW4gYDxoZWFkPmBcbiAgaGVhZCxcblxuICAvLyBzaXRlLWxldmVsIGxvY2FsZXMgY29uZmlnXG4gIGxvY2FsZXM6IHtcbiAgICAnLyc6IHtcbiAgICAgIGxhbmc6ICd2aScsXG4gICAgICB0aXRsZTogJ1plbiBDb3Vyc2UgR3VpZGUnLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdNXHUwMEY0aSB0clx1MDFCMFx1MUVERG5nIGhcdTFFQ0RjIHRcdTFFQURwIGxcdTAwRkQgdFx1MDFCMFx1MUVERm5nIGNobyBzaW5oIHZpXHUwMEVBbiBDXHUwMEY0bmcgTmdoXHUxRUM3IFRoXHUwMEY0bmcgVGluJyxcbiAgICB9LFxuICB9LFxuXG4gIC8vIHNwZWNpZnkgYnVuZGxlciB2aWEgZW52aXJvbm1lbnQgdmFyaWFibGVcbiAgYnVuZGxlcjpcbiAgICBwcm9jZXNzLmVudi5ET0NTX0JVTkRMRVIgPT09ICd3ZWJwYWNrJyA/IHdlYnBhY2tCdW5kbGVyKCkgOiB2aXRlQnVuZGxlcigpLFxuXG4gIC8vIGNvbmZpZ3VyZSBkZWZhdWx0IHRoZW1lXG4gIHRoZW1lOiBkZWZhdWx0VGhlbWUoe1xuICAgIGxvZ286ICcvaW1hZ2VzL2hlcm8ucG5nJyxcbiAgICByZXBvOiAnemVuZmVjdGlvbi96ZW5jdHUnLFxuICAgIGRvY3NEaXI6ICdkb2NzJyxcbiAgICBlZGl0TGluazogZmFsc2UsXG5cbiAgICAvLyB0aGVtZS1sZXZlbCBsb2NhbGVzIGNvbmZpZ1xuICAgIGxvY2FsZXM6IHtcbiAgICAgICcvJzoge1xuICAgICAgICBuYXZiYXI6IG5hdmJhclZpLFxuICAgICAgICBzaWRlYmFyOiBzaWRlYmFyVmksXG5cbiAgICAgICAgLy8hIEN1c3RvbSBwYWdlIG1ldGFcbiAgICAgICAgLy8qIExpbmsgUmVmZXJlbmNlOiBodHRwczovL3YyLnZ1ZXByZXNzLnZ1ZWpzLm9yZy9yZWZlcmVuY2UvZGVmYXVsdC10aGVtZS9jb25maWcuaHRtbCNsb2NhbGUtY29uZmlnXG4gICAgICAgIGxhc3RVcGRhdGVkVGV4dDogJ0NcdTFFQURwIG5oXHUxRUFEdCBsXHUwMEZBYyAnLFxuICAgICAgICBjb250cmlidXRvcnNUZXh0OiAnVFx1MDBFMWMgZ2lcdTFFQTMnXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICB0aGVtZVBsdWdpbnM6IHtcbiAgICAgIC8vIG9ubHkgZW5hYmxlIGdpdCBwbHVnaW4gaW4gcHJvZHVjdGlvbiBtb2RlXG4gICAgICBnaXQ6IGlzUHJvZCxcbiAgICAgIC8vIHVzZSBzaGlraSBwbHVnaW4gaW4gcHJvZHVjdGlvbiBtb2RlIGluc3RlYWRcbiAgICAgIHByaXNtanM6ICFpc1Byb2QsXG4gICAgfSxcbiAgfSksXG5cbiAgLy8gY29uZmlndXJlIG1hcmtkb3duXG4gIG1hcmtkb3duOiB7XG4gICAgaW1wb3J0Q29kZToge1xuICAgICAgaGFuZGxlSW1wb3J0UGF0aDogKHN0cikgPT5cbiAgICAgICAgc3RyLnJlcGxhY2UoL15AdnVlcHJlc3MvLCBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4vLi4vZWNvc3lzdGVtJykpLFxuICAgIH0sXG4gIH0sXG5cbiAgLy8gdXNlIHBsdWdpbnNcbiAgcGx1Z2luczogW1xuICAgIGRvY3NlYXJjaFBsdWdpbih7XG4gICAgICBhcHBJZDogJzNDSkRWMkFGWEwnLFxuICAgICAgYXBpS2V5OiAnNGY3ZjkzZDM0NzQ2MzEwOWMzYjZmZDIxZDNhYzI0MjQnLFxuICAgICAgaW5kZXhOYW1lOiAnY3R1dm4nLFxuICAgICAgcGxhY2Vob2xkZXI6ICdUXHUwMEVDbSBLaVx1MUVCRm0uLi4nLFxuICAgICAgbG9jYWxlczoge1xuICAgICAgICAnL3poLyc6IHtcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ1x1NjQxQ1x1N0QyMlx1NjU4N1x1Njg2MycsXG4gICAgICAgICAgdHJhbnNsYXRpb25zOiB7XG4gICAgICAgICAgICBidXR0b246IHtcbiAgICAgICAgICAgICAgYnV0dG9uVGV4dDogJ1x1NjQxQ1x1N0QyMlx1NjU4N1x1Njg2MycsXG4gICAgICAgICAgICAgIGJ1dHRvbkFyaWFMYWJlbDogJ1x1NjQxQ1x1N0QyMlx1NjU4N1x1Njg2MycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kYWw6IHtcbiAgICAgICAgICAgICAgc2VhcmNoQm94OiB7XG4gICAgICAgICAgICAgICAgcmVzZXRCdXR0b25UaXRsZTogJ1x1NkUwNVx1OTY2NFx1NjdFNVx1OEJFMlx1Njc2MVx1NEVGNicsXG4gICAgICAgICAgICAgICAgcmVzZXRCdXR0b25BcmlhTGFiZWw6ICdcdTZFMDVcdTk2NjRcdTY3RTVcdThCRTJcdTY3NjFcdTRFRjYnLFxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdcdTUzRDZcdTZEODgnLFxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbkFyaWFMYWJlbDogJ1x1NTNENlx1NkQ4OCcsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHN0YXJ0U2NyZWVuOiB7XG4gICAgICAgICAgICAgICAgcmVjZW50U2VhcmNoZXNUaXRsZTogJ1x1NjQxQ1x1N0QyMlx1NTM4Nlx1NTNGMicsXG4gICAgICAgICAgICAgICAgbm9SZWNlbnRTZWFyY2hlc1RleHQ6ICdcdTZDQTFcdTY3MDlcdTY0MUNcdTdEMjJcdTUzODZcdTUzRjInLFxuICAgICAgICAgICAgICAgIHNhdmVSZWNlbnRTZWFyY2hCdXR0b25UaXRsZTogJ1x1NEZERFx1NUI1OFx1ODFGM1x1NjQxQ1x1N0QyMlx1NTM4Nlx1NTNGMicsXG4gICAgICAgICAgICAgICAgcmVtb3ZlUmVjZW50U2VhcmNoQnV0dG9uVGl0bGU6ICdcdTRFQ0VcdTY0MUNcdTdEMjJcdTUzODZcdTUzRjJcdTRFMkRcdTc5RkJcdTk2NjQnLFxuICAgICAgICAgICAgICAgIGZhdm9yaXRlU2VhcmNoZXNUaXRsZTogJ1x1NjUzNlx1ODVDRicsXG4gICAgICAgICAgICAgICAgcmVtb3ZlRmF2b3JpdGVTZWFyY2hCdXR0b25UaXRsZTogJ1x1NEVDRVx1NjUzNlx1ODVDRlx1NEUyRFx1NzlGQlx1OTY2NCcsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGVycm9yU2NyZWVuOiB7XG4gICAgICAgICAgICAgICAgdGl0bGVUZXh0OiAnXHU2NUUwXHU2Q0Q1XHU4M0I3XHU1M0Q2XHU3RUQzXHU2NzlDJyxcbiAgICAgICAgICAgICAgICBoZWxwVGV4dDogJ1x1NEY2MFx1NTNFRlx1ODBGRFx1OTcwMFx1ODk4MVx1NjhDMFx1NjdFNVx1NEY2MFx1NzY4NFx1N0Y1MVx1N0VEQ1x1OEZERVx1NjNBNScsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGZvb3Rlcjoge1xuICAgICAgICAgICAgICAgIHNlbGVjdFRleHQ6ICdcdTkwMDlcdTYyRTknLFxuICAgICAgICAgICAgICAgIG5hdmlnYXRlVGV4dDogJ1x1NTIwN1x1NjM2MicsXG4gICAgICAgICAgICAgICAgY2xvc2VUZXh0OiAnXHU1MTczXHU5NUVEJyxcbiAgICAgICAgICAgICAgICBzZWFyY2hCeVRleHQ6ICdcdTY0MUNcdTdEMjJcdTYzRDBcdTRGOUJcdTgwMDUnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBub1Jlc3VsdHNTY3JlZW46IHtcbiAgICAgICAgICAgICAgICBub1Jlc3VsdHNUZXh0OiAnXHU2NUUwXHU2Q0Q1XHU2MjdFXHU1MjMwXHU3NkY4XHU1MTczXHU3RUQzXHU2NzlDJyxcbiAgICAgICAgICAgICAgICBzdWdnZXN0ZWRRdWVyeVRleHQ6ICdcdTRGNjBcdTUzRUZcdTRFRTVcdTVDMURcdThCRDVcdTY3RTVcdThCRTInLFxuICAgICAgICAgICAgICAgIHJlcG9ydE1pc3NpbmdSZXN1bHRzVGV4dDogJ1x1NEY2MFx1OEJBNFx1NEUzQVx1OEJFNVx1NjdFNVx1OEJFMlx1NUU5NFx1OEJFNVx1NjcwOVx1N0VEM1x1Njc5Q1x1RkYxRicsXG4gICAgICAgICAgICAgICAgcmVwb3J0TWlzc2luZ1Jlc3VsdHNMaW5rVGV4dDogJ1x1NzBCOVx1NTFGQlx1NTNDRFx1OTk4OCcsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIGdvb2dsZUFuYWx5dGljc1BsdWdpbih7XG4gICAgICBpZDogJ0ctMUdFM0Q4WkdNNCcsXG4gICAgfSksXG4gICAgcmVnaXN0ZXJDb21wb25lbnRzUGx1Z2luKHtcbiAgICAgIGNvbXBvbmVudHNEaXI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL2NvbXBvbmVudHMnKSxcbiAgICB9KSxcbiAgICAvLyBvbmx5IGVuYWJsZSBzaGlraSBwbHVnaW4gaW4gcHJvZHVjdGlvbiBtb2RlXG4gICAgLy9pc1Byb2QgPyBzaGlraVBsdWdpbih7IHRoZW1lOiAnZGFyay1wbHVzJyB9KSA6IFtdLFxuICBdLFxufSlcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDovR2l0aHViL3Z1ZXByZXNzLW5leHQtMi4wLjAtYmV0YS41MS9kb2NzLy52dWVwcmVzcy9jb25maWdzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxHaXRodWJcXFxcdnVlcHJlc3MtbmV4dC0yLjAuMC1iZXRhLjUxXFxcXGRvY3NcXFxcLnZ1ZXByZXNzXFxcXGNvbmZpZ3NcXFxcaGVhZC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovR2l0aHViL3Z1ZXByZXNzLW5leHQtMi4wLjAtYmV0YS41MS9kb2NzLy52dWVwcmVzcy9jb25maWdzL2hlYWQudHNcIjtpbXBvcnQgdHlwZSB7IEhlYWRDb25maWcgfSBmcm9tICdAdnVlcHJlc3MvY29yZSdcblxuZXhwb3J0IGNvbnN0IGhlYWQ6IEhlYWRDb25maWdbXSA9IFtcbiAgW1xuICAgICdsaW5rJyxcbiAgICB7XG4gICAgICByZWw6ICdpY29uJyxcbiAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgc2l6ZXM6ICcxNngxNicsXG4gICAgICBocmVmOiBgL2ltYWdlcy9pY29ucy9mYXZpY29uLTE2eDE2LnBuZ2AsXG4gICAgfSxcbiAgXSxcbiAgW1xuICAgICdsaW5rJyxcbiAgICB7XG4gICAgICByZWw6ICdpY29uJyxcbiAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgc2l6ZXM6ICczMngzMicsXG4gICAgICBocmVmOiBgL2ltYWdlcy9pY29ucy9mYXZpY29uLTMyeDMyLnBuZ2AsXG4gICAgfSxcbiAgXSxcbiAgWydsaW5rJywgeyByZWw6ICdtYW5pZmVzdCcsIGhyZWY6ICcvbWFuaWZlc3Qud2VibWFuaWZlc3QnIH1dLFxuICBbJ21ldGEnLCB7IG5hbWU6ICdhcHBsaWNhdGlvbi1uYW1lJywgY29udGVudDogJ1Z1ZVByZXNzJyB9XSxcbiAgWydtZXRhJywgeyBuYW1lOiAnYXBwbGUtbW9iaWxlLXdlYi1hcHAtdGl0bGUnLCBjb250ZW50OiAnVnVlUHJlc3MnIH1dLFxuICBbJ21ldGEnLCB7IG5hbWU6ICdhcHBsZS1tb2JpbGUtd2ViLWFwcC1zdGF0dXMtYmFyLXN0eWxlJywgY29udGVudDogJ2JsYWNrJyB9XSxcbiAgW1xuICAgICdsaW5rJyxcbiAgICB7IHJlbDogJ2FwcGxlLXRvdWNoLWljb24nLCBocmVmOiBgL2ltYWdlcy9pY29ucy9hcHBsZS10b3VjaC1pY29uLnBuZ2AgfSxcbiAgXSxcbiAgW1xuICAgICdsaW5rJyxcbiAgICB7XG4gICAgICByZWw6ICdtYXNrLWljb24nLFxuICAgICAgaHJlZjogJy9pbWFnZXMvaWNvbnMvc2FmYXJpLXBpbm5lZC10YWIuc3ZnJyxcbiAgICAgIGNvbG9yOiAnIzNlYWY3YycsXG4gICAgfSxcbiAgXSxcbiAgWydtZXRhJywgeyBuYW1lOiAnbXNhcHBsaWNhdGlvbi1UaWxlQ29sb3InLCBjb250ZW50OiAnIzNlYWY3YycgfV0sXG4gIFsnbWV0YScsIHsgbmFtZTogJ3RoZW1lLWNvbG9yJywgY29udGVudDogJyMzZWFmN2MnIH1dLFxuXVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOi9HaXRodWIvdnVlcHJlc3MtbmV4dC0yLjAuMC1iZXRhLjUxL2RvY3MvLnZ1ZXByZXNzL2NvbmZpZ3MvbmF2YmFyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxHaXRodWJcXFxcdnVlcHJlc3MtbmV4dC0yLjAuMC1iZXRhLjUxXFxcXGRvY3NcXFxcLnZ1ZXByZXNzXFxcXGNvbmZpZ3NcXFxcbmF2YmFyXFxcXHZpLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9HaXRodWIvdnVlcHJlc3MtbmV4dC0yLjAuMC1iZXRhLjUxL2RvY3MvLnZ1ZXByZXNzL2NvbmZpZ3MvbmF2YmFyL3ZpLnRzXCI7aW1wb3J0IHR5cGUgeyBOYXZiYXJDb25maWcgfSBmcm9tICdAdnVlcHJlc3MvdGhlbWUtZGVmYXVsdCdcblxuZXhwb3J0IGNvbnN0IG5hdmJhclZpOiBOYXZiYXJDb25maWcgPSBbXG4gIHsgdGV4dDogJ1RyYW5nIENoXHUxRUU3JywgbGluazogJy9ndWlkZS9pbnRyby5tZCd9LFxuXG4gIHtcbiAgICB0ZXh0OiAnXHUwMTEwXHUxRUExaSBDXHUwMUIwXHUwMUExbmcnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdUb1x1MDBFMW4gSFx1MUVDRGMnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHsgdGV4dDogJ1ZpIHRcdTAwRURjaCBwaFx1MDBFMm4gQTEnICAgICAgICAgICAgICAsIGxpbms6ICcvdG9hbmhvYy9UTjAwMS1WaV90aWNoX3BoYW5fYTEvJ30sXG4gICAgICAgICAgeyB0ZXh0OiAnVmkgdFx1MDBFRGNoIHBoXHUwMEUybiBBMicgICAgICAgICAgICAgICwgbGluazogJy90b2FuaG9jL1ROMDAyLVZpX3RpY2hfcGhhbl9hMi8nfSxcbiAgICAgICAgICB7IHRleHQ6ICdYXHUwMEUxYyBzdVx1MUVBNXQgdGhcdTFFRDFuZyBrXHUwMEVBJyAgICAgICAgICAgICwgbGluazogJy90b2FuaG9jL1ROMDEwLVhhY19zdWF0X3Rob25nX2tlLyd9LFxuICAgICAgICAgIHsgdGV4dDogJ1x1MDExMFx1MUVBMWkgc1x1MUVEMSB0dXlcdTFFQkZuIHRcdTAwRURuaCB2XHUwMEUwIGhcdTAwRUNuaCBoXHUxRUNEYycsIGxpbms6ICcvdG9hbmhvYy9UTjAxMi1EYWlfc29fdHV5ZW5fdGluaF92YV9oaW5oX2hvYy8nfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdUaW4gSFx1MUVDRGMnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHsgdGV4dDogJ05cdTFFQzFuIFRcdTFFQTNuZyBDTlRUJyAsIGxpbms6ICcvbmhhcG1vbi9DVDIwMC1OZW5fdGFuZ19jb25nX25naGVfdGhvbmdfdGluLycgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcblxuICB7XG4gICAgdGV4dDogJ05cdTFFQzFuIFRcdTFFQTNuZycsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ05oXHUxRUFEcCBNXHUwMEY0bicsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgeyB0ZXh0OiAnTFx1MUVBRHAgVHJcdTAwRUNuaCBDXHUwMTAzbiBCXHUxRUEzbiBBJyAgICwgbGluayA6ICcvbmhhcG1vbi9DVDEwMS1MYXBfdHJpbmhfY2FuX2Jhbl9hLyd9LFxuICAgICAgICAgIHsgdGV4dDogJ1RvXHUwMEUxbiBSXHUxRUREaSBSXHUxRUExYycgICAgICAgICAgLCBsaW5rIDogJy9uaGFwbW9uL0NUMTcyLVRvYW5fcm9pX3JhYy8nfSxcbiAgICAgICAgICB7IHRleHQ6ICdRdVx1MUVBM24gVHJcdTFFQ0IgSFx1MUVDNyBUaFx1MUVEMW5nJyAgICAgLCBsaW5rIDogJy9uaGFwbW9uL0NUMTc5LVF1YW5fdHJpX2hlX3Rob25nLyd9LFxuICAgICAgICAgIHsgdGV4dDogJ05oXHUxRUFEcCBNXHUwMEY0biBMXHUxRUFEcCBUclx1MDBFQ25oIFdlYicsIGxpbmsgOiAnL25oYXBtb24vQ1QxODgtTmhhcF9tb25fbGFwX3RyaW5oX3dlYi8nfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdDXHUwMUExIFNcdTFFREYnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHsgdGV4dDogJ01cdTFFQTFuZyBNXHUwMEUxeSBUXHUwMEVEbmgnICAgICAgICAgICAgICAgICwgbGluayA6ICcvY29zb25nYW5oL0NUMTEyLU1hbmdfbWF5X3RpbmgvJ30sXG4gICAgICAgICAgeyB0ZXh0OiAnUGhcdTAwRTJuIFRcdTAwRURjaCBUaGlcdTFFQkZ0IEtcdTFFQkYgVGh1XHUxRUFEdCBUb1x1MDBFMW4nLCBsaW5rIDogJy9jb3NvbmdhbmgvQ1QxNzQtUGhhbl90aWNoX3ZhX3RoaWV0X2tlX3RodWF0X3RvYW4vJ30sXG4gICAgICAgICAgeyB0ZXh0OiAnTFx1MDBGRCBUaHV5XHUxRUJGdCBcdTAxMTBcdTFFRDMgVGhcdTFFQ0InICAgICAgICAgICAgICwgbGluayA6ICcvY29zb25nYW5oL0NUMTc1LUx5X3RodXlldF9kb190aGkvJ30sXG4gICAgICAgICAgeyB0ZXh0OiAnTFx1MUVBRHAgVHJcdTAwRUNuaCBIXHUwMUIwXHUxRURCbmcgXHUwMTEwXHUxRUQxaSBUXHUwMUIwXHUxRUUzbmcnICAgICwgbGluayA6ICcvY29zb25nYW5oL0NUMTc2LUxhcF90cmluaF9odW9uZ19kb2lfdHVvbmcvJ30sXG4gICAgICAgICAgeyB0ZXh0OiAnQ1x1MUVBNXUgVHJcdTAwRkFjIERcdTFFRUYgTGlcdTFFQzd1JyAgICAgICAgICAgICAsIGxpbmsgOiAnL2Nvc29uZ2FuaC9DVDE3Ny1DYXVfdHJ1Y19kdV9saWV1Lyd9LFxuICAgICAgICAgIHsgdGV4dDogJ0NcdTAxQTEgU1x1MUVERiBEXHUxRUVGIExpXHUxRUM3dScgICAgICAgICAgICAgICAgLCBsaW5rIDogJy9jb3NvbmdhbmgvQ1QxODAtQ29fc29fZHVfbGlldS8nfSxcbiAgICAgICAgICB7IHRleHQ6ICdOZ1x1MDBGNG4gTmdcdTFFRUYgTVx1MDBGNCBIXHUwMEVDbmggSG9cdTAwRTEnICAgICAgICAgLCBsaW5rIDogJy9jb3NvbmdhbmgvQ1QxODItTmdvbl9uZ3VfbW9faGluaF9ob2EvJ30sXG4gICAgICAgICAgeyB0ZXh0OiAnUGhcdTAwRTJuIFRcdTAwRURjaCBUaGlcdTFFQkZ0IEtcdTFFQkYgSFx1MUVDNyBUaFx1MUVEMW5nJyAgLCBsaW5rIDogJy9jb3NvbmdhbmgvQ1QyOTYtUGhhbl90aWNoX3RoaWV0X2tlX2hlX3Rob25nLyd9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuXG4gIHtcbiAgICB0ZXh0OiAnTlx1MDBFMm5nIGNhbycsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ0NodXlcdTAwRUFuIE5nXHUwMEUwbmgnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHsgdGV4dDogJ0FuIFRvXHUwMEUwbiBIXHUxRUM3IFRoXHUxRUQxbmcnICAgICAgICAgICAgLCBsaW5rIDogJy9jaHV5ZW5uZ2FuaC9DVDIyMi1Bbl90b2FuX2hlX3Rob25nLyd9LFxuICAgICAgICAgIHsgdGV4dDogJ01cdTFFQTFuZyBWXHUwMEUwIFRydXlcdTFFQzFuIFRoXHUwMEY0bmcgRFx1MUVFRiBMaVx1MUVDN3UnLCBsaW5rIDogJy9jaHV5ZW5uZ2FuaC9DVDI5My1NYW5nX3ZhX3RydXllbl90aG9uZ19kdV9saWV1Lyd9LFxuICAgICAgICAgIHsgdGV4dDogJ1F1XHUxRUEzbiBMXHUwMEZEIERcdTFFRUYgXHUwMEMxbiBQaFx1MUVBN24gTVx1MUVDMW0nICAgICAgLCBsaW5rIDogJy9jaHV5ZW5uZ2FuaC9DVDIyMy1RdWFuX2x5X2R1X2FuX3BoYW5fbWVtLyd9LFxuICAgICAgICAgIHsgdGV4dDogJ0NcdTAwRjRuZyBOZ2hcdTFFQzcgV2ViJyAgICAgICAgICAgICAgICwgbGluayA6ICcvY2h1eWVubmdhbmgvQ1QyNzUtQ29uZ19uZ2hlX3dlYi8nfSxcbiAgICAgICAgICB7IHRleHQ6ICdNXHUwMEUxeSBIXHUxRUNEYyBcdTFFRThuZyBEXHUxRUU1bmcnICAgICAgICAgICAgLCBsaW5rIDogJy9jaHV5ZW5uZ2FuaC9DVDI5NC1NYXlfaG9jX3VuZ19kdW5nLyd9LFxuICAgICAgICAgIHsgdGV4dDogJ1F1XHUxRUEzbiBUclx1MUVDQiBEXHUxRUVGIExpXHUxRUM3dScgICAgICAgICAgICAsIGxpbmsgOiAnL2NodXllbm5nYW5oL0NUNDY3LVF1YW5fdHJpX2R1X2xpZXUvJ30sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnXHUwMTEwXHUxRUQzIFx1MDBDMW4gTmdcdTAwRTBuaCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7IHRleHQ6ICdQaFx1MDBFMXQgVHJpXHUxRUMzbiBQaFx1MUVBN24gTVx1MUVDMW0nICAgICAgICAgICAgICAgICAgICAgICwgbGluayA6ICcvZG9hbm5nYW5oL0NUMzAwLVBoYXRfdHJpZW5fcGhhbl9tZW0vJ30sXG4gICAgICAgICAgICB7IHRleHQ6ICdQaFx1MDBFMXQgVHJpXHUxRUMzbiBcdTFFRThuZyBEXHUxRUU1bmcgV2ViJyAgICAgICAgICAgICAgICAgICwgbGluayA6ICcvZG9hbm5nYW5oL0NUNDQ5LVBoYXRfdHJpZW5fdW5nX2R1bmdfd2ViLyd9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnUGhcdTAwRTF0IFRyaVx1MUVDM24gXHUxRUU4bmcgRFx1MUVFNW5nIFRyXHUwMEVBbiBUaGlcdTFFQkZ0IEJcdTFFQ0IgRGkgXHUwMTEwXHUxRUQ5bmcnLCBsaW5rIDogJy9kb2FubmdhbmgvQ1Q0ODQtUGhhdF90cmllbl91bmdfZHVuZ190cmVuX3RoaWV0X2JpX2RpX2RvbmcvJ30sXG4gICAgICAgICAgICB7IHRleHQ6ICdMdVx1MUVBRG4gVlx1MDEwM24gVFx1MUVEMXQgTmdoaVx1MUVDN3AnICAgICAgICAgICAgICAgICAgICAgICwgbGluayA6ICcvZG9hbm5nYW5oL0NUNTUwLUx1YW5fdmFuX3RvdF9uZ2hpZXAvJ30sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG5cbiAge1xuICAgIHRleHQ6ICdUXHUwMEUwaSBOZ3V5XHUwMEVBbicsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ0toXHUwMEYzYSBIXHUxRUNEYycsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgeyB0ZXh0OiAnV2Vic2l0ZScsIGxpbmsgOiAnL2NvdXJzZS93ZWIvJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1NlcnZlcicgLCBsaW5rIDogJy9jb3Vyc2Uvc2VydmVyLycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdTeXN0ZW0nICwgbGluayA6ICcvY291cnNlL3N5c3RlbS8nIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnTW9iaWxlJyAsIGxpbmsgOiAnL2NvdXJzZS9tb2JpbGUvJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ09mZmljZScgLCBsaW5rIDogJy9jb3Vyc2Uvb2ZmaWNlLycgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdLaFx1MDBFMWMnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHsgdGV4dDogJ1RpcHMnLCBsaW5rOiAnL3RpcHMvJyB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuXVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOi9HaXRodWIvdnVlcHJlc3MtbmV4dC0yLjAuMC1iZXRhLjUxL2RvY3MvLnZ1ZXByZXNzL2NvbmZpZ3Mvc2lkZWJhclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcR2l0aHViXFxcXHZ1ZXByZXNzLW5leHQtMi4wLjAtYmV0YS41MVxcXFxkb2NzXFxcXC52dWVwcmVzc1xcXFxjb25maWdzXFxcXHNpZGViYXJcXFxcdmkudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0dpdGh1Yi92dWVwcmVzcy1uZXh0LTIuMC4wLWJldGEuNTEvZG9jcy8udnVlcHJlc3MvY29uZmlncy9zaWRlYmFyL3ZpLnRzXCI7aW1wb3J0IHR5cGUgeyBTaWRlYmFyQ29uZmlnIH0gZnJvbSAnQHZ1ZXByZXNzL3RoZW1lLWRlZmF1bHQnXG5cbmV4cG9ydCBjb25zdCBzaWRlYmFyVmk6IFNpZGViYXJDb25maWcgPSB7XG4gIC8vISAtLS0tLUJlZ2luOiBHdWlkZVxuICAnL2d1aWRlLyc6IFtcbiAgICAnL2d1aWRlL2ludHJvLm1kJyxcbiAgICAnL2d1aWRlL2Rlc2MubWQnLFxuICAgICcvZ3VpZGUvdHV0b3JpYWwubWQnLFxuICAgICcvZ3VpZGUvY29udHJpYnV0aW9uLm1kJyxcbiAgICAnL2d1aWRlL3NvdXJjZS5tZCcsXG4gIF0sXG5cbiAgLy8hIC0tLS0tQmVnaW46IE5oXHUxRUFEcCBNXHUwMEY0bi0tLS0tXG5cbiAgLy8qIENUMTAxLUxcdTFFQURwIHRyXHUwMEVDbmggY1x1MDEwM24gYlx1MUVBM24gQVxuICAnL25oYXBtb24vQ1QxMDEtTGFwX3RyaW5oX2Nhbl9iYW5fYS8nOiBbXG4gICAge1xuICAgICAgdGV4dDogJ0NUMTAxJyxcbiAgICAgIGxpbms6ICcvbmhhcG1vbi9DVDEwMS1MYXBfdHJpbmhfY2FuX2Jhbl9hLycsXG4gICAgfSxcbiAgXSxcblxuICAvLyogQ1QxNzItVG9cdTAwRTFuIHJcdTFFRERpIHJcdTFFQTFjXG4gICcvbmhhcG1vbi9DVDE3Mi1Ub2FuX3JvaV9yYWMvJzogW1xuICAgIHtcbiAgICAgIHRleHQ6ICdDVDE3MicsXG4gICAgICBsaW5rOiAnL25oYXBtb24vQ1QxNzItVG9hbl9yb2lfcmFjLycsXG4gICAgfSxcbiAgXSxcblxuICAvLyogQ1QxNzktUXVcdTFFQTNuIHRyXHUxRUNCIGhcdTFFQzcgdGhcdTFFRDFuZ1xuICAnL25oYXBtb24vQ1QxNzktUXVhbl90cmlfaGVfdGhvbmcvJzogW1xuICAgIHtcbiAgICAgIHRleHQ6ICdDVDE3OScsXG4gICAgICBsaW5rOiAnL25oYXBtb24vQ1QxNzktUXVhbl90cmlfaGVfdGhvbmcvJyxcbiAgICB9LFxuICBdLFxuXG4gICcvbmhhcG1vbi9DVDE3OS1RdWFuX3RyaV9oZV90aG9uZy9UaHVjaGFuaC8nOiBbXG4gICAgJy9uaGFwbW9uL0NUMTc5LVF1YW5fdHJpX2hlX3Rob25nL1RodWNoYW5oLzEubWQnLFxuICAgICcvbmhhcG1vbi9DVDE3OS1RdWFuX3RyaV9oZV90aG9uZy9UaHVjaGFuaC8yLm1kJyxcbiAgICAnL25oYXBtb24vQ1QxNzktUXVhbl90cmlfaGVfdGhvbmcvVGh1Y2hhbmgvMy5tZCcsXG4gICAgJy9uaGFwbW9uL0NUMTc5LVF1YW5fdHJpX2hlX3Rob25nL1RodWNoYW5oLzQubWQnLFxuICAgICcvbmhhcG1vbi9DVDE3OS1RdWFuX3RyaV9oZV90aG9uZy9UaHVjaGFuaC81Lm1kJyxcbiAgICAnL25oYXBtb24vQ1QxNzktUXVhbl90cmlfaGVfdGhvbmcvVGh1Y2hhbmgvNi5tZCcsXG4gIF0sXG5cbiAgLy8qIENUMTg4IE5oXHUxRUFEcCBtXHUwMEY0biBsXHUxRUFEcCB0clx1MDBFQ25oIHdlYlxuICAnL25oYXBtb24vQ1QxODgtTmhhcF9tb25fbGFwX3RyaW5oX3dlYi8nOiBbXG4gICAge1xuICAgICAgdGV4dDogJ0NUMTg4JyxcbiAgICAgIGxpbms6ICcvbmhhcG1vbi9DVDE4OC1OaGFwX21vbl9sYXBfdHJpbmhfd2ViLycsXG4gICAgfSxcbiAgXSxcblxuICAvLyogQ1QyMDAtTlx1MUVDMW4gdFx1MUVBM25nIGNcdTAwRjRuZyBuZ2hcdTFFQzcgdGhcdTAwRjRuZyB0aW5cbiAgJy9uaGFwbW9uL0NUMjAwLU5lbl90YW5nX2NvbmdfbmdoZV90aG9uZ190aW4vJzogW1xuICAgIHtcbiAgICAgIHRleHQ6ICdDVDIwMCcsXG4gICAgICBsaW5rOiAnL25oYXBtb24vQ1QyMDAtTmVuX3RhbmdfY29uZ19uZ2hlX3Rob25nX3Rpbi8nLFxuICAgIH0sXG4gIF0sXG5cbiAgLy8hIC0tLS0tQmVnaW46IENcdTAxQTEgU1x1MUVERiBOZ1x1MDBFMG5oXG4gIC8vKiBDVDExMi1NXHUxRUExbmcgbVx1MDBFMXkgdFx1MDBFRG5oXG4gICcvY29zb25nYW5oL0NUMTEyLU1hbmdfbWF5X3RpbmgvJzogW1xuICAgIHtcbiAgICAgIHRleHQ6ICdDVDExMicsXG4gICAgICBsaW5rOiAnL2Nvc29uZ2FuaC9DVDExMi1NYW5nX21heV90aW5oLydcbiAgICB9LFxuICBdLFxuXG4gICcvY29zb25nYW5oL0NUMTEyLU1hbmdfbWF5X3RpbmgvVGFpbGlldS8nOiBbXG4gICAgJy9jb3NvbmdhbmgvQ1QxMTItTWFuZ19tYXlfdGluaC9UYWlsaWV1LzEubWQnLFxuICAgICcvY29zb25nYW5oL0NUMTEyLU1hbmdfbWF5X3RpbmgvVGFpbGlldS8yLm1kJyxcbiAgICAnL2Nvc29uZ2FuaC9DVDExMi1NYW5nX21heV90aW5oL1RhaWxpZXUvMy5tZCcsXG4gICAgJy9jb3NvbmdhbmgvQ1QxMTItTWFuZ19tYXlfdGluaC9UYWlsaWV1LzQubWQnLFxuICAgICcvY29zb25nYW5oL0NUMTEyLU1hbmdfbWF5X3RpbmgvVGFpbGlldS81Lm1kJyxcbiAgICAnL2Nvc29uZ2FuaC9DVDExMi1NYW5nX21heV90aW5oL1RhaWxpZXUvNi5tZCcsXG4gICAgJy9jb3NvbmdhbmgvQ1QxMTItTWFuZ19tYXlfdGluaC9UYWlsaWV1LzcubWQnLFxuICAgICcvY29zb25nYW5oL0NUMTEyLU1hbmdfbWF5X3RpbmgvVGFpbGlldS84Lm1kJyxcbiAgXSxcblxuICAnL2Nvc29uZ2FuaC9DVDExMi1NYW5nX21heV90aW5oL1RodWNoYW5oLyc6IFtcbiAgICAnL2Nvc29uZ2FuaC9DVDExMi1NYW5nX21heV90aW5oL1RodWNoYW5oLzEubWQnLFxuICAgICcvY29zb25nYW5oL0NUMTEyLU1hbmdfbWF5X3RpbmgvVGh1Y2hhbmgvMi5tZCcsXG4gICAgJy9jb3NvbmdhbmgvQ1QxMTItTWFuZ19tYXlfdGluaC9UaHVjaGFuaC8zLm1kJyxcbiAgICAnL2Nvc29uZ2FuaC9DVDExMi1NYW5nX21heV90aW5oL1RodWNoYW5oLzQubWQnLFxuICAgICcvY29zb25nYW5oL0NUMTEyLU1hbmdfbWF5X3RpbmgvVGh1Y2hhbmgvNS5tZCcsXG4gICAgJy9jb3NvbmdhbmgvQ1QxMTItTWFuZ19tYXlfdGluaC9UaHVjaGFuaC82Lm1kJyxcbiAgICAnL2Nvc29uZ2FuaC9DVDExMi1NYW5nX21heV90aW5oL1RodWNoYW5oLzcubWQnLFxuICBdLFxuXG4gIC8vKiBDVDE3NC1QaFx1MDBFMm4gdFx1MDBFRGNoIHRoaVx1MUVCRnQga1x1MUVCRiB0aHVcdTFFQUR0IHRvXHUwMEUxblxuICAnL2Nvc29uZ2FuaC9DVDE3NC1QaGFuX3RpY2hfdmFfdGhpZXRfa2VfdGh1YXRfdG9hbi8nOiBbXG4gICAge1xuICAgICAgdGV4dDogJ0NUMTc0JyxcbiAgICAgIGxpbms6ICcvY29zb25nYW5oL0NUMTc0LVBoYW5fdGljaF92YV90aGlldF9rZV90aHVhdF90b2FuLycsXG4gICAgfSxcbiAgXSxcblxuICAvLyogQ1QxNzUtTFx1MDBGRCB0aHV5XHUxRUJGdCBcdTAxMTFcdTFFRDMgdGhcdTFFQ0JcbiAgJy9jb3NvbmdhbmgvQ1QxNzUtTHlfdGh1eWV0X2RvX3RoaS8nOiBbXG4gICAgeyB0ZXh0OiAnQ1QxNzUnLCBsaW5rOiAnL2Nvc29uZ2FuaC9DVDE3NS1MeV90aHV5ZXRfZG9fdGhpLycgfSxcbiAgXSxcbiAgJy9jb3NvbmdhbmgvQ1QxNzUtTHlfdGh1eWV0X2RvX3RoaS9UYWlsaWV1LzEvJzogW1xuICAgIHtcbiAgICAgIHRleHQ6ICdDaFx1MDFCMFx1MDFBMW5nIDEuTlx1MUVDMW4gdFx1MUVBM25nIEdyYXBoIFRoZW9yeScsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICAnL2Nvc29uZ2FuaC9DVDE3NS1MeV90aHV5ZXRfZG9fdGhpL1RhaWxpZXUvMS8xLm1kJyxcbiAgICAgICAgJy9jb3NvbmdhbmgvQ1QxNzUtTHlfdGh1eWV0X2RvX3RoaS9UYWlsaWV1LzEvMi5tZCcsXG4gICAgICAgICcvY29zb25nYW5oL0NUMTc1LUx5X3RodXlldF9kb190aGkvVGFpbGlldS8xLzMubWQnLFxuICAgICAgICAnL2Nvc29uZ2FuaC9DVDE3NS1MeV90aHV5ZXRfZG9fdGhpL1RhaWxpZXUvMS80Lm1kJyxcbiAgICAgICAgJy9jb3NvbmdhbmgvQ1QxNzUtTHlfdGh1eWV0X2RvX3RoaS9UYWlsaWV1LzEvNS5tZCcsXG4gICAgICAgICcvY29zb25nYW5oL0NUMTc1LUx5X3RodXlldF9kb190aGkvVGFpbGlldS8xLzYubWQnLFxuICAgICAgICAnL2Nvc29uZ2FuaC9DVDE3NS1MeV90aHV5ZXRfZG9fdGhpL1RhaWxpZXUvMS83Lm1kJyxcbiAgICAgIF0sXG4gICAgfSxcbiAgICAgIHsgdGV4dDogJ0NoXHUwMUIwXHUwMUExbmcgMi5cdTAxMTBcdTFFRDMgdGhcdTFFQ0IgZFx1MUVBMW5nIGNcdTAwRTJ5JyAgICAgICAgICAgICAgLCBsaW5rIDogJy9jb3NvbmdhbmgvQ1QxNzUtTHlfdGh1eWV0X2RvX3RoaS9UYWlsaWV1LzIvMS5tZCcgfSxcbiAgICAgIHsgdGV4dDogJ0NoXHUwMUIwXHUwMUExbmcgMy5CXHUwMEUwaSB0b1x1MDBFMW4gXHUwMTExXHUwMUIwXHUxRUREbmcgXHUwMTExaScgICAgICAgICAgICAsIGxpbmsgOiAnL2Nvc29uZ2FuaC9DVDE3NS1MeV90aHV5ZXRfZG9fdGhpL1RhaWxpZXUvMy8xLm1kJyB9LFxuICAgICAgeyB0ZXh0OiAnQ2hcdTAxQjBcdTAxQTFuZyA0Llx1MDExMFx1MUVEMyB0aFx1MUVDQiBwaFx1MUVCM25nIHZcdTAwRTAgdFx1MDBGNCBtXHUwMEUwdSBcdTAxMTFcdTFFRDMgdGhcdTFFQ0InLCBsaW5rIDogJy9jb3NvbmdhbmgvQ1QxNzUtTHlfdGh1eWV0X2RvX3RoaS9UYWlsaWV1LzQvMS5tZCd9LFxuICBdLFxuICAnL2Nvc29uZ2FuaC9DVDE3NS1MeV90aHV5ZXRfZG9fdGhpL1RhaWxpZXUvMi8nOiBbXG4gICAgeyB0ZXh0OiAnQ2hcdTAxQjBcdTAxQTFuZyAxLk5cdTFFQzFuIHRcdTFFQTNuZyBHcmFwaCBUaGVvcnknLCBsaW5rOiAnL2Nvc29uZ2FuaC9DVDE3NS1MeV90aHV5ZXRfZG9fdGhpL1RhaWxpZXUvMS8xLm1kJ30sXG4gICAge1xuICAgICAgdGV4dDogJ0NoXHUwMUIwXHUwMUExbmcgMi5cdTAxMTBcdTFFRDMgdGhcdTFFQ0IgZFx1MUVBMW5nIGNcdTAwRTJ5JyxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICcvY29zb25nYW5oL0NUMTc1LUx5X3RodXlldF9kb190aGkvVGFpbGlldS8yLzEubWQnLFxuICAgICAgICAnL2Nvc29uZ2FuaC9DVDE3NS1MeV90aHV5ZXRfZG9fdGhpL1RhaWxpZXUvMi8yLm1kJyxcbiAgICAgIF0sXG4gICAgfSxcbiAgICAgIHsgdGV4dDogJ0NoXHUwMUIwXHUwMUExbmcgMy5CXHUwMEUwaSB0b1x1MDBFMW4gXHUwMTExXHUwMUIwXHUxRUREbmcgXHUwMTExaScgICAgICAgICAgICAsIGxpbmsgOiAnL2Nvc29uZ2FuaC9DVDE3NS1MeV90aHV5ZXRfZG9fdGhpL1RhaWxpZXUvMy8xLm1kJ30sXG4gICAgICB7IHRleHQ6ICdDaFx1MDFCMFx1MDFBMW5nIDQuXHUwMTEwXHUxRUQzIHRoXHUxRUNCIHBoXHUxRUIzbmcgdlx1MDBFMCB0XHUwMEY0IG1cdTAwRTB1IFx1MDExMVx1MUVEMyB0aFx1MUVDQicsIGxpbmsgOiAnL2Nvc29uZ2FuaC9DVDE3NS1MeV90aHV5ZXRfZG9fdGhpL1RhaWxpZXUvNC8xLm1kJ30sXG4gIF0sXG4gICcvY29zb25nYW5oL0NUMTc1LUx5X3RodXlldF9kb190aGkvVGFpbGlldS8zLyc6IFtcbiAgICB7IHRleHQ6ICdDaFx1MDFCMFx1MDFBMW5nIDEuTlx1MUVDMW4gdFx1MUVBM25nIEdyYXBoIFRoZW9yeScsIGxpbmsgOiAnL2Nvc29uZ2FuaC9DVDE3NS1MeV90aHV5ZXRfZG9fdGhpL1RhaWxpZXUvMi8xLm1kJ30sXG4gICAgeyB0ZXh0OiAnQ2hcdTAxQjBcdTAxQTFuZyAyLlx1MDExMFx1MUVEMyB0aFx1MUVDQiBkXHUxRUExbmcgY1x1MDBFMnknICAgICAgLCBsaW5rIDogJy9jb3NvbmdhbmgvQ1QxNzUtTHlfdGh1eWV0X2RvX3RoaS9UYWlsaWV1LzIvMS5tZCcgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnQ2hcdTAxQjBcdTAxQTFuZyAzLkJcdTAwRTBpIHRvXHUwMEUxbiBcdTAxMTFcdTAxQjBcdTFFRERuZyBcdTAxMTFpJyxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICcvY29zb25nYW5oL0NUMTc1LUx5X3RodXlldF9kb190aGkvVGFpbGlldS8zLzEubWQnLFxuICAgICAgICAnL2Nvc29uZ2FuaC9DVDE3NS1MeV90aHV5ZXRfZG9fdGhpL1RhaWxpZXUvMy8yLm1kJyxcbiAgICAgICAgJy9jb3NvbmdhbmgvQ1QxNzUtTHlfdGh1eWV0X2RvX3RoaS9UYWlsaWV1LzMvMy5tZCcsXG4gICAgICAgICcvY29zb25nYW5oL0NUMTc1LUx5X3RodXlldF9kb190aGkvVGFpbGlldS8zLzQubWQnLFxuICAgICAgICAnL2Nvc29uZ2FuaC9DVDE3NS1MeV90aHV5ZXRfZG9fdGhpL1RhaWxpZXUvMy81Lm1kJyxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7IHRleHQ6ICdDaFx1MDFCMFx1MDFBMW5nIDQuXHUwMTEwXHUxRUQzIHRoXHUxRUNCIHBoXHUxRUIzbmcgdlx1MDBFMCB0XHUwMEY0IG1cdTAwRTB1IFx1MDExMVx1MUVEMyB0aFx1MUVDQicsIGxpbms6ICcvY29zb25nYW5oL0NUMTc1LUx5X3RodXlldF9kb190aGkvVGFpbGlldS80LzEubWQnfSxcbiAgXSxcbiAgJy9jb3NvbmdhbmgvQ1QxNzUtTHlfdGh1eWV0X2RvX3RoaS9UYWlsaWV1LzQvJzogW1xuICAgIHsgdGV4dDogJ0NoXHUwMUIwXHUwMUExbmcgMS5OXHUxRUMxbiB0XHUxRUEzbmcgR3JhcGggVGhlb3J5JywgbGluayA6ICcvY29zb25nYW5oL0NUMTc1LUx5X3RodXlldF9kb190aGkvVGFpbGlldS8yLzEubWQnfSxcbiAgICB7IHRleHQ6ICdDaFx1MDFCMFx1MDFBMW5nIDIuXHUwMTEwXHUxRUQzIHRoXHUxRUNCIGRcdTFFQTFuZyBjXHUwMEUyeScgICAgICAsIGxpbmsgOiAnL2Nvc29uZ2FuaC9DVDE3NS1MeV90aHV5ZXRfZG9fdGhpL1RhaWxpZXUvMi8xLm1kJyB9LFxuICAgIHsgdGV4dDogJ0NoXHUwMUIwXHUwMUExbmcgMy5CXHUwMEUwaSB0b1x1MDBFMW4gXHUwMTExXHUwMUIwXHUxRUREbmcgXHUwMTExaScgICAgLCBsaW5rIDogJy9jb3NvbmdhbmgvQ1QxNzUtTHlfdGh1eWV0X2RvX3RoaS9UYWlsaWV1LzMvMS5tZCd9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdDaFx1MDFCMFx1MDFBMW5nIDQuXHUwMTEwXHUxRUQzIHRoXHUxRUNCIHBoXHUxRUIzbmcgdlx1MDBFMCB0XHUwMEY0IG1cdTAwRTB1IFx1MDExMVx1MUVEMyB0aFx1MUVDQicsXG4gICAgICBjaGlsZHJlbjogWyAnL2Nvc29uZ2FuaC9DVDE3NS1MeV90aHV5ZXRfZG9fdGhpL1RhaWxpZXUvNC8xLm1kJyBdXG4gICAgfVxuICBdLFxuICAnL2Nvc29uZ2FuaC9DVDE3NS1MeV90aHV5ZXRfZG9fdGhpL1RodWNoYW5oLyc6IFtcbiAgICAnL2Nvc29uZ2FuaC9DVDE3NS1MeV90aHV5ZXRfZG9fdGhpL1RodWNoYW5oLzAubWQnLFxuICAgICcvY29zb25nYW5oL0NUMTc1LUx5X3RodXlldF9kb190aGkvVGh1Y2hhbmgvMS5tZCcsXG4gICAgJy9jb3NvbmdhbmgvQ1QxNzUtTHlfdGh1eWV0X2RvX3RoaS9UaHVjaGFuaC8yLm1kJyxcbiAgICAnL2Nvc29uZ2FuaC9DVDE3NS1MeV90aHV5ZXRfZG9fdGhpL1RodWNoYW5oLzMubWQnLFxuICAgICcvY29zb25nYW5oL0NUMTc1LUx5X3RodXlldF9kb190aGkvVGh1Y2hhbmgvNC5tZCcsXG4gICAgJy9jb3NvbmdhbmgvQ1QxNzUtTHlfdGh1eWV0X2RvX3RoaS9UaHVjaGFuaC81Lm1kJyxcbiAgICAnL2Nvc29uZ2FuaC9DVDE3NS1MeV90aHV5ZXRfZG9fdGhpL1RodWNoYW5oLzYubWQnLFxuICBdLFxuXG4gIC8vKiBDVDE3Ni1MXHUxRUFEcCB0clx1MDBFQ25oIGhcdTAxQjBcdTFFREJuZyBcdTAxMTFcdTFFRDFpIHRcdTAxQjBcdTFFRTNuZ1xuICAnL2Nvc29uZ2FuaC9DVDE3Ni1MYXBfdHJpbmhfaHVvbmdfZG9pX3R1b25nLyc6IFtcbiAgICB7XG4gICAgICB0ZXh0OiAnQ1QxNzYnLFxuICAgICAgbGluazogJy9jb3NvbmdhbmgvQ1QxNzYtTGFwX3RyaW5oX2h1b25nX2RvaV90dW9uZy8nLFxuICAgIH0sXG4gIF0sXG4gIC8vKiBDVDE3Ny1DXHUxRUE1dSB0clx1MDBGQWMgZFx1MUVFRiBsaVx1MUVDN3VcbiAgJy9jb3NvbmdhbmgvQ1QxNzctQ2F1X3RydWNfZHVfbGlldS8nOiBbXG4gICAge1xuICAgICAgdGV4dDogJ0NUMTc3JyxcbiAgICAgIGxpbms6ICcvY29zb25nYW5oL0NUMTc3LUNhdV90cnVjX2R1X2xpZXUvJyxcbiAgICB9LFxuICBdLFxuICAnL2Nvc29uZ2FuaC9DVDE3Ny1DYXVfdHJ1Y19kdV9saWV1L1RodWNoYW5oLyc6IFtcbiAgICB7XG4gICAgICB0ZXh0OiAnQ2hcdTAxQjBcdTAxQTFuZyAxLiBDXHUwMEUxYyBraVx1MUVDM3UgZFx1MUVFRiBsaVx1MUVDN3UgY1x1MDFBMSBiXHUxRUEzbicsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICAnL2Nvc29uZ2FuaC9DVDE3Ny1DYXVfdHJ1Y19kdV9saWV1L1RodWNoYW5oLzEubWQnLFxuICAgICAgICAnL2Nvc29uZ2FuaC9DVDE3Ny1DYXVfdHJ1Y19kdV9saWV1L1RodWNoYW5oLzIubWQnLFxuICAgICAgICAnL2Nvc29uZ2FuaC9DVDE3Ny1DYXVfdHJ1Y19kdV9saWV1L1RodWNoYW5oLzMubWQnLFxuICAgICAgICAnL2Nvc29uZ2FuaC9DVDE3Ny1DYXVfdHJ1Y19kdV9saWV1L1RodWNoYW5oLzQubWQnLFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdDaFx1MDFCMFx1MDFBMW5nIDIuIENcdTFFQTV1IHRyXHUwMEZBYyBjXHUwMEUyeScsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICAnL2Nvc29uZ2FuaC9DVDE3Ny1DYXVfdHJ1Y19kdV9saWV1L1RodWNoYW5oLzUubWQnLFxuICAgICAgICAnL2Nvc29uZ2FuaC9DVDE3Ny1DYXVfdHJ1Y19kdV9saWV1L1RodWNoYW5oLzYubWQnLFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdDaFx1MDFCMFx1MDFBMW5nIDMuIENcdTFFQTV1IHRyXHUwMEZBYyB0XHUxRUFEcCBoXHUxRUUzcCcsXG4gICAgICBjaGlsZHJlbjogWycvY29zb25nYW5oL0NUMTc3LUNhdV90cnVjX2R1X2xpZXUvVGh1Y2hhbmgvNy5tZCddLFxuICAgIH0sXG4gIF0sXG5cbiAgLy8qIENUMTgwLUNcdTAxQTEgc1x1MUVERiBkXHUxRUVGIGxpXHUxRUM3dVxuICAnL2Nvc29uZ2FuaC9DVDE4MC1Db19zb19kdV9saWV1Lyc6IFtcbiAgICB7XG4gICAgICB0ZXh0OiAnQ1QxODAnLFxuICAgICAgbGluazogJy9jb3NvbmdhbmgvQ1QxODAtQ29fc29fZHVfbGlldS8nLFxuICAgIH0sXG4gIF0sXG5cbiAgLy8qIENUMTgyLU5nXHUwMEY0biBuZ1x1MUVFRiBtXHUwMEY0IGhcdTAwRUNuaCBoXHUwMEYzYVxuICAnL2Nvc29uZ2FuaC9DVDE4Mi1OZ29uX25ndV9tb19oaW5oX2hvYS8nOiBbXG4gICAge1xuICAgICAgdGV4dDogJ0NUMTgyJyxcbiAgICAgIGxpbms6ICcvY29zb25nYW5oL0NUMTgyLU5nb25fbmd1X21vX2hpbmhfaG9hLycsXG4gICAgfSxcbiAgXSxcbiAgLy8qIENUMjk2LVBoXHUwMEUybiB0XHUwMEVEY2ggdGhpXHUxRUJGdCBrXHUxRUJGIGhcdTFFQzcgdGhcdTFFRDFuZ1xuICAnL2Nvc29uZ2FuaC9DVDI5Ni1QaGFuX3RpY2hfdGhpZXRfa2VfaGVfdGhvbmcvJzogW1xuICAgIHtcbiAgICAgIHRleHQ6ICdDVDI5NicsXG4gICAgICBsaW5rOiAnL2Nvc29uZ2FuaC9DVDI5Ni1QaGFuX3RpY2hfdGhpZXRfa2VfaGVfdGhvbmcvJyxcbiAgICB9LFxuICBdLFxuXG5cbiAgLy8hIEJlZ2luOiBDaHV5XHUwMEVBbiBOZ1x1MDBFMG5oXG4gIC8vKiBDVDIyMi1BbiB0b1x1MDBFMG4gaFx1MUVDNyB0aFx1MUVEMW5nXG4gICcvY2h1eWVubmdhbmgvQ1QyMjItQW5fdG9hbl9oZV90aG9uZy8nOiBbXG4gICAge1xuICAgICAgdGV4dDogJ0NUMjIyMCcsXG4gICAgICBsaW5rOiAnL2NodXllbm5nYW5oL0NUMjIyLUFuX3RvYW5faGVfdGhvbmcvJyxcbiAgICB9LFxuICBdLFxuXG4gIC8vKiBDVDIzMy1RdVx1MUVBM24gbFx1MDBGRCBkXHUxRUYxIFx1MDBFMW4gcGhcdTFFQTduIG1cdTFFQzFtXG4gICcvY2h1eWVubmdhbmgvQ1QyMjMtUXVhbl9seV9kdV9hbl9waGFuX21lbS8nOiBbXG4gICAge1xuICAgICAgdGV4dDogJ0NUMjIzJyxcbiAgICAgIGxpbms6ICcvY2h1eWVubmdhbmgvQ1QyMjMtUXVhbl9seV9kdV9hbl9waGFuX21lbS8nLFxuICAgIH0sXG4gIF0sXG4gIC8vKiBDVDI5My1NXHUxRUExbmcgdlx1MDBFMCB0cnV5XHUxRUMxbiB0aFx1MDBGNG5nIGRcdTFFRUYgbGlcdTFFQzd1XG4gICcvY2h1eWVubmdhbmgvQ1QyOTMtTWFuZ192YV90cnV5ZW5fdGhvbmdfZHVfbGlldS8nOiBbXG4gICAge1xuICAgICAgdGV4dDogJ0NUMjkzJyxcbiAgICAgIGxpbms6ICcvY2h1eWVubmdhbmgvQ1QyOTMtTWFuZ192YV90cnV5ZW5fdGhvbmdfZHVfbGlldS8nLFxuICAgIH1cbiAgXSxcbiAgJy9jaHV5ZW5uZ2FuaC9DVDI5My1NYW5nX3ZhX3RydXllbl90aG9uZ19kdV9saWV1L1RodWNoYW5oLyc6IFtcbiAgICAnL2NodXllbm5nYW5oL0NUMjkzLU1hbmdfdmFfdHJ1eWVuX3Rob25nX2R1X2xpZXUvVGh1Y2hhbmgvMS5tZCcsXG4gICAgJy9jaHV5ZW5uZ2FuaC9DVDI5My1NYW5nX3ZhX3RydXllbl90aG9uZ19kdV9saWV1L1RodWNoYW5oLzIubWQnLFxuICAgICcvY2h1eWVubmdhbmgvQ1QyOTMtTWFuZ192YV90cnV5ZW5fdGhvbmdfZHVfbGlldS9UaHVjaGFuaC8zLm1kJyxcbiAgICAnL2NodXllbm5nYW5oL0NUMjkzLU1hbmdfdmFfdHJ1eWVuX3Rob25nX2R1X2xpZXUvVGh1Y2hhbmgvNC5tZCcsXG4gICAgJy9jaHV5ZW5uZ2FuaC9DVDI5My1NYW5nX3ZhX3RydXllbl90aG9uZ19kdV9saWV1L1RodWNoYW5oLzUubWQnLFxuICBdLFxuICAnL2NodXllbm5nYW5oL0NUMjkzLU1hbmdfdmFfdHJ1eWVuX3Rob25nX2R1X2xpZXUvT250YXAvJzogW1xuICAgICcvY2h1eWVubmdhbmgvQ1QyOTMtTWFuZ192YV90cnV5ZW5fdGhvbmdfZHVfbGlldS9PbnRhcC8xLm1kJyxcbiAgICAnL2NodXllbm5nYW5oL0NUMjkzLU1hbmdfdmFfdHJ1eWVuX3Rob25nX2R1X2xpZXUvT250YXAvMi5tZCcsXG4gICAgJy9jaHV5ZW5uZ2FuaC9DVDI5My1NYW5nX3ZhX3RydXllbl90aG9uZ19kdV9saWV1L09udGFwLzMubWQnLFxuICAgICcvY2h1eWVubmdhbmgvQ1QyOTMtTWFuZ192YV90cnV5ZW5fdGhvbmdfZHVfbGlldS9PbnRhcC80Lm1kJyxcbiAgICAnL2NodXllbm5nYW5oL0NUMjkzLU1hbmdfdmFfdHJ1eWVuX3Rob25nX2R1X2xpZXUvT250YXAvNS5tZCcsXG4gICAgJy9jaHV5ZW5uZ2FuaC9DVDI5My1NYW5nX3ZhX3RydXllbl90aG9uZ19kdV9saWV1L09udGFwLzYubWQnLFxuICAgICcvY2h1eWVubmdhbmgvQ1QyOTMtTWFuZ192YV90cnV5ZW5fdGhvbmdfZHVfbGlldS9PbnRhcC83Lm1kJyxcbiAgICAnL2NodXllbm5nYW5oL0NUMjkzLU1hbmdfdmFfdHJ1eWVuX3Rob25nX2R1X2xpZXUvT250YXAvOC5tZCcsXG4gIF0sXG4gIC8vKiBDVDI3NS1DXHUwMEY0bmcgTmdoXHUxRUM3IFdlYlxuICAnL2NodXllbm5nYW5oL0NUMjc1LUNvbmdfbmdoZV93ZWIvJzogW1xuICAgIHtcbiAgICAgIHRleHQ6ICdDVDI3NScsXG4gICAgICBsaW5rOiAnL2NodXllbm5nYW5oL0NUMjc1LUNvbmdfbmdoZV93ZWIvJyxcbiAgICB9LFxuICBdLFxuXG4gIC8vKiBDVDI5NC1NXHUwMEUxeSBoXHUxRUNEYyBcdTFFRTluZyBkXHUxRUU1bmdcbiAgJy9jaHV5ZW5uZ2FuaC9DVDI5NC1NYXlfaG9jX3VuZ19kdW5nLyc6IFtcbiAgICB7XG4gICAgICB0ZXh0OiAnQ1QyOTQnLFxuICAgICAgbGluazogJy9jaHV5ZW5uZ2FuaC9DVDI5NC1NYXlfaG9jX3VuZ19kdW5nLycsXG4gICAgfSxcbiAgXSxcblxuICAvLyogQ1Q0NjctUXVcdTFFQTNuIHRyXHUxRUNCIGRcdTFFRUYgbGlcdTFFQzd1XG4gICcvY2h1eWVubmdhbmgvQ1Q0NjctUXVhbl90cmlfZHVfbGlldS8nOiBbXG4gICAge1xuICAgICAgdGV4dDogJ0NUNDY3JyxcbiAgICAgIGxpbms6ICcvY2h1eWVubmdhbmgvQ1Q0NjctUXVhbl90cmlfZHVfbGlldS8nLFxuICAgIH0sXG4gIF0sXG5cbiAgLy8hIC0tLUJlZ2luOiBcdTAxMTBcdTFFRDMgXHUwMEMxbiBOZ1x1MDBFMG5oXG4gIC8vKiBDVDMwMC1QaFx1MDBFMXQgdHJpXHUxRUMzbiBwaFx1MUVBN24gbVx1MUVDMW1cbiAgJy9kb2FubmdhbmgvQ1QzMDAtUGhhdF90cmllbl9waGFuX21lbS8nOiBbXG4gICAgeyB0ZXh0OiAnQ1QzMDAnLCBsaW5rOiAnL2RvYW5uZ2FuaC9DVDMwMC1QaGF0X3RyaWVuX3BoYW5fbWVtLycgfSxcbiAgXSxcblxuICAvLyogQ1Q0NDktUGhcdTAwRTF0IHRyaVx1MUVDM24gXHUxRUU5bmcgZFx1MUVFNW5nIHdlYlxuICAnL2RvYW5uZ2FuaC9DVDQ0OS1QaGF0X3RyaWVuX3VuZ19kdW5nX3dlYi8nOiBbXG4gICAgeyB0ZXh0OiAnQ1Q0NDknLCBsaW5rOiAnL2RvYW5uZ2FuaC9DVDQ0OS1QaGF0X3RyaWVuX3VuZ19kdW5nX3dlYi8nIH0sXG4gIF0sXG5cbiAgLy8qIENUNDg0LVBoXHUwMEUxdCB0cmlcdTFFQzNuIFx1MUVFOW5nIGRcdTFFRTVuZyB0clx1MDBFQW4gdGhpXHUxRUJGdCBiXHUxRUNCIGRpIFx1MDExMVx1MUVEOW5nXG4gICcvZG9hbm5nYW5oL0NUNDg0LVBoYXRfdHJpZW5fdW5nX2R1bmdfdHJlbl90aGlldF9iaV9kaV9kb25nLyc6IFtcbiAgICB7XG4gICAgICB0ZXh0OiAnQ1Q0ODQnLFxuICAgICAgbGluazogJy9kb2FubmdhbmgvQ1Q0ODQtUGhhdF90cmllbl91bmdfZHVuZ190cmVuX3RoaWV0X2JpX2RpX2RvbmcvJ1xuICAgIH0sXG4gIF0sXG5cbiAgLy8hIC0tLUJlZ2luOiBUb1x1MDBFMW4gSFx1MUVDRGNcbiAgLy8qIFROMDAxLVRcdTAwRURjaCBwaFx1MDBFMm4gQTFcbiAgJy90b2FuaG9jL1ROMDAxLVZpX3RpY2hfcGhhbl9hMS8nOiBbXG4gICAgeyB0ZXh0OiAnVE4wMDEnLCBsaW5rOiAnL3RvYW5ob2MvVE4wMDEtVmlfdGljaF9waGFuX2ExLycgfSxcbiAgXSxcblxuICAvLyogVE4wMDEtVFx1MDBFRGNoIHBoXHUwMEUybiBBMlxuICAnL3RvYW5ob2MvVE4wMDItVmlfdGljaF9waGFuX2EyLyc6IFtcbiAgICB7IHRleHQ6ICdUTjAwMicsIGxpbms6ICcvdG9hbmhvYy9UTjAwMi1WaV90aWNoX3BoYW5fYTIvJyB9LFxuICBdLFxuICAnL3RvYW5ob2MvVE4wMDItVmlfdGljaF9waGFuX2EyL1RhaWxpZXUnOiBbXG4gICAgJy90b2FuaG9jL1ROMDAyLVZpX3RpY2hfcGhhbl9hMi9UYWlsaWV1LzEubWQnLFxuICAgICcvdG9hbmhvYy9UTjAwMi1WaV90aWNoX3BoYW5fYTIvVGFpbGlldS8yLm1kJyxcbiAgICAnL3RvYW5ob2MvVE4wMDItVmlfdGljaF9waGFuX2EyL1RhaWxpZXUvMy5tZCcsXG4gICAgJy90b2FuaG9jL1ROMDAyLVZpX3RpY2hfcGhhbl9hMi9UYWlsaWV1LzQubWQnLFxuICAgICcvdG9hbmhvYy9UTjAwMi1WaV90aWNoX3BoYW5fYTIvVGFpbGlldS81Lm1kJyxcbiAgXSxcblxuICAvLyogVE4wMTAtWFx1MDBFMWMgc3VcdTFFQTV0IHRoXHUxRUQxbmcga1x1MDBFQVxuICAnL3RvYW5ob2MvVE4wMTAtWGFjX3N1YXRfdGhvbmdfa2UvJzogW1xuICAgIHsgdGV4dDogJ1ROMDEwJywgbGluazogJy90b2FuaG9jL1ROMDEwLVhhY19zdWF0X3Rob25nX2tlLycgfSxcbiAgXSxcbiAgJy90b2FuaG9jL1ROMDEwLVhhY19zdWF0X3Rob25nX2tlL1RhaWxpZXUnOiBbXG4gICAgJy90b2FuaG9jL1ROMDEwLVhhY19zdWF0X3Rob25nX2tlL1RhaWxpZXUvMS5tZCcsXG4gICAgJy90b2FuaG9jL1ROMDEwLVhhY19zdWF0X3Rob25nX2tlL1RhaWxpZXUvMi5tZCcsXG4gICAgJy90b2FuaG9jL1ROMDEwLVhhY19zdWF0X3Rob25nX2tlL1RhaWxpZXUvMy5tZCcsXG4gICAgJy90b2FuaG9jL1ROMDEwLVhhY19zdWF0X3Rob25nX2tlL1RhaWxpZXUvNC5tZCcsXG4gICAgJy90b2FuaG9jL1ROMDEwLVhhY19zdWF0X3Rob25nX2tlL1RhaWxpZXUvNS5tZCcsXG4gICAgJy90b2FuaG9jL1ROMDEwLVhhY19zdWF0X3Rob25nX2tlL1RhaWxpZXUvNi5tZCcsXG4gICAgJy90b2FuaG9jL1ROMDEwLVhhY19zdWF0X3Rob25nX2tlL1RhaWxpZXUvNy5tZCcsXG4gICAgJy90b2FuaG9jL1ROMDEwLVhhY19zdWF0X3Rob25nX2tlL1RhaWxpZXUvOC5tZCcsXG4gIF0sXG5cbiAgLy8qIFROMDEyLVx1MDExMFx1MUVBMWkgc1x1MUVEMSB0dXlcdTFFQkZuIHRcdTAwRURuaFxuICAnL3RvYW5ob2MvVE4wMTItRGFpX3NvX3R1eWVuX3RpbmhfdmFfaGluaF9ob2MvJzogW1xuICAgIHsgdGV4dDogJ1ROMDEyJywgbGluazogJy90b2FuaG9jL1ROMDEyLURhaV9zb190dXllbl90aW5oX3ZhX2hpbmhfaG9jLycgfSxcbiAgXSxcbiAgJy90b2FuaG9jL1ROMDEyLURhaV9zb190dXllbl90aW5oX3ZhX2hpbmhfaG9jL1RhaWxpZXUnOiBbXG4gICAgJy90b2FuaG9jL1ROMDEyLURhaV9zb190dXllbl90aW5oX3ZhX2hpbmhfaG9jL1RhaWxpZXUvMS5tZCcsXG4gICAgJy90b2FuaG9jL1ROMDEyLURhaV9zb190dXllbl90aW5oX3ZhX2hpbmhfaG9jL1RhaWxpZXUvMi5tZCcsXG4gICAgJy90b2FuaG9jL1ROMDEyLURhaV9zb190dXllbl90aW5oX3ZhX2hpbmhfaG9jL1RhaWxpZXUvMy5tZCcsXG4gICAgJy90b2FuaG9jL1ROMDEyLURhaV9zb190dXllbl90aW5oX3ZhX2hpbmhfaG9jL1RhaWxpZXUvNC5tZCcsXG4gIF0sXG5cbiAgLy8qIFdlYlxuICAnL2NvdXJzZS93ZWIvJzogW1xuICAgIHsgdGV4dDogJ1dlYiBEZXZlcmxvcGVyJywgbGluazogJy9jb3Vyc2Uvd2ViLyd9LFxuICBdLFxuICAvLyogT2ZmaWNlXG4gICcvY291cnNlL29mZmljZS8nOiBbXG4gICAgeyB0ZXh0OiAnT2ZmaWNlJywgbGluazogJy9jb3Vyc2Uvb2ZmaWNlLycgfSxcbiAgXSxcbiAgLy8gV29yZFxuICAnL2NvdXJzZS9vZmZpY2Uvd29yZC8xLyc6IFtcbiAgICAnL2NvdXJzZS9vZmZpY2Uvd29yZC8xLzEubWQnLFxuICAgICcvY291cnNlL29mZmljZS93b3JkLzEvMi5tZCcsXG4gICAgJy9jb3Vyc2Uvb2ZmaWNlL3dvcmQvMS8zLm1kJyxcbiAgICAnL2NvdXJzZS9vZmZpY2Uvd29yZC8xLzQubWQnLFxuICBdLFxuICAvLyBFeGNlbFxuICAnL2NvdXJzZS9vZmZpY2UvZXhjZWwvMS8nOiBbXG4gICAgJy9jb3Vyc2Uvb2ZmaWNlL2V4Y2VsLzEvMS5tZCcsXG4gICAgJy9jb3Vyc2Uvb2ZmaWNlL2V4Y2VsLzEvMi5tZCcsXG4gICAgJy9jb3Vyc2Uvb2ZmaWNlL2V4Y2VsLzEvMy5tZCcsXG4gICAgJy9jb3Vyc2Uvb2ZmaWNlL2V4Y2VsLzEvNC5tZCcsXG4gICAgJy9jb3Vyc2Uvb2ZmaWNlL2V4Y2VsLzEvNS5tZCcsXG4gICAgJy9jb3Vyc2Uvb2ZmaWNlL2V4Y2VsLzEvNi5tZCcsXG4gICAgJy9jb3Vyc2Uvb2ZmaWNlL2V4Y2VsLzEvNy5tZCcsXG4gICAgJy9jb3Vyc2Uvb2ZmaWNlL2V4Y2VsLzEvOC5tZCcsXG4gICAgJy9jb3Vyc2Uvb2ZmaWNlL2V4Y2VsLzEvOS5tZCcsXG4gICAgJy9jb3Vyc2Uvb2ZmaWNlL2V4Y2VsLzEvMTAubWQnLFxuICAgICcvY291cnNlL29mZmljZS9leGNlbC8xLzExLm1kJyxcbiAgXSxcbiAgLy8qIFNlcnZlclxuICAnL2NvdXJzZS9zZXJ2ZXIvJzogW1xuICAgIHsgdGV4dDogJ1NlcnZlcicsIGxpbms6ICcvY291cnNlL3NlcnZlci8nIH0sXG4gIF0sXG4gIC8vKiBNb2libGVcbiAgJy9jb3Vyc2UvbW9iaWxlLyc6IFtcbiAgICB7IHRleHQ6ICdNb2JpbGUnLCBsaW5rOiAnL2NvdXJzZS9tb2JpbGUvJyB9LFxuICBdLFxuICAvLyogU3lzdGVtXG4gICcvY291cnNlL3N5c3RlbS8nOiBbXG4gICAgeyB0ZXh0OiAnU3lzdGVtIExhbmd1YWdlJywgbGluazogJy9jb3Vyc2Uvc3lzdGVtLycsIH0sXG4gIF0sXG4gICcvY291cnNlL3N5c3RlbS9jLzEvJzogW1xuICAgIHtcbiAgICAgIHRleHQ6ICdMXHUxRUFEcCB0clx1MDBFQ25oIEMrKyBxdWEgMTA4IGJcdTAwRTBpIGhcdTFFQ0RjJyxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICcvY291cnNlL3N5c3RlbS9jLzEvMS5tZCcsXG4gICAgICAgICcvY291cnNlL3N5c3RlbS9jLzEvMi5tZCcsXG4gICAgICAgICcvY291cnNlL3N5c3RlbS9jLzEvMy5tZCcsXG4gICAgICAgICcvY291cnNlL3N5c3RlbS9jLzEvNC5tZCcsXG4gICAgICAgICcvY291cnNlL3N5c3RlbS9jLzEvNS5tZCcsXG4gICAgICAgICcvY291cnNlL3N5c3RlbS9jLzEvNi5tZCcsXG4gICAgICAgICcvY291cnNlL3N5c3RlbS9jLzEvNy5tZCcsXG4gICAgICAgICcvY291cnNlL3N5c3RlbS9jLzEvOC5tZCcsXG4gICAgICAgICcvY291cnNlL3N5c3RlbS9jLzEvOS5tZCcsXG4gICAgICAgICcvY291cnNlL3N5c3RlbS9jLzEvMTAubWQnLFxuICAgICAgICAnL2NvdXJzZS9zeXN0ZW0vYy8xLzExLm1kJyxcbiAgICAgIF0sXG4gICAgfSxcbiAgXSxcbiAgJy9jb3Vyc2Uvc3lzdGVtL2MvMi8nOiBbXG4gICAge1xuICAgICAgdGV4dDogJ0NcdTFFQTV1IHRyXHUwMEZBYyBkXHUxRUVGIGxpXHUxRUM3dSB2XHUwMEUwIGdpXHUxRUEzaSB0aHVcdTFFQUR0JyxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICcvY291cnNlL3N5c3RlbS9jLzIvMS5tZCcsXG4gICAgICAgICcvY291cnNlL3N5c3RlbS9jLzIvMi5tZCcsXG4gICAgICAgICcvY291cnNlL3N5c3RlbS9jLzIvMy5tZCcsXG4gICAgICAgICcvY291cnNlL3N5c3RlbS9jLzIvNC5tZCcsXG4gICAgICAgICcvY291cnNlL3N5c3RlbS9jLzIvNS5tZCcsXG4gICAgICBdLFxuICAgIH0sXG4gIF0sXG4gICcvY291cnNlL3N5c3RlbS9jLzMvJzogW1xuICAgIHtcbiAgICAgIHRleHQ6ICdMXHUxRUFEcCB0clx1MDBFQ25oIEMrKyBoXHUwMUIwXHUxRURCbmcgXHUwMTExXHUxRUQxaSB0XHUwMUIwXHUxRUUzbmcnLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgJy9jb3Vyc2Uvc3lzdGVtL2MvMy8xLm1kJyxcbiAgICAgICAgJy9jb3Vyc2Uvc3lzdGVtL2MvMy8yLm1kJyxcbiAgICAgICAgJy9jb3Vyc2Uvc3lzdGVtL2MvMy8zLm1kJyxcbiAgICAgICAgJy9jb3Vyc2Uvc3lzdGVtL2MvMy80Lm1kJyxcbiAgICAgICAgJy9jb3Vyc2Uvc3lzdGVtL2MvMy81Lm1kJyxcbiAgICAgICAgJy9jb3Vyc2Uvc3lzdGVtL2MvMy82Lm1kJyxcbiAgICAgICAgJy9jb3Vyc2Uvc3lzdGVtL2MvMy83Lm1kJyxcbiAgICAgICAgJy9jb3Vyc2Uvc3lzdGVtL2MvMy84Lm1kJyxcbiAgICAgICAgJy9jb3Vyc2Uvc3lzdGVtL2MvMy85Lm1kJyxcbiAgICAgICAgJy9jb3Vyc2Uvc3lzdGVtL2MvMy8xMC5tZCcsXG4gICAgICAgICcvY291cnNlL3N5c3RlbS9jLzMvMTEubWQnLFxuICAgICAgXSxcbiAgICB9LFxuICBdLFxuICAvLyogdGlwXG4gICcvdGlwcy8nOiBbXG4gICAge1xuICAgICAgdGV4dDogJ1RpcHMgJiBUcmFjaycsXG4gICAgICBsaW5rOiAnL3RpcHMvJyxcbiAgICB9LFxuICBdLFxuICAnL3RpcHMvYnJvd3Nlci8nOiBbJy90aXBzL2Jyb3dzZXIvZXh0ZW5zaW9uLm1kJ10sXG4gICcvdGlwcy9zeXN0ZW0vJzogWyd0aXBzL3N5c3RlbS9tYXRocGl4Lm1kJ10sXG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTBVLE9BQU8sYUFBYTtBQUM5VixTQUFTLG1CQUFtQjtBQUM1QixTQUFTLHNCQUFzQjtBQUMvQixTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHVCQUF1QjtBQUNoQyxTQUFTLDZCQUE2QjtBQUN0QyxTQUFTLGdDQUFnQztBQUN6QyxPQUE0QjtBQUM1QixTQUFTLG9CQUFvQjtBQUM3QixTQUFTLFlBQVksWUFBWTs7O0FDUDFCLElBQU0sT0FBcUI7QUFBQSxFQUNoQztBQUFBLElBQ0U7QUFBQSxJQUNBO0FBQUEsTUFDRSxLQUFLO0FBQUEsTUFDTCxNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxNQUFNO0FBQUEsSUFDUjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRTtBQUFBLElBQ0E7QUFBQSxNQUNFLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxJQUNSO0FBQUEsRUFDRjtBQUFBLEVBQ0EsQ0FBQyxRQUFRLEVBQUUsS0FBSyxZQUFZLE1BQU0sd0JBQXdCLENBQUM7QUFBQSxFQUMzRCxDQUFDLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixTQUFTLFdBQVcsQ0FBQztBQUFBLEVBQzFELENBQUMsUUFBUSxFQUFFLE1BQU0sOEJBQThCLFNBQVMsV0FBVyxDQUFDO0FBQUEsRUFDcEUsQ0FBQyxRQUFRLEVBQUUsTUFBTSx5Q0FBeUMsU0FBUyxRQUFRLENBQUM7QUFBQSxFQUM1RTtBQUFBLElBQ0U7QUFBQSxJQUNBLEVBQUUsS0FBSyxvQkFBb0IsTUFBTSxxQ0FBcUM7QUFBQSxFQUN4RTtBQUFBLEVB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QWM7QUFBQSxNQUVaLEtBQUs7QUFBQSxNQUVMLFNBQVMsQ0FBQztBQUFBLElBQ1o7QUFBQSxFQUNGLENBQUM7QUFBQSxFQUdELFVBQVU7QUFBQSxJQUNSLFlBQVk7QUFBQSxNQUNWLGtCQUFrQixDQUFDLFFBQ2pCLElBQUksUUFBUSxjQUFjLEtBQUssUUFBUSxXQUFXLGlCQUFpQixDQUFDO0FBQUEsSUFDeEU7QUFBQSxFQUNGO0FBQUEsRUFHQSxTQUFTO0FBQUEsSUFDUCxnQkFBZ0I7QUFBQSxNQUNkLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFdBQVc7QUFBQSxNQUNYLGFBQWE7QUFBQSxNQUNiLFNBQVM7QUFBQSxRQUNQLFFBQVE7QUFBQSxVQUNOLGFBQWE7QUFBQSxVQUNiLGNBQWM7QUFBQSxZQUNaLFFBQVE7QUFBQSxjQUNOLFlBQVk7QUFBQSxjQUNaLGlCQUFpQjtBQUFBLFlBQ25CO0FBQUEsWUFDQSxPQUFPO0FBQUEsY0FDTCxXQUFXO0FBQUEsZ0JBQ1Qsa0JBQWtCO0FBQUEsZ0JBQ2xCLHNCQUFzQjtBQUFBLGdCQUN0QixrQkFBa0I7QUFBQSxnQkFDbEIsdUJBQXVCO0FBQUEsY0FDekI7QUFBQSxjQUNBLGFBQWE7QUFBQSxnQkFDWCxxQkFBcUI7QUFBQSxnQkFDckIsc0JBQXNCO0FBQUEsZ0JBQ3RCLDZCQUE2QjtBQUFBLGdCQUM3QiwrQkFBK0I7QUFBQSxnQkFDL0IsdUJBQXVCO0FBQUEsZ0JBQ3ZCLGlDQUFpQztBQUFBLGNBQ25DO0FBQUEsY0FDQSxhQUFhO0FBQUEsZ0JBQ1gsV0FBVztBQUFBLGdCQUNYLFVBQVU7QUFBQSxjQUNaO0FBQUEsY0FDQSxRQUFRO0FBQUEsZ0JBQ04sWUFBWTtBQUFBLGdCQUNaLGNBQWM7QUFBQSxnQkFDZCxXQUFXO0FBQUEsZ0JBQ1gsY0FBYztBQUFBLGNBQ2hCO0FBQUEsY0FDQSxpQkFBaUI7QUFBQSxnQkFDZixlQUFlO0FBQUEsZ0JBQ2Ysb0JBQW9CO0FBQUEsZ0JBQ3BCLDBCQUEwQjtBQUFBLGdCQUMxQiw4QkFBOEI7QUFBQSxjQUNoQztBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELHNCQUFzQjtBQUFBLE1BQ3BCLElBQUk7QUFBQSxJQUNOLENBQUM7QUFBQSxJQUNELHlCQUF5QjtBQUFBLE1BQ3ZCLGVBQWUsS0FBSyxRQUFRLFdBQVcsY0FBYztBQUFBLElBQ3ZELENBQUM7QUFBQSxFQUdIO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K

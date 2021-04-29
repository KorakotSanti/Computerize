const SHOP_DATA = {
  cpu: {
    id: 1,
    title: "CPU",
    routeName: "cpu",
    items: [
      {
        id: 1,
        name: "Intel Core 2 Duo E7300",
        imageUrl:
          "https://cdna.pcpartpicker.com/static/forever/images/product/0ce96ac1818c47c739db32a18461ef4f.256p.jpg",
        price: 12,
        infoUrl:
          "https://pcpartpicker.com/product/wWsKHx/intel-cpu-eu80571ph0673m",
      },
      {
        id: 2,
        name: "AMD Athlon II X2 220",
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/11gWYQzlStL.jpg",
        price: 24.19,
        infoUrl:
          "https://pcpartpicker.com/product/CRtCmG/amd-cpu-adx220ock22gm",
      },
      {
        id: 3,
        name: "AMD 2650",
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/41zx6N7xczL.jpg",
        price: 49.89,
        infoUrl:
          "https://pcpartpicker.com/product/tLvRsY/amd-cpu-sd2650jahmbox",
      },
      {
        id: 4,
        name: "Intel Core i7-930",
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/51Gh-bnNLKL.jpg",
        price: 84.27,
        infoUrl: "https://pcpartpicker.com/product/qjMFf7/intel-cpu-bx80601930",
      },
      {
        id: 5,
        name: "Intel Core i5-3470",
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/51ywEF%2BYaiL.jpg",
        price: 122.98,
        infoUrl:
          "https://pcpartpicker.com/product/PBCwrH/intel-cpu-bx80637i53470",
      },
      {
        id: 6,
        name: "AMD Ryzen 3 3200G",
        imageUrl:
          "https://cdna.pcpartpicker.com/static/forever/images/product/3567a863156c083a7d4c8fcb7e0dbdac.256p.jpg",
        price: 128.99,
        infoUrl:
          "https://pcpartpicker.com/product/J8drxr/amd-ryzen-3-3200g-36-ghz-quad-core-processor-yd3200c5fhbox",
      },
      {
        id: 7,
        name: "AMD Ryzen 5 1600 (12nm)",
        imageUrl:
          "https://cdna.pcpartpicker.com/static/forever/images/product/2447958ccca245b5827bf05929f870e6.256p.jpg",
        price: 172.99,
        infoUrl:
          "https://pcpartpicker.com/product/8HqBD3/amd-ryzen-5-1600-12nm-32-ghz-6-core-processor-yd1600bbafbox",
      },
      {
        id: 8,
        name: "AMD Ryzen 5 2600",
        imageUrl:
          "https://cdna.pcpartpicker.com/static/forever/images/product/55aea2dd64e2e3a3e3b1d678048d8d76.256p.jpg",
        price: 185.99,
        infoUrl:
          "https://pcpartpicker.com/product/jLF48d/amd-ryzen-5-2600-34ghz-6-core-processor-yd2600bbafbox",
      },
      {
        id: 9,
        name: "AMD Ryzen 9 5950X",
        imageUrl:
          "https://cdna.pcpartpicker.com/static/forever/images/product/1d7073a2deda3bd22963a7e248bbe3e4.256p.jpg",
        price: 999,
        infoUrl:
          "https://pcpartpicker.com/product/Qk2bt6/amd-ryzen-9-5950x-34-ghz-16-core-processor-100-100000059wof",
      },
      {
        id: 10,
        name: "Intel Xeon E5-2699 V4",
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/512zWhJuLmL.jpg",
        price: 1087.01,
        infoUrl:
          "https://pcpartpicker.com/product/rd98TW/intel-cpu-cm8066002022506",
      },
      {
        id: 11,
        name: "AMD Threadripper 3960X",
        imageUrl:
          "https://cdna.pcpartpicker.com/static/forever/images/product/3ada9b0ee52763b884f3f76b681846ad.256p.jpg",
        price: 1399,
        infoUrl:
          "https://pcpartpicker.com/product/kNyqqs/amd-ryzen-9-3960x-38-ghz-24-core-processor-100-100000010wof",
      },
      {
        id: 12,
        name: "Intel Core i9-7900X",
        imageUrl:
          "https://cdna.pcpartpicker.com/static/forever/images/product/934aeb46f8ae9d26bed3d673b7c635c9.256p.jpg",
        price: 1798.95,
        infoUrl:
          "https://pcpartpicker.com/product/GmtWGX/intel-core-i9-7900x-33ghz-10-core-processor-bx80673i97900x",
      },
    ],
  },
  cpu_coolers: {
    id: 2,
    title: "CPU Coolers",
    routeName: "cpu_coolers",
    items: [
      {
        id: 13,
        name: "Cooler Master Hyper 212 EVO",
        imageUrl:
          "https://cdna.pcpartpicker.com/static/forever/images/product/ddea57de9797549e80d05fb3acb2e83d.med.256p.jpg",
        price: 31.99,
        infoUrl:
          "https://pcpartpicker.com/product/hmtCmG/cooler-master-cpu-cooler-rr212e20pkr2",
      },
      {
        id: 14,
        name: "NZXT Kraken X53",
        imageUrl:
          "https://cdna.pcpartpicker.com/static/forever/images/product/098f91f23535f45875611413e7b892d6.256p.jpg",
        price: 129.99,
        infoUrl:
          "https://pcpartpicker.com/product/PVfFf7/nzxt-kraken-x53-7311-cfm-liquid-cpu-cooler-rl-krx53-01",
      },
      {
        id: 15,
        name: "Corsair iCUE H100i ELITE CAPELLIX",
        imageUrl:
          "https://cdna.pcpartpicker.com/static/forever/images/product/3e80087537051bd56fa7650e7d61516d.256p.jpg",
        price: 137.99,
        infoUrl:
          "https://pcpartpicker.com/product/VDWBD3/corsair-icue-h100i-elite-capellix-75-cfm-liquid-cpu-cooler-cw-9060046-ww",
      },
      {
        id: 16,
        name: "be quiet! Dark Rock Pro 4",
        imageUrl:
          "https://cdna.pcpartpicker.com/static/forever/images/product/8ab57dc3c0eb346c72ef7a2405e31227.256p.jpg",
        price: 79.98,
        infoUrl:
          "https://pcpartpicker.com/product/F3gzK8/be-quiet-dark-rock-pro-4-505-cfm-cpu-cooler-bk022",
      },
      {
        id: 17,
        name: "Asus ROG STRIX LC 360 RGB White",
        imageUrl: "https://m.media-amazon.com/images/I/41KkBKEGZ7L.jpg",
        price: 251.99,
        infoUrl:
          "https://pcpartpicker.com/product/7RXYcf/asus-rog-strix-lc-360-rgb-white-8095-cfm-liquid-cpu-cooler-rog-strix-lc-360-rgb-white",
      },
      {
        id: 18,
        name: "Deepcool GAMMAXX 400 Blue",
        imageUrl:
          "https://images-fe.ssl-images-amazon.com/images/I/61ejeleLpqL.jpg",
        price: 24.99,
        infoUrl:
          "https://pcpartpicker.com/product/w3c48d/deepcool-gammaxx-400-blue-7434-cfm-cpu-cooler-deepcool-gammaxx-400-blue",
      },
      {
        id: 19,
        name: "Cooler Master Hyper 212 LED",
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/51cGorhBx9L.jpg",
        price: 34.99,
        infoUrl:
          "https://pcpartpicker.com/product/YdJkcf/cooler-master-hyper-212-led-663-cfm-rifle-bearing-cpu-cooler-rr-212l-16pr-r1",
      },
      {
        id: 20,
        name: "Cooler Master MasterLiquid ML120R RGB",
        imageUrl:
          "https://cdna.pcpartpicker.com/static/forever/images/product/3deec0e55023fbed6eef4a89cb89713c.256p.jpg",
        price: 84.99,
        infoUrl:
          "https://pcpartpicker.com/product/7tQG3C/cooler-master-masterliquid-ml120r-rgb-667-cfm-liquid-cpu-cooler-mlx-d12m-a20pc-r1",
      },
      {
        id: 21,
        name: "SilenX EFZ-100HA2",
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/51oG3SuDs4L.jpg",
        price: 14.95,
        infoUrl:
          "https://pcpartpicker.com/product/yFV48d/silenx-cpu-cooler-efz100ha2",
      },
      {
        id: 22,
        name: "Thermaltake UX200 ARGB",
        imageUrl:
          "https://cdna.pcpartpicker.com/static/forever/images/product/1d87a6d070c19217787815a75d76c8bd.256p.jpg",
        price: 39.99,
        infoUrl:
          "https://pcpartpicker.com/product/yLsnTW/thermaltake-ux200-argb-4334-cfm-cpu-cooler-cl-p065-al12sw-a",
      },
      {
        id: 23,
        name: "Cougar Helor 240",
        imageUrl:
          "https://cdna.pcpartpicker.com/static/forever/images/product/512f831f7b5f0cc7bc41aa0b3a1abc73.256p.jpg",
        price: 109.9,
        infoUrl:
          "https://pcpartpicker.com/product/kvMwrH/cougar-helor-240-784-cfm-liquid-cpu-cooler-rl-hlr240-v1",
      },
      {
        id: 24,
        name: "Alphacool Eisbaer 360",
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/41Fq37cbABL.jpg",
        price: 179.95,
        infoUrl:
          "https://pcpartpicker.com/product/fyJkcf/alphacool-eisbaer-360-6385-cfm-liquid-cpu-cooler-11286",
      },
    ],
  },
  motherboards: {
    id: 3,
    title: "Motherboard",
    routeName: "motherboards",
    items: [
      {
        id: 25,
        name: "Asus TUF GAMING X570-PLUS (WI-FI)",
        imageUrl:
          "https://cdna.pcpartpicker.com/static/forever/images/product/8d7d0435e8a2af93b5d91a1a5dccd476.256p.jpg",
        price: 192.99,
        infoUrl:
          "https://pcpartpicker.com/product/dmGnTW/asus-tuf-gaming-x570-plus-wi-fi-atx-am4-motherboard-tuf-gaming-x570-plus-wi-fi",
      },
      {
        id: 26,
        name: "ASRock B450M PRO4",
        imageUrl:
          "https://cdna.pcpartpicker.com/static/forever/images/product/8f8baff091bfd5ef531c7ddb1a602ca4.256p.jpg",
        price: 79.73,
        infoUrl:
          "https://pcpartpicker.com/product/dQgzK8/asrock-b450m-pro4-micro-atx-am4-motherboard-b450m-pro4",
      },
      {
        id: 27,
        name: "Asus ROG Strix X570-E Gaming",
        imageUrl:
          "https://cdna.pcpartpicker.com/static/forever/images/product/8edda8b2608b4fe4e5c3777f9e6df4fd.256p.jpg",
        price: 409.73,
        infoUrl:
          "https://pcpartpicker.com/product/CLkgXL/asus-rog-strix-x570-e-gaming-atx-am4-motherboard-rog-strix-x570-e-gaming",
      },
      {
        id: 28,
        name: "MSI Z390-A PRO",
        imageUrl:
          "https://cdna.pcpartpicker.com/static/forever/images/product/65d2e2e1dd6c41fe051500c6d88ffe0c.256p.jpg",
        price: 126.89,
        infoUrl:
          "https://pcpartpicker.com/product/qpL48d/msi-z390-a-pro-atx-lga1151-motherboard-z390-a-pro",
      },
      {
        id: 29,
        name: "MSI MPG B550 GAMING EDGE WIFI",
        imageUrl:
          "https://cdna.pcpartpicker.com/static/forever/images/product/e1677ccd8b20b24c91fd17885a1b8b8a.256p.jpg",
        price: 179.98,
        infoUrl:
          "https://pcpartpicker.com/product/2f4BD3/msi-mpg-b550-gaming-edge-wifi-atx-am4-motherboard-mpg-b550-gaming-edge-wifi",
      },
      {
        id: 30,
        name: "Asus ROG Crosshair VIII Hero (WI-FI)",
        imageUrl:
          "https://cdna.pcpartpicker.com/static/forever/images/product/9b0c678ccf7522e6ad454d3976a2e174.256p.jpg",
        price: 584.64,
        infoUrl:
          "https://pcpartpicker.com/product/GcfFf7/asus-rog-crosshair-viii-hero-wi-fi-atx-am4-motherboard-rog-crosshair-viii-hero-wi-fi",
      },
      {
        id: 31,
        name: "Asus ROG STRIX B550-E GAMING",
        imageUrl:
          "https://cdna.pcpartpicker.com/static/forever/images/product/dab44f4f8369d56dbaa568de8a99700b.256p.jpg",
        price: 252.99,
        infoUrl:
          "https://pcpartpicker.com/product/PDyqqs/asus-rog-strix-b550-e-gaming-atx-am4-motherboard-rog-strix-b550-e-gaming",
      },
      {
        id: 32,
        name: "MSI B450 GAMING PRO CARBON MAX WIFI",
        imageUrl:
          "https://cdna.pcpartpicker.com/static/forever/images/product/1c29c33ad7631dd0359bd93b0a7a447e.256p.jpg",
        price: 139.44,
        infoUrl:
          "https://pcpartpicker.com/product/mcjNnQ/msi-b450-gaming-pro-carbon-max-wifi-atx-am4-motherboard-b450-gaming-pro-carbon-max-wifi",
      },
      {
        id: 33,
        name: "Asus TUF Gaming Z590-PLUS WIFI",
        imageUrl:
          "https://cdna.pcpartpicker.com/static/forever/images/product/1796254752a632d703fb5659e1647668.256p.jpg",
        price: 239.99,
        infoUrl:
          "https://pcpartpicker.com/product/hD8bt6/asus-tuf-gaming-z590-plus-wifi-atx-lga1200-motherboard-tuf-gaming-z590-plus-wifi",
      },
      {
        id: 34,
        name: "Asus ROG ZENITH II EXTREME ALPHA",
        imageUrl: "https://m.media-amazon.com/images/I/41CIKTk-vOL.jpg",
        price: 870.99,
        infoUrl:
          "https://pcpartpicker.com/product/zcyqqs/asus-rog-zenith-ii-extreme-alpha-eatx-strx4-motherboard-rog-zenith-ii-extreme-alpha",
      },
      {
        id: 35,
        name: "Gigabyte Z490 VISION G",
        imageUrl:
          "https://cdna.pcpartpicker.com/static/forever/images/product/3a190c962f8bedfd2ae4c99facbb67bc.256p.jpg",
        price: 269.99,
        infoUrl:
          "https://pcpartpicker.com/product/qRhmP6/gigabyte-z490-vision-g-atx-lga1200-motherboard-z490-vision-g",
      },
      {
        id: 36,
        name: "MSI B450 TOMAHAWK",
        imageUrl:
          "https://cdna.pcpartpicker.com/static/forever/images/product/8ba566ff15c0bdf7435a68cc0e5152fa.256p.jpg",
        price: 139.0,
        infoUrl:
          "https://pcpartpicker.com/product/Hy97YJ/msi-b450-tomahawk-atx-am4-motherboard-b450-tomahawk",
      },
    ],
  },
  rams: {
    id: 4,
    title: "RAM",
    routeName: "rams",
    items: [
      {
        id: 37,
        name: "Corsair Vengeance LPX 16 GB",
        imageUrl:
          "https://cdna.pcpartpicker.com/static/forever/images/product/835ab3efad1be13bbe53beef3e3c6f96.256p.jpg",
        price: 92.99,
        infoUrl:
          "https://pcpartpicker.com/product/p6RFf7/corsair-memory-cmk16gx4m2b3200c16",
      },
      {
        id: 38,
        name: "Corsair Vengeance RGB Pro 16 GB",
        imageUrl:
          "https://cdna.pcpartpicker.com/static/forever/images/product/58ab1663c77627cbf3effd27df57aa92.256p.jpg",
        price: 104.99,
        infoUrl:
          "https://pcpartpicker.com/product/vfDJ7P/corsair-vengeance-rgb-pro-16gb-2-x-8gb-ddr4-3200-memory-cmw16gx4m2c3200c16w",
      },
      {
        id: 39,
        name: "Corsair Vengeance RGB Pro 16 GB",
        imageUrl:
          "https://cdna.pcpartpicker.com/static/forever/images/product/2acf8a36c3350a47689e36ee924c80f7.256p.jpg",
        price: 109.99,
        infoUrl:
          "https://pcpartpicker.com/product/XWGnTW/corsair-vengeance-rgb-pro-16-gb-2-x-8-gb-ddr4-3600-memory-cmw16gx4m2d3600c18",
      },
      {
        id: 40,
        name: "G.Skill Trident Z RGB 32 GB",
        imageUrl: "https://m.media-amazon.com/images/I/419N-fz9syL.jpg",
        price: 219.99,
        infoUrl:
          "https://pcpartpicker.com/product/jxH8TW/gskill-trident-z-rgb-32-gb-2-x-16-gb-ddr4-3600-memory-f4-3600c16d-32gtzrc",
      },
      {
        id: 41,
        name: "G.Skill Trident Z Neo 16 GB",
        imageUrl:
          "https://cdna.pcpartpicker.com/static/forever/images/product/d62078e82b57dca6362b1485f39e1064.256p.jpg",
        price: 139.99,
        infoUrl:
          "https://pcpartpicker.com/product/JgLwrH/gskill-trident-z-neo-16-gb-2-x-8-gb-ddr4-3600-cl16-memory-f4-3600c16d-16gtznc",
      },
      {
        id: 42,
        name: "Patriot Viper Steel 16 GB",
        imageUrl:
          "https://cdna.pcpartpicker.com/static/forever/images/product/a6d150a1a9e9ad94874551eee42573e4.256p.jpg",
        price: 97.99,
        infoUrl:
          "https://pcpartpicker.com/product/mCHRsY/patriot-viper-steel-16-gb-2-x-8-gb-ddr4-3200-cl16-memory-pvs416g320c6k",
      },
      {
        id: 43,
        name: "ADATA XPG SPECTRIX D60G 16 GB",
        imageUrl:
          "https://cdna.pcpartpicker.com/static/forever/images/product/a881e3433b353661a219670b7aa8fc1d.256p.jpg",
        price: 104.98,
        infoUrl:
          "https://pcpartpicker.com/product/Hsxbt6/adata-xpg-spectrix-d60g-16-gb-2-x-8-gb-ddr4-3200-memory-ax4u320038g16a-dt60",
      },
      {
        id: 44,
        name: "Kingston HyperX Fury 16 GB",
        imageUrl:
          "https://cdna.pcpartpicker.com/static/forever/images/product/f1ffc4c40a82b7b15bbb8bdb73c8157f.256p.jpg",
        price: 89.99,
        infoUrl:
          "https://pcpartpicker.com/product/7YkgXL/kingston-hyperx-fury-16-gb-2-x-8-gb-ddr4-2666-cl16-memory-hx426c16fb3k216",
      },
    ],
  },
  storages: {
    id: 5,
    title: "Storage",
    routeName: "storages",
    items: [
      {
        id: 45,
        name: "Seagate Barracuda Compute",
        imageUrl:
          "https://cdna.pcpartpicker.com/static/forever/images/product/c7b5b7dacbecdcdd0e073b761193eef6.256p.jpg",
        price: 52.99,
        infoUrl:
          "https://pcpartpicker.com/product/mwrYcf/seagate-barracuda-computer-2-tb-35-7200rpm-internal-hard-drive-st2000dm008",
      },
      {
        id: 46,
        name: "Samsung 970 Evo",
        imageUrl:
          "https://cdna.pcpartpicker.com/static/forever/images/product/09a31f32abb3daaf5ed9b849bd60e675.256p.jpg",
        price: 345.2,
        infoUrl:
          "https://pcpartpicker.com/product/JLdxFT/samsung-970-evo-10tb-m2-2280-solid-state-drive-mz-v7e1t0baw",
      },
      {
        id: 47,
        name: "Samsung 860 Evo",
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/41qR7C253KL.jpg",
        price: 109.99,
        infoUrl:
          "https://pcpartpicker.com/product/yzfhP6/samsung-860-evo-1tb-25-solid-state-drive-mz-76e1t0bam",
      },
      {
        id: 48,
        name: "Western Digital Caviar Blue",
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/51fbLQLVJFL.jpg",
        price: 44.99,
        infoUrl:
          "https://pcpartpicker.com/product/MwW9TW/western-digital-internal-hard-drive-wd10ezex",
      },
      {
        id: 49,
        name: "Samsung 980 Pro",
        imageUrl: "https://m.media-amazon.com/images/I/3103WN6Es-L.jpg",
        price: 199.99,
        infoUrl:
          "https://pcpartpicker.com/product/DDWBD3/samsung-980-pro-1-tb-m2-2280-nvme-solid-state-drive-mz-v8p1t0bam",
      },
      {
        id: 50,
        name: "Western Digital Blue SN550",
        imageUrl:
          "https://cdna.pcpartpicker.com/static/forever/images/product/73be90b182cdb68fe899775fb8fa56ed.256p.jpg",
        price: 59.99,
        infoUrl:
          "https://pcpartpicker.com/product/zFK2FT/western-digital-blue-sn550-500-gb-m2-2280-nvme-solid-state-drive-wds500g2b0c",
      },
      {
        id: 51,
        name: "Western Digital SN750",
        imageUrl:
          "https://cdna.pcpartpicker.com/static/forever/images/product/0e711f3edb98f9680cc528271201d8d2.256p.jpg",
        price: 144.99,
        infoUrl:
          "https://pcpartpicker.com/product/QQrmP6/western-digital-sn750-1-tb-m2-2280-solid-state-drive-wds100t3x0c",
      },
      {
        id: 52,
        name: "Crucial P2",
        imageUrl:
          "https://cdna.pcpartpicker.com/static/forever/images/product/50d7356e9199580f1c35e7b8f01232ab.256p.jpg",
        price: 57.99,
        infoUrl:
          "https://pcpartpicker.com/product/G9XYcf/crucial-p2-500-gb-m2-2280-nvme-solid-state-drive-ct500p2ssd8",
      },
      {
        id: 53,
        name: "Sabrent Rocket Q",
        imageUrl: "https://m.media-amazon.com/images/I/41bVN1EMxFL.jpg",
        price: 1299.99,
        infoUrl:
          "https://pcpartpicker.com/product/qdPgXL/sabrent-rocket-q-8-tb-m2-2280-nvme-solid-state-drive-sb-rktq-8tb",
      },
      {
        id: 54,
        name: "Western Digital Gold",
        imageUrl: "https://m.media-amazon.com/images/I/41jtQIysWQL.jpg",
        price: 584.99,
        infoUrl:
          "https://pcpartpicker.com/product/qy2bt6/western-digital-gold-18-tb-35-7200rpm-internal-hard-drive-wd181kryz",
      },
      {
        id: 55,
        name: "Western Digital Black SN850",
        imageUrl:
          "https://cdna.pcpartpicker.com/static/forever/images/product/67ae19fe7847cb5bf67f4448e717e831.256p.jpg",
        price: 174.99,
        infoUrl:
          "https://pcpartpicker.com/product/W69tt6/western-digital-black-sn850-1-tb-m2-2280-nvme-solid-state-drive-wds100t1x0e",
      },
      {
        id: 56,
        name: "Western Digital Black",
        imageUrl:
          "https://cdna.pcpartpicker.com/static/forever/images/product/dc58ee9ce6cab5a48b663ca2eee20420.256p.jpg",
        price: 149.99,
        infoUrl:
          "https://pcpartpicker.com/product/dGHRsY/western-digital-black-4tb-35-7200rpm-internal-hard-drive-wd4005fzbx",
      },
    ],
  },
  video_card: {
    id: 6,
    title: "Video Card",
    routeName: "video_card",
    items: [
      {
        id: 57,
        name: "EVGA XC GAMING",
        imageUrl:
          "https://cdna.pcpartpicker.com/static/forever/images/product/151ff6807255631462c79ece5906e45f.256p.jpg",
        price: 1099.99,
        infoUrl:
          "https://pcpartpicker.com/product/LpbTwP/evga-geforce-rtx-3060-12-gb-xc-gaming-video-card-12g-p5-3657-kr",
      },
      {
        id: 58,
        name: "EVGA FTW3 ULTRA GAMING",
        imageUrl:
          "https://cdna.pcpartpicker.com/static/forever/images/product/6842890b8aabc12888a1b4d9c5fc7d9a.256p.jpg",
        price: 3199.0,
        infoUrl:
          "https://pcpartpicker.com/product/PG848d/evga-geforce-rtx-3090-24-gb-ftw3-ultra-gaming-video-card-24g-p5-3987-kr",
      },
      {
        id: 59,
        name: "MSI VENTUS XS OC",
        imageUrl:
          "https://cdna.pcpartpicker.com/static/forever/images/product/9c57e7f04b05270bcf7edb9fcf4c715c.256p.jpg",
        price: 790.0,
        infoUrl:
          "https://pcpartpicker.com/product/Z3wkcf/msi-geforce-gtx-1660-super-6-gb-ventus-xs-oc-video-card-gtx-1660-super-ventus-xs-oc",
      },
      {
        id: 60,
        name: "MSI GAMING X",
        imageUrl:
          "https://cdna.pcpartpicker.com/static/forever/images/product/1f14312711fd98528c52385a0d9a7d5a.256p.jpg",
        price: 738.0,
        infoUrl:
          "https://pcpartpicker.com/product/YC848d/msi-geforce-gtx-1660-super-6-gb-gaming-x-video-card-gtx-1660-super-gaming-x",
      },
      {
        id: 61,
        name: "Zotac GAMING Twin Fan",
        imageUrl: "https://m.media-amazon.com/images/I/31UkjhcIiEL.jpg",
        price: 640.49,
        infoUrl:
          "https://pcpartpicker.com/product/y2xbt6/zotac-geforce-gtx-1660-super-6-gb-twin-fan-video-card-zt-t16620f-10l",
      },
      {
        id: 62,
        name: "EVGA SC ULTRA GAMING",
        imageUrl:
          "https://cdna.pcpartpicker.com/static/forever/images/product/50af1d4d41843ea4c143fff3dfbdf33b.256p.jpg",
        price: 569.79,
        infoUrl:
          "https://pcpartpicker.com/product/LBrYcf/evga-geforce-gtx-1650-super-4-gb-sc-ultra-gaming-video-card-04g-p4-1357-kr",
      },
      {
        id: 63,
        name: "PowerColor Red Dragon",
        imageUrl: "https://m.media-amazon.com/images/I/41fqjXZk9tL.jpg",
        price: 209.95,
        infoUrl:
          "https://pcpartpicker.com/product/CH6qqs/powercolor-radeon-rx-550-512-4-gb-red-dragon-video-card-axrx-550-4gbd5-dh",
      },
      {
        id: 64,
        name: "ASRock Phantom Gaming D",
        imageUrl:
          "https://cdna.pcpartpicker.com/static/forever/images/product/3edf9bcd4100fa82f56de5fc6c649b1b.256p.jpg",
        price: 429.88,
        infoUrl:
          "https://pcpartpicker.com/product/sWL48d/asrock-radeon-rx-570-4-tb-phantom-gaming-d-video-card-phantom-rx570-gdr-4g",
      },
    ],
  },
  cases: {
    id: 7,
    title: "Case",
    routeName: "cases",
    items: [
      {
        id: 65,
        name: "NZXT H510",
        imageUrl:
          "https://cdna.pcpartpicker.com/static/forever/images/product/604fef5ac9874dffa927a3db98c1188d.256p.jpg",
        price: 69.98,
        infoUrl:
          "https://pcpartpicker.com/product/6Cyqqs/nzxt-h510-atx-mid-tower-case-ca-h510b-w1",
      },
      {
        id: 66,
        name: "Corsair 4000D Airflow",
        imageUrl:
          "https://cdna.pcpartpicker.com/static/forever/images/product/bc6e987da3fe22c616898d1d7fa3d227.256p.jpg",
        price: 94.99,
        infoUrl:
          "https://pcpartpicker.com/product/bCYQzy/corsair-4000d-airflow-atx-mid-tower-case-cc-9011200-ww",
      },
      {
        id: 67,
        name: "Corsair 275R Airflow",
        imageUrl:
          "https://cdna.pcpartpicker.com/static/forever/images/product/d931138ef265c1951fcd54781c390741.256p.jpg",
        price: 79.98,
        infoUrl:
          "https://pcpartpicker.com/product/sY9tt6/corsair-275r-airflow-atx-mid-tower-case-cc-9011181-ww",
      },
      {
        id: 68,
        name: "Phanteks Eclipse P300A Mesh",
        imageUrl:
          "https://cdna.pcpartpicker.com/static/forever/images/product/7c9e187b65ab4b281bc2ca0fe41a9aa7.256p.jpg",
        price: 59.99,
        infoUrl:
          "https://pcpartpicker.com/product/crqBD3/phanteks-eclipse-p300a-mesh-atx-mid-tower-case-ph-ec300atg_bk01",
      },
      {
        id: 69,
        name: "Phanteks Eclipse P400A Digital",
        imageUrl:
          "https://cdna.pcpartpicker.com/static/forever/images/product/b11dd409015fa37679b6a1bbcafa278f.256p.jpg",
        price: 87.0,
        infoUrl:
          "https://pcpartpicker.com/product/QdXYcf/phanteks-eclipse-p400a-digital-atx-mid-tower-case-ph-ec400atg_dbk",
      },
      {
        id: 70,
        name: "Lian Li PC-O11 Dynamic",
        imageUrl:
          "https://cdna.pcpartpicker.com/static/forever/images/product/580387945cfb3fe6bac9ef5844c2b55f.256p.jpg",
        price: 159.99,
        infoUrl:
          "https://pcpartpicker.com/product/VxRzK8/lian-li-pc-o11dw-atx-full-tower-case-pc-o11dw",
      },
      {
        id: 71,
        name: "Fractal Design Meshify C",
        imageUrl:
          "https://cdna.pcpartpicker.com/static/forever/images/product/5e077c6b1272ca2c11e4f7df6326370a.256p.jpg",
        price: 97.89,
        infoUrl:
          "https://pcpartpicker.com/product/Y6Crxr/fractal-design-meshify-c-atx-mid-tower-case-fd-ca-mesh-c-bko-tg",
      },
      {
        id: 72,
        name: "Corsair iCUE 4000X RGB",
        imageUrl:
          "https://cdna.pcpartpicker.com/static/forever/images/product/0610d363ccccf52837f07d811e4eb2a3.256p.jpg",
        price: 134.99,
        infoUrl:
          "https://pcpartpicker.com/product/6qFKHx/corsair-icue-4000x-rgb-atx-mid-tower-case-cc-9011204-ww",
      },
      {
        id: 73,
        name: "Cooler Master MasterBox Q300L",
        imageUrl:
          "https://cdna.pcpartpicker.com/static/forever/images/product/ec48e16ee4d6629045cfc4d71c649746.256p.jpg",
        price: 48.49,
        infoUrl:
          "https://pcpartpicker.com/product/rnGxFT/cooler-master-masterbox-q300l-microatx-mini-tower-case-mcb-q300l-kann-s00",
      },
    ],
  },
  power_supply: {
    id: 8,
    title: "Power Supply",
    routeName: "power_supply",
    items: [
      {
        id: 74,
        name: "Corsair RM (2019)",
        imageUrl:
          "https://cdna.pcpartpicker.com/static/forever/images/product/02951377c9eed1e21fc3d8ba6092717e.256p.jpg",
        price: 124.99,
        infoUrl:
          "https://pcpartpicker.com/product/6Y66Mp/corsair-rm-2019-750-w-80-gold-certified-fully-modular-atx-power-supply-cp-9020195-na",
      },
      {
        id: 75,
        name: "EVGA BQ",
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/512voawCsuL.jpg",
        price: 61.71,
        infoUrl:
          "https://pcpartpicker.com/product/DmWrxr/evga-bq-600w-80-bronze-certified-semi-modular-atx-power-supply-110-bq-0600-k1",
      },
      {
        id: 76,
        name: "Corsair CXM",
        imageUrl:
          "https://cdna.pcpartpicker.com/static/forever/images/product/097e4a536e42595ca4c7ded7f7739bd4.256p.jpg",
        price: 84.99,
        infoUrl:
          "https://pcpartpicker.com/product/R2mxFT/corsair-power-supply-cp9020103na",
      },
      {
        id: 77,
        name: "EVGA SuperNOVA GA",
        imageUrl: "https://m.media-amazon.com/images/I/51QtNc5IZVL.jpg",
        price: 99.98,
        infoUrl:
          "https://pcpartpicker.com/product/Xsn8TW/evga-supernova-ga-650-w-80-gold-certified-fully-modular-atx-power-supply-220-ga-0650-x1",
      },
      {
        id: 78,
        name: "Gigabyte P GM",
        imageUrl:
          "https://cdna.pcpartpicker.com/static/forever/images/product/496145221d9d61487802823b7d03b98d.256p.jpg",
        price: 119.99,
        infoUrl:
          "https://pcpartpicker.com/product/RhH8TW/gigabyte-750-w-80-gold-certified-fully-modular-atx-power-supply-gp-p750gm",
      },
      {
        id: 79,
        name: "Corsair HX Platinum",
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/51QvmULw-VL.jpg",
        price: 376.0,
        infoUrl:
          "https://pcpartpicker.com/product/nQJkcf/corsair-hx-platinum-1000w-80-platinum-certified-fully-modular-atx-power-supply-cp-9020139-na",
      },
      {
        id: 80,
        name: "Corsair SF",
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/41XA%2BO8OFNL.jpg",
        price: 184.99,
        infoUrl:
          "https://pcpartpicker.com/product/nJrmP6/corsair-750-w-80-platinum-certified-fully-modular-sfx-power-supply-cp-9020186-na",
      },
      {
        id: 81,
        name: "NZXT C",
        imageUrl:
          "https://cdna.pcpartpicker.com/static/forever/images/product/cd4625cbc62ddc42dd7818032da24d6f.256p.jpg",
        price: 129.99,
        infoUrl:
          "https://pcpartpicker.com/product/hrqBD3/nzxt-c-850-w-80-gold-certified-fully-modular-atx-power-supply-np-c850m-us",
      },
      {
        id: 82,
        name: "SeaSonic FOCUS Plus Gold",
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/41eNLwVUFoL.jpg",
        price: 101.67,
        infoUrl:
          "https://pcpartpicker.com/product/WrNypg/seasonic-focus-plus-gold-650w-80-gold-certified-fully-modular-atx-power-supply-ssr-650fx",
      },
      {
        id: 83,
        name: "EVGA SuperNOVA GM",
        imageUrl:
          "https://cdna.pcpartpicker.com/static/forever/images/product/72d94e57cdd11623fd1696e8ee343952.256p.jpg",
        price: 99.99,
        infoUrl: "",
      },
      {
        id: 84,
        name: "Corsair TXM Gold",
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/41QTtqXKzqL.jpg",
        price: 109.98,
        infoUrl:
          "https://pcpartpicker.com/product/PVzZxr/corsair-txm-gold-650w-80-gold-certified-semi-modular-atx-power-supply-cp-9020132-na",
      },
    ],
  },
};

export default SHOP_DATA;

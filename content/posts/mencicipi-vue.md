---
title: "Mencicipi Vue"
date: 2020-12-10T20:49:04Z
draft: true
description: Cara mudah membuat UI website
tags:
  - frontend
---

Aku tertarik sama Vue ini karena sintaksnya mirip sama Angular JS. Aku pernah nyoba sekilas sih Angular JS. Dan memang enak buatnya karena ada magic-magic di HTML yang akan kita olah di bagian JavaScript-nya. Hal ini berbeda dengan React yang full JavaScript. Tapi, memang lebih enak Svelte sih. Nah, enaknya Vue ini adalah tersedia versi CDN-nya atau static file-nya. Sehingga, kalau kita nggak mau pakai NPM, kita bisa mencobanya.

Dan kali ini kita memang akan mencoba versi static file-nya.

Pertama, kita buat `index.html` dan diisi dengan sintaks dasar HTML:

```html
<!DOCTYPE HTML>
<html>
 <head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
 </head>
 <body>
  
 </body>
</html>
```

Maka, kita akan melihat sebuah halaman kosong karena memang belum diisi. Heheheh..

Sekarang, kita masukkan script untuk menjalankan Vue. Nah, kita download aja Vue-nya:

```bash
wget https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.min.js
```

Kemudian, kita masukkan kode berikut di antara `<head>` dan `</head>`:

```html
<script src="/vue.min.js"></script>
```

Kemudian, kita akan membuat Hello World versi Vue. Nah, masukkan kode berikut di antara `<body>` dan `</body>`:
---
title: "Membuat File HTML, CSS, dan JS, Lalu Menguploadnya ke Internet"
date: 2020-12-14T12:15:26+08:00
draft: false
description: Cara cepat upload website 
tags:
  - frontend
---

Halo kawan-kawan programmer... Ketemu lagi nih sama aku, Zen, yang akan berbagi pengetahuan seputar pemrograman. Karena tadi di Telegram, Bang Ian ada ngasih screenshot pakai Surge, aku pun penasaran dan ikut mencoba menggunakan Surge. Nah, Surge ini apa sih?

Surge, bukan Surga ya...

Jadi, Surge itu semacam penyimpanan HTML, CSS, dan JS, tapi yang merupakan keunggulannya adalah kita nggak perlu meninggalkan Terminal (kalau di Windows, namanya Command Prompt). Tentu ini berbeda dengan Github yang membuat kita perlu membuka github.com atau Vercel yang membuat kita perlu membuka vercel.com untuk integrasi dengan Git. Sebenarnya bisa aja sih Vercel pakai CLI. Tapi aku belum ada nyoba. Nanti mungkin kapan-kapan akan aku coba.

Nah, kalau kita mencoba menggunakan Surge ini, akan kelihatan banget deh bagaimana simpelnya dalam menggunakan Surge ini. Jadi, kita langsung _kotorin tangan_ aja yok.

Kita buat dulu deh file `index.html` yang merupakan halaman pertama yang akan dilihat pengunjung saat datang ke website Surge kita. Nah, untuk permulaan ini, kita buat yang sederhana dulu aja. Anggap aja semacam Hello World-nya website lah. Atau mungkin juga bisa dibilang sebagai halaman portfolio kita. Hehehehehe.. (baru mulai juga, udah begayaan). Nah, isinya kayak gini:

```html
<!DOCTYPE html>
<html>
<head>
	<title>Coba Pakai Surge</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body>
	<div class="container">
		<br>
		<h1 class="text-center">Hello World</h1>
		<hr>
		<p>Ini adalah blog yang kubuat pakai Bootstrap</p>
	</div>
</body>
</html>
```

Di situ, aku pakai Bootstrap versi 4 yang saat ini merupakai versi stable yang paling baru. Jadi, aku belum pakai versi 5 karena masih alpha atau sudah beta (aku nggak update infonya). Nah, di situ, tag HTML yang paling penting adalah:

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

Karena tag itu yang menentukan apakah website kita responsive juga jika dibuka di layar kecil seperti layar HP. Jadi, itu tag HTML yang wajib ada ya. Oh iya, script Bootstrapnya aku ambil dengan kode berikut ini:

```html
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
```

Kenapa nggak langsung download aja Bootstrapnya terus dipanggil dengan kode:

```html
<link rel="stylesheet" href="bootstrap.min.css">
```

Ya males aja sih. Hehehehe...

Kemudian, untuk isi dari `body`, kelihatan banget aku menggunakan kode-kode Bootstrap:

```html
<div class="container">
	<br>
	<h1 class="text-center">Hello World</h1>
	<hr>
	<p>Ini adalah blog yang kubuat pakai Bootstrap</p>
</div>
```

Untuk lebih nyaman dalam mengetik kode website, aku menggunakan text editor. Dan menurutku, yang paling ringan itu Sublime Text Editor. Kemudian, aku mengaktifkan package `Bootstrap 4`

Jadinya kayak gini:

![Screenshot website](https://i.postimg.cc/qqmpv5MS/image.png)

Lalu, kita buat file bernama `CNAME` yang isinya:

```
pakai-surge.surge.sh
```

Kita install Surge:

```bash
npm i -g surge --prefer-offline
```

Di folder tempat kita meletakkan file HTML itu, jalankan perintah:

```bash
surge ./
```

Oh iya, kalau kamu baru pertama pakai Surge di laptop atau di HP saat ini, nanti diminta email dan password untuk mendaftar atau login ke Surge. Nah, jadinya kayak gini:

```

   Welcome to surge! (surge.sh)
   Login (or create surge account) by entering email & password.

          email: muhzaini30@gmail.com
       password:

   Running as muhzaini30@gmail.com (Student)

        project: ./
         domain: pakai-surge.surge.sh
         upload: [====================] 100% eta: 0.0s (2 files, 579 bytes)
            CDN: [====================] 100%
     encryption: *.surge.sh, surge.sh (131 days)
             IP: 138.197.235.123

   Success! - Published to pakai-surge.surge.sh

```

Sudah. Dalam hitungan detik aja itu, website kita sudah terupload (kalau isinya baru sedikit sih. Hehehehe...). Sekarang, kamu bisa lihat hasilnya di https://pakai-surge.surge.sh/.

Untuk melihat semua domain Surge yang kita gunakan, cukup ketikkan perintah:

```bash
surge list
```

Hasilnya:

```

   160***0993*** pakai-surge.surge.sh   12 minutes ago   surge   surge.sh   Standard

```

Baru satu eh. Baru buat untuk tutorial ini. Hehehehe...
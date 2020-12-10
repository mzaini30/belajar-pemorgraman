---
title: "Deteksi Jumlah Kata Di Editor Blogspot"
date: 2020-12-10T19:53:27+08:00
draft: false
description: Fitur yang sangat bermanfaat bagi blogger yang berfokus pada SEO
tags:
  - blogspot
---

Buka dashboard Blogspot, terus klik `Buat Postingan Baru`, atau bisa juga klik postingan yang mau diedit. Maka, akan muncul tampilan editor postingan baru yang sudah familiar:

![Tampilan editor Blogspot](https://i.postimg.cc/Z5CJg3jL/Screenshot-2020-12-10-19-56-20.png)

Kemudian, **reload** halaman.

Terus, pencet `Ctrl` `Shift` `i`. Maka, akan muncul DevTools:

![DevTools di browser](https://i.postimg.cc/76D8xT1d/Screenshot-2020-12-10-19-58-51.png)

Itu munculnya di bagian bawah ya.

Klik `Console`:

![Ini loh Console](https://i.postimg.cc/9fkbb30p/Screenshot-2020-12-10-19-58-51.png)

Masukkan kode berikut ini ke situ:

```javascript
function tampilKata(){
	let banyak = document.querySelector('iframe.editable').contentDocument.body.innerText.split(' ').length
	banyak = banyak.toLocaleString('id')
	document.title = `${banyak} kata`
}
tampilKata()
document.querySelector('iframe.editable').contentDocument.body.addEventListener('keyup', () => {
	tampilKata()
})
```

![Dimasukkan di sini](https://i.postimg.cc/J4KbKwdk/Screenshot-2020-12-10-20-04-51.png)

Pencet `Enter`.

Kalau sudah, kamu bisa menyembunyikan lagi DevTools-nya dengan cara pencet tanda silang di kanan atas DevTools, atau bisa juga dengan memencet `Ctrl` `Shift` `i`.

Nah sekarang, kamu bisa melihat hasilnya di tab browser:

![Hasilnya di tab browser](https://i.postimg.cc/cHRSGBVV/Screenshot-2020-12-10-20-17-18.png)